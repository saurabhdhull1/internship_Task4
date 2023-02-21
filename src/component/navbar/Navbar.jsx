import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Main navbar*/}
      <div className="container-fluid navbar1 hidenav">
        <div className="row">
          <div className="col-md-2">
            <img src="/logo.png" alt="" />
          </div>
          <div className="col-md-5">
            <div className="Navsearch">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All catagories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Appliance
                    </a>
                  </li>
                </ul>
              </li>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-md-4 right_navbar">
                <div>
                  <i className="bi bi-truck"></i> Orders & Tracking
                </div>
                <div>Delivery within India</div>
                <div>
                  <i className="bi bi-recycle"></i> Return
                </div>
              </div>
              <div className="col-md-4 right_navbar">
                <div>
                  {" "}
                  <i className="bi bi-telephone"></i> Call Us Now
                </div>
                <div>+011 5827918</div>
                <div>
                  {" "}
                  <i className="bi bi-box-arrow-in-right"></i> Sign in
                </div>
              </div>
              <div className="col-md-4 right_navbar">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.9083 2.5783 8.50903 1.9987 7.05 1.9987C5.59096 1.9987 4.19169 2.5783 3.16 3.60999C2.1283 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="25"
                    height="37"
                    viewBox="0 0 25 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8247 6.72363H10.7261C10.9263 5.83496 11.3096 5.15137 11.876 4.67285C12.4424 4.19434 13.1113 3.95508 13.8828 3.95508C14.4443 3.95508 14.9668 4.08447 15.4502 4.34326C15.9385 4.59717 16.3145 4.94141 16.5781 5.37598C16.8467 5.81055 16.981 6.26465 16.981 6.73828C16.981 7.66602 16.5195 8.40088 15.5967 8.94287C16.1143 9.15283 16.5391 9.46045 16.8711 9.86572C17.3398 10.437 17.5742 11.0767 17.5742 11.7847C17.5742 12.395 17.4131 12.9785 17.0908 13.5352C16.7686 14.0869 16.3291 14.5142 15.7725 14.8169C15.2158 15.1196 14.5933 15.271 13.9048 15.271C12.9771 15.271 12.2031 15.0049 11.583 14.4727C10.9629 13.9355 10.5576 13.1494 10.3672 12.1143H11.4219C11.6074 12.8125 11.8735 13.3179 12.2202 13.6304C12.6646 14.0259 13.231 14.2236 13.9194 14.2236C14.7007 14.2236 15.3281 13.9893 15.8018 13.5205C16.2754 13.0518 16.5122 12.5024 16.5122 11.8726C16.5122 11.4526 16.3926 11.0596 16.1533 10.6934C15.9189 10.3271 15.6016 10.0513 15.2012 9.86572C14.8057 9.68018 14.1904 9.56543 13.3555 9.52148V8.53271C13.8486 8.53271 14.2979 8.44727 14.7031 8.27637C15.1084 8.10059 15.4014 7.87842 15.582 7.60986C15.7676 7.34131 15.8604 7.04834 15.8604 6.73096C15.8604 6.26221 15.6724 5.85693 15.2964 5.51514C14.9253 5.17334 14.4541 5.00244 13.8828 5.00244C13.4189 5.00244 13.0186 5.13428 12.6816 5.39795C12.3447 5.65674 12.0591 6.09863 11.8247 6.72363Z"
                      fill="#FDDE3B"
                    />
                    <g clipPath="url(#clip0_102_661)">
                      <path
                        d="M9 34.0547C9.55228 34.0547 10 33.607 10 33.0547C10 32.5024 9.55228 32.0547 9 32.0547C8.44772 32.0547 8 32.5024 8 33.0547C8 33.607 8.44772 34.0547 9 34.0547Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 34.0547C20.5523 34.0547 21 33.607 21 33.0547C21 32.5024 20.5523 32.0547 20 32.0547C19.4477 32.0547 19 32.5024 19 33.0547C19 33.607 19.4477 34.0547 20 34.0547Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 13.0547H5L7.68 26.4447C7.77144 26.9051 8.02191 27.3187 8.38755 27.613C8.75318 27.9073 9.2107 28.0637 9.68 28.0547L14.54 24.0547L19.4 28.0547C19.8693 28.0637 20.3268 27.9073 20.6925 27.613C21.0581 27.3187 21.3086 26.9051 21.4 26.4447L23 18.0547"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_661">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 12.0547)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navbar*/}
      <div className="mob">
        <div className="Navsearch">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All catagories
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Electronics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fashion
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Appliance
                </a>
              </li>
            </ul>
          </li>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="mob-navbar">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <label htmlFor="my-checkbox">
            <i className="bi bi-list"></i>
          </label>
          <input type="checkbox" id="my-checkbox" />
          <div className="container-fluid mob_navbar1">
            <label htmlFor="my-checkbox">
              <i class="bi bi-x-lg"></i>
            </label>
            <div>
              <div>
                <i className="bi bi-truck"></i> Orders & Tracking
              </div>
              <div>Delivery within India</div>
              <div>
                <i className="bi bi-recycle"></i> Return
              </div>
              <div>
                {" "}
                <i className="bi bi-telephone"></i> Call Us Now
              </div>
              <div>+011 5827918</div>
              <div>
                {" "}
                <i className="bi bi-box-arrow-in-right"></i> Sign in
              </div>

              <div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.9083 2.5783 8.50903 1.9987 7.05 1.9987C5.59096 1.9987 4.19169 2.5783 3.16 3.60999C2.1283 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="25"
                    height="37"
                    viewBox="0 0 25 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8247 6.72363H10.7261C10.9263 5.83496 11.3096 5.15137 11.876 4.67285C12.4424 4.19434 13.1113 3.95508 13.8828 3.95508C14.4443 3.95508 14.9668 4.08447 15.4502 4.34326C15.9385 4.59717 16.3145 4.94141 16.5781 5.37598C16.8467 5.81055 16.981 6.26465 16.981 6.73828C16.981 7.66602 16.5195 8.40088 15.5967 8.94287C16.1143 9.15283 16.5391 9.46045 16.8711 9.86572C17.3398 10.437 17.5742 11.0767 17.5742 11.7847C17.5742 12.395 17.4131 12.9785 17.0908 13.5352C16.7686 14.0869 16.3291 14.5142 15.7725 14.8169C15.2158 15.1196 14.5933 15.271 13.9048 15.271C12.9771 15.271 12.2031 15.0049 11.583 14.4727C10.9629 13.9355 10.5576 13.1494 10.3672 12.1143H11.4219C11.6074 12.8125 11.8735 13.3179 12.2202 13.6304C12.6646 14.0259 13.231 14.2236 13.9194 14.2236C14.7007 14.2236 15.3281 13.9893 15.8018 13.5205C16.2754 13.0518 16.5122 12.5024 16.5122 11.8726C16.5122 11.4526 16.3926 11.0596 16.1533 10.6934C15.9189 10.3271 15.6016 10.0513 15.2012 9.86572C14.8057 9.68018 14.1904 9.56543 13.3555 9.52148V8.53271C13.8486 8.53271 14.2979 8.44727 14.7031 8.27637C15.1084 8.10059 15.4014 7.87842 15.582 7.60986C15.7676 7.34131 15.8604 7.04834 15.8604 6.73096C15.8604 6.26221 15.6724 5.85693 15.2964 5.51514C14.9253 5.17334 14.4541 5.00244 13.8828 5.00244C13.4189 5.00244 13.0186 5.13428 12.6816 5.39795C12.3447 5.65674 12.0591 6.09863 11.8247 6.72363Z"
                      fill="#FDDE3B"
                    />
                    <g clipPath="url(#clip0_102_661)">
                      <path
                        d="M9 34.0547C9.55228 34.0547 10 33.607 10 33.0547C10 32.5024 9.55228 32.0547 9 32.0547C8.44772 32.0547 8 32.5024 8 33.0547C8 33.607 8.44772 34.0547 9 34.0547Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 34.0547C20.5523 34.0547 21 33.607 21 33.0547C21 32.5024 20.5523 32.0547 20 32.0547C19.4477 32.0547 19 32.5024 19 33.0547C19 33.607 19.4477 34.0547 20 34.0547Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 13.0547H5L7.68 26.4447C7.77144 26.9051 8.02191 27.3187 8.38755 27.613C8.75318 27.9073 9.2107 28.0637 9.68 28.0547L14.54 24.0547L19.4 28.0547C19.8693 28.0637 20.3268 27.9073 20.6925 27.613C21.0581 27.3187 21.3086 26.9051 21.4 26.4447L23 18.0547"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_661">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 12.0547)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar 2*/}
      <div className="navbar2">
        <div className="navbar21">
          <div>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.364746"
                width="13.2362"
                height="1.53379"
                fill="white"
              />
              <rect y="5.73291" width="13.2362" height="1.53379" fill="white" />
              <rect y="11.1014" width="13.2362" height="1.53379" fill="white" />
            </svg>{" "}
            Brouse By Category
          </div>
          <div>Home</div>
          <div>Easy Monthly Installments</div>
          <div>Shop by Brands</div>
          <div>Become a Vendor</div>
        </div>

        <div className="navbar22">
          <span>
            <svg
              width="11"
              height="23"
              viewBox="0 0 11 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99175 4.15292H11V0.654917C10.6535 0.60725 9.46196 0.5 8.07424 0.5C5.17874 0.5 3.19523 2.32142 3.19523 5.66908V8.75H0V12.6605H3.19523V22.5H7.11274V12.6614H10.1787L10.6654 8.75092H7.11182V6.05683C7.11274 4.92658 7.41705 4.15292 8.99175 4.15292Z"
                fill="white"
              />
            </svg>
          </span>
          <span>
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2.63092C21.1819 2.99231 20.3101 3.23185 19.4012 3.34815C20.3362 2.786 21.0499 1.90262 21.3854 0.837846C20.5136 1.36123 19.5511 1.73092 18.5254 1.93723C17.6976 1.04969 16.5179 0.5 15.2309 0.5C12.7339 0.5 10.7236 2.54092 10.7236 5.04292C10.7236 5.40292 10.7539 5.74908 10.8281 6.07862C7.0785 5.89446 3.76063 4.08477 1.53175 1.328C1.14262 2.00785 0.914375 2.786 0.914375 3.62369C0.914375 5.19662 1.71875 6.59092 2.91775 7.39815C2.19312 7.38431 1.48225 7.17246 0.88 6.83877C0.88 6.85262 0.88 6.87062 0.88 6.88862C0.88 9.09569 2.44337 10.9289 4.4935 11.3512C4.12637 11.4523 3.72625 11.5008 3.311 11.5008C3.02225 11.5008 2.73075 11.4842 2.45712 11.4232C3.0415 13.2218 4.69975 14.5442 6.6715 14.5871C5.137 15.7958 3.18863 16.5242 1.07938 16.5242C0.7095 16.5242 0.35475 16.5075 0 16.4618C1.99787 17.7592 4.36563 18.5 6.919 18.5C15.2185 18.5 19.756 11.5769 19.756 5.576C19.756 5.37523 19.7491 5.18139 19.7395 4.98892C20.6346 4.34923 21.3867 3.55031 22 2.63092Z"
                fill="white"
              />
            </svg>
          </span>
          <span>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.901 22.4532V22.4523H21.9065V14.4181C21.9065 10.4877 21.0604 7.46008 16.4655 7.46008C14.2566 7.46008 12.7743 8.67224 12.1691 9.82141H12.1052V7.82702H7.74857V22.4523H12.285V15.2104C12.285 13.3036 12.6465 11.4598 15.0078 11.4598C17.3344 11.4598 17.3691 13.6359 17.3691 15.3327V22.4532H21.901Z"
                fill="white"
              />
              <path
                d="M0.361511 7.82788H4.90344V22.4532H0.361511V7.82788Z"
                fill="white"
              />
              <path
                d="M2.6306 0.546753C1.17838 0.546753 0 1.72514 0 3.17735C0 4.62956 1.17838 5.83259 2.6306 5.83259C4.08281 5.83259 5.26119 4.62956 5.26119 3.17735C5.26028 1.72514 4.0819 0.546753 2.6306 0.546753V0.546753Z"
                fill="white"
              />
            </svg>
          </span>
          <span>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7103 6.99621C22.6591 5.83451 22.4713 5.03585 22.2021 4.3438C21.9245 3.60921 21.4974 2.95153 20.9378 2.4048C20.3911 1.84956 19.7291 1.41811 19.003 1.14483C18.307 0.875721 17.5125 0.687861 16.3508 0.636641C15.1804 0.581084 14.8088 0.568237 11.8404 0.568237C8.87205 0.568237 8.5005 0.581084 7.33446 0.632303C6.17276 0.683523 5.37411 0.87155 4.68222 1.14049C3.94747 1.41811 3.28979 1.84522 2.74306 2.4048C2.18782 2.95153 1.75654 3.61355 1.48309 4.33963C1.21398 5.03585 1.02612 5.83017 0.974898 6.99187C0.919341 8.16224 0.906494 8.53379 0.906494 11.5022C0.906494 14.4706 0.919341 14.8421 0.97056 16.0082C1.02178 17.1699 1.20981 17.9685 1.47892 18.6606C1.75654 19.3952 2.18782 20.0528 2.74306 20.5996C3.28979 21.1548 3.9518 21.5863 4.67789 21.8595C5.37411 22.1287 6.16843 22.3165 7.33029 22.3677C8.49616 22.4191 8.86788 22.4318 11.8363 22.4318C14.8047 22.4318 15.1762 22.4191 16.3423 22.3677C17.504 22.3165 18.3026 22.1287 18.9945 21.8595C20.4638 21.2915 21.6255 20.1298 22.1936 18.6606C22.4626 17.9644 22.6506 17.1699 22.7018 16.0082C22.753 14.8421 22.7659 14.4706 22.7659 11.5022C22.7659 8.53379 22.7616 8.16224 22.7103 6.99621ZM20.7415 15.9228C20.6944 16.9905 20.5151 17.5671 20.3656 17.9515C19.9982 18.904 19.2423 19.6599 18.2898 20.0273C17.9054 20.1768 17.3246 20.3562 16.261 20.403C15.1078 20.4544 14.762 20.4671 11.8448 20.4671C8.92761 20.4671 8.57741 20.4544 7.42839 20.403C6.36062 20.3562 5.78403 20.1768 5.39963 20.0273C4.92564 19.8521 4.4942 19.5745 4.144 19.2115C3.78096 18.8569 3.50334 18.4298 3.32816 17.9559C3.17867 17.5715 2.99932 16.9905 2.95244 15.9271C2.90105 14.7739 2.88837 14.4279 2.88837 11.5107C2.88837 8.59352 2.90105 8.24333 2.95244 7.09447C2.99932 6.0267 3.17867 5.45011 3.32816 5.06571C3.50334 4.59156 3.78096 4.16028 4.14834 3.80992C4.50271 3.44688 4.92981 3.16926 5.40397 2.99424C5.78837 2.84475 6.3693 2.6654 7.43273 2.61835C8.58592 2.56713 8.93194 2.55429 11.849 2.55429C14.7705 2.55429 15.1163 2.56713 16.2653 2.61835C17.3331 2.6654 17.9097 2.84475 18.2941 2.99424C18.7681 3.16926 19.1995 3.44688 19.5497 3.80992C19.9128 4.16445 20.1904 4.59156 20.3656 5.06571C20.5151 5.45011 20.6944 6.03088 20.7415 7.09447C20.7927 8.24766 20.8055 8.59352 20.8055 11.5107C20.8055 14.4279 20.7927 14.7696 20.7415 15.9228Z"
                fill="white"
              />
              <path
                d="M11.8405 5.88574C8.73982 5.88574 6.22406 8.40134 6.22406 11.5022C6.22406 14.6031 8.73982 17.1187 11.8405 17.1187C14.9414 17.1187 17.457 14.6031 17.457 11.5022C17.457 8.40134 14.9414 5.88574 11.8405 5.88574ZM11.8405 15.1455C9.82895 15.1455 8.19726 13.5139 8.19726 11.5022C8.19726 9.49046 9.82895 7.85895 11.8405 7.85895C13.8523 7.85895 15.4838 9.49046 15.4838 11.5022C15.4838 13.5139 13.8523 15.1455 11.8405 15.1455Z"
                fill="white"
              />
              <path
                d="M18.9904 5.66373C18.9904 6.38781 18.4033 6.97491 17.679 6.97491C16.9549 6.97491 16.3678 6.38781 16.3678 5.66373C16.3678 4.93948 16.9549 4.35254 17.679 4.35254C18.4033 4.35254 18.9904 4.93948 18.9904 5.66373Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
