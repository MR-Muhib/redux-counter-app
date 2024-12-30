import Button from "./Button";
import Count from "./Count";
import PropTypes from "prop-types";

const Counter = ({ count, onHandleIncrement, onHandleDecrement }) => {
  console.log(count);
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count counter={count} />
      <div className="flex space-x-3">
        <Button handler={onHandleIncrement}>Increment</Button>

        <Button type={"danger"} handler={onHandleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
};

export default Counter;
