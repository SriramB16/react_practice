import Logo from '../assets/react-core-concepts.png';


const headerNames = ["Fundamental", "Crucial", "Core"];

function randomInt(max){
    return Math.floor(Math.random() * (max));
}


export default function Header() {
    const description = headerNames[randomInt(headerNames.length)];
    // console.log(headerNames.length)
    // console.log(randomInt(headerNames.length))
    // console.log(description)
    return(
        <header>
            <img src={Logo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                4 {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}