import React from "react"

/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

export default function Die(props) {


    return (
        <div className="die-face" onClick ={(e)=>props.dieHeld(e,props.id)} >
            <h2  className= {props.isHeld ? "die-face-held":"die-num"}>{props.value}</h2>
        </div>
        
    )
}