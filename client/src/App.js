import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();
        this.state = { file: "", message: "" };
    }

    uploadFile = (e) => {
        e.preventDefault();

        const data = new FormData();
        for (let i = 0; i < this.state.file.length; i++) {
            data.append("file", this.state.file[i]);
        }

        data.append("name", "Pluto Software"); // Any Additional Data to pass with the file
        axios
            .post("http://localhost:8020/api/upload", data)
            .then((response) => {
                this.setState({ message: "OK" });
            })
            .catch((err) => {
                this.setState({ message: "ERROR" });
            });
    };

    render() {
        return (
            <section>
                <form onSubmit={this.uploadFile} encType="multipart">
                    <input
                        type="file"
                        multiple
                        onChange={(e) =>
                            this.setState({ file: e.target.files })
                        }
                    />
                    <button type="submit">Submit</button>
                </form>

                <h3>{this.state.message}</h3>
            </section>
        );
    }
}

export default App;
