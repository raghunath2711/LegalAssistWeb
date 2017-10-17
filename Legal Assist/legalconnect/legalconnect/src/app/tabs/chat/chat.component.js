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
var search_service_1 = require("../../services/search.service");
var ChatComponent = (function () {
    function ChatComponent(srchServ, router) {
        this.srchServ = srchServ;
        this.router = router;
        this.lang = "en";
        this.selectedCountry = " ";
        this.isVisible = true;
        this.showMessage = false;
        this.rightboxes = [{
                "url": "",
                "text": "",
                "self": false
            }];
        this.messages = [{
                "text": "",
                "self": false,
                "time": "",
                "class": "",
            }];
        this.replyMessage = "";
        this.rightmessMessage = "";
    }
    ChatComponent.prototype.onChange = function (files) {
        this.files = files;
        for (var i = 0; i < files.length; i++) {
            this.rightboxes.push({
                "url": "",
                "text": files[i].name,
                "self": true
            });
        }
    };
    ChatComponent.prototype.reply = function () {
        var _this = this;
        this.isVisible = false;
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        this.messages.push({
            "text": this.replyMessage,
            "self": true,
            "time": time,
            "class": "sent",
        });
        var query = this.replyMessage;
        this.showMessage = true;
        this.srchServ.getLocation().subscribe(function (resCountry) {
            _this.geoCountry = resCountry.region;
            _this.srchServ.getChatMessages(query, _this.lang, _this.selectedCountry == " " ? _this.geoCountry : _this.selectedCountry).subscribe(function (res) {
                var dt = new Date();
                var time = dt.getHours() + ":" + dt.getMinutes();
                setTimeout(function () {
                    _this.messages.push({
                        "text": res,
                        "self": true,
                        "time": time,
                        "class": "receive"
                    });
                }, 100);
                _this.showMessage = false;
            }, function (err) {
                _this.showMessage = false;
                console.log(err);
                alert('No data found for location ' + _this.geoCountry + ' choose country from dropdown');
            });
            _this.srchServ.getChatReferences(query, _this.selectedCountry == " " ? _this.geoCountry : _this.selectedCountry).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    _this.rightboxes.push({
                        "url": res[i].Url,
                        "text": res[i].Name,
                        "self": true
                    });
                }
            });
        });
        this.isVisible = true;
        this.replyMessage = "";
    };
    ChatComponent.prototype.displayText = function (lang) {
        this.lang = lang;
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        templateUrl: './chat.component.html'
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService, router_1.Router])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map