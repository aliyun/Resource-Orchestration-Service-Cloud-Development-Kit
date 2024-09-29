// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
export interface RosInstanceProps {

    /**
     * @Property imageScanner: Security scan engine.
     */
    readonly imageScanner: string | ros.IResolvable;

    /**
     * @Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    readonly instanceStorageName?: string | ros.IResolvable;

    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;

    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
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
    errors.collect(ros.propertyValidator('instanceStorageName', ros.validateString)(properties.instanceStorageName));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('imageScanner', ros.requiredValidator)(properties.imageScanner));
    if(properties.imageScanner && (typeof properties.imageScanner) !== 'object') {
        errors.collect(ros.propertyValidator('imageScanner', ros.validateAllowedValues)({
          data: properties.imageScanner,
          allowedValues: ["ACR","SAS"],
        }));
    }
    errors.collect(ros.propertyValidator('imageScanner', ros.validateString)(properties.imageScanner));
    if(properties.renewalStatus && (typeof properties.renewalStatus) !== 'object') {
        errors.collect(ros.propertyValidator('renewalStatus', ros.validateAllowedValues)({
          data: properties.renewalStatus,
          allowedValues: ["AutoRenewal","ManualRenewal"],
        }));
    }
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('renewPeriod', ros.validateNumber)(properties.renewPeriod));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["Basic","Standard","Advanced"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ImageScanner': ros.stringToRosTemplate(properties.imageScanner),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'Period': ros.numberToRosTemplate(properties.period),
      'InstanceStorageName': ros.stringToRosTemplate(properties.instanceStorageName),
      'RenewalStatus': ros.stringToRosTemplate(properties.renewalStatus),
      'RenewPeriod': ros.numberToRosTemplate(properties.renewPeriod),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Instance`, which is used to create a Container Registry Enterprise Edition instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Instance";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: InstanceName.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceSpecification: InstanceSpecification.
     */
    public readonly attrInstanceSpecification: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: Last modification time.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageScanner: Security scan engine.
     */
    public imageScanner: string | ros.IResolvable;

    /**
     * @Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    public instanceStorageName: string | ros.IResolvable | undefined;

    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    public renewalStatus: string | ros.IResolvable | undefined;

    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    public renewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceSpecification = this.getAtt('InstanceSpecification');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageScanner = props.imageScanner;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.period = props.period;
        this.instanceStorageName = props.instanceStorageName;
        this.renewalStatus = props.renewalStatus;
        this.renewPeriod = props.renewPeriod;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageScanner: this.imageScanner,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            period: this.period,
            instanceStorageName: this.instanceStorageName,
            renewalStatus: this.renewalStatus,
            renewPeriod: this.renewPeriod,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstanceEndpointAclPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
export interface RosInstanceEndpointAclPolicyProps {

    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property comment: The description of the entry.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceEndpointAclPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceEndpointAclPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('moduleName', ros.validateString)(properties.moduleName));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosInstanceEndpointAclPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource.
 */
// @ts-ignore TS6133
function rosInstanceEndpointAclPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceEndpointAclPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'Entry': ros.stringToRosTemplate(properties.entry),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'EndpointType': ros.stringToRosTemplate(properties.endpointType),
      'ModuleName': ros.stringToRosTemplate(properties.moduleName),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceEndpointAclPolicy`, which is used to create a whitelist policy for the public endpoint of an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceEndpointAclPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
export class RosInstanceEndpointAclPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceEndpointAclPolicy";

    /**
     * @Attribute Entry: The IP address range that is allowed to access the instance.
     */
    public readonly attrEntry: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    public entry: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property comment: The description of the entry.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the endpoint.
     */
    public endpointType: string | ros.IResolvable | undefined;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    public moduleName: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceEndpointAclPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceEndpointAclPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEntry = this.getAtt('Entry');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.entry = props.entry;
        this.instanceId = props.instanceId;
        this.comment = props.comment;
        this.endpointType = props.endpointType;
        this.moduleName = props.moduleName;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            entry: this.entry,
            instanceId: this.instanceId,
            comment: this.comment,
            endpointType: this.endpointType,
            moduleName: this.moduleName,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceEndpointAclPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstanceVpcEndpointLinkedVpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export interface RosInstanceVpcEndpointLinkedVpcProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vswitchId: The ID of the vswitch.
     */
    readonly vswitchId: string | ros.IResolvable;

    /**
     * @Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. 
     * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
     * Valid values:
     * - **true**: Automatically creates a Privatezone record.
     * - **false** (default): Do not automatically create Privatezone records.
     */
    readonly enableCreateDnsRecordInPvzt?: boolean | ros.IResolvable;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
     * - **Registry** (default): Access the image repository.
     * - **Chart**: Access Helm Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceVpcEndpointLinkedVpcPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableCreateDnsRecordInPvzt', ros.validateBoolean)(properties.enableCreateDnsRecordInPvzt));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('moduleName', ros.validateString)(properties.moduleName));
    errors.collect(ros.propertyValidator('vswitchId', ros.requiredValidator)(properties.vswitchId));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    return errors.wrap('supplied properties not correct for "RosInstanceVpcEndpointLinkedVpcProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceVpcEndpointLinkedVpc` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceVpcEndpointLinkedVpcProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceVpcEndpointLinkedVpc` resource.
 */
// @ts-ignore TS6133
function rosInstanceVpcEndpointLinkedVpcPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceVpcEndpointLinkedVpcPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VswitchId': ros.stringToRosTemplate(properties.vswitchId),
      'EnableCreateDNSRecordInPvzt': ros.booleanToRosTemplate(properties.enableCreateDnsRecordInPvzt),
      'ModuleName': ros.stringToRosTemplate(properties.moduleName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceVpcEndpointLinkedVpc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export class RosInstanceVpcEndpointLinkedVpc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceVpcEndpointLinkedVpc";

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the vpc.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute VswitchId: The ID of the vswitch.
     */
    public readonly attrVswitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the vpc.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vswitchId: The ID of the vswitch.
     */
    public vswitchId: string | ros.IResolvable;

    /**
     * @Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. 
     * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
     * Valid values:
     * - **true**: Automatically creates a Privatezone record.
     * - **false** (default): Do not automatically create Privatezone records.
     */
    public enableCreateDnsRecordInPvzt: boolean | ros.IResolvable | undefined;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
     * - **Registry** (default): Access the image repository.
     * - **Chart**: Access Helm Chart.
     */
    public moduleName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceVpcEndpointLinkedVpcProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceVpcEndpointLinkedVpc.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVswitchId = this.getAtt('VswitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.vpcId = props.vpcId;
        this.vswitchId = props.vswitchId;
        this.enableCreateDnsRecordInPvzt = props.enableCreateDnsRecordInPvzt;
        this.moduleName = props.moduleName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            vpcId: this.vpcId,
            vswitchId: this.vswitchId,
            enableCreateDnsRecordInPvzt: this.enableCreateDnsRecordInPvzt,
            moduleName: this.moduleName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceVpcEndpointLinkedVpcPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
export interface RosNamespaceProps {

    /**
     * @Property namespace: The name of the namespace.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    readonly autoCreate?: boolean | ros.IResolvable;

    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    readonly defaultVisibility?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('autoCreate', ros.validateBoolean)(properties.autoCreate));
    if(properties.defaultVisibility && (typeof properties.defaultVisibility) !== 'object') {
        errors.collect(ros.propertyValidator('defaultVisibility', ros.validateAllowedValues)({
          data: properties.defaultVisibility,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultVisibility', ros.validateString)(properties.defaultVisibility));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    if(properties.namespace && (Array.isArray(properties.namespace) || (typeof properties.namespace) === 'string')) {
        errors.collect(ros.propertyValidator('namespace', ros.validateLength)({
            data: properties.namespace.length,
            min: 2,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'AutoCreate': ros.booleanToRosTemplate(properties.autoCreate),
      'DefaultVisibility': ros.stringToRosTemplate(properties.defaultVisibility),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Namespace`, which is used to create a namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Namespace";

    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute NamespaceId: The namespace ID.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespace: The name of the namespace.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    public autoCreate: boolean | ros.IResolvable | undefined;

    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    public defaultVisibility: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.autoCreate = props.autoCreate;
        this.defaultVisibility = props.defaultVisibility;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespace: this.namespace,
            autoCreate: this.autoCreate,
            defaultVisibility: this.defaultVisibility,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRepository`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export interface RosRepositoryProps {

    /**
     * @Property repoName: The name of the repository.
     */
    readonly repoName: string | ros.IResolvable;

    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly repoNamespace: string | ros.IResolvable;

    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    readonly repoType: string | ros.IResolvable;

    /**
     * @Property summary: The summary of the repository.
     */
    readonly summary: string | ros.IResolvable;

    /**
     * @Property detail: The description of the repository.
     */
    readonly detail?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;

    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    readonly tagImmutability?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRepositoryProps`
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the result of the validation.
 */
function RosRepositoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagImmutability', ros.validateBoolean)(properties.tagImmutability));
    errors.collect(ros.propertyValidator('repoNamespace', ros.requiredValidator)(properties.repoNamespace));
    if(properties.repoNamespace && (Array.isArray(properties.repoNamespace) || (typeof properties.repoNamespace) === 'string')) {
        errors.collect(ros.propertyValidator('repoNamespace', ros.validateLength)({
            data: properties.repoNamespace.length,
            min: 2,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('repoNamespace', ros.validateString)(properties.repoNamespace));
    errors.collect(ros.propertyValidator('repoType', ros.requiredValidator)(properties.repoType));
    if(properties.repoType && (typeof properties.repoType) !== 'object') {
        errors.collect(ros.propertyValidator('repoType', ros.validateAllowedValues)({
          data: properties.repoType,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('repoType', ros.validateString)(properties.repoType));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('repoName', ros.requiredValidator)(properties.repoName));
    if(properties.repoName && (Array.isArray(properties.repoName) || (typeof properties.repoName) === 'string')) {
        errors.collect(ros.propertyValidator('repoName', ros.validateLength)({
            data: properties.repoName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('repoName', ros.validateString)(properties.repoName));
    errors.collect(ros.propertyValidator('summary', ros.requiredValidator)(properties.summary));
    if(properties.summary && (Array.isArray(properties.summary) || (typeof properties.summary) === 'string')) {
        errors.collect(ros.propertyValidator('summary', ros.validateLength)({
            data: properties.summary.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('summary', ros.validateString)(properties.summary));
    if(properties.detail && (Array.isArray(properties.detail) || (typeof properties.detail) === 'string')) {
        errors.collect(ros.propertyValidator('detail', ros.validateLength)({
            data: properties.detail.length,
            min: undefined,
            max: 2000,
          }));
    }
    errors.collect(ros.propertyValidator('detail', ros.validateString)(properties.detail));
    errors.collect(ros.propertyValidator('repoSource', RosRepository_RepoSourcePropertyValidator)(properties.repoSource));
    return errors.wrap('supplied properties not correct for "RosRepositoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource.
 */
// @ts-ignore TS6133
function rosRepositoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRepositoryPropsValidator(properties).assertSuccess();
    }
    return {
      'RepoName': ros.stringToRosTemplate(properties.repoName),
      'RepoNamespace': ros.stringToRosTemplate(properties.repoNamespace),
      'RepoType': ros.stringToRosTemplate(properties.repoType),
      'Summary': ros.stringToRosTemplate(properties.summary),
      'Detail': ros.stringToRosTemplate(properties.detail),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RepoSource': rosRepositoryRepoSourcePropertyToRosTemplate(properties.repoSource),
      'TagImmutability': ros.booleanToRosTemplate(properties.tagImmutability),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Repository`, which is used to create an image repository.
 * @Note This class does not contain additional functions, so it is recommended to use the `Repository` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export class RosRepository extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Repository";

    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute RepoId: The repository ID.
     */
    public readonly attrRepoId: ros.IResolvable;

    /**
     * @Attribute RepoName: The name of the repository.
     */
    public readonly attrRepoName: ros.IResolvable;

    /**
     * @Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    public readonly attrRepoNamespace: ros.IResolvable;

    /**
     * @Attribute RepoType: The type of the repository.
     */
    public readonly attrRepoType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property repoName: The name of the repository.
     */
    public repoName: string | ros.IResolvable;

    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    public repoNamespace: string | ros.IResolvable;

    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    public repoType: string | ros.IResolvable;

    /**
     * @Property summary: The summary of the repository.
     */
    public summary: string | ros.IResolvable;

    /**
     * @Property detail: The description of the repository.
     */
    public detail: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property repoSource: Code Source message.
     */
    public repoSource: RosRepository.RepoSourceProperty | ros.IResolvable | undefined;

    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    public tagImmutability: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRepository.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrRepoId = this.getAtt('RepoId');
        this.attrRepoName = this.getAtt('RepoName');
        this.attrRepoNamespace = this.getAtt('RepoNamespace');
        this.attrRepoType = this.getAtt('RepoType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repoName = props.repoName;
        this.repoNamespace = props.repoNamespace;
        this.repoType = props.repoType;
        this.summary = props.summary;
        this.detail = props.detail;
        this.instanceId = props.instanceId;
        this.repoSource = props.repoSource;
        this.tagImmutability = props.tagImmutability;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            repoName: this.repoName,
            repoNamespace: this.repoNamespace,
            repoType: this.repoType,
            summary: this.summary,
            detail: this.detail,
            instanceId: this.instanceId,
            repoSource: this.repoSource,
            tagImmutability: this.tagImmutability,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRepositoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRepository {
    /**
     * @stability external
     */
    export interface RepoSourceProperty {
        /**
         * @Property isAutoBuild: Whether to enable automatic construction
         */
        readonly isAutoBuild: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoName: Source code warehouse name
         */
        readonly sourceRepoName: string | ros.IResolvable;
        /**
         * @Property sourceRepoNamespace: Source code repository namespace
         */
        readonly sourceRepoNamespace: string | ros.IResolvable;
        /**
         * @Property isOversea: Whether to enable overseas construction
         */
        readonly isOversea: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoType: code source type. Allow values: 
     * CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
         */
        readonly sourceRepoType: string | ros.IResolvable;
        /**
         * @Property isDisableCache: Whether to disable Cache at build time
         */
        readonly isDisableCache: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RepoSourceProperty`
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the result of the validation.
 */
function RosRepository_RepoSourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isAutoBuild', ros.requiredValidator)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('isAutoBuild', ros.validateBoolean)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.requiredValidator)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.validateString)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.requiredValidator)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.validateString)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('isOversea', ros.requiredValidator)(properties.isOversea));
    errors.collect(ros.propertyValidator('isOversea', ros.validateBoolean)(properties.isOversea));
    errors.collect(ros.propertyValidator('sourceRepoType', ros.requiredValidator)(properties.sourceRepoType));
    if(properties.sourceRepoType && (typeof properties.sourceRepoType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceRepoType', ros.validateAllowedValues)({
          data: properties.sourceRepoType,
          allowedValues: ["CODE","GITHUB","GITLAB","BITBUCKET","CODEUP","GITEE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceRepoType', ros.validateString)(properties.sourceRepoType));
    errors.collect(ros.propertyValidator('isDisableCache', ros.requiredValidator)(properties.isDisableCache));
    errors.collect(ros.propertyValidator('isDisableCache', ros.validateBoolean)(properties.isDisableCache));
    return errors.wrap('supplied properties not correct for "RepoSourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource.
 */
// @ts-ignore TS6133
function rosRepositoryRepoSourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRepository_RepoSourcePropertyValidator(properties).assertSuccess();
    return {
      'IsAutoBuild': ros.booleanToRosTemplate(properties.isAutoBuild),
      'SourceRepoName': ros.stringToRosTemplate(properties.sourceRepoName),
      'SourceRepoNamespace': ros.stringToRosTemplate(properties.sourceRepoNamespace),
      'IsOversea': ros.booleanToRosTemplate(properties.isOversea),
      'SourceRepoType': ros.stringToRosTemplate(properties.sourceRepoType),
      'IsDisableCache': ros.booleanToRosTemplate(properties.isDisableCache),
    };
}

/**
 * Properties for defining a `RosUserInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export interface RosUserInfoProps {

    /**
     * @Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;

    /**
     * @Property instanceId: The ID of enterprise edition ACR instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserInfoProps`
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the result of the validation.
 */
function RosUserInfoPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('user', ros.requiredValidator)(properties.user));
    errors.collect(ros.propertyValidator('user', RosUserInfo_UserPropertyValidator)(properties.user));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosUserInfoProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource.
 */
// @ts-ignore TS6133
function rosUserInfoPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserInfoPropsValidator(properties).assertSuccess();
    }
    return {
      'User': rosUserInfoUserPropertyToRosTemplate(properties.user),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::UserInfo`, which is used to create the information about a user.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export class RosUserInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::UserInfo";

    /**
     * @Attribute LoginName: Login name.
     */
    public readonly attrLoginName: ros.IResolvable;

    /**
     * @Attribute UserId: User ID.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property user: User info. If user exists, will update user info.
     */
    public user: RosUserInfo.UserProperty | ros.IResolvable;

    /**
     * @Property instanceId: The ID of enterprise edition ACR instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserInfoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoginName = this.getAtt('LoginName');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.user = props.user;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            user: this.user,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserInfoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUserInfo {
    /**
     * @stability external
     */
    export interface UserProperty {
        /**
         * @Property password: Password.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UserProperty`
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the result of the validation.
 */
function RosUserInfo_UserPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "UserProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource.
 */
// @ts-ignore TS6133
function rosUserInfoUserPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUserInfo_UserPropertyValidator(properties).assertSuccess();
    return {
      'Password': ros.stringToRosTemplate(properties.password),
    };
}
