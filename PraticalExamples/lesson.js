// ytb/watch?v=2LCo926NFLI
const observable = Rx.Observable.create(observer => {
    observer.next('hello')
    observer.next('world')
})

observable.subscribe(val => print(val))

const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => console.log(click))

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolved!')
    }, 1000)
});

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('resolved2!')
//     }, 1000)
// });

const obsvPromise = Rx.Observable.fromPromise(promise)
// const obsvPromise = Rx.Observable.fromPromise([promise, promise2])

obsvPromise.subscribe(result => print(result))

const timer = Rx.Observable.timer(1000)

timer.subscribe(done => print('ding!!!' + done))

// const interval = Rx.Observable.interval(1000)
//
// interval.subscribe(int => print(new Date().getSeconds() + ' ~~~ ' + int))

const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})

mashup.subscribe(val => {print( val );console.log('mashup', val)})

const cold = Rx.Observable.create(observer => {
    observer.next(Math.random())
})
cold.subscribe(a => print(`Subscriber A: ${a}`))
cold.subscribe(b => print(`Subscriber B: ${b}`))

const hot = cold.publish()

hot.subscribe(a => print(`Subscriber A: ${a}`))
hot.subscribe(b => print(`Subscriber B: ${b}`))

hot.connect()

const timer2 = Rx.Observable.timer(1000)

timer2.finally(() => print('All done!'))
      .subscribe()

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}