import YTSearch from 'youtube-api-search';
const API = 'AIzaSyC6nOxjnzoBeT-7eGM_hLe5rcKo5NIabL0';

const Youtube = {
    search(term) {
        return new Promise(resolve => {
            YTSearch({ key: API, term: term }, (data) => {
                resolve(data.map(video => {
                    return {
                        title: video.snippet.title,
                        url: video.snippet.thumbnails.default.url,
                        description: video.snippet.description,
                        id: video.id.videoId,
                        etag: video.etag
                    }
                }));
            });
        });
    }
}

export default Youtube;