import * as React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../../components';
import { loginUser, LoginUserPayload } from '../../store/auth';
import { loginError } from '../../store';
import './Login.css'

class Login extends React.Component<any> {

    onSubmit(values) {
        this.props.loginUser(values);
    }

    renderLoginError() {
        const { loginError } = this.props;
        return (
            loginError ?
                <div className="login-error">
                    {loginError}
                </div> : null)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="login">
                {this.renderLoginError()}
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
                      autoComplete="off">
                    <div className="login-form">
                        <Input name="username"
                               placeholder="Username"
                               icon="user"/>
                        <Input name="password"
                               placeholder="Password"
                               type="password"
                               icon="lock"/>
                        <p className="forgot-password">
                            Forgot password?
                        </p>
                        <button type="submit" className="login-form__button">
                            LOGIN
                        </button>
                    </div>
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
const mapStateToProps = (state) => {
  return { loginError: loginError(state) }
};

export const LoginForm = reduxForm<LoginUserPayload, any>({
    form, validate
})(
    connect(mapStateToProps, { loginUser })(Login)
);