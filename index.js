var inputData = `2
5
4
3,7,3,2
3
5
2,2,6,3,4`


function extractData(input){
    const splitArr = input.split(/\r?\n/);
    const result = [];
    const numOfTests = parseInt(splitArr[0]);
    let iter = 0;
    for(let i=0; i< numOfTests; i++){
        const testDataItem = {};
        testDataItem.money = parseInt(splitArr[iter+1]);
        testDataItem.icePrices = splitArr[iter+3].split(',').map(function(item){
            return parseInt(item);
        });

        result.push(testDataItem);
        iter = iter + 3;
    }
    return result;
}

function matchPrices(parsedData){
    const result = [];
    parsedData.forEach((dataItem) => {
        const itemResult = matchOnePrice(dataItem.money, dataItem.icePrices) 
        if(itemResult){
            result.push(itemResult);
        }    
    });
    return result;
}

function matchOnePrice(moneySum, icePrices){
    for(let i = 0; i<icePrices.length; i++){
        for(let j = 0; j < icePrices.length; j++){
            if(i !== j && (icePrices[i] + icePrices[j]) === moneySum ){
               return [i,j]; 
            }
        }
    }
}

var data = extractData(inputData); 
var result = matchPrices(data);
result.map((item) => {
    console.log(item);  
})

