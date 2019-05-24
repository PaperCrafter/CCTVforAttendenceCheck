import React from 'react';

const PostImages = ({images}) => {
    if(images.lencth === 0){
        return(
            <div>
            </div>
        );
    }

    if(images.length === 1){
        return(
            <img src = {'http://localhost:8001/${images[0].src}'}/>
        );
    }

    if(images.length === 2){
        return(
            <div>
                <img src = {'http://localhost:8001/${images[0].src}'} width="50%"/>
                <img src = {'http://localhost:8001/${images[1].src}'} width="50%"/>
            </div>
        );
    }
    return(
        <div>
            <img src = {'http://localhost:8001/${images[0].src}'} width="50%"/>
        </div>
    );

}