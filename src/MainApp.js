import TodoApp from './TodoApp';
import TodoProvider from './TodoContext';

const MainApp = () => {
   return (
       <TodoProvider>
           <TodoApp />
       </TodoProvider>
   ) 
}

export default MainApp;

