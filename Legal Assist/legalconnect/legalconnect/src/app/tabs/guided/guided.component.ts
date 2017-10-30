import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'guided',
    templateUrl: './guided.component.html',
    
})
export class GuidedComponent implements OnInit{
    text: string = "In this section you will find general legal information, self - help packets and videos on your rights as a<br />renter and what to do if you have a problem with your landlord.<a > http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>";
    aciveBdg: string = 'tenant';
    OneClass = "collapse";
    TwoClass = "collapse";
    ThreeClass = "collapse"
    FourClass = "collapse";
    routeUrl: string = "";

    currentUrl: string = '';

    activeSld: string = "Slide1";
    myClass: string = "aciveSlide";
    ctrType: string = "button";
    steps: { "id": "Slide2", "question": "Have you received and eviction notice ?", "type": "button", "title":"evictionnotice", "options": [{ "name": "Yes" }, { "name": "No" }] }    //{
    //    "id": "2",
    //    "question": "Tell me more about your eviction notice",
    //    "type":"radio",
    //    "options": ["I need help understanding the notice", "I need to talk to someone for assistance","I have children and pay the rent"]
    //},
    //{
    //    "id": "3",
    //    "question": "Have can assist you with your notice ?",
    //    "type":"radio",
    //    "options": ["Scan your notice ?", "Chat with representative", "Call the eviction hotline"]
    //},
    //{
    //    "id": "4",
    //    "question": "Which of these is your housing problem?",
    //    "type":"radio",
    //    "options": ["My rental is in poor condition", "My land lord is abusive", "I have dispute with my neighbour", "My landlord has raised my rent","My land lord has changed the rental rules"]
    //}
   //]
    constructor(private router: Router, private _el: ElementRef) { }

    ngOnInit() {
   
        
        console.log('top:', this._el.nativeElement.offsetTop);
        this.currentUrl = this.router.url; // this will give you current url

       

        if (this.currentUrl == '/guided/assist/evictionnotice')
              this.activeSld = "Slide2";
       else if (this.currentUrl == '/guided/assist/housingproblem')
            this.activeSld = "Slide5";
        else if (this.currentUrl == '/guided/assist/begin')
            this.activeSld = "Slide1";
        else if (this.currentUrl == '/guided/assist/aboutnotice') 
            this.activeSld = "Slide3";
        else if (this.currentUrl == '/guided/assist/assistnotice')
            this.activeSld = "Slide4";
           
      
       
    }
        
    ShowNextNavigation(sld:string,title:string)
    {

        this.activeSld = sld;
        this.router.navigate(['/guided/assist', title]);

        //if (sld == 'Slide1') {
        //   // this.steps = [];
        //    this.steps.push({
        //        "id": "Slide2",
        //        "question": "Have you received and eviction notice ?",
        //        "type": "button",
        //        "title": "evictionnotice",
        //        "options": [{ "name": "Yes" }, { "name": "No" }]
        //    });

        //}
      
      //  if (sld == 'Slide2')
      //  {
         
      //      this.steps.id = "Slide3";
      //      this.steps.question = "Tell me more about your eviction notice";
      //      this.steps.type: "radio", "title": "housingproblem", "options": [{ "name": "I need help understanding the notice" }, { "name": "I need to talk to someone for assistance" }, { "name": "I have children and pay the rent" }]
      //  });
       
      //  }
      //  console.log(this.steps.title);
      ////  this.activeSld = this.steps[0].id;
      //  this.router.navigate(['/guided/assist', this.steps.title]);
      
    }   

    ShowSkipNavigation(sld: string, title: string)
   {
        this.activeSld = sld;
        this.router.navigate(['/guided/assist', title]);
    }

    ValidateContent(param:string)
    {   
        this.myClass =param;
       
    }
}

