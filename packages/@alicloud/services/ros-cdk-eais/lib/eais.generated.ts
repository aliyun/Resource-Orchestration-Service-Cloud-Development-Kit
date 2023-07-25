// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export interface RosClientInstanceAttachmentProps {

    /**
     * @Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceId: string | ros.IResolvable;

    /**
     * @Property instanceId: The EAIS instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('clientInstanceId', ros.requiredValidator)(properties.clientInstanceId));
    errors.collect(ros.propertyValidator('clientInstanceId', ros.validateString)(properties.clientInstanceId));
    return errors.wrap('supplied properties not correct for "RosClientInstanceAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EAIS::ClientInstanceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosClientInstanceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EAIS::ClientInstanceAttachment` resource.
 */
// @ts-ignore TS6133
function rosClientInstanceAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClientInstanceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      ClientInstanceId: ros.stringToRosTemplate(properties.clientInstanceId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export class RosClientInstanceAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EAIS::ClientInstanceAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The EAIS instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public clientInstanceId: string | ros.IResolvable;

    /**
     * @Property instanceId: The EAIS instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::EAIS::ClientInstanceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientInstanceAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClientInstanceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientInstanceId = this.getAtt('ClientInstanceId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientInstanceId = props.clientInstanceId;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clientInstanceId: this.clientInstanceId,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClientInstanceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::EAIS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
     */
    readonly createWithNotebook: boolean | ros.IResolvable;

    /**
     * @Property instanceType: EAIS instance type.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property environmentVar: Setting environment variables in eais instance on Initialization.
     */
    readonly environmentVar?: Array<RosInstance.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: Name of the instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the resource.
     */
    readonly paymentType?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('environmentVar', ros.listValidator(RosInstance_EnvironmentVarPropertyValidator))(properties.environmentVar));
    errors.collect(ros.propertyValidator('createWithNotebook', ros.requiredValidator)(properties.createWithNotebook));
    errors.collect(ros.propertyValidator('createWithNotebook', ros.validateBoolean)(properties.createWithNotebook));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EAIS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EAIS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      CreateWithNotebook: ros.booleanToRosTemplate(properties.createWithNotebook),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      EnvironmentVar: ros.listMapper(rosInstanceEnvironmentVarPropertyToRosTemplate)(properties.environmentVar),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EAIS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EAIS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
     */
    public createWithNotebook: boolean | ros.IResolvable;

    /**
     * @Property instanceType: EAIS instance type.
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Switch ID.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property environmentVar: Setting environment variables in eais instance on Initialization.
     */
    public environmentVar: Array<RosInstance.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceName: Name of the instance.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: The payment type of the resource.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EAIS::Instance`.
     *
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
        this.createWithNotebook = props.createWithNotebook;
        this.instanceType = props.instanceType;
        this.securityGroupId = props.securityGroupId;
        this.vSwitchId = props.vSwitchId;
        this.environmentVar = props.environmentVar;
        this.instanceName = props.instanceName;
        this.paymentType = props.paymentType;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            createWithNotebook: this.createWithNotebook,
            instanceType: this.instanceType,
            securityGroupId: this.securityGroupId,
            vSwitchId: this.vSwitchId,
            environmentVar: this.environmentVar,
            instanceName: this.instanceName,
            paymentType: this.paymentType,
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
    export interface EnvironmentVarProperty {
        /**
         * @Property value: Values of environment variables.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Keys for environment variables.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EnvironmentVarProperty`
 *
 * @param properties - the TypeScript properties of a `EnvironmentVarProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_EnvironmentVarPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "EnvironmentVarProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EAIS::Instance.EnvironmentVar` resource
 *
 * @param properties - the TypeScript properties of a `EnvironmentVarProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EAIS::Instance.EnvironmentVar` resource.
 */
// @ts-ignore TS6133
function rosInstanceEnvironmentVarPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_EnvironmentVarPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
