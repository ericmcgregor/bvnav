
nFormatter = function(num) {
    isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)

    //percent
    var toPercent = (formattedNumber) => {
      if(formattedNumber < 1 && formattedNumber > 0) {
        formattedNumber = formattedNumber * 100;
      }
      formattedNumber = Math.round(formattedNumber * 100) / 100;
      return formattedNumber;
    }

    if (num >= 1000000000) {
      formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '');
      formattedNumber = toPercent(formattedNumber) + 'G';
    } else if (num >= 1000000) {
        formattedNumber =  (num / 1000000).toFixed(1).replace(/\.0$/, '');
        formattedNumber = toPercent(formattedNumber) + 'MM';
    } else  if (num >= 1000) {
        formattedNumber =  (num / 1000).toFixed(1).replace(/\.0$/, '');
        formattedNumber = toPercent(formattedNumber) + 'K';
    } else {
        formattedNumber = num;
        formattedNumber = toPercent(formattedNumber);
    }
    if(isNegative) { formattedNumber = '-' + formattedNumber }




    return formattedNumber;
}
