// responsiveness
// dimensions api

// 750x320 ekran 1
// 50x50 view
// 680x300 ekran 2
// 

const t1 = { w: 500, h: 1000 };
const t2 = { w: 250, h: 500 };

const hScale = t1.w / t2.w; // sabitlenmis boyut / suanki boyut
const vScale = t1.h / t2.h; // sabitlenmis boyut / suanki boyut

function App() {
    return (
        <View style={{ width: 50 * hScale, height: 100 * vScale }} />
    )
}