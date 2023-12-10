import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main>
        <p>404</p>
        <Link to={"/"}>Вернуться на главную страницу</Link>
      </main>
    </>
  );
};

export default Error;
