document.getElementById("btnKQ1").onclick = function() {
    // Đầu vào
    var mon_1 = document.getElementById("mon_1").value*1;
    var mon_2 = document.getElementById("mon_2").value * 1;
    var mon_3 = document.getElementById("mon_3").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemTongKet = 0;
    // xử lý
    diemTongKet = mon_1 + mon_2 + mon_3 + khuVuc + doiTuong;
    if (mon_1 == 0 || mon_2 == 0 || mon_3 == 0) {
        document.getElementById("txtFooter1").innerHTML = "Không đủ điểu kiện vì có môn 0 điểm!";
        document.getElementById("txtFooter1").classList.add("alert-danger");
    } else if (diemTongKet >= diemChuan) {
        document.getElementById("txtFooter1").innerHTML = "Chúc mừng bạn đã đậu! Điểm của bạn là: " + diemTongKet;
        document.getElementById("txtFooter1").classList.add("alert-success");
    } else if (diemTongKet < diemChuan) {
        document.getElementById("txtFooter1").innerHTML = "Chúc bạn may mắn lần sau!";
        document.getElementById("txtFooter1").classList.add("alert-warning");
    }
}
// bai 2
document.getElementById("btnKinh").onclick = function() {
    var kw_1 = 500;
    var kw_2 = 650;
    var kw_3 = 850;
    var kw_4 = 1100;
    var kw_5 = 1300;
    var tenKhachHang = document.getElementById("khachHang").value;
    var soDien = document.getElementById("soDien").value * 1;
    var tongTien = 0;
    if (soDien <= 50) {
        tongTien = soDien * kw_1;
    } else if (soDien > 50 && soDien <= 100) {
        tongTien = (soDien - 50) * kw_2 + 50 * kw_1;
    } else if (soDien > 100 && soDien <= 200) {
        tongTien = 50 * kw_1 + 50 * kw_2 + (soDien - 50 - 50) * kw_3;
    } else if (soDien > 200 && soDien <= 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soDien - 50 - 50 - 100) * kw_4;
    } else if (soDien > 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soDien - 50 - 50 - 100 - 150) * kw_5;
    }
    document.getElementById("tinhTien").innerHTML = "Tên khách hàng: " + tenKhachHang + " Tổng tiền: " + tongTien + "VNĐ";
}