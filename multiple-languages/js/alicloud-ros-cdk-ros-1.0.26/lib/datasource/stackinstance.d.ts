import * as ros from '@alicloud/ros-cdk-core';
import { RosStackInstance } from './ros.generated';
export { RosStackInstance as StackInstanceProperty };
/**
 * Properties for defining a `StackInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export interface StackInstanceProps {
    /**
     * Property stackGroupName: Resource stack group name. Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    readonly stackInstanceAccountId: string | ros.IResolvable;
    /**
     * Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    readonly stackInstanceRegionId: string | ros.IResolvable;
    /**
     * Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    readonly outputOption?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROS::StackInstance`, which is used to query the information about a stack instance that is associated with a stack group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export declare class StackInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StackInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: The account id of the stack.
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
     */
    readonly attrDriftDetectionTime: ros.IResolvable;
    /**
     * Attribute Outputs: The outputs of the stack instance
     */
    readonly attrOutputs: ros.IResolvable;
    /**
     * Attribute ParameterOverrides: Override parameter list.
     */
    readonly attrParameterOverrides: ros.IResolvable;
    /**
     * Attribute RdFolderId: The resource folder ID of the resource directory.
     */
    readonly attrRdFolderId: ros.IResolvable;
    /**
     * Attribute RegionId: The region id of the stack.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
     */
    readonly attrStackDriftStatus: ros.IResolvable;
    /**
     * Attribute StackGroupId: The resource stack group ID.
     */
    readonly attrStackGroupId: ros.IResolvable;
    /**
     * Attribute StackGroupName: The resource stack group name
     */
    readonly attrStackGroupName: ros.IResolvable;
    /**
     * Attribute StackId: The stack id of stack instance.
     */
    readonly attrStackId: ros.IResolvable;
    /**
     * Attribute Status: Resource stack status.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Attribute StatusReason: Status reason description.
     */
    readonly attrStatusReason: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackInstanceProps, enableResourcePropertyConstraint?: boolean);
}
