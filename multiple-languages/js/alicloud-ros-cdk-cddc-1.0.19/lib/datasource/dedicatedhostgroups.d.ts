import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroups } from './cddc.generated';
export { RosDedicatedHostGroups as DedicatedHostGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::CDDC::DedicatedHostGroups`
 */
export interface DedicatedHostGroupsProps {
    /**
     * Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CDDC::DedicatedHostGroups`
 */
export declare class DedicatedHostGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    readonly attrDedicatedHostGroupIds: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    readonly attrDedicatedHostGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CDDC::DedicatedHostGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DedicatedHostGroupsProps, enableResourcePropertyConstraint?: boolean);
}
