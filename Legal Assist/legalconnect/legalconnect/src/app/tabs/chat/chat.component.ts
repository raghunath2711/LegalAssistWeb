import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent {
    files: FileList;
    geoCountry: any;
    lang: string="en";
    selectedCountry: string = " ";
    isVisible:boolean = true;
    showMessage: boolean = false;
    constructor(private srchServ: SearchService, private router: Router) {  }
    onChange(files: FileList) {
        this.files = files;

        for (var i = 0; i < files.length; i++) {
            this.rightboxes.push({
                "url": "",
                "text": files[i].name,
                "self": true
            })
        }
    }
    rightboxes = [{
        "url": "",
        "text": "",
        "self": false
    }]
    messages = [{
        "text": "",
        "self": false,
        "time": "",
        "class":"",
    }]

    replyMessage = "";
    rightmessMessage = "";


    reply() {
       
        this.isVisible = false;
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        this.messages.push({
            "text": this.replyMessage,
            "self": true,
            "time": time,
            "class":"sent",
        })
        var query = this.replyMessage;
        this.showMessage = true;
        this.srchServ.getLocation().subscribe(
            (resCountry) => {
                this.geoCountry = resCountry.region; 
              
                this.srchServ.getChatMessages(query, this.lang, this.selectedCountry == " " ? this.geoCountry : this.selectedCountry).subscribe(
                    (res) => {
                        var dt = new Date();
                        var time = dt.getHours() + ":" + dt.getMinutes();
                        setTimeout(() => {
                            this.messages.push({
                                "text": res,
                                "self": true,
                                "time": time,
                                "class": "receive"
                            })
                        }, 100);
                        this.showMessage = false;
                       
                      
                    },
                    (err: any) => {
                     this.showMessage = false;
                     console.log(err);  
                     alert('No data found for location ' + this.geoCountry +' choose country from dropdown');
               
                    });

                this.srchServ.getChatReferences(query, this.selectedCountry == " " ? this.geoCountry : this.selectedCountry).subscribe((res) => {
                    console.log(res);
                    for (var i = 0; i < res.length; i++) {
                        this.rightboxes.push({
                            "url": res[i].Url,
                            "text": res[i].Name,
                            "self": true
                        })
                    }
                });
            }
         
        );
        this.isVisible = true;
      

        this.replyMessage = "";

    }

    displayText(lang:string)
    {
  
        this.lang = lang;
    }

    
}