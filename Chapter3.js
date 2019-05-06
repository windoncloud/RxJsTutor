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
        const sub = this.subscribe({
            next: value => {
                try {
                    observer.next(project(value))
                } catch (e) {
                    observer.error(err)
                }
            },
            error: err => observer.error(err),
            complete: () => observer.complete()
        })
        return {
            unsubscribe:()=>{
                sub.unsubscribe();
            }
        }
    })
}

const $result = source$33.map(x => x.foo.bar)
console.log('$result', $result)

const result$1 = map.bind(source$33)(x => x * 2);
console.log('result$', result$1)
// class Observable {
//     constructor() {
//         // 构造函数的实现
//     }
// }
//
// Observable.of = functionToImplementOf;
// console.log('Observable.of', Observable.of)
// Observable.prototype.map = implementationOfMap;

// const sourcee$ = of(1,2,3)
console.log('sourcee$', sourcee$)

Rx.Observable.prototype.double = function () {
    // return this::map(x => x * 2);
}
