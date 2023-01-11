import ProjectCardContainer from "../components/ProjectCardContainer";

function App() {
  return (
    <div className="Home">
      <div className="welcome-title-container">
        <h1 className="welcome-title ">Welcome my name is Michel. and I'm a <code>software developer</code>.</h1>
      </div>
      <ProjectCardContainer requestAmount ={4} />
    </div>
  );
}

export default App;