import { Progress } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

interface SlidingLoaderProps {
  loading: boolean;
  className?: string;
}

export const SlidingLoader: React.FC<SlidingLoaderProps> = ({
  loading,
  className,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setProgress(57), 2100);
      return () => clearTimeout(timer);
    } else {
      setProgress(100);
    }
  }, [loading]);

  React.useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setProgress(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-1 transition-opacity duration-300",
        loading ? "opacity-100" : "opacity-0",
        className,
      )}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <Progress
        value={progress}
        className="h-full rounded-none bg-transparent"
      />
    </div>
  );
};
