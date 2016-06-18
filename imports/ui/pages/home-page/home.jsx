import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
    render(){
        return(
            <div className="container">
            <h1>Home Page</h1>
            <hr/>
              <div className="card-columns">
                <div className="card">
                  <img className="card-img-top" src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"241"%20height%3D"200"%20viewBox%3D"0%200%20241%20200"%20preserveAspectRatio%3D"none"><!--%0ASource%20URL%3A%20holder.js%2F100px200%2F%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--><defs><style%20type%3D"text%2Fcss"><!%5BCDATA%5B%23holder_153af35342c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%5D%5D><%2Fstyle><%2Fdefs><g%20id%3D"holder_153af35342c"><rect%20width%3D"241"%20height%3D"200"%20fill%3D"%23777"%2F><g><text%20x%3D"89.8046875"%20y%3D"105.55">241x200<%2Ftext><%2Fg><%2Fg><%2Fsvg>' alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title that wraps to a new line</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
                <div className="card card-block">
                  <blockquote className="card-blockquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>
                      <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card">
                  <img className="card-img-top" src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"241"%20height%3D"200"%20viewBox%3D"0%200%20241%20200"%20preserveAspectRatio%3D"none"><!--%0ASource%20URL%3A%20holder.js%2F100px200%2F%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--><defs><style%20type%3D"text%2Fcss"><!%5BCDATA%5B%23holder_153af35342c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%5D%5D><%2Fstyle><%2Fdefs><g%20id%3D"holder_153af35342c"><rect%20width%3D"241"%20height%3D"200"%20fill%3D"%23777"%2F><g><text%20x%3D"89.8046875"%20y%3D"105.55">241x200<%2Ftext><%2Fg><%2Fg><%2Fsvg>' alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card card-block card-inverse card-primary text-xs-center">
                  <blockquote className="card-blockquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                    <footer>
                      <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-block text-xs-center">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card">
                  <img className="card-img" src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"241"%20height%3D"200"%20viewBox%3D"0%200%20241%20200"%20preserveAspectRatio%3D"none"><!--%0ASource%20URL%3A%20holder.js%2F100px200%2F%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--><defs><style%20type%3D"text%2Fcss"><!%5BCDATA%5B%23holder_153af35342c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%5D%5D><%2Fstyle><%2Fdefs><g%20id%3D"holder_153af35342c"><rect%20width%3D"241"%20height%3D"200"%20fill%3D"%23777"%2F><g><text%20x%3D"89.8046875"%20y%3D"105.55">241x200<%2Ftext><%2Fg><%2Fg><%2Fsvg>' alt="Card image"/>
                </div>
                <div className="card card-block text-xs-right">
                  <blockquote className="card-blockquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>
                      <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
        );
    }
}
