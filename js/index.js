const logoHeader = document.querySelector('.nav-container');
const funBus = logoHeader.querySelector('.logo-heading');
const navBarr = document.querySelector('nav');
const singleNav = navBarr.querySelectorAll('a');
const firstSectionIntro = document.querySelector('.intro');
const introImg = firstSectionIntro.querySelector('img');
const introTextH2 = firstSectionIntro.querySelector('h2');
const signUp = document.querySelectorAll('.btn');



funBus.addEventListener('click', (event) => {
    event.target.style.color = "orange";
});

Array.from(singleNav).forEach((event2) => {
    event2.addEventListener('mouseover', event3 => {
        event3.target.style.color = "orange";
        event3.target.style.textDecoration = "lightblue wavy underline";
    })
    event2.addEventListener('mouseout', event3 => {
        event3.target.style.color = "black";
        event3.target.style.textDecoration = "none";
    })
});

introImg.addEventListener('dblclick', event4 => {
    event4.target.style.border = "dotted black";
});

introTextH2.addEventListener('mouseenter', event5 => {
    event5.target.style.textDecoration = "underline overline black";
});
introTextH2.addEventListener('mouseleave', event5 => {
    event5.target.style.textDecoration = "none";
})

window.addEventListener('load', (event) => {
    console.log('Yes! The page is fully loaded!');
  });

Array.from(signUp).forEach(event6 => {
    event6.addEventListener('mousemove', event7 => {
        event7.target.style.fontFamily = "fantasy";
    });
    event6.addEventListener('mouseleave', event7 => {
        event7.target.style.fontFamily = "none";
    })
})

window.addEventListener('resize', event => {
    console.log("Window Size");
});

Array.from(document).forEach( element => {
    element.addEventListener('click', event => {
    console.log("Wow look at all those events!", event.target);
    console.log("Wow! Look at the current event!",event.currentTarget);
    console.log("\n");
    event.stopPropagation();
    })
})



