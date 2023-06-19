// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::PaiDswApi::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property ecsSpec: The ECS specification of the instance.
     */
    readonly ecsSpec: string | ros.IResolvable;

    /**
     * @Property imageUrl: The mirror address.
     */
    readonly imageUrl: string | ros.IResolvable;

    /**
     * @Property instanceName: The instance name. Format requirements:
     * - Can only contain letters, numbers and underscores (_).
     * - It cannot exceed 27 characters.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property accessibility: Whether the workspace is visible to others. Valid values:
     * - **PUBLIC**: Visible to all users of the workspace.
     * - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
     */
    readonly accessibility?: string | ros.IResolvable;

    /**
     * @Property datasets: A collection of datasets.
     */
    readonly datasets?: Array<RosInstance.DatasetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property environmentVariables: Environment variable.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property labels: User-defined labels.
     */
    readonly labels?: Array<RosInstance.LabelsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property saveImage: Whether to close the instance after saving the environment.
     */
    readonly saveImage?: boolean | ros.IResolvable;

    /**
     * @Property userVpc: User vpc configuration.
     */
    readonly userVpc?: RosInstance.UserVpcProperty | ros.IResolvable;

    /**
     * @Property workspaceId: The Id of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('datasets', ros.listValidator(RosInstance_DatasetsPropertyValidator))(properties.datasets));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /^[_a-zA-Z0-9]{1,27}$/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    if(properties.accessibility && (typeof properties.accessibility) !== 'object') {
        errors.collect(ros.propertyValidator('accessibility', ros.validateAllowedValues)({
          data: properties.accessibility,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('accessibility', ros.validateString)(properties.accessibility));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('imageUrl', ros.requiredValidator)(properties.imageUrl));
    errors.collect(ros.propertyValidator('imageUrl', ros.validateString)(properties.imageUrl));
    errors.collect(ros.propertyValidator('ecsSpec', ros.requiredValidator)(properties.ecsSpec));
    errors.collect(ros.propertyValidator('ecsSpec', ros.validateString)(properties.ecsSpec));
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosInstance_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('saveImage', ros.validateBoolean)(properties.saveImage));
    errors.collect(ros.propertyValidator('userVpc', RosInstance_UserVpcPropertyValidator)(properties.userVpc));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      EcsSpec: ros.stringToRosTemplate(properties.ecsSpec),
      ImageUrl: ros.stringToRosTemplate(properties.imageUrl),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      Accessibility: ros.stringToRosTemplate(properties.accessibility),
      Datasets: ros.listMapper(rosInstanceDatasetsPropertyToRosTemplate)(properties.datasets),
      EnvironmentVariables: ros.hashMapper(ros.objectToRosTemplate)(properties.environmentVariables),
      Labels: ros.listMapper(rosInstanceLabelsPropertyToRosTemplate)(properties.labels),
      SaveImage: ros.booleanToRosTemplate(properties.saveImage),
      UserVpc: rosInstanceUserVpcPropertyToRosTemplate(properties.userVpc),
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::PaiDswApi::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PaiDswApi::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Accessibility: Whether the workspace is visible to others.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * @Attribute Datasets: A collection of datasets.
     */
    public readonly attrDatasets: ros.IResolvable;

    /**
     * @Attribute EcsSpec: The ECS specification of the instance.
     */
    public readonly attrEcsSpec: ros.IResolvable;

    /**
     * @Attribute EnvironmentVariables: Environment variable.
     */
    public readonly attrEnvironmentVariables: ros.IResolvable;

    /**
     * @Attribute ImageUrl: The mirror address.
     */
    public readonly attrImageUrl: ros.IResolvable;

    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceUrl: The instance address.
     */
    public readonly attrInstanceUrl: ros.IResolvable;

    /**
     * @Attribute JupyterlabUrl: The jupyterlab address.
     */
    public readonly attrJupyterlabUrl: ros.IResolvable;

    /**
     * @Attribute Labels: User-defined labels.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute TerminalUrl: The terminal address.
     */
    public readonly attrTerminalUrl: ros.IResolvable;

    /**
     * @Attribute UserVpc: User vpc configuration.
     */
    public readonly attrUserVpc: ros.IResolvable;

    /**
     * @Attribute WebIDEUrl: The web IDE address.
     */
    public readonly attrWebIdeUrl: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: The Id of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ecsSpec: The ECS specification of the instance.
     */
    public ecsSpec: string | ros.IResolvable;

    /**
     * @Property imageUrl: The mirror address.
     */
    public imageUrl: string | ros.IResolvable;

    /**
     * @Property instanceName: The instance name. Format requirements:
     * - Can only contain letters, numbers and underscores (_).
     * - It cannot exceed 27 characters.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property accessibility: Whether the workspace is visible to others. Valid values:
     * - **PUBLIC**: Visible to all users of the workspace.
     * - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
     */
    public accessibility: string | ros.IResolvable | undefined;

    /**
     * @Property datasets: A collection of datasets.
     */
    public datasets: Array<RosInstance.DatasetsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property environmentVariables: Environment variable.
     */
    public environmentVariables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property labels: User-defined labels.
     */
    public labels: Array<RosInstance.LabelsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property saveImage: Whether to close the instance after saving the environment.
     */
    public saveImage: boolean | ros.IResolvable | undefined;

    /**
     * @Property userVpc: User vpc configuration.
     */
    public userVpc: RosInstance.UserVpcProperty | ros.IResolvable | undefined;

    /**
     * @Property workspaceId: The Id of the workspace.
     */
    public workspaceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::PaiDswApi::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessibility = this.getAtt('Accessibility');
        this.attrDatasets = this.getAtt('Datasets');
        this.attrEcsSpec = this.getAtt('EcsSpec');
        this.attrEnvironmentVariables = this.getAtt('EnvironmentVariables');
        this.attrImageUrl = this.getAtt('ImageUrl');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceUrl = this.getAtt('InstanceUrl');
        this.attrJupyterlabUrl = this.getAtt('JupyterlabUrl');
        this.attrLabels = this.getAtt('Labels');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrTerminalUrl = this.getAtt('TerminalUrl');
        this.attrUserVpc = this.getAtt('UserVpc');
        this.attrWebIdeUrl = this.getAtt('WebIDEUrl');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ecsSpec = props.ecsSpec;
        this.imageUrl = props.imageUrl;
        this.instanceName = props.instanceName;
        this.accessibility = props.accessibility;
        this.datasets = props.datasets;
        this.environmentVariables = props.environmentVariables;
        this.labels = props.labels;
        this.saveImage = props.saveImage;
        this.userVpc = props.userVpc;
        this.workspaceId = props.workspaceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ecsSpec: this.ecsSpec,
            imageUrl: this.imageUrl,
            instanceName: this.instanceName,
            accessibility: this.accessibility,
            datasets: this.datasets,
            environmentVariables: this.environmentVariables,
            labels: this.labels,
            saveImage: this.saveImage,
            userVpc: this.userVpc,
            workspaceId: this.workspaceId,
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
    export interface DatasetsProperty {
        /**
         * @Property mountPath: The Mount path inside the container.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property datasetId: The data set Id.
         */
        readonly datasetId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DatasetsProperty`
 *
 * @param properties - the TypeScript properties of a `DatasetsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DatasetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('datasetId', ros.validateString)(properties.datasetId));
    return errors.wrap('supplied properties not correct for "DatasetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.Datasets` resource
 *
 * @param properties - the TypeScript properties of a `DatasetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.Datasets` resource.
 */
// @ts-ignore TS6133
function rosInstanceDatasetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DatasetsPropertyValidator(properties).assertSuccess();
    return {
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      DatasetId: ros.stringToRosTemplate(properties.datasetId),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value: User-defined label values.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: User-defined tag key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.Labels` resource.
 */
// @ts-ignore TS6133
function rosInstanceLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_LabelsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface UserVpcProperty {
        /**
         * @Property vpcId: Vpc identity ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The Id of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UserVpcProperty`
 *
 * @param properties - the TypeScript properties of a `UserVpcProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_UserVpcPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    return errors.wrap('supplied properties not correct for "UserVpcProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.UserVpc` resource
 *
 * @param properties - the TypeScript properties of a `UserVpcProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PaiDswApi::Instance.UserVpc` resource.
 */
// @ts-ignore TS6133
function rosInstanceUserVpcPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_UserVpcPropertyValidator(properties).assertSuccess();
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
    };
}
