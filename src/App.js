import AboutMe from "./components/about-me/AboutMe";
import Certificates from "./components/certificates/–°ertificates";
import Experience from "./components/experience/Experience";
import Promo from "./components/promo/Promo";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div>
            <Promo />
            <AboutMe />
            <Experience />
            <Skills />
            <Certificates />
        </div>
    )
}

export default App;