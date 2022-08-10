const def = {
    height: 7100, // 총 높이
    elements: { // 애니메이션이 적용될 요소들을 먼저 정리함. 
      sl1: { // ref 이름
        top: 500, // 시작점
        bottom: 1900, // 끝점
        topStyle: { // 해당 요소의 위쪽에서 시작하고자 할 때 초기화되는 스타일 
          opacity: 0,
          translateY: -60 // 기본 위치는 중앙이므로 중심에서 떨어진 거리를 뜻하게 됨.
          //(기타 속성들)
        },
        bottomStyle: { // 해당 요소의 아래쪽에서 끝날 때 마무리되는 스타일
          opacity: 0,
          translateY: 60
        }
      },
      // 중략, 기타 다른 요소들
    },
    animations: {
      sl1: [ // 애니메이션을 적용할 요소. 애니메이션은 여러 개가 될 수 있기 때문에 배열로 처리함.
        {
          top: 500, // 이 애니메이션의 시작점
          bottom: 1900, // 이 애니메이션의 끝점
          easing: midSlow, // 가운데를 느려지게 하는 Easing Function
          styles: { // 적용할 스타일들
            translateY: { // 적용할 스타일
              topValue: 60, // 시작점일 때의 값
              bottomValue: -60 // 끝점일 때의 값
            }
          }
        },
        {
          top: 500, // 반복...
          bottom: 800,
          easing: ease,
          styles: {
            opacity: {
              topValue: 0,
              bottomValue: 1
            }
          }
        },
      ],
      // 중략, 애니메이션을 적용할 다른 요소들을 추가
    }
  }