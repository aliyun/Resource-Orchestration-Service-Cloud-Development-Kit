import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './cr.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instances
 */
export interface InstancesProps {
    /**
     * Property instanceName: InstanceName.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Instances`.
 */
export interface IInstances extends ros.IResource {
    readonly props: InstancesProps;
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Instances`, which is used to query Container Registry instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instances
 */
export declare class Instances extends ros.Resource implements IInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
