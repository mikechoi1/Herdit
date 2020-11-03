//PostForm shows a form for user to add input
import React, { Component } from 'react';
//reduxForm is similar to that of connect function from redux
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class PostForm extends Component {
    renderField({ input, label, type, meta: { touched, error } }) {
        return(
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
                        component={this.renderField}
                        label='Title'
                    />
                    <Field
                        type='text'
                        name='postBody'
                        component={this.renderField}
                        label='Body'
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

function validate(values) {
    const errors ={};
    //redux looks at properties on error object and it matches one of the fields, redux will automatically send it as prop
    //to our component
    if(!values.postTitle) {
        errors.postTitle = 'You must provide a title';
    }
    if(!values.postBody) {
        errors.postBody = 'You must provide some content';
    }
    return errors;
}

export default reduxForm({
    validate,
    //'form' property is necessary
    form: 'PostForm'
})(PostForm);