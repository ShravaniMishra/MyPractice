function Button(props){
    const {text} = props
    return(
        <div>
            <h1>It's me Shravani</h1>
            <button onClick={()=>alert("Sorry It;s not you")}>{text}</button>
            <img src="https://i.gifer.com/7GFR.gif"/>
        </div>
    )
}


export default Button;