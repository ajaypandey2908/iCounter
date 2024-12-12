function First(){

    function Myfun(){
        alert('This is a functional component')
    }
    return(
        <>
        <h1>Event Handling is a functional component</h1>
        <button onClick={Myfun}>Click Me</button>
        </>
    );
}
export default First;