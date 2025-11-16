import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const audio67 = useRef(new Audio('/67.mp3'));
  const audio21 = useRef(new Audio('/21.mp3'));
  const audio100 = useRef(new Audio('/victory.mp3'));

  useEffect(() => {
    audio67.current.load();
    audio21.current.load();
    audio100.current.load();
  }, []);

  useEffect(() => {
    if (count === 7) {
      audio67.current.play();
    } else if (count === 21) {
      audio21.current.play();
    } else if (count === 100) {
      audio100.current.play();
    }
  }, [count]);

  const increment = () => setCount(c => Math.min(100, c + 1));
  const decrement = () => setCount(c => Math.max(-100, c - 1));
  const reset = () => setCount(0);

  return (
    <Card className="w-full max-w-md p-12 shadow-lg border-border/50 relative">
      {(count === 6 || count === 7) && (
        <>
          <img src="/67-1.jpg" alt="67-1" className="absolute top-0 right-0 w-64 h-64" style={{ transform: 'translate(70%, -70%)' }} />
          <img src="/67-2.gif" alt="67-2" className="absolute top-1/2 left-0 w-64 h-64" style={{ transform: 'translate(-70%, -50%)' }} />
          <img src="/67.gif" alt="67" className="absolute bottom-0 right-0 w-64 h-64" style={{ transform: 'translate(70%, 70%)' }} />
        </>
      )}
      {count === 21 && (
        <>
          <img src="/21-1.gif" alt="21-1" className="absolute top-0 right-0 w-64 h-64" style={{ transform: 'translate(70%, -70%)' }} />
          <img src="/21-2.png" alt="21-2" className="absolute top-1/2 left-0 w-64 h-64" style={{ transform: 'translate(-70%, -50%)' }} />
          <img src="/21-3.avif" alt="21-3" className="absolute bottom-0 right-0 w-64 h-64" style={{ transform: 'translate(70%, 70%)' }} />
        </>
      )}
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
            disabled={count <= -100}
          >
            <Minus className="mr-2 h-5 w-5" />
            Decrease
          </Button>
          
          <Button
            onClick={increment}
            size="lg"
            className="flex-1 h-14 text-base font-medium shadow-sm hover:shadow-md transition-all"
            disabled={count >= 100}
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
