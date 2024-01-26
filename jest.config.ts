import type {Config} from 'jest';

const config: Config = {
    openHandlesTimeout: 1000 * 60 * 2, // 2min 
    testTimeout: 1000 * 60 // 1min per test 
};

export default config;