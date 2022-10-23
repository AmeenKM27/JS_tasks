const fileheader=document.getElementById("headerss")
const fruits=document.getElementById("root")

const headers= React.createElement("h1",null,'FRUITS')
const Items=()=>{
    return(
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
            <li>Banana</li>
            <li>Pineapple</li>
        </ul>
    )
}

ReactDOM.render(headers,fileheader)
ReactDOM.render(<Items />,fruits)

