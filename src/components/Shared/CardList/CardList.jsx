// Libs
import PropTypes from 'prop-types';
// Components
import { Card } from 'components';
// Styled components
import { CardListStyled } from './CardList.styled';

export const CardList = ({ data, toggleFavorites }) => {
    return (
        <CardListStyled>
            {data.map(item => (
                <Card
                    key={`${item.id}`}
                    data={item}
                    toggleFavorites={toggleFavorites}
                />
            ))}
        </CardListStyled>
    );
};

CardList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            make: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            img: PropTypes.string,
            description: PropTypes.string.isRequired,
            fuelConsumption: PropTypes.string.isRequired,
            engineSize: PropTypes.string.isRequired,
            accessories: PropTypes.arrayOf(PropTypes.string.isRequired)
                .isRequired,
            functionalities: PropTypes.arrayOf(PropTypes.string.isRequired)
                .isRequired,
            rentalPrice: PropTypes.string.isRequired,
            rentalCompany: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            rentalConditions: PropTypes.string.isRequired,
            mileage: PropTypes.number.isRequired,
            favorite: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,

    toggleFavorites: PropTypes.func.isRequired,
};
