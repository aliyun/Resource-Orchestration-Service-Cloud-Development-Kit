import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroup } from './dns.generated';
export { RosDomainGroup as DomainGroupProperty };
/**
 * Properties for defining a `DomainGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export interface DomainGroupProps {
    /**
     * Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
}
/**
 * Represents a `DomainGroup`.
 */
export interface IDomainGroup extends ros.IResource {
    readonly props: DomainGroupProps;
    /**
     * Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::DomainGroup`, which is used to add a domain name group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export declare class DomainGroup extends ros.Resource implements IDomainGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainGroupProps, enableResourcePropertyConstraint?: boolean);
}
