import React from "react"; // 6.x or mobx-react-lite@1.4.0
import {observable} from 'mobx';
import {Observer, observer, useObserver} from 'mobx-react';

const person = observable({
    name: 'John',
});

const P10 = observer(({person}) => {
    return <h1>{person.name}</h1>
});

// named function is optional (for debugging purposes)
const P11 = observer(function P1({person}) {
    return <h1>{person.name}</h1>
});

const P2 = ({person}) => <Observer>{() => <h1>{person.name}</h1>}</Observer>;

const P3 = ({person}) => {
    return useObserver(() => <h1>{person.name}</h1>)
};

const P31 = ({person}) => {
    const personName = useObserver(() => person.name);
    return <h1>{personName}</h1>;
};

const P32 = ({person}) => {
    return <h1>{person.name}</h1>;
};

export const PersonList = () => {
    return (
        <div>
            <P10 person={person}/>
            <P11 person={person}/>
            <P2 person={person}/>
            <P3 person={person}/>
            <P31 person={person}/>
            <P32 person={person}/>
        </div>)
};

setTimeout(() => {
    person.name = 'Jane'
}, 1000);


