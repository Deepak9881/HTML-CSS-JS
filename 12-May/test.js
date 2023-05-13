class month1 {
    #mon = 10

    get month() {
        return this.#mon
    }
    set month(m) {
        this.#mon = m
    }
    show() { console.log(this.#mon) }
}

let d = new month1()
d.mon = 15
console.log(d.mon)
//console.log(d.mon)