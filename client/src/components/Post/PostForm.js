//PostForm shows a form for user to add input
import React, { Component } from 'react';
//reduxForm is similar to that of connect function from redux
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class PostForm extends Component {
    render() {
        return(
            <div style={{height: '1000px', background: '#121212', padding: '70px 20px 0 20px', color: 'white'}}>
                {/* handleSubmit is given by reduxForm and will run the function we give it whenever we submit the form */}
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    <Field
                        type='text'
                        //name = name of value storing input
                        name='postTitle'
                        //component = how Field should appear
                        component='input'
                    />
                    <Link to='/' className='link' style={{border: '1px solid white', borderRadius: '3px'}}>
                        Cancel
                    </Link>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    //'form' property is necessary
    form: 'PostForm'
})(PostForm);