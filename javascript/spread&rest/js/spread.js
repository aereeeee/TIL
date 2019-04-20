const version = '1.0.0'

const callEvent = (params, eventName='클릭') => {//파라미터기본값 사용

    const default_event={
        screen_domain: '금융',
        screen_domain_detail: '자동차',
        screen_name: '자동차 상세',
        destination_screen_domain: 'my금융',
        destination_screen_domain_detail: '자동차',
    }
    
    const current_event = {
        ...params,
        ...default_event
    }
    console.log(eventName, current_event);
    // 원래 로그아니고 이벤트트랙커에게 보냄 유저로그위해 이벤트 트랙킹하기
};


// 중복된 항목들 없애자 스프레드로! 1. 콜이벤트 함수 안에 디폴트 객체에 중복된 항목 넣기
const eventA = {
    version, // 프로퍼티 축약표현, 축약표현은 맨 위로 올리는게 정설
    button_name: 'A버튼'
}

const eventB = {
    button_name: 'B버튼',
    version: version
}

const eventC = {
    button_name: 'C버튼',
    version: '2.0.0'
}

const eventD = {
    button_name: 'D버튼',
    version: '3.0.0'
}

const eventE = {
    button_name: 'E버튼',
    version: version
}

const eventF = {
    button_name: 'F버튼',
    version: version
}