import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

export function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        height: 100,
        width: 400,
        border: '1px solid black',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      }}
    >
      <p>
        rgb ({r}, {g}, {b})
      </p>
    </div>
  );
}
