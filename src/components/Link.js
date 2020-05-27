import React from 'react';


const Link = ({children,onClick,active}) => (
    <button onClick={onClick} disabled={active} style={{
        marginLeft: '4px'
      }}>{children}</button>
)

export default Link