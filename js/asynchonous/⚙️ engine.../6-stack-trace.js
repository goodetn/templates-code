// Còn đây mô tả chính xác các stack trace(vết tích của stack) được tạo ra trong call stack khi có một exception(ngoại lệ / error) văng ra
// --- hay còn gọi là trạng thái của Call Stack khi xảy ra exception.Theo dõi đoạn code sau đây.

function foo() {
    throw new Error('SessionStack will help you resolve crashes :)');
}
function bar() {
    foo();
}
function start() {
    bar();
}
start();

// Nếu mình thực thi đoạn code này trên console của Chrome (giả sử đoạn code này thuộc một file gọi là foo.js). Lúc đó stack trace sẽ xuất ra như thế này:


