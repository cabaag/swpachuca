import styles from './_Animation.scss';
import React from 'react';

export default class Animation extends React.Component {
  sprite;
  animation;
  frames;
  width;
  height;
  interval;

  constructor(props) {
    super(props);
    this.sprite = new Image();
    this.sprite.src = this.props.src;

    this.frames = this.props.frames;
    this.width = this.props.width;
    this.height = this.props.height;
    this.interval = this.props.interval;
  }

  componentDidMount() {
    let canvas = document.getElementById(this.props.id);
    canvas.width = this.width / this.frames;
    canvas.height = this.height;
    var ctx = canvas.getContext("2d");
    
    this.animation = this.initSprite({
      context: ctx,
      width: this.width,
      height: this.height,
      image: this.sprite,
      numberOfFrames: this.frames,
      loop: true,
      interval: this.interval
    });
    this.sprite.addEventListener("load", this.spriteLoop.bind(this));
  }

  spriteLoop() {
    window.requestAnimationFrame(this.spriteLoop.bind(this));
    this.animation.update();
    this.animation.render();
  }

  initSprite(options) {
    let that = {
      context: options.context,
      width: options.width,
      height: options.height,
      image: options.image,
      interval: options.interval || 600,
      loop: options.loop,
      frameIndex: 0,
      tickCount: 0,
      timeCount: 0,
      ticksPerFrame: 4,
      numberOfFrames: options.numberOfFrames || 1,
      render: function () {
        that.context.clearRect(0, 0, that.width, that.height);
        that.context.drawImage( that.image,
          that.frameIndex * that.width / that.numberOfFrames,
          0,
          that.width / that.numberOfFrames,
          that.height,
          0,
          0,
          that.width / that.numberOfFrames,
          that.height 
        );
      },
      update: function () {
        that.tickCount += 1;
        that.timeCount += 1;
        if (that.timeCount > that.interval && that.tickCount > that.ticksPerFrame) {
          that.tickCount = 0;
          if (that.frameIndex < that.numberOfFrames - 1) {	
            that.frameIndex += 1;
          }	else if (that.loop) {
            that.frameIndex = 0;
            that.timeCount = 0;
          }
        }
      },
    };
    return that;
  }

  render() {
    let Animation = (
      <div style={{width: '100%'}}>
        <canvas id={this.props.id}></canvas>
      </div>
    );
    return Animation;
  }
}