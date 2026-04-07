import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginProtection } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOriginProtection as OriginProtectionProperty };

/**
 * Properties for defining a `OriginProtection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
 */
export interface OriginProtectionProps {

    /**
     * Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property originConverge: The IP convergence status.
     * *   on
     * *   off.
     */
    readonly originConverge?: string | ros.IResolvable;
}

/**
 * Represents a `OriginProtection`.
 */
export interface IOriginProtection extends ros.IResource {
    readonly props: OriginProtectionProps;

    /**
     * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
     */
    readonly attrCurrentIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
     */
    readonly attrDiffIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
     */
    readonly attrLatestIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute OriginConverge: The IP convergence status.
     */
    readonly attrOriginConverge: ros.IResolvable | string;

    /**
     * Attribute OriginProtection: Indicates whether origin protection is enabled.
     */
    readonly attrOriginProtection: ros.IResolvable | string;

    /**
     * Attribute SiteId: The website ID
     */
    readonly attrSiteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginProtection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginProtection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
 */
export class OriginProtection extends ros.Resource implements IOriginProtection {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OriginProtectionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
     */
    public readonly attrCurrentIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
     */
    public readonly attrDiffIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
     */
    public readonly attrLatestIpWhitelist: ros.IResolvable | string;

    /**
     * Attribute OriginConverge: The IP convergence status.
     */
    public readonly attrOriginConverge: ros.IResolvable | string;

    /**
     * Attribute OriginProtection: Indicates whether origin protection is enabled.
     */
    public readonly attrOriginProtection: ros.IResolvable | string;

    /**
     * Attribute SiteId: The website ID
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginProtectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOriginProtection = new RosOriginProtection(this, id,  {
            originConverge: props.originConverge,
            siteId: props.siteId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOriginProtection;
        this.attrCurrentIpWhitelist = rosOriginProtection.attrCurrentIpWhitelist;
        this.attrDiffIpWhitelist = rosOriginProtection.attrDiffIpWhitelist;
        this.attrLatestIpWhitelist = rosOriginProtection.attrLatestIpWhitelist;
        this.attrOriginConverge = rosOriginProtection.attrOriginConverge;
        this.attrOriginProtection = rosOriginProtection.attrOriginProtection;
        this.attrSiteId = rosOriginProtection.attrSiteId;
    }
}
