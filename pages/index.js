import Knex from "knex";

export async function getServerSideProps(context) {
  //Connect to Database
  const db = Knex({
    client: "mysql",
    connection: process.env.DB_CONNECTION_URL,
  });

  //Query table
  const postListQuery = await db("posts").select();

  //Convert result to object
  let postList = [];
  postListQuery.map((item) => {
    postList.push(JSON.parse(JSON.stringify(item)));
  });

  // Send to Props
  return { props: { postList } };
}

function HomePage({ postList }) {
  console.log(`Post List: ${postList}`);
  return (
    <div>
      <h1>Demo Post from MySQL</h1>
      {postList &&
        postList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </div>
  );
}

export default HomePage;
