import './TaskSearch.css';

function TaskSearch() {
  return (
    <div className="task-search">
      < input
          type="text"
          placeholder="Busar Tareas ..."
          onChange={(e) => console.log("Esribistes:" , e.target.value)}
      />
    </div>
  );
}

export default TaskSearch;
