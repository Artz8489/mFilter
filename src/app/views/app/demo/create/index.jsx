import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button/Button';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
    Input,
    Select,
    DatePickerField
} from "../../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    dateOfBbirth: Yup.mixed()
        .nullable(false)
        .required("Date of Birth is required"),
});

export default class DemoCreate extends Component {
    render() {
        return (
            <div className="card card-custom">
                <Card>
                    <CardHeader title="Create">
                        <CardHeaderToolbar>
                            <Link className="btn btn-light" to="list">
                                <i className="fa fa-arrow-left"></i>
                                Back
                            </Link>
                            <Button className="btn btn-light ml-2" >
                                <i className="fa fa-redo"></i>
                                Reset
                            </Button>

                        </CardHeaderToolbar>
                    </CardHeader>
                    <CardBody>
                        <>
                            <Formik
                                initialValues={{
                                    username: '',
                                    email: '',
                                    dateOfBbirth: ''
                                }}
                                validationSchema={DisplayingErrorMessagesSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="form form-label-right">
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <Field name="username"
                                                    component={Input}
                                                    placeholder="username"
                                                    label="username" />
                                                {touched.username && errors.username && <div>{errors.username}</div>}
                                            </div>

                                            <div className="col-lg-4">
                                                <Field name="email"
                                                    component={Input}
                                                    placeholder="email"
                                                    label="email"
                                                />
                                                {touched.email && errors.email && <div>{errors.email}</div>}
                                            </div>

                                            <div className="col-lg-4">
                                                <DatePickerField
                                                    name="dateOfBbirth"
                                                    label="Date of Birth"
                                                />
                                                {touched.dateOfBbirth && errors.dateOfBbirth && <div>{errors.dateOfBbirth}</div>}
                                            </div>

                                            <div className="col-lg-4">
                                                <Select name="Gender" label="Gender">
                                                    <option value="Female">Female</option>
                                                    <option value="Male">Male</option>
                                                </Select>
                                            </div>

                                        </div>

                                        <button type="submit" className="btn btn-primary font-weight-bolder
                                        font-size-sm mr-3">Submit</button>

                                    </Form>
                                )}
                            </Formik>
                        </>
                    </CardBody>
                </Card>
            </div>



        )
    }
}
