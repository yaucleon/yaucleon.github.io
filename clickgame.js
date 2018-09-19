


const e = React.createElement;

function Button(props){
  
    return e('button', 
             {onClick: () => props.handleClick()}, 
             'X'        
    );
  
}

function Square(props) {
    return e('square',
             {onClick: () => props.onClick()},
            'X'
    );
}



class Board extends React.Component {
    
   
  renderButton(i) {
    return Button(i);
        
                
  }
  

  render() {
    return (
      
e(
  "div",
  null,
  e(
    "div",
    { className: "board-row" },
    this.renderButton(0),
    this.renderButton(1),
    this.renderButton(2)
  ),
  e(
    "div",
    { className: "board-row" },
    this.renderButton(3),
    this.renderButton(4),
    this.renderButton(5)
  ),
  e(
    "div",
    { className: "board-row" },
    this.renderButton(6),
    this.renderButton(7),
    this.renderButton(8)
  )
)
    );
      
  }
}



class ClickGame extends React.Component {
    constructor(props) {
    super(props);
    this.state = {  hit: 0,
                    miss: 0,
                    time: 0,
                    buttons: Array(9).fill(null)
                 };
  }
    renderTimer(time) {
      return 'Time: ' + time;
  }
    handleClick(i) {
   this.state.hit += 1;
   }
    render() {
        return (
      e(
  "div",
  { className: "game" },
  e(
    "div",
    { className: "game-board" },
    e(Board, {
      buttons: this.state.squares,
      onClick: i => _this.handleClick(i)
    })
  ),
  e(
    "div",
    { className: "game-info" },
    e(
      "div",
      null,
      time
    ),
    e(
      "div",
      null,
      hit
    ),
    e(
      "div",
      null,
      miss
    )
  )
);
            
    );


}

//const domContainer = document.querySelector('#game_container');
ReactDOM.render(e(ClickGame), document.getElementsById('root'));