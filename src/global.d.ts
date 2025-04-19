// Tipagem para CSS Modules
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

// Tipagem para SVGs (como URL ou como ReactComponent)
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
