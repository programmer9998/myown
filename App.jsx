import React from 'react';

class Component1 extends React.Component {
   render() {
      return (
         <div>
		   Component1!
         </div>
      );
   }
}

class Component2 extends React.Component {
   render() {
      var i = 1;
      return (
         <div>
            conditional displaying: {i == 1 ? 'True!' : 'False'}        
	     </div>
      );
   }
}

class Component3 extends React.Component {
   render() {
      return (
         <div>
		   display 1+1 with variables: {1+1}
         </div>
      );
   }
}

class Component4 extends React.Component {
   render() {
     var myStyle = {
         fontSize: 30,
         color: '#FF0000',
		 backgroundColor: 'yellow'
      }
	  
      return (
         <div style = {myStyle}>
		 <p>  use variable to control div style.</p>
		 <p>  comment not working, need to figure out why</p>
         </div>
      );
   }
}

class Component5 extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            }
         ]
      }
   }
	
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
         <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
         </tr>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Component6 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         "content": "Content from state..."
      }
   }
	
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}


class Component7 extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

class Component8 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         state1: 0
      }
	  this.updateState = this.updateState.bind(this);
   }
   updateState(){
	this.setState({ state1: this.state.state1 + 1 })
   }
   render() {
      return (
         <div>
            <h1 onClick = {this.updateState}>{this.state.state1}</h1>
            <h1>{this.state.state1%3==0?"Foor":"Bar"}</h1>
         </div>
      );
   }
}

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
		    <Component1 />
		    <Component2 />
		    <Component3 />
		    <Component4 />
		    <Component5 />
		    <Component6 />
		    <Component7 headerProp = "Header from props..." contentProp = "Content from props..." />
		    <Component8 />

		 </div>
      );
   }
}

export default App; 