// Slide-down Slide-up   
let slideUp = (target, duration=500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

let slideDown = (target, duration=500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout( () => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

/////
let speedAnimation = 400;
let targetId = document.getElementById("target");
let targetId2 = document.getElementById("target2");
let targetId3 = document.getElementById("target3");

let rotateIcon = document.querySelector('.blog-categories .btn-slide-down');
let rotateIcon2 = document.querySelector('.lastest-posts .btn-slide-down');
let rotateIcon3 = document.querySelector('.list-tag .btn-slide-down');

var slideBtn = function(id, rotateIcon, target, classToAdd, duration = 500){
  let eventClick = document.getElementById(id);
  if(eventClick) {
    eventClick.addEventListener('click', function(){
      rotateIcon.classList.add(classToAdd);
      if (window.getComputedStyle(target).display === 'none') {
        rotateIcon.classList.remove(classToAdd);
        return slideDown(target, duration);
      }
      return slideUp(target, duration);
    })
  }
}

slideBtn('toggle-category', rotateIcon, targetId, 'cate-btn-slide-up');
slideBtn('toggle-recent-post', rotateIcon2, targetId2, 'recent-btn-slide-up');
slideBtn('toggle-tags', rotateIcon3, targetId3, 'tags-btn-slide-up');



//  Categories Blog 
let getCategory =  document.querySelectorAll(".category-item > a");
let arr_Cat = [...getCategory];
arr_Cat.map((item) => {
  let cutstring = item.innerHTML;
  cutstring = cutstring.replace('/blogs/', '');
  cutstring = cutstring.split('-').join(' ');
  item.innerHTML = cutstring;
}
);


