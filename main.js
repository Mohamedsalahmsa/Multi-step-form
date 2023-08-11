let form1 = document.querySelector(".form1")
let form2 = document.querySelector(".form2")
let form3 = document.querySelector(".form3")
let form4 = document.querySelector(".form4")
let form5 = document.querySelector(".form5")

// Select buttons
// Go back btn  
let pervious = document.querySelector(".pervious")
// Next Btn
let next = document.querySelector(".next")

// Select Inputs
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

// select spans 
let numbers = document.querySelectorAll(".numbers span")

// Select boxs
let boxs = document.querySelectorAll(".boxs .box")

/*Check for Forms
console.log(form1)
console.log(form2)
console.log(form3)
console.log(form4)
console.log(form5)

*/ 


// first hide the Go back button from  first Form
if(form1.classList.contains("form1")) {
    pervious.classList.add("none")
}
// -----------------------------------------------

    next.addEventListener("click" , function() {
           if(name.value == "" && email.value === "" || phone.value === "") {
                name.style.border = "1px solid red"
                email.style.border = "1px solid red"
           } else {
                form1.classList.add("none")
                if(form1.classList.contains("none")) {
                    pervious.classList.remove("none")
                }
                form2.classList.remove("none")
                numbers[0].classList.remove("activee")
                numbers[1].classList.add("activee")
           }    

           AllFormsCheck()


    })


function AllFormsCheck() {


    // Check Form 2
        boxs.forEach(function(box){
            box.addEventListener("click" , function() {
                boxs.forEach(function(box) {
                        box.classList.remove("select")
                })
                this.classList.add("select")
            })
       })

    if(form2.classList.contains("form2") && form1.classList.contains("none")) {
        if(boxs[0].classList.contains("select") || boxs[1].classList.contains("select") || boxs[2].classList.contains("select") ) {
            form2.classList.add("none")
            form3.classList.remove("none")
            numbers[1].classList.remove("activee")
            numbers[2].classList.add("activee")
           } else {
                boxs[0].style.border = '1px solid red'
                boxs[1].style.border = '1px solid red'
                boxs[2].style.border = '1px solid red'
           }
    }

    // Check Form 3
    if(form3.classList.contains("form3")) {
        let service = document.querySelectorAll(".boxs .box input")
        console.log("Done")
        service.forEach(function(services){
            services.addEventListener("click" , function() {
                service.forEach(function(services) {
                    services.removeAttribute("dataSelect")
                })
                this.setAttribute("dataSelect", "check")
            })
       })

        if(service[0].getAttribute("dataSelect") === "check" || service[1].getAttribute("dataSelect") === "check" || service[2].getAttribute("dataSelect") === "check") {
            numbers[2].classList.remove("activee")
            numbers[3].classList.add("activee")
            numbers[1].classList.remove("activee")
            form3.classList.add("none")
            form4.classList.remove("none")
            form2.classList.add("none")
        }
        
    }



    // Check Form 4
    if(form4.classList.contains("form4")) {
        if(boxs[7].classList.contains("select") || boxs[8].classList.contains("select") || boxs[10].classList.contains("select") ) {
            form4.classList.add("none")
            form5.classList.remove("none")

            if(form5.classList !== "none") {
                next.classList.add("none")
                setTimeout(function() {
                    location.reload()
                },1000)
            }

           } else {
            boxs[7].style.border = '1px solid red'
            boxs[9].style.border = '1px solid red'
            boxs[8].style.border = '1px solid red'
           }
    }




}


    // Go Back Button
    pervious.addEventListener("click" , function() {
        if(form2.getAttribute("class") === "form2 form") {
           form2.classList.add("none")
           form1.classList.remove("none")
           pervious.classList.add("none")
           numbers[1].classList.remove("activee")
           numbers[0].classList.add("activee")
       } else if(form4.classList.contains("none")) {
                form3.classList.add("none")
                form2.classList.remove("none")
                numbers[2].classList.remove("activee")
                numbers[1].classList.add("activee")
       } else if (form5.classList.contains("none")) {
        form4.classList.add("none")
        form3.classList.remove("none")
        numbers[3].classList.remove("activee")
        numbers[2].classList.add("activee")
       }
   })

    