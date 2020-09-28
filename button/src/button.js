import React from "react"
import { useState } from "react"



function Button() {
  // console.log(this)
  // function shadow() {
  //   let [shadow, setShadow] = useState(true)
  //   if (shadow) {
  //     return "shadow"
  //   }
  //   else {
  //     return ""
  //   }
  // }
  // let isShadow = true
  // let shadowClass = isShadow ? "shadow" : null
  let [buttonText, setButtonText] = useState(0)
  // let [likeText, setLikeText] = useState("likes")
  // this.className.toggle("shadow")
  function likes() {
    if (buttonText === 1) {
      return "like"
    } else {
      return "likes"
    }
  }
  return (
    <button className="btn" onClick={() => setButtonText(buttonText + 1)}>
      {buttonText} {likes()}
    </button>
  )
}

export default Button
