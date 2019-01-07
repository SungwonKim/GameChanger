## Hooks란?
클래스를 사용하지 않고 state와 다른 React 기능들을 사용할 수 있는, 하위 호환 가능한 새로운 API. v16.7(현재)에 포함될 뻔 했으나 밀린 상태. 

### 동기
지금의 React는
- Stateful logic을 Components간에 재사용하기 어려웠다
  - Attach 하는 기능을 제공하지 않았기에 Render props 패턴 또는 HOC를 사용
    - 그런데 이것들은 재구조화를 필요로 함
    - Component wrapper Hell
  - (Hooks은 Component 계층구조를 수정하지 않고 재사용하게 끔 만들어 줌)
- 복잡한 클래스는 이해하기 어려워졌다
  - LifeCycle 별로 처리 로직이 들어가고
  - Stateful 로직이 여기저기에 있어 함수나 작은 Component로 추출하는게 불가능하기도 했음 
  - 테스트 어렵다
  - 결국 별도의 상태 관리 라이브러리를 사용
    - 지나친 추상화
    - 다른 파일들을 넘나 들게하고
    - 재사용이 어려움
- 자바스크립트 클래스는 기계나 사람에게 모두 혼란을 줌
  - 초심자들은 this때문에 헷갈려함
  - 클래스 파일들은 비교적 AOT(Ahead of time)등에 의해 최적화 되기 어려움

### Hooks를 사용하면
- Class없는 Function형태로 작성하게 됨
  - React Component안에서만 Hooks API를 사용해야 함
  - 기존의 클래스 Component 안에서 Hook API 사용할 수 없음
- Stateful한 로직/Component를 재사용하기 용이해짐
- 테스트하기 쉽다
- Mixin이 가졌던 단점이 없음
  - Ref) https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html#why-mixins-are-broken


### API 소개
- useHooks
  - 메소드 인자가 초기값
  - Return값은 Array형태 ([state, setState])
  - 호출된 순서로 어떤 상태인지 기억
     - https://overreacted.io/why-do-hooks-rely-on-call-order/
     - 이 Rule을 지키기 위해 Eslint를 만들었음
- useEffects
  - 마운트 또는 렌더 후에 실행
  - 인자로 실행 횟수 최적화
  - 리턴값으로 초기화 할 수 있음

### 점진적인 도입 전략
- 기존 API 없앨 계획 없음
  - Facebook도 수만개의 컴퍼넌트를 모두 재작성할 수 없음
- 새로 작성되는 Component부터 적용하는 식으로 도입
- Hooks가 기존의 클래스를 모두 커버할 수 있도록 할 계획임
  - componentDidCatch 와 getDerivedStateFromError 도 방법을 찾을 예정

### 참조한 문서
- https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
- https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
- https://overreacted.io/why-do-hooks-rely-on-call-order/
- https://github.com/rehooks/awesome-react-hooks
