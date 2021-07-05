(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-12\">\r\n          <div class=\"card-body\">\r\n            <div class=\"h4 mt-0 title\">About</div>\r\n            <p>\r\n              Hi I'm <strong>William Hu</strong>. Currently I am a student at UC Berkeley studying Electrial Engineering\r\n              and Computer Science. I have expertise with\r\n              Angular, React, Python, and Java. I've done a few personal projects and portfolio work that can be found\r\n              below. I currently have a GPA of 3.9\r\n            </p>\r\n\r\n            <p>\r\n              I love innovation and everything related to generating new knowledge. I enjoy facing new problems and\r\n              solve them as soon as possible. I am very methodological and calculative about the time I spend on the\r\n              work I do. Furthermore, I am also interested in learning the foundations of computers and computing\r\n              theory.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12\">\r\n          <div class=\"card-body\">\r\n            <div class=\"h4 mt-0 title\">Basic Information</div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-sm-4\">\r\n                <strong class=\"text-uppercase\">Email:</strong>\r\n              </div>\r\n              <div class=\"col-sm-8\">hubi@berkeley.edu</div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-sm-4\">\r\n                <strong class=\"text-uppercase\">Phone:</strong>\r\n              </div>\r\n              <div class=\"col-sm-8\">+1 510 423 1076 (USA) </div>\r\n              <div class=\"col-sm-4\"></div>\r\n              <div class=\"col-sm-8\">+1 647 962 1168 (CAN) </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-sm-4\">\r\n                <strong class=\"text-uppercase\">Address:</strong>\r\n              </div>\r\n              <div class=\"col-sm-8\">2729 Dwight Way #201 </div>\r\n              <div class=\"col-sm-4\"></div>\r\n              <div class=\"col-sm-8\">Berkeley, CA, 94704 </div>\r\n            </div>\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-sm-4\">\r\n                <strong class=\"text-uppercase\">Language:</strong>\r\n              </div>\r\n              <div class=\"col-sm-8\">English, French, Mandarin</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"contact\">\r\n  <div class=\"cc-contact-information\">\r\n    <div class=\"container\">\r\n      <div class=\"cc-contact\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n            <div class=\"card mb-0\" data-aos=\"zoom-in\">\r\n              <div class=\"h4 text-center title\">Contact Me</div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"card-body\">\r\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid ; sendEmail($event); f.resetForm()\" #f=\"ngForm\"\r\n                      novalidate>\r\n                      <div class=\"p pb-3\">\r\n                        <strong>Feel free to contact me </strong>\r\n                      </div>\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col\">\r\n                          <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                              <i class=\"fa fa-user-circle\"></i>\r\n                            </span>\r\n                            <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\r\n                              [(ngModel)]=\"model.name\" #name=\"ngModel\"\r\n                              [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col\">\r\n                          <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                              <i class=\"fa fa-file-text\"></i>\r\n                            </span>\r\n                            <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\r\n                              [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\r\n                              [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col\">\r\n                          <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                              <i class=\"fa fa-envelope\"></i>\r\n                            </span>\r\n                            <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\r\n                              [(ngModel)]=\"model.email\" #email=\"ngModel\"\r\n                              [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\r\n                              pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col\">\r\n                          <div class=\"form-group\">\r\n                            <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\r\n                              [(ngModel)]=\"model.message\" #message=\"ngModel\"\r\n                              [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <button class=\"btn btn-primary\" type=\"submit\">Send</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"card-body\">\r\n                    <p class=\"mb-0\">\r\n                      <strong>Phone</strong>\r\n                    </p>\r\n                    <p class=\"pb-2\">+1 510 423 1076</p>\r\n                    <p class=\"mb-0\">\r\n                      <strong>Email</strong>\r\n                    </p>\r\n                    <p>hubi@berkeley.edu</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-snotify class=\"material\"></ng-snotify>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"education\">\r\n  <div class=\"container cc-education\">\r\n    <div class=\"h4 text-center mb-4 title\">Education</div>\r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\r\n          <div class=\"card-body cc-education-header\">\r\n            <p>2020 - 2024</p>\r\n            <div class=\"h5\">Pursuing Bachelor's Degree</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\r\n          <div class=\"card-body\">\r\n            <div class=\"h5\">Electrial Engineering and Computer Science</div>\r\n            <h4 class=\"category\">University of California, Berkeley\r\n            </h4>\r\n            <ul>\r\n              <li>Dean's Honor List </li>\r\n              <li>CS61A TA</li>\r\n              <li>Berkeley IEEE Website Director</li>\r\n              <li>3.9 GPA</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\r\n          <div class=\"card-body cc-education-header\">\r\n            <p>2014 - 2020</p>\r\n            <div class=\"h5\">High School</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\r\n          <div class=\"card-body\">\r\n            <div class=\"h5\">High School</div>\r\n            <h4 class=\"category\">University of Toronto Schools\r\n            </h4>\r\n            <ul>\r\n              <li>High School Math and CS Team</li>\r\n              <li>Assisted teachers with summer education programs</li>\r\n              <li>Recipient of W. Bruce MacLean Mathletic Award</li>\r\n              <li>4.0 GPA</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"experience\">\r\n    <div class=\"container cc-education\">\r\n        <div class=\"h4 text-center mb-4 title\">Work Experience</div>\r\n        <div class=\"colorlib-narrow-content\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"timeline-centered\">\r\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                            <div class=\"timeline-entry-inner\">\r\n\r\n                                <div class=\"timeline-icon color-1\">\r\n                                    <i class=\"icon-pen2\"></i>\r\n                                </div>\r\n\r\n                                <div class=\"timeline-label\">\r\n                                    <h2> Jr. Technical Analyst <span>May 2021 to Present</span></h2>\r\n                                    <h4> Ministry of Transportation</h4>\r\n                                    <p> Worked on redeveloping a tool for law enforcement to capture roadside data and\r\n                                        access driver data that works both online and offline</p>\r\n                                    <ul>\r\n                                        <li>Angular</li>\r\n                                        <li>UI UX development</li>\r\n                                        <li>Java Spring Boot</li>\r\n                                    </ul>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n\r\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                            <div class=\"timeline-entry-inner\">\r\n\r\n                                <div class=\"timeline-icon color-2\">\r\n                                    <i class=\"icon-pen2\"></i>\r\n                                </div>\r\n\r\n                                <div class=\"timeline-label\">\r\n                                    <h2>Systems Officer I <span>June to August 2020</span></h2>\r\n                                    <h4> Ministry of Health</h4>\r\n                                    <p>Worked on creating a generic data collecting tool that can collect any kind of\r\n                                        data and doesn't need to be redevelopped</p>\r\n                                    <ul>\r\n                                        <li>React</li>\r\n                                        <li>UI UX development</li>\r\n                                        <li>Node JS</li>\r\n                                    </ul>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n\r\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                            <div class=\"timeline-entry-inner\">\r\n\r\n                                <div class=\"timeline-icon color-3\">\r\n                                    <i class=\"icon-pen2\"></i>\r\n                                </div>\r\n\r\n                                <div class=\"timeline-label\">\r\n                                    <h2>Web Developer <span>Nov 2020 to May 2021</span></h2>\r\n                                    <h4> Mzuzah Charitable Inc.</h4>\r\n                                    <p>Worked on redesigning the Mzhuzah Charitable website</p>\r\n                                    <ul>\r\n                                        <li>Squarespace</li>\r\n                                        <li>UI UX development</li>\r\n                                    </ul>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/extracurriculum/extracurriculum.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/extracurriculum/extracurriculum.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"extracurriculum\">\r\n    <div class=\"container cc-extracurriculum\">\r\n        <div class=\"h4 text-center mb-4 title\">ExtraCurriculum</div>\r\n\r\n        <pagination-controls id=\"pagination2\" (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n        <div class=\"row\">\r\n\r\n            <ng-container *ngFor=\"let extra of extracurriculum| paginate: config\">\r\n                <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                    <div class=\"blog-entry\">\r\n                        <div class=\"card\">\r\n                            <img class=\"card-img-top\" src={{extra.imgUrl}} onerror=\"this.src = 'assets/images/gif.gif'\"\r\n                                alt=\"Card image\" style=\"width:100%\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">{{extra.title}}</h4>\r\n                                <p class=\"card-text\">{{extra.desc}}</p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <pagination-controls id=\"pagination2\" (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container text-center\">\r\n      <a class=\"cc-instagram btn btn-link\" href=\"https://www.instagram.com/hubi0111/\" target=\"_blank\">\r\n        <i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a class=\"cc-linkedin btn btn-link \" href=\"https://www.linkedin.com/in/williamhu2002/\" target=\"_blank\">\r\n        <i class=\"fa fa-linkedin fa-2x \" aria-hidden=\"true\"></i>\r\n      </a>\r\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/hubi0111\" target=\"_blank\">\r\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"text-center text-muted\">\r\n      <p>&copy; All rights reserved.\r\n      </p>\r\n    </div>\r\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"profile-page sidebar-collapse\">\r\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n          <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">William's Website</a>\r\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n            aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-bar bar1\"></span>\r\n            <span class=\"navbar-toggler-bar bar2\"></span>\r\n            <span class=\"navbar-toggler-bar bar3\"></span>\r\n          </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#about\">About</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#projects\">Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#extracurriculum\">ExtraCurriculum</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"page-header page-header-small\" filter-color=\"green\">\r\n            <div class=\"page-header-image\" data-parallax=\"true\"\r\n                style=\"background-image: url('assets/images/YvZh34.jpg');\">\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"content-center\">\r\n                    <div class=\"cc-profile-image\">\r\n                        <a href=\"#about\">\r\n                            <img src=\"assets/images/headshot.jpg\" alt=\"Image\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"h2 title\">William Hu</div>\r\n                    <p class=\"category text-white\">Full Stack Developer</p>\r\n                    <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\"\r\n                        data-aos-anchor=\"data-aos-anchor\">Contact Me</a>\r\n                    <a class=\"btn btn-primary\"\r\n                        href=\"https://drive.google.com/file/d/1LwwPbiYEJgSguSoKwsOrVaiju-OK-eVT/view?usp=sharing\"\r\n                        target=\"_blank\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"section\">\r\n                <div class=\"container\">\r\n                    <div class=\"button-container\">\r\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.instagram.com/hubi0111/\"\r\n                            target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                            <i class=\"fa fa-instagram\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\"\r\n                            href=\"https://www.linkedin.com/in/williamhu2002/\" target=\"_blank\" rel=\"tooltip\"\r\n                            title=\"Follow me on Linkedin\">\r\n                            <i class=\"fa fa-linkedin\"></i>\r\n                        </a>\r\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/hubi0111\"\r\n                            target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\r\n                            <i class=\"fa fa-github\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"page-content\">\r\n    <app-intro></app-intro>\r\n    <app-about></app-about>\r\n    <app-experience></app-experience>\r\n    <app-projects></app-projects>\r\n    <app-skills></app-skills>\r\n    <app-education></app-education>\r\n    <app-extracurriculum></app-extracurriculum>\r\n    <app-contact></app-contact>\r\n</div>\r\n<app-footer></app-footer>\r\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\r\n    <div class=\"container cc-education\">\r\n        <div class=\"h4 text-center mb-4 title\">Projects</div>\r\n\r\n        <pagination-controls id=\"pagination1\" (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n        <div class=\"row\">\r\n\r\n            <ng-container *ngFor=\"let project of projects| paginate: config\">\r\n                <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\r\n                    <div class=\"blog-entry\">\r\n                        <div class=\"card\">\r\n                            <img class=\"card-img-top\" src={{project.imgUrl}} onerror=\"this.src = 'assets/images/gif.gif'\" alt=\"Card image\" style=\"width:100%\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">{{project.title}}</h4>\r\n                                <p class = \"card-text\">{{project.desc}}</p>\r\n                                <h5 class=\"card-text\"><b>Technology:</b> {{project.tech}} </h5>\r\n                                <a href={{project.githurl}} target=\"_blank\" class=\"btn btn-primary stretched-link\">GithubLink</a>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <pagination-controls id=\"pagination1\" (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"skill\">\r\n    <div class=\"container\">\r\n        <div class=\"h4 text-center mb-4 title\">Skills</div>\r\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">Angular</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\r\n                                <span class=\"progress-value\">Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">Node JS</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\r\n                                <span class=\"progress-value\">Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">React</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\r\n                                <span class=\"progress-value\">Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">HTML CSS JS</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                                <span class=\"progress-value\">Highly Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">Java</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                                <span class=\"progress-value\">Highly Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">Python</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                                <span class=\"progress-value\">Highly Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">MySQL</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                                <span class=\"progress-value\">Highly Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"progress-container progress-primary\">\r\n                            <span class=\"progress-badge\">Mongo DB</span>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                                <span class=\"progress-value\">Highly Proficient</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
const config = {
    useHash: true,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config),
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hYm91dC9DOlxcVXNlcnNcXHdpbGxpXFxPbmVEcml2ZVxcRGVza3RvcFxcUGVyc29uYWwgV2Vic2l0ZS9zcmNcXGFwcFxccHJvZmlsZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBcclxufSIsIi5yb3cgcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
    sendEmail(e) {
        e.preventDefault();
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vQzpcXFVzZXJzXFx3aWxsaVxcT25lRHJpdmVcXERlc2t0b3BcXFBlcnNvbmFsIFdlYnNpdGUvc3JjXFxhcHBcXHByb2ZpbGVcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0osZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGg0e1xyXG4gICAgY29sb3I6IzRhNDg0MztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5tYXJnaW4tdG9wOjJweDtcclxufSIsImg0IHtcbiAgY29sb3I6ICM0YTQ4NDM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL0M6XFxVc2Vyc1xcd2lsbGlcXE9uZURyaXZlXFxEZXNrdG9wXFxQZXJzb25hbCBXZWJzaXRlL3NyY1xcYXBwXFxwcm9maWxlXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUVJO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFQ0ZWO0FBQ0Y7O0FETUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FETU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0hSOztBREtNO0VBQ0UsV0FBQTtBQ0ZSOztBRElNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7QUNBUjs7QURFTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURIUTtFQUNFLFdBQUE7QUNNVjs7QURMUTtFQUNFLG1CQUFBO0FDUVY7O0FEUFE7RUFDRSxtQkFBQTtBQ1VWOztBRFRRO0VBQ0UsbUJBQUE7QUNZVjs7QURYUTtFQUNFLG1CQUFBO0FDY1Y7O0FEYlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNnQlY7O0FEZE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtBQ2lCUjs7QURmTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNrQlI7O0FEaEJNO0VBQ0UsZ0JBQUE7QUNtQlI7O0FEakJNO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7O0FEbEJNO0VBQ0UsV0FBQTtBQ3FCUjs7QURuQk07RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDc0JSOztBRGxCTTtFQUVFLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQWUsZ0JBQUE7QUNxQnZCOztBRGpCTTtFQUVDLFdBQUE7RUFBWSxnQkFBQTtBQ29CbkI7O0FEakJNO0VBRUUsZ0JBQUE7RUFBaUIsZ0JBQUE7QUNvQnpCOztBRGxCTTtFQUNFLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLDJDQUFBO0FDdUIxQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9ybGliLWV4cGVyaWVuY2Vcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDRlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5ZW07XHJcbiAgXHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG59XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcclxuICAgIHtcclxuICAgICAgICAuY29sb3JsaWItZXhwZXJpZW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC50aW1lbGluZS1jZW50ZXJlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjlweDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNsZWFyOiBib3RoOyB9XHJcbiAgICAgIFxyXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cclxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM1NDUzOyB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjliZjNmOyB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTg0Y2I4OyB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmZhNDk5OyB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjNmNztcclxuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2YyZjNmNyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTlweDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHAgKyBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAgIFxyXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4gICAgICBcclxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwOyB9XHJcbiAgICAgIFxyXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XHJcbiAgICAgICAgLXdlYmtpdC1vcGFjaXR5OiAuNDtcclxuICAgICAgICAtbW96LW9wYWNpdHk6IC40O1xyXG4gICAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgICAgIC1tcy1maWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xyXG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50aW1lbGluZS1sYWJlbCBoNHtcclxuICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzU0NTc1NTtmb250LXdlaWdodDo1MDA7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmUtbGFiZWwgc3BhbntcclxuICAgICAgXHJcbiAgICAgICBjb2xvcjogIzAwMDtmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGltZWxpbmUtbGFiZWwgcHtcclxuICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtmb250LXdlaWdodDo1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07Zm9udC13ZWlnaHQ6NTAwOyBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH0iLCIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gIH1cbn1cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHRvcDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMyYzk4ZjA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XG4gIGJhY2tncm91bmQ6ICNlYzU0NTM7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICBiYWNrZ3JvdW5kOiAjZjliZjNmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XG4gIGJhY2tncm91bmQ6ICMyZmE0OTk7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNDtcbiAgLW1vei1vcGFjaXR5OiAwLjQ7XG4gIG9wYWNpdHk6IDAuNDtcbiAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIGg0IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/profile/extracurriculum/extracurriculum.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile/extracurriculum/extracurriculum.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZXh0cmFjdXJyaWN1bHVtL2V4dHJhY3VycmljdWx1bS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/extracurriculum/extracurriculum.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/extracurriculum/extracurriculum.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExtracurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtracurriculumComponent", function() { return ExtracurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExtracurriculumComponent = class ExtracurriculumComponent {
    constructor() {
        this.extracurriculum = [
            {
                id: 1,
                title: 'Volleyball',
                desc: 'HS Player',
                imgUrl: 'assets/images/vb.png'
            },
            {
                id: 2,
                title: 'Music',
                desc: 'HS Orchestra',
                imgUrl: 'assets/images/music.png'
            },
            {
                id: 3,
                title: 'LifeGuard',
                desc: 'Local Pool',
                imgUrl: 'assets/images/lg.png'
            },
        ];
    }
    ngOnInit() {
        this.config = {
            id: "pagination2",
            itemsPerPage: 3,
            currentPage: 1,
            totalItems: this.extracurriculum.length
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
};
ExtracurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extracurriculum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./extracurriculum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/extracurriculum/extracurriculum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./extracurriculum.component.scss */ "./src/app/profile/extracurriculum/extracurriculum.component.scss")).default]
    })
], ExtracurriculumComponent);



/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _extracurriculum_extracurriculum_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extracurriculum/extracurriculum.component */ "./src/app/profile/extracurriculum/extracurriculum.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");


















let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"],
            _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"]
        ],
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
            _extracurriculum_extracurriculum_component__WEBPACK_IMPORTED_MODULE_13__["ExtracurriculumComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"]
        ],
        providers: [
            { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"] },
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: black;\n}\n\n@media screen and (min-width: 992px) {\n  .card-img-top {\n    height: 196px;\n  }\n\n  .blog-entry h4 {\n    min-height: 52px;\n  }\n\n  .blog-entry h5 {\n    min-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9DOlxcVXNlcnNcXHdpbGxpXFxPbmVEcml2ZVxcRGVza3RvcFxcUGVyc29uYWwgV2Vic2l0ZS9zcmNcXGFwcFxccHJvZmlsZVxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGtCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBS0EsbUJBQUE7RUFHQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBS0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOOztFREVFO0lBQ0ksZ0JBQUE7RUNDTjs7RURDRTtJQUNJLGdCQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1lbnRyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ibG9nLWVudHJ5IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSAuZGVzYyAubGVhZCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSBoNCB7XHJcbiAgICBmb250LXdlaWdodDogNTYwO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYmxvZy1lbnRyeSBoNSB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogYmxhY2tcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgIGhlaWdodDogMTk2cHg7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1lbnRyeSBoNCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTJweDtcclxuICAgIH1cclxuICAgIC5ibG9nLWVudHJ5IGg1IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59IiwiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctZW50cnkge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxufVxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2FyZC1pbWctdG9wIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG5cbiAgLmJsb2ctZW50cnkgaDQge1xuICAgIG1pbi1oZWlnaHQ6IDUycHg7XG4gIH1cblxuICAuYmxvZy1lbnRyeSBoNSB7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: 'Multi-Channel Authentication with DI',
                desc: 'Multi-channel authentication for various authentication services',
                githurl: 'https://github.com/hubi0111/multi-channel-authentication-with-DI-Java',
                imgUrl: 'assets/images/z4.PNG',
                tech: 'HTML, Java, MySQL'
            },
            {
                id: 2,
                title: 'Dynamically Configurable User Navigation Menu',
                desc: 'User role navigation menus are configured, then loaded dynamically in runtime',
                githurl: 'https://github.com/hubi0111/Configurable-authorization-and-menu-navigation-in-NODE-JS',
                imgUrl: 'assets/images/z5.png',
                tech: 'React, Node JS, MongoDB'
            },
            {
                id: 3,
                title: 'Food Order App',
                desc: 'App to order food from restaurant with user roles',
                githurl: 'https://github.com/hubi0111/Menu-App',
                imgUrl: 'assets/images/z26.png',
                tech: 'Angular, Java Spring Boot, MySQL'
            },
            {
                id: 4,
                title: 'Gitlet File Version Control',
                desc: 'Version control system similar to git written in java',
                githurl: 'https://github.com/hubi0111/cs61b/tree/master/proj2/',
                imgUrl: 'assets/images/z1.png',
                tech: 'Java'
            },
            {
                id: 5,
                title: 'Scheme',
                desc: 'Custom scheme language interpreter built in python',
                githurl: 'https://github.com/hubi0111/cs61a/tree/master/scheme',
                imgUrl: 'assets/images/z27.png',
                tech: 'Python'
            },
        ];
    }
    ngOnInit() {
        this.config = {
            id: "pagination1",
            itemsPerPage: 3,
            currentPage: 1,
            totalItems: this.projects.length
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/profile/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
    //baseUrl : `http://localhost:4200/`,
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop,
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\willi\OneDrive\Desktop\Personal Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map