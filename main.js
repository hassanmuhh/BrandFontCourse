

// FAQs Section
const FAQs = document.querySelectorAll(".faqs");
const faqsBox = document.querySelectorAll(".faqs-box");
const faqsTitle = document.querySelectorAll('.faqs-box-text')
const faqsBoxDesc = document.querySelectorAll(".faqs-box-desc");
const faqsShape = document.querySelector(".faqs-shape");

// faqsBox.addEventListener("click", function () {
//   FAQs.classList.toggle("active");
// });

// faqsBox.forEach((faq) => {
//   faq.addEventListener("click", function () {
//     // FAQs.classList.toggle("active");

//     // FAQs.forEach((FAQ) => {
//     //   FAQ.classList.toggle("active");
//     // });
// });

// });


var faq = document.getElementsByClassName("faqs-box");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        
        console.log(this.nextSibling);
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        // faqsTitle.forEach((p)=> {
               
        //     p.addEventListener('click', function(){
        //             this.style.color="#fff";
        //         })
        //     })

        
        /* Toggle between hiding and showing the active panel */
        
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
            this.style.cssText = `
            background-color:transparent;
            `
            
        } else {
            body.style.display = "block";
            
            // this.style.cssText = `
            // background-color:#0000ff;
            // `
            // for(let k=0; k< faqsTitle.length; k++){
            //     faqsTitle[i].addEventListener('click', ()=>{
            //         this.style.color = '#fff'
            //     })
            // }
           
            
        }

        
    });
}
