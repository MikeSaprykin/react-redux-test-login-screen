import * as React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../../components';
import { loginUser, LoginUserPayload } from '../../store/auth';
import './Login.css'

class Login extends React.Component<any> {

    onSubmit(values) {
        this.props.loginUser(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="login">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
                      autoComplete="off">
                    <Input name="username"
                           placeholder="Username"
                           icon="user"/>
                    <Input name="password"
                           placeholder="Password"
                           type="password"
                           icon="lock"/>
                    <button type="submit" className="login-form__button">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
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