// slide.tsx
import React from 'react';

interface SlideProps {
  accessories: string;
  propWidth?: string;
  propDisplay?: string;
  propMinWidth?: string;
  propWidth1?: string;
  propTextDecoration?: string;
}

const Slide: React.FC<SlideProps> = ({
  accessories,
  propWidth = 'auto',
  propDisplay = 'block',
  propMinWidth = 'auto',
  propWidth1 = 'auto',
  propTextDecoration = 'none'
}) => {
  return (
    <div style={{ display: propDisplay, minWidth: propMinWidth }}>
      <div style={{ width: propWidth, textDecoration: propTextDecoration }}>
        {accessories}
      </div>
      <div style={{ width: propWidth1 }}>
        {/* Additional content or structure can go here */}
      </div>
    </div>
  );
};

export default Slide;
