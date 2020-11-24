//PostForm shows a form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//reduxForm is similar to that of connect function from redux
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PostField from './PostField';
import formFields from './formFields';

class PostForm extends Component {
    
    renderFields() {
                                //2nd argument: each field in formFields 
        return _.map(formFields, ({label, name}) => {
            return (
                <Field
                    key={name}
                    type='text'
                    //name = name of value storing input
                    name={name}
                    //component = how Field should appear
                    component={PostField}
                    label={label}
                />
            );
        })
    }

    render() {
        return(
            <div style={{height: '1000px', background: '#121212', padding: '70px 20px 0 20px', color: 'white'}}>
                {/* handleSubmit is given by reduxForm and will run the function we give it whenever we submit the form */}
                <div>Creating a New Post</div>
                                                        {/* () => function() === function */}
                <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
                    {this.renderFields()}
                    <Link to='/' className='link' style={{border: '1px solid white', borderRadius: '3px'}}>
                        Cancel
                    </Link>
                    <button type='submit'>Create</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors ={};
    //redux looks at properties on error object and it matches one of the fields, redux will automatically send it as prop
    //to our component
    _.each(formFields, ({ name }) => {
        if(!values[name])
            errors[name] = 'Cannot be left blank';
    })
    return errors;
}

export default reduxForm({
    validate,
    //'form' property is necessary
    form: 'PostForm',
    //set to false to save redux form inputs from being destroyed when moving on to review page
    destroyOnUnmount: false
})(PostForm);