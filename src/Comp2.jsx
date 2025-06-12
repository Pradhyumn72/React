import Comp3 from "./Comp3";

const Comp2 = ({ user }) => {
  return (
    <>
      Comp 2
      <Comp3 user={user} />
    </>
  );
};

export default Comp2;
