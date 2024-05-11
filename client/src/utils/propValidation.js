import PropTypes from 'prop-types';

export const propValidation = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        publishYear: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};

export const destinationValidation = {
    destination: PropTypes.string
}

// export default { propValidation, destinationValidation }