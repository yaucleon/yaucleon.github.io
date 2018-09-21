


const e = React.createElement;

function Button(props){
  
    return e('button', 
             {onClick: () => props.onClick()}, 
             props.currState      
                     
    );
  
}





class Board extends React.Component {
    
   
  renderButton(i) {
      
    return e(Button, {value: this.props.buttons[i],
                     onClick: () => this.props.onClick(i),
                      currState: i == this.props.num ? 'X' : 'O'
                     });
        
                
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
    this.state = {  msg: 'Click any button to start!',
                    hit: 0,
                    miss: 0,
                    time: 10,
                    buttons: Array(9).fill(null),
                    num: 0,
                    gameover: false,
                    gamestart: false,
                    accuracy: 0
                 };
        this.updateTimer = this.updateTimer.bind(this);
        this.Tick = this.Tick.bind(this);
    
  }
    GameOver() {
        this.setState({msg: 'Game Over!'});
        this.setState({accuracy: ((this.state.hit / (this.state.hit + this.state.miss)) * 100).toFixed(1)});
    }
    
    updateTimer() {
        if (this.state.time > 0) {
             this.setState({time: this.state.time - 1});   
            }
        else {
            this.setState({gameover: true});
            clearInterval(this.Timer);
            this.GameOver();
        }
    }
    handleClick(i) {
        if (!this.state.gameover && !this.state.gamestart) {
            this.Start();
        }
        if (!this.state.gameover){
        if (i == this.state.num) {
           this.setState({ hit: this.state.hit + 1});
            this.Next();
        }  
        else {
            this.setState({ miss: this.state.miss + 1});
             }
            
        }
   }
    
    Tick() {
        this.updateTimer();
        
    }
    
    Start() {
        this.state.gamestart = true;
        this.setState({msg: 'Game Start!'});
        this.Timer = setInterval(this.Tick, 1000);
    }
    
    Next() {
        this.setState({num: Math.floor(Math.random() * 9)});
        
        
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
      buttons: this.state.buttons,
      onClick: i => this.handleClick(i),
      num: this.state.num
    })
  ),
  e(
    "div",
    { className: "game-info" },
      e("div",
        null,
        this.state.msg
       ),
    e(
      "div",
      null,
      'Time: ' + this.state.time
    ),
    e(
      "div",
      null,
      'Hit: ' + this.state.hit
    ),
    e(
      "div",
      null,
      'Miss: ' + this.state.miss
    ),
    e(
    "div",
    null,
    'Accuracy: ' + this.state.accuracy + '%')
  )
)
           
    );


}
            
    
}

const domContainer = document.querySelector('#game_container');
ReactDOM.render(e(ClickGame), domContainer);