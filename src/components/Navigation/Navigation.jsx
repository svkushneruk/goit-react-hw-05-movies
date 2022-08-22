import { MainNavigation, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <MainNavigation>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </MainNavigation>
  );
};
