/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect, useReducer } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Formik, Field } from "formik";
import {
  Row,
  Col,
  Button,
  Card,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import SelectField from "../../../../_metronic/_partials/controls/forms/SelectField";
import DatePicker from "react-datepicker";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { Checkbox } from "../../../../_metronic/_partials/controls";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import * as constant from "../../../../redux/constants/DashboardConstants";
import { SET_GLOBAL_REFRESH_RENDERING } from "../../../../redux/constants/CommonConstants";
import {
  FetchFilterlist,
  FetchChannellist,
  FetchCountrylist,
  FetchCategorylist,
  FetchBrandlist,
  FetchPrioritylist,
  FetchPublisherlist,
  FetchStatuslist,
} from "../../../../redux/actions/CommonActions";
import {
  FetchTotalIncidents,
  FetchIncidentVolumes,
  FetchActivecasesbychannel,
  FetchSubchannel,
  FetchToptenLocation,
  FetchCategorlevelcount,
  FetchPublisherlevelcount,
} from "../../../../redux/actions/DashboardActions";
import { FetchReport } from "../../../../redux/actions/ReportActions";
import { FILTER_CATEGORY_SELECTED_VALUE } from "../../../utils/const";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../../utils/helpers";
import { FetchDASHBOARDChannelData } from "../../../../redux/actions/DashboardActions";
import { toAbsoluteUrl } from "../../../../../src/_metronic/_helpers/index";
import moment from "moment";
import { connect } from "react-redux";
import _, { keyBy, map } from "lodash";
import SVG, { Props as SVGProps } from "react-inlinesvg";

const FilterDrawer = ({
  setSideDrawer,
  hasPackageChanged,
  setFilterApiCall,
  category_list,
  channel_list,
  priority_list,
  publisher_list,
  status_list,
  country_name,
  brand_list,
  filter_list,
  onSubmit,
  setGlobalRefreshRendering,
}) => {
  const packageName = localStorage.getItem("dpackage");
  const dispatch = useDispatch();
  const [panel, setPanel] = useState(false);

  const [channel_counter, setChannelCounter] = useState(
    selectedFilters?.channel && selectedFilters?.channel != undefined
      ? selectedFilters?.channel
      : "0"
  );
  const [category_counter, setCategoryCounter] = useState(
    selectedFilters?.category
  );
  const [country_counter, setCountryCounter] = useState(
    selectedFilters?.country
  );
  const [publishers_counter, setPublishersCounter] = useState(
    selectedFilters?.publisher
  );
  const [brands_counter, setBrandsCounter] = useState(selectedFilters?.brand);
  const [priority_counter, setPriorityCounter] = useState(
    selectedFilters?.priority
  );
  const [status_counter, setStatusCounter] = useState(
    selectedFilters?.publisher
  );
  const [dashboarddata, setDashboarddata] = useState({});

  const [channelInput, setChannelInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [priorityInput, setPriorityInput] = useState("");
  const [publisherInput, setPublisherInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [categoryExpand, setCategoryExpand] = useState(false);
  const [publisherExpand, setPublisherExpand] = useState(false);
  const [countryExpand, setCountryExpand] = useState(false);
  const [brandExpand, setBrandExpand] = useState(false);
  const [priorityExpand, setPriorityExpand] = useState(false);
  const [statusExpand, setStatusExpand] = useState(false);

  const fill = "orange";
  const stroke = "black";
  const toggleDrawer = (e) => {
    setPanel(false);
  };

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    root: {
      // width: "100%",
    },
    icon: {
      verticalAlign: "bottom",
      height: 20,
      width: 20,
    },
    details: {
      alignItems: "center",
    },
    column: {
      // flexBasis: "33.33%",
    },
  });
  const [filters, setFilters] = useState({
    packageName: "",
    fromDate: defaultEndDate,
    toDate: defaultEndDate,
    brand: "all",
    category: "all",
    country: "all",
    publisher: "all",
    status: "all",
    channel: "all",
    priority: "all",
  });
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    country: [],
    publisher: [],
    status: [],
    channel: [],
    priority: [],
  });


  const [unSelectedFilters, setUnSelectedFilters] = useState({
    brand: [],
    category: [],
    country: [],
    publisher: [],
    status: [],
    channel: [],
    priority: [],
  });
  const date = new Date();
  const weekstartdate = date.setDate(date.getDate() - 7);
  const [startDate, setStartDate] = useState(weekstartdate);
  const [endDate, setEndDate] = useState(new Date());
  const classes = useStyles();

  localStorage.setItem("endDate", moment(endDate).format("YYYY-MM-DD"));


  const getFormatredStartDate = localStorage.getItem("startDate");
  const defaultStartDate = getFormatredStartDate
    ? getFormatredStartDate
    : moment(new Date(startDate)).format("YYYY-MM-DD");


  const defaultEndDate = localStorage.getItem("endDate");
  const didMount = React.useRef(false);

  useEffect(
    () => {
      if (
        brand_list &&
        country_name &&
        priority_list &&
        status_list &&
        category_list &&
        channel_list &&
        publisher_list
      ) {
        setFilters((value) => ({
          ...value,
          brand: brand_list,
          country: country_name,
          priority: priority_list,
          status: status_list,
          category: category_list,
          channel: channel_list,
          publisher: publisher_list,
        }));
      }
    },
    [packageName]
  );

  useEffect(() => {
    if (didMount.current && !panel) {
      dispatch({ type: constant.SET_SIDE_DRAWER, setSideDrawer: false });
      setPanel(setSideDrawer);
    }
    if (didMount.current) {
      const getStartValue = localStorage.getItem("startDateValue");
      const getFormatredStartDate = localStorage.getItem("startDate");
      const getStartdateValue = getStartValue
        ? new Date(getStartValue)
        : weekstartdate;

      if (!getStartValue) {
        localStorage.setItem(
          "startDate",
          moment(weekstartdate).format("YYYY-MM-DD")
        );
      }
      setStartDate(getStartdateValue);
    }
  }, [panel, setSideDrawer]);

  const getFilterApi = () => {
    const getStartValue = localStorage.getItem("startDateValue");
    const getStartdateValue = getStartValue
      ? moment(getStartValue).format("YYYY-MM-DD")
      : moment(weekstartdate).format("YYYY-MM-DD");
    dispatch(FetchFilterlist(packageName));
    dispatch(FetchCountrylist(packageName, getStartdateValue, defaultEndDate));
    dispatch(FetchCategorylist(packageName, getStartdateValue, defaultEndDate));
    dispatch(FetchChannellist(packageName, getStartdateValue, defaultEndDate));
    dispatch(FetchBrandlist(packageName, getStartdateValue, defaultEndDate));
    dispatch(FetchPrioritylist(packageName, getStartdateValue, defaultEndDate));
    dispatch(
      FetchPublisherlist(packageName, getStartdateValue, defaultEndDate)
    );
    dispatch(FetchStatuslist(packageName, getStartdateValue, defaultEndDate));
  };

  useEffect(() => {
    if (didMount.current && packageName) {
      getFilterApi();
    }
  }, [packageName]);

  useEffect(() => {
    getFilterApi();
  }, []);

  useEffect(() => {
    if (
      brand_list &&
      country_name &&
      priority_list &&
      status_list &&
      category_list &&
      channel_list &&
      publisher_list
    ) {
      setFilters((value) => ({
        ...value,
        brand: brand_list,
        country: country_name,
        priority: priority_list,
        status: status_list,
        category: category_list,
        channel: channel_list,
        publisher: publisher_list,
      }));

      const getValuesFromArr = (val, name) => {
        const arr = [];
        if (val && val.data && val.data.length > 0) {
          val.data.map((x) => {
            if (x && x[name]) {
              arr.push(x[name]);
            }
          });
        }
        return arr;
      };

      const localSelectedFilterValues = JSON.parse(
        getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)
      );
      if (_.isEmpty(localSelectedFilterValues)) {
        setSelectedFilters(() => ({
          brand: getValuesFromArr(brand_list, "brand"),
          country: getValuesFromArr(country_name, "country"),
          priority: getValuesFromArr(priority_list, "priority"),
          status: getValuesFromArr(status_list, "ticket_status"),
          category: getValuesFromArr(category_list, "category"),
          channel: getValuesFromArr(channel_list, "channel_name"),
          publisher: getValuesFromArr(publisher_list, "publisher"),
        }));
      }
    }
  }, [
    brand_list,
    country_name,
    priority_list,
    status_list,
    category_list,
    channel_list,
    publisher_list,
  ]);

  const getBrand =
    filters && filters.brand && filters.brand.data && filters.brand.data
      ? filters.brand.data
      : [];

  const getChannel =
    filters && filters.channel && filters.channel.data && filters.channel.data
      ? filters.channel.data
      : [];

  const getCategory =
    filters &&
    filters.category &&
    filters.category.data &&
    filters.category.data
      ? filters.category.data
      : [];

  const getPublisher =
    filters &&
    filters.publisher &&
    filters.publisher.data &&
    filters.publisher.data
      ? filters.publisher.data
      : [];

  const getCountry =
    filters && filters.country && filters.country.data && filters.country.data
      ? filters.country.data
      : [];

  const getPriorities =
    filters &&
    filters.priority &&
    filters.priority.data &&
    filters.priority.data
      ? filters.priority.data
      : [];

  const getStatus =
    filters && filters.status && filters.status.data && filters.status.data
      ? filters.status.data
      : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalStorage(
      FILTER_CATEGORY_SELECTED_VALUE.SELECTED,
      JSON.stringify(selectedFilters)
    );

    const data = {
      package_name: packageName,
      fromDate: defaultStartDate,
      toDate: defaultEndDate,
      country:
        (selectedFilters?.country && selectedFilters?.country.length > 25) ||
        (selectedFilters?.country && selectedFilters?.country.length == 0) ||
        selectedFilters?.country == undefined ||
        selectedFilters?.country.length == searhcountrylist.length
          ? "all"
          : selectedFilters?.country?.toString(),

      category:
        (selectedFilters?.category && selectedFilters?.category.length > 25) ||
        (selectedFilters?.category && selectedFilters?.category.length == 0) ||
        selectedFilters?.category == undefined ||
        selectedFilters?.category.length == searhcategorylist.length
          ? "all"
          : selectedFilters?.category?.toString(),

      publisher:
        (selectedFilters?.publisher &&
          selectedFilters?.publisher.length > 25) ||
        (selectedFilters?.publisher &&
          selectedFilters?.publisher.length == 0) ||
        selectedFilters?.publisher == undefined ||
        selectedFilters?.publisher.length == searhpublisherlist.length
          ? "all"
          : selectedFilters?.publisher?.toString(),
    
      channel:
        (selectedFilters?.channel && selectedFilters?.channel.length > 25) ||
        (selectedFilters?.channel && selectedFilters?.channel.length == 0) ||
        selectedFilters?.channel == undefined ||
        selectedFilters?.channel.length == searchannelList.length
          ? "all"
          : selectedFilters?.channel?.toString(),
   

      brand:
        (selectedFilters?.brand && selectedFilters?.brand.length > 25) ||
        (selectedFilters?.brand && selectedFilters?.brand.length == 0) ||
        selectedFilters?.brand == undefined ||
        selectedFilters?.brand.length == searhbrandlist.length
          ? "all"
          : selectedFilters?.brand?.toString(),
      status:
        (selectedFilters?.status && selectedFilters?.status.length > 25) ||
        (selectedFilters?.status && selectedFilters?.status.length == 0) ||
        selectedFilters?.status == undefined ||
        selectedFilters?.status.length == searhstatuslist.length
          ? "all"
          : selectedFilters?.status?.toString(),
      priority:
        (selectedFilters?.priority && selectedFilters?.priority.length > 25) ||
        (selectedFilters?.priority && selectedFilters?.priority.length == 0) ||
        selectedFilters?.priority == undefined ||
        selectedFilters?.priority.length == searhprioritylist.length
          ? "all"
          : selectedFilters?.priority?.toString(),
    };

    setLocalStorage(
      FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES,
      JSON.stringify(data)
    );

    onSubmit(data);
    toggleDrawer();
  };

  const hadleDateChange = (date) => {
    localStorage.setItem("startDate", moment(date).format("YYYY-MM-DD"));
    localStorage.setItem("startDateValue", date);
    removeLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED);
    setStartDate(date);
    dispatch(FetchFilterlist(packageName));
    dispatch(
      FetchCountrylist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchCategorylist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchChannellist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchBrandlist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchPrioritylist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchPublisherlist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
    dispatch(
      FetchStatuslist(
        packageName,
        moment(date).format("YYYY-MM-DD"),
        defaultEndDate
      )
    );
  };

  function Getchannelval() {
    let ser_channel = document.querySelector("#channel").value;
    setChannelInput(ser_channel);
  }

  const channel_search_list = getChannel;
  const getchannelSearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.channel_name.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searchannelList = getchannelSearch(channelInput, channel_search_list);

  // },[searchannelList,searhcategorylist,searhbrandlist,searhpublisherlist,searhprioritylist]);

  ////

  function GetCatergoryVal() {
    let ser_category = document.querySelector("#category").value;

    setCategoryInput(ser_category);
  }

  const category_search_list = getCategory;

  const getCategorySearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.category.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhcategorylist = getCategorySearch(
    categoryInput,
    category_search_list
  );

  ////

  function GetPublisherVal() {
    let ser_publishers = document.querySelector("#publisher").value;

    setPublisherInput(ser_publishers);
  }

  const publisher_search_list = getPublisher;

  const getPublisherSearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.publisher.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhpublisherlist = getPublisherSearch(
    publisherInput,
    publisher_search_list
  );

  ////

  function GetBrandVal() {
    let ser_brands = document.querySelector("#brand").value;

    setBrandInput(ser_brands);
  }

  const brand_search_list = getBrand;

  const getBrandSearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.brand.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhbrandlist = getBrandSearch(brandInput, brand_search_list);

  ////

  function GetPriorityVal() {
    let ser_priorities = document.querySelector("#priority").value;

    setPriorityInput(ser_priorities);
  }

  const priority_search_list = getPriorities;

  const getPrioritySearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.priority.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhprioritylist = getPrioritySearch(
    priorityInput,
    priority_search_list
  );

  ////
  function GetStatusVal() {
    let ser_status = document.querySelector("#status").value;

    setStatusInput(ser_status);
  }

  const status_search_list = getStatus;

  const getStatusSearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val?.ticket_status.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhstatuslist = getStatusSearch(statusInput, status_search_list);

  ////
  function GetCountryVal() {
    let ser_country = document.querySelector("#country").value;

    setCountryInput(ser_country);
  }

  const country_search_list = getCountry;

  const getCountrySearch = (input, lists) => {
    if (!input) {
      return lists;
    }

    return lists.filter((val) =>
      val.country.toLowerCase()?.includes(input.toLowerCase())
    );
  };

  const searhcountrylist = getCountrySearch(countryInput, country_search_list);

  const removeElement = (array, n) => {
    var index = array.indexOf(n);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  };

  const removeArrayElementFromArray = (array, arrTwo) => {
    array &&
      array.forEach((v) => {
        if (arrTwo && arrTwo.includes(v)) {
          removeElement(v);
        }
      });
    return array;
  };

  const [updated, setUpdated] = useState(true);

  const updateLocalVal = (panel, localData) => {
    if (updated) {
      setSelectedFilters(() => ({
        brand: localData.brand.length > 0 ? localData.brand : [],
        category: localData.category.length > 0 ? localData.category : [],
        country: localData.country.length > 0 ? localData.country : [],
        publisher: localData.publisher.length > 0 ? localData.publisher : [],
        status:
          localData.status && localData.status.length > 0
            ? localData.status
            : [],
        channel: localData.channel.length > 0 ? localData.channel : [],
        priority: localData.priority.length > 0 ? localData.priority : [],
      }));

      setUpdated(false);
    }
    if (!panel) {
      setUpdated(true);
    }
  };

  useEffect(() => {
    const localSelectedFilterValues = JSON.parse(
      getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)
    );
    if (didMount.current && !_.isEmpty(localSelectedFilterValues)) {
      updateLocalVal(panel, localSelectedFilterValues);
    }
  }, [panel]);

  useEffect(() => {
    const localSelectedFilterValues = JSON.parse(
      getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)
    );
    if (!panel && didMount.current) {
      let mergedBrand =
        localSelectedFilterValues &&
        localSelectedFilterValues.brand &&
        localSelectedFilterValues.brand.length > 0
          ? [...localSelectedFilterValues.brand, ...selectedFilters.brand]
          : selectedFilters.brand && selectedFilters.brand.length > 0
          ? [...selectedFilters.brand]
          : [];
      let meregeCategory =
        localSelectedFilterValues &&
        localSelectedFilterValues.category &&
        localSelectedFilterValues.category.length > 0
          ? [...localSelectedFilterValues.category, ...selectedFilters.category]
          : selectedFilters.category && selectedFilters.category.length > 0
          ? [...selectedFilters.category]
          : [];
      let meregeChannel =
        localSelectedFilterValues &&
        localSelectedFilterValues.channel &&
        localSelectedFilterValues.channel.length > 0
          ? [...localSelectedFilterValues.channel, ...selectedFilters.channel]
          : selectedFilters.channel && selectedFilters.channel.length > 0
          ? [...selectedFilters.channel]
          : [];
      let meregePriority =
        localSelectedFilterValues &&
        localSelectedFilterValues.priority &&
        localSelectedFilterValues.priority.length > 0
          ? [...localSelectedFilterValues.priority, ...selectedFilters.priority]
          : selectedFilters.priority && selectedFilters.priority.length > 0
          ? [...selectedFilters.priority]
          : [];
      let meregeCountry =
        localSelectedFilterValues &&
        localSelectedFilterValues.country &&
        localSelectedFilterValues.country.length > 0
          ? [...localSelectedFilterValues.country, ...selectedFilters.country]
          : selectedFilters.country && selectedFilters.country.length > 0
          ? [...selectedFilters.country]
          : [];
      let meregePublisher =
        localSelectedFilterValues &&
        localSelectedFilterValues.publisher &&
        localSelectedFilterValues.publisher.length > 0
          ? [
              ...localSelectedFilterValues.publisher,
              ...selectedFilters.publisher,
            ]
          : selectedFilters.publisher && selectedFilters.publisher.length > 0
          ? [...selectedFilters.publisher]
          : [];
      let meregeStatus =
        localSelectedFilterValues &&
        localSelectedFilterValues.status &&
        localSelectedFilterValues.status.length &&
        localSelectedFilterValues.status.length > 0
          ? [...localSelectedFilterValues.status, ...selectedFilters.status]
          : selectedFilters.status &&
            selectedFilters.status &&
            selectedFilters.status.length > 0
          ? [...selectedFilters.status]
          : [];

      const selectedArr = {
        brand: removeArrayElementFromArray(
          mergedBrand,
          unSelectedFilters.brand
        ),
        category: removeArrayElementFromArray(
          meregeCategory,
          unSelectedFilters.category
        ),
        country: removeArrayElementFromArray(
          meregeCountry,
          unSelectedFilters.country
        ),
        publisher: removeArrayElementFromArray(
          meregePublisher,
          unSelectedFilters.publisher
        ),
        status: removeArrayElementFromArray(
          meregeStatus,
          unSelectedFilters.status
        ),
        channel: removeArrayElementFromArray(
          meregeChannel,
          unSelectedFilters.channel
        ),
        priority: removeArrayElementFromArray(
          meregePriority,
          unSelectedFilters.priority
        ),
      };

      let hasChanged = false;
      Object.keys(selectedFilters).map((v) => {
        const locState =
          localSelectedFilterValues &&
          localSelectedFilterValues[v] &&
          localSelectedFilterValues[v].length > 0 &&
          localSelectedFilterValues[v].sort().join(",");
        const currentState =
          selectedFilters[v].length > 0 && selectedFilters[v].sort().join(",");
        if (locState !== currentState) {
          hasChanged = true;
        }
        return hasChanged;
      });
      if (hasChanged) {
        const filteredBrand =
          selectedFilters.brand &&
          selectedFilters.brand.length > 0 &&
          selectedFilters.brand.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.brand &&
          localSelectedFilterValues.brand.length > 0 &&
          localSelectedFilterValues.brand.sort().join(",");
        const filtereCategory =
          selectedFilters.category &&
          selectedFilters.category.length > 0 &&
          selectedFilters.category.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.category &&
          localSelectedFilterValues.category.length > 0 &&
          localSelectedFilterValues.category.sort().join(",");
        const filteredCountry =
          selectedFilters.country &&
          selectedFilters.country.length > 0 &&
          selectedFilters.country.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.country &&
          localSelectedFilterValues.country.length > 0 &&
          localSelectedFilterValues.country.sort().join(",");
        const filteredPublisher =
          selectedFilters.publisher &&
          selectedFilters.publisher.length > 0 &&
          selectedFilters.publisher.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.publisher &&
          localSelectedFilterValues.publisher.length > 0 &&
          localSelectedFilterValues.publisher.sort().join(",");
        const filteredStatus =
          selectedFilters.status &&
          selectedFilters.status.length > 0 &&
          selectedFilters.status.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.status &&
          localSelectedFilterValues.status.length > 0 &&
          localSelectedFilterValues.status.sort().join(",");
        const filteredChannel =
          selectedFilters.channel &&
          selectedFilters.channel.length > 0 &&
          selectedFilters.channel.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.channel &&
          localSelectedFilterValues.channel.length > 0 &&
          localSelectedFilterValues.channel.sort().join(",");
        const filteredPriority =
          selectedFilters.priority &&
          selectedFilters.priority.length > 0 &&
          selectedFilters.priority.sort().join(",") !==
            localSelectedFilterValues &&
          localSelectedFilterValues.priority &&
          localSelectedFilterValues.priority.length > 0 &&
          localSelectedFilterValues.priority.sort().join(",");
        if (
          filteredBrand &&
          filtereCategory &&
          filteredCountry &&
          filteredPublisher &&
          filteredStatus &&
          filteredChannel &&
          filteredPriority
        ) {
          setLocalStorage(
            FILTER_CATEGORY_SELECTED_VALUE.SELECTED,
            JSON.stringify(selectedArr)
          );
        }
      }
    }
  }, [startDate, panel]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      dispatch({
        type: SET_GLOBAL_REFRESH_RENDERING,
        setGlobalRefreshRendering: false,
      });
    }
  }, []);

  const unSelectAll = (e, filterName) => {
    e.preventDefault();

    if (filterName === "channel" && selectedFilters?.channel?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        channel: [],
      }));
    }
    if (filterName === "channel" && selectedFilters?.channel?.length == 0) {
      let tempSelected = [];
      searchannelList.forEach((item) => tempSelected.push(item.channel_name));
      setSelectedFilters((values) => ({
        ...values,
        channel: tempSelected,
      }));
    }
    if (filterName === "category" && selectedFilters?.category?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        category: [],
      }));
    }
    if (filterName === "category" && selectedFilters?.category?.length == 0) {
      let tempcatSelected = [];
      searhcategorylist.forEach((item) => tempcatSelected.push(item.category));
      setSelectedFilters((values) => ({
        ...values,
        category: tempcatSelected,
      }));
    }
    if (filterName === "publisher" && selectedFilters?.publisher?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        publisher: [],
      }));
    }
    if (filterName === "publisher" && selectedFilters?.publisher?.length == 0) {
      const temppublisherSelected = [];
      searhpublisherlist.forEach((item) =>
        temppublisherSelected.push(item.publisher)
      );
      setSelectedFilters((values) => ({
        ...values,
        publisher: temppublisherSelected,
      }));
    }
    if (filterName === "country" && selectedFilters?.country?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        country: [],
      }));
    }
    if (filterName === "country" && selectedFilters?.country?.length == 0) {
      const tempcountrySelected = [];
      searhcountrylist.forEach((item) =>
        tempcountrySelected.push(item.country)
      );
      setSelectedFilters((values) => ({
        ...values,
        country: tempcountrySelected,
      }));
    }
    if (filterName === "brand" && selectedFilters?.brand?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        brand: [],
      }));
    }
    if (filterName === "brand" && selectedFilters?.brand?.length == 0) {
      const tempbrandSelected = [];
      searhbrandlist.forEach((item) => tempbrandSelected.push(item.brand));
      setSelectedFilters((values) => ({
        ...values,
        brand: tempbrandSelected,
      }));
    }
    if (filterName === "priority" && selectedFilters?.priority?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        priority: [],
      }));
    }
    if (filterName === "priority" && selectedFilters?.priority?.length == 0) {
      const tempprioritySelected = [];
      searhprioritylist.forEach((item) =>
        tempprioritySelected.push(item.priority)
      );
      setSelectedFilters((values) => ({
        ...values,
        priority: tempprioritySelected,
      }));
    }
    if (filterName === "status" && selectedFilters?.status?.length != 0) {
      setSelectedFilters((values) => ({
        ...values,
        status: [],
      }));
    }
    if (filterName === "status" && selectedFilters?.status?.length == 0) {
      const tempstatusSelected = [];
      searhstatuslist.forEach((item) =>
        tempstatusSelected.push(item.ticket_status)
      );
      setSelectedFilters((values) => ({
        ...values,
        status: tempstatusSelected,
      }));
    }
  };

  const expandValue = () => {
    setFlag(!flag);
  };
  const handleCheckbox = (event) => {
    const { name, checked, value } = event.target;
    if (checked) {
      if (name == "channel" && checked) {
        setSelectedFilters((values) => ({
          ...values,
          channel:
            values.channel &&
            values.channel.length > 0 &&
            !values?.channel?.includes(value)
              ? [...values.channel, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          channel:
            prevState.channel &&
            unSelectedFilters.channel.length > 0 &&
            prevState.channel.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "category" && checked) {
        setCategoryCounter(category_counter + 1);
        setSelectedFilters((values) => ({
          ...values,
          category:
            values.category &&
            values.category.length > 0 &&
            !values?.category?.includes(value)
              ? [...values.category, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          category:
            prevState.category &&
            unSelectedFilters.category.length > 0 &&
            prevState.category.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "publisher" && checked) {
        setPublishersCounter(publishers_counter + 1);
        setSelectedFilters((values) => ({
          ...values,
          publisher:
            values.publisher &&
            values.publisher.length > 0 &&
            !values?.publisher?.includes(value)
              ? [...values.publisher, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          publisher:
            prevState.publisher &&
            unSelectedFilters.publisher.length > 0 &&
            prevState.publisher.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "country" && checked) {
        setCountryCounter(country_counter + 1);
        setSelectedFilters((values) => ({
          ...values,
          country:
            values.country &&
            values.country.length > 0 &&
            !values?.country?.includes(value)
              ? [...values.country, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          country:
            prevState.country &&
            unSelectedFilters.country.length > 0 &&
            prevState.country.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "brand" && checked) {
        setBrandsCounter(brands_counter + 1);
        setSelectedFilters((values) => ({
          ...values,
          brand:
            values.brand &&
            values.brand.length > 0 &&
            !values?.brand?.includes(value)
              ? [...values.brand, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          brand:
            prevState.brand &&
            unSelectedFilters.brand.length > 0 &&
            prevState.brand.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "priority" && checked) {
        setPriorityCounter(priority_counter + 1);
        setSelectedFilters((values) => ({
          ...values,
          priority:
            values.priority &&
            values.priority.length > 0 &&
            !values?.priority?.includes(value)
              ? [...values.priority, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          priority:
            prevState.priority &&
            unSelectedFilters.priority.length > 0 &&
            prevState.priority.filter((x) => (x !== value ? x : null)),
        }));
      }
      if (name == "status" && checked) {
        setSelectedFilters((values) => ({
          ...values,
          status:
            values.status &&
            values.status.length > 0 &&
            !values?.status?.includes(value)
              ? [...values.status, value]
              : [value],
        }));
        setUnSelectedFilters((prevState) => ({
          ...prevState,
          status:
            prevState.status &&
            unSelectedFilters.status.length > 0 &&
            prevState.status.filter((x) => (x !== value ? x : null)),
        }));
      }
    } else {
      if (
        name == "channel" &&
        selectedFilters &&
        selectedFilters.channel.length > 0 &&
        selectedFilters.channel.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          channel:
            prevState.channel &&
            selectedFilters.channel.length > 0 &&
            prevState.channel.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          channel:
            values.channel &&
            values.channel.length > 0 &&
            !values?.channel?.includes(value)
              ? [...values.channel, value]
              : [value],
        }));
      }
      if (
        name == "category" &&
        selectedFilters &&
        selectedFilters.category.length > 0 &&
        selectedFilters.category.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          category:
            prevState.category &&
            selectedFilters.category.length > 0 &&
            prevState.category.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          category:
            values.category &&
            values.category.length > 0 &&
            !values?.category?.includes(value)
              ? [...values.category, value]
              : [value],
        }));
      }
      if (
        name == "publisher" &&
        selectedFilters &&
        selectedFilters.publisher.length > 0 &&
        selectedFilters.publisher.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          publisher:
            prevState.publisher &&
            selectedFilters.publisher.length > 0 &&
            prevState.publisher.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          publisher:
            values.publisher &&
            values.publisher.length > 0 &&
            !values?.publisher?.includes(value)
              ? [...values.publisher, value]
              : [value],
        }));
      }
      if (
        name == "brand" &&
        selectedFilters &&
        selectedFilters.brand.length > 0 &&
        selectedFilters.brand.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          brand:
            prevState.brand &&
            selectedFilters.brand.length > 0 &&
            prevState.brand.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          brand:
            values.brand &&
            values.brand.length > 0 &&
            !values?.brand?.includes(value)
              ? [...values.brand, value]
              : [value],
        }));
      }
      if (
        name == "country" &&
        selectedFilters &&
        selectedFilters.country.length > 0 &&
        selectedFilters.country.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          country:
            prevState.country &&
            selectedFilters.country.length > 0 &&
            prevState.country.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          country:
            values.country &&
            values.country.length > 0 &&
            !values?.country?.includes(value)
              ? [...values.country, value]
              : [value],
        }));
      }
      if (
        name == "priority" &&
        selectedFilters &&
        selectedFilters.priority.length > 0 &&
        selectedFilters.priority.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          priority:
            prevState.priority &&
            selectedFilters.priority.length > 0 &&
            prevState.priority.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          priority:
            values.priority &&
            values.priority.length > 0 &&
            !values?.priority?.includes(value)
              ? [...values.priority, value]
              : [value],
        }));
      }
      if (
        name == "status" &&
        selectedFilters &&
        selectedFilters.status.length > 0 &&
        selectedFilters.status.includes(value)
      ) {
        setSelectedFilters((prevState) => ({
          ...prevState,
          status:
            prevState.status &&
            selectedFilters.status.length > 0 &&
            prevState.status.filter((x) => (x !== value ? x : null)),
        }));
        setUnSelectedFilters((values) => ({
          ...values,
          status:
            values.status &&
            values.status.length > 0 &&
            !values?.status?.includes(value)
              ? [...values.status, value]
              : [value],
        }));
      }
    }
  };
  return (
    <>
      <Drawer anchor={"right"} open={panel} onClose={toggleDrawer}>
        <div style={{ width: "300px" }}>
          <div>
            <Formik initialValues={{ dashboarddata }}>
              <Form>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label>Select Date</label>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={(date) => hadleDateChange(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </Col>
                <div className={classes.root}>
                  {filter_list && filter_list.includes("channel") ? (
                    <ExpansionPanel expanded={flag}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon onClick={(e) => expandValue(e)} />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("channel")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "channel")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            {/* <h6> Channels </h6> */}
                            Channels
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-16"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.channel &&
                              selectedFilters?.channel &&
                              selectedFilters?.channel?.length > 0
                                ? selectedFilters?.channel?.length
                                : "0"
                            } Selected`}{" "}
                          </Typography>
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
                              id="channel"
                              onBlur={Getchannelval}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span
                                  onClick={Getchannelval}
                                  // type="submit"
                                >
                                  Search
                                </span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>

                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searchannelList.map((item) => (
                            <Checkbox
                              children={item.channel_name}
                              onChange={(e) => handleCheckbox(e)}
                              name="channel"
                              value={item.channel_name}
                              checked={
                                (selectedFilters.channel &&
                                  selectedFilters.channel.length > 0 &&
                                  selectedFilters.channel.includes(
                                    item.channel_name
                                  )) ||
                                false
                              }
                            />
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("category") ? (
                    <ExpansionPanel expanded={categoryExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) => setCategoryExpand(!categoryExpand)}
                          />
                          // <ExpandMoreIcon onClick={(e) => expandValue(e)} />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("category")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "category")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Categories
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.category &&
                              selectedFilters?.category &&
                              selectedFilters?.category?.length > 0
                                ? selectedFilters?.category?.length
                                : "0"
                            } Selected`}{" "}
                          </Typography>
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
                              id="category"
                              onBlur={GetCatergoryVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetCatergoryVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhcategorylist.map((item) => (
                            <Checkbox
                              children={item.category}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="category"
                              value={item.category}
                              checked={
                                selectedFilters.category &&
                                selectedFilters.category.length > 0 &&
                                selectedFilters.category.includes(item.category)
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("publisher") ? (
                    <ExpansionPanel expanded={publisherExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) =>
                              setPublisherExpand(!publisherExpand)
                            }
                          />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("publisher")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "publisher")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Publisher
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.publisher &&
                              selectedFilters?.publisher &&
                              selectedFilters?.publisher?.length > 0
                                ? selectedFilters?.publisher?.length
                                : "0"
                            } Selected`}{" "}
                          </Typography>
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
                              id="publisher"
                              onBlur={GetPublisherVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetPublisherVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhpublisherlist.map((item) => (
                            <Checkbox
                              children={item.publisher}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="publisher"
                              value={item.publisher}
                              checked={
                                selectedFilters.publisher &&
                                selectedFilters.publisher.length > 0 &&
                                selectedFilters.publisher.includes(
                                  item.publisher
                                )
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("country") ? (
                    <ExpansionPanel expanded={countryExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) => setCountryExpand(!countryExpand)}
                          />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("country")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "country")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Countries
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.country &&
                              selectedFilters?.country &&
                              selectedFilters?.country?.length > 0
                                ? selectedFilters?.country?.length
                                : "0"
                            } Selected`}{" "}
                          </Typography>
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
                              id="country"
                              onBlur={GetCountryVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetCountryVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhcountrylist.map((item) => (
                            <Checkbox
                              children={item.country}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="country"
                              value={item.country}
                              checked={
                                selectedFilters.country &&
                                selectedFilters.country.length > 0 &&
                                selectedFilters.country.includes(item.country)
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("brand") ? (
                    <ExpansionPanel expanded={brandExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) => setBrandExpand(!brandExpand)}
                          />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("brand")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "brand")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Brands
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.brand &&
                              selectedFilters?.brand &&
                              selectedFilters?.brand?.length > 0
                                ? selectedFilters?.brand?.length
                                : "0"
                            } Selected`}{" "}
                          </Typography>
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
                              id="brand"
                              onBlur={GetBrandVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetBrandVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhbrandlist.map((item) => (
                            <Checkbox
                              children={item.brand}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="brand"
                              value={item.brand}
                              checked={
                                selectedFilters.brand &&
                                selectedFilters.brand.length > 0 &&
                                selectedFilters.brand.includes(item.brand)
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("priority") ? (
                    <ExpansionPanel expanded={priorityExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) => setPriorityExpand(!priorityExpand)}
                          />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("priority")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "priority")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Priorities
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.priority &&
                              selectedFilters?.priority &&
                              selectedFilters?.priority?.length > 0
                                ? selectedFilters?.priority?.length
                                : "0"
                            }Selected`}{" "}
                          </Typography>
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
                              id="priority"
                              onBlur={GetPriorityVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetPriorityVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhprioritylist.map((item) => (
                            <Checkbox
                              children={item.priority}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="priority"
                              value={item.priority}
                              checked={
                                selectedFilters.priority &&
                                selectedFilters.priority.length > 0 &&
                                selectedFilters.priority.includes(item.priority)
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                  {filter_list && filter_list.includes("status") ? (
                    <ExpansionPanel expanded={statusExpand}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon
                            onClick={(e) => setStatusExpand(!statusExpand)}
                          />
                        }
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        disabled={!filter_list.includes("status")}
                      >
                        <div className="d-flex">
                          <div className="svg g">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Check.svg"
                              )}
                              onClick={(e) => unSelectAll(e, "status")}
                            ></SVG>
                          </div>
                          <Typography className="d-flex mt-2" variant="h6">
                            Status
                          </Typography>
                          <Typography
                            className="d-flex mt-2 ml-12"
                            variant="h6"
                          >
                            {" "}
                            {`${
                              selectedFilters?.status &&
                              selectedFilters?.status &&
                              selectedFilters?.status?.length > 0
                                ? selectedFilters?.status?.length
                                : "0"
                            }Selected`}{" "}
                          </Typography>
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
                              id="status"
                              onBlur={GetStatusVal}
                            />
                            <InputGroup.Append>
                              <InputGroup.Text id="basic-addon2">
                                <span onClick={GetStatusVal}>Search</span>
                              </InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </ExpansionPanelActions>
                      <ExpansionPanelDetails className={classes.details}>
                        <Form.Group
                          controlId="formBasicChecbox"
                          className="checkbox-inner mb-0"
                        >
                          {searhstatuslist.map((item) => (
                            <Checkbox
                              children={item.ticket_status}
                              // onChange={handleCheckbox}
                              onChange={(e) => handleCheckbox(e)}
                              name="status"
                              value={item.ticket_status}
                              checked={
                                selectedFilters.status &&
                                selectedFilters.status.length > 0 &&
                                selectedFilters.status.includes(
                                  item.ticket_status
                                )
                              }
                            ></Checkbox>
                          ))}
                        </Form.Group>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ) : (
                    ""
                  )}
                </div>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button
                    type="submit"
                    className="w-100"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Submit
                  </Button>
                </Col>
              </Form>
            </Formik>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mapStateToProps = (state) => {
  const { common, dashboard } = state;
  return {
    setSideDrawer:
      dashboard && dashboard.setSideDrawer ? dashboard.setSideDrawer : false,
    hasPackageChanged:
      dashboard && dashboard.setSideDrawer ? dashboard.setSideDrawer : false,
    setFilterApiCall:
      dashboard && dashboard.setFilterApiCall
        ? dashboard.setFilterApiCall
        : false,
    brand_list: common && common.brand_list ? common.brand_list : [],
    category_list: common && common.category_list ? common.category_list : [],
    channel_list: common && common.channel_list ? common.channel_list : [],
    priority_list: common && common.priority_list ? common.priority_list : [],
    publisher_list:
      common && common.publisher_list ? common.publisher_list : [],
    status_list: common && common.status_list ? common.status_list : [],
    country_name: common && common.country_name ? common.country_name : [],
    filter_list: common && common.filter_list ? common.filter_list : [],
    setGlobalRefreshRendering:
      common && common.setGlobalRefreshRendering
        ? common.setGlobalRefreshRendering
        : true,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);
