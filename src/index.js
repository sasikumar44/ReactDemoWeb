import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
          
           <CommentDetails author="Kumar" tAgo="Today 5:00AM" cmnt="Nice post!"/>
           <CommentDetails author="Sasi" tAgo="Today 1:00AM" cmnt="Amazing post!"/>
           <CommentDetails author="Raja" tAgo="Yesterday 11:00AM" cmnt="Amazing post!"/>
           <CommentDetails author="Varun" tAgo="Yesterday 7:00AM" cmnt="Amazing post!"/>

        </div>

    );

};

ReactDOM.render(<App />, document.querySelector('#root'))