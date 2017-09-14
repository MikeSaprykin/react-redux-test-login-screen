import * as React from 'react';
import { Field } from 'redux-form';
import './input.css'

export class Input extends React.Component<any> {

    renderField(field) {
        const { meta: { error, touched }} = field;
        const { input, type = 'text', placeholder} = field;
        const className = `input-field-block ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <input className="input-field__input"
                       type={type}
                       placeholder={placeholder}
                       {...input}/>
                <div className="input-field__error">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderIcon() {
        const { icon } = this.props;
        return icon ?
            <span className={`input-field__icon ${icon}`} /> :
            null
    }

    render() {
        const { name, placeholder, type } = this.props;
        return (
            <div className="input-field">
                {this.renderIcon()}
                <Field name={name}
                       placeholder={placeholder}
                       type={type}
                       component={this.renderField} />
            </div>
        )
    }
    
}