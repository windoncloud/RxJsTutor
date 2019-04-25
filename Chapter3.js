const source = [1,2,3,4]
const result = source.filter(x => x %2 ===0 ).map(x => x*2)
console.log('result', result)
console.log('source', source)

const onSubscribe33 = observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
}
const source$33 = Rx.Observable.create(onSubscribe33);

const result$ = source$33.filter(x => x % 2 === 0).map(x => x * 2)

console.log('result$', result$)

result$.subscribe(console.log)