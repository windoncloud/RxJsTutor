let clicks = Rx.Observable.fromEvent(document, 'click')

// clicks
//     .map(e => parseInt(Math.random() * 10))
//     .do(score => print('Click scored' + score))
//     .scan((highScore, score) => highScore + score)
//     .subscribe(highScore => print(`High Score ${highScore}`))

// like reduce

// clicks.switchMap(click => {
//     return Rx.Observable.interval(500)
// })
// .subscribe(i => print(i))

const interval = Rx.Observable.interval(500)
const notifier = Rx.Observable.timer(2000)

interval.takeUntil(notifier)
    .finally(() => print('Complete!'))
    .subscribe(i => print(i))

const names =Rx.Observable.of('Bob', 'Jeff', 'Doug', 'Steve')

names.takeWhile(name => name != 'Doug')
    .finally(() => print('Complete! I found Doug'))
    .subscribe(i => print(i))

const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows')
// const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns')
const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns').delay(2000)

// const combo = Rx.Observable.zip(yin, yang)
const combo = Rx.Observable.forkJoin(yin, yang)
combo.subscribe(arr => print(arr))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}