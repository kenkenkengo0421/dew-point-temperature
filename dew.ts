var btn = document.getElementById("btn") as HTMLElement;
btn.onclick = function(){
  
  var temp: number = parseFloat((document.getElementById("input_t") as HTMLInputElement).value);
  var humi: number = parseFloat((document.getElementById("input_h") as HTMLInputElement).value);

  var res_1: number = 0;
  var res_2: number = 0;
  var res_3: number = 0;
  var res_4: number = 0;
  var res_5: number = 0;
  var res_6: number = 0;
  var res_7: number = 0;
  var res_8: number = 0;
  var res_9: number = 0;
  var res_10: number = 0;
  var res_dew: number = 0;

  res_1 = temp + 243.5;
  res_2 = 17.67 * temp;
  res_3 = res_2 / res_1; 
  res_4 = Math.exp(res_3);
  res_5 = 6.112 * res_4;
  res_6 = res_5 * humi / 100;
  res_7 = res_6 / 6.112;
  res_8 = Math.log(res_7);
  res_9 = 243.5 * res_8;
  res_10 = 17.67 - res_8;
  res_dew = res_9 / res_10;

  (document.getElementById('display') as HTMLElement).innerText = res_dew.toFixed(1);
};
