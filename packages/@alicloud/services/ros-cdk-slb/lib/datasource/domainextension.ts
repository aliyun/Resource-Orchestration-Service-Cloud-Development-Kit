import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtension } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainExtension as DomainExtensionProperty };

/**
 * Properties for defining a `DomainExtension`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export interface DomainExtensionProps {

    /**
     * Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DomainExtension`.
 */
export interface IDomainExtension extends ros.IResource {
    readonly props: DomainExtensionProps;

    /**
     * Attribute Domain: The domain name.
     */
    readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute DomainExtensionId: The ID of the additional certificate.
     */
    readonly attrDomainExtensionId: ros.IResolvable | string;

    /**
     * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    readonly attrListenerPort: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    readonly attrServerCertificateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::DomainExtension`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainExtension`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
 */
export class DomainExtension extends ros.Resource implements IDomainExtension {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainExtensionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domain: The domain name.
     */
    public readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute DomainExtensionId: The ID of the additional certificate.
     */
    public readonly attrDomainExtensionId: ros.IResolvable | string;

    /**
     * Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
     */
    public readonly attrListenerPort: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
     */
    public readonly attrServerCertificateId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomainExtension = new RosDomainExtension(this, id,  {
            domainExtensionId: props.domainExtensionId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainExtension;
        this.attrDomain = rosDomainExtension.attrDomain;
        this.attrDomainExtensionId = rosDomainExtension.attrDomainExtensionId;
        this.attrListenerPort = rosDomainExtension.attrListenerPort;
        this.attrLoadBalancerId = rosDomainExtension.attrLoadBalancerId;
        this.attrServerCertificateId = rosDomainExtension.attrServerCertificateId;
    }
}
