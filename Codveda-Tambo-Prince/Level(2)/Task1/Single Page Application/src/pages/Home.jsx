import { useAppContext } from "../context/AppContext";
function Home() {
    const { userName,
    setUserName} = useAppContext();
    return ( 
       <section className="page">

            <h1>Welcome {userName}!</h1>

                <p>
                     Welcome to my React Single Page Application.
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            
      </section>
     );
}

export default Home;