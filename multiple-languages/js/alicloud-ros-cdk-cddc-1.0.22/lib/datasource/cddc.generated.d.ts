import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the resources in a dedicated cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export declare class RosDedicatedHostGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroups";
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
