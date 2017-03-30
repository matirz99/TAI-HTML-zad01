window.addEventListener('DOMContentLoaded', function() {
  console.log('cc');
  var a = document.getElementsByClassName('in_A');
  var s = document.getElementsByClassName('out_S');
  var cOut = document.getElementsByClassName('out_C');
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
    if ( outS (a_high,b_high,c_high) == false) {
      s[0].style.display = 'block';
      s[1].style.display = 'none';
      s[2].style.display = 'none';
    } else {
      s[0].style.display = 'none';
      s[1].style.display = 'block';
      s[2].style.display = 'none';
    }
    if ( outC (a_high,b_high,c_high) == false) {
      cOut[0].style.display = 'block';
      cOut[1].style.display = 'none';
      cOut[2].style.display = 'none';
    } else {
      cOut[0].style.display = 'none';
      cOut[1].style.display = 'block';
      cOut[2].style.display = 'none';
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
  if ( outS (a_high,b_high,c_high) == false) {
    s[0].style.display = 'block';
    s[1].style.display = 'none';
    s[2].style.display = 'none';
  } else {
    s[0].style.display = 'none';
    s[1].style.display = 'block';
    s[2].style.display = 'none';
  }
  if ( outC (a_high,b_high,c_high) == false) {
    cOut[0].style.display = 'block';
    cOut[1].style.display = 'none';
    cOut[2].style.display = 'none';
  } else {
    cOut[0].style.display = 'none';
    cOut[1].style.display = 'block';
    cOut[2].style.display = 'none';
  }
});
};
console.log('cc');
var c = document.getElementsByClassName('in_C');
var c_low = false;
var c_high = false;
c[0].style.display = 'none';
c[1].style.display = 'block';
c[2].style.display = 'none';
console.log(c);
console.log('napis', 2+2);

for (var i = 0; i < c.length; i++) {
c[i].addEventListener('click', function() {
  console.log('click');
  if (c_low == false) {
      c[0].style.display = 'block';
      c[1].style.display = 'none';
      c[2].style.display = 'none';
      c_low = true;
      c_high = false;
  } else {
    c[0].style.display = 'none';
    c[1].style.display = 'block';
    c[2].style.display = 'none';
    c_low = false;
    c_high = true;
  }
  if ( outS (a_high,b_high,c_high) == false) {
    s[0].style.display = 'block';
    s[1].style.display = 'none';
    s[2].style.display = 'none';
  } else {
    s[0].style.display = 'none';
    s[1].style.display = 'block';
    s[2].style.display = 'none';
  }
  if ( outC (a_high,b_high,c_high) == false) {
    cOut[0].style.display = 'block';
    cOut[1].style.display = 'none';
    cOut[2].style.display = 'none';
  } else {
    cOut[0].style.display = 'none';
    cOut[1].style.display = 'block';
    cOut[2].style.display = 'none';
  }
});
}

function myXOR(a,b) {
return ( a || b ) && !( a && b );
}

function outS(a,b,c) {
  return myXOR(myXOR(a,b),c);
}
function outC(a,b,c) {
  return ( ( myXOR (a,b) &&  c ) || ( a && b ) )
}

});
