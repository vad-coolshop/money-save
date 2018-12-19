import React, { Component } from 'react';

// --------- blog




// // -------- previsioni meteo ----- Ajax data e grosse modifiche degli State
//
// import SearchBar from '../containers/search_bar';
// import WeatherList from "../containers/weather-list";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <SearchBar/>
//                 <WeatherList/>
//             </div>
//         )
//     }
// }

// // ------- libreria ------- Azioni
//
// import BookList from '../containers/book-list'
// import BookDetail from '../containers/book-detail'
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <BookList/>
//                 <BookDetail/>
//             </div>
//         );
//     }
// }

// -------- Youtube simulator -------- API Key
//
// import _ from 'lodash';
// import SearchBar from './search_bar';
// import YTSearch from 'youtube-api-search';
// import VideoList from './video_list';
// import VideoDetail from './video_detail';
//
// const API_KEY = 'AIzaSyCquhEJT5kBeD5VfhegPpmJS-oPM-ycxio';
//
// class App extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             videos: [],
//             selectedVideo: null
//         };
//
//         this.videoSearch('surf');
//     }
//
//     videoSearch(term) {
//
//         YTSearch({key: API_KEY, term:term}, (videos) => {
//             this.setState({
//                 videos: videos,
//                 selectedVideo: videos[0]});
//         });
//
//     }
//
//     render() {
//
//         const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
//         return (
//             <div>
//                 <SearchBar onSearchTermChange={videoSearch} />
//                 <VideoDetail video={this.state.selectedVideo}/>
//                 <VideoList
//                     onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
//                     videos={this.state.videos}
//                 />
//             </div>
//         );
//     }
// }

export default App;