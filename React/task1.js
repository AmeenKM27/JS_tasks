const fileheader=document.getElementById("headerss")
const fruits=document.getElementById("root")

const headers= React.createElement("h1",null,'FRUITS')
const items= React.createElement("ul",null,[
    React.createElement('li',null,'Apple'),
    React.createElement('li',null,'Orange'),
    React.createElement('li',null,'Mango'),
    React.createElement('li',null,'Pineapple'),
    React.createElement('li',null,'Banana')
])

ReactDOM.render(headers,fileheader)
ReactDOM.render(items,fruits)