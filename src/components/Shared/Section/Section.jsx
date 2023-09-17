// Libs
import PropTypes from 'prop-types';
// Styled components
import { SectionStyled } from './Section.styled';

export const Section = ({ children }) => {
    return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
};
