// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract Crud {
    struct Users {
        uint id;
        string name;
    }

    Users[] users;

    // Add index of the users
    uint nextId;

    function addUser (string memory _name) public {
        users.push(Users({id: nextId, name: _name}));
        nextId++;
    }

    function getDetails (uint _id) public view returns(uint, string memory) {
        for ( uint i = 0; i < users.length; i++) 
        {
            if(users[i].id == _id) {
                return (users[i].id, users[i].name);
            }
        }
        revert("User doesn't exist!");
    }

    function update (uint _id, string memory _name) public {
        uint i = find(_id);
        users[i].name = _name;

    }

    function Del (uint id) public {
        uint i = find(id);
        delete users[i];
    }

    function find (uint _id) view internal returns (uint) {
        for (uint i = 0; i < users.length; i++) 
        {
            if (users[i].id == _id) {
                return i;
            }
        }
        revert("User doesn't exist!");
    }
}