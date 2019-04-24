// import {Observable} from 'rxjs/Observable';
//2.2.3
let onSubscribe = observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
}
//2.2.4
onSubscribe = observer => {
    let number = 1;
    const handle = setInterval(()=>{
        observer.next(number++);
        if (number > 3) {
            clearInterval(handle);
            observer.error('Something Wrong')
            observer.complete()
        }
    }, 1000)
    return {
        unsubscribe: () => {
            clearInterval(handle);
        }
    }
}
const infinitySubscribe = observer => {
    let number = 1;
    const handle = setInterval(() => {
        console.log('in infinitySubscribe', number)
        // unsubscribe后，不会停止，因为没complete⬆️
        // 但unsubscribe后断开连接，observer.next不会使Observer产生响应了⬇️
        observer.next(number++);
    }, 1000)
    return {
        unsubscribe: () => {
            // clearInterval(handle);
        }
    }
}
const infinitySource$ = new Rx.Observable(infinitySubscribe);
const source$ = new Rx.Observable(onSubscribe);
const theObserver = {
    next: item => console.log(item),
    error: err => console.log(err), // named certainly  , cannot renamed by other forms
    complete: () => console.log('No More Data')
}

source$.subscribe(theObserver);

// in shortly
// source$.subscribe(
//     item => console.log(item),
//     err => console.log(err), // err can be renamed by other forms
//     ()=> console.log('No More Data')
// );

// const subscription = source$.subscribe(item => console.log(item));
const subscription = infinitySource$.subscribe(item => console.log(item));
setTimeout(() => {
    subscription.unsubscribe();
}, 3500)

