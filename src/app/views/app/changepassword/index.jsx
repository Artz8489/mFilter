/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Input } from "../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";
import * as Yup from "yup";
import { FetchChangeIncidents } from "../../../../redux/actions/LoginAction";
import { useSelector, useDispatch } from "react-redux";
import { values } from "lodash";

import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../../utils/helpers";

import { AUTH_DATA } from "../../../utils/const";

const initialValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
};

const schema = yup.object().shape({
  current_password: yup.string().required("This field is required"),
  new_password: yup
    .string()
    //  .required("This field is required"),
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("password is required"),
  confirm_password: yup
    .string()
   
    .oneOf([Yup.ref("new_password"), null], "password must match")
    .required("Confirm password is required"),
});



export default function ChangePassword(props) {
  const dispatch = useDispatch();
  

  const getauthvalue = JSON.parse(
    getLocalStorage(AUTH_DATA.AUTH)
  )
  const userId = getauthvalue && getauthvalue?.id;

  const change_data = useSelector((state) => state.login.change_data);


  return (
    <>
      <p>{change_data.message}</p>
      <Card className="reportfilter-Ctr">
        <Card.Header className="pb-3">
          <h5>Change Password</h5>
        </Card.Header>
        <Card.Body className="pt-4 pb-4">
          <Formik
            enableReinitialize={true}
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              console.log(values);

              const payload = {
                uid: userId,
                oldPassword: values.current_password,
                newPassword: values.new_password,
              };
              dispatch(FetchChangeIncidents(payload));
            }}
          >
            {({ values, setFieldValue, handleBlur, errors, handleChange }) => (
              <Form>
                <Row gutter={[20, 20]}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field
                      name="current_password"
                      component={Input}
                      placeholder="Current Password"
                      label="Current Password"
                      type="text"
                      onChange={handleChange}
                      value={values.current_password}
                      // className="w-100 p-2 mt-2"
                    />
                    <span class="error" style={{ color: "red" }}>
                      {errors.current_password}
                    </span>
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field
                      name="new_password"
                      component={Input}
                      placeholder="New Password"
                      label="New Password"
                      type="text"
                      onChange={handleChange}
                      value={values.new_password}
                    />
                    <span class="error" style={{ color: "red" }}>
                      {errors.new_password}
                    </span>
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Field
                      name="confirm_password"
                      component={Input}
                      placeholder="Confirm Password"
                      label="Confirm Password"
                      type="text"
                      onChange={handleChange}
                
                    />
                    <span class="error" style={{ color: "red" }}>
                      {errors.confirm_password}
                    </span>
                  </Col>
                </Row>

                <div className="text-left">
                  <Button type="submit">Save</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
}
