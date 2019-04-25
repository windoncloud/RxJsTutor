// // Cold Observable
// const cold$ = new Rx.Observable(observe => {
//     const producer = new Producer();
//     // 然后让observer去接收producer产生的数据
// })
// // Hot Observable
// const producer = new Producer();
// const cold$ = new Rx.Observable(observe => {
//     // 然后让observer去接收producer产生的数据
// })

console.log('RxObservable', Rx.Observable)
console.log('Rxmap', Rx.map)
const onSubscribe2 = observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
}

const source$2 = Rx.Observable.create(onSubscribe2);
source$2.map(x => x * x).subscribe(console.log)

const $mapped = source$2.map(x => x * x)
$mapped.subscribe(console.log)

console.log('source$2', source$2)
console.log('$mapped', $mapped)

const source$3 =  Rx.Observable.create(obs => {
    let num =1;
    setInterval(() => {
        if(num > 3) {
            obs.error()
        }
        obs.next(num++)
    }, 1000)
})
source$3.subscribe(console.log)