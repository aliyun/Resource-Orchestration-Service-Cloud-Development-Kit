import * as ros from '@alicloud/ros-cdk-core';
import { RosApplyConfigToMachineGroup } from './sls.generated';
export { RosApplyConfigToMachineGroup as ApplyConfigToMachineGroupProperty };
/**
 * Properties for defining a `ApplyConfigToMachineGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
 */
export interface ApplyConfigToMachineGroupProps {
    /**
     * Property configName: Apply config to the config name
     */
    readonly configName?: string | ros.IResolvable;
    /**
     * Property groupName: Apply config to the group name
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property projectName: Apply config to the project name.
     */
    readonly projectName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::ApplyConfigToMachineGroup`, which is used to apply Log Service configurations to machine groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplyConfigToMachineGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
 */
export declare class ApplyConfigToMachineGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApplyConfigToMachineGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApplyConfigToMachineGroupProps, enableResourcePropertyConstraint?: boolean);
}
