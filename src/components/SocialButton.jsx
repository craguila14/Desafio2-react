import React from "react";

function SocialButton(props) {
    return (
    <div className="botones">
         <button><i class={props.btn}></i></button>           
    </div>
    )
}
export default SocialButton