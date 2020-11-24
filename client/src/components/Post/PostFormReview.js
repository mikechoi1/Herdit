//PostFormReview shows users their form inputs for for review
import React from 'react';
import { connect } from 'react-redux';

const PostFormReview = ({ onCancel, formValues }) => {
    return (
        <div style={{height: '1000px', background: '#121212', padding: '70px 20px 0 20px', color: 'white'}}>
            <h5>Please confirm your entries</h5>
            <div>
                <h1>{formValues.postTitle}</h1>
                <p>{formValues.postBody}</p>
            </div>
            <button onClick={onCancel}>Back</button>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.PostForm.values };
}

export default connect(mapStateToProps)(PostFormReview);