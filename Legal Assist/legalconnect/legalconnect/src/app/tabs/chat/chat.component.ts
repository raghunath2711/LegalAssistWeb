import { Component, EventEmitter, Input, Output } from '@angular/core';
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
   
    constructor(private srchServ: SearchService) { }
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

        //alert(this.selectedCountry)
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
   
        this.srchServ.getLocation().subscribe(
            (resCountry) => {
                this.geoCountry = resCountry.region; 
                console.log(this.geoCountry);
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
                        }, 1000);
                        //var dt = new Date();
                        //var time = dt.getHours() + ":" + dt.getMinutes();
                        //var para = res.split("<br/><br/>")[0];
                        //var ind = res.index("<br/>");
                        //while (ind > 0) {
                           
                        //    var para = res.substring(0, ind);
                        //    setTimeout(() => {
                        //        this.messages.push({
                        //            "text": para,
                        //            "self": true,
                        //            "time": time,
                        //            "class": "receive"
                        //        })
                        //    }, 1000);
                        //    res = res.replace(para, '');
                        //    ind = res.index("<br/>")
                        //}
                      
                    },
                 (err:any) => {
                     console.log(err);  
                     alert('No Data Found For Location ' + this.geoCountry);
                    });
            }
         
        );
        this.isVisible = true;
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

        this.replyMessage = "";

    }

    displayText(lang:string)
    {
  
        this.lang = lang;
    }

    //ngOnInit() {
    //    this.srchServ.getLocation().subscribe((res) => { this.result = res; console.log(this.result.city) });
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(position => {
    //            this.location = position.coords;
    //            console.log(position.coords);
    //        });
    //    }

    //    //    this.srchServ.getLocation().map((res) => { this.result = res; console.log('region', this.result) });
    //}
}