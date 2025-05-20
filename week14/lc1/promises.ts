// single-threaded
// let x = 5;
// let y = 10;

// PROMISE -> resolve, reject

// function login(id: number) {
//     const user = 5;
//     if (user === id) {
//         // ....
//         return Promise.reject('no user found')
//     } else {
//         // ...
//         return Promise.resolve(user);
//     }
// }

// function echo(str: string, duration = 1000) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(str);
//         }, duration);
//     })
// }

// function echo2(str: string, duration = 1000) {
//     const arr = [1,2,3,4];
    
//     const p = new Promise(resolve => {
//         console.log(str);
//         resolve(str);
//     })

//     const filtered = arr.filter(i => i > 2);
//     console.log(filtered);

//     return p;
// }

// const p1 = echo('patika');
// p1.split(''); // -> ['p','a','t']

// const p2 = echo('musa').then(value => { console.log('success', value) }, value => { console.log('failed', value) })

// optional chaining
// echo(1).then().then().then().then().catch(error => {
//     console.log('error msg ->', error)
// })

// try {
//     echo(1).then()
//     echo(2).then()
//     echo(3).then()
//     echo(4).then()
//     echo(5).then()
// } catch (err) {
//     console.log('error msg catch ->', err);
// }

// async/await

// async function echo3(str: string, duration = 1000) {
//     let result = '';

//     setTimeout(() => {
//         result = str;
//     }, duration);

//     return result;
// }

// const r1 = echo3('patika'); // ''
// const r2 = await echo3('patika'); // 'patika'

export {}
