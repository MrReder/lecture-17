import Student from './components/student';
import './App.css';

const studentsList = [
  {
    id: 211,
    name: "Martyn",
    tasks: 12
  },
  {
    id: 212,
    name: "Tanya",
    tasks: 13
  }
]

function App() {
  return (
    <div className="App">
      {studentsList.map(student => <Student {...student} key={student.id} />)}
    </div>
  );
}

export default App;
