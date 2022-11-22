export function Rating({ children }) {
  if (children < 0.5) {
    return <p>☆☆☆☆☆</p>;
  } else if (children >= 4.5) {
    return <p>★★★★★</p>;
  } else if (children >= 3.5) {
    return <p>★★★★☆</p>;
  } else if (children >= 2.5) {
    return <p>★★★☆☆</p>;
  } else if (children >= 1.5) {
    return <p>★★☆☆☆</p>;
  } else if (children >= 0.5) {
    return <p>★☆☆☆☆</p>;
  }
}
