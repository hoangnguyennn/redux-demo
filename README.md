# About Redux

`Redux` is a state management tool (một công cụ để quản lý state)

`State` is a single object, containing data (là một object duy nhất, chứa dữ liệu của cả app)

## Concept

`Actions` are plain object describing what happened in the app (là những object đơn giản dùng để mô tả điều gì đã xảy ra bên trong app, trong Redux, một `action` phải có thuộc tính `type`)

`Reducer` is a function describing the update logic (là một hàm mô tả những logic cập nhập dữ liệu của app, `reducer` nhận vào 2 tham số là state trước đó `previousState` và `action`)

`Action creators`: trong quá trình thao tác với các `action` được hard code (gán cứng), thì có thể sẽ gõ sai tên `action`, viết đi viết lại nhiều lần và editor cũng không suggest action khi gõ, từ đó sinh ra `action creators` là các hàm dùng để tạo ra action

`Action types`: tương tự như `action creators`, type của `action` nếu được hard code cũng sẽ khó kiểm soát lỗi trong lúc gõ text. Vì vậy cần tạo ra các constant để quản lý tên của các type này, nó được gọi là `action types`
