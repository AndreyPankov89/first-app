import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    const today = new Date(); 
    const tekDate =`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
    
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="label-wrapper">
                <span className="app-list-item-label">
                    Lorem ipsum dolor sit amet.
                </span>
                <span className="app-list-item-data">
                    {tekDate}
                </span>
            </span>
            
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-small">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-small">
                    <i className="fa fa-trash-o"></i>
                </button>   
                    <i className="fa fa-heart"></i>
            </div>

        </li>
    )
}

export default PostListItem;