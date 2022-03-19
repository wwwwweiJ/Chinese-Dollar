function numberToTWCurrency(amount) {
    const chidollar = ["" , "拾" , "佰" , "仟"]
    const dollar = ["零","壹","貳","參","肆","伍","陸","柒","捌","玖"] //將國字0到1及單位分成兩個陣列
    function lastFour(amount){  //第一個函數處裡每組數字千位到個位
        const last = amount % 10000
        const lastarr = String(last).padStart(4,"0").split(``)//有些數字可能會中間夾雜0，這樣在處理後四位數的時候會直接消失，所以用padStart去補到滿四位數  
        let resultFour = []
        for (let a = 0 , b = lastarr.length-1 ; a < lastarr.length , b >=0 ; a++ , b--){
            if(lastarr[a] != 0 ){
                resultFour.push(dollar[lastarr[a]]) //設定如果每一位數不等於零就往內補中文數字跟單位
                resultFour.push(chidollar[b])}
            else {resultFour.push(dollar[lastarr[a]])}}
        if(resultFour[0] == "零" && resultFour[1] != "零" ){
                resultFour.splice(0,1)
        }
        else if(resultFour[resultFour.length-1]=="零" && resultFour[resultFour.length-2]!="零"){
                resultFour.splice(resultFour.length-1,1)
        }
        resultFour = String(resultFour).replace(/,/g,"")//將內容的逗號全部消除
        resultFour = resultFour.replace("零零零零","")//四個零就代表後面位數不存在
        resultFour = resultFour.replace("零零零","零")
        resultFour = resultFour.replace("零零","零")//這三行是將四個零替換成一個零
         return resultFour}
    function frontNumber(amount){//以下函數處理萬味數字以上的位數
        const frontArr = String(amount).split(``)
        let resultFront = []
        for (let c = 0 ,b = frontArr.length-5 ; c <frontArr.length-4 , b >-1 ; c++ ,b--){
            if (frontArr[c] != 0){
                resultFront.push(dollar[frontArr[c]])
                resultFront.push(chidollar[b])}
            else
                resultFront.push()
            }
        resultFront = String(resultFront).replace(/,/g ,"")
        return (`${resultFront}萬`)}
    if(amount > 9999){
        return (`${frontNumber(amount).concat(lastFour(amount))}圓整`) }
    return (`${lastFour(amount)}圓整`)}
console.log(numberToTWCurrency(1450))  // 印出 壹仟肆佰伍拾圓整
console.log(numberToTWCurrency(817))   // 印出 捌佰壹拾柒圓整
console.log(numberToTWCurrency(9527))  // 印出 玖仟伍佰貳拾柒圓
console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
console.log(numberToTWCurrency(1000001)) // 印出 壹佰萬零壹圓整

 