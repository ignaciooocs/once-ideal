'use client';
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (sourceRef.current) {
      resizeObserver.observe(sourceRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <div ref={sourceRef} style={{ width: '50%', height: '200px', backgroundColor: 'lightblue' }}>
        Div principal
      </div>
      <div ref={targetRef} style={{ width: dimensions.width, height: dimensions.height, backgroundColor: 'lightgreen', marginTop: '20px' }}>
        Div secundario que sigue al principal
      </div>
    </div>
  );
}
