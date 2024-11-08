import './ProjectCategory.css';

export default function ProjectCategory({ data }) {
    let categoriesList;
    
    if (data.hasOwnProperty('items')) {
        categoriesList = data.items.map((item) => <button id={item.id} className="category-item">{item.name}</button>);
    } else {
        categoriesList = <p>Loading...</p>;
    }
    return (
        <div className="category-list">
            {categoriesList}
        </div>
    );
}
