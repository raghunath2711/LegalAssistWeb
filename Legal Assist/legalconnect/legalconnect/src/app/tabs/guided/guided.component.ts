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


    currentUrl: string = '';

    activeSld: string = "Slide1";
    myClass: string = "aciveSlide";

    constructor(private router: Router, private _el: ElementRef) { }

    ngOnInit() {
   
        //window.scrollTo(500, 1000);
      
        console.log('top:', this._el.nativeElement.offsetTop);
        this.currentUrl = this.router.url; // this will give you current url

        if (this.currentUrl == '/guided/tenantrights') {
            this.aciveBdg = 'tenant';
            this.text = 'In this section you will find general legal information, self-help packets and videos on your rights as a <br />renter and what to do if you have a problem with your landlord.<a> http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>';
            document.getElementById('tenant').scrollIntoView(); 

        }
        else if (this.currentUrl == '/guided/foreclosure') {
            this.aciveBdg = 'foreclosure';
            this.text = 'Browse the information below to find information about foreclosure prevention, foreclosure mediation and other foreclosure issues. <a>http://www.washingtonlawhelp.org/issues/housing/foreclosure-1</a>';
            document.getElementById('foreclosure').scrollIntoView(); 
        }
        else if (this.currentUrl == '/guided/emergencyshelter') {
            this.aciveBdg = 'emergency';
            this.text = 'Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>';
            document.getElementById('emergency').scrollIntoView(); 
        }
        else if (this.currentUrl == '/guided/mobileparktenants') {
            this.aciveBdg = 'mobile';
            this.text = 'In this section of Washington LawHelp you will find general information, self-help packets and resources for mobile home tenants. <a>http://www.washingtonlawhelp.org/issues/housing/mobile-home-park-tenants</a>';
            document.getElementById('mobile').scrollIntoView(); 
        }

        if (this.currentUrl == '/guided/QandA/4')
            {
            this.FourClass = "";
            document.getElementById('QandA').scrollIntoView();
           }
        else if (this.currentUrl == '/guided/QandA/3')
        {
            this.ThreeClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/QandA/2')
        {
            this.TwoClass = "";
            document.getElementById('QandA').scrollIntoView();
        }
        else if (this.currentUrl == '/guided/QandA/1')

        {
            this.OneClass = "";// window.location.hash = 'headingOne';
            document.getElementById('QandA').scrollIntoView();
        }

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
           
        if (this.currentUrl == '/guided/videos')
            document.getElementById('videos').scrollIntoView();
        if (this.currentUrl == '/guided/maps')
            document.getElementById('maps').scrollIntoView();
       
    }


    displayText(id: string) {

        this.aciveBdg = id;
  
        if (this.aciveBdg == "tenant")
            this.text = 'In this section you will find general legal information, self-help packets and videos on your rights as a <br />renter and what to do if you have a problem with your landlord.<a> http://www.washingtonlawhelp.org/issues/housing/tenants-rights</a>';
        else if (this.aciveBdg == "foreclosure")
            this.text = 'Browse the information below to find information about foreclosure prevention, foreclosure mediation and other foreclosure issues. <a>http://www.washingtonlawhelp.org/issues/housing/foreclosure-1</a>';

        else if (this.aciveBdg == "emergency")
            this.text = 'Browse the resources below to find general information and resources on emergency shelter and assistance in Washington state.  <a>http://www.washingtonlawhelp.org/issues/housing/emergency-shelter-assistance</a>';

        else if (this.aciveBdg == "mobile")
            this.text = 'In this section of Washington LawHelp you will find general information, self-help packets and resources for mobile home tenants. <a>http://www.washingtonlawhelp.org/issues/housing/mobile-home-park-tenants</a>';

        else
            this.text = 'Sed elementum felis velit, et euismod nibh pellentesque sed.Curabitur nec cursus orci, non faucibus nisl. Ut vel gravida arcu.Quisque malesuada ut nibh vitae auctor. Pellentesque et massaaugue. Ut felis orci, condimentum ut pulvinar ut, posuere vitae erat.Nulla laoreet pulvinar diam non condimentum. Proin non liberoconvallis augue sodales malesuada. Quisque consectetur, magnaeget ultricies dictum, mauris ipsum ultrices ante, in aliquet nuncodio vel orci. Nam tristique fringilla est, et iaculis nisi fermentum a.Sed vel magna sit amet urna convallis sagittis at eu enim. Sedgravida diam a purus dictum, et faucibus lacus facilisis. In porttitorsollicitudin convallis. Sed blandit, tellus nec faucibus facilisis, urnanisi fringilla sapien, id condimentum dui velit imperdiet lectus.Quisque quam mi, molestie ac eros in, porta pharetra magna.liquam posuere porta pulvinar. Morbi mattis dolor mi, sit amet rhoncus sem volutpat eget. Vestibulum et nisl in erat posuere tristique in sedaugue. Quisque lorem elit, consequat nec commodo quis, faucibus non urna. Nulla facilisi. In gravida ultricies ante a hendrerit. Etiamaccumsan nisl massa, nec tincidunt justo mattis eu. In mattis sem libero, id euismod neque congue a. Pellentesque consequat in leo sedhendrerit. Suspendisse fringilla ligula in sem porttitor congue. Proin nec est non mi fringilla venenatis in at nulla. Nullam lectus urna,';
    }
    collapsed(id: string) {
        
        this.OneClass = "collapse";
        this.TwoClass = "collapse";
        this.ThreeClass = "collapse"
        this.FourClass = "collapse";
        if (id == 'headingFour')
            this.FourClass = "";
        else if (id == 'headingThree')
            this.ThreeClass = "";
        else if (id == 'guidedHeadingTwo')
            this.TwoClass = "";
        else if (id == 'headingOne')
            this.OneClass = "";

    } 


    ShowNextNavigation(sld:string)
    {
  
        this.activeSld = sld;
        
    }   

    ShowSkipNavigation(sld:string)
   {
        this.activeSld = sld;
    }
    ValidateContent(param:string)
    {   
        this.myClass =param;
       
    }
}

