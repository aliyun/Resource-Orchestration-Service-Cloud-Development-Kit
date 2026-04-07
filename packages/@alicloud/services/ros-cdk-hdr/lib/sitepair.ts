import * as ros from '@alicloud/ros-cdk-core';
import { RosSitePair } from './hdr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSitePair as SitePairProperty };

/**
 * Properties for defining a `SitePair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
export interface SitePairProps {

    /**
     * Property primarySiteName: The name of the primary site.
     */
    readonly primarySiteName: string | ros.IResolvable;

    /**
     * Property primarySiteRegionId: The region ID of the primary site.
     */
    readonly primarySiteRegionId: string | ros.IResolvable;

    /**
     * Property primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
     */
    readonly primarySiteType: string | ros.IResolvable;

    /**
     * Property primarySiteVpcId: The VPC ID of the primary site.
     */
    readonly primarySiteVpcId: string | ros.IResolvable;

    /**
     * Property secondarySiteName: The name of the secondary site.
     */
    readonly secondarySiteName: string | ros.IResolvable;

    /**
     * Property secondarySiteRegionId: The region ID of the secondary site.
     */
    readonly secondarySiteRegionId: string | ros.IResolvable;

    /**
     * Property secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
     */
    readonly secondarySiteType: string | ros.IResolvable;

    /**
     * Property secondarySiteVpcId: The VPC ID of the secondary site.
     */
    readonly secondarySiteVpcId: string | ros.IResolvable;

    /**
     * Property primarySiteZoneId: The zone ID of the primary site.
     */
    readonly primarySiteZoneId?: string | ros.IResolvable;

    /**
     * Property secondarySiteZoneId: The zone ID of the secondary site.
     */
    readonly secondarySiteZoneId?: string | ros.IResolvable;

    /**
     * Property sitePairType: The type of the site pair.
     */
    readonly sitePairType?: string | ros.IResolvable;
}

/**
 * Represents a `SitePair`.
 */
export interface ISitePair extends ros.IResource {
    readonly props: SitePairProps;

    /**
     * Attribute PrimarySiteId: The ID of the primary site.
     */
    readonly attrPrimarySiteId: ros.IResolvable | string;

    /**
     * Attribute SecondarySiteId: The ID of the secondary site.
     */
    readonly attrSecondarySiteId: ros.IResolvable | string;

    /**
     * Attribute SitePairId: The ID of the site pair.
     */
    readonly attrSitePairId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HDR::SitePair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSitePair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
export class SitePair extends ros.Resource implements ISitePair {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SitePairProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PrimarySiteId: The ID of the primary site.
     */
    public readonly attrPrimarySiteId: ros.IResolvable | string;

    /**
     * Attribute SecondarySiteId: The ID of the secondary site.
     */
    public readonly attrSecondarySiteId: ros.IResolvable | string;

    /**
     * Attribute SitePairId: The ID of the site pair.
     */
    public readonly attrSitePairId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SitePairProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSitePair = new RosSitePair(this, id,  {
            primarySiteType: props.primarySiteType,
            secondarySiteZoneId: props.secondarySiteZoneId,
            primarySiteZoneId: props.primarySiteZoneId,
            primarySiteName: props.primarySiteName,
            secondarySiteVpcId: props.secondarySiteVpcId,
            secondarySiteName: props.secondarySiteName,
            secondarySiteType: props.secondarySiteType,
            sitePairType: props.sitePairType,
            primarySiteVpcId: props.primarySiteVpcId,
            primarySiteRegionId: props.primarySiteRegionId,
            secondarySiteRegionId: props.secondarySiteRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSitePair;
        this.attrPrimarySiteId = rosSitePair.attrPrimarySiteId;
        this.attrSecondarySiteId = rosSitePair.attrSecondarySiteId;
        this.attrSitePairId = rosSitePair.attrSitePairId;
    }
}
