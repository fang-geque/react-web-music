import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Slider } from "antd";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { getSongDetailAction } from "../store/actionCreators";

export default memo(function FGQAppPlayerBar() {
  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(1469628663));
  }, [dispatch]);

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img
                src="https://p2.music.126.net/wcMr7kNgiasF1TljEqqRhQ==/109951165219432045.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <a href="#/" className="singer-name">
                要不要买菜
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}></Slider>
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="divider">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});
