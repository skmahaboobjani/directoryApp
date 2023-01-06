import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <div className="button">
      <button className="btn-page">
        <Link to={"/"}>Add New Person</Link>
      </button>
      <button className="btn-page">
        <Link to={"/retrieve"}>Retrieve Information</Link>
      </button>
    </div>
  );
};

export default Btn;