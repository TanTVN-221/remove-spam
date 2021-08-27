const ls = [
  "Ai cần $ gấp ib mình hỗ trợ.$ từ 500k- 4tr. 0%lãi suất Kb Zal.o: 0962 83 83 72 #xớm làng",
  " khiến bạn TỰ TI khi gần mọi ng xung quanh đặc biệt là GẦN CHỒNG, GẦN NG YÊU phải ko??",
  "BẠN MẤT VIỆC, KHÓ KHĂN KHI DỊCH BÙNG PHÁT!",
  "TIN CỰC CĂNG!!! VN phát hiện chủng biến thể virus mới",
  'Tiểu thư nhà lành lộ seri 12 clip trong 1 chịch trai gây bão xem ngay tại',
  'Cho va.y siêu tốc 1tr - 4tr không lai'
]

document.addEventListener("scroll", function () {
  var liTags = document.getElementsByTagName("li");
  var searchText = ls;
  searchText.forEach((element) => {
    for (var i = 0; i < liTags.length; i++) {
      if (liTags[i].textContent.indexOf(element) !== -1) {
        console.log(1);
        liTags[i].textContent = "";
      }
    }
  });
});
