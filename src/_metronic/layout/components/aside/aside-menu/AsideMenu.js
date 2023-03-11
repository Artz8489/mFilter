import React, { useMemo, useState, useEffect } from "react";
import { AsideMenuList } from "./AsideMenuList";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import Select from 'react-select'
import { FetchPackagename, FetchMenulist } from "../../../../../redux/actions/CommonActions";
import {
  FetchTotalIncidents, FetchIncidentVolumes, FetchActivecasesbychannel, FetchSubchannel,
  FetchToptenLocation, FetchCategorlevelcount, FetchPublisherlevelcount
}
  from "../../../../../redux/actions/DashboardActions";
  import {
    FetchReport
   
  } from "../../../../../redux/actions/ReportActions";
  import {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  } from "../../../../../../src/app/utils/helpers";
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import * as constant from "../../../../../redux/constants/CommonConstants";
import { SET_PACKAGE_CHANGE } from "../../../../../redux/constants/DashboardConstants";
import {
  FILTER_CATEGORY_SELECTED_VALUE
} from "../../../../../../src/app/utils/const";
import moment from "moment";

export function AsideMenu({ disableScroll }) {
  const package_name = useSelector(state => state.common.package_name)

  const [defValue, setDefValue]= useState(null)
  const [packages, setPackges]= useState(null)
  //let packages = null;
  // localStorage.setItem("dpackage", defValue?.value);
  const [dpackage, setPackage] = useState(localStorage.getItem('dpackage'));
  
  const uiService = useHtmlClassService();
  const dispatch = useDispatch();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true)
    };
  }, [uiService]);

  const getLocalPackname = localStorage.getItem("selectedPackage");
  const getPackname = getLocalPackname !== "undefined"  ? JSON.parse(getLocalPackname) : ''
  const gertStartDate = localStorage.getItem("startDate");
  const d = new Date();
  const weekstartdate = d.setDate(d.getDate() - 7);
  const startDate = gertStartDate ? gertStartDate : moment(weekstartdate).format("YYYY-MM-DD");


  const handleOnchange = (e) => {
    setDefValue(e)
    localStorage.setItem("dpackage", e.value);
    localStorage.setItem("selectedPackage", JSON.stringify(e));
    setPackage(e.value);
    dispatch({ type: constant.SET_GLOBAL_PACKAGE_NAME, setGlobalPackageName: e.value })
    const data = {
      "package_name": e.value,
      "fromDate": startDate,
      "toDate": localStorage.getItem("endDate"),
      "country": "all",
      "category": "all",
      "publisher": "all",
      "channel": "all",
      "brand": "all",
      "status": "all",
      "priority": "all"
    }
    dispatch(FetchMenulist(e.value))
    dispatch(FetchTotalIncidents(data))
    dispatch(FetchIncidentVolumes(data))
    dispatch(FetchActivecasesbychannel(data))
    dispatch(FetchSubchannel(data))
    dispatch(FetchToptenLocation(data))
    dispatch(FetchCategorlevelcount(data))
    dispatch(FetchPublisherlevelcount(data))

    
    removeLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)

     setLocalStorage(
      FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES,
      JSON.stringify(data)
    );
  }

  useEffect(() => {
    dispatch(FetchPackagename())
  }, [])


  
  useEffect(() => {
    if(package_name && package_name.length > 0){
      let tempPack=[]
      package_name.map((pack, i) => (
          tempPack.push({ value: pack.package_name, label: pack.package_name })
      ))
      setPackges(tempPack)
      // setDefValue(tempPack[0])
      if (getLocalPackname) {
        localStorage.setItem("dpackage", getPackname?.value)
        dispatch(FetchMenulist(getPackname?.value)); // will remove
        setDefValue(JSON.parse(getLocalPackname))
      } else {
        localStorage.setItem("dpackage", tempPack[0] && tempPack[0]?.value)


        dispatch(FetchMenulist(tempPack[0] && tempPack[0]?.value)); // will remove
        setDefValue(tempPack[0])
      }
    }
  }, [package_name])

  return (
    <>
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        className={`aside-menu ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}>

        
          <li style={{listStyle:"none"}}className="pr-5 pl-5">
            <Select
              value={defValue}
              onChange={handleOnchange}
              options={packages}
            />
          </li>
        
    

        <AsideMenuList layoutProps={layoutProps} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { common } = state;
}
export default connect(mapStateToProps)(AsideMenu) 


