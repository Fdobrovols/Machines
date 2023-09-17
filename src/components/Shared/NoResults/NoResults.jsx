// Libs
import PropTypes from 'prop-types';
// Styled components
import { NoResultsStyled } from './NoResults.styled';
// Static data
import noResults from 'img/noResults.webp';

export const NoResults = ({ children }) => {
    return (
        <NoResultsStyled>
            <img src={noResults} alt="No results" width="600" height="auto" />
            {children}
        </NoResultsStyled>
    );
};

NoResults.propTypes = {
    children: PropTypes.node.isRequired,
};
