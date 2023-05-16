var arrSoN = [];

function themSoN() {
    var n = document.getElementById("soN").value * 1;
    arrSoN.push(n);
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoN.push;
        document.getElementById("mangNguoiDungNhap").innerHTML = "Các số được thêm vào là: " + arrSoN;
    }
}

// Câu 1: Tổng các số dương
function tongCacSoDuong() {
    var tongCacSoDuong = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            tongCacSoDuong += arrSoN[i];
        }
    }
    document.getElementById("tongSoDuong").innerHTML = "Tổng các số dương là: " + tongCacSoDuong;
}

// Câu 2: Đếm các số dương
function demCacSoDuong() {
    var demCacSoDuong = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            demCacSoDuong++;
        }
    }
    document.getElementById("demSoDuong").innerHTML = "Tổng cộng có: " + demCacSoDuong + " số dương";
}

// Câu 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
    var timSoNhoNhat = arrSoN.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("soNhoNhat").innerHTML = timSoNhoNhat[0];
}

// Câu 4: Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    var arrSoDuong = [];
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            arrSoDuong.push(arrSoN[i]);
        }
    }
    var timSoDuongNhoNhat = arrSoDuong.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("soDuongNhoNhat").innerHTML = timSoDuongNhoNhat[0];
}

// Câu 5: Tìm số chẵn cuối cùng
function timSoChanCuoi() {
    var timSoChanCuoi = 0;
    var arrsoChan = [];
    var n = 0;

    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] % 2 == 0) {
            arrsoChan.push(arrSoN[i]);
            n++;
        }
    }
    if (n <= 0) {
        timSoChanCuoi = -1;
    } else {
        timSoChanCuoi = arrsoChan[n - 1];
    }

    document.getElementById("soChanCuoi").innerHTML = timSoChanCuoi;
}

// Câu 6: Đổi chỗ
function doiCho() {
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoN.push;
        var doi = arrSoN.reverse();

        document.getElementById("doiViTri").innerHTML = "Các số sau khi đổi vị trí là: " + doi;
    }
}

// Câu 7: Sắp xếp tăng dần
function sapXepTangDan() {
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoN.push;
        var sap = arrSoN.sort(function (a, b) {
           return a - b;
        });
    }
    document.getElementById("sapXepTang").innerHTML = "Các số sau khi được sắp xếp là: " + sap;
}

// Câu 8: Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
    var soNguyenToDauTien = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] >= 2) {

        }
    }
}

// Câu 9: Đếm số nguyên

function themSoThuc() {
    document.getElementById("soThuc").value * 1;
    var arrsoThuc = arrSoN.push;
    document.getElementById ("themSoThuc").innerHTML = "Số thực được thêm vào là: " + arrsoThuc;
}
function demSoNguyen() {

}

// Câu 10: So sánh số lượng số âm và dương
function soSanhSo() {
    var arrsoNguyenDuong = [];
    var arrSoNguyenAm = [];
    for (var i = 0; i < arrSoN.length; i++) {

    }
}