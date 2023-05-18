var arrSoN = [];

function themSoN() {
  var n = document.getElementById("soN").value * 1;
  arrSoN.push(n);
  for (var i = 0; i < arrSoN.length; i++) {
    arrSoN.push;
    document.getElementById("mangNguoiDungNhap").innerHTML =
      "Các số được thêm vào là: " + arrSoN;
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
  document.getElementById("tongSoDuong").innerHTML =
    "Tổng các số dương là: " + tongCacSoDuong;
}

// Câu 2: Đếm các số dương
function demCacSoDuong() {
  var demCacSoDuong = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      demCacSoDuong++;
    }
  }
  document.getElementById("demSoDuong").innerHTML =
    "Tổng cộng có: " + demCacSoDuong + " số dương";
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
  document.getElementById("soDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất trong dãy là: " + timSoDuongNhoNhat[0];
}

// Câu 5: Tìm số chẵn cuối cùng
function timSoChanCuoi() {
  var timSoChanCuoi = 0;
  var arrsoChan = [];
  var n = 0;
  var index = -1;

  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] % 2 == 0) {
      arrsoChan.push(arrSoN[i]);
      n++;
    }
  }
  if (n <= 0) {
    timSoChanCuoi = index;
  } else {
    timSoChanCuoi = arrsoChan[n - 1];
  }

  document.getElementById("soChanCuoi").innerHTML =
    "Số chẵn cuối cùng trong dãy là: " + timSoChanCuoi;
}

// Câu 6: Đổi chỗ
function doiCho() {
  for (var i = 0; i < arrSoN.length; i++) {
    arrSoN.push;
    var doi = arrSoN.reverse();

    document.getElementById("doiViTri").innerHTML =
      "Các số sau khi đổi vị trí là: " + doi;
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
  document.getElementById("sapXepTang").innerHTML =
    "Các số sau khi được sắp xếp là: " + sap;
}

// Câu 8: Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
  var soNguyenToDauTien = [];
  var n = 1;
  function checkSoNT(z) {
    var checkSoNT = "";
    for (var i = 2; i < z; i++) {
      if (z % i == 0) {
        checkSoNT = "không phải số nguyên tố";
        break;
      }
    }
    if (checkSoNT != "không phải số nguyên tố") {
      soNguyenToDauTien.push(z);
    }
  }
  for (j = 0; j <= arrSoN.length; j++) {
    if (arrSoN[j] >= 2) {
      checkSoNT(arrSoN[j]);
      if (soNguyenToDauTien.length <= 0) {
        document.getElementById("soNguyenToDauTien").innerHTML = -1;
      } else {
        document.getElementById("soNguyenToDauTien").innerHTML =
          "Số nguyên tố đầu tiên trong dãy là: " + soNguyenToDauTien;
        break;
      }
    }
  }
}

// Câu 9: Đếm số nguyên
//Thêm số thực
function themSoThuc() {
  var n = document.getElementById("soThuc").value * 1;
  arrSoN.push(n);
  for (var i = 0; i < arrSoN.length; i++) {
    arrSoN.push;
    document.getElementById("themSoThuc").innerHTML =
      "Dãy số sau khi được thêm vào là: " + arrSoN;
  }
}
//Đếm số nguyên
function demSoNguyen() {
  var demSoNguyen = "";
  for (var i = 0; i < arrSoN.length; i++) {
    if (Math.floor(arrSoN[i]) / arrSoN[i] == 1) {
      demSoNguyen++;
    }
    document.getElementById("demSoNguyen").innerHTML =
      "Tổng cộng có: " + demSoNguyen + " số nguyên trong dãy";
  }
}

// Câu 10: So sánh số lượng số âm và dương
function soSanhSo() {
  var ketQuaSoSanh = "";
  var arrSoDuong = [];
  var arrSoAm = [];
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      arrSoDuong.push(arrSoN[i]);
    } else {
      arrSoAm.push(arrSoN[i]);
    }
  }
  if (arrSoDuong.length > arrSoAm.length) {
    ketQuaSoSanh = "Số lượng số dương nhiều hơn số lượng số âm";
  } else if (arrSoAm.length > arrSoDuong.length) {
    ketQuaSoSanh = "Số lượng số âm nhiều hơn số lượng số dương";
  } else {
    ketQuaSoSanh = "Số lượng số âm và số dương bằng nhau";
  }
  document.getElementById("soSanh").innerHTML = ketQuaSoSanh;
}
