// bai 1 in so nguyen to

function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;
  
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
      flag = false;
    } else {
      // lặp từ 2 tới n-1
      for (var i = 2; i < n - 1; i++) {
        if (n % i == 0) {
          flag = false;
          break;
        }
      }
    }
  
    // Kiểm tra biến flag
    if (flag == true) {
      return true;
    } else {
      return false;
    }
  }
  
  function snt(n) {
    for (var i=1; i <= n; i++) {
      if (kiem_tra_snt(i)) {
        console.log(i);
      }
    }
  }