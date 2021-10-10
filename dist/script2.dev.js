"use strict";

document.getElementById("npstable").style.visibility = "collapse";
document.getElementById("siptable").style.visibility = "collapse";
document.getElementById("ppftable").style.visibility = "collapse";
document.getElementById("sctable").style.visibility = "collapse";

function clicked() {
  var monthly = document.getElementById("income").value;
  var investment_option = document.getElementById("investment_plan").value;
  investment_option = parseInt(investment_option);
  var time = document.getElementById("year").value;
  var age = document.getElementById("age").value;
  document.getElementById("npstable").style.visibility = "collapse";
  document.getElementById("siptable").style.visibility = "collapse";
  document.getElementById("ppftable").style.visibility = "collapse";
  document.getElementById("sctable").style.visibility = "collapse";

  function nps(month1, age) {
    document.getElementById("npstable").style.visibility = "visible";
    time1 = 60 - age;
    npsamount = month1 * Math.pow(1 + 10 / 1200, 12 * time1) / (10 / 1200);
    npsti = month1 * 12 * time1;
    npsie = npsamount - month1 * 12 * time1;
    npsma = 0.6 * npsamount;
    npsai = 0.4 * npsamount;
    document.getElementById('npsti').innerHTML = npsti;
    document.getElementById('npsie').innerHTML = npsie;
    document.getElementById('npsma').innerHTML = npsma;
    document.getElementById('npsai').innerHTML = npsai;
  }

  function sip(month2, time2) {
    document.getElementById("siptable").style.visibility = "visible";
    sipamount = month2 * (Math.pow(1 + 15 / 1200, 12 * time2 * 5) - 1) * ((1 + 15 / 1200) / (15 / 1200));
    sipti = month2 * 12 * time2 * 5;
    sipie = sipamount - month2 * 12 * time2 * 5;
    sipta = sipamount;
    document.getElementById('sipti').innerHTML = sipti;
    document.getElementById('sipie').innerHTML = sipie;
    document.getElementById('siptv').innerHTML = sipta;
  }

  function ppf(month3, time3) {
    document.getElementById("ppftable").style.visibility = "visible";
    ppfamount = month3 * (Math.pow(1 + 7 / 1200, 12 * time3 * 5) - 1) / (7 / 1200);
    ppfti = month3 * 12 * time3 * 5;
    ppfie = ppfamount - month3 * 12 * time3 * 5;
    ppftv = ppfamount;
    document.getElementById('ppfti').innerHTML = ppfti;
    document.getElementById('ppfie').innerHTML = ppfie;
    document.getElementById('ppftv').innerHTML = ppftv;
  }

  function saving(month4, time4) {
    document.getElementById("sctable").style.visibility = "visible";
    savingamount = month4 * (Math.pow(1 + 8 / 1200, 12 * time4 * 5) - 1) / (8 / 1200);
    scti = month4 * 12 * time4 * 5;
    scie = savingamount - month4 * 12 * time4 * 5;
    sctv = savingamount;
    document.getElementById('scti').innerHTML = scti;
    document.getElementById('scie').innerHTML = scie;
    document.getElementById('sctv').innerHTML = sctv;
  }

  if (investment_option == 1) {
    month1 = 0.4 * monthly;
    saving(month1, time);
  } else if (investment_option == 2) {
    month = 0.4 * monthly;
    ppf(month, time);
  } else if (investment_option == 3) {
    month = 0.4 * monthly;
    nps(month, age);
  } else if (investment_option == 4) {
    month = 0.4 * monthly;
    sip(month, time);
  } else {
    monthnps = 3 * monthly / 50;
    monthsc = 8 * monthly / 50;
    monthsip = 6 * monthly / 50;
    monthppf = 3 * monthly / 50;
    saving(monthsc, time);
    ppf(monthppf, time);
    nps(monthnps, age);
    sip(monthsip, time);
  }
}