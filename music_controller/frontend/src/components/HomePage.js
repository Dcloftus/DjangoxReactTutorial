import React, { Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, createHashRouter }  from "react-router-dom";

import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<p>This is the Homepage</p>}/>
                    <Route path="/join" Component={RoomJoinPage} />
                    <Route path="/create" Component={CreateRoomPage} />
                </Routes>
            </Router>
        );
    }
}