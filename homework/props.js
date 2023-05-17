


export default function Trial(props) {
    let a = props.num1
    let str = ""
    for (let i = 1; i <= a; i++) {

        for (let j = 0; j < i; j++) {
            str = str.concat("*")
            console.log(str)
        }
        console.log(str)
    }
    return <div>{str}</div>
}