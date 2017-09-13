import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

export class Input extends React.Component<any> {

    renderField(field: WrappedFieldProps) {
        const { meta: { error, touched }, input} = field;
        const { placeholder, type = 'text' } = this.props;
        const className = `input-field ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                {this.renderIcon()}
                <input className="input-field__input"
                       type={type}
                       placeholder={placeholder}
                       {...input}
                />
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
        return (
            <div className="Input">
                <Field name={this.props.name}
                       component={this.renderField.bind(this)} />
            </div>
        )
    }
    
}