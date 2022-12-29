import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUppercase=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLocase=()=>{
        console.log("Lowercase was clicked")
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("handle On Change")
        setText(event.target.value)
        }
    const handleclearCase=()=>{
        let text=""
        setText(text)
        }
        const [text,setText] =useState("")
          
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==="dark"?"#042743":"white",color:props.mode==="dark"?"white":"black"
        }} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
            <button type="button" className="btn btn-danger mx-2" onClick={handleLocase}>Convert to Lowercase</button>
            <button type="button" className="btn btn-dark" onClick={handleclearCase}>Clear</button>

            {/* <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button> */}
        </div>
        <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
<h1>Your text summary</h1>
<p>{text.split(' ').length} words {text.length} characters </p>
      <p>{0.008*text.split(' ').length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"No text to preview"}</p>
        </div>
        </>
    )
}
