# I> Khái niệm cản bản về reactjs 
React hook đã được lên bản chính thức kể từ phiên bản 16.8. Trước đó, vào React Conf 2018 ở Cali đội ngũ phát triển đã giới thiệu nó và bắt đầu bản beta cho các phiên bản kế và nay đã là bản chính thức. Nếu ta vào https://reactjs.org/docs/hooks-intro.html bản đã thấy nó từ beta sang new


Hook cho phép ta không cần thiết phải tạo class component, chỉ cần tạo function less component vẫn có thể có thể sử dụng state và các features. Điều này khiến các component nhẹ nhàng hơn hơn nhiều, giảm số lượng code cần thiết phải code, đồng thời dễ hiểu ít nhầm lẫn hơn về một số khái niệm như livecycle với 1 lập trình viên mới

## 1. Lợi ích từ hook:
### a. Giảm số lượng code đáng kể
Có thể giảm số lượng đáng kể, theo thống kê khoảng 90% với 1 project trung bình do:
- Nhờ việc quản lý state dễ dàng và hiệu quả hơn với hook, ta có thể tránh lỗi wrapper hell 
![alt text](https://miro.medium.com/proxy/1*SU5_ws88Kh_Oio_L4Myhvg.png "image")
- Đồng nghiệp không thấy chán nản khi reivew code

Here's our logo (hover to see the title text):


### b. Không bắt buột phải dùng
Việc sử dụng hook hoàn toàn không bắt buột, không cần thiết phải học kiến thức mới vẫn có thể áp dụng cách viết class component với es6 từ phiên bản cũ. Hook chỉ cung cấp các cách viết ngắn gọn và tương tác dễ dàng và hiệu quả hơn với props, state, context, refs, và các lifecycle
### c. Dễ dàng hiểu hơn:
Việc ra đời hook, sẽ làm dễ dàng dễ hiểu hơn việc dùng các lifecycle
Cũng như việc project càng mở rộng, thay đổi api khi maintain thì code reacjs phải thay đổi tương ứng trong các component như `componentDidMount` hay `componentDidUpdate` ,vv ứng dụng ngày càng nặng nề và khó hiểu


---

# II> UseState Hook:

### 1> VÍ dụ: hiển thị số lượng bấm vào nút button:
``` javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Ví dụ này tương đương với nếu viết class component

``` javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
### 2.phân tích ví dụ: 
Ở ví dụ này:
 `[count, setCount] = useState(0); `
- useState là 1 function nhận 0 là giá trị sẽ setState cho biến count trong lần render đầu tiên
Nó trả về state(ở đây là count), và setState(setCount) là function cập nhật state.
- cách sử dụng : `{count}` thay vì `{this.state.count}`
- update state: setState có thể được gọi trong event của component:
setCount tương ứng với setState({count: this.state.count+1 })



_**Chú ý:**_

- việc khai báo hook đặt trên đầu tiên trong nội dung component (theo rule: https://reactjs.org/docs/hooks-rules.html )
- cặp state và setState phải là 1 cặp(tiền tố bắt đầu bằng set)

- Có thể khai báo nhiều useState, đặt tên phù hợp và khai báo theo kiểu array destructuring
``` javascript
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  
```

- function của nó là useState mà không phải createState, vì state lun cập nhật lên tục, dùng từ create chỉ ý nghĩa tạo trong lần đầu tiên rùi thui

## 3> Chú ý: 
- Điểm khác biệt so với setState là nó không thể tự động auto merged cập nhật object.

Có thẻ dùng:
``` javascript
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});

```
hoặc `useReducer` có thể dùng cho cả nested object



---

# III> useEffect
## 1> Định nghĩa và ví dụ
- được thực thi ngay  khi cập nhật Dom,
là function giúp làm thay đổi bên trong component,
useEffect tương đương với `componentDidMount`, `componentDidUpdate` và `componentWillUnMount`

Ví dụ: về việc khi cập nhật số lượng của biến count(ví dụ ở useState), ta sẽ lưu nó vào localstorage

``` javascript
import React, { useState, useEffect } from 'react';

export function Test() {
  const [count, setCount] = useState(()=> JSON.parse(localStorage.getItem("count")));

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));
  });

  return (
    <div>
      <div>count: {count}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

```
ví dụ này tương đương với

``` javascript
import React from 'react';

export default class Test extends React.Component{

  componentDidMount() => {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));

  }
  componentDidUpdate() => {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));
  }

  render() {
   
    return (
      <div>
        <div>count: {count}</div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
}

```


## 2> Phân tích ví dụ:

## 3> Cách thức hoạt động:
 - useEffect: khi component cần cập nhật lại sau khi render, nó sẽ gọi useEffect
 - useEffect nằm trong component để mà khi có props pass hay state trong trong component update thì sẽ gọi nó và có thể truy cập các biến ấy

 - useEffect sẽ chạy khi mà mỗi khi render: đó là mặc định. Ta có thể customize lại:
Lấy ví dụ ở trên ta có:  
``` javascript
useEffect(() => {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
```
+ Ví dụ trên, ta pass [count] như là tham số thứ 2 trong useEffect. Ở lần cập nhật , nó sẽ so sánh giá trị kế với giá trị trươc đó: nếu là giá trị biến count giống như giá trị biến count trước đó nó sẽ không render lại.
+ Việc này giống như trong lifecycle `componentDidUpdate` :
``` javascript
componentDidUpdate(prevStates, prevProps) {
  if( this.sate.count !== prevStates.count ) {
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));
  }
}

```
Ta chỉ thực hiện viện thay đổi title của trang và set vào localStorage khi biến count thay đổi giá trị.

Xem thêm : https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

+ 
``` javascript
useEffect(() => {
    
  }, []);

```
trường hợp này chỉ dùng khi effect nầy không sử dụng bất kỳ biến nào trong component scope, nó sẽ dùng init props/state nếu có (nếu muốn effect này chỉ chạy 1 lần và clean đi(mount và unmount)) --> không cần phải re-render lại

- trường hợp nhiều effect: 
``` javascript
function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}

```
Thứ tự gọi sẽ là 
``` javascript
// ------------
// First render
// ------------
useState('Mary')           // 1. Initialize the name state variable with 'Mary'
useEffect(persistForm)     // 2. Add an effect for persisting the form
useState('Poppins')        // 3. Initialize the surname state variable with 'Poppins'
useEffect(updateTitle)     // 4. Add an effect for updating the title

// -------------
// Second render
// -------------
useState('Mary')           // 1. Read the name state variable (argument is ignored)
useEffect(persistForm)     // 2. Replace the effect for persisting the form
useState('Poppins')        // 3. Read the surname state variable (argument is ignored)
useEffect(updateTitle)     // 4. Replace the effect for updating the title

// ...
```

- [Cleaning up an effect](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect) :

useEffect(() => {
  // almost same as componentDidMount
  console.log('mounted!');
  return () => {
    // almost same as componentWillUnmount
    console.log('unmount!');
  };
}, []);

## 4> Tóm lại:
- constructor: không cần thiết. Nếu cần thiết khai báo state, có thể dùng useState, còn nếu muốn tính toán và set cho state, ta có thể sử dụng function trong useState

- shouldComponentUpdate: có thể dùng React.memo thay thế (nhưng nó chỉ shallowly so sánh props) 

- render: nằm trong return
- componentDidMount, componentDidUpdate, componentWillUnmount:== useEffect

- componentDidCatch và getDerivedStateFromError : chưa phát triển
- getDerivedStateFromProps



**Nguồn:**
* [How do lifecycle methods correspond to Hooks](https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks)

* [How do I implement shouldComponentUpdate](https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate)

---

# IV> Rules of Hooks:
Các phần trước đó ta đã trình bày sơ qua, nhưng phần này trình bày tổng quan laị

## 1> Chỉ gọi hook ở đầu function
- Điều này chắc chắn rằng hook có thể được gọi đúng thứ tự khi render cũng như khi re-render lại
- run đúng khi sử dụng nhiều useState hay useEffect

## 2> Chỉ nên gọi hook trong function component hay custom của hooks


---
# V> Các api khác:
## 1> useMemo:
giống componentShouldUpdate --> component child --> return memoized value
## 2> useCallBack 
giống useMemo, chỉ khác là nó được dùng để --> event,...--> return memoized callback.
## 3> useRef:
tạo ref cho 
## 4> useReducer:
giúp việc xử lý nested object và update object(useState không làm được) 

## 5> useLayoutEffect:
gần giống useEffect, khác it fires synchronously after all DOM mutation(được gọi đồng bộ sau khi DOM đã được update.)
## 6> useContext:
đơn giản hóa việc dùng context, thay vì lồng nhau-->multi context


# VI> Custom your hook: 
- Giúp xử lý các vấn đề trùng lặp về logic, ta sẽ tách thành 1 component riêng và tái sử dụng. Thay vì trước đây phải dùng HOCs, điều đó khiến ta phải chuyển những gì trùng lặp vào HOCs


Ví dụ với useStae,Ta viết 1 component form:
``` javascript
import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
}
```
=> Sau đó sử dụng:
``` javascript 
import React from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};
```


- Custom Hooks nó là convention theo như  design of Hooks, chứ không phải là một tính năng

- Việc custom : tên của component đó phải bắt đầu bằng từ khóa use, nó giúp việc kiểm tra tự động vi phạm theo như rule của hooks

- Các state của các component này là độc lập với nhau



Nguồn xem thêm: https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook

--- 



# VII> Các custom hook hay dùng:
https://usehooks.com/

https://www.hooks.guide/


https://viblo.asia/p/react-introducing-hooks-QpmleERNlrd
https://viblo.asia/p/react-memo-va-usememo-aWj534z1K6m
https://viblo.asia/p/cung-tim-hieu-ve-cac-hook-trong-react-hooks-Ljy5VYgjlra
https://viblo.asia/p/gioi-thieu-ve-react-hooks-trong-react-167-alpha-WAyK8LaoKxX
http://vuilaptrinh.com/2019-07-03-huong-dan-su-dung-react-hook-effect/#Effect-kh%C3%B4ng-c%E1%BA%A7n-Cleanup-effects-without-cleanup
https://www.it-swarm.net/vi/javascript/phat-hien-nhap-ben-ngoai-thanh-phan-react/1055680998/
https://www.it-swarm.net/vi/javascript/phan-ung-ma-sau-khi-ket-xuat/1049225752/
https://www.youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM
