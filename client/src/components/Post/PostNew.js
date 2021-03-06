//PostNew shows PostForm and PostFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import PostForm from './PostForm';
import PostFormReview from './PostFormReview';

class PostNew extends Component {
    //general way of initializing component level state
    // constructor(props) {
    //     super(props);

    //     this.state = { new: true };
    // }
    //if using cra, can shorten to:
    state = { showFormReview: false };

    renderContent() {
        if(this.state.showFormReview)
            return <PostFormReview onCancel={() => this.setState({showFormReview : false})}/>
        // when user submits post form, the PostFormReview will be shown instead
        return <PostForm onPostSubmit={() => this.setState({showFormReview : true})} />
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
//need reduxForm to remove redux form values when user cancels the form creation or navigates elsewhere
export default reduxForm({
    form: 'PostForm'
})(PostNew);