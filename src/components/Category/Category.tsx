import { useParams } from "react-router";

const Category = () => {
  let params = useParams<string>();

  return (
    <div>
      <h1>Category</h1>
      <p>{params.category}</p>
    </div>
  );
};

export default Category;
