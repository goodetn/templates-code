// “Blowing the stack” --- (hiểu nôm na là tràn vùng chứa) --- Vấn đề này sẽ xảy ra khi stack của bạn vượt quá Call Stack size và thực tế là nó rất hay xảy ra. 
// Đặt biệt là khi bạn xài các hàm đệ quy mà ko kiểm soát kỹ.Hãy nhìn đoạn code dưới đây.

function foo() {
    foo();
}
foo();

// Khi engine thực thi đoạn code trên.Nó sẽ bắt đầu gọi hàm "foo".
// Tuy nhiên function foo là một hàm đệ quy, nó tự gọi chính nó mà không hề có bất cứ điều kiện dừng nào.

// Chính vì vậy cứ mỗi lần function foo được gọi, thì chính nó sẽ được add liên tục vào Call Stack mà không thể dừng lại.Hình dưới đây sẽ minh hoạ rõ hơn:

// Tuy nhiên một khi số lượng các hàm "foo" được gọi vượt quá size thực tế của Call Stack 
// thì lúc đó browser sẽ thực thi một hành động trả ra lỗi giống như hình dưới đây:
