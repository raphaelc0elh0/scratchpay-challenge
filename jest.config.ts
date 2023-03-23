
import {compilerOptions} from './tsconfig.json';

const jestConfig = {
    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl],
    transform: {
        '\\.[jt]s$': ['esbuild-jest', {}],
    },
};

export default jestConfig;
