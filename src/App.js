import './App.css';
import Header from './Header/Header';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import ProjectList from './ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Breadcrumbs />
        <ProjectList className="project-list" />
      </main>

    </div>
  );
}

export default App;
