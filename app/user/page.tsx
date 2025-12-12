export default async function UserPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();

  return (
    <div>
      {users.map((data: any) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
}
