type ResposeType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Server = ({ data }: { data: ResposeType }) => {
  return (
    <div>
      This is Server Rendered-Page
      <br />
      <pre>{data.title}</pre>
    </div>
  );
};

export default Server;

export const getServerSideProps = async () => {
  const data = (await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => res.json())) as ResposeType;
  console.log(data);

  return {
    props: {
      data,
    },
  };
};
