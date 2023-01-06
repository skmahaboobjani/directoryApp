import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <div >
      <button>
        <Link to={"/"}>Add New Person</Link>
      </button>
      <button>
        <Link to={"/retrieve"}>Retrieve Information</Link>
      </button>
    </div>
  );
};

export default Btn;
