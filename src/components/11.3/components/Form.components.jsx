import { render } from "express/lib/response";
import React from "react";

class From extends React.Component {
    render() {
        return (
            <div>
                <label>First name</label>
                <input/>
                <label>last name</label>
                <input/>
            </div>
        )
    }
}

export default From;