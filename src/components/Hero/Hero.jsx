// Components
import { PageTitle, RedirectionLink } from 'components';
// Styled components
import {
    HeroStyled,
    HeroTextWrapper,
    HeroText,
    HeroImageWrapper,
} from './Hero.styled';
// Static data
import heroImage from 'img/hero.webp';

export const Hero = () => {
    return (
        <HeroStyled>
            <HeroTextWrapper>
                <PageTitle>Click and Drive</PageTitle>
                <HeroText>
                    Welcome to Click and Drive, where we make car rentals easy
                    and convenient.
                </HeroText>
                <HeroText>
                    Our goal is to provide you with the ultimate car rental
                    experience, whether you're traveling for business or
                    pleasure. At Click and Drive, we offer a wide range of
                    vehicles to choose from, including luxury cars, SUVs, and
                    compact cars. Our rental process is simple and hassle-free,
                    so you can get on the road and start your adventure in no
                    time.
                </HeroText>
                <RedirectionLink to="/rental">Let's drive</RedirectionLink>
            </HeroTextWrapper>

            <HeroImageWrapper>
                <img
                    src={heroImage}
                    alt="Click and drive"
                    width="600px"
                    height="auto"
                />
            </HeroImageWrapper>
        </HeroStyled>
    );
};
