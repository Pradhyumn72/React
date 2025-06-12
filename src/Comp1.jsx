import Comp2 from "./Comp2";

const Comp1 = ({ user }) => {
  return (
    <>
      Comp 1
      <Comp2 user={user} />
    </>
  );
};

export default Comp1;
