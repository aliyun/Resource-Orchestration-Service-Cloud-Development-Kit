import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './paidswapi.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
 */
export interface InstancesProps {
    /**
     * Property accessibility: Whether the workspace is visible to others.
     */
    readonly accessibility?: string | ros.IResolvable;
    /**
     * Property instanceId: The first ID of the resource.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property instanceName: The instance name.
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
     * Property workspaceId: The Id of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PaiDswApi::Instances`, which is used to query the basic information about Data Science Workshop (DSW) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
 */
export declare class Instances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
