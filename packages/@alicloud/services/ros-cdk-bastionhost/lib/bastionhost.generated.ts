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

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export interface RosInstanceProps {

    /**
     * @Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    readonly extendedStoragePlans: number | ros.IResolvable;

    /**
     * @Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    readonly extraBandwidth: number | ros.IResolvable;

    /**
     * @Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    readonly plan: number | ros.IResolvable;

    /**
     * @Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    readonly startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;

    /**
     * @Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows, database assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     */
    readonly version: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('extraBandwidth', ros.requiredValidator)(properties.extraBandwidth));
    if(properties.extraBandwidth && (typeof properties.extraBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('extraBandwidth', ros.validateRange)({
            data: properties.extraBandwidth,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('extraBandwidth', ros.validateNumber)(properties.extraBandwidth));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    if(properties.version && (typeof properties.version) !== 'object') {
        errors.collect(ros.propertyValidator('version', ros.validateAllowedValues)({
          data: properties.version,
          allowedValues: ["Enterprise","Basic"],
        }));
    }
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('extendedStoragePlans', ros.requiredValidator)(properties.extendedStoragePlans));
    if(properties.extendedStoragePlans && (typeof properties.extendedStoragePlans) !== 'object') {
        errors.collect(ros.propertyValidator('extendedStoragePlans', ros.validateRange)({
            data: properties.extendedStoragePlans,
            min: 0,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('extendedStoragePlans', ros.validateNumber)(properties.extendedStoragePlans));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('plan', ros.requiredValidator)(properties.plan));
    if(properties.plan && (typeof properties.plan) !== 'object') {
        errors.collect(ros.propertyValidator('plan', ros.validateAllowedValues)({
          data: properties.plan,
          allowedValues: [50,100,200,500,1000,2000,5000,10000],
        }));
    }
    errors.collect(ros.propertyValidator('plan', ros.validateNumber)(properties.plan));
    errors.collect(ros.propertyValidator('startInstanceParam', ros.requiredValidator)(properties.startInstanceParam));
    errors.collect(ros.propertyValidator('startInstanceParam', RosInstance_StartInstanceParamPropertyValidator)(properties.startInstanceParam));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      ExtendedStoragePlans: ros.numberToRosTemplate(properties.extendedStoragePlans),
      ExtraBandwidth: ros.numberToRosTemplate(properties.extraBandwidth),
      Plan: ros.numberToRosTemplate(properties.plan),
      StartInstanceParam: rosInstanceStartInstanceParamPropertyToRosTemplate(properties.startInstanceParam),
      Version: ros.stringToRosTemplate(properties.version),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Instance`, which is used to create a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Instance";

    /**
     * @Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    public extendedStoragePlans: number | ros.IResolvable;

    /**
     * @Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    public extraBandwidth: number | ros.IResolvable;

    /**
     * @Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    public plan: number | ros.IResolvable;

    /**
     * @Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    public startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;

    /**
     * @Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows, database assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     */
    public version: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.extendedStoragePlans = props.extendedStoragePlans;
        this.extraBandwidth = props.extraBandwidth;
        this.plan = props.plan;
        this.startInstanceParam = props.startInstanceParam;
        this.version = props.version;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            extendedStoragePlans: this.extendedStoragePlans,
            extraBandwidth: this.extraBandwidth,
            plan: this.plan,
            startInstanceParam: this.startInstanceParam,
            version: this.version,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface StartInstanceParamProperty {
        /**
         * @Property vswitchId: The VSwitch ID bound to the bastion host instance.
         */
        readonly vswitchId: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: List of security group IDs bound to the bastion host instance
         */
        readonly securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StartInstanceParamProperty`
 *
 * @param properties - the TypeScript properties of a `StartInstanceParamProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_StartInstanceParamPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vswitchId', ros.requiredValidator)(properties.vswitchId));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.requiredValidator)(properties.securityGroupIds));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    return errors.wrap('supplied properties not correct for "StartInstanceParamProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance.StartInstanceParam` resource
 *
 * @param properties - the TypeScript properties of a `StartInstanceParamProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance.StartInstanceParam` resource.
 */
// @ts-ignore TS6133
function rosInstanceStartInstanceParamPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_StartInstanceParamPropertyValidator(properties).assertSuccess();
    return {
      VswitchId: ros.stringToRosTemplate(properties.vswitchId),
      SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
    };
}
