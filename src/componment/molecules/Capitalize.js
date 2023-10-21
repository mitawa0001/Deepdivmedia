import React, { useState } from "react";
import WithLayout from "../templates/Layout";





const Capitalize = (props) => {
    const [TextHere, SetTextHere] = useState("");
    const [letters, setLetters] = useState([]);

    const newstring = "here, we are !! , lets start";
    const split = newstring.split(" ");
    console.log(split);




    // const extractFirstLetters = (words) => {
    //     return words.map(word => word.charAt(0));

    // }
    // const firstLetters = extractFirstLetters(TextHere);



    const handleUpperCase = (props) => {
        console.log("handle click" + TextHere)
        let UpperCaseText = TextHere.toUpperCase()
        SetTextHere(UpperCaseText)

    }
    const handleCapitilize = () => {
        let Capitilize = TextHere[0].toUpperCase() + TextHere.substring(1);
        SetTextHere(Capitilize)
    }
    const handleLowerCase = () => {
        let LowerCase = TextHere.toLowerCase()
        SetTextHere(LowerCase)
    }
    const handleOnChange = (e) => {
        SetTextHere(e.target.value)
    }
    const handleClear = () => {
        SetTextHere("");
    }

    const handleFirst = () => {
        const firstLetters = split.map(word => word.charAt(0));
        setLetters(firstLetters);

    };

    const handleReverse = () => {
        let Reverse = [...TextHere].reverse().join("");
        SetTextHere(Reverse)

    };
    const handleLastWord = () => {
        let LastWord = TextHere.split(" ",4);
        SetTextHere(LastWord);
    };




    return (
        <>
            <div className="container my-5">
                <h2>Capitilize Here</h2>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" value={TextHere}></textarea>
                <button className="btn btn-primary mt-3" onClick={handleUpperCase}>UpperCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleLowerCase}>LowerCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleCapitilize}>Capitilize</button>
                <button className="btn btn-danger mt-3 mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleFirst}>First Index</button>
                <button className="btn btn-secondary mt-3 mx-2" onClick={handleReverse}>Reverse </button>
                <button className="btn btn-warning mt-3 mx-2" onClick={handleLastWord}> LastWord</button>


            </div>
            {/* <ul>
                {firstLetters.map((letter, index) => (
                    <li key={index}>{letter}</li>
                ))}
            </ul> */}
            <div className="container -my-3">
                <h2> Text Counter</h2>
                <p>We have {TextHere.split(" ").length} Words and {TextHere.length} Words</p>
                <p>Reading the Words in {0.4 * TextHere.split(" ").length}</p>
                <h3 className="my-4">Preview the Text</h3>
                <p>{TextHere.length > 0 ? TextHere : "Please enter Text"}</p>

                <div>
                    {letters.length > 0 ? (
                        <p>First letters: {letters}</p>
                    ) : (
                        <p>Click the button to find first letters</p>
                    )}
                </div>


            </div>
        </>
    );
}
export default WithLayout(Capitalize);

