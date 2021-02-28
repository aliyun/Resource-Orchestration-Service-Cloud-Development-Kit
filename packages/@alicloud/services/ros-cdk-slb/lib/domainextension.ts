import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtension } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainExtension as DomainExtensionProperty };

/**
 * Properties for defining a `ALIYUN::SLB::DomainExtension`
 */
export interface DomainExtensionProps {

    /**
     * Property domain: The domain name.
     */
    readonly domain: string;

    /**
     * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;

    /**
     * Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;

    /**
     * Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::DomainExtension`
 */
export class DomainExtension extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    public readonly attrDomainExtensionId: any;

    /**
     * Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    public readonly attrListenerPort: any;

    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomainExtension = new RosDomainExtension(this, id,  {
            listenerPort: props.listenerPort,
            serverCertificateId: props.serverCertificateId,
            loadBalancerId: props.loadBalancerId,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainExtension;
        this.attrDomainExtensionId = rosDomainExtension.attrDomainExtensionId;
        this.attrListenerPort = rosDomainExtension.attrListenerPort;
    }
}
