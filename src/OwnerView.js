import React from 'react';
import {observer} from 'mobx-react';

const OwnerView = observer(({store}) => {
    return (
        <div>
            <input name='owner'
                   value={store.name}
                   onChange={e => store.name = e.target.value}/>
            <small>(Change owner)</small>
        </div>
    );
});

export default OwnerView;