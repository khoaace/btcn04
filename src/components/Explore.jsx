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
  var photos = props.photos.map(i => {
    i.customOverlay = (
      <div style={captionStyle}>
        <div>Title : {i.caption}</div>
        Owner : {i.info.owner}
        <br />
        Views : {i.info.views}
        {i.hasOwnProperty('tags') && setCustomTags(i)}
      </div>
    );
    return i;
  });
  return (
    <frameElement>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.nextPage}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            <img
              src="https://cdn.dribbble.com/users/359314/screenshots/2379673/untitled-3.gif"
              style={{ width: '300px', height: '200px' }}
            />
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
              props.onClickImage(props.photos[i].src);
            }}
          />
        </div>
      </InfiniteScroll>
    </frameElement>
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
