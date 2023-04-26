import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtension } from './slb.generated';
export { RosDomainExtension as DomainExtensionProperty };
/**
 * Properties for defining a `ALIYUN::SLB::DomainExtension`
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
 * A ROS resource type:  `ALIYUN::SLB::DomainExtension`
 */
export declare class DomainExtension extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    readonly attrDomainExtensionId: ros.IResolvable;
    /**
     * Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    readonly attrListenerPort: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionProps, enableResourcePropertyConstraint?: boolean);
}
