import * as React from 'react';
import { Field } from 'redux-form';

export class Input extends React.Component<any> {

    renderField(field) {
        const { placeholder } = this.props;
        const { meta: { error, touched }} = field;
        const className = `input-field ${touched && error ? 'has-error' : ''}`;
        const { input: { onChange }} = field;
        return (
            <div className={className}>
                <input className="input-field__input"
                       type="text"
                       placeholder={placeholder}
                       onChange={onChange}
                />
            </div>
        )
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