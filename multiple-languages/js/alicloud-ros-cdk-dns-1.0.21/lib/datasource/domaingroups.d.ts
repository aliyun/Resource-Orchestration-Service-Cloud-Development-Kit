import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroups } from './dns.generated';
export { RosDomainGroups as DomainGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::DNS::DomainGroups`
 */
export interface DomainGroupsProps {
    /**
     * Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;
    /**
     * Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::DNS::DomainGroups`
 */
export declare class DomainGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    readonly attrDomainGroupIds: ros.IResolvable;
    /**
     * Attribute DomainGroups: The information about DNS domain groups.
     */
    readonly attrDomainGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DNS::DomainGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DomainGroupsProps, enableResourcePropertyConstraint?: boolean);
}
