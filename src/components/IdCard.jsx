export function IdCard({ firstName, lastName, gender, heigth, picture }) {
  console.log(firstName);
  return (
    <div>
      <img src={picture} alt="" />

      <div>
        <h4>firstName: {firstName} </h4>
        <h4>lastName: {lastName} </h4>
        <h4>gender: {gender} </h4>
        <h4>heigth: {heigth} </h4>
      </div>
    </div>
  );
}
