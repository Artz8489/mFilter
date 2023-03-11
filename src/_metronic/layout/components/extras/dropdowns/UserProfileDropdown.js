/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { unsetLocalStorage } from "../../../../../app/utils/helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../../../../app/utils/helpers";
import { AUTH_DATA } from "../../../../../app/utils/const";


export function UserProfileDropdown() {
  // const { user } = useSelector((state) => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light:
        objectPath.get(uiService.config, "extras.user.dropdown.style") ===
        "light",
    };
  }, [uiService]);

  const signout = () => {
    unsetLocalStorage()
    console.log("logout is called");
    localStorage.removeItem("auth_data");
    localStorage.removeItem('dpackage');
    localStorage.removeItem('startDateValue');    
    localStorage.removeItem('startDate');    
    localStorage.removeItem('endDate');    
    window.location = "/auth/login";
  };

  const getauthvalue = JSON.parse(
    getLocalStorage(AUTH_DATA.AUTH)
  )

  const name = getauthvalue && getauthvalue?.name;

  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-user-profile"
      >
        <div
          className={
            "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
          }
        >
          <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
            Hi
          </span>{" "}
          <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
            {name}
          </span>
          <span className="symbol symbol-35 symbol-light-success">
            <span className="symbol-label font-size-h5 font-weight-bold">
              {name?.charAt(0)}
            </span>
          </span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
        <>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
            style={{ background: "#f4864d" }}
          >
            <div className="symbol bg-white-o-15 mr-3">
              <span className="symbol-label text-success font-weight-bold font-size-h4">
                {name?.charAt(0)}
              </span>
              {/*<img alt="Pic" className="hidden" src={user.pic} />*/}
            </div>
            <div className="text-white m-0 flex-grow-1 mr-3 font-size-h5">
              {name}
            </div>
          </div>
        </>

        <div className="navi navi-spacer-x-0 pt-5">
          {/* <Link to="/user-profile" className="navi-item px-8 cursor-pointer">
            <div className="navi-link">
              <div className="navi-icon mr-2">
                <i className="flaticon2-calendar-3 text-success" />
              </div>
              <div className="navi-text">
                <div className="font-weight-bold cursor-pointer">
                  My Profile
                </div>
                <div className="text-muted">
                  Account settings and more
                  <span className="label label-light-danger label-inline font-weight-bold">
                    update
                  </span>
                </div>
              </div>
            </div>
          </Link> */}

          <Link to="/changepassword" className="navi-item px-8">
            <div className="navi-link">
              <div className="navi-icon mr-2">
                <i className="flaticon2-mail text-warning"></i>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">Change Password</div>
                <div className="text-muted">change the user password</div>
              </div>
            </div>
          </Link>
          <div className="navi-separator mt-3"></div>

          <div className="navi-footer  px-8 py-5">
            {/* <Link
              to="/auth/login"
              className="btn btn-light-primary font-weight-bold"
              onClick={() => {localStorage.removeItem('auth_data') }}
            >
              Sign Out
            </Link> */}
            <button
              type="button"
              className="btn btn-light-primary font-weight-bold"
              // onClick={() => {localStorage.removeItem('auth_data') }}
              onClick={() => {
                signout();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
