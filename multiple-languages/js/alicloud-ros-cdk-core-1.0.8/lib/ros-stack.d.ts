import { Construct } from "./construct-compat";
import { TagManager } from "./tag-manager";
import { RosTag } from "./ros-tag";
import { RosResource } from "./ros-resource";
import { IResolvable } from "./resolvable";
export interface RosStackProps {
    readonly templateBody?: string;
    readonly templateUrl?: string;
    readonly parameters?: {
        [key: string]: string;
    } | IResolvable;
    readonly tags?: RosTag[];
    readonly timeoutMins?: number;
}
export declare class RosStack extends RosResource {
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";
    templateUrl?: string;
    parameters: {
        [key: string]: string;
    } | IResolvable | undefined;
    readonly tags: TagManager;
    timeoutMins: number | undefined;
    templateBody?: string;
    constructor(scope: Construct, id: string, props: RosStackProps);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=ros-stack.d.ts.map