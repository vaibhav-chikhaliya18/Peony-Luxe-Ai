import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * Reusable VideoPlayer component for previews and showreels
 */
export default function VideoPlayer({
  poster,
  src,
  title = 'Video Player',
  className = '',
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-surface-elevated border border-border-brand ${className}`}>
      {src ? (
        <video
          src={src}
          poster={poster}
          controls={isPlaying}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : (
        <div className="w-full aspect-video flex flex-col items-center justify-center p-8 bg-gradient-to-br from-surface to-surface-elevated text-center">
          <div className="w-16 h-16 rounded-full bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center text-text-primary mb-4 shadow-lg shadow-brand-violet/20">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
          <p className="text-sm font-heading font-medium text-text-primary">{title}</p>
          <p className="text-xs text-text-muted mt-1">Video placeholder</p>
        </div>
      )}
    </div>
  );
}
