import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosSitePair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
export interface RosSitePairProps {
    /**
     * @Property primarySiteName: The name of the primary site.
     */
    readonly primarySiteName: string | ros.IResolvable;
    /**
     * @Property primarySiteRegionId: The region ID of the primary site.
     */
    readonly primarySiteRegionId: string | ros.IResolvable;
    /**
     * @Property primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
     */
    readonly primarySiteType: string | ros.IResolvable;
    /**
     * @Property primarySiteVpcId: The VPC ID of the primary site.
     */
    readonly primarySiteVpcId: string | ros.IResolvable;
    /**
     * @Property secondarySiteName: The name of the secondary site.
     */
    readonly secondarySiteName: string | ros.IResolvable;
    /**
     * @Property secondarySiteRegionId: The region ID of the secondary site.
     */
    readonly secondarySiteRegionId: string | ros.IResolvable;
    /**
     * @Property secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
     */
    readonly secondarySiteType: string | ros.IResolvable;
    /**
     * @Property secondarySiteVpcId: The VPC ID of the secondary site.
     */
    readonly secondarySiteVpcId: string | ros.IResolvable;
    /**
     * @Property primarySiteZoneId: The zone ID of the primary site.
     */
    readonly primarySiteZoneId?: string | ros.IResolvable;
    /**
     * @Property secondarySiteZoneId: The zone ID of the secondary site.
     */
    readonly secondarySiteZoneId?: string | ros.IResolvable;
    /**
     * @Property sitePairType: The type of the site pair.
     */
    readonly sitePairType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HDR::SitePair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SitePair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
export declare class RosSitePair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HDR::SitePair";
    /**
     * @Attribute PrimarySiteId: The ID of the primary site.
     */
    readonly attrPrimarySiteId: ros.IResolvable;
    /**
     * @Attribute SecondarySiteId: The ID of the secondary site.
     */
    readonly attrSecondarySiteId: ros.IResolvable;
    /**
     * @Attribute SitePairId: The ID of the site pair.
     */
    readonly attrSitePairId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property primarySiteName: The name of the primary site.
     */
    primarySiteName: string | ros.IResolvable;
    /**
     * @Property primarySiteRegionId: The region ID of the primary site.
     */
    primarySiteRegionId: string | ros.IResolvable;
    /**
     * @Property primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
     */
    primarySiteType: string | ros.IResolvable;
    /**
     * @Property primarySiteVpcId: The VPC ID of the primary site.
     */
    primarySiteVpcId: string | ros.IResolvable;
    /**
     * @Property secondarySiteName: The name of the secondary site.
     */
    secondarySiteName: string | ros.IResolvable;
    /**
     * @Property secondarySiteRegionId: The region ID of the secondary site.
     */
    secondarySiteRegionId: string | ros.IResolvable;
    /**
     * @Property secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
     */
    secondarySiteType: string | ros.IResolvable;
    /**
     * @Property secondarySiteVpcId: The VPC ID of the secondary site.
     */
    secondarySiteVpcId: string | ros.IResolvable;
    /**
     * @Property primarySiteZoneId: The zone ID of the primary site.
     */
    primarySiteZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property secondarySiteZoneId: The zone ID of the secondary site.
     */
    secondarySiteZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property sitePairType: The type of the site pair.
     */
    sitePairType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSitePairProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
