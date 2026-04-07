// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosClientInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export interface RosClientInstanceAttachmentProps {

    /**
     * @Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceAttachmentId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClientInstanceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosClientInstanceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosClientInstanceAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clientInstanceAttachmentId', ros.requiredValidator)(properties.clientInstanceAttachmentId));
    errors.collect(ros.propertyValidator('clientInstanceAttachmentId', ros.validateString)(properties.clientInstanceAttachmentId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosClientInstanceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::ClientInstanceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosClientInstanceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::ClientInstanceAttachment` resource.
 */
// @ts-ignore TS6133
function rosClientInstanceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClientInstanceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'ClientInstanceAttachmentId': ros.stringToRosTemplate(properties.clientInstanceAttachmentId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::ClientInstanceAttachment`, which is used to query the information about an Elastic Accelerated Computing Instances (EAIS) instance attached to an Elastic Compute Service (ECS) instance or elastic container instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientInstanceAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export class RosClientInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::ClientInstanceAttachment";

    /**
     * @Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The EAIS instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vSwitch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public clientInstanceAttachmentId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosClientInstanceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClientInstanceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientInstanceId = this.getAtt('ClientInstanceId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientInstanceAttachmentId = props.clientInstanceAttachmentId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clientInstanceAttachmentId: this.clientInstanceAttachmentId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClientInstanceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: Elastic accelerated instance ID.
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::Instance` resource.
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::Instance`, which is used to query the information about a created Elastic Accelerated Computing Instances (EAIS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::Instance";

    /**
     * @Attribute ClientInstanceId: The ID of the ECS instance to be bound.
     */
    public readonly attrClientInstanceId: ros.IResolvable;

    /**
     * @Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceName: ros.IResolvable;

    /**
     * @Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceType: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: Elastic accelerated instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceType: EAIS instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute JupyterUrl: The address of the Eais Notebook.
     */
    public readonly attrJupyterUrl: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Elastic accelerated instance ID.
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
        this.attrClientInstanceId = this.getAtt('ClientInstanceId');
        this.attrClientInstanceName = this.getAtt('ClientInstanceName');
        this.attrClientInstanceType = this.getAtt('ClientInstanceType');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrJupyterUrl = this.getAtt('JupyterUrl');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrZoneId = this.getAtt('ZoneId');

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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceId: Elastic accelerated instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceType: EAIS instance type.
     */
    readonly instanceType?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EAIS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EAIS::Instances`, which is used to query the information about created Elastic Accelerated Computing Instances (EAIS) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EAIS::Instances";

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
     * @Property instanceId: Elastic accelerated instance ID.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Name of the instance.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: EAIS instance type.
     */
    public instanceType: string | ros.IResolvable | undefined;

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
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
