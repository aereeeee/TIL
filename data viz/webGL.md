# WebGL

- 로우레벨(GPU에 직접적으로 매핑) 그래픽 프로그래밍을 허용하는 웹 API
- HTML canvas요소의 렌더링 컨텍스트

    var gl;
    try{
    gl= canvas.getContext("canvas");
    }catch(e){}

부터 시작

- 브라우저에 의해 백버퍼의 이미지가 프론트 버퍼로 복사되며 브라우저 창에 프레임이 나타남
- 따라서 싱글스레드로 작동해야함. 하나의 자바스크립트 콜백 내에서 프레임의 전체 webgl렌더링 수행
- 브라우저가 스케줄링 처리하도록 webgl렌더링 콜백을 window​.request​Animation​Frame()으로 설정해야함

---

# regl

- 버텍스 쉐이더는 각 버텍스 를 **배치** 한다는 목표를 달성해야합니다 . 이 메소드는 각 정점마다 한 번 호출되며 각 호출 중에 **gl_Position을** 전역 으로 설정해야합니다 .
- 프래그먼트 쉐이더는 각 프래그먼트 의 **색상** 을 설정해야합니다 . **gl_FragColor** 가 호출 될 때마다 전역 **변수**를 설정하여 이를 수행합니다.
- No matter what else happens in these shaders, these two variables `(gl_Position and gl_FragColor)` are what need to be set.

    frag: `
      precision mediump float;
      uniform vec4 color;
      void main () {
        gl_FragColor = color;
      }`,
    
      // vertex shader
    vert: `
      precision mediump float;
      attribute vec2 position;
      void main () {
        gl_Position = vec4(position, 0, 1);
      }`,

precision mediump float; - 플로트 값

color와 position 변수 선언

main()에서 사용

color는 길이가 4인 벡터 따라서 네개 값있는 배열 필요

## shader에서 선언할수있는 세가지 변수

- 유니폼 uniforms 은 버텍스 및 프래그먼트 셰이더 모두에서 액세스 할 수 있습니다. 프레임이 렌더링 될 때마다 일정하기 때문에 '균일'합니다. 그러나 (아래에서 보 겠지만) 그 값은 프레임간에 변경 될 수 있습니다.
- **속성 attributes** 은 버텍스 쉐이더에만 제공됩니다. 표시되는 각 정점에 대한 값이 있습니다. 해당 특정 버텍스를 처리 할 때 개별 값이 버텍스 쉐이더에 제공됩니다.
- varying 은 조각 셰이더와 공유 할 수있는 버텍스 셰이더에서 선언 된 변수입니다. 우리는이 튜토리얼의 나머지 부분에서 이것을 사용하지 않을 것이지만, 그것이 존재한다는 것을 알면 좋다.

    [이런애들인듯..?](https://www.notion.so/142a9d394e7f4230af9e8bacdcc3207a)

---

## draw()에서? 전달가능한 인자들

- context
- props
- this

- context.tick변수사용하기

attributes에서 position값을 함수로 만들기

    function(context, props){
    	return[
    		[Math.sin(context.tick/100),-1]
    		..
    	]
    }

- prop 사용하기

리액트처럼 props쓸수 있음

    drawTriangle({
      color: [0.208, 0.304, 1.0, 1.0]
    	uniforms: {
      color: function(context, props) {
        return props.color;
      }
    	},
    });