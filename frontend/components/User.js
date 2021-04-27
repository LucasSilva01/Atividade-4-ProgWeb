import UserCard from "./UserCard";

 const Car = ({users}) => (
    <div>
    {users.map(car => (
      <UserCard
      key = {car._id}
      car = {car}
        />
      ))}
  </div>
)

export default Car;