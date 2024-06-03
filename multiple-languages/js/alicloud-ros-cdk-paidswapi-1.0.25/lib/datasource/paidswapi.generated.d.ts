import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
 */
export interface RosInstancesProps {
    /**
     * @Property accessibility: Whether the workspace is visible to others.
     */
    readonly accessibility?: string | ros.IResolvable;
    /**
     * @Property instanceId: The first ID of the resource.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceName: The instance name.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property workspaceId: The Id of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PaiDswApi::Instances`, which is used to query the basic information about Data Science Workshop (DSW) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PaiDswApi::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessibility: Whether the workspace is visible to others.
     */
    accessibility: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The first ID of the resource.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The instance name.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property workspaceId: The Id of the workspace.
     */
    workspaceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
