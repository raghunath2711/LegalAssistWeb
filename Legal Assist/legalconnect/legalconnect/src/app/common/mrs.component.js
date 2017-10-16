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
var MRSComponent = (function () {
    function MRSComponent(router, aRoute, elementRef) {
        this.router = router;
        this.aRoute = aRoute;
        this.text = "In this section you will find general legal information, self - help packets and videos on your rights as a<br />renter and what to do if you have a problem with your landlord.<a > http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>";
        this.aciveBdg = 'tenantrights';
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse";
        this.FourClass = "collapse";
        this.routeUrl = "";
        this.currentUrl = '';
        this.SubCat = [{
                "id": "tenantrights",
                "name": "tenantrights",
                "text": "In this section you will find general legal information, self-help packets and videos on your rights as a <br />renter and what to do if you have a problem with your landlord.<a> http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>"
            },
            {
                "id": "foreclosure",
                "name": "foreclosure",
                "text": "Browse the information below to find information about foreclosure prevention, foreclosure mediation and other foreclosure issues. <a>http://www.washingtonlawhelp.org/issues/housing/foreclosure-1</a>"
            },
            {
                "id": "emergencyshelter",
                "name": "emergencyshelter",
                "text": "Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>"
            },
            {
                "id": "mobileparktenants",
                "name": "mobileparktenants",
                "text": "Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>';"
            }
        ];
    }
    MRSComponent.prototype.ngOnInit = function () {
        this.currentUrl = this.router.url; // this will give you current url
        var route;
        if (this.currentUrl.indexOf('general') > 0)
            route = "general";
        else if (this.currentUrl.indexOf('chat') > 0)
            route = "chat";
        else if (this.currentUrl.indexOf('guided') > 0)
            route = "guided";
        else
            route = "general";
        var position = this.currentUrl.indexOf("/", this.currentUrl.indexOf("/") + 1);
        var str = this.currentUrl.substring(position + 1);
        var arr = this.SubCat.find(function (x) { return x.id === str; });
        if (arr != null && arr != undefined) {
            this.aciveBdg = arr.id;
            this.text = arr.text;
            document.getElementById('subCat').scrollIntoView();
        }
        if (this.currentUrl == '/' + route + '/QandA/4') {
            this.FourClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/' + route + '/QandA/3') {
            this.ThreeClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/' + route + '/QandA/2') {
            this.TwoClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/' + route + '/QandA/1') {
            this.OneClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        if (this.currentUrl == '/' + route + '/videos')
            document.getElementById('videos').scrollIntoView();
        if (this.currentUrl == '/' + route + '/maps')
            document.getElementById('maps').scrollIntoView();
    };
    MRSComponent.prototype.displayText = function (id) {
        this.aciveBdg = id;
        var route;
        if (this.currentUrl.indexOf('general') > 0)
            route = "general";
        else if (this.currentUrl.indexOf('chat') > 0)
            route = "chat";
        else if (this.currentUrl.indexOf('guided') > 0)
            route = "guided";
        else
            route = "general";
        this.router.navigate(['/' + route, id]);
        var arr = this.SubCat.find(function (x) { return x.id === id; });
        if (arr != null && arr != undefined)
            this.text = arr.text;
    };
    MRSComponent.prototype.collapsed = function (id) {
        var route;
        if (this.currentUrl.indexOf('general') > 0)
            route = "general/QandA";
        else if (this.currentUrl.indexOf('chat') > 0)
            route = "chat/QandA";
        else if (this.currentUrl.indexOf('guided') > 0)
            route = "guided/QandA";
        else
            route = "general/QandA";
        this.router.navigate(['/' + route, id]);
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse";
        this.FourClass = "collapse";
        if (id == '1')
            this.FourClass = "";
        else if (id == '2')
            this.ThreeClass = "";
        else if (id == '3')
            this.TwoClass = "";
        else if (id == '4')
            this.OneClass = "";
    };
    MRSComponent.prototype.videos = function (id) {
        var route;
        if (this.currentUrl.indexOf('general') > 0)
            route = "general";
        else if (this.currentUrl.indexOf('chat') > 0)
            route = "chat";
        else if (this.currentUrl.indexOf('guided') > 0)
            route = "guided";
        else
            route = "general";
        this.router.navigate(['/' + route, id]);
    };
    MRSComponent.prototype.maps = function (id) {
        var route;
        if (this.currentUrl.indexOf('general') > 0)
            route = "general";
        else if (this.currentUrl.indexOf('chat') > 0)
            route = "chat";
        else if (this.currentUrl.indexOf('guided') > 0)
            route = "guided";
        else
            route = "general";
        this.router.navigate(['/' + route, id]);
    };
    return MRSComponent;
}());
MRSComponent = __decorate([
    core_1.Component({
        selector: 'mrs',
        templateUrl: './mrs.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, core_1.ElementRef])
], MRSComponent);
exports.MRSComponent = MRSComponent;
//# sourceMappingURL=mrs.component.js.map