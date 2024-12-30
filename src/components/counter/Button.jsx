import PropTypes from "prop-types";

const Button = ({ children, type, handler }) => {
  const style =
    type === "danger"
      ? "bg-red-500 text-white px-3 py-2 rounded shadow"
      : "bg-blue-500 text-white px-3 py-2 rounded shadow";

  return (
    <div>
      <button className={style} onClick={handler}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  handler: PropTypes.func.isRequired,
};
export default Button;
