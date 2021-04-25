module.exports.timeStamp2Utc = (d) => {
    const date = new Date(d*1000);
    const date1 = String(date);
    const dateArr = date1.split(" ");
    var stringArr = " ";
    for (var i =0 ; i < 4 ; i++) {
        stringArr+=dateArr[i]+" "
    }
    return stringArr;
}
