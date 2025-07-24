const name = "Jayant Ranjan Jha"
    let x = 10;
    let y = 20;
    let path = "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-cute-pomeranian-dog-in-street-royalty-free-image-1752090555.pjpeg?crop=1.00xw:0.668xh;0,0.145xh&resize=980:*"
    const userObj = {
        name: 'JAyant',
        email: "anil@test.com",
        age: 29
    }
    function callFun() {
        alert("funtion alert")
    }
     
    const fruit = (name) => {
        alert(name)
    }

    const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function fruit1() {
        return "Apple"
    }

    function sum(a, b) {
        return a + b;
    }
    function operation(a, b, op) {
        let result = 0;
        if (op == "+") {
            return a + b;
        } else if (op == "-") {
            return a - b;
        } else {
            return "kuch to karo zindagi me"
        }
    }



<h1>JSX with Curly Braces</h1>
            <h1>{name}</h1>
            <h1>{x + y}</h1>
            <h3>{fruit1()}</h3>
            <h1>{sum(1, 2)} </h1>
            <h3>{operation(5, 10, "+")}</h3>
            <h3>{operation(5, 10, "-")}</h3>
            <h3>{operation(5, 10, "")}</h3>
            <h3>{userObj.name}</h3>
            <h3>{userArray}</h3>
            <img src={path} />
            <input type="text" value={name} id={name} />
            <br />
            <button onClick={callFun} >Click ME!!!</button>
            <button onClick={() => fruit("apple")}>Apple</button>
            <button onClick={() => fruit("banana")}>Banana</button>