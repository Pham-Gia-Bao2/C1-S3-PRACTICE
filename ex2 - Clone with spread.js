// BỐI CẢNH
// Bản gốc chứa một số yếu tố.
// Chức năng UpdateArray lấy một mảng, chỉ mục và giá trị mới làm tham số và cập nhật giá trị tại chỉ mục được chỉ định trong mảng.

// VẤN ĐỀ
// - Chún tôm Muốn mảng Ban Đầu Không Thay Đổi!

// CÔNG VIỆC CỦA BẠN
//- Trong chức năng UpdateArray, bạn cần sử dụng toán tử lây lan (...) để sao chép mảng gốc trước khi thực hiện sửa đổi.

// ĐỂ KIỂM TRA
// Kiểm tra xem mã của bạn có tạo ra kết quả tương tự không
let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
    var newArr = [...array];
    newArr[index] = newValue;
    return newArr;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray);