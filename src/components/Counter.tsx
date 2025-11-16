import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Card className="w-full max-w-md p-12 shadow-lg border-border/50">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Counter
          </h2>
          <div className="text-8xl font-bold text-foreground tabular-nums transition-all duration-200">
            {count}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={decrement}
            variant="outline"
            size="lg"
            className="flex-1 h-14 text-base font-medium hover:bg-secondary/80 transition-colors"
          >
            <Minus className="mr-2 h-5 w-5" />
            Decrease
          </Button>
          
          <Button
            onClick={increment}
            size="lg"
            className="flex-1 h-14 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            <Plus className="mr-2 h-5 w-5" />
            Increase
          </Button>
        </div>

        <Button
          onClick={reset}
          variant="secondary"
          size="lg"
          className="w-full h-12 text-base font-medium hover:bg-muted transition-colors"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default Counter;
