import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
 */
export interface DomainProps {

    /**
     * Property domainName: The accelerated domain name.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;

    /**
     * Attribute CdnType: The workload type of the accelerated domain name.
     */
    readonly attrCdnType: ros.IResolvable | string;

    /**
     * Attribute CertificateConfig: Certificate configuration.
     */
    readonly attrCertificateConfig: ros.IResolvable | string;

    /**
     * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
     */
    readonly attrCname: ros.IResolvable | string;

    /**
     * Attribute DomainName: The accelerated domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Scope: The acceleration region.
     */
    readonly attrScope: ros.IResolvable | string;

    /**
     * Attribute Sources: The information about the origin server.
     */
    readonly attrSources: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDN::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
 */
export class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CdnType: The workload type of the accelerated domain name.
     */
    public readonly attrCdnType: ros.IResolvable | string;

    /**
     * Attribute CertificateConfig: Certificate configuration.
     */
    public readonly attrCertificateConfig: ros.IResolvable | string;

    /**
     * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
     */
    public readonly attrCname: ros.IResolvable | string;

    /**
     * Attribute DomainName: The accelerated domain name.
     */
    public readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Scope: The acceleration region.
     */
    public readonly attrScope: ros.IResolvable | string;

    /**
     * Attribute Sources: The information about the origin server.
     */
    public readonly attrSources: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomain = new RosDomain(this, id,  {
            domainName: props.domainName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrCdnType = rosDomain.attrCdnType;
        this.attrCertificateConfig = rosDomain.attrCertificateConfig;
        this.attrCname = rosDomain.attrCname;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrResourceGroupId = rosDomain.attrResourceGroupId;
        this.attrScope = rosDomain.attrScope;
        this.attrSources = rosDomain.attrSources;
        this.attrTags = rosDomain.attrTags;
    }
}
