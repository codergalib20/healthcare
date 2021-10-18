import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useServices } from '../../App';
import FindItemBanner from '../FindItemBanner/FindItemBanner';
import FindService from '../FindService/FindService';


const SingleService = () => {
    const { serviceID } = useParams()
    console.log(serviceID);
    const [services] = useContext(useServices);
   

    const findService = services.find(service => service.id == 4)

    return (
        <div>
            <FindItemBanner  findService={findService} />
            <div className="container-fluid px-3 lg:container mx-auto py-6 ">
              <FindService findService={findService} />
            </div>
        </div>
    );
};

export default SingleService;