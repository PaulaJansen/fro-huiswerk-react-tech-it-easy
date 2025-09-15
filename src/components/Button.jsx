import './Button.css';
import PropTypes from "prop-types";

function Button({title, onClick}) {
    // function logClick() {
    //     console.log({title});
    // }

    return (
       <button className={"button"} onClick={onClick}>{title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;