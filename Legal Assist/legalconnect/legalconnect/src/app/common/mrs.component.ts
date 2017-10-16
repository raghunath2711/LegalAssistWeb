import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
    selector: 'mrs',
    templateUrl: './mrs.component.html',
    })
export class MRSComponent implements OnInit {
 
    text: string ="In this section you will find general legal information, self - help packets and videos on your rights as a<br />renter and what to do if you have a problem with your landlord.<a > http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>"; 
    aciveBdg: string = 'tenantrights';
    OneClass = "collapse";
    TwoClass = "collapse";
    ThreeClass="collapse"
    FourClass = "collapse";
    routeUrl: string = "";

    currentUrl: string = '';

    SubCat = [{
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
    ]


    
    constructor(private router: Router,private aRoute: ActivatedRoute, elementRef: ElementRef) { }
      ngOnInit() {
      
         this.currentUrl = this.router.url; // this will give you current url
      
          var route:string;
          if (this.currentUrl.indexOf('general') > 0)
              route = "general";
          else if (this.currentUrl.indexOf('chat') > 0)
              route = "chat";
          else if (this.currentUrl.indexOf('guided') > 0)
              route = "guided";
          else
              route = "general";
          

          var position:number = this.currentUrl.indexOf("/", this.currentUrl.indexOf("/") + 1);
          var str:string = this.currentUrl.substring(position+1);
          
          var arr = this.SubCat.find(x => x.id === str);
          
          if (arr != null && arr != undefined)
              {
          this.aciveBdg = arr.id;
          this.text = arr.text;
          document.getElementById('subCat').scrollIntoView(); 
          }
        

          
        if (this.currentUrl == '/' +route+'/QandA/4')
              {
            this.FourClass = "";
            document.getElementById('QandA').scrollIntoView();
            }
        else if (this.currentUrl == '/' + route + '/QandA/3')
            {
            this.ThreeClass = "";
            document.getElementById('QandA').scrollIntoView();
            }
        else if (this.currentUrl == '/' + route + '/QandA/2')
            {
            this.TwoClass = "";
            document.getElementById('QandA').scrollIntoView();
            }
        else if (this.currentUrl == '/' + route + '/QandA/1')
            {
            this.OneClass = "";  
            document.getElementById('QandA').scrollIntoView();
        }
   
        if (this.currentUrl == '/'+route+'/videos')
            document.getElementById('videos').scrollIntoView();

        if (this.currentUrl == '/' + route + '/maps')
            document.getElementById('maps').scrollIntoView();

    }
        
 displayText(id:string)
 
 {
    
     this.aciveBdg = id;
     var route:string;
     
     if (this.currentUrl.indexOf('general')>0)  route = "general";
     else if (this.currentUrl.indexOf('chat') > 0)  route = "chat";
     else if (this.currentUrl.indexOf('guided') > 0)  route = "guided";
     else  route = "general";
 
     this.router.navigate(['/' + route, id]);

     var arr = this.SubCat.find(x => x.id === id);
     
     if (arr != null && arr != undefined) 
          this.text = arr.text;
          
      }
 collapsed(id: string) {
     var route:string;
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
     this.ThreeClass = "collapse"
     this.FourClass = "collapse";
     if (id == '1')
         this.FourClass = "";
     else if (id == '2')
         this.ThreeClass = "";
     else if (id == '3')
         this.TwoClass = "";
     else if (id == '4')
         this.OneClass = "";  
      } 

 videos(id:string)
 {
     var route:string;
     if (this.currentUrl.indexOf('general') > 0)
         route = "general";
     else if (this.currentUrl.indexOf('chat') > 0)
         route = "chat";
     else if (this.currentUrl.indexOf('guided') > 0)
         route = "guided";
     else
         route = "general";
     this.router.navigate(['/' + route, id]);
    

 }
 maps(id:string)
 {
     var route:string;
     if (this.currentUrl.indexOf('general') > 0)
         route = "general";
     else if (this.currentUrl.indexOf('chat') > 0)
         route = "chat";
     else if (this.currentUrl.indexOf('guided') > 0)
         route = "guided";
     else
         route = "general";
     this.router.navigate(['/' + route, id]);
 }
}

