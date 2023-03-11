/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    Input,
} from "../../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";
import SelectField from '../../../../../_metronic/_partials/controls/forms/SelectField';
import MultiSelectField from '../../../../../_metronic/_partials/controls/forms/MultiSelect';

const initialValues = {
    deep_dive_analysis: '',
    user: '',
    package: '',
    dashboard_type: '',
    menus: '',
    filters: '',
}

const schema = yup.object().shape({
    deep_dive_analysis: yup.string().required(),
    user: yup.string().required(),
    package: yup.string().required(),
    dashboard_type: yup.string().required(),
});

export default function UsermanagementEdit() {
    const users = [
        { value: "ckz2gdafy06721ofa0fwr3h92", label: "admin@mfilterit.com" },
        { value: "ckz6ry8mb31280is7nbuk2g38", label: "ajit.singh@mfilterit.com" },
        { value: "ckz2k4vvc53110io9jskt1e5k", label: "alshaya@mfilterit.com" },
        { value: "ckz58qh0715920in7ui1us0lc", label: "amit.bajpai1@hdfcbank.com" },
        { value: "cl25o9309443780in85iau3kfw", label: "amit.patil@games24x7.com" },
        { value: "ckz58h6th10480in7ysklc3xy", label: "ankush.sharma@rblbank.com" },
        { value: "cl24i28xz384580in80y8prkks", label: "anshu.srivastava@zestmoney.in" },
    ]
    const packages = [
        { value: "1", label: "in.itcstore" },
        { value: "2", label: "in.zestmoney" },
        { value: "3", label: "com.my11circle1.android" },
        { value: "4", label: "in.itchotel" },
        { value: "5", label: "itc-wd-app" },
        { value: "6", label: "com.rblbank" },
        { value: "7", label: "ae.americaneagle" },
        { value: "8", label: "ae.bathandbodyworks" },
        { value: "9", label: "com.hdfcbank" },
    ]
    const menu = [
        { value: "1", label: "All" },
        { value: "2", label: "Dashboard" },
        { value: "3", label: "Address" },
        { value: "4", label: "Bank Verification" },
        { value: "5", label: "Black List Email" },
        { value: "6", label: "Dashboard" },
        { value: "7", label: "Company Search" },
        { value: "8", label: "Data Check" },
        { value: "9", label: "Email" },
        { value: "10", label: "Location" },
    ]
    const filters = [
        { value: "1", label: "Filters" },
        { value: "2", label: "Channel" },
        { value: "3", label: "Category" },
        { value: "4", label: "Puplisher" },
        { value: "5", label: "Country" },
        { value: "6", label: "Brand" },
        { value: "7", label: "Priority" }
    ]
    const dashboard_type = [
        { value: "1", label: "Impression" },
        { value: "2", label: "Click" },
    ]
    return (
        <>
            <Card className="reportfilter-Ctr">
                <Card.Header className="pb-3">
                    <h5>User Package Configuration</h5>
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
                                                name="user"
                                                component={Input}
                                                placeholder="demo@mfilterit.com"
                                                label="Users"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="package"
                                                component={Input}
                                                placeholder="ae.americaneagle"
                                                label="Package"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                component={MultiSelectField}
                                                name="menus" label="Menu"
                                                placeholder="Select Menu"
                                                option={menu}
                                                values={values}
                                                setFieldValue={setFieldValue}
                                                handleBlur={handleBlur}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                component={MultiSelectField}
                                                name="filters" label="Filters"
                                                placeholder="Select Filters"
                                                option={filters}
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
