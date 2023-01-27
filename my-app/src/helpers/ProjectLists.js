import ProjectItem from "../components/ProjectItem"
import Doctoreview from "../assets/doctorpage.PNG"
import Maxpage from "../assets/maxpage.PNG"
import Marketapp from "../assets/reactcrypto.PNG"
import BookSearch from "../assets/booksearch.PNG"
import Calendar from "../assets/redcalendar.PNG"
import bikeadventure from "../assets/bikeadventure.png"
import NoteTaker from "../assets/notetakerpic.PNG"
import Blog from "../assets/techblogpic.PNG"
import Password from "../assets/passgenpic.PNG"


export const projectList = [
    {
        name:"Doctor Review",
        image:Doctoreview,
        Skills: "React, Css3, JavaScript, GraphQL, MongoDB.",
        Link:"https://arcane-stream-32047.herokuapp.com/",
        About:"App allows you to search for Doctors in your area and read & leave a reviews on them "
        
    },
    {
        name:"Tarot Reading",
        image:Maxpage,
        Skills: "React, Css3, JavaScript, Heroku, PayPal API",
        Link:"https://rob49157.github.io/final_corazon_page/",
        About:"E-Commerce site done for a client. The Payment processing is done with Paypal and Venmo API. The project is currently hosted on Heroku."
    },
    {
        name:"Marketapp",
        image:Marketapp,
        Skills: "React, Css3, JavaScript",
        Link:"https://rob49157.github.io/marketapp/",
        About:"The app will retrieve live Crypto and Forex data to keep users inform before making financial decisions. Another feature the app has its a currency converter for the convenince of the user."
    },
    {
        name:"Book Search",
        image:BookSearch,
        Skills: "React, Css3, BootStrap JavaScript, GraphQL, MongoDB",
        Link:"https://shrouded-meadow-26197.herokuapp.com/",
        About:"A good way to search for books using Google API. User can can save the favorites on their personal watchlist."
    },
    {
        name:"Calendar",
        image:Calendar,
        Skills: "HTML5, Css3, JavaScript, RESTFUL API, MySQL",
        Link:"https://rob49157.github.io/work-day-scheduler/",
        About:"This app allows the user to create an interactive work scheduler. As time passes, the table colors change from green to red."
    },
    {
        name:"Bike Adventure",
        image:bikeadventure,
        Skills: "HTML5, Css3, JavaScript",
        Link:"https://CChampness.github.io/Bike-Adventure-Planning",
        About:"Group project. The purpose of the app is to display bike trails throughout the planet. New trails are being added on daily basis"
    },
    {
        name:"Note Taker",
        image:NoteTaker,
        Skills: "HTML5, Css3, JavaScript, RESTFUL API, MySQL",
        Link:"https://tranquil-bastion-13264.herokuapp.com/",
        About:"The Note-Taker app allows users to write notes on personal virtual notebook. The App uses HTTPS request with GET and POST methods."
    },
    {
        name:"Tech Blog",
        image:Blog,
        Skills: "React, Css3, JavaScript, RESTFUL API, MySQL",
        Link:"https://arcane-stream-32047.herokuapp.com/",
        About:"Tech Blog, Users can write blogs about their favorite Tech. It also has the ability to Update and Delete post if user chooses too"
    },
    {
        name:"Password Generator",
        image:Password,
        Skills: "HTML5, CSS3, JavaScript",
        Link:"https://rob49157.github.io/password-generator/",
        About:"The app will generate random password at users request. The generator will use a javascript function to randomly generate random 13-key password"
    },
]