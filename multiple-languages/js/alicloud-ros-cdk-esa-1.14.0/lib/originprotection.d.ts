import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginProtection } from './esa.generated';
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
export declare class OriginProtection extends ros.Resource implements IOriginProtection {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: OriginProtectionProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginProtectionProps, enableResourcePropertyConstraint?: boolean);
}
