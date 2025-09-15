import './Highlight.css';
import PropTypes from "prop-types";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';

function Highlight({url, alt, helperFnProduct, helperFnPrice, helperFnSizes, data, variant}) {
    return (
        <article className={`highlight ${variant}`}>
            <img className="product-image" src={url} alt={alt}/>
            <div className="info-wrapper">
                <p className="product">{helperFnProduct && data ? helperFnProduct(data) : ""}</p>
                <p className="price">{helperFnPrice && data ? helperFnPrice(data) : ""}</p>
                <p>{helperFnSizes && data ? helperFnSizes(data) : ""}</p>
                <ul className="options-list">
                    {data?.options?.map((option, index) => {
                        if (option.applicable === true) {
                            return (
                                <li key={index}>
                                    <img src={checkIcon} alt="check" className="list-icon"/>
                                    {option.name}
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    <img src={minusIcon} alt="minus" className="list-icon"/>
                                    {option.name}
                                </li>
                            );
                        }
                    })}
                </ul>
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
    variant: PropTypes.string
};

export default Highlight;