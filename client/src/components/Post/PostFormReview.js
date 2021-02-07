//PostFormReview shows users their form inputs for for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';
                                                            //history from react router
const PostFormReview = ({ onCancel, formValues, createPost, history }) => {
    const reviewFields = _.map(formFields, ({ name }) => {
        return (
            <div key={name}>
                {formValues[name]}
            </div>
        );
    })

    return (
        <div style={{padding: '70px 20px 0 20px', color: 'white'}}>
            <h5>Please confirm your entries</h5>
            <div>
                {reviewFields}
            </div>
            <button onClick={onCancel}>Back</button>
            <button onClick={() => createPost(formValues, history)}>Create Post</button>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.PostForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(PostFormReview));