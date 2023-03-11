import React, { useEffect, useState, useRef } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import {
    DatePickerField,
} from "../../../../../_metronic/_partials/controls";
import { Formik, useFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import SelectField from '../../../../../_metronic/_partials/controls/forms/SelectField';
import MultiSelectField from '../../../../../_metronic/_partials/controls/forms/MultiSelect';
// import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {
    FetchAddCampaign,
    FetchUpdateCampaign
} from "../../../../../redux/actions/CampaignAction";
import { Checkbox } from "../../../../../_metronic/_partials/controls/forms/Checkbox";
import { useSelector, useDispatch } from 'react-redux';
import { values } from 'lodash';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';





// const initialValues = {
//     campid: '',
//     custname: '',
//     agencyname: '',
//     campaignname: '',
//     campaigntype: '',
//     landingpage: '',
//     macros: '',
//     // checked: '',
//     currency: '',
//     budget: '',
//     start_date: '',
//     end_date: '',
//     status: '',
//     packagename: '',
// };

// const schema = yup.object().shape({
//     campid: yup.string().required(),
//     custname: yup.string().required(),
//     agencyname: yup.string().required(),
//     agencyname: yup.string().required(),
//     campaignname: yup.string().required(),
//     campaigntype: yup.string().required(),
//     landingpage: yup.string().required(),
//     // checked: yup.string().required(),
//     macros: yup.string().required(),
//     currency: yup.string().required(),
//     budget: yup.string().required(),
//     start_date: yup.string().required(),
//     end_date: yup.string().required(),
//     status: yup.string().required(),
//     packagename: yup.string().required()

// });

const AddCampaign = () => {
    const ref = useRef(null);
    const [hide, setHide] = useState(false);
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        campaign_id: '',
        customer_name: '',
        agency_name: '',
        campaign_name: '',
        campaign_type: '',
        landing_page_url: '',
        macros: '',
        country: '',
        // checked: '',
        currency: '',
        budget: '',
        start_date: '',
        end_date: '',
        status: '',
        package_name: '',
    })

    const [updateData, setupdateData] = useState({
        campaign_id: '',
        campaign_type: '',
        landing_page_url: '',
        macros: '',
        country: '',
        // checked: '',
        currency: '',
        budget: '',
        start_date: '',
        end_date: '',
        status: '',
        // package_name: '',
    })

//    const Schema = yup.object().shape({
//     campaign_id: yup.string().required(),
//     customer_name: yup.string().required(),
//     agency_name: yup.string().required(),
//     campaign_name: yup.string().required(),
//     campaign_type: yup.string().required(),
//     landing_page_url: yup.string().required(),
//     macros: yup.string().required(),
//     country: yup.string().required(),
//     currency: yup.string().required(),
//     budget: yup.number().required(),
//     start_date: yup.string().required(),
//     status: yup.string().required(),
//     end_date: yup.string().required(),
//     status: yup.string().required(),
//     package_name: yup.string().required(),
// });
  
    const initVal = edit ? updateData : formData
  


    const filters = [
        { value: "1", label: "Filters" },
        { value: "2", label: "Channel" },
        { value: "3", label: "Category" },
        { value: "4", label: "Puplisher" },
        { value: "5", label: "Country" },
        { value: "6", label: "Brand" },
        { value: "7", label: "Priority" }
    ];

    const location = [
        { value: "1", label: "India" },
        { value: "2", label: "Pakisthan" },
        { value: "3", label: "Iran" },
        { value: "4", label: "Iraq" },
        { value: "5", label: "Asia" },
        { value: "6", label: "USA" },
        { value: "7", label: "UK" }
    ];

    const Landing = [
        { value: "1", label: "demo1" },
        { value: "2", label: "demo2" },
        { value: "3", label: "demo3" },
        { value: "4", label: "demo4" },
        { value: "5", label: "demo5" },
        { value: "6", label: "demo6" },
        { value: "7", label: "demo7" }
    ]

    const users = [
        { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
    ]

    const dispatch = useDispatch();
    const campaignAdd_data = useSelector((state) => state.campaign.campaignAdd_data)
    const campaignUpdate = useSelector((state) => state.campaign.campaignUpdate_data)
    const IdValue = JSON.parse(localStorage.getItem('CampaignIdValue'))
    const id = IdValue && IdValue.id
    const history = useHistory()

    const [addExtraCheese, setAddExtraCheese] = useState(false);
    const [addPepperoni, setAddPepperoni] = useState(false);

    console.log("silk --------", IdValue)


    useEffect(() => {
        if (campaignAdd_data && campaignAdd_data.status === "true") {
            setHide(true)
        }
    }, [campaignAdd_data])

    useEffect(() => {
        if (IdValue && IdValue.id) {
            setEdit(true)
            setupdateData(prevState => ({
                ...prevState,
                campaign_id: IdValue.campaign_id,
                // customer_name: IdValue.customer_name,
                // agency_name: IdValue.agency_name,
                // campaign_name: IdValue.campaign_name,

                campaign_type: IdValue.campaign_type,


                landing_page_url: IdValue.landing_page_url,
                macros: IdValue.macros,
                country: IdValue.country,
                // checked: ,
                currency: IdValue.currency,
                budget: IdValue.budget,
                start_date: IdValue.start_date,
                end_date: IdValue.end_date,
                status: IdValue.status,
                // package_name: IdValue.package_name, 
            }))

            console.log(' IdValue.campaign_type' , IdValue.campaign_type)

            
        }
    }, [IdValue && IdValue.id])

    // useEffect(() => {
    //     dispatch(FetchUpdateCampaign())
    // }, [])

    // useEffect(() => {
    //     dispatch(FetchUpdateCampaign())
    // }, [])

    // const handleSubmits = (e) => {
    //     e.preventDefault();
    //     // dispatch(FetchCampaignIncidents())

    // }

    // const campaign_data = useSelector((state) => state.campaign.campaign_data);


    // if (campaign_data.status === true) {
    //     toast.success("Create successfully", {
    //         position: "top-center",
    //     });
    // } else if (campaign_data.status === false) {
    //     toast.error("Create unsuccessfully", {
    //         position: "top-center",
    //     });
    // }

    const handleOnChange = (e, setFieldValue) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        // setFieldValue('campaign_type', e.target.value)

       const getVal= ref.current.values
        setFieldValue('campaign_type',  e.target.value)


    };

    return (
        <>
            {
                hide ? (
                    <div
                    // className={`${toastr.success('Success Message', 'Title', {displayDuration:3000})}`}
                    >
                        Added SucessFully
                        {/* <p onClick={()=>toastr.success('Success Message', 'Title', {displayDuration:3000})}>Show Success Message</p> */}
                    </div>
                ) : null
            }
            <Card className='reportfilter-Ctr'>
                <Card.Body className='pt-4 pb-4'>
                    <Formik
                        innerRef={ref}
                        enableReinitialize={true}
                        // validationSchema={schema}
                        initialValues={!edit ? formData : updateData}

                        onSubmit={(values, { resetForm }) => {

                            const data = { id, values }
                            if (!edit) {
                                dispatch(FetchAddCampaign(values))
                                swal("", "Created successfully !", "success");
                                setTimeout(function () {
                                    resetForm()
                                    history.push('/mtrackit/campaign')
                                }, 1000);
                            } else {
                                dispatch(FetchUpdateCampaign(data));
                                swal("", "Updated successfully !", "success");
                                setTimeout(function () {
                                    resetForm()
                                    history.push('/mtrackit/campaign')
                                }, 1000);
                            }

                            resetForm();
                        }}

                    // onSubmit={(values, { resetForm }) => {

                    //     // resetForm();

                    //     const payload = {
                    //         campaign_id: values.campaign_id,
                    //         customer_name: values.customer_name,
                    //         agency_name: values.agency_name,
                    //         campaign_name: values.campaign_name,
                    //         // checked: values.checked,
                    //         campaign_type: values.campaign_type,
                    //         landing_page_url: values.landing_page_url,
                    //         macros: values.macros,
                    //         country: values.country,
                    //         currency: values.currency,
                    //         budget: values.budget,
                    //         status: values.status,
                    //         start_date: values.start_date,
                    //         end_date: values.end_date,
                    //         package_name: values.package_name
                    //     };
                    //     const data = { id, values }
                    //     // !edit ?
                    //     //     dispatch(FetchAddCampaign(payload))
                    //     //     :
                    //         dispatch(FetchUpdateCampaign(data));
                    //     // resetForm();
                    // }}


                    >
                        {({ values, setFieldValue, handleBlur, handleChange }) => (


console.log("values threesha ",values),

                            // agencyname: ""
                            // budget: ""
                            // campaignname: ""
                            // campid: "gfddf"
                            // checked: ""
                            // currency: ""
                            // custname: ""
                            // end_date: ""
                            // landingpage: ""
                            // macros: ""
                            // packagename: ""
                            // start_date: ""
                            // status: ""

                            <div className='userform-Ctr'>
                                {/* <h1
                                    className={!edit ? 'text-primary' : 'text-warning'}
                                >{!edit ? 'Add Campaign' : 'Update Campaign'}</h1> */}
                                <Form>
                                    <Row gutter={[20, 20]}>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='campaign_id'
                                                component={Input}
                                                placeholder='Enter Campaign_ID'
                                                label='Campaign_ID'
                                                type='text'
                                                onChange={handleChange}
                                                value={!edit ? values.campaign_id || '' : IdValue.campaign_id}

                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='customer_name'
                                                component={Input}
                                                placeholder='Enter Customer_Name'
                                                label='Customer_Name'
                                                type='text'
                                                onChange={handleChange}
                                                value={!edit ? values.customer_name || '' : IdValue.customer_name}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='agency_name'
                                                component={Input}
                                                placeholder='Enter Agency_Name'
                                                label='Agency_Name'
                                                type='text'
                                                onChange={handleChange}
                                                value={!edit ? values.agency_name || '' : IdValue.agency_name}

                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='campaign_name'
                                                component={Input}
                                                placeholder='Enter Campaign_Name'
                                                label='Campaign_Name'
                                                type='text'
                                                onChange={handleChange}
                                                value={!edit ? values.campaign_name || '' : IdValue.campaign_name}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <div id="checkbox-group">campaign_type</div>
                                            {/* <div role="group" aria-labelledby="checkbox-group" className='mt-5'>
                                                <label>
                                                    <Field type="checkbox" name="campaign_type" 
                                                    // value="One"
                                                    value={values.campaign_type || ''}
                                                     />
                                                    App
                                                </label>
                                                <label className='ml-5'>
                                                    <Field type="checkbox" name="campaign_type" 
                                                    value="two"
                                                    // value={values.campaign_type || ''}
                                                     />
                                                    Web
                                                </label>
                                            </div>  */}
                                            {/* <div class="form-check form-check-custom form-check-solid">
                                                <input onChange={handleChange}
                                                    name="campaign_type" class="form-check-input" type="checkbox" 
                                                    value={values.campaign_type || ''}
                                                    // value={!edit ? values.campaign_type || '' : IdValue.campaign_type}
                                                    id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    App
                                                </label>
                                            </div> */}
                                            <div class="form-check form-check-custom form-check-solid">
                                                <input
                                                    type="checkbox"
                                                    id="topping"
                                                    name="campaign_type"
                                                    value="demo1"
                                                    checked={values.campaign_type  === 'demo1'}
                                                    onChange={(e) => { handleOnChange(e, setFieldValue) }}
                                                />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    demo1
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="topping"
                                                    name="campaign_type"
                                                    value="demo2"
                                                    checked={values.campaign_type  === 'demo2'}
                                                    onChange={(e) => { handleOnChange(e, setFieldValue) }}
                                                />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    demo2
                                                </label>
                                            </div>


                                            {/* <label className='mt-4'>
                                                <Field 
                                                type="checkbox"
                                                readonly={false}
                                                name="campaign_type" 
                                                component={Checkbox}
                                                // type='text'
                                                onChange={handleChange}
                                                value={values.campaign_type || ''}
                                                />
                                                App
                                            </label> */}
                                            {/* <input
                                                className="form-check-input"
                                                type="checkbox"
                                                // id="addExtraCheese"
                                                name="campaign_type" 
                                                value={values.campaign_type || ''}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">
                                                App
                                            </label>
                                            <label className='mt-4'>
                                                <Field
                                                    // type="checkbox"
                                                    readonly={false}
                                                    name="campaign_type"
                                                    type='text'
                                                    component={Checkbox}
                                                    onChange={handleChange}
                                                    value={values.campaign_type || ''}
                                                />
                                                web
                                            </label> */}
                                            {/* <label className='mt-4'>
                                                <Field type="checkbox"
                                                readonly={false}
                                                name="campaign_type" 
                                                component={Checkbox}
                                                onChange={handleChange}
                                                value={values.campaign_type || ''}
                                                />
                                                Both
                                            </label> */}
                                            {/* <Field
                                                readonly={false}
                                                name='campaign_type'
                                                component={Input}
                                                placeholder='Enter Campaign_Type'
                                                label='Campaign_Type'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.campaign_type || ''}
                                            /> */}
                                        </Col>
                                        {/* <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='campaign_type'
                                                component={MultiSelectField}
                                                option={users}
                                                placeholder='Enter campain type'
                                                label='Campain type'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.campaign_type || ''}
                                                setFieldValue={setFieldValue}
                                                handleBlur={handleBlur}
                                            />
                                        </Col> */}
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='landing_page_url'
                                                component={Input}
                                                placeholder='Enter Landing_Page_Url'
                                                label='Landing_Page_Url'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.landing_page_url || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='macros'
                                                component={Input}
                                                placeholder='Enter_Macros'
                                                label='Macros'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.macros || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='country'
                                                component={Input}
                                                placeholder='Enter_Location'
                                                label='Location'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.country || ''}
                                            />
                                        </Col>
                                        {/* <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                component={MultiSelectField}
                                                name="Location" label="Location"
                                                placeholder="Select the location"
                                                option={location}
                                                values={values}
                                                setFieldValue={setFieldValue}
                                                handleBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.Location || ''}
                                            />
                                        </Col> */}
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='currency'
                                                component={Input}
                                                placeholder='Enter_Currency'
                                                label='Currency'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.currency || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='budget'
                                                component={Input}
                                                placeholder='Enter_Budget'
                                                label='Budget'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.budget || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='status'
                                                component={Input}
                                                placeholder='Enter_Status'
                                                label='Status'
                                                type='text'
                                                onChange={handleChange}
                                                value={values.status || ''}
                                            />
                                        </Col>
                                        {/* <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                component={MultiSelectField}
                                                name="Publisher" label="Publisher"
                                                placeholder="Select publisher"
                                                option={filters}
                                                values={values}
                                                setFieldValue={setFieldValue}
                                                handleBlur={handleBlur}
                                            />
                                        </Col> */}
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <DatePickerField
                                                name="start_date"
                                                label="From"
                                                placeholderText="Enter_Start_Date"
                                                onChange={handleChange}
                                                value={values.start_date || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <DatePickerField
                                                name="end_date"
                                                label="To"
                                                placeholderText="Enter_End_Date"
                                                onChange={handleChange}
                                                value={values.end_date || ''}
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                            <Field
                                                readonly={false}
                                                name='package_name'
                                                component={Input}
                                                placeholder='Enter_package_Name'
                                                label='Package_Name'
                                                type='text'
                                                onChange={handleChange}
                                                value={!edit ? values.package_name || '' : IdValue.package_name}
                                            />
                                        </Col>
                                    </Row>
                                    <div className='text-left'>
                                        <Row>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div className='w-100' style={{ textAlign: 'right' }}>
                                                    <Button type="submit" className='w-50'>
                                                        {!edit ? ' Add Campaign' : 'Update Campaign'}
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <div className='w-100' style={{ textAlign: 'left' }}>
                                                    {/* <Button className='w-50'>Back</Button> */}
                                                    <Link
                                                        to='/mtrackit/campaign'
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
            {/* <ToastContainer /> */}
        </>
    );
}
export default AddCampaign