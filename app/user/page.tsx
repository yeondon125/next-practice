export default async function UserPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);
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
