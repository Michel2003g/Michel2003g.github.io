import ProjectCardContainer from "../components/ProjectCardContainer";

function App() {
  return (
    <div className="container">
        <div id="home-hello">
          <p>Hello, I am <span className="bold">Michel.</span></p>
          <p>A <span className="bold">Software Developer.</span></p>
        </div>
        <p id="project-here">You can find some of my work <a href="#Projects">here.</a></p>
        <a className="mailButton" href="mailto:nomailyet@gmail.com">nomailyet@gmail.com</a>
    </div>
  );
}

export default App;