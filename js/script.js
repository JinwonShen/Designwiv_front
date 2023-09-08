// menu

/* const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', e => {handleIndicator(e.target);});
  item.classList.contains('is-active') && handleIndicator(item);
}); */



// scroll menu

const marker = document.querySelector(".nav_indicator");

//nav의 marker의 길이와 위치를 설정하는 함수
//A function to set the length and position of the nav marker.
function setMarker(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

const sections = document.querySelectorAll("section");
const menus = document.querySelectorAll(".nav_menu > li > a");

//스크롤 위치에 따라 해당하는 menu의 색깔과 마커가 달라짐
//The color and marker of the corresponding menu change according to the scroll position

window.addEventListener("scroll", () => {
  //현재 영역의 id값
  //id of the current section
  let current = "";

  sections.forEach((section) => {
    //각 section의 top 위치(절대적 위치)
    // The top of each section (absolute)
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;

    //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
    //When the accumulated scroll reaches the top of the section or is located inside the section
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

    menus.forEach((menu) => {
      menu.classList.remove("nav_item");
      const href = menu.getAttribute("href").substring(1);
      if (href === current) {
        //현재 있는 영역의 id와 메뉴의 링크주소가 일치할때
        //When the Id of the current section matches the href of the menu
        menu.classList.add("nav_item");
        setMarker(menu);
      }
    });
  });
});



// Main slide
$(function(){
  $('.slider-main').slick({
  slide: 'div.main_cont',        //슬라이드 되어야 할 태그
  infinite : true,     //무한 반복 옵션     
  slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
  slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
  speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  arrows : true,         // 옆으로 이동하는 화살표 표시 여부
  dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
  autoplay : false,            // 자동 스크롤 사용 여부
  autoplaySpeed : 3000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 1초 = 1000
  pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
  vertical : false,        // 세로 방향 슬라이드 옵션
  prevArrow : $('.icon-arrow-left'),
  nextArrow : $('.icon-arrow-right'),
  draggable : true,     //드래그 가능 여부 
  });
})


/* Team */
$(function(){
  $('.slider-team').slick({
  slide: 'div.team_cont',        //슬라이드 되어야 할 태그
  infinite : true,     //무한 반복 옵션     
  slidesToShow : 6,        // 한 화면에 보여질 컨텐츠 개수
  slidesToScroll : 3,        //스크롤 한번에 움직일 컨텐츠 개수
  speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  arrows : false,         // 옆으로 이동하는 화살표 표시 여부
  dots : false,         // 스크롤바 아래 점으로 페이지네이션 여부
  autoplay : true,            // 자동 스크롤 사용 여부
  autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 1초 = 1000
  pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
  vertical : false,        // 세로 방향 슬라이드 옵션
  prevArrow : $('.icon-arrow-left'),
  nextArrow : $('.icon-arrow-right'),
  draggable : true,     //드래그 가능 여부 

  responsive: [ // 반응형 웹 구현 옵션
					{  

						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:6 
						} 
					},
          {
            breakpoint: 1400, 
						settings: {
							slidesToShow:5
						} 
          },
          { 
						breakpoint: 1181,
						settings: {
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 768,
						settings: {	
							slidesToShow:3 
						} 
					}
				]

  });
})