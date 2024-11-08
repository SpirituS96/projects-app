import './App.css';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProjectList from './components/ProjectList/ProjectList';
import Footer from './components/Footer/Footer';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import React from 'react';

const url = 'https://api.test.cyberia.studio/api/v1'

function App() {
  const [projects, setProjects] = React.useState({});
  const [categories, setCategories] = React.useState({});

  React.useEffect(() => {
    fetchInfo();
  },[]);

  const fetchInfo = async () => {
    try {
      const projectsRes = await fetch(url + '/projects'); // отправляем запрос API 
      const categoriesRes = await fetch(url + '/project-categories'); // отправляем запрос API
      const projects = await projectsRes.json(); // преобразовываем ответ в json
      const categories = await categoriesRes.json(); // преобразовываем ответ в json
      console.log('pro', projects); // выводим полученные данные в консоль
      console.log('cat', categories); // выводим полученные данные в консоль
      setProjects(projects);
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="App">
      <Header />
      <main className="main">
        <Breadcrumbs />
        <ProjectList className="project-list" projects={projects} categories={categories} />
        <FeedbackForm apiURL={url} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
