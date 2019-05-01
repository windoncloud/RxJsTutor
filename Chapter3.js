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

function Programmer() {

}

Programmer.create = function () {
    console.log('Programmer.create');
    return new Programmer();
}

Programmer.prototype.code = function () {
    console.log('Programmer.code');
    return 'Hello World';
}

const morgan = Programmer.create();
morgan.code();

function map(project) {
    return new Rx.Observable(observer => {
        this.subscribe({
            next: value => observer.next(project(value)),
            error: err => observer.error(err),
            complete: () => observer.complete(),
        })
    })
}

// class Observable {
//     constructor() {
//         // 构造函数的实现
//     }
// }
//
// Observable.of = functionToImplementOf;
// console.log('Observable.of', Observable.of)
// Observable.prototype.map = implementationOfMap;
