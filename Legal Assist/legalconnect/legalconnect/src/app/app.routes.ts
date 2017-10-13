//import { Modulewithproviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { GeneralComponent } from './tabs/general/general.component';
import { GuidedComponent } from './tabs/guided/guided.component';
import { DocComponent } from './tabs/doc/doc.component';
import { ChatComponent } from './tabs/chat/chat.component';
import { TLComponent } from './tabs/timeline/timeline.component';

const routes: Routes = [
    { path: 'demo', component: DemoComponent },
    { path: 'general', component: GeneralComponent },
    { path: 'guided', component: GuidedComponent },
    { path: 'doc', component: DocComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'timeline', component: TLComponent },
    { path: 'guided/tenantrights', component: GuidedComponent },
    { path: 'guided/foreclosure', component: GuidedComponent },
    { path: 'guided/emergencyshelter', component: GuidedComponent },
    { path: 'guided/mobileparktenants', component: GuidedComponent },
    { path: 'guided/QandA/1', component: GuidedComponent },
    { path: 'guided/QandA/2', component: GuidedComponent },
    { path: 'guided/QandA/3', component: GuidedComponent },
    { path: 'guided/QandA/4', component: GuidedComponent },
    { path: 'guided/videos', component: GuidedComponent },
    { path: 'guided/maps', component: GuidedComponent },
    { path: 'guided/assist/begin', component: GuidedComponent },
    { path: 'guided/assist/evictionnotice', component: GuidedComponent },
    { path: 'guided/assist/aboutnotice', component: GuidedComponent },
    { path: 'guided/assist/assistnotice', component: GuidedComponent },
    { path: 'guided/assist/housingproblem', component: GuidedComponent },
   // { path: 'search', component: SearchComponent },
    { path: '', component: GeneralComponent },
    { path: '**', component: GeneralComponent },
];
export const routing = RouterModule.forRoot(routes);
