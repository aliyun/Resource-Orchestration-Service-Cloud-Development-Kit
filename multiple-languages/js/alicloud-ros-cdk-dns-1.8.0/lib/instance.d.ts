import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './dns.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
export interface InstanceProps {
    /**
     * Property dnsSecurity: The DNS security policy. Valid values:
     * - no: No protection against DNS attacks is provided.
     * - basic: Basic protection against DNS attacks is provided.
     * - advanced: Advanced protection against DNS attacks is provided.
     */
    readonly dnsSecurity: string | ros.IResolvable;
    /**
     * Property domainNumbers: The number of domain names.
     */
    readonly domainNumbers: number | ros.IResolvable;
    /**
     * Property period: The subscription duration. Valid values:
     * - If unit is month: 1, 2, 3, 6
     * - If unit is year: 1, 2
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property periodUnit: The subscription duration unit.
     */
    readonly periodUnit: string | ros.IResolvable;
    /**
     * Property version: The edition of Alibaba Cloud DNS. Valid values:
     * If create hosted public zone:
     * - version_personal: Personal Edition.
     * - version_enterprise_basic: Enterprise Standard Edition.
     * - version_enterprise_advanced: Enterprise Ultimate Edition.
     * If create cached public zone:
     * - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
     */
    readonly version: string | ros.IResolvable;
    /**
     * Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
     */
    readonly domain?: string | ros.IResolvable;
    /**
     * Property instanceType: The type of the instance. Valid values:
     * - HostedPublicZone: Hosted Public Zone
     * - CachedPublicZone: Cached Public Zone.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property renewalStatus: The renewal method. Valid values:
     * - AutoRenewal: The instance is automatically renewed.
     * - ManualRenewal: The instance is manually renewed.
     * Default value: ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute InstanceId: DNS instance id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::Instance`, which is used to create an Alibaba Cloud DNS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: DNS instance id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
