import React from 'react';

import {ContactServiceConsumer} from '../contact-service-context';

const withResumeService = () => (Wrapped) => {
   return (props) => {
      return (
         <ContactServiceConsumer>
            {
               (contactService) => {
                  return(
                     <Wrapped {...props} contactService={contactService} />
                  );
               }
            }
         </ContactServiceConsumer>
      );
   }
};

export default withResumeService;