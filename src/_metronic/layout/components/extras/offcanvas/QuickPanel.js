/* eslint-disable no-restricted-imports */
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { Checkbox } from "../../../../_partials/controls";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FetchTotalIncidents } from "../../../../../../src/redux/actions/DashboardActions";
import { useLocation } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',

  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  // orange_color :{
  //   color:'#f4874f'
  // }
}));

export function QuickPanel() {
  const pathName = useLocation().pathname
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState("AuditLogs");
  const setTab = _tabName => {
    setSelectedTab(_tabName);
  };
  const [startDate, setStartDate] = useState('2020-05-03');
  const [endDate, setEndDate] = useState(new Date());
  const [myPackage, setMyPackage] = useState([{ value: 'itc', label: 'itc' }]);
  const packages = [
    { value: "itc", label: "itc" },
    { value: "admin", label: "admin" },
  ]
  const handleChange = (e) => {
    setMyPackage(e.value, e.label)
    console.log(myPackage)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchTotalIncidents())
  }, [])

  const incident_data = useSelector(state => state.dashboard.incident_data)
  const loading = useSelector(state => state.dashboard.loading)

  console.log(incident_data);

  return (
    <>
      <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10 pl-5 pr-5">
   
        <div>
          <div>
            <h4 className={classes.orange_color}>Advance Search</h4>
          </div>
          <div className="offcanvas-close mt-n1 pr-5" style={{ position: "absolute", top: "15px", right: "10px" }}>
            <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
              <i className="ki ki-close icon-xs text-muted"></i>
            </a>
          </div>
        </div>

        <div className="search-panel mt-8">

          <label className={classes.orange_color}>Choose Start & End Date</label>

          <div className="row">
            <div className="col-md-6">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="Choose Start Date"

              />
            </div>
            <div className="col-md-6">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                isClearable
                placeholderText="Choose End Date"
              />
            </div>
          </div>


          <div className={classes.root}>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.heading, classes.orange_color)}>
                    <h6 className="mb-0" >Channels</h6>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.secondaryHeading, classes.orange_color)}>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions>
                <div className="row">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <span>Search</span>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </ExpansionPanelActions>
              <ExpansionPanelDetails className={classes.details}>
                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0" >
                  <Checkbox children="Organic Search" />
                  <Checkbox children="Youtube" />
                  <Checkbox children="Q & A" />
                  <Checkbox children="Social Media Platforms" />
                </Form.Group>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={clsx(classes.heading, classes.orange_color)}
                  >
                    <h6 className="mb-0">Categorires</h6>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.secondaryHeading, classes.orange_color)}
                  ></Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions>
                <div className="row">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <span>Search</span>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </ExpansionPanelActions>
              <ExpansionPanelDetails className={classes.details}>
                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                  <Checkbox children="Fake Customer Care No" />
                  <Checkbox children="Fake Job Promotions" />
                  <Checkbox children="Fake Offers" />
                </Form.Group>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.heading, classes.orange_color)}
                  >
                    <h6 className="mb-0">Publishers</h6>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}></Typography>
                </div>
                <div className={classes.column}

                >
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions>
                <div className="row">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <span>Search</span>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </ExpansionPanelActions>
              <ExpansionPanelDetails className={classes.details}>
                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                  <Checkbox children="7074165033" />
                  <Checkbox children="7029054285" />
                  <Checkbox children="8649805464" />
                  <Checkbox children="7866058485" />
                  <Checkbox children="9835147819" />
                  <Checkbox children="8116334087" />
                  <Checkbox children="8144925793" />
                  <Checkbox children="9928344499" />
                  <Checkbox children="7665008611" />
                  <Checkbox children="7387060648" />
                  <Checkbox children="9694884347" />
                  <Checkbox children="8209553293" />
                  <Checkbox children="7420811295" />
                  <Checkbox children="9413035047" />
                  <Checkbox children="9837703667" />
                </Form.Group>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div
                  className={classes.column}>
                  <Typography
                    className={clsx(classes.heading, classes.orange_color)}
                  >
                    <h6 className="mb-0">Countries</h6>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions>
                <div className="row">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <span>Search</span>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </ExpansionPanelActions>
              <ExpansionPanelDetails className={classes.details}>
                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                  <Checkbox children="India" />
                </Form.Group>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.heading, classes.orange_color)}
                  >
                    <h6 className="mb-0">Brands</h6>
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                </div>
                <div className={classes.column}>
                  <Typography
                    className={clsx(classes.secondaryHeading, classes.orange_color)}
                  >0 Selected</Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelActions>
                <div className="row">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <span>Search</span>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </ExpansionPanelActions>
              <ExpansionPanelDetails className={classes.details}>
                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                  <Checkbox children="RBL Bank" />
                </Form.Group>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <div className="btn-bottom">
              <button className="btn btn-primary font-weight-bolder font-size-sm mr-3">Search</button>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

const mapStateToProps = (state) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(QuickPanel)