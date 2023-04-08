import React, { useState } from 'react'
//useState hook imported
// style is a object right? style = {object} 
//we we want to manupulate the style with javascript then we need to put first curly brace for javascript then inside first next curly brace for object
// style = { {object} }
export default function Textarea(props) {

    const uppercase = () => {
        console.log('uppercase button clicked');
        setLastText(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'Text converted to UPPERCASE')
    }

    const lowercase = () => {
        console.log('lowercase button clicked');
        setLastText(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'Text converted to lowercase');

    }

    const changeFunc = (event) => {
        console.log('onChange triggered');
        setText(event.target.value);
    }


    const clearBox = () => {
        setLastText(text);
        setText('');
        props.showAlert('success', 'Box is cleared');
    }


    const previewText = () => {
        setText(lasttext);
    }

    const [text, setText] = useState('Welcome!');
    const [lasttext, setLastText] = useState('Welcome!');

    return (


        <div style={
            { color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : 'black', height: '100vh' }} >
            <div style={
                { color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'light' ? 'white' : 'black' }} >

                <div className="container"
                    style={
                        { color: props.mode === 'dark' ? 'white' : 'black' }} >
                    <div className="form-group text-center" >
                        <label htmlFor="exampleFormControlTextarea1" > <h1 className="my-4"
                            style={
                                { color: props.mode === 'dark' ? 'white' : 'black' }} > Text Converter Box </h1></label >
                        <textarea className="form-control "
                            value={text}
                            onChange={changeFunc}
                            style={
                                { backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                            id="exampleFormControlTextarea1"
                            rows="11"
                            placeholder="Enter or paste the text here" > </textarea> </div> <button className="btn btn-primary my-2 mx-2"
                                onClick={uppercase} > UPPERCASE </button> <button className="btn btn-primary my-2 mx-2"
                                    onClick={lowercase} > lowercase </button> <button className="btn btn-primary my-2 mx-2"
                                        onClick={clearBox} > Clear Box </button> <button className="btn btn-primary my-2 mx-2"
                                            onClick={previewText} > Preview Text </button> <
                                                p className="mx-2 my-1" > characters: <script > </script>{text.length} </p >
                    <p className="mx-2" > words: {text.split(' ').filter((element) => { return element.length !== 0 }).length} </p>

                    { /* <p>characters : {text.length} </p> */} </div>

            </div> </div>


    )
};