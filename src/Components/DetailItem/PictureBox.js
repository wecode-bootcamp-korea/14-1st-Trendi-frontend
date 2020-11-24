import React, { Component } from 'react';
import './PictureBox.scss';

class PictureBox extends Component {
  render() {
    return (
      <div className="PictureBox">
        <aside className="aside">
          <div className="pictureBox">
            <div className="bigPictureBox">
              <img className="bigPicture" src="./images/clothes1.png" alt="대표 사진" />
            </div>
            <div className="pictureListBox">
              {PICTURE_LIST.map((picture) => {
                return (
                  <div className="pictureList" key={picture.img}>
                    <img src={picture.img} alt="사진 리스트" />
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default PictureBox;

const PICTURE_LIST = [{ img: './images/clothes1.png' }, { img: './images/clothes2.png' }, { img: './images/clothes3.png' }, { img: './images/clothes4.png' }, { img: './images/clothes5.png' }];
