const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    // Note: "this" keyword doesn't exist in an arrow function
    // for(let i = 0; i < sectBtn.length; i++){
    //     sectBtn[i].addEventListener('click', function(){
    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         // Make sure you have a space before "active-btn" in the following line
    //         this.className += ' active-btn';
    //     })
    // }

    // Sections Active class
    // allSections.addEventListener('click', (e) =>{
    //     const id = e.target.dataset.id;
    //     if(id){
    //         // Remove selected from the other btns
    //         sectBtns.forEach((btn) =>{
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         // Hide other sections
    //         sections.forEach((section) =>{
    //             section.classList.remove('active')
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    // const projectSectionHeading = document.querySelectorAll('.project-section-heading');

    // projectSectionHeading.forEach(heading => {
    //     heading.addEventListener('click', () => {
    //         const content = heading.nextElementSibling;
    //         content.style.display = content.style.display === 'block' ? 'none' : 'block';
    //     });
    // });

//     const projectSectionHeading = document.querySelectorAll('.project-section-heading');

// projectSectionHeading.forEach(heading => {
//   heading.addEventListener('click', () => {
//     const content = heading.nextElementSibling;
//     content.classList.toggle('show-content');
//   });
// });

}

PageTransitions();