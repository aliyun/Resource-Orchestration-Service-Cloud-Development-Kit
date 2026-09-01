import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtension } from './slb.generated';
export { RosDomainExtension as DomainExtensionProperty };
/**
 * Properties for defining a `DomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
 */
export interface DomainExtensionProps {
    /**
     * Property domain: The domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string | ros.IResolvable;
}
/**
 * Represents a `DomainExtension`.
 */
export interface IDomainExtension extends ros.IResource {
    readonly props: DomainExtensionProps;
    /**
     * Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    readonly attrDomainExtensionId: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    readonly attrListenerPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::DomainExtension`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainExtension`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
 */
export declare class DomainExtension extends ros.Resource implements IDomainExtension {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainExtensionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    readonly attrDomainExtensionId: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionProps, enableResourcePropertyConstraint?: boolean);
}
