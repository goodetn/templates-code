// The Runtime
// Trong thực tế hiện này có một số APIs trên trình duyệt mà chúng ta vẫn đang sử dụng hằng ngày (vd: “setTimeout”). 
// Tuy nhiên những APIs này lại [không được cung cấp bởi Engine].
// Vậy những APIs này từ đâu mà có?
// Hoá ra thực tế lại có chút phức tạp hơn chúng ta nghỉ.

// =>

// Vậy ở đây chúng ta có Engine, nhưng không chỉ có thế. Chúng ta còn có thêm một thứ gọi là [Web APIs]. 
// Những [APIs này được cung cấp bởi chính browser mà chúng ta đang sử dụng].Các APIs đó bao gồm DOM, AJAX setTimeout,...

// Và tiếp đó còn có các event loop (sự kiện vòng lặp) thông dụng và callback queue.
