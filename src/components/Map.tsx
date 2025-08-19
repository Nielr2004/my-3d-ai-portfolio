import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <Card className="bg-gradient-card border-border overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-primary">
          <MapPin className="h-5 w-5" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full h-48">
          <iframe
            className="w-full h-full transition-all duration-300 filter grayscale-[80%] dark:invert dark:grayscale-[90%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57947.8429938555!2d92.76686035136717!3d24.811991300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb632157b%3A0x1452a269355796a2!2sSilchar%2C%20Assam%2C%20India!5e0!3m2!1sen!2sus!4v1724081829334!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default Map;
