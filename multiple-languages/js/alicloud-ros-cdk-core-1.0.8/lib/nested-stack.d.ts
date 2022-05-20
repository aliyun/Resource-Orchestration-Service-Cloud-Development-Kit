import { Construct } from "./construct-compat";
import { Stack } from "./stack";
export interface NestedStackProps {
    readonly parameters?: {
        [key: string]: any;
    };
    readonly templateUrl?: string;
    readonly templateBody?: string;
    readonly timeout?: number;
}
export declare class NestedStack extends Stack {
    static isNestedStack(x: any): x is NestedStack;
    private parameters;
    private resource;
    private _contextualStackId;
    private _contextualStackName;
    private templateBody?;
    constructor(scope: Construct, id: string, props?: NestedStackProps);
    /**
     * @internal
     */
    _toRosTemplate(): string | undefined;
    get stackName(): string;
    get stackId(): string;
    setParameter(name: string, value: any): void;
    getAtt(attributeName: string): string;
    private contextualAttribute;
}
//# sourceMappingURL=nested-stack.d.ts.map