import React from 'react';
import Select from 'react-select';

const MultiSelectField = React.forwardRef((props) => {

    const { label, placeholder, option, setFieldValue, field } = props;
    const handleOnchange = (e) => {
        setFieldValue(field.name, e);
    }

    return (
        <>
            <label>{label}</label>
            <Select options={option} className="basic-multi-select"
                classNamePrefix="select" isMulti placeholder={placeholder}
                name={field.name} onChange={handleOnchange}
                value={field.value ? option.find(option => option.value === field.value) : ''} />
        </>
    )
});

export default MultiSelectField;