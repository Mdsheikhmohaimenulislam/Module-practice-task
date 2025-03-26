export default function HideSection(){
    

    const textShow = () => {
        document.getElementById("title").style.display = "block"
    }

    const textHide = () => {
        document.getElementById("title").style.display = "none"
    }


    return(
        <div className="card">
            <h1 id="title" hidden >Hello React Learner !</h1>
            <button onClick={textShow}>Show</button>
            <button onClick={textHide}>Hide</button>
        </div>
    )
}