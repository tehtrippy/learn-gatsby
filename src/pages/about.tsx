import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const AboutPage: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <div>
      <span className='font-semibold text-red-500'>
        {intl.formatMessage({ id: 'description' })}
      </span>
    </div>
  );
};

export default AboutPage;
