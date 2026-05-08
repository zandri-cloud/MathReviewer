import React, { useEffect, useState } from 'react';

export function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-surface">
      <div
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[60px] md:blur-[100px] will-change-transform"
        style={{
          animation: isMobile ? 'none' : 'blob1 20s infinite linear'
        }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-tertiary/10 blur-[60px] md:blur-[120px] will-change-transform"
        style={{
          animation: isMobile ? 'none' : 'blob2 25s infinite linear'
        }}
      />
      <div
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-primary-container/10 blur-[50px] md:blur-[90px] will-change-transform"
        style={{
          animation: isMobile ? 'none' : 'blob3 30s infinite linear'
        }}
      />
    </div>
  );
}
