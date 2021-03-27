# About Redux

`Redux` is a state management tool (một công cụ để quản lý state)

`State` is a single object, containing data (là một object duy nhất, chứa dữ liệu của cả app)

## Concept

`Actions` are plain object describing what happened in the app (là những object đơn giản dùng để mô tả điều gì đã xảy ra bên trong app, trong Redux, một `action` phải có thuộc tính `type`)

`Reducer` is a function describing the update logic (là một hàm mô tả những logic cập nhập dữ liệu của app, `reducer` nhận vào 2 tham số là state trước đó `previousState` và `action`)
