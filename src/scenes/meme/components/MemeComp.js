import React from "react";
// import memesData from "../memesData.js"
// import airbnblogo from "../images/Vector.png";

export default function MemeComp() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    // state initialization
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // list of all memeData
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function () {
        // this request will get 100 memes
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    }, [])

    console.log(meme)
    function getMemeImage() {
        // select a random meme from the 100 memes
        const randomNumber = Math.floor(Math.random() * allMemes.data.memes.length)
        setMeme(prev => {
            return {
                ...prev,
                randomImage: allMemes.data.memes[randomNumber].url
            }
        })


    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div style={{ margin:"auto", width:"60vh", height:"60vh", padding:"20px"}}>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    style={{padding:"5px"}}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                    style={{  margin:"auto", width:"20vh", height:"4vh"}}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} style={{ margin:"auto", width:"60vh", height:"60vh",padding:"20px"}} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}