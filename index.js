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

  
  snt(100)

  // bai2

  var arr1 = [1, 2, 3, 4, 5, 6, 7];

  var arr2 = [1, 2, 3, 9, 7];

  var arr3 = new Set();

  arr1.forEach((x) => {
    arr3.add(x);
  });
  let results = [];
  arr2.forEach((x) => {
    if (arr3.has(x)) results.push(x);
  });

  console.log(results);

  //  bai 3
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
      console.log(n, ' là số nguyên tố');
    } else {
      console.log(n, '  không phải là  số nguyên tố');
    }
  }
  kiem_tra_snt(121);