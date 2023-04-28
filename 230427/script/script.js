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


//slide 
//위 -> 아래 또는 아래 > 위
//3초 간격
//마지막 이미지 -> 첫번째 이미지
//자동시작


//세로 슬라이드
// let count = 0 
// setInterval(()=>{
//     count++ //1부터 시작하니까 바로 증가시키고
//     if(count>2){count=0} // = 카운트가 2보다 클때 0으로 바꿔라 
//     console.log(count) //1,2,0,1,2,0,1....
//     //$(대상).css('속성','값')
//     $('#slide_container').css('transform',`translateY(-${count*300}px)`)
// },3000) //매초마다 반복





//가로 슬라이드
let count = 0 
setInterval(()=>{
    count++ //1부터 시작하니까 바로 증가시키고
    if(count>2){count=0} // = 카운트가 2보다 클때 0으로 바꿔라 
    console.log(count) //1,2,0,1,2,0,1....
    //$(대상).css('속성','값')
    $('#slide_container').css('transform',`translateX(-${count*1200}px)`)
},3000) //매초마다 반복
