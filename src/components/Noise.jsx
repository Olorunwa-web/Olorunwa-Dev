// import { useRef, useEffect } from "react";

// const Noise = ({
//   patternSize = 250,
//   patternScaleX = 1,
//   patternScaleY = 1,
//   patternRefreshInterval = 2,
//   patternAlpha = 15,
// }) => {
//   const grainRef = useRef(null);

//   useEffect(() => {
//     const canvas = grainRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d", { alpha: true });
//     if (!ctx) return;

//     let frame = 0;
//     let animationId;
//     const canvasSize = 1024;

//     const resize = () => {
//       if (!canvas) return;
//       canvas.width = canvasSize;
//       canvas.height = canvasSize;

//       // Tailwind handles layout, but canvas must still scale
//       canvas.style.width = "100%";
//       canvas.style.height = "100%";
//     };

//     const drawGrain = () => {
//       const imageData = ctx.createImageData(canvasSize, canvasSize);
//       const data = imageData.data;

//       for (let i = 0; i < data.length; i += 4) {
//         const value = Math.random() * 255;
//         data[i] = value;
//         data[i + 1] = value;
//         data[i + 2] = value;
//         data[i + 3] = patternAlpha;
//       }

//       ctx.putImageData(imageData, 0, 0);
//     };

//     const loop = () => {
//       if (frame % patternRefreshInterval === 0) {
//         drawGrain();
//       }
//       frame++;
//       animationId = window.requestAnimationFrame(loop);
//     };

//     window.addEventListener("resize", resize);
//     resize();
//     loop();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.cancelAnimationFrame(animationId);
//     };
//   }, [
//     patternSize,
//     patternScaleX,
//     patternScaleY,
//     patternRefreshInterval,
//     patternAlpha,
//   ]);

//   return (
//     <canvas
//       ref={grainRef}
//       className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
//       style={{ imageRendering: "pixelated" }}
//     />
//   );
// };

// export default Noise;


import { useRef, useEffect } from "react";

const Noise = ({
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) drawGrain();
      frame++;
      animationId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [patternAlpha, patternRefreshInterval]);

  return (
    <canvas
      ref={grainRef}
      className="
        fixed inset-0 w-full h-full 
        pointer-events-none 
        z-[999999] 
        mix-blend-overlay
      "
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Noise;

