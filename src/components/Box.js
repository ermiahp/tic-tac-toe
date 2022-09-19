
import classnames from 'classnames';
import { useState } from 'react';

import './Box.css';

const Box = ({index, playerType = 'x', cellSelecting}) => {
    const [isX, setIsX] = useState(false);
    const [isO, setIsO] = useState(false);

    const classNames = classnames(
        'box' ,
        index > 2 ? ' top': '',
        index !== 2 && index !== 5 && index !== 8 ? 'right': '',
    );
    
    const selectCell = () => {
        if(isX || isO) return;
        switch (playerType) {
            case 'x':
                setIsX(true);
                break;
            case 'o':
                setIsO(true);
                break;
            default:
                break;
        }
        cellSelecting();
    }

    return(
        <div className={classNames} onClick={() => selectCell()}>
            {isX && <span className='inside'>X</span>}
            {isO && <span className='inside'>O</span>}
        </div>
    )
}


export default Box;