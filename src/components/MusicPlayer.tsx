import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause, Music, SkipBack, SkipForward } from 'lucide-react';

// --- IMPORTANT ---
// 1. Add your song files to the `src/assets` folder.
// 2. Update the playlist array below with your songs.
import track1 from '@/assets/inner_glow.mp3';
// import track2 from '@/assets/another-song.mp3';

const playlist = [
  { src: track1, title: 'Inner Glow', artist: 'Lofi Beats' },
  // { src: track2, title: 'Another Vibe', artist: 'DJ Dev' },
];

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number>();

  const setupAudioContext = () => {
    if (audioRef.current && !audioContextRef.current) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audioRef.current);

      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      sourceRef.current = source;
    }
  };

  const drawVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    if (ctx) {
      analyser.getByteTimeDomainData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFF1FA'; // A lighter, softer pink
      ctx.beginPath();

      const sliceWidth = canvas.width * 1.0 / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * canvas.height / 2;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }

    animationFrameRef.current = requestAnimationFrame(drawVisualizer);
  };

  const handlePlayPause = () => {
    if (!audioContextRef.current) setupAudioContext();
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioContextRef.current?.resume().then(() => {
            audioRef.current?.play();
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handlePrevTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.src = playlist[trackIndex].src;
        if (isPlaying) {
            audioRef.current.play();
        }
    }
  }, [trackIndex]);
  
  useEffect(() => {
    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(drawVisualizer);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <audio 
        ref={audioRef} 
        onEnded={handleNextTrack} 
        crossOrigin="anonymous" 
      />
      
      <motion.div
        className="fixed bottom-20 left-4 sm:left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="default"
          size="icon"
          className="w-14 h-14 rounded-full shadow-playful animate-bounce-light"
        >
          <Music className="h-6 w-6" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-36 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] sm:w-72"
          >
            <div className="bg-background/80 backdrop-blur-lg border-border rounded-lg shadow-card p-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-playful rounded-md flex items-center justify-center overflow-hidden">
                   <canvas ref={canvasRef} width="64" height="64" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-bold text-sm truncate">{playlist[trackIndex].title}</p>
                  <p className="text-xs text-muted-foreground truncate">{playlist[trackIndex].artist}</p>
                </div>
              </div>
              <div className="flex items-center justify-around">
                <Button onClick={handlePrevTrack} variant="ghost" size="icon" className="w-10 h-10 rounded-full">
                    <SkipBack className="h-5 w-5" />
                </Button>
                <Button onClick={handlePlayPause} variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/20">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button onClick={handleNextTrack} variant="ghost" size="icon" className="w-10 h-10 rounded-full">
                    <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
