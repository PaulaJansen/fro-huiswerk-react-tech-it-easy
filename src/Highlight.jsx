import './Highlight.css';
import PropTypes from "prop-types";

function Highlight({image, helperFnProduct, helperFnPrice, helperFnSizes, data}) {
    return(
        <article className="highlight">
            <p>{image}</p>
            <div className="info-wrapper">
                <p>{helperFnProduct && data ? helperFnProduct(data) : ""}</p>
                <p>{helperFnPrice && data ? helperFnPrice(data) : ""}</p>
                <p>{helperFnSizes && data ? helperFnSizes(data) : ""}</p>
            </div>
        </article>

    )
} 

Highlight.propTypes = {
    image: PropTypes.object.isRequired,
    helperFnProduct: PropTypes.func.isRequired,
    helperFnPrice: PropTypes.func.isRequired,
    helperFnSizes: PropTypes.func.isRequired,
    data: PropTypes.func.isRequired,
};

export default Highlight;