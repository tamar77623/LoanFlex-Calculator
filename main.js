let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let inp5 = document.getElementById('inp5');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4');
let span5 = document.getElementById('span5');
let span6 = document.getElementById('span6');
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1700);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = `please enter ${inp1.placeholder}`;
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = `please enter ${inp2.placeholder}`;
        h3text();
        return;
    }
    if(inp3.value === ""){
        h3.innerText = `please enter ${inp3.placeholder}`;
        h3text();
        return;
    }
    if(inp4.value === ""){
        h3.innerText = `please enter ${inp4.placeholder}`;
        h3text();
        return;
    }
    if(inp5.value === ""){
        h3.innerText = `please enter ${inp5.placeholder}`;
        h3text();
        return;
    }
    account();
}
function account() {
    let netloanamount = Number(inp1.value) - Number(inp2.value);
    console.log("مبلغ القرض الصافي:", netloanamount);
    let r = (Number(inp3.value) / 100) / 12;
    console.log("الفائدة الشهرية:", r);
    let n = Number(inp4.value) * 12;
    console.log("عدد الأشهر:", n);
    let powered = Math.pow(1 + r, n);
    let M = netloanamount * ((r * powered) / (powered - 1));
    console.log("القسط الشهري:", M.toFixed(2));
    let Totalbenefits = (M * n) - netloanamount;
    console.log("إجمالي الفوائد:", Totalbenefits.toFixed(2));
    let Deductionrate = (M / Number(inp5.value)) * 100;
    console.log("نسبة الاستقطاع من الراتب %:", Deductionrate.toFixed(2));
    span1.innerText = `Net loan amount: ${Math.round(netloanamount)}`;
    span2.innerText = `Monthly interest: ${Math.round(r)}`;
    span3.innerText = `Number of months: ${Math.round(n)}`;
    span4.innerText = `Monthly installment: ${M.toFixed(2)}`;
    span5.innerText = `Total benefits: ${Math.round(Totalbenefits)}`;
    span6.innerText = `Salary deduction percentage: ${Deductionrate.toFixed(2)}`;
}