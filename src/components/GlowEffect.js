import React from 'react';

const GlowEffect = ({ mousePosition }) => {
  return (
    <div
      className="fixed pointer-events-none z-10 transition-opacity duration-300"
      style={{
        left: mousePosition.x - 200,
        top: mousePosition.y - 200,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
      }}
    />
  );
};

export default GlowEffect;