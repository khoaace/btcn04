state = {
  urlAPI: `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=6517187ddd2d0dde34a502f0bb2fc991&extras=url_s%2Curl_l%2Cowner_name%2Cviews&per_page=20&page=0&format=json&nojsoncallback=1`,
  photos: [],
  currentPage: 0,
  hasMore: true,
};

const photos = (state = [], action) => {
  switch (action.type) {
    case 'GET_PHOTOS_DATA':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default photos;
