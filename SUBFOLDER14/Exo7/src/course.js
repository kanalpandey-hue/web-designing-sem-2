function Course(props) {
    return (
        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h2>Title: {props.title}</h2>
            <p>Description: {props.description}</p>
        </div>
    );
}
export default Course;