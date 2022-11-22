export function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{rating}</p>
        <p>
          {car.model} {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
