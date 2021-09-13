import React from "react";
import AddFuzz from "./AddTemplate";
import Axios from "axios";

class MainPage extends React.Component {

    componentDidMount() {
        Axios.get("/template").then(res => {
            this.setState({templates: res.data.reverse()})
        });
    }

    render() {
        return (
            <React.Fragment>
                <div
                    className="w3-container w3-jumbo"
                    style={{ margin: "3rem", paddingLeft: "52rem" }}>
                    <button className="w3-button w3-black w3-large" onClick={() => {
                        document.getElementById("addFuzz").style.display = "block"
                    }}>Add template</button>
                </div>
                <AddFuzz />
            </React.Fragment>
        );
    }
}

export default MainPage;