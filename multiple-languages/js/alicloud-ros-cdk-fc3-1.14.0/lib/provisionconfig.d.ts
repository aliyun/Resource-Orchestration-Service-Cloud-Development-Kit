import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc3.generated';
export { RosProvisionConfig as ProvisionConfigProperty };
/**
 * Properties for defining a `ProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export interface ProvisionConfigProps {
    /**
     * Property defaultTarget: The number of target resources to reserve.
     */
    readonly defaultTarget: number | ros.IResolvable;
    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateCpu?: boolean | ros.IResolvable;
    /**
     * Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
     */
    readonly alwaysAllocateGpu?: boolean | ros.IResolvable;
    /**
     * Property qualifier: Function alias or LATEST.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * Property scheduledActions: Timing policy configuration.
     */
    readonly scheduledActions?: Array<RosProvisionConfig.ScheduledActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property targetTrackingPolicies: Target tracking policy configuration.
     */
    readonly targetTrackingPolicies?: Array<RosProvisionConfig.TargetTrackingPoliciesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ProvisionConfig`.
 */
export interface IProvisionConfig extends ros.IResource {
    readonly props: ProvisionConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::ProvisionConfig`, which is used to create a provisioned configuration in Function Compute 3.0.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProvisionConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
export declare class ProvisionConfig extends ros.Resource implements IProvisionConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProvisionConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProvisionConfigProps, enableResourcePropertyConstraint?: boolean);
}
