/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener("click", heartBlast);
  }, []);

  // For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  //let scrollPosition = useScrollPosition();

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu

  // wakanda project paths
  let home = ["home"],
    projects = ["projects"],
    tasks = ["tasks"],
    messages = ["messages"],
    reports = ["reports"];

  let deshBoard = ["template-dashboard", "dashboard-dark", "kanban", "clients", "project-details", "messages", "latest-activity", "task"],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = ["chart-rechart", "chart-flot", "chart-chartjs", "chart-chartist", "chart-sparkline", "chart-apexchart"],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = ["uc-select2", "uc-nestable", "uc-sweetalert", "uc-toastr", "uc-noui-slider", "map-jqvmap", "uc-lightgallery"],
    redux = ["redux-form", "redux-wizard", "todo"],
    widget = ["widget-basic"],
    forms = ["form-element", "form-wizard", "form-editor-summernote", "form-pickers", "form-validation-jquery"],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = ["page-error-400", "page-error-403", "page-error-404", "page-error-500", "page-error-503"];
  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" && sidebarLayout.value === "horizontal" && headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${home.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/dashboard">
              <i className="fas fa-home"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${projects.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/projects">
              <i className="fas fa-briefcase"></i>
              <span className="nav-text">Project</span>
            </Link>
          </li>
          <li className={`${tasks.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/tasks">
              <i className="fas fa-tasks"></i>
              <span className="nav-text">Tasks</span>
            </Link>
          </li>
          <li className={`${messages.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/message">
              <i className="fas fa-comments"></i>
              <span className="nav-text">Messages</span>
            </Link>
          </li>
          <li className={`${reports.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/reports">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-text">Reports</span>
            </Link>
          </li>
        </MM>

        <div className="copyright">
          <p>
            <strong>Workload Project Management</strong> © 2022 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart"></span> by Wakanda Labs
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
