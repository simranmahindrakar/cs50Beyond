ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
  
//------------------------------------------------------------ 
function formatName (user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Dodo',
  lastName: 'Baby'
};

const element = (
  <h1> Hello {formatName} </h1>
);

ReactDOM.render(
  element , document.getElementById('root')
);

//---------------------------------------------------------

function tick () {
  const element = (
    <div>
      <h1> Hello World</h1>
      <h2> It is {new Date().toLocaleDateString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

//--------------------------------------------------------------------

function Welcome (props) {
  return <h1>Welcome {props.name} </h1>;   //component
}
const element = (<Welcome name="Dodo" />);   //element representing component

ReactDOM.render(element, document.getElementById('root'));
//----------------------------------------------------------------------

function Welcome (props) {
  return <h1> Hello, {props.name} </h1>;
}

//App Component which renders Welcome compo multiple times
// simple example of abstraction

function App() {
  return (                            //we need a parent elt here .i.e div
    <div>                      
    <Welcome name="Dodo"/>
    <Welcome name="Tim"/>
    <Welcome name="Boo"/>
    </div>
  );
}

ReactDOM.render( <App/>, document.getElementById('root'));