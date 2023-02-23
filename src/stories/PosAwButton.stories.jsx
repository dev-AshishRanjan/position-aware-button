import React from 'react';
import { storiesOf } from '@storybook/react';
import { PosAwButton } from '../components/PosAwButton';

const stories = storiesOf('App Test', module);
stories.add('App', () => {
    return (<PosAwButton height='5rem' background="cyan" themeColor='red' >LOL</PosAwButton>)
});