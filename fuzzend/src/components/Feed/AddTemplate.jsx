import React from "react";
import Axios from "axios";

class AddTemplate extends React.Component {

    state = {
            template: "", 
        };


    fuzzForm = () => {
        Axios.put("/fuzz", {
            template: document.getElementById("template").value,
        }).then(res => {
           this.setState({template : res.data.fuzzer_code})
        }).then(() => { 
            var newTab = window.open("", "", "width=800,height=600");
            newTab.document.write(this.state.template);}).catch(err => {
            console.log(err);
        }
        );
    }
    

    submitForm = (e) => {
        e.preventDefault()
        Axios.post("/addtemplate", {
            content: document.getElementById("template").value
        }).then(res => {
            if (res.data.success) {
                console.log("success")
            }
        })
        var instances = document.getElementById("instances").value;
        for (var i = 0; i < instances; i++) {
            this.fuzzForm();
        }
    
    }
    


    render() {
        return (<div className="w3-modal w3-animate-opacity" id="addFuzz">
            <div className="w3-modal-content w3-card">
                <header className="w3-container w3-black">
                <span className="w3-button w3-display-topright w3-hover-none w3-hover-text-white" onClick={() => {
                    document.getElementById("addFuzz").style.display = "none"
                }}>close</span>
                    <h2>Add template</h2>
                </header>
                <form className="w3-container" onSubmit={this.submitForm}>
                    <div className="w3-section">
                        <p>
                            <label htmlFor="title">Template</label>
                        </p>
                            <textarea id="template" cols="85" rows="20" />
                        <p>
                            <label htmlFor="instances">Number of instances</label>
                            <input type="text" id="instances" className="w3-input w3-border w3-margin-bottom"/>
                        </p>
                        <p>
                            <button type="submit" className="w3-button w3-black">Post</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default AddTemplate;