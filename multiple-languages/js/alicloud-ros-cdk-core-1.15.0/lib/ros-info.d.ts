import { Construct } from './construct-compat';
import { RosElement } from './ros-element';
export declare class RosInfo extends RosElement {
    static formatVersion: string;
    static description: string;
    static metadata: string;
    static v20150901: string;
    private readonly _value;
    private readonly infoType;
    /**
     * Creates properties for this stack.
     * @param scope The parent construct.
     * @param props The value of the property.
     */
    constructor(scope: Construct, id: string, info: string | {
        [key: string]: any;
    });
    /**
     * @internal
     */
    _toRosTemplate(): object;
}
