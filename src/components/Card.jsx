import './Card.css';
import PropTypes from "prop-types";

function Card({title, variant, helperFn, data}) {
    return (
        <>
            <article className={`card ${variant}`}>
                <h3>{title}</h3>
                <p>{helperFn && data ? helperFn(data) : ""}</p>
            </article>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    helperFn: PropTypes.func,
    data: PropTypes.any
};

Card.defaultProps = {
    variant: "",
    helperFn: null,
    data: null
};

export default Card;