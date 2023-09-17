// Libs
import styled from '@emotion/styled';

export const HeroStyled = styled.div`
    display: flex;
    gap: 28px;
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    flex-basis: calc(50% - 28px / 2);
    text-align: left;
`;

export const HeroText = styled.p`
    font-size: 18px;
    line-height: calc(32 / 18);
    font-weight: 500;
`;

export const HeroImageWrapper = styled.div`
    flex-basis: calc(50% - 28px / 2);
    border-radius: 24px;
    overflow: hidden;
`;
