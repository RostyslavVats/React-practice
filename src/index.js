import React from "react";
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/to-do-list";

const App = () =>{
    const toDoDate = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'MAke Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];
    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todoe = {toDoDate} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
