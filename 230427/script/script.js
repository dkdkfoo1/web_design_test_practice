//jquery() == $()

// 네비 메뉴 
$('.sub').hide()
$('#popup').hide()
$('nav > ul > li').on('mouseover',()=>{
    $('.sub').stop(true).slideDown()
})
$('nav > ul > li').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
})
// stop(true) 써야 잔상이 남지 않음


//공지사항 첫 글 클릭시 팝업 보이기
$('.notice a:first-child').on('click',()=>{
    $('#popup').show()
})

//팝업 닫기 클릭 시 팝업 숨기기
$('#popup a').on('click',()=>{
    $('#popup').hide()
})

$('.gallery').hide()

//공지사항 제목 클릭 시 공지사항 내용만 보이기
$('.tab_wrap .title a:first-child').on('click',()=>{
    $('.notice').show()
    $('.gallery').hide()
    //바탕 색 바뀌는 것.
    $('.tab_wrap .title a').removeClass() //classList.remove 제이쿼리버전
    $('.tab_wrap .title a:first-child').addClass('active') //classList.add 제이쿼리버전
})


//갤러리 제목 클릭 시 갤러리 내용만 보이기
$('.tab_wrap .title a:last-child').on('click',()=>{
    $('.notice').hide()
    $('.gallery').show()
    //바탕 색 바뀌는 것.
    $('.tab_wrap .title a').removeClass() //classList.remove 제이쿼리버전 
    $('.tab_wrap .title a:last-child').addClass('active') //classList.add 제이쿼리버전
})

// css('dispaly','flex') 이건 show가 블록이 기본값이라,
//혹시나 flex로 하고 깨지면 요걸로 바꿔사용