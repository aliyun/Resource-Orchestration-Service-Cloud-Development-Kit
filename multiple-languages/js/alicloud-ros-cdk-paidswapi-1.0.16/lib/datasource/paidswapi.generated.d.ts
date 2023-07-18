import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::PaiDswApi::Instances`
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
 * A ROS template type:  `DATASOURCE::PaiDswApi::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PaiDswApi::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::PaiDswApi::Instances`.
     *
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
