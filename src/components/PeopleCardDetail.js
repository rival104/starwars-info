import React, { Component, Fragment } from "react";
import UIfx from "uifx";
import wookie_fx from "./wookie_sound.mp3";

class PeopleCardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDetail: {},
      peopleDetail: {},
      wookieDetail: {},
      url: this.props.url,
      toggleWokiee: true
    };
  }

  componentDidMount() {
    const { url } = this.state;

    fetch(url)
      .then(response => response.json())
      .then(peoples => {
        this.setState({ currentDetail: peoples, peopleDetail: peoples });
        console.log(peoples);
      });

    fetch(url+"?format=wookiee")
      .then(response => response.json())
      .then(peoples => {
        this.setState({ wookieDetail: peoples });
        console.log(peoples);
      });
  }

  formatWookie = () => {
    const wookie = new UIfx(wookie_fx, {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    });

    if(this.state.toggleWokiee){
      wookie.play();
      this.setState({ currentDetail: this.state.wookieDetail, toggleWokiee: false });
    }else{
      this.setState({
        currentDetail: this.state.peopleDetail,
        toggleWokiee: true
      });
    }
  };

  goBack = () => {
    this.props.hideMore();
  };

  render() {
    const { url, name } = this.props;

    // const {
    //   height,
    //   mass,
    //   hair_color,
    //   skin_color,
    //   eye_color,
    //   birth_year,
    //   gender
    // } = this.state.peopleDetail;

    const labels = Object.keys(this.state.currentDetail);
    const values = Object.values(this.state.currentDetail);

    const detail = (
      <Fragment>
        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[0]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[0]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[1]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[1]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[2]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[2]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[3]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[3]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[4]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[4]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[5]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[5]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[6]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[6]}</p>
          </div>
        </article>

        <article className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{labels[7]}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{values[7]}</p>
          </div>
        </article>
      </Fragment>
    );
  

    return (
      <div className="dib br3 pa3 ma2 bw2 shadow-5">
        <h1 className="red">{name}</h1>
        {detail}
        <p>Source: "https://starwars.fandom.com/wiki/Main_Page"</p>
        <p hidden>Link: {url}</p>
        <button
          type="button"
          className="btn btn-warning ma2"
          onClick={this.formatWookie}
        >
          Speak Wookie!
        </button>
        <button type="button" className="btn btn-primary" onClick={this.goBack}>
          Back
        </button>
      </div>
    );
  }
}

export default PeopleCardDetail;
