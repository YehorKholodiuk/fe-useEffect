import {useEffect} from 'react';
function Line(props) {
    useEffect(() => {
        console.log('UE LINE',props.value)
        return () => {
            console.log('Close Line', props.value)
        }
        },[]);

    return <li>{props.value} <button onClick={() => props.onDelete(props.value)}>DELETE</button></li>
}

export default Line;

