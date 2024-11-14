function Body(){
    return(
        <div className="body">
            <h1>Hello, World!</h1>
            <p>This is a simple React component.</p>
            <Body />
            <p>This is another paragraph.</p>
        </div>
    )
}

export default Body;