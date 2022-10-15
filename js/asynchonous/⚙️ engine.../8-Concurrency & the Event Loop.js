
// Nếu bạn có một function được gọi trong [Call Stack] mà function đó lại mất tới một khoản thời gian rất lâu để thực thi xong,
//   lúc đó đó sẽ phải làm thế nào ? Tưởng tượng bạn có một số tác vụ muốn chuyển đổi các images code bằng JavaScript và chạy trên trình duyệt.

// Bạn có lẽ hỏi-- - Thì chuyện này có gì đâu mà lại vấn đề chứ ? Vấn đề ở đây là khi mà [Call Stack] đang thực hiện nhiệm vụ của nó 
// thì browser sẽ không thể làm gì khác được-- nó sẽ bị blocked.Nghĩa là lúc đó browser sẽ không thể render(biên dịch),
//   không chạy các code nào khác.Nó đơn giản là bị kẹt lại một chỗ.Điều này sẽ làm cho app của bạn trở nên chậm chạp, không đẹp và thân thiện với người dùng.

// Vấn đề không chỉ dừng ở đó.Một khi mà browser phải thực hiện quá nhiều tác vụ trong Call Stask,
//   nó sẽ bị đứng và người dùng không thể tương tác với browser trong một khoảng thời gian khá lâu.
//   Và rồi lúc đó đa số các trình duyệt sẽ hiện lên một thông báo lỗi và hỏi người dùng muốn tắt trình duyệt hay tiếp tục chờ.


// Đây chắc hẳn không phải là một trải nghiệm người dùng tốt nhỉ?

// Rồi bây giờ làm sao để thực thi những đoạn code nặng nề mà không làm chậm hoặc đứng trình duyệt? Giải pháp cho tất cả chính là asynchronous callbacks (các callbacks bất đồng bộ).

// Điều này sẽ được trình bày chi tiết và rõ ràng hơn trong Part 2 series “How JavaScript actually works”. "Bên trong engine V8 + 5 tips làm code của bạn tốt hơn"

// NEXT => https://viblo.asia/p/cach-javascript-hoat-dong-chi-tet-ve-v8-engine-5-tips-de-toi-uu-hoa-code-cua-ban-1Je5EPDjlnL
