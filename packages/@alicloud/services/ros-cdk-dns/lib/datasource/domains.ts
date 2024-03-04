import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomains as DomainsProperty };

/**
 * Properties for defining a `Domains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
 */
export interface DomainsProps {

    /**
     * Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;

    /**
     * Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;

    /**
     * Property starmark: Specifies whether to query the starmark of the domain name.
     */
    readonly starmark?: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DNS::Domains`, which is used to query domain names.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
 */
export class Domains extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainIds: The list of The DNS domain ids.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * Attribute Domains: The information about DNS domains.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomains = new RosDomains(this, id,  {
            resourceGroupId: props.resourceGroupId,
            keyWord: props.keyWord,
            lang: props.lang,
            starmark: props.starmark,
            searchMode: props.searchMode,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomains;
        this.attrDomainIds = rosDomains.attrDomainIds;
        this.attrDomains = rosDomains.attrDomains;
    }
}
