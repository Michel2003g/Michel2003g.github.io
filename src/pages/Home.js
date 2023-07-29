import ProjectCardContainer from "../components/ProjectCardContainer";

function App() {
  return (
    <div className="container">
        <div id="home-hello">
         <div>
          <p>Hello, I am</p>
          <span className="bold title-bold">Michel.</span>
         </div>
          <div>
            <p>A</p>
            <span className="bold title-bold">Software Developer.</span>
          </div>
        </div>
        <div className="flex-right" id="project-here">
          <p>You can find some of my work</p>
          <a href="#Projects">here.</a>
        </div>
        <a className="mailButton" href="mailto:nomailyet@gmail.com">nomailyet@gmail.com</a>
    </div>
  );
}

export default App;