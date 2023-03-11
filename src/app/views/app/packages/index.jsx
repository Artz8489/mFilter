/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    Input,
} from "../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";
import SelectField from '../../../../_metronic/_partials/controls/forms/SelectField';

const initialValues = {
    packagename: '',
    packagetitle: '',
    role: ''
}

const schema = yup.object().shape({
    packagename: yup.string().required(),
    packagetitle: yup.string().required(),
    role: yup.string().required(),
});

export default function Packages() {
    const roles = [
        { value: "1", label: "Admin" },
        { value: "2", label: "Customer" },
    ]
    return (
        <>
            <Card className="reportfilter-Ctr">
                <Card.Header className="pb-3">
                    <h5>Add Package</h5>
                </Card.Header>
                <Card.Body className="pt-4 pb-4">
                    <Formik
                        enableReinitialize={true}
                        validationSchema={schema}
                        initialValues={initialValues}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                            console.log(values);
                        }}
                    >
                        {({ values, setFieldValue, handleBlur }) => (
                            <div className="userform-Ctr">
                                <Form>
                                    <Row gutter={[20, 20]}>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="packagename"
                                                component={Input}
                                                placeholder="Enter Package name"
                                                label="Package Name"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="packagetitle"
                                                component={Input}
                                                placeholder="Enter Package Title"
                                                label="Package Title"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                component={SelectField}
                                                name="role" label="Role"
                                                placeholder="Select Role"
                                                option={roles}
                                                values={values}
                                                setFieldValue={setFieldValue}
                                                handleBlur={handleBlur}
                                            />
                                        </Col>
                                    </Row>
                                    <div className="text-left">
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Button type="submit" className="w-100">
                                                    Save
                                                </Button>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Button className="w-100">
                                                    Clear
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </>
    )
}
