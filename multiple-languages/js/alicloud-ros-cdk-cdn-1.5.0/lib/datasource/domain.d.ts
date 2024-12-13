import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './cdn.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDN::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
 */
export declare class Domain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CdnType: The workload type of the accelerated domain name.
     */
    readonly attrCdnType: ros.IResolvable;
    /**
     * Attribute CertificateConfig: Certificate configuration.
     */
    readonly attrCertificateConfig: ros.IResolvable;
    /**
     * Attribute Cname: The CNAME that is assigned to the accelerated domain name.
     */
    readonly attrCname: ros.IResolvable;
    /**
     * Attribute DomainName: The accelerated domain name.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Scope: The acceleration region.
     */
    readonly attrScope: ros.IResolvable;
    /**
     * Attribute Sources: The information about the origin server.
     */
    readonly attrSources: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
