import PropTypes from "prop-types";

const Count = ({ counter }) => {
  console.log(counter);
  return (
    <>
      <p className="text-center font-bold mb-5">{counter}</p>
    </>
  );
};
Count.propTypes = {
  counter: PropTypes.number,
};

export default Count;
