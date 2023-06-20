import React, {useState} from "react";

export default function TextForm(props){
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    
    const handleClick = ()=>{
        const newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase","success");
    }

    const handleLowClick = ()=>{
        const nText = text.toLowerCase();
        setText(nText)
        props.showAlert("converted to LowerCase","success");
    }

    const handleClearClick = () =>{
        const nText = "";
        setText(nText)
        props.showAlert("Text is cleared","success");
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className={`my-3 text-${props.mode==='light'?'dark':'light' }`}>
        <h2>{props.heading}</h2>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light' }`}>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8 "></textarea>
        </div>
        <button type="submit" className="btn btn-primary mx-1" onClick={handleClick} >Convert to UpperCase</button>
        <button type="submit" className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
        <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light' }`}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}