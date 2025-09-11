import './Highlight.css';
import PropTypes from "prop-types";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png";

function Highlight({url, alt, helperFnProduct, helperFnPrice, helperFnSizes, data}) {
    return(
        <article className="highlight">
            <img className={"product-image"} src={url} alt={alt}/>
            <div className="info-wrapper">
                <p className={"product"}>{helperFnProduct && data ? helperFnProduct(data) : ""}</p>
                <p className={"price"}>{helperFnPrice && data ? helperFnPrice(data) : ""}</p>
                <p>{helperFnSizes && data ? helperFnSizes(data) : ""}</p>
                <p>
                    <img className={"icon"} src={checkIcon} alt={"check"}/>
                    <span>wifi</span>
                    <img className={"icon"} src={minusIcon} alt={"check"}/>
                    <span>speech</span>
                </p>
            </div>
        </article>

    )
} 

Highlight.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    helperFnProduct: PropTypes.func.isRequired,
    helperFnPrice: PropTypes.func.isRequired,
    helperFnSizes: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default Highlight;