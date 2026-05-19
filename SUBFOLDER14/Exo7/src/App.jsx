import Student from "./Student";
import courses from "./course";

function App() {
  return (
    <div> 
      <h1> react props demo </h1>
        <Student name = "kanal" branch = "cse" rollno = "60" />
        <Student name = "idhika" branch = "cse" rollno = "61" />
        <Student name = "khushi" branch = "cse" rollno = "62" />
        <Course title = "react" description = "react is a js library for building user interfaces" />
       


  
    </div>
  );
}
export default App;