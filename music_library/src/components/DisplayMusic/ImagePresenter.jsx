import React from 'react';

const ImagePresenter = ({image, altText}) => {
    return ( 
        <div>
           <img src={image} class="float-left" alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;