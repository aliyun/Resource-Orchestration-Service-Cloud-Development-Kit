import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::CDDC::DedicatedHostGroups`
 */
export interface RosDedicatedHostGroupsProps {
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CDDC::DedicatedHostGroups`
 */
export declare class RosDedicatedHostGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    readonly attrDedicatedHostGroupIds: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    readonly attrDedicatedHostGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property engine: Database Engine Type.
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CDDC::DedicatedHostGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
