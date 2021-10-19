import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useServices } from '../../App';
import FindItemBanner from '../FindItemBanner/FindItemBanner';
import FindService from '../FindService/FindService';


const SingleService = () => {
    const { serviceID } = useParams()
    const [services] = useContext(useServices);
   const history = useHistory()

    const findService = services.find(service => service.id === Number(serviceID))
    console.log(findService)

    return (
        <div>
            {
                findService ?
                    <FindItemBanner findService={findService} />
                    :
                    <div></div>
           }
            <div className="container-fluid px-3 lg:container mx-auto py-6 ">
                {
                    findService ?
                        <FindService findService={findService} />
                        :
                        history.push('/')        
                }
            </div>
        </div>
    );
};

export default SingleService;