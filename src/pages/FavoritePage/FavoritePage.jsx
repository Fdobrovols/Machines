
import {
    Section,
    PageTitle,
    CardList,
    NoResults,
    RedirectionLink,
} from 'components';

import { useFavorites } from 'hooks';

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
