import { useAppContext } from "../context/AppContext";
function About() {
    const { userName } = useAppContext();
    return ( 
         <section className="page">

            <h1>About Me</h1>
            <p>Hello, I'm {userName}!</p>

                <p>
                    I am a frontend developer interested in
                    creating clean, responsive and interactive
                    web applications.
                </p>

                <p>
                    I work with technologies such as HTML, CSS,
                    JavaScript and React.
                </p>

        </section>
     );
}

export default About;