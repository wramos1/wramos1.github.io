import WeightPlateLogo from '../images/store-logo.png';
import SuperTeamLogo from '../images/cape.png';
import NoumeLogo from '../images/noume.png';
import WtwLogo from '../images/film.png';

import WeightPlateMenu from '../images/weight-plate/menu.png';
import WeightPlateBag from '../images/weight-plate/my-bag.png';
import WeightPlateProduct from '../images/weight-plate/product.png';
import WeightPlateMap from '../images/weight-plate/order-map.png';

import SuperTeamFrontCard from '../images/super-team/front-card.png';
import SuperTeamBackCard from '../images/super-team/back-card.png';
import SuperTeamHome from '../images/super-team/super-team-home.png'
import SuperTeamRandomize from '../images/super-team/super-team-randomize.png';
import SuperTeamBuild from '../images/super-team/super-team-build.png';
import SuperTeamTeam from '../images/super-team/team.png';

import WtwServices from '../images/where-to-watch/services.png';
import WtwHome from '../images/where-to-watch/Where-To-Watch.png';
import WtwType from '../images/where-to-watch/movie-or-show.png';
import WtwResults from '../images/where-to-watch/results.png';
import WtwSearch from '../images/where-to-watch/search-or-randomize.png';

export const topProjects = [
    {
        index: 1,
        logo: WeightPlateLogo,
        name: 'Weight Plate',
        liveLink: 'https://weight-plate.vercel.app/',
        codeLink: 'https://github.com/wramos1/weight-plate',
        imgsWithDescriptions: [
            {
                imgSrc: WeightPlateMenu,
                description: ''
            },
            {
                imgSrc: WeightPlateProduct,
                description: ''
            },
            {
                imgSrc: WeightPlateBag,
                description: ''
            },
            {
                imgSrc: WeightPlateMap,
                description: ''
            },
        ],
        stack: ['React', 'ShopifyAPI', 'GraphQL', 'NextJS', 'TailwindCSS']
    },
    {
        index: 2,
        logo: NoumeLogo,
        name: 'Noume',
        liveLink: '',
        codeLink: '',
        imgSrc: [''],
        stack: ['React', 'External APIs', 'TailwindCSS', 'HTML']
    },
    {
        index: 3,
        logo: SuperTeamLogo,
        name: 'Super Team',
        liveLink: 'https://willyamramos.dev/super-team',
        codeLink: 'https://github.com/wramos1/super-team',
        imgSrc: ['d'],
        stack: ['React', 'Typescript', 'External APIs', 'CSS', 'HTML']
    },
    {
        index: 4,
        logo: WtwLogo,
        name: 'Where To Watch',
        liveLink: 'https://willyamramos.dev/WhereToWatch/',
        codeLink: 'https://github.com/wramos1/WhereToWatch',
        imgSrc: [''],
        stack: ['React', 'Redux', 'External APIs', 'CSS', 'HTML']
    }
]

export const otherProjects = [
    {
        name: 'Dad Joke Tier List',
        description: 'Everyone loves a good dad joke and this website allows you to generate an endless amount of dad jokes and judge them.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        liveLink: 'https://willyamramos.dev/DadJokeTierList/',
        codeLink: 'https://github.com/wramos1/DadJokeTierList',
    },
    {
        name: 'What To Make',
        description: 'This project fetches recipes for the ingredients you have at home and provides the instructions in an easy-to-read manner. Begin your journey to Master Chef.',
        stack: ['React', 'Redux', 'External APIs', 'HTML', 'CSS'],
        liveLink: 'https://willyamramos.dev/what-to-make/',
        codeLink: 'https://github.com/wramos1/What-To-Make',
    },
    {
        name: 'Fit Scale',
        description: 'An easy one stop shop where one can find all the information they are bound to look for during their fitness endeavors.',
        stack: ['React', 'External APIs', 'HTML', 'CSS'],
        liveLink: 'https://willyamramos.dev/Fit-Scale/',
        codeLink: 'https://github.com/wramos1/Fit-Scale',
    }
]