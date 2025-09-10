import PropTypes from "prop-types";

function ProductImage({url, alt}) {
    return <img src={url} alt={alt} />
}

ProductImage.propTypes = {
    url: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired
};

export default ProductImage;