import { HomePage } from "pages/HomePage";
import { PeoplePage } from "pages/PeoplePage";
import { StarshipPage } from "pages/StarshipPage";
import { PlanetPage } from "pages/PlanetsPage";

import { HouseIcon, EarthOceaniaIcon, PersonWalkingIcon, RocketIcon } from "shared/assets/icons";
import { DetailsPage } from "pages/DetailsPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AboutPage } from "pages/AboutPage";
import { Contacts } from "shared/ui/Contacts";


export const NAVIGATION_CONST = [
    {
        title: 'Главная',
        path: '/',
        href: '#'
    },
    {
        title: 'Категории',
        path: '/planets',
        href: '#planets',
        child: [
            { title: 'Персонажи', path: '/people' },
            { title: 'Корбали', path: '/starships' },
            { title: 'Планеты', path: '/planets' },
        ],
    },
    {
        title: 'О сайте',
        path: '/about',
        href: '#about'
    },
    {
        title: 'Контакты',
        path: '/contacts',
        href: '#contacts'
    },
    {
        title: 'Not Found',
        path: '/not-found',
        href: '#not-found'
    }
]


export const ROUTES_CONST = [
    { title: 'Главная', path: '/', element: <HomePage/> },
    { title: 'Персонажи', path: '/people', element: <PeoplePage/> },
    { title: 'Корбали', path: '/starships', element: <StarshipPage/> },
    { title: 'Планеты', path: '/planets', element: <PlanetPage/> },
    { path: 'about', element: <AboutPage/> },
    { path: 'contacts', element: <Contacts/> },
    { path: '/people/:id', element: <DetailsPage/> },
    { path: '/starships/:id', element: <DetailsPage/> },
    { path: '/planets/:id', element: <DetailsPage/> },
]