const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait ..."

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {

            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc ; 
    
            let randomNumber = Math.floor(Math.random()*3);
    
            let cpuImage = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    
            cpuResult.src = cpuImage[randomNumber];
    
            let cpuValue = ["R", "P", "S"][randomNumber];
    
            let userValue = ["R", "P", "S"][index];
    
            let outcomes = {
                RR: "DRAW",
                RP: "SYSTEM",
                RS : "YOU",
                PP: "DRAW",
                PR : "YOU",
                PS : "SYSTEM",
                SS : "DRAW",
                SR :"SYSTEM",
                SP :"YOU",
            };
    
            let outComeValue = outcomes[userValue + cpuValue];
    
            result.textContent = userValue ===cpuValue ? "MATCH DRAW" : `${outComeValue} WON!!`;

        },2500 );


    });
});