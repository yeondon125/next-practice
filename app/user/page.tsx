export default async function UserPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
}
