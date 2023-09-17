// Libs
import PropTypes from 'prop-types';
// Styled components
import { PageTitleStyled } from './PageTitle.styled';

export const PageTitle = ({ children, hidden = false }) => {
    return <PageTitleStyled hidden={hidden}>{children}</PageTitleStyled>;
};

PageTitle.propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool,
};
