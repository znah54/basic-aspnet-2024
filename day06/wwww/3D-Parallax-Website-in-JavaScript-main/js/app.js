const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX - window.innerWidth / 2;
    yValue=e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        let speedx = el.CDATA_SECTION_NODE.speedx;
        let speedy = el.CDATA_SECTION_NODE.speedy;
        
        let isInLeft= 
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = e.clientX - parseFloat(getComputedStyle(forTest).left) *
            isInLeft * 0.1;
        
            el.style.transform = 'translateX(-calc(-50% + ${-xValue * speedx}px)) translateY(calc-50% + $({yValue * speedy}px)) perspective(2300px) translateZ(${zValue}px)';
    });
});