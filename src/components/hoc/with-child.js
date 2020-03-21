import React from 'react';

const withChild = fn => Wrapped => props => <Wrapped {...props}>{fn}</Wrapped>;

export default withChild;
