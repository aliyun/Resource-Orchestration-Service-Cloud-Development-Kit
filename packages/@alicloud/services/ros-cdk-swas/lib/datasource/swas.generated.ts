// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SWAS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SWAS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SWAS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SWAS::Instance";

    /**
     * @Attribute BusinessStatus: The business status of the instance.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    public readonly attrChargeType: ros.IResolvable;

    /**
     * @Attribute Combination: Indicates whether the instance is a combination instance.
     */
    public readonly attrCombination: ros.IResolvable;

    /**
     * @Attribute CreationTime: The creation time of the instance.
     */
    public readonly attrCreationTime: ros.IResolvable;

    /**
     * @Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    public readonly attrDdosStatus: ros.IResolvable;

    /**
     * @Attribute DisableReason: The reason why the instance is disabled.
     */
    public readonly attrDisableReason: ros.IResolvable;

    /**
     * @Attribute Disks: The disks of the instance.
     */
    public readonly attrDisks: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The expiration time of the instance.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute Image: The image information of the instance.
     */
    public readonly attrImage: ros.IResolvable;

    /**
     * @Attribute ImageId: The ID of the image used by the instance.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute InnerIpAddress: The private IP address of the instance.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute NetworkAttributes: The network attributes of the instance.
     */
    public readonly attrNetworkAttributes: ros.IResolvable;

    /**
     * @Attribute PlanId: The plan ID of the instance.
     */
    public readonly attrPlanId: ros.IResolvable;

    /**
     * @Attribute PlanType: The plan type of the instance.
     */
    public readonly attrPlanType: ros.IResolvable;

    /**
     * @Attribute PublicIpAddress: The public IP address of the instance.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * @Attribute RegionId: The ID of the region where the instance is deployed.
     */
    public readonly attrRegionId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ResourceSpec: The resource specification of the instance.
     */
    public readonly attrResourceSpec: ros.IResolvable;

    /**
     * @Attribute Status: The status of the instance.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Uuid: The unique identifier of the instance.
     */
    public readonly attrUuid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrChargeType = this.getAtt('ChargeType');
        this.attrCombination = this.getAtt('Combination');
        this.attrCreationTime = this.getAtt('CreationTime');
        this.attrDdosStatus = this.getAtt('DdosStatus');
        this.attrDisableReason = this.getAtt('DisableReason');
        this.attrDisks = this.getAtt('Disks');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrImage = this.getAtt('Image');
        this.attrImageId = this.getAtt('ImageId');
        this.attrInnerIpAddress = this.getAtt('InnerIpAddress');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrNetworkAttributes = this.getAtt('NetworkAttributes');
        this.attrPlanId = this.getAtt('PlanId');
        this.attrPlanType = this.getAtt('PlanType');
        this.attrPublicIpAddress = this.getAtt('PublicIpAddress');
        this.attrRegionId = this.getAtt('RegionId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrResourceSpec = this.getAtt('ResourceSpec');
        this.attrStatus = this.getAtt('Status');
        this.attrTags = this.getAtt('Tags');
        this.attrUuid = this.getAtt('Uuid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceIds: The IDs of instances.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: The names of instances.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property planType: The type of plan.
     */
    readonly planType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property status: The status of the instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Pending","Starting","Running","Stopping","Stopped","Resetting","Upgrading","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.planType && (typeof properties.planType) !== 'object') {
        errors.collect(ros.propertyValidator('planType', ros.validateAllowedValues)({
          data: properties.planType,
          allowedValues: ["NORMAL","CAPACITY","PREVIOUS","MULTI_IP","INTERNATIONAL"],
        }));
    }
    errors.collect(ros.propertyValidator('planType', ros.validateString)(properties.planType));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SWAS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SWAS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceIds': ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'PlanType': ros.stringToRosTemplate(properties.planType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SWAS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SWAS::Instances";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: The IDs of instances.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The names of instances.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property planType: The type of plan.
     */
    public planType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the instance.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.instanceName = props.instanceName;
        this.planType = props.planType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
            instanceName: this.instanceName,
            planType: this.planType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
