"use strict";
var router_1 = require("@angular/router");
var demo_component_1 = require("./demo/demo.component");
var general_component_1 = require("./tabs/general/general.component");
var guided_component_1 = require("./tabs/guided/guided.component");
var doc_component_1 = require("./tabs/doc/doc.component");
var chat_component_1 = require("./tabs/chat/chat.component");
var timeline_component_1 = require("./tabs/timeline/timeline.component");
var routes = [
    { path: 'demo', component: demo_component_1.DemoComponent },
    { path: 'general', component: general_component_1.GeneralComponent },
    { path: 'guided', component: guided_component_1.GuidedComponent },
    { path: 'guided/:id', component: guided_component_1.GuidedComponent },
    { path: 'doc', component: doc_component_1.DocComponent },
    { path: 'chat', component: chat_component_1.ChatComponent },
    { path: 'chat/:id', component: chat_component_1.ChatComponent },
    { path: 'timeline', component: timeline_component_1.TLComponent },
    { path: 'guided/assist/begin', component: guided_component_1.GuidedComponent },
    { path: 'guided/assist/evictionnotice', component: guided_component_1.GuidedComponent },
    { path: 'guided/assist/aboutnotice', component: guided_component_1.GuidedComponent },
    { path: 'guided/assist/assistnotice', component: guided_component_1.GuidedComponent },
    { path: 'guided/assist/housingproblem', component: guided_component_1.GuidedComponent },
    { path: '', component: general_component_1.GeneralComponent },
    { path: '**', component: general_component_1.GeneralComponent },
];
//export const routing = RouterModule.forRoot(routes);
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map