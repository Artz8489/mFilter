import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector, useDispatch, connect } from "react-redux";
import { FetchMenulist } from "../../../../../redux/actions/CommonActions";
import { Spinner } from "react-bootstrap";
import { forEach } from "lodash";

export function AsideMenuList({ layoutProps }) {
  const [hasMenu, setHasMenu] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const packageName = localStorage.getItem("dpackage");
  // const packageName = localStorage.getItem('dpackage') === null ? "in.itcstore" : localStorage.getItem('dpackage')
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
      "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  // useEffect(() => {
  //   if (packageName) {
  //     dispatch(FetchMenulist(packageName));
  //   }
  // }, [packageName]);

  const menuList = useSelector((state) => state?.common?.menu_list?.menus);
  const commonLoading = useSelector((state) => state.common.commonLoading);

  function renderSwitch(menu) {
    const hasVerficationMenu =
      menu && menu?.menu_name == "Verification" ? true : false;

    switch (menu.menu_name) {
      case "Dashboard":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Dashboard.svg")} />
        );

      case "Report":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Settings-1.svg")} />
        );

      case "Tickets":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Tickets.svg")} />
        );

      case "Add User":
        return (
          <SVG
            src={toAbsoluteUrl(
              "/media/svg/icons/General/Adress-book2.svg"
            )}
          />
        );
      case "Add Package":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Box2.svg")} />
        );
      case "User Package Mapping":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Box2.svg")} />
        );
      case "User Management":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Pantone.svg")} />
        );
      case "360 Degree Search":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Pantone.svg")} />
        );
      case "Digital Foot Print":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Pantone.svg")} />
        );
      case "Deep Dive Analysis":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Pantone.svg")} />
        );

      case "mTrackit Dashboard":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Dashboard.svg")} />
        );
      case "Publisher":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Box2.svg")} />
        );
        case "Campaigns":
        return (
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Pantone.svg")} />
        );

      default:
        return;
    }
  }




  let showSubMenu = false
  let routeName = ''
  menuList &&
    menuList.forEach(menu => {
      if (menu.sub_menu === "9") {
        showSubMenu = true
      }
      routeName = menu.route
      return
    })

  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li className="menu-section ">
          <h4 className="menu-text">Menu</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        {menuList &&
          menuList?.map((menu, i) =>
            menu.menu_name !== "Verification" && menu.sub_menu === "0" ? (
              <li
                key={"mainmenu_" + i}
                className={`menu-item ${getMenuItemActive(menu.route, false)}`}
                aria-haspopup="true"
              >
                {/* <NavLink className="menu-link" to={menu.route}>
                  <span className="svg-icon menu-icon">
                    {renderSwitch(menu)}
                  </span>
                  <span className="menu-text">{menu.menu_name}</span>
                </NavLink> */}
                <NavLink className="menu-link" to={menu.route}
                //  onClick={(e) => {
                //   if(commonLoading) e.preventDefault()
                //  }}
                >
                  <span className="svg-icon menu-icon">
                    {renderSwitch(menu)}
                  </span>
                  <span className="menu-text">{menu.menu_name}</span>
                </NavLink>
              </li>
            ) : null
          )}

        {
          showSubMenu ? (
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                routeName,
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/error"
              //  onClick={(e) => {
              //   if(commonLoading) e.preventDefault()
              //  }} 
              >
                <span className="svg-icon menu-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
                  />
                </span>
                <span className="menu-text">Verifications</span>
                <i className="menu-arrow" />
              </NavLink>
              {menuList &&
                menuList?.map((menu, i) =>
                  menu.sub_menu === "9" ? (
                    <div className="menu-submenu">
                      <i className="menu-arrow" />
                      <ul className="menu-subnav">
                        <li
                          className={`menu-item ${getMenuItemActive(menu.route)}`}
                          aria-haspopup="true"
                        >
                          <NavLink className="menu-link" to={menu.route}
                          //  onClick={(e) => {
                          //   if(commonLoading) e.preventDefault()
                          //  }} 
                          >
                            <i className="menu-bullet menu-bullet-dot">
                              <span />
                            </i>
                            <span className="menu-text">{menu.menu_name}</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : null
                )}
            </li>
          ) : null
        }






      </ul>
    </>
  );
}
const mapStateToProps = (state) => {
  const { common } = state;
};
export default connect(mapStateToProps)(AsideMenuList);
