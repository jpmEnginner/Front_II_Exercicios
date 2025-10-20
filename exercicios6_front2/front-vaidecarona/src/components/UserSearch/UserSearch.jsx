import '../../styles/index.css';

function UserSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <img src="/assets/img/pesquisa.png" alt="Pesquisar" className="search-icon" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Pesquisar nome" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserSearch;