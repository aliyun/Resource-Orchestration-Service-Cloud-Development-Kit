import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroups } from './cddc.generated';
export { RosDedicatedHostGroups as DedicatedHostGroupsProperty };
/**
 * Properties for defining a `DedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the information about resources in dedicated clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export declare class DedicatedHostGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    readonly attrDedicatedHostGroupIds: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    readonly attrDedicatedHostGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DedicatedHostGroupsProps, enableResourcePropertyConstraint?: boolean);
}
