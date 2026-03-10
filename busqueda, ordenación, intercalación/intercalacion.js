const a = [1,4,6,8]
const b = [10,14,20]
const c = []
function intercalacion () {
    let i = 0
    let j = 0
    let k = 0
    const m = a.length - 1
    const n = b.length - 1

    while (i <= m && j <= n) {
        
        if (a[i] < b[j]) {
            c[k] = a[i]
            i++
        } else {
            c[k] = b[j]
            j++
        }
        k++
    }

    for (let r = i; r <= m; r++) {
        c[k] = a[r]
        k++
    }

    for (let r = j; r <= n; r++) {
        c[k] = b[r]
        k++
    }

    return c
}

const arr = intercalacion()
console.log(arr)