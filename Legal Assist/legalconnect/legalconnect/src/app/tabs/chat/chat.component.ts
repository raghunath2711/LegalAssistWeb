import { Component, Renderer, Input, Output, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit{
    files: FileList;
    geoCountry: any;
    lang: string="en";
    selectedCountry: string = " ";
    isVisible:boolean = true;
    showMessage: boolean = false;
    sub: any;
    returnFlag: string = 'false';
    location: string;
  //  @ViewChild('fileSubmit') fileSubmit: ElementRef;
    constructor(private srchServ: SearchService, private router: Router, private route: ActivatedRoute, private renderer: Renderer) { }
    ngOnInit() {
        //this.sub = this.route
        //    .queryParams
        //    .subscribe(params => {
        //        // Defaults to 0 if no query param provided.
        //        this.returnFlag = params['returnFlag'] ;
        //        console.log('returnFlag', this.returnFlag);
        //    });
        this.returnFlag = localStorage.getItem('returnFlag');
    }

    onChange(files: FileList) {
        this.files = files;
        var file: File;
        for (var i = 0; i < files.length; i++) {
            file = files[i];
            this.rightboxes.push({
                "url": "",
                "text": files[i].name,
                "self": true
            })
            this.showMessage = true;
            var reader: FileReader = new FileReader();
            var data: FormData = new FormData();
            data.append('file-' + i, file);
            
            this.srchServ.getfileUpload(data).subscribe(
                (res) => {
                    console.log(res);
                    var dt = new Date();
                    var time = dt.getHours() + ":" + dt.getMinutes();
                  
                        this.messages.push({
                            "text": res,
                            "self": true,
                            "time": time,
                            "class": "receive"
                        })
                 
                    this.showMessage = false;


                },
                (err: any) => {
                    this.showMessage = false;
                    console.log(err);

                });
        
            //reader.onload = (e) => {
                
            //    console.log(reader.result);
            //    this.srchServ.getfileUpload(file.name, file.type, reader.result.toString()).subscribe(
            //        (res) => {

            //            var dt = new Date();
            //            var time = dt.getHours() + ":" + dt.getMinutes();
            //            setTimeout(() => {
            //                this.messages.push({
            //                    "text": res,
            //                    "self": true,
            //                    "time": time,
            //                    "class": "receive"
            //                })
            //            }, 1000);
            //            this.showMessage = false;


            //        },
            //        (err: any) => {
            //            this.showMessage = false;
            //            console.log(err);     

            //        });
            //    //this.renderer.invokeElementMethod(
            //    //    this.fileSubmit.nativeElement, 'dispatchEvent', [event]);
            //}
           
           // reader.readAsDataURL(file);
          //  reader.readAsArrayBuffer(file); 
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
                        }, 1000);
                        this.showMessage = false;
                       
                      
                    },
                    (err: any) => {
                     this.showMessage = false;
                 
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

    onSubmit()
    {
        console.log('test');
    }

    openPop(Url: string) {

        this.location = Url;
    }
    modelPop() {
        window.open(this.location, '_blank');
    }
    closePop() {
        window.open(this.location, '_blank');
    }
}