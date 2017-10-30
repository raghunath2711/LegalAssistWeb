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
var search_service_1 = require("../services/search.service");
var platform_browser_1 = require("@angular/platform-browser");
var MRSComponent = (function () {
    function MRSComponent(router, aRoute, domSanitizer, srchServ) {
        this.router = router;
        this.aRoute = aRoute;
        this.domSanitizer = domSanitizer;
        this.srchServ = srchServ;
        this.text = "In this section you will find general legal information, self - help packets and videos on your rights as a<br />renter and what to do if you have a problem with your landlord.<a > http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>";
        this.aciveBdg = 'tenantrights';
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse";
        this.FourClass = "collapse";
        this.routeUrl = "";
        this.state = "";
        this.city = "";
        this.qnClicked = false;
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
        this.accord = [{
                "QnId": "1",
                "AnsId": "collapseOne",
                "question": "Do I have to move out within three days if my landlord serves me a 3-day pay or vacate notice?",
                "answer": " No, though some tenants may choose to vacate during the 3-day timeframe. Your landlord cannot evict you from your unit without going through a court process. It is illegal for your landlord to lock you out of your unit, remove your belongings or shut off your utilities, even if you are behind in rent. Eviction in Washington State is called �unlawful detainer.� The unlawful detainer process generally takes about 2-3 weeks from start to finish. Some tenants choose to leave within the 3-day timeline because vacating may allow them to avoid the eviction lawsuit. The landlord may still be able to file a lawsuit against them or send them to collections in an attempt to recover money they owe",
                "class": "collapse",
                "href": "#collapseOne",
                "qnClicked": false
            },
            {
                "QnId": "2",
                "AnsId": "collapseTwo",
                "question": "How long does it take to evict a tenant in Washington State?",
                "answer": "Generally around three weeks (from the time rent is due until the time the sheriff will come out and enforce the writ), though the timeframe can vary greatly depending upon the circumstances. See Eviction Timeline for a sample eviction process.",
                "class": "collapse",
                "href": "#collapseTwo",
                "qnClicked": false
            },
            {
                "QnId": "3",
                "AnsId": "collapseThree",
                "question": " Does the law entitle me to a certain number of days grace period after the day my rent is due?",
                "answer": "No. However, most rental agreements indicate a due date for the rent, usually the first of the month, and some indicate a grace period before the rent is to be considered late, usually three to five days later. The landlord-tenant act in Washington State does not specifically entitle tenants to a grace period of any kind",
                "class": "collapse",
                "href": "#collapseThree",
                "qnClicked": false
            },
            {
                "QnId": "4",
                "AnsId": "collapseFour",
                "question": " Can I negotiate with the landlord to stop an eviction?",
                "answer": "Tenants can negotiate directly with their landlord to stop the eviction at any point, though it is generally more productive for tenants the earlier in the process it happens. It is very important that any agreement you come to with your landlord must be in writing, signed and dated by both parties.",
                "class": "collapse",
                "href": "#collapseFour",
                "qnClicked": false
            }
        ];
    }
    MRSComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        var id = this.currentUrl.substring(position + 7);
        var arr1 = this.accord.find(function (x) { return x.QnId === id; });
        if (arr1 != null && arr1 != undefined) {
            console.log('qnClicked', arr1.qnClicked);
            //if (arr1.class == "collapse") {
            //       arr1.class = "collapse in";
            //} else {
            //    arr1.class = "collapse";
            //}
            document.getElementById('QandA').scrollIntoView();
        }
        if (this.currentUrl == '/' + route + '/videos')
            document.getElementById('videos').scrollIntoView();
        this.srchServ.getLocation().subscribe(function (resCountry) {
            _this.city = resCountry.city;
            _this.state = resCountry.region;
            var url = "https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/" + _this.city + "%20" + _this.state + "?mapSize=1000,500&mapLayer=TrafficFlow&key=AvPG6MBAy09S_YM3_0DnshQCKi084VdJHeHCTkl_Fbimi_Eh7vTQp9jyAktpxje-";
            _this.mapsUrl = _this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        });
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
        console.log('arr', arr);
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
        this.qnClicked = true;
        var arr1 = this.accord.find(function (x) { return x.QnId === id; });
        arr1.qnClicked = true;
        console.log('qnClicked', arr1.qnClicked);
        this.router.navigate(['/' + route, id]);
        //if (arr1.class == "collapse") {
        //    arr1.class = "collapse in";
        //} else {
        //    arr1.class = "collapse";
        //}
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, platform_browser_1.DomSanitizer, search_service_1.SearchService])
], MRSComponent);
exports.MRSComponent = MRSComponent;
//# sourceMappingURL=mrs.component.js.map