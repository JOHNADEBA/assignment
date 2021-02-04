import React, { useState } from 'react';
import AddPerson from './addPerson.jsx';
import QueueRow from './queueRow.jsx';

export default function App() {
    const [rows, setRows] = useState([{ name: 'John Doe', tasks: ['Groceries', 'Take out the trash'] }]);

    console.log('render: App');

    return (
        <div>
            
            <div className="title">Tasks</div>
            <AddPerson currentPeople={rows} setPeople={setRows} />
            <div className="queues-wrapper">
                {rows.map((row, idx) => <QueueRow key={`${idx}`} idx={idx} row={row} currentPeople={rows} setPeople={setRows} />)}
            </div>
            
        </div>
    );
}

