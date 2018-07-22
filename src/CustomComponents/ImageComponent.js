import React from 'react'

const styleImage = {
    width : 200,
    height : 200
}
const ImageComponent = () =>{
    return(
        <div>
            <img src = {require('./logo_ss.PNG')} style = {styleImage} />
            <br/>
            <h2>
            Like us : https://www.facebook.com/codemakerz <br/>
            YouTube : https://www.youtube.com/martand89
            </h2>
        </div>
    )
}

export default ImageComponent