"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GuidedComponent = (function () {
    function GuidedComponent(router, _el) {
        this.router = router;
        this._el = _el;
        this.text = "In this section you will find general legal information, self - help packets and videos on your rights as a<br />renter and what to do if you have a problem with your landlord.<a > http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>";
        this.aciveBdg = 'tenant';
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse";
        this.FourClass = "collapse";
        this.currentUrl = '';
        this.activeSld = "Slide1";
        this.myClass = "aciveSlide";
    }
    GuidedComponent.prototype.ngOnInit = function () {
        //window.scrollTo(500, 1000);
        console.log('top:', this._el.nativeElement.offsetTop);
        this.currentUrl = this.router.url; // this will give you current url
        if (this.currentUrl == '/guided/tenantrights') {
            this.aciveBdg = 'tenant';
            this.text = 'In this section you will find general legal information, self-help packets and videos on your rights as a <br />renter and what to do if you have a problem with your landlord.<a> http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>';
            document.getElementById('tenant').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/foreclosure') {
            this.aciveBdg = 'foreclosure';
            this.text = 'Browse the information below to find information about foreclosure prevention, foreclosure mediation and other foreclosure issues. <a>http://www.washingtonlawhelp.org/issues/housing/foreclosure-1</a>';
            document.getElementById('foreclosure').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/emergencyshelter') {
            this.aciveBdg = 'emergency';
            this.text = 'Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>';
            document.getElementById('emergency').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/mobileparktenants') {
            this.aciveBdg = 'mobile';
            this.text = 'In this section of Washington LawHelp you will find general information, self-help packets and resources for mobile home tenants. <a>http://www.washingtonlawhelp.org/issues/housing/mobile-home-park-tenants</a>';
            document.getElementById('mobile').scrollIntoView();
        }
        if (this.currentUrl == '/guided/QandA/4') {
            this.FourClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/QandA/3') {
            this.ThreeClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/QandA/2') {
            this.TwoClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/QandA/1') {
            this.OneClass = ""; // window.location.hash = 'headingOne';
            document.getElementById('QandA').scrollIntoView();
        }
        if (this.currentUrl == '/guided/assist/evictionnotice')
            this.activeSld = "Slide2";
        else if (this.currentUrl == '/guided/assist/housingproblem')
            this.activeSld = "Slide5";
        else if (this.currentUrl == '/guided/assist/begin')
            this.activeSld = "Slide1";
        else if (this.currentUrl == '/guided/assist/aboutnotice')
            this.activeSld = "Slide3";
        else if (this.currentUrl == '/guided/assist/assistnotice')
            this.activeSld = "Slide4";
        if (this.currentUrl == '/guided/videos')
            document.getElementById('videos').scrollIntoView();
        if (this.currentUrl == '/guided/maps')
            document.getElementById('maps').scrollIntoView();
    };
    GuidedComponent.prototype.displayText = function (id) {
        this.aciveBdg = id;
        if (this.aciveBdg == "tenant")
            this.text = 'In this section you will find general legal information, self-help packets and videos on your rights as a <br />renter and what to do if you have a problem with your landlord.<a> http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>';
        else if (this.aciveBdg == "foreclosure")
            this.text = 'Browse the information below to find information about foreclosure prevention, foreclosure mediation and other foreclosure issues. <a>http://www.washingtonlawhelp.org/issues/housing/foreclosure-1</a>';
        else if (this.aciveBdg == "emergency")
            this.text = 'Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>';
        else if (this.aciveBdg == "mobile")
            this.text = 'In this section of Washington LawHelp you will find general information, self-help packets and resources for mobile home tenants. <a>http://www.washingtonlawhelp.org/issues/housing/mobile-home-park-tenants</a>';
        else
            this.text = 'Sed elementum felis velit, et euismod nibh pellentesque sed.Curabitur nec cursus orci, non faucibus nisl. Ut vel gravida arcu.Quisque malesuada ut nibh vitae auctor. Pellentesque et massaaugue. Ut felis orci, condimentum ut pulvinar ut, posuere vitae erat.Nulla laoreet pulvinar diam non condimentum. Proin non liberoconvallis augue sodales malesuada. Quisque consectetur, magnaeget ultricies dictum, mauris ipsum ultrices ante, in aliquet nuncodio vel orci. Nam tristique fringilla est, et iaculis nisi fermentum a.Sed vel magna sit amet urna convallis sagittis at eu enim. Sedgravida diam a purus dictum, et faucibus lacus facilisis. In porttitorsollicitudin convallis. Sed blandit, tellus nec faucibus facilisis, urnanisi fringilla sapien, id condimentum dui velit imperdiet lectus.Quisque quam mi, molestie ac eros in, porta pharetra magna.liquam posuere porta pulvinar. Morbi mattis dolor mi, sit amet rhoncus sem volutpat eget. Vestibulum et nisl in erat posuere tristique in sedaugue. Quisque lorem elit, consequat nec commodo quis, faucibus non urna. Nulla facilisi. In gravida ultricies ante a hendrerit. Etiamaccumsan nisl massa, nec tincidunt justo mattis eu. In mattis sem libero, id euismod neque congue a. Pellentesque consequat in leo sedhendrerit. Suspendisse fringilla ligula in sem porttitor congue. Proin nec est non mi fringilla venenatis in at nulla. Nullam lectus urna,';
    };
    GuidedComponent.prototype.collapsed = function (id) {
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse";
        this.FourClass = "collapse";
        if (id == 'headingFour')
            this.FourClass = "";
        else if (id == 'headingThree')
            this.ThreeClass = "";
        else if (id == 'guidedHeadingTwo')
            this.TwoClass = "";
        else if (id == 'headingOne')
            this.OneClass = "";
    };
    GuidedComponent.prototype.ShowNextNavigation = function (sld) {
        this.activeSld = sld;
    };
    GuidedComponent.prototype.ShowSkipNavigation = function (sld) {
        this.activeSld = sld;
    };
    GuidedComponent.prototype.ValidateContent = function (param) {
        this.myClass = param;
    };
    return GuidedComponent;
}());
GuidedComponent = __decorate([
    core_1.Component({
        selector: 'guided',
        templateUrl: './guided.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.ElementRef])
], GuidedComponent);
exports.GuidedComponent = GuidedComponent;
//# sourceMappingURL=guided.component.js.map