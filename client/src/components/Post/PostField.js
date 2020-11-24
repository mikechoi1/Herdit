//PostField contains logic to render a single label and textarea input
import React from 'react';

//props are given by redux form
const PostField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <textarea {...input} type={type} />
                <div style={{color: 'red', marginBottom: '10px'}}>
                    {touched && error}
                </div>
            </div>
        </div>
    );
}
export default PostField;