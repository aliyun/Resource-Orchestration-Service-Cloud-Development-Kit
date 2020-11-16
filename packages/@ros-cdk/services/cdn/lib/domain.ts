import * as ros from '@ros-cdk/core';
import { RosDomain } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `ALIYUN::CDN::Domain`
 */
export interface DomainProps {

    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string;

    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string;

    /**
     * @Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string;

    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources?: string;

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CDN::Domain`
 */
export class Domain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    public readonly attrCname: any;

    /**
     * @Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public readonly attrDomainName: any;

    /**
     * Create a new `ALIYUN::CDN::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomain = new RosDomain(this, id,  {
            checkUrl: props.checkUrl,
            resourceGroupId: props.resourceGroupId,
            scope: props.scope,
            domainName: props.domainName,
            cdnType: props.cdnType,
            topLevelDomain: props.topLevelDomain,
            sources: props.sources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrCname = rosDomain.attrCname;
        this.attrDomainName = rosDomain.attrDomainName;
    }
}
