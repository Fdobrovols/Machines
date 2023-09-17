// Components
import {
    Section,
    PageTitle,
    CardList,
    NoResults,
    RedirectionLink,
} from 'components';
// Hooks
import { useFavorites } from 'hooks';
// Constants
import { EMPTY_FAVORITES_MESSAGE } from 'constants';

export const FavoritePage = () => {
    const [favorites, toggleFavorites] = useFavorites();

    return (
        <Section>
            <PageTitle hidden>Favorite</PageTitle>

            {favorites.length ? (
                <CardList data={favorites} toggleFavorites={toggleFavorites} />
            ) : (
                <NoResults>
                    <span>{EMPTY_FAVORITES_MESSAGE}</span>
                    <RedirectionLink to="/rental">
                        Add some cars
                    </RedirectionLink>
                </NoResults>
            )}
        </Section>
    );
};
