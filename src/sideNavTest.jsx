import React, { useState } from 'react';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';


const TestNav = () => {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);
  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };
  const sideNav = [
    {
      name: 'EN',
      icon: <img className="logo"
      src="https://img.icons8.com/ios/50/code--v1.png"
      alt="code--v1"
    />,
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Item with onClick',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
        },
        {
          name: 'Item with href',
          id: htmlIdGenerator('basicExample')(),
          href: '#/navigation/side-nav',
        },
        {
          name: 'Selected item',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
          isSelected: true,
        },
        {
          name: 'Disabled item',
          id: htmlIdGenerator('basicExample')(),
          
        },
      ],
    },
  ];
  return (
    <EuiSideNav
    //heading="EN"
      aria-label="EN"
      mobileTitle="EN"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 292 }}
      items={sideNav}
    />
  );
};

export default TestNav

// margin: 0;
//             position: absolute;
//      top: 50%;
//     left: 75%;
//      margin-right: -50%;
//      transform: translate(-50%, -50%)