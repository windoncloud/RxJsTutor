let clicks = Rx.Observable.fromEvent(document, 'click')

clicks
    .map(e => parseInt(Math.random() * 10))
    .do(score => print('Click scored' + score))
    .scan((highScore, score) => highScore + score)
    .subscribe(highScore => print(`High Score ${highScore}`))

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}