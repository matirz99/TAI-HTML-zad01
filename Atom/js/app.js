window.addEventListener('DOMContentLoaded', function() {
  console.log('cc');
  var a = document.getElementsByClassName('in_A');
  var a_low = false;
  var a_high = false;
a[0].style.display = 'none';
a[1].style.display = 'block';
a[2].style.display = 'none';
console.log(a);
console.log('napis', 2+2);

for (var i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function() {
    console.log('click');
    if (a_low == false) {
        a[0].style.display = 'block';
        a[1].style.display = 'none';
        a[2].style.display = 'none';
        a_low = true;
        a_high = false;
    } else {
      a[0].style.display = 'none';
      a[1].style.display = 'block';
      a[2].style.display = 'none';
      a_low = false;
      a_high = true;
    }
  });
};
console.log('cc');
var b = document.getElementsByClassName('in_B');
var b_low = false;
var b_high = false;
b[0].style.display = 'none';
b[1].style.display = 'block';
b[2].style.display = 'none';
console.log(b);
console.log('napis', 2+2);

for (var i = 0; i < b.length; i++) {
b[i].addEventListener('click', function() {
  console.log('click');
  if (b_low == false) {
      b[0].style.display = 'block';
      b[1].style.display = 'none';
      b[2].style.display = 'none';
      b_low = true;
      b_high = false;
  } else {
    b[0].style.display = 'none';
    b[1].style.display = 'block';
    b[2].style.display = 'none';
    b_low = false;
    b_high = true;
  }
});
};

});
