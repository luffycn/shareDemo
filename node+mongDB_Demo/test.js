// // 生成器
// function* createIterator() {
//     yield new Promise((resolve,reject)=>{

//     })
//     yield 2;
//     yield 3;
// }
// // 生成器能像正规函数那样被调用，但会返回一个迭代器
// let iterator = createIterator();
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // 3


let draw = function (count) {
    // ...具体逻辑
    console.info(`剩余 ${count} 次`)
};
let residue = function* (count) {
    while (count > 0) {
        count--;
        yield draw(count);
    }
}
let star = residue(5);
let btn = document.createElement('button');
btn.id = 'start';
btn.textContent = '抽奖';
document.body.appendChild(btn);
document.getElementById('start').addEventListener('click', function () {
    star.next();
}, false)