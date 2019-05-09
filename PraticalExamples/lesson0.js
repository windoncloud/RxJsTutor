// const interval = Rx.Observable.interval(500)
//                   .finally(() => print('All done!'))
//
// const subcription = interval.subscribe(x => print(x))
//
// setTimeout(() => {
//     subcription.unsubscribe()
// }, 3000)

const numbers = Rx.Observable.of(10, 100, 1000);

numbers.map(num => Math.log(num))
       .subscribe(x => print(x))

// const jsonString = '{"type":"Dog,"breed":"Pug"}'
const jsonString = '{"type":"Dog","breed":"Pug"}'
const apiCall = Rx.Observable.of(jsonString)
apiCall.map(json => JSON.parse(json))
       .subscribe(obj => {
           print(obj.type)
           print(obj.breed)
       })

const names = Rx.Observable.of('Simon', 'Garfunkle')

names.do(name => print(name))
    .map(name => name.toUpperCase())
    .do(name => print(name))
    .subscribe()

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}