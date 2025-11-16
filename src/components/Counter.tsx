import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const audio100 = useRef(new Audio('/victory.mp3'));
  const audioHell = useRef(new Audio('/hell.flac'));

  useEffect(() => {
    audio100.current.load();
    audioHell.current.load();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (count === 100) {
      audio100.current.play();
    } else if (count === -100) {
      audioHell.current.play();
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [count]);

  const increment = () => setCount(c => Math.min(100, c + 1));
  const decrement = () => setCount(c => Math.max(-100, c - 1));
  const reset = () => setCount(0);

  if (count === 100 || count === -100) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen">
        <img
          src={count === 100 ? "/heaven.png" : "/hell.png"}
          alt={count === 100 ? "heaven" : "hell"}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          {count === 100 && <img src="/victory.png" alt="victory" className="w-96 mb-8" />}
          <Button
            onClick={reset}
            variant="secondary"
            size="lg"
            className="h-14 text-base font-medium"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            {count === 30 && (
                <div className="text-center text-lg font-bold text-black mb-8">
                    Sorry, I couldn't download the '30 hours' song by Kanye...
                </div>
            )}
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

                    <div className="flex flex-col sm:flex-row gap-3">
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
        </div>

        {(count === 6 || count === 7) && (
            <>
            <audio src="/67.mp3" autoPlay />
            <img src="/67-1.jpg" alt="67-1" className="w-80 h-auto absolute" style={{ top: '5%', left: '10%', transform: 'rotate(-15deg)' }} />
            <img src="/67-2.gif" alt="67-2" className="w-80 h-auto absolute" style={{ bottom: '15%', right: '10%', transform: 'rotate(10deg)' }} />
            <img src="/67.gif" alt="67" className="w-80 h-auto absolute" style={{ top: '55%', left: '5%', transform: 'rotate(20deg)' }} />
            </>
        )}
        {count === 21 && (
            <>
            <audio src="/21.mp3" autoPlay />
            <img src="/21-1.gif" alt="21-1" className="w-80 h-auto absolute" style={{ bottom: '5%', left: '5%', transform: 'rotate(15deg)' }} />
            <img src="/21-2.png" alt="21-2" className="w-80 h-auto absolute" style={{ top: '2%', right: '5%', transform: 'rotate(-10deg)' }} />
            <img src="/21-3.avif" alt="21-3" className="w-80 h-auto absolute" style={{ top: '5%', left: '5%', transform: 'rotate(25deg)' }} />
            </>
        )}
        {count === 30 && (
            <>
            <audio src="/30.mp3" autoPlay />
            <img src="/30-1.jpg" alt="30-1" className="w-80 h-auto absolute" style={{ top: '5%', left: '5%', transform: 'rotate(-20deg)' }} />
            <img src="/30-2.jpeg" alt="30-2" className="w-80 h-auto absolute" style={{ bottom: '5%', left: '5%', transform: 'rotate(20deg)' }} />
            <img src="/30-3.avif" alt="30-3" className="w-80 h-auto absolute" style={{ top: '50%', right: '5%', transform: 'translateY(-50%) rotate(-5deg)' }} />
            </>
        )}
    </div>
  );
};

export default Counter;
