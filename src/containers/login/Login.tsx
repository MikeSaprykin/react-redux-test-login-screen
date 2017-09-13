import * as React from 'react';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {Input} from '../../components/input/Input';
import {loginUser} from '../../store/auth';
import {LoginUserPayload} from '../../store/auth/actions/auth.actions';

class Login extends React.Component<any> {

    onSubmit(values) {
        this.props.loginUser(values);
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
    const errors: any = {};
    if(!values.username) {
        errors.username = 'Username is required!'
    }
    if(!values.password) {
        errors.password = 'Password is required!'
    }
    return errors;
};

const form = 'LoginForm';

export const LoginForm = reduxForm<LoginUserPayload, any>({
    form, validate
})(
    connect(null, { loginUser })(Login)
);