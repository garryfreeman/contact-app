import React from 'react';


const {
   Provider: ContactServiceProvider,
   Consumer: ContactServiceConsumer
} = React.createContext();

export {ContactServiceProvider, ContactServiceConsumer};