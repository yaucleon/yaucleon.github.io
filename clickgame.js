


const e = React.createElement;

function Button(props){
  
    return e('button', 
             {onClick: () => props.onClick()}, 
             'X'        
    );
  
}





class Board extends React.Component {
    
   
  renderButton(i) {
    return e(Button, {value: this.props.buttons[i],
                     onClick: () => this.props.onClick(i)
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
    this.state = {  hit: 0,
                    miss: 0,
                    time: 0,
                    buttons: Array(9).fill(null)
                 };
  }
    Timer() {
      this.setState({time: this.state.time + 1});
  }
    handleClick(i) {
        
        this.setState({ hit: this.state.hit + 1});
        setInterval(this.Timer, 50);
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
      onClick: i => this.handleClick(i)
    })
  ),
  e(
    "div",
    { className: "game-info" },
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
    )
  )
)
           
    );


}
             
    
}

const domContainer = document.querySelector('#game_container');
ReactDOM.render(e(ClickGame), domContainer);