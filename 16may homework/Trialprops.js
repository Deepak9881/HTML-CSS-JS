export default function Trial(props) {



    function str1() {
        let a = ""
        a = a.concat(props.str)
        return a;
    }

    return <div>
        <p> {str1()}, {props.str}</p>
        <p>Array is {props.arr1}</p>
        {/* <p>Array is {props.x.name}</p> */}

    </div>
}