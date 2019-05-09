const observable = Rx.Observable.create(observer => {
    observer.next('good')
    observer.next('great')
    observer.next('grand')

    throw 'catch me!'

    observer.next('wonderful')
})

observable.catch(err => print(`Error caught: ${err}`))
    .retry(2)
    // .subscribe(val => print(val))

// const observable2 = Rx.Observable.of('Hello')
// const observable2 = Rx.Subject.of('Hello')
const subject = new Rx.Subject()

// const subA = observable2.subscribe(val => print(`Sub A: ${val}`))
// const subB = observable2.subscribe(val => print(`Sub B: ${val}`))

const subA = subject.subscribe(val => print(`Sub A: ${val}`))
const subB = subject.subscribe(val => print(`Sub B: ${val}`))

subject.next('Hello')

setTimeout(() => {
    subject.next('World')
}, 1000)

const observables= Rx.Observable.fromEvent(document, 'click')
const clicks = observables.do(_ => print('Do One Time!'))

const subject2 = clicks.multicast(() => new Rx.Subject() )

const subA2 = subject2.subscribe(c => print(`Sub A:${c.timeStamp}`))
const subB2 = subject2.subscribe(c => print(`Sub B:${c.timeStamp}`))

subject2.connect();

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}