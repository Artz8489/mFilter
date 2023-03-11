import React, { useEffect, useState } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import {
  DatePickerField,
} from "../../../../../_metronic/_partials/controls";
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import SelectField from '../../../../../_metronic/_partials/controls/forms/SelectField';
import MultiSelectField from '../../../../../_metronic/_partials/controls/forms/MultiSelect';
// import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {
  FetchAddPublisher,
  FetchUpadtePublisher
} from "../../../../../redux/actions/Publisher";
import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from "../../../../../../src/_metronic/_helpers/index";
import { Link, useHistory, useParams } from 'react-router-dom';
import _ from "lodash";
import Select from "react-select";
import swal from 'sweetalert';

// import toastr from 'reactjs-toastr';
// import 'reactjs-toastr/lib/toast.css';

const schema = yup.object().shape({
  // name: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
})

const AddPublisher = (props) => {
  //let { id } = useParams();
  const [hide, setHide] = useState(false);
  const [edit, setEdit] = useState(false)
  const [flatPrice, setFlatPrice] = useState("")
  const [flatDefault, setFlatDefault] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postback_url: '',
    postback_url_macros: '',
    postback_url_method: '',
    attribution_window: '',
    commssion_type: '',
    commssion_flat_price: '',
    commssion_flat_percentage: '',
    postback_data_type: '',
    package_name: ''
  })


  // const [updateData, setupdateData] = useState({
  //     email: '',
  //     phone: '',
  //     address: '',
  //     postback_url: '',
  //     postback_url_macros: '',
  //     postback_url_method: '',
  //     attribution_window: '',
  //     commssion_type: '',
  //     commssion_flat_price: '',
  //     commssion_flat_percentage: '',
  //     postback_data_type: '',
  // })
  const users = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
  ]
  const type = [
    { value: "Price", label: "Price" },
    { value: "Percent", label: "Percent" },
  ]
  const backtype = [
    { value: "NotFraud", label: "NotFraud" },
    { value: "Fraud", label: "Fraud" },
    { value: "All", label: "All" },
  ]

  const dispatch = useDispatch();
  const publisherAdd_data = useSelector((state) => state.PublisherAdd.publisherAdd_data)
  const publisherUpdate = useSelector((state) => state.PublisherAdd.publisherUpdate_data)
  const IdValue = JSON.parse(localStorage.getItem('PublisherIdValue'))
  const id = IdValue && IdValue.id
  const history = useHistory()

  const [BlockLIstOption, setBlockLIst] = useState()
  const [SelectedBlockLIstOption, setSelectedBlockListOption] = useState('')
  const [selectedOption, setSelectedOption] = useState("none");

  const FormSubmit = (formData) => {
    let submitValues = {}
    if (formData.commssion_type === "Percent") {
      submitValues = {
        name: formData.name,
        package_name: formData.package_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postback_url: formData.postback_url,
        postback_url_macros: formData.postback_url_macros,
        postback_url_method: formData.postback_url_method,
        attribution_window: formData.attribution_window,
        commssion_type: formData.commssion_type,
        commssion_flat_percentage: formData.commssion_flat_percentage,
        postback_data_type: formData.postback_data_type
      }
    }
    else if (formData.commssion_type === "Price") {
      submitValues = {
        name: formData.name,
        package_name: formData.package_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postback_url: formData.postback_url,
        postback_url_macros: formData.postback_url_macros,
        postback_url_method: formData.postback_url_method,
        attribution_window: formData.attribution_window,
        commssion_type: formData.commssion_type,
        commssion_flat_price: formData.commssion_flat_price,
        commssion_flat_percentage: formData.commssion_flat_percentage,
        postback_data_type: formData.postback_data_type
      }
    }

    if (!edit) {
      dispatch(FetchAddPublisher(submitValues))
      swal("", "Created successfully !", "success");
      // history.push('/mtrackit/publisher')
    }
    else {
      let upValues = {
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postback_url: formData.postback_url,
        postback_url_macros: formData.postback_url_macros,
        postback_url_method: formData.postback_url_method,
        attribution_window: formData.attribution_window,
        commssion_type: formData.commssion_type,
        // commssion_flat_percentage: formData.commssion_flat_percentage,
        commssion_flat_price: formData.commssion_flat_price,
        postback_data_type: formData.postback_data_type
      }

      dispatch(FetchUpadtePublisher(id, upValues));
      swal("", "Updated successfully !", "success");

      // history.push('/mtrackit/publisher')
    }
    // {
    //   let upValues = {
    //     email: formData.email,
    //     phone: formData.phone,
    //     address: formData.address,
    //     postback_url: formData.postback_url,
    //     postback_url_macros: formData.postback_url_macros,
    //     postback_url_method: formData.postback_url_method,
    //     attribution_window: formData.attribution_window,
    //     commssion_type: formData.commssion_type,
    //     commssion_flat_percentage: formData.commssion_flat_percentage,
    //     // commssion_flat_price: formData.commssion_flat_price,
    //     postback_data_type: formData.postback_data_type
    //   }

    //   dispatch(FetchUpadtePublisher(id, upValues));
    //   swal("", "Updated successfully !", "success");

    //   // history.push('/mtrackit/publisher')
    // }
  }

  useEffect(() => {
    if (publisherAdd_data && publisherAdd_data.status === "true") {
      setHide(true)
    }
  }, [publisherAdd_data])

  useEffect(() => {
    if (IdValue && IdValue.id) {
      setEdit(true)

      const selOption = _.filter(type, function (x) {
        if (_.includes(IdValue.commssion_type, x.value)) {
          return x
        }
      })
      setFormData(prevState => ({
        ...prevState,
        name: IdValue.name,
        email: IdValue.email,
        phone: IdValue.phone,
        address: IdValue.address,
        postback_url: IdValue.postback_url,
        postback_url_macros: IdValue.postback_url_macros,
        postback_url_method: IdValue.postback_url_method,
        attribution_window: IdValue.attribution_window,
        commssion_flat_price: IdValue.commssion_flat_price,
        commssion_flat_percentage: IdValue.commssion_flat_percentage,
        postback_data_type: IdValue.postback_data_type,
        commssion_type: IdValue.commssion_type
      }))
    }
  }, [IdValue && IdValue.id])

  const commisonChange = ((e) => {
    console.log('eee', e.target.value)
    setFormData((formData) => ({...formData,[e.target.name]: e.target.value}))
  })

  console.log('fomdata', formData)
  return (
    <Card className='reportfilter-Ctr'>
      <Card.Body className='pt-4 pb-4'>
        <Formik
          enableReinitialize={true}
          validationSchema={schema}
          initialValues={formData}
          onSubmit={(values, { resetForm }) => {
            FormSubmit(values)
            setTimeout(function () {
              resetForm()
              history.push('/mtrackit/publisher')
            }, 1000);
          }}>
          {({ values, setFieldValue, handleBlur, handleChange, touched, setFieldTouched }) => (
            <div className='userform-Ctr'>
              <Form>
                <Row gutter={[20, 20]}>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='name'
                      component={Input}
                      placeholder='Enter_Name'
                      label='Name'
                      type='text'
                      onChange={handleChange}
                      value={
                        !edit ?
                          values.name || ''
                          : IdValue.name
                      }
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='email'
                      component={Input}
                      placeholder='Enter_Email'
                      label='Email'
                      type='email'
                      onChange={handleChange}
                      value={values.email || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='address'
                      component={Input}
                      placeholder='Enter_Invoicing_Address'
                      label='Invoicing_Address'
                      type='text'
                      onChange={handleChange}
                      value={values.address || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='postback_url'
                      component={Input}
                      placeholder='Enter_Postback_Url '
                      label='Postback_Url '
                      type='text'
                      onChange={handleChange}
                      value={values.postback_url || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='phone'
                      component={Input}
                      placeholder='Enter_Telephone_Number'
                      label='Telephone_Number'
                      type='text'
                      onChange={handleChange}
                      value={values.phone || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='postback_url_macros'
                      component={Input}
                      placeholder='Enter_Postback_Url_Macros'
                      label='Postback_Url_Macros'
                      type='text'
                      onChange={handleChange}
                      value={values.postback_url_macros || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      component={SelectField}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      option={users}
                      readonly={false}
                      name='postback_url_method'
                      // component={Input}
                      placeholder='Enter_Postback_Url_Method'
                      label='Postback_Url_Method'
                      type='text'
                      onChange={handleChange}
                      value={values.postback_url_method || ''}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='attribution_window'
                      component={Input}
                      placeholder='Enter_Attribution_Window'
                      label='Attribution_Window'
                      type='text'
                      onChange={handleChange}
                      value={values.attribution_window || ''}
                    />
                  </Col>
                  <Row className='ml-0' gutter={[20, 20]} style={{ width: "100%" }}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label>Commission Type</label>
                      <select
                        className='form-select form-select-sm  w-300px p-3'
                        data-control='select'
                        data-placeholder='Select an option'
                        data-allow-clear='true'
                        onChange={(e) => {commisonChange(e)}}
                        name='commssion_type'
                        style={{width:"20%", border:"1px solid #EBEDF3" ,borderRadius:"2px"}}
                        >
                        <option>select....</option>
                        {
                          type && type.map((item, i) => {
                            return (
                              <option
                                key={i}
                                value={item.value}
                                selected={edit ? IdValue && IdValue.commssion_type === item.value ? item.value : false : false}
                              >
                                {item.value}
                              </option>
                            )

                          })
                        }
                      </select>




                      {/* <Select
                        placeholder='Enter_Commission_Type'
                        name="commssion_type"
                        // onBlur={() => setFieldTouched("commssion_type", true)}
                        // onChange={(opt, e) => {
                        //   let { value } = opt
                        //   setFlatPrice(value)
                        //   setFlatDefault(opt)
                        //   setFieldValue("commssion_type", opt.value);
                        // }}
                        value={IdValue ===  type ? IdValue : values.commssion_type }
                        // value={values.commssion_type || ''}
                        value={type.filter(function(selOption) {
                          return selOption.value === selectedOption;
                        })}
                        options={type}
                        onChange={handleTypeSelect}

                      // touched={touched.commssion_type}
                      /> */}
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      {
                        (() => {
                          if (formData.commssion_type === "Price") {
                            return <Field
                              readonly={false}
                              name='commssion_flat_price'
                              component={Input}
                              placeholder='Enter_Commission_Flat_Price'
                              label='Commission_Flat_Price'
                              type='text'
                              onChange={handleChange}
                              value={values.commssion_flat_price || ''}
                            />
                          }
                          else if (formData.commssion_type === "Percent") {
                            return <Field
                              readonly={false}
                              name='commssion_flat_percentage'
                              component={Input}
                              placeholder='Enter_Commission_Flat_Percentage'
                              label='Commission_Flat_Percentage'
                              type='text'
                              onChange={handleChange}
                              value={values.commssion_flat_percentage || ''}
                            />
                          }
                        })()
                      }
                    </Col>
                  </Row>

                  <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      component={SelectField}
                      setFieldValue={setFieldValue}
                      handleBlur={handleBlur}
                      option={backtype}
                      readonly={false}
                      name='postback_data_type'
                      // component={Input}
                      placeholder='Enter_Postback_Data_Type'
                      label='Postback_Data_Type'
                      type='text'
                      onChange={handleChange}
                      value={values.postback_data_type || ''}
                    />
                  </Col>
                  {/* <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Field
                      readonly={false}
                      name='package_name'
                      component={Input}
                      placeholder='Enter_Package_Nmae'
                      label='Package_Name'
                      type='text'
                      onChange={handleChange}
                      value={
                        !edit ?
                          values.package_name || ''
                          : IdValue.package_name
                      }
                    />
                  </Col> */}
                </Row>
                <div className='text-left'>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <div className='w-100' style={{ textAlign: 'right' }}>
                        <Button type='submit' className='w-50'>
                          {!edit ? ' Add Publisher' : 'Update Publisher'}
                        </Button>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                      <div className='w-100' style={{ textAlign: 'left' }}>
                        <Link
                          to='/mtrackit/publisher'
                        >
                          <Button className='w-50'>Back</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
export default AddPublisher