import "./button.css";
import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ children, color = "default", size = "base", handleClick }) {
  return (
    <button onClick={handleClick} className={clsx(color, size)}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "default", "danger"]),
  size: PropTypes.oneOf(["sm", "base", "lg"]),
  handleClick: PropTypes.func.isRequired,
};
