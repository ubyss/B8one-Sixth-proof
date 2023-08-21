const CategorySection = () => {
    const categories = [
      "Mercearia",
      "Hortifruti",
      "Carnes e Aves",
      "Padaria",
      "Bebidas",
      "Congelados",
      "Frios e Laticinios",
      "Saúde e Bem Estar",
      "Limpeza e Higiene",
      "Importados",
    ];
  
    return (
      <div className="category-section">
        <ul className="category-section__list">
          {categories.map((category, index) => (
            <li key={index} className="category-section__item">
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CategorySection;
  