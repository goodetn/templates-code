The Call Stack
JavaScript là ngôn ngữ single-threaded (đơn luồng). Có nghĩa là nó chỉ có một call stack đơn lẻ. 
Cho nên nó chỉ thực hiện duy nhất mỗi 1 tác vụ trong một lần thực thi.

Call Stack là một cấu trúc dữ liệu ghi lại cụ thể nơi mà đoạn code của chúng ta được thực thi trong chương trình. Khi bạn bắt đầu một function, 
function đó sẽ được đẩy vào vùng chứa đầu tiên của stack. Rồi khi function đó kết thúc thì nó sẽ được remove ra khỏi stack. 
Đó là toàn bộ những gì stack có thể làm cho bạn.

Hãy xem một ví dụ sau đây. Theo dõi đoạn code sau:

function multiply(x, y) {
    return x * y;
}
function printSquare(x) {
    var s = multiply(x, x);
    console.log(s);
}
printSquare(5);

Khi Engine bắt đầu thực thi đoạn code này thì Call Stack lúc đó sẽ rỗng. Các bước thực thi tiếp theo trong Call Stack sẽ trông như thế này: