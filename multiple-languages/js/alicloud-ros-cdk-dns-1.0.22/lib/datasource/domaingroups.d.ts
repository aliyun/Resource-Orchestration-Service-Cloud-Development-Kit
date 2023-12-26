import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroups } from './dns.generated';
export { RosDomainGroups as DomainGroupsProperty };
/**
 * Properties for defining a `DomainGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DNS::DomainGroups`, which is used to query domain name groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
 */
export declare class DomainGroups extends ros.Resource {
    /**
     * Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    readonly attrDomainGroupIds: ros.IResolvable;
    /**
     * Attribute DomainGroups: The information about DNS domain groups.
     */
    readonly attrDomainGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DomainGroupsProps, enableResourcePropertyConstraint?: boolean);
}
