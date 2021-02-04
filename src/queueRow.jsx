import React from 'react';
import Person from './person.jsx';
import './queueRow.css';

export default function QueueRow({ idx, row, currentPeople, setPeople }) {
    console.log('render: QueueRow #' + idx);
    
    return (
        <div className="queues-row">
            <Person  rowIdx={idx}  data={row} currentPeople={currentPeople} setPeople={setPeople} />
        </div>
    );
}

