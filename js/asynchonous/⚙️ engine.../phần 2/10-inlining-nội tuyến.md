# Inlining (Nội tuyến)
## (Mọi người nên đọc sơ qua nội tuyết hay hàm nội tuyến là gì đã nhé mình có chèn link wiki ở trên, cái này là một kỹ thuật trong C++)

Việc đầu tiên trong quá trình tối ưu code là thực hiện nội tuyến càng nhiều càng tốt.
Nội tuyến là một quá trình thay thế một phần code (đoạn mã ngay cái nơi mà hàm được gọi)
bằng phần thân của hàm được gọi. (hơi rối rắm nên các bạn đọc kỹ hơn về nó sẽ dễ hiểu hơn nhé)
Bước đơn giản này cho phép các phần tối ưu sau đó sẽ có ý nghĩa hơn.

