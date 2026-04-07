// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosArtifactLifecycleRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export interface RosArtifactLifecycleRuleProps {

    /**
     * @Property auto: Specify whether to automatically execute the lifecycle management rule.
     */
    readonly auto: boolean | ros.IResolvable;

    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;

    /**
     * @Property repoName: The name of the image repository.
     */
    readonly repoName?: string | ros.IResolvable;

    /**
     * @Property retentionTagCount: The number of images that you want to retain.
     */
    readonly retentionTagCount?: number | ros.IResolvable;

    /**
     * @Property scheduleTime: The execution cycle of the lifecycle management rule.
     */
    readonly scheduleTime?: string | ros.IResolvable;

    /**
     * @Property scope: The deletion scope.
     */
    readonly scope?: string | ros.IResolvable;

    /**
     * @Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    readonly tagRegexp?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosArtifactLifecycleRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosArtifactLifecycleRuleProps`
 *
 * @returns the result of the validation.
 */
function RosArtifactLifecycleRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('auto', ros.requiredValidator)(properties.auto));
    errors.collect(ros.propertyValidator('auto', ros.validateBoolean)(properties.auto));
    errors.collect(ros.propertyValidator('namespaceName', ros.validateString)(properties.namespaceName));
    errors.collect(ros.propertyValidator('retentionTagCount', ros.validateNumber)(properties.retentionTagCount));
    errors.collect(ros.propertyValidator('scheduleTime', ros.validateString)(properties.scheduleTime));
    errors.collect(ros.propertyValidator('scope', ros.validateString)(properties.scope));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('tagRegexp', ros.validateString)(properties.tagRegexp));
    errors.collect(ros.propertyValidator('repoName', ros.validateString)(properties.repoName));
    return errors.wrap('supplied properties not correct for "RosArtifactLifecycleRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::ArtifactLifecycleRule` resource
 *
 * @param properties - the TypeScript properties of a `RosArtifactLifecycleRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::ArtifactLifecycleRule` resource.
 */
// @ts-ignore TS6133
function rosArtifactLifecycleRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosArtifactLifecycleRulePropsValidator(properties).assertSuccess();
    }
    return {
      'Auto': ros.booleanToRosTemplate(properties.auto),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'NamespaceName': ros.stringToRosTemplate(properties.namespaceName),
      'RepoName': ros.stringToRosTemplate(properties.repoName),
      'RetentionTagCount': ros.numberToRosTemplate(properties.retentionTagCount),
      'ScheduleTime': ros.stringToRosTemplate(properties.scheduleTime),
      'Scope': ros.stringToRosTemplate(properties.scope),
      'TagRegexp': ros.stringToRosTemplate(properties.tagRegexp),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::ArtifactLifecycleRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ArtifactLifecycleRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export class RosArtifactLifecycleRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::ArtifactLifecycleRule";

    /**
     * @Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    public readonly attrArtifactLifecycleRuleId: ros.IResolvable;

    /**
     * @Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    public readonly attrAuto: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: ACR Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute NamespaceName: The name of the namespace.
     */
    public readonly attrNamespaceName: ros.IResolvable;

    /**
     * @Attribute RepoName: The name of the image repository.
     */
    public readonly attrRepoName: ros.IResolvable;

    /**
     * @Attribute RetentionTagCount: The number of images that you want to retain.
     */
    public readonly attrRetentionTagCount: ros.IResolvable;

    /**
     * @Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    public readonly attrScheduleTime: ros.IResolvable;

    /**
     * @Attribute Scope: The deletion scope.
     */
    public readonly attrScope: ros.IResolvable;

    /**
     * @Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    public readonly attrTagRegexp: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property auto: Specify whether to automatically execute the lifecycle management rule.
     */
    public auto: boolean | ros.IResolvable;

    /**
     * @Property instanceId: ACR Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property namespaceName: The name of the namespace.
     */
    public namespaceName: string | ros.IResolvable | undefined;

    /**
     * @Property repoName: The name of the image repository.
     */
    public repoName: string | ros.IResolvable | undefined;

    /**
     * @Property retentionTagCount: The number of images that you want to retain.
     */
    public retentionTagCount: number | ros.IResolvable | undefined;

    /**
     * @Property scheduleTime: The execution cycle of the lifecycle management rule.
     */
    public scheduleTime: string | ros.IResolvable | undefined;

    /**
     * @Property scope: The deletion scope.
     */
    public scope: string | ros.IResolvable | undefined;

    /**
     * @Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    public tagRegexp: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosArtifactLifecycleRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosArtifactLifecycleRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArtifactLifecycleRuleId = this.getAtt('ArtifactLifecycleRuleId');
        this.attrAuto = this.getAtt('Auto');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrNamespaceName = this.getAtt('NamespaceName');
        this.attrRepoName = this.getAtt('RepoName');
        this.attrRetentionTagCount = this.getAtt('RetentionTagCount');
        this.attrScheduleTime = this.getAtt('ScheduleTime');
        this.attrScope = this.getAtt('Scope');
        this.attrTagRegexp = this.getAtt('TagRegexp');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.auto = props.auto;
        this.instanceId = props.instanceId;
        this.namespaceName = props.namespaceName;
        this.repoName = props.repoName;
        this.retentionTagCount = props.retentionTagCount;
        this.scheduleTime = props.scheduleTime;
        this.scope = props.scope;
        this.tagRegexp = props.tagRegexp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            auto: this.auto,
            instanceId: this.instanceId,
            namespaceName: this.namespaceName,
            repoName: this.repoName,
            retentionTagCount: this.retentionTagCount,
            scheduleTime: this.scheduleTime,
            scope: this.scope,
            tagRegexp: this.tagRegexp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosArtifactLifecycleRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
export interface RosInstanceProps {

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
     * @Property imageScanner: Security scan engine.
     */
    readonly imageScanner?: string | ros.IResolvable;

    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    readonly instanceStorageName?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    readonly period?: number | ros.IResolvable;

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
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'ImageScanner': ros.stringToRosTemplate(properties.imageScanner),
      'InstanceStorageName': ros.stringToRosTemplate(properties.instanceStorageName),
      'Period': ros.numberToRosTemplate(properties.period),
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
     * @Attribute InstanceSpecification: The instance specification.
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
     * @Property imageScanner: Security scan engine.
     */
    public imageScanner: string | ros.IResolvable | undefined;

    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    public instanceStorageName: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    public period: number | ros.IResolvable | undefined;

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
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.imageScanner = props.imageScanner;
        this.instanceStorageName = props.instanceStorageName;
        this.period = props.period;
        this.renewalStatus = props.renewalStatus;
        this.renewPeriod = props.renewPeriod;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            imageScanner: this.imageScanner,
            instanceStorageName: this.instanceStorageName,
            period: this.period,
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
     * @Property autoEnableType: Whether to auto enable the type of the endpoint.
     */
    readonly autoEnableType?: string | ros.IResolvable;

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
    if(properties.autoEnableType && (typeof properties.autoEnableType) !== 'object') {
        errors.collect(ros.propertyValidator('autoEnableType', ros.validateAllowedValues)({
          data: properties.autoEnableType,
          allowedValues: ["internet"],
        }));
    }
    errors.collect(ros.propertyValidator('autoEnableType', ros.validateString)(properties.autoEnableType));
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
      'AutoEnableType': ros.stringToRosTemplate(properties.autoEnableType),
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
     * @Property autoEnableType: Whether to auto enable the type of the endpoint.
     */
    public autoEnableType: string | ros.IResolvable | undefined;

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
        this.autoEnableType = props.autoEnableType;
        this.comment = props.comment;
        this.endpointType = props.endpointType;
        this.moduleName = props.moduleName;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            entry: this.entry,
            instanceId: this.instanceId,
            autoEnableType: this.autoEnableType,
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
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('enableCreateDnsRecordInPvzt', ros.validateBoolean)(properties.enableCreateDnsRecordInPvzt));
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
 * Properties for defining a `RosRepoSyncRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export interface RosRepoSyncRuleProps {

    /**
     * @Property instanceId: The ID of the CR instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property namespaceName: The name of the CR namespace.
     */
    readonly namespaceName: string | ros.IResolvable;

    /**
     * @Property syncRuleName: The name of the image sync rule.
     */
    readonly syncRuleName: string | ros.IResolvable;

    /**
     * @Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
     */
    readonly syncScope: string | ros.IResolvable;

    /**
     * @Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
     */
    readonly syncTrigger: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: The ID of the destination instance.
     */
    readonly targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetNamespaceName: The name of the destination namespace.
     */
    readonly targetNamespaceName: string | ros.IResolvable;

    /**
     * @Property targetRegionId: The ID of the destination region.
     */
    readonly targetRegionId: string | ros.IResolvable;

    /**
     * @Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
     */
    readonly repoName?: string | ros.IResolvable;

    /**
     * @Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    readonly repoNameFilter?: string | ros.IResolvable;

    /**
     * @Property tagFilter: The tag filter. Default value: .*
     */
    readonly tagFilter?: string | ros.IResolvable;

    /**
     * @Property targetRepoName: The name of the destination image repository. This parameter is optional.
     */
    readonly targetRepoName?: string | ros.IResolvable;

    /**
     * @Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    readonly targetUserId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRepoSyncRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRepoSyncRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRepoSyncRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('syncScope', ros.requiredValidator)(properties.syncScope));
    if(properties.syncScope && (typeof properties.syncScope) !== 'object') {
        errors.collect(ros.propertyValidator('syncScope', ros.validateAllowedValues)({
          data: properties.syncScope,
          allowedValues: ["REPO","NAMESPACE"],
        }));
    }
    errors.collect(ros.propertyValidator('syncScope', ros.validateString)(properties.syncScope));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('tagFilter', ros.validateString)(properties.tagFilter));
    errors.collect(ros.propertyValidator('repoName', ros.validateString)(properties.repoName));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.requiredValidator)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.validateString)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('syncRuleName', ros.requiredValidator)(properties.syncRuleName));
    errors.collect(ros.propertyValidator('syncRuleName', ros.validateString)(properties.syncRuleName));
    errors.collect(ros.propertyValidator('namespaceName', ros.requiredValidator)(properties.namespaceName));
    errors.collect(ros.propertyValidator('namespaceName', ros.validateString)(properties.namespaceName));
    errors.collect(ros.propertyValidator('targetRepoName', ros.validateString)(properties.targetRepoName));
    errors.collect(ros.propertyValidator('syncTrigger', ros.requiredValidator)(properties.syncTrigger));
    if(properties.syncTrigger && (typeof properties.syncTrigger) !== 'object') {
        errors.collect(ros.propertyValidator('syncTrigger', ros.validateAllowedValues)({
          data: properties.syncTrigger,
          allowedValues: ["INITIATIVE","PASSIVE"],
        }));
    }
    errors.collect(ros.propertyValidator('syncTrigger', ros.validateString)(properties.syncTrigger));
    errors.collect(ros.propertyValidator('repoNameFilter', ros.validateString)(properties.repoNameFilter));
    errors.collect(ros.propertyValidator('targetRegionId', ros.requiredValidator)(properties.targetRegionId));
    errors.collect(ros.propertyValidator('targetRegionId', ros.validateString)(properties.targetRegionId));
    errors.collect(ros.propertyValidator('targetNamespaceName', ros.requiredValidator)(properties.targetNamespaceName));
    errors.collect(ros.propertyValidator('targetNamespaceName', ros.validateString)(properties.targetNamespaceName));
    errors.collect(ros.propertyValidator('targetUserId', ros.validateString)(properties.targetUserId));
    return errors.wrap('supplied properties not correct for "RosRepoSyncRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::RepoSyncRule` resource
 *
 * @param properties - the TypeScript properties of a `RosRepoSyncRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::RepoSyncRule` resource.
 */
// @ts-ignore TS6133
function rosRepoSyncRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRepoSyncRulePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'NamespaceName': ros.stringToRosTemplate(properties.namespaceName),
      'SyncRuleName': ros.stringToRosTemplate(properties.syncRuleName),
      'SyncScope': ros.stringToRosTemplate(properties.syncScope),
      'SyncTrigger': ros.stringToRosTemplate(properties.syncTrigger),
      'TargetInstanceId': ros.stringToRosTemplate(properties.targetInstanceId),
      'TargetNamespaceName': ros.stringToRosTemplate(properties.targetNamespaceName),
      'TargetRegionId': ros.stringToRosTemplate(properties.targetRegionId),
      'RepoName': ros.stringToRosTemplate(properties.repoName),
      'RepoNameFilter': ros.stringToRosTemplate(properties.repoNameFilter),
      'TagFilter': ros.stringToRosTemplate(properties.tagFilter),
      'TargetRepoName': ros.stringToRosTemplate(properties.targetRepoName),
      'TargetUserId': ros.stringToRosTemplate(properties.targetUserId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::RepoSyncRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RepoSyncRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export class RosRepoSyncRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::RepoSyncRule";

    /**
     * @Attribute SyncRuleId: The ID of the synchronization rule.
     */
    public readonly attrSyncRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the CR instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property namespaceName: The name of the CR namespace.
     */
    public namespaceName: string | ros.IResolvable;

    /**
     * @Property syncRuleName: The name of the image sync rule.
     */
    public syncRuleName: string | ros.IResolvable;

    /**
     * @Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
     */
    public syncScope: string | ros.IResolvable;

    /**
     * @Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
     */
    public syncTrigger: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: The ID of the destination instance.
     */
    public targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetNamespaceName: The name of the destination namespace.
     */
    public targetNamespaceName: string | ros.IResolvable;

    /**
     * @Property targetRegionId: The ID of the destination region.
     */
    public targetRegionId: string | ros.IResolvable;

    /**
     * @Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
     */
    public repoName: string | ros.IResolvable | undefined;

    /**
     * @Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    public repoNameFilter: string | ros.IResolvable | undefined;

    /**
     * @Property tagFilter: The tag filter. Default value: .*
     */
    public tagFilter: string | ros.IResolvable | undefined;

    /**
     * @Property targetRepoName: The name of the destination image repository. This parameter is optional.
     */
    public targetRepoName: string | ros.IResolvable | undefined;

    /**
     * @Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    public targetUserId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepoSyncRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRepoSyncRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSyncRuleId = this.getAtt('SyncRuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.namespaceName = props.namespaceName;
        this.syncRuleName = props.syncRuleName;
        this.syncScope = props.syncScope;
        this.syncTrigger = props.syncTrigger;
        this.targetInstanceId = props.targetInstanceId;
        this.targetNamespaceName = props.targetNamespaceName;
        this.targetRegionId = props.targetRegionId;
        this.repoName = props.repoName;
        this.repoNameFilter = props.repoNameFilter;
        this.tagFilter = props.tagFilter;
        this.targetRepoName = props.targetRepoName;
        this.targetUserId = props.targetUserId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            namespaceName: this.namespaceName,
            syncRuleName: this.syncRuleName,
            syncScope: this.syncScope,
            syncTrigger: this.syncTrigger,
            targetInstanceId: this.targetInstanceId,
            targetNamespaceName: this.targetNamespaceName,
            targetRegionId: this.targetRegionId,
            repoName: this.repoName,
            repoNameFilter: this.repoNameFilter,
            tagFilter: this.tagFilter,
            targetRepoName: this.targetRepoName,
            targetUserId: this.targetUserId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRepoSyncRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
         * @Property sourceRepoNamespace: Source code repository namespace
         */
        readonly sourceRepoNamespace: string | ros.IResolvable;
        /**
         * @Property sourceRepoName: Source code warehouse name
         */
        readonly sourceRepoName: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.requiredValidator)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.validateString)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.requiredValidator)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.validateString)(properties.sourceRepoName));
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
      'SourceRepoNamespace': ros.stringToRosTemplate(properties.sourceRepoNamespace),
      'SourceRepoName': ros.stringToRosTemplate(properties.sourceRepoName),
      'IsOversea': ros.booleanToRosTemplate(properties.isOversea),
      'SourceRepoType': ros.stringToRosTemplate(properties.sourceRepoType),
      'IsDisableCache': ros.booleanToRosTemplate(properties.isDisableCache),
    };
}

/**
 * Properties for defining a `RosScanRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export interface RosScanRuleProps {

    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    readonly repoTagFilterPattern: string | ros.IResolvable;

    /**
     * @Property ruleName: The scan rule name.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property scanScope: The scan scope. Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    readonly scanScope: string | ros.IResolvable;

    /**
     * @Property scanType: The scan type. Valid values: 
     * * VUL: Products Cloud Security Scanner.
     * * SBOM: Product Content Analysis.
     */
    readonly scanType: string | ros.IResolvable;

    /**
     * @Property triggerType: Trigger type. Valid values:
     * * AUTO: automatically trigger.
     * * MANUAL: manually trigger.
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * @Property namespaces: The list of namespaces.
     * * When the scan scope is NAMESPACE, this parameter cannot be empty.
     * * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
     */
    readonly namespaces?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
     * * When the scan scope is REPO, this parameter cannot be empty.
     */
    readonly repoNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScanRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosScanRuleProps`
 *
 * @returns the result of the validation.
 */
function RosScanRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('repoTagFilterPattern', ros.requiredValidator)(properties.repoTagFilterPattern));
    errors.collect(ros.propertyValidator('repoTagFilterPattern', ros.validateString)(properties.repoTagFilterPattern));
    errors.collect(ros.propertyValidator('scanType', ros.requiredValidator)(properties.scanType));
    errors.collect(ros.propertyValidator('scanType', ros.validateString)(properties.scanType));
    errors.collect(ros.propertyValidator('triggerType', ros.requiredValidator)(properties.triggerType));
    if(properties.triggerType && (typeof properties.triggerType) !== 'object') {
        errors.collect(ros.propertyValidator('triggerType', ros.validateAllowedValues)({
          data: properties.triggerType,
          allowedValues: ["MANUAL","AUTO"],
        }));
    }
    errors.collect(ros.propertyValidator('triggerType', ros.validateString)(properties.triggerType));
    errors.collect(ros.propertyValidator('scanScope', ros.requiredValidator)(properties.scanScope));
    if(properties.scanScope && (typeof properties.scanScope) !== 'object') {
        errors.collect(ros.propertyValidator('scanScope', ros.validateAllowedValues)({
          data: properties.scanScope,
          allowedValues: ["NAMESPACE","REPO","INSTANCE"],
        }));
    }
    errors.collect(ros.propertyValidator('scanScope', ros.validateString)(properties.scanScope));
    errors.collect(ros.propertyValidator('namespaces', ros.listValidator(ros.validateString))(properties.namespaces));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('repoNames', ros.listValidator(ros.validateString))(properties.repoNames));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosScanRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::ScanRule` resource
 *
 * @param properties - the TypeScript properties of a `RosScanRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::ScanRule` resource.
 */
// @ts-ignore TS6133
function rosScanRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScanRulePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RepoTagFilterPattern': ros.stringToRosTemplate(properties.repoTagFilterPattern),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'ScanScope': ros.stringToRosTemplate(properties.scanScope),
      'ScanType': ros.stringToRosTemplate(properties.scanType),
      'TriggerType': ros.stringToRosTemplate(properties.triggerType),
      'Namespaces': ros.listMapper(ros.stringToRosTemplate)(properties.namespaces),
      'RepoNames': ros.listMapper(ros.stringToRosTemplate)(properties.repoNames),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::ScanRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScanRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export class RosScanRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::ScanRule";

    /**
     * @Attribute CreateTime: Creation time of the scan rule.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: ACR Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    /**
     * @Attribute RepoNames: The list of repositories.
     */
    public readonly attrRepoNames: ros.IResolvable;

    /**
     * @Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    public readonly attrRepoTagFilterPattern: ros.IResolvable;

    /**
     * @Attribute RuleName: The scan rule name.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute ScanRuleId: The ID of the scan rule.
     */
    public readonly attrScanRuleId: ros.IResolvable;

    /**
     * @Attribute ScanScope: The scan scope.
     */
    public readonly attrScanScope: ros.IResolvable;

    /**
     * @Attribute ScanType: The scan type.
     */
    public readonly attrScanType: ros.IResolvable;

    /**
     * @Attribute TriggerType: Trigger type.
     */
    public readonly attrTriggerType: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Change time of the scan rule.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: ACR Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    public repoTagFilterPattern: string | ros.IResolvable;

    /**
     * @Property ruleName: The scan rule name.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property scanScope: The scan scope. Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    public scanScope: string | ros.IResolvable;

    /**
     * @Property scanType: The scan type. Valid values: 
     * * VUL: Products Cloud Security Scanner.
     * * SBOM: Product Content Analysis.
     */
    public scanType: string | ros.IResolvable;

    /**
     * @Property triggerType: Trigger type. Valid values:
     * * AUTO: automatically trigger.
     * * MANUAL: manually trigger.
     */
    public triggerType: string | ros.IResolvable;

    /**
     * @Property namespaces: The list of namespaces.
     * * When the scan scope is NAMESPACE, this parameter cannot be empty.
     * * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
     */
    public namespaces: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
     * * When the scan scope is REPO, this parameter cannot be empty.
     */
    public repoNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScanRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScanRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNamespaces = this.getAtt('Namespaces');
        this.attrRepoNames = this.getAtt('RepoNames');
        this.attrRepoTagFilterPattern = this.getAtt('RepoTagFilterPattern');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrScanRuleId = this.getAtt('ScanRuleId');
        this.attrScanScope = this.getAtt('ScanScope');
        this.attrScanType = this.getAtt('ScanType');
        this.attrTriggerType = this.getAtt('TriggerType');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.repoTagFilterPattern = props.repoTagFilterPattern;
        this.ruleName = props.ruleName;
        this.scanScope = props.scanScope;
        this.scanType = props.scanType;
        this.triggerType = props.triggerType;
        this.namespaces = props.namespaces;
        this.repoNames = props.repoNames;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            repoTagFilterPattern: this.repoTagFilterPattern,
            ruleName: this.ruleName,
            scanScope: this.scanScope,
            scanType: this.scanType,
            triggerType: this.triggerType,
            namespaces: this.namespaces,
            repoNames: this.repoNames,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScanRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStorageDomainRoutingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export interface RosStorageDomainRoutingRuleProps {

    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property routes: Domain name routing entry.
     */
    readonly routes: Array<RosStorageDomainRoutingRule.RoutesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStorageDomainRoutingRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosStorageDomainRoutingRuleProps`
 *
 * @returns the result of the validation.
 */
function RosStorageDomainRoutingRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('routes', ros.requiredValidator)(properties.routes));
    errors.collect(ros.propertyValidator('routes', ros.listValidator(RosStorageDomainRoutingRule_RoutesPropertyValidator))(properties.routes));
    return errors.wrap('supplied properties not correct for "RosStorageDomainRoutingRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::StorageDomainRoutingRule` resource
 *
 * @param properties - the TypeScript properties of a `RosStorageDomainRoutingRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::StorageDomainRoutingRule` resource.
 */
// @ts-ignore TS6133
function rosStorageDomainRoutingRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStorageDomainRoutingRulePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Routes': ros.listMapper(rosStorageDomainRoutingRuleRoutesPropertyToRosTemplate)(properties.routes),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::StorageDomainRoutingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageDomainRoutingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export class RosStorageDomainRoutingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::StorageDomainRoutingRule";

    /**
     * @Attribute CreateTime: The creation time of the Rule.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ModifyTime: The Modify Time of the Rule.
     */
    public readonly attrModifyTime: ros.IResolvable;

    /**
     * @Attribute Routes: Domain name routing entry.
     */
    public readonly attrRoutes: ros.IResolvable;

    /**
     * @Attribute RuleId: Rule ID.
     */
    public readonly attrRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: ACR Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property routes: Domain name routing entry.
     */
    public routes: Array<RosStorageDomainRoutingRule.RoutesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageDomainRoutingRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStorageDomainRoutingRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrModifyTime = this.getAtt('ModifyTime');
        this.attrRoutes = this.getAtt('Routes');
        this.attrRuleId = this.getAtt('RuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.routes = props.routes;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            routes: this.routes,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStorageDomainRoutingRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosStorageDomainRoutingRule {
    /**
     * @stability external
     */
    export interface RoutesProperty {
        /**
         * @Property storageDomain: Storage domain name.
         */
        readonly storageDomain: string | ros.IResolvable;
        /**
         * @Property endpointType: Endpoint Type.
         */
        readonly endpointType: string | ros.IResolvable;
        /**
         * @Property instanceDomain: Instance domain name.
         */
        readonly instanceDomain: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RoutesProperty`
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the result of the validation.
 */
function RosStorageDomainRoutingRule_RoutesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storageDomain', ros.requiredValidator)(properties.storageDomain));
    errors.collect(ros.propertyValidator('storageDomain', ros.validateString)(properties.storageDomain));
    errors.collect(ros.propertyValidator('endpointType', ros.requiredValidator)(properties.endpointType));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    errors.collect(ros.propertyValidator('instanceDomain', ros.requiredValidator)(properties.instanceDomain));
    errors.collect(ros.propertyValidator('instanceDomain', ros.validateString)(properties.instanceDomain));
    return errors.wrap('supplied properties not correct for "RoutesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::StorageDomainRoutingRule.Routes` resource
 *
 * @param properties - the TypeScript properties of a `RoutesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::StorageDomainRoutingRule.Routes` resource.
 */
// @ts-ignore TS6133
function rosStorageDomainRoutingRuleRoutesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosStorageDomainRoutingRule_RoutesPropertyValidator(properties).assertSuccess();
    return {
      'StorageDomain': ros.stringToRosTemplate(properties.storageDomain),
      'EndpointType': ros.stringToRosTemplate(properties.endpointType),
      'InstanceDomain': ros.stringToRosTemplate(properties.instanceDomain),
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
