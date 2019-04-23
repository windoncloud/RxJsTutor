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

const subscription = source$.subscribe(item => console.log(item));
setTimeout(() => {
    subscription.unsubscribe();
}, 3500)

