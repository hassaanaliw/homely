import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "https://www.gocomics.com/random/calvinandhobbes/",
            comicRawData: "",
            comicData: {},
            isLoaded: false
        };
        this.parseComic = this.parseComic.bind(this);
    }

    componentDidMount() {
        let todayDate = new Date().getDate();
        const todayComic = localStorage.getItem(todayDate);
        if(todayComic){
            this.setState({comicData: JSON.parse(todayComic), isLoaded: true})
        } else{
        this.fetchData();
    }
    }

    clearStorage(){
        this.setState({isLoaded: false});
        localStorage.clear();
        this.fetchData();
    }



    fetchData() {
        fetch(this.state.url)
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.text();
            })
            .then((data) => {
                // setState calls the render function again
                this.setState({comicRawData: data, isLoaded: false});
                this.setState({comicData: this.parseComic(), isLoaded: true})

            })
            .catch(error => console.log(error));
    }

    parseComic() {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(this.state.comicRawData, "text/html");

        let imageElement = htmlDoc.getElementById("js-item-start");
        let imageURL = imageElement.getAttribute('data-image');
        let imageDate = imageElement.getAttribute("data-feature-item-date");
        let imageAuthor = imageElement.getAttribute("data-creator");
        let imageName = imageElement.getAttribute("data-title");

        var json = {
            'image_url': imageURL,
            'image_date': imageDate,
            'image_author': imageAuthor,
            'image_name': imageName
        };

        let todayDate = new Date().getDate();
        localStorage.setItem(todayDate,JSON.stringify(json));


        return json


    }


    render() {

        if (!this.state.isLoaded) {
            return (
                <div className="App">
                    <div className="loader">
                        <h1>Loading...</h1>

                    </div>
                </div>
            )
        }

        let data = this.state.comicData;
        let _this = this;

        return (
            <div className="App">
                <div className="imageHolder">
                    <img className="comic-image" src={data.image_url}>
                    </img>
                    <div className="comic-details">
                     <strong>{data.image_date}</strong> <br/>
                        {data.image_name} -- {data.image_author}
                    </div>
                </div>

                <button style={{marginTop: '15px'}} onClick={() => _this.clearStorage()}>Random</button>
            </div>
        );
    }
}

export default App;
