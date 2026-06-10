// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosVpd`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export interface RosVpdProps {

    /**
     * @Property cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    readonly cidr: string | ros.IResolvable;

    /**
     * @Property vpdName: Lingjun CIDR block instance name.
     */
    readonly vpdName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryCidrBlocks: List of additional network segment information.
     */
    readonly secondaryCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property subnets: Lingjun subnet information List.
     */
    readonly subnets?: Array<RosVpd.SubnetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags of vpd.
     */
    readonly tags?: RosVpd.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosVpdProps`
 *
 * @param properties - the TypeScript properties of a `RosVpdProps`
 *
 * @returns the result of the validation.
 */
function RosVpdPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.subnets && (Array.isArray(properties.subnets) || (typeof properties.subnets) === 'string')) {
        errors.collect(ros.propertyValidator('subnets', ros.validateLength)({
            data: properties.subnets.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('subnets', ros.listValidator(RosVpd_SubnetsPropertyValidator))(properties.subnets));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('cidr', ros.requiredValidator)(properties.cidr));
    errors.collect(ros.propertyValidator('cidr', ros.validateString)(properties.cidr));
    if(properties.secondaryCidrBlocks && (Array.isArray(properties.secondaryCidrBlocks) || (typeof properties.secondaryCidrBlocks) === 'string')) {
        errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.validateLength)({
            data: properties.secondaryCidrBlocks.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.listValidator(ros.validateString))(properties.secondaryCidrBlocks));
    errors.collect(ros.propertyValidator('vpdName', ros.requiredValidator)(properties.vpdName));
    errors.collect(ros.propertyValidator('vpdName', ros.validateString)(properties.vpdName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVpd_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosVpdProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd` resource
 *
 * @param properties - the TypeScript properties of a `RosVpdProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd` resource.
 */
// @ts-ignore TS6133
function rosVpdPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpdPropsValidator(properties).assertSuccess();
    }
    return {
      'Cidr': ros.stringToRosTemplate(properties.cidr),
      'VpdName': ros.stringToRosTemplate(properties.vpdName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecondaryCidrBlocks': ros.listMapper(ros.stringToRosTemplate)(properties.secondaryCidrBlocks),
      'Subnets': ros.listMapper(rosVpdSubnetsPropertyToRosTemplate)(properties.subnets),
      'Tags': ros.listMapper(rosVpdTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Eflo::Vpd`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpd` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export class RosVpd extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Eflo::Vpd";

    /**
     * @Attribute Cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    public readonly attrCidr: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute GmtModified: Modification time.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    public readonly attrSecondaryCidrBlocks: ros.IResolvable;

    /**
     * @Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpdId: The ID of the VPD.
     */
    public readonly attrVpdId: ros.IResolvable;

    /**
     * @Attribute VpdName: Lingjun CIDR block instance name.
     */
    public readonly attrVpdName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    public cidr: string | ros.IResolvable;

    /**
     * @Property vpdName: Lingjun CIDR block instance name.
     */
    public vpdName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryCidrBlocks: List of additional network segment information.
     */
    public secondaryCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property subnets: Lingjun subnet information List.
     */
    public subnets: Array<RosVpd.SubnetsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of vpd.
     */
    public tags: RosVpd.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpdProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpd.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCidr = this.getAtt('Cidr');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrGmtModified = this.getAtt('GmtModified');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecondaryCidrBlocks = this.getAtt('SecondaryCidrBlocks');
        this.attrTags = this.getAtt('Tags');
        this.attrVpdId = this.getAtt('VpdId');
        this.attrVpdName = this.getAtt('VpdName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidr = props.cidr;
        this.vpdName = props.vpdName;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryCidrBlocks = props.secondaryCidrBlocks;
        this.subnets = props.subnets;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cidr: this.cidr,
            vpdName: this.vpdName,
            resourceGroupId: this.resourceGroupId,
            secondaryCidrBlocks: this.secondaryCidrBlocks,
            subnets: this.subnets,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpdPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpd {
    /**
     * @stability external
     */
    export interface SubnetsProperty {
        /**
         * @Property subnetName: Lingjun subnet instance name.
         */
        readonly subnetName?: string | ros.IResolvable;
        /**
         * @Property type: Lingjun subnet usage type; Optional; Optional value:
     * - **General type does not fill in * *;
     * - **OOB**:OOB type
     * - **LB**: LB type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property cidr: The Subnet segment.
     * - The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8~65536 addresses.
     * For example, the network segment of the Lingjun network segment is 192.168.0.0\/16, and the network segments of the subnets under the Lingjun network segment are 192.168.0.0\/17 to 192.168.0.0\/29.
     * - The first and last three IP addresses of each subnet segment are reserved for the system.
     * For example, the four IP address blocks of the subnet are 192.168.1.0\/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
         */
        readonly cidr?: string | ros.IResolvable;
        /**
         * @Property zoneId: Availability Zone.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property regionId: Geography.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SubnetsProperty`
 *
 * @param properties - the TypeScript properties of a `SubnetsProperty`
 *
 * @returns the result of the validation.
 */
function RosVpd_SubnetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('subnetName', ros.validateString)(properties.subnetName));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('cidr', ros.validateString)(properties.cidr));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "SubnetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd.Subnets` resource
 *
 * @param properties - the TypeScript properties of a `SubnetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd.Subnets` resource.
 */
// @ts-ignore TS6133
function rosVpdSubnetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpd_SubnetsPropertyValidator(properties).assertSuccess();
    return {
      'SubnetName': ros.stringToRosTemplate(properties.subnetName),
      'Type': ros.stringToRosTemplate(properties.type),
      'Cidr': ros.stringToRosTemplate(properties.cidr),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

export namespace RosVpd {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVpd_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Eflo::Vpd.Tags` resource.
 */
// @ts-ignore TS6133
function rosVpdTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpd_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
