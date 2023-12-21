import React from 'react';

export const Pricing = () => {
    const listItems = [
        { id: 1, subscriptionType: 'Free', price: 0, user: 'Single User', storage: '50 GB', publicProject: 'Unlimited Public Projects', access: 'Community Access', privateProject: 'Unlimited Private Projects', support: 'Dedicated Phone Support', subdomain: 'Free Subdomain', statusReport: 'Monthly Status Report' },
        { id: 2, subscriptionType: 'Plus', price: 9, user: '5 User', storage: '50 GB', publicProject: 'Unlimited Public Projects', access: 'Community Access', privateProject: 'Unlimited Private Projects', support: 'Dedicated Phone Support', subdomain: 'Free Subdomain', statusReport: 'Monthly Status Report' },
        { id: 3, subscriptionType: 'Pro', price: 49, user: 'Unlimited User', storage: '50 GB', publicProject: 'Unlimited Public Projects', access: 'Community Access', privateProject: 'Unlimited Private Projects', support: 'Dedicated Phone Support', subdomain: 'Free Subdomain', statusReport: 'Monthly Status Report' },
    ];

    const disabledFeatures = {
        1: { all: true, statusReport: true },
        2: { all: false, statusReport: true },
        3: { all: false, statusReport: false },
        // Add more entries as needed
    };

    return (
        <div className='container d-flex justify-content-center align-items-center py-5 mt-4 ' style={{ background: 'blue', maxHeight: '90vh' }}>
            <main>
                <div className='row row-cols-1 row-cols-md-3'>
                    {listItems.map((element, index) => (
                        <div className='col' key={index}>
                            <div className='card text-center' style={{ width: '18rem' }}>
                                <div className='card-header'>
                                    <small className='text-muted fs-4 fw-normal'>{element.subscriptionType}</small>
                                    <h1 className='card-title'>
                                        <span> </span> ${element.price}/month
                                    </h1>
                                </div>
                                <div className='card-body'>
                                    <p> <i className="bi bi-check"></i>

                                        {element.user}
                                    </p>
                                    <p> <i className="bi bi-check"></i>
                                        {element.storage} storage
                                    </p>
                                    <p>

                                    </p>
                                    <p >
                                        <span>

                                            <i className="bi bi-check"></i>

                                        </span>
                                        {element.publicProject}
                                    </p>
                                    <p >
                                        <span>

                                            <i className="bi bi-check"></i>

                                        </span>
                                        {element.access}
                                    </p>
                                    <p style={{ color: disabledFeatures[element.id]?.all ? 'gray' : 'inherit' }}>
                                        <span>
                                            {disabledFeatures[element.id]?.all === true ? (
                                                <i className="bi bi-x"></i>
                                            ) : (
                                                <i className="bi bi-check"></i>
                                            )}
                                        </span>
                                        {element.privateProject}
                                    </p>
                                    <p style={{ color: disabledFeatures[element.id]?.all ? 'gray' : 'inherit' }}>
                                        <span>
                                            {disabledFeatures[element.id]?.all === true ? (
                                                <i className="bi bi-x"></i>
                                            ) : (
                                                <i className="bi bi-check"></i>
                                            )}
                                        </span>
                                        {element.support}
                                    </p>
                                    <p style={{ color: disabledFeatures[element.id]?.all ? 'gray' : 'inherit' }}>
                                        <span>
                                            {disabledFeatures[element.id]?.all === true ? (
                                                <i className="bi bi-x"></i>
                                            ) : (
                                                <i className="bi bi-check"></i>
                                            )}
                                        </span>
                                        {element.subdomain}
                                    </p>
                                    <p style={{ color: disabledFeatures[element.id]?.statusReport ? 'gray' : 'inherit' }}>
                                        <span>
                                            {disabledFeatures[element.id]?.statusReport === true ? (
                                                <i className="bi bi-x"></i>
                                            ) : (
                                                <i className="bi bi-check"></i>
                                            )}
                                        </span>
                                        {element.statusReport}
                                    </p>
                                    <button className='w-100 btn btn-primary rounded-pill'>Button</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};
