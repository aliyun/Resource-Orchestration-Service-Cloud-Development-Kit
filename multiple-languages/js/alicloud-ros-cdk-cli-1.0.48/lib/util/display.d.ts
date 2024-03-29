/// <reference types="node" />
/**
 * A class representing rewritable display lines
 */
export declare class RewritableBlock {
    private readonly stream;
    private lastHeight;
    constructor(stream: NodeJS.WriteStream);
    get width(): number;
    displayLines(lines: string[]): void;
}
