import WeightPlateLogo from '../images/store-logo.png';
import SuperTeamLogo from '../images/cape.png';
import NoumeLogo from '../images/noume.png';
import WtwLogo from '../images/film.png';

import NoumeHome from '../images/noume/NoumeHome.png'
import SingleNoume from '../images/noume/SingleNoume.png';
import NoumesList from '../images/noume/NoumesList.png';
import MyNoumes from '../images/noume/MyNoumes.png';

import WeightPlateMenu from '../images/weight-plate/menu.png';
import WeightPlateBag from '../images/weight-plate/my-bag.png';
import WeightPlateProduct from '../images/weight-plate/product.png';
import WeightPlateMap from '../images/weight-plate/order-map.png';

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
        logo: NoumeLogo,
        name: 'Noume',
        liveLink: 'https://willyamramos.dev/noume',
        codeLink: 'https://github.com/wramos1/noume',
        subTitle: 'Find a Home for the New',
        imgsWithDescriptions: [
            {
                imgSrc: NoumeHome,
                description: "Noume is a web application with the sole aim of allowing users to find hotel properties for their next trip. Noume = New Home"
            },
            {
                imgSrc: NoumesList,
                description: "Once you search for properties, a list of previews of Noumes is shown. You can save a Noume by clicking the heart icon and you can get a detailed description of the Noume by clicking the 'View Property' button."
            },
            {
                imgSrc: SingleNoume,
                description: "By selecting a Noume to view, you will be shown typical must-have knowledge such as the amenities and policies of the Noume. You can also click the corresponding links to either view more photos or view reviews of the Noume. Once again, you can save the Noume by clicking the heart icon."
            },
            {
                imgSrc: MyNoumes,
                description: "If you have saved any Noumes, you can view them in the My Noumes page. Simply click the heart icon if you wish to remove a certain Noume from the list."
            },
        ],
        stack: ['React', 'External APIs', 'Local Storage', 'TailwindCSS', 'HTML']
    },
    {
        index: 2,
        logo: WeightPlateLogo,
        name: 'Weight Plate',
        liveLink: 'https://weight-plate.vercel.app/',
        codeLink: 'https://github.com/wramos1/weight-plate',
        subTitle: 'E-Commerce Web Application',
        imgsWithDescriptions: [
            {
                imgSrc: WeightPlateMenu,
                description: "A restaurant geared towards those on a fitness journey is what Weight Plate is all about."
            },
            {
                imgSrc: WeightPlateMap,
                description: "The order page is simply to simulate a restaurant chain's website which makes the user select the location of the restaurant before they can look at the menu. In order to keep this application easy to navigate, I excluded that feature."
            },
            {
                imgSrc: WeightPlateMenu,
                description: "Navigate to the menu page to begin adding items to your cart."
            },
            {
                imgSrc: WeightPlateProduct,
                description: "Select an item you wish to view, update the quantity or type if you desire, and press purchase to add to cart. You will be able to see the price change as you add or remove from the quantity."
            },
            {
                imgSrc: WeightPlateBag,
                description: "The cart icon will take you to your cart where you can view your order's total, remove an item, update the quantity of an item, or clear your cart. The checkout button will take you to Shopify's own templated check out page."
            },
        ],
        stack: ['React', 'ShopifyAPI', 'GraphQL', 'NextJS', 'TailwindCSS']
    },
    {
        index: 3,
        logo: SuperTeamLogo,
        name: 'Super Team',
        liveLink: 'https://willyamramos.dev/super-team',
        codeLink: 'https://github.com/wramos1/super-team',
        subTitle: 'Create a Super Team',
        imgsWithDescriptions: [
            {
                imgSrc: SuperTeamHome,
                description: "A project built for fanatics of the superhero/supervillain world. Users can build a super-team of their top 5 favorite super-beings or design the strongest team they can think of."
            },
            {
                imgSrc: SuperTeamTeam,
                description: "The team is constructed with Card components. These Cards display the stats and basic information of the Super on the back of the card which is revealed when hovered on. The team score is the sum of all the cards' power levels. Note: THE Super Team page is my own personal team."
            },
            {
                imgSrc: SuperTeamBuild,
                description: "Navigate to the Build Team page to construct your own team. If you attempt to render the team before sufficing the right amount of teammates or input an unknown name, the web app will alert you with the proper error."
            },
            {
                imgSrc: SuperTeamRandomize,
                description: "Visit the Randomize Team page and you will be given 3 options: Villains, Heroes, Mixed. Once you select one and click the 'Create Team' button, it will make a team of the option you selected."
            }
        ],
        stack: ['React', 'Typescript', 'External APIs', 'CSS', 'HTML']
    },
    {
        index: 4,
        logo: WtwLogo,
        name: 'Where To Watch',
        liveLink: 'https://willyamramos.dev/WhereToWatch/',
        codeLink: 'https://github.com/wramos1/WhereToWatch',
        subTitle: 'Locate your favorite movie/show',
        imgsWithDescriptions: [
            {
                imgSrc: WtwHome,
                description: "This project utilizes a Streaming Availability API and renders a list of results related to the user's searches. This app was constructed in a simplistic manner so as to make the useability as easy as possible."
            },
            {
                imgSrc: WtwType,
                description: "The first page after the home will provide you with two options related to whether you are searching for a movie or TV series."
            },
            {
                imgSrc: WtwServices,
                description: "The second page will be related to the service provider and you will be shown several options such as Netflix, HBO Max, Hulu, Disney+."
            },
            {
                imgSrc: WtwSearch,
                description: "The next page will provide you with a search bar in which you will input the name or part of the name of the movie/series you have in mind. You also have the option to use a randomizer if you do not have a specific movie/show in mind."
            },
            {
                imgSrc: WtwResults,
                description: "Once finished, the app will show you a list of results and the results' descriptions. Click them to be transferred to the service provider. Also, there will be a new button shown in the bottom right of the page labeled 'Start Over' to begin the process all over again."
            }
        ],
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
        name: 'Grade Calculator',
        description: 'Designed this app to help me calculate my grades throughout the school year because of teachers constantly hiding that information in my classes.',
        stack: ['JavaScript, Local Storage, HTML, CSS'],
        livelink: 'https://willyamramos.dev/grade-calculator/',
        codeLink: 'https://github.com/wramos1/grade-calculator'
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