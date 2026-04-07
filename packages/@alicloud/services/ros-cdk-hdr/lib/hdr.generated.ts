// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosSitePairProps`
 *
 * @param properties - the TypeScript properties of a `RosSitePairProps`
 *
 * @returns the result of the validation.
 */
function RosSitePairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('primarySiteType', ros.requiredValidator)(properties.primarySiteType));
    errors.collect(ros.propertyValidator('primarySiteType', ros.validateString)(properties.primarySiteType));
    errors.collect(ros.propertyValidator('secondarySiteZoneId', ros.validateString)(properties.secondarySiteZoneId));
    errors.collect(ros.propertyValidator('primarySiteZoneId', ros.validateString)(properties.primarySiteZoneId));
    errors.collect(ros.propertyValidator('primarySiteName', ros.requiredValidator)(properties.primarySiteName));
    errors.collect(ros.propertyValidator('primarySiteName', ros.validateString)(properties.primarySiteName));
    errors.collect(ros.propertyValidator('secondarySiteVpcId', ros.requiredValidator)(properties.secondarySiteVpcId));
    errors.collect(ros.propertyValidator('secondarySiteVpcId', ros.validateString)(properties.secondarySiteVpcId));
    errors.collect(ros.propertyValidator('secondarySiteName', ros.requiredValidator)(properties.secondarySiteName));
    errors.collect(ros.propertyValidator('secondarySiteName', ros.validateString)(properties.secondarySiteName));
    errors.collect(ros.propertyValidator('secondarySiteType', ros.requiredValidator)(properties.secondarySiteType));
    errors.collect(ros.propertyValidator('secondarySiteType', ros.validateString)(properties.secondarySiteType));
    errors.collect(ros.propertyValidator('sitePairType', ros.validateString)(properties.sitePairType));
    errors.collect(ros.propertyValidator('primarySiteVpcId', ros.requiredValidator)(properties.primarySiteVpcId));
    errors.collect(ros.propertyValidator('primarySiteVpcId', ros.validateString)(properties.primarySiteVpcId));
    errors.collect(ros.propertyValidator('primarySiteRegionId', ros.requiredValidator)(properties.primarySiteRegionId));
    errors.collect(ros.propertyValidator('primarySiteRegionId', ros.validateString)(properties.primarySiteRegionId));
    errors.collect(ros.propertyValidator('secondarySiteRegionId', ros.requiredValidator)(properties.secondarySiteRegionId));
    errors.collect(ros.propertyValidator('secondarySiteRegionId', ros.validateString)(properties.secondarySiteRegionId));
    return errors.wrap('supplied properties not correct for "RosSitePairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HDR::SitePair` resource
 *
 * @param properties - the TypeScript properties of a `RosSitePairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HDR::SitePair` resource.
 */
// @ts-ignore TS6133
function rosSitePairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSitePairPropsValidator(properties).assertSuccess();
    }
    return {
      'PrimarySiteName': ros.stringToRosTemplate(properties.primarySiteName),
      'PrimarySiteRegionId': ros.stringToRosTemplate(properties.primarySiteRegionId),
      'PrimarySiteType': ros.stringToRosTemplate(properties.primarySiteType),
      'PrimarySiteVpcId': ros.stringToRosTemplate(properties.primarySiteVpcId),
      'SecondarySiteName': ros.stringToRosTemplate(properties.secondarySiteName),
      'SecondarySiteRegionId': ros.stringToRosTemplate(properties.secondarySiteRegionId),
      'SecondarySiteType': ros.stringToRosTemplate(properties.secondarySiteType),
      'SecondarySiteVpcId': ros.stringToRosTemplate(properties.secondarySiteVpcId),
      'PrimarySiteZoneId': ros.stringToRosTemplate(properties.primarySiteZoneId),
      'SecondarySiteZoneId': ros.stringToRosTemplate(properties.secondarySiteZoneId),
      'SitePairType': ros.stringToRosTemplate(properties.sitePairType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HDR::SitePair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SitePair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
export class RosSitePair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HDR::SitePair";

    /**
     * @Attribute PrimarySiteId: The ID of the primary site.
     */
    public readonly attrPrimarySiteId: ros.IResolvable;

    /**
     * @Attribute SecondarySiteId: The ID of the secondary site.
     */
    public readonly attrSecondarySiteId: ros.IResolvable;

    /**
     * @Attribute SitePairId: The ID of the site pair.
     */
    public readonly attrSitePairId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property primarySiteName: The name of the primary site.
     */
    public primarySiteName: string | ros.IResolvable;

    /**
     * @Property primarySiteRegionId: The region ID of the primary site.
     */
    public primarySiteRegionId: string | ros.IResolvable;

    /**
     * @Property primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
     */
    public primarySiteType: string | ros.IResolvable;

    /**
     * @Property primarySiteVpcId: The VPC ID of the primary site.
     */
    public primarySiteVpcId: string | ros.IResolvable;

    /**
     * @Property secondarySiteName: The name of the secondary site.
     */
    public secondarySiteName: string | ros.IResolvable;

    /**
     * @Property secondarySiteRegionId: The region ID of the secondary site.
     */
    public secondarySiteRegionId: string | ros.IResolvable;

    /**
     * @Property secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
     */
    public secondarySiteType: string | ros.IResolvable;

    /**
     * @Property secondarySiteVpcId: The VPC ID of the secondary site.
     */
    public secondarySiteVpcId: string | ros.IResolvable;

    /**
     * @Property primarySiteZoneId: The zone ID of the primary site.
     */
    public primarySiteZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property secondarySiteZoneId: The zone ID of the secondary site.
     */
    public secondarySiteZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property sitePairType: The type of the site pair.
     */
    public sitePairType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSitePairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSitePair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrimarySiteId = this.getAtt('PrimarySiteId');
        this.attrSecondarySiteId = this.getAtt('SecondarySiteId');
        this.attrSitePairId = this.getAtt('SitePairId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.primarySiteName = props.primarySiteName;
        this.primarySiteRegionId = props.primarySiteRegionId;
        this.primarySiteType = props.primarySiteType;
        this.primarySiteVpcId = props.primarySiteVpcId;
        this.secondarySiteName = props.secondarySiteName;
        this.secondarySiteRegionId = props.secondarySiteRegionId;
        this.secondarySiteType = props.secondarySiteType;
        this.secondarySiteVpcId = props.secondarySiteVpcId;
        this.primarySiteZoneId = props.primarySiteZoneId;
        this.secondarySiteZoneId = props.secondarySiteZoneId;
        this.sitePairType = props.sitePairType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            primarySiteName: this.primarySiteName,
            primarySiteRegionId: this.primarySiteRegionId,
            primarySiteType: this.primarySiteType,
            primarySiteVpcId: this.primarySiteVpcId,
            secondarySiteName: this.secondarySiteName,
            secondarySiteRegionId: this.secondarySiteRegionId,
            secondarySiteType: this.secondarySiteType,
            secondarySiteVpcId: this.secondarySiteVpcId,
            primarySiteZoneId: this.primarySiteZoneId,
            secondarySiteZoneId: this.secondarySiteZoneId,
            sitePairType: this.sitePairType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSitePairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
