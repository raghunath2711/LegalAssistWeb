﻿import { ModuleWithProviders  } from '@angular/core';
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
    { path: 'guided/:id', component: GuidedComponent },
    { path: 'doc', component: DocComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'chat/:id', component: ChatComponent },
    { path: 'timeline', component: TLComponent },
    { path: '', component: GeneralComponent },
    { path: '**', component: GeneralComponent },
];
//export const routing = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
