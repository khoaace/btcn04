import React from 'react';

const Photo = props => {
  const renderTags = props.photo.tags.map((tag, index) => (
    <span className="label label-primary" key={index}>
      <a
        href={'/tag/' + tag._content}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        {tag._content}
      </a>
    </span>
  ));
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="card-container centermx drop-shadow lifted">
          <div className="card">
            <div className="card-header">{props.photo.title}</div>
            <div className="card-body">
              <center>
                <img src={props.urlPhoto} alt="imagess" />
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <center>
        <small> Upload by </small>
        <strong>{props.photo.username}</strong>
        <h5>Description : {props.photo.description}</h5>
        <hr style={{ margin: '8px auto' }} />
        <div className="container"> {renderTags}</div>
      </center>
      <br /> <br />
    </div>
  );
};

export default Photo;
