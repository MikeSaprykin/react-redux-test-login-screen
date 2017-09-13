import * as React from 'react';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {Input} from '../../components/input/Input';

class Login extends React.Component<any> {

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (<div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Input name="username"
                       placeholder="Username"
                       icon="user"/>
                <Input name="password"
                       placeholder="Password"
                       type="password"
                       icon="lock"/>
                <button type="submit"> SUBMIT</button>
            </form>
        </div>)
    }

}

const validate = (values) => {

    // const errors: any = {};
    //
    // if(!values.title) {
    //     errors.title = 'Enter a title!'
    // }
    // if(!values.categories) {
    //     errors.categories = 'Enter some categories!'
    // }
    // if(!values.content) {
    //     errors.content = 'Enter some content!'
    // }
    //
    // return errors;
    return {};
};

const form = 'LoginForm';

export const LoginForm = reduxForm<any, any>({
    form, validate
})(
    connect(null, null)(Login)
);