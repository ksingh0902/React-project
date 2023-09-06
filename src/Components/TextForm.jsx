import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const [Text, setText] = useState("")

  function clickHandler(){
    setText(Text.toUpperCase())
    props.showAlert("Changed to UpperCase!!", "success")
  }
  function onClickHandler(){
    setText(Text.toLowerCase())
    props.showAlert("Changed to LowerCase!!", "success")
  }
  function onDeleteHandler(){
    setText(" ")
    props.showAlert("Deleted!!!", "success")
  }
  function onChangeText(event){
    setText(event.target.value)
  }

  function onHandleCopy(){
   navigator.clipboard.writeText(Text);
  props.showAlert("Copied to clipboard!!", "success")
  }

  function onExtraSpaceHandler(){
    let newText= Text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert("Removed Extra Space!!", "success")
  }
  return (
    <>
    <div>
     
      <div className="mb-3">
      <h1 className= "mb-3" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        <textarea className="form-control" value ={Text} style={{backgroundColor:props.mode==='dark'?'#0e1733':'white', color:props.mode==='dark'?'white':'black'}} onChange={onChangeText} id="mybox" rows="10"></textarea>
      </div>
        <button disabled = {Text.length==0} className="btn btn-primary mx-1 my-1" onClick={clickHandler}>Convert to Upper Case</button> 
        <button disabled = {Text.length==0} className="btn btn-secondary mx-1 my-1" onClick={onClickHandler}>Convert to Lower Case</button> 
       <button disabled = {Text.length==0}  className="btn btn-dark mx-1 my-1" onClick={onHandleCopy}>Copy Text</button> 
        <button disabled = {Text.length==0} className="btn btn-warning mx-1 my-1" onClick={onExtraSpaceHandler}>Remove Extra Space</button> 
        <button disabled = {Text.length==0} className="btn btn-danger mx-1 my-1" onClick={onDeleteHandler}>Delete 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
        </svg> </button>
    </div>
       <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>Your Summary</h1>
         <p> <b>{Text.split (/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</b></p>
         {/* //split is using for counting words with space  */}
         <p> <b>{0.08*Text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes Reading Time</b></p>
         <h2> Preview </h2>
         <p>{Text.length>0?Text: "Nothing to preview"}</p>

    </div>
    </>
  );
};

export default TextForm;
