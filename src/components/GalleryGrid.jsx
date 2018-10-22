import React from 'react';
// Infinite Scroller
import InfiniteScroll from 'react-infinite-scroller';
//Grid gallery
import Gallery from 'react-grid-gallery';

const Explore = props => {
  var setCustomTags = i => {
    return i.tags.map(t => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  };
  console.log('hahah');
  console.log(props.photos);
  var photos = props.photos.map(i => {
    i.customOverlay = (
      <div style={captionStyle}>
        <div>Title : {i.caption}</div>

        {i.hasOwnProperty('tags') && setCustomTags(i)}
      </div>
    );
    return i;
  });
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.nextPage}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          <center>
            <img
              src="https://avatars.mds.yandex.net/get-pdb/1352825/92c6e289-4737-4ce3-a976-bd29e8225b38/orig"
              style={{ width: '300px', height: '200px' }}
              alt="Loading"
            />
          </center>
        </div>
      }
    >
      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          border: '1px solid #ddd',
        }}
      >
        <Gallery
          images={photos}
          enableImageSelection={false}
          onClickThumbnail={i => {
            props.onClickImage(props.photos[i]);
          }}
        />
      </div>
    </InfiniteScroll>
  );
};

//Style
const captionStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  maxHeight: '240px',
  overflow: 'hidden',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  color: 'white',
  padding: '2px',
  fontSize: '90%',
};

const customTagStyle = {
  wordWrap: 'break-word',
  display: 'inline-block',
  backgroundColor: 'white',
  height: 'auto',
  fontSize: '75%',
  fontWeight: '600',
  lineHeight: '1',
  padding: '.2em .6em .3em',
  borderRadius: '.25em',
  color: 'black',
  verticalAlign: 'baseline',
  margin: '2px',
};

export default Explore;
