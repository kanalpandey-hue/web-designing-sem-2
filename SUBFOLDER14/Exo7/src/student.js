function Student(props) {
    return (
        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h2>Name: {props.name}</h2>
            <p>Branch: {props.branch}</p>
            <p>Roll No: {props.rollno}</p>
        </div>
    );
}
export default Student;
