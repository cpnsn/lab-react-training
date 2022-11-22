import React, { useState } from 'react';

export function LikeButton() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>{count} Likes</button>
    </div>
  );
}

export default LikeButton;
