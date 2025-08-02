import { Fragment } from "react";


export default function App() {

    return (<>
        <h1>Fragment In React JS</h1>
        <Data />
        <Data />
        <Data />
        <Data />
    </>

    )
}

function Data() {
    return (
        <Fragment>
            <span>Hello</span><b>user</b>

        </Fragment>
    )
}
