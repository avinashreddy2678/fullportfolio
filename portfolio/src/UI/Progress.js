// Import React and Progress from @radix-ui/react-progress
import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../libs/utils";

const Progress = React.forwardRef(
  function ({ className, value, ...props }, ref) {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-gray-700",
          className
        )}
        {...props}
      >
        {/* transition-transform duration-500 ease-in-out */}
        <ProgressPrimitive.Indicator
  className="h-full w-full flex-1 bg-gray-400 transition-all ease-in-out duration-500"
  style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
/>

      </ProgressPrimitive.Root>
    );
  }
);

// Set display name for the Progress component
Progress.displayName = ProgressPrimitive.Root.displayName;

// Export the Progress component
export { Progress };
