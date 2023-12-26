// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export interface RosHostProps {

    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    readonly activeAddressType: string | ros.IResolvable;

    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    readonly hostName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    readonly osType: string | ros.IResolvable;

    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    readonly hostPrivateAddress?: string | ros.IResolvable;

    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    readonly hostPublicAddress?: string | ros.IResolvable;

    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly instanceRegionId?: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly sourceInstanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHostProps`
 *
 * @param properties - the TypeScript properties of a `RosHostProps`
 *
 * @returns the result of the validation.
 */
function RosHostPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.comment && (Array.isArray(properties.comment) || (typeof properties.comment) === 'string')) {
        errors.collect(ros.propertyValidator('comment', ros.validateLength)({
            data: properties.comment.length,
            min: undefined,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('activeAddressType', ros.requiredValidator)(properties.activeAddressType));
    if(properties.activeAddressType && (typeof properties.activeAddressType) !== 'object') {
        errors.collect(ros.propertyValidator('activeAddressType', ros.validateAllowedValues)({
          data: properties.activeAddressType,
          allowedValues: ["Private","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('activeAddressType', ros.validateString)(properties.activeAddressType));
    errors.collect(ros.propertyValidator('hostPrivateAddress', ros.validateString)(properties.hostPrivateAddress));
    errors.collect(ros.propertyValidator('instanceRegionId', ros.validateString)(properties.instanceRegionId));
    errors.collect(ros.propertyValidator('hostPublicAddress', ros.validateString)(properties.hostPublicAddress));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('osType', ros.requiredValidator)(properties.osType));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["Linux","Windows"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('hostName', ros.requiredValidator)(properties.hostName));
    if(properties.hostName && (Array.isArray(properties.hostName) || (typeof properties.hostName) === 'string')) {
        errors.collect(ros.propertyValidator('hostName', ros.validateLength)({
            data: properties.hostName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: ["Ecs","Local","Rds"],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    return errors.wrap('supplied properties not correct for "RosHostProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Host` resource
 *
 * @param properties - the TypeScript properties of a `RosHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Host` resource.
 */
// @ts-ignore TS6133
function rosHostPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHostPropsValidator(properties).assertSuccess();
    }
    return {
      ActiveAddressType: ros.stringToRosTemplate(properties.activeAddressType),
      HostName: ros.stringToRosTemplate(properties.hostName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      OSType: ros.stringToRosTemplate(properties.osType),
      Source: ros.stringToRosTemplate(properties.source),
      Comment: ros.stringToRosTemplate(properties.comment),
      HostPrivateAddress: ros.stringToRosTemplate(properties.hostPrivateAddress),
      HostPublicAddress: ros.stringToRosTemplate(properties.hostPublicAddress),
      InstanceRegionId: ros.stringToRosTemplate(properties.instanceRegionId),
      SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Host`, which is used to create a host for O&M in a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Host` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export class RosHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Host";

    /**
     * @Attribute HostId: The ID of the host that was created.
     */
    public readonly attrHostId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    public activeAddressType: string | ros.IResolvable;

    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    public hostName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    public osType: string | ros.IResolvable;

    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    public source: string | ros.IResolvable;

    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    public hostPrivateAddress: string | ros.IResolvable | undefined;

    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    public hostPublicAddress: string | ros.IResolvable | undefined;

    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    public instanceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    public sourceInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostId = this.getAtt('HostId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.activeAddressType = props.activeAddressType;
        this.hostName = props.hostName;
        this.instanceId = props.instanceId;
        this.osType = props.osType;
        this.source = props.source;
        this.comment = props.comment;
        this.hostPrivateAddress = props.hostPrivateAddress;
        this.hostPublicAddress = props.hostPublicAddress;
        this.instanceRegionId = props.instanceRegionId;
        this.sourceInstanceId = props.sourceInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            activeAddressType: this.activeAddressType,
            hostName: this.hostName,
            instanceId: this.instanceId,
            osType: this.osType,
            source: this.source,
            comment: this.comment,
            hostPrivateAddress: this.hostPrivateAddress,
            hostPublicAddress: this.hostPublicAddress,
            instanceRegionId: this.instanceRegionId,
            sourceInstanceId: this.sourceInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
