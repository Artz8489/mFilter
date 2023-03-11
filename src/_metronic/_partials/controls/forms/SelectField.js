import React from 'react';
import Select from 'react-select';


const SelectField = React.forwardRef((props) => {

    const { label, placeholder, option, field, setFieldValue, values, form: { touched, errors } } = props;
    const handleOnchange = (e) => {
        setFieldValue(field.name, e.value);
    }

    return (
        <>
            <label>{label}</label>
            <Select options={option} name={field.name} placeholder={placeholder}
                className={touched[field.name] && errors[field.name] ? 'is-invalid' : values[field.name] ? 'is-valid' : ""}
                onChange={(option) => handleOnchange(option)} value={field.value ? option.find(option => option.value === field.value) : ''} />
            <span className="danger">{touched[field.name] && errors[field.name]}</span>
        </>
    )
});

export default SelectField;