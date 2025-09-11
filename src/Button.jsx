import './Button.css';
import PropTypes from "prop-types";

function Button({title}) {
    function logClick() {
        console.log({title});
    }

    return (
       <button onClick={logClick} className={"button"}>{title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button;