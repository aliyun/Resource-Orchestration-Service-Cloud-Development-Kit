// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPatchBaselines`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export interface RosPatchBaselinesProps {

    /**
     * @Property operationSystem: Operating system type.
     */
    readonly operationSystem?: string | ros.IResolvable;

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName?: string | ros.IResolvable;

    /**
     * @Property shareType: Patch baseline sharing type.
     */
    readonly shareType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPatchBaselinesProps`
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselinesProps`
 *
 * @returns the result of the validation.
 */
function RosPatchBaselinesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('patchBaselineName', ros.validateString)(properties.patchBaselineName));
    if(properties.operationSystem && (typeof properties.operationSystem) !== 'object') {
        errors.collect(ros.propertyValidator('operationSystem', ros.validateAllowedValues)({
          data: properties.operationSystem,
          allowedValues: ["Windows","Ubunt","Centos","Debian","AliyunLinux","RedhatEnterpriseLinux","Anolis","AlmaLinux"],
        }));
    }
    errors.collect(ros.propertyValidator('operationSystem', ros.validateString)(properties.operationSystem));
    errors.collect(ros.propertyValidator('shareType', ros.validateString)(properties.shareType));
    return errors.wrap('supplied properties not correct for "RosPatchBaselinesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::PatchBaselines` resource
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselinesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::PatchBaselines` resource.
 */
// @ts-ignore TS6133
function rosPatchBaselinesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPatchBaselinesPropsValidator(properties).assertSuccess();
    }
    return {
      OperationSystem: ros.stringToRosTemplate(properties.operationSystem),
      PatchBaselineName: ros.stringToRosTemplate(properties.patchBaselineName),
      ShareType: ros.stringToRosTemplate(properties.shareType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaselines`, which is used to query patch baselines.
 * @Note This class does not contain additional functions, so it is recommended to use the `PatchBaselines` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export class RosPatchBaselines extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaselines";

    /**
     * @Attribute PatchBaselineNames: The list of patch baseline names.
     */
    public readonly attrPatchBaselineNames: ros.IResolvable;

    /**
     * @Attribute PatchBaselines: The list of patch baselines.
     */
    public readonly attrPatchBaselines: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property operationSystem: Operating system type.
     */
    public operationSystem: string | ros.IResolvable | undefined;

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    public patchBaselineName: string | ros.IResolvable | undefined;

    /**
     * @Property shareType: Patch baseline sharing type.
     */
    public shareType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselinesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPatchBaselines.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPatchBaselineNames = this.getAtt('PatchBaselineNames');
        this.attrPatchBaselines = this.getAtt('PatchBaselines');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.operationSystem = props.operationSystem;
        this.patchBaselineName = props.patchBaselineName;
        this.shareType = props.shareType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            operationSystem: this.operationSystem,
            patchBaselineName: this.patchBaselineName,
            shareType: this.shareType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPatchBaselinesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecretParameters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export interface RosSecretParametersProps {

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    readonly secretParameterName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecretParametersProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretParametersProps`
 *
 * @returns the result of the validation.
 */
function RosSecretParametersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('secretParameterName', ros.validateString)(properties.secretParameterName));
    return errors.wrap('supplied properties not correct for "RosSecretParametersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::SecretParameters` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretParametersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::SecretParameters` resource.
 */
// @ts-ignore TS6133
function rosSecretParametersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretParametersPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecretParameterName: ros.stringToRosTemplate(properties.secretParameterName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::SecretParameters`, which is used to query encryption parameters.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecretParameters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export class RosSecretParameters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameters";

    /**
     * @Attribute SecretParameterNames: The list of secret parameter names.
     */
    public readonly attrSecretParameterNames: ros.IResolvable;

    /**
     * @Attribute SecretParameters: The list of secret parameters.
     */
    public readonly attrSecretParameters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    public secretParameterName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParametersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecretParameters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecretParameterNames = this.getAtt('SecretParameterNames');
        this.attrSecretParameters = this.getAtt('SecretParameters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
        this.secretParameterName = props.secretParameterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
            secretParameterName: this.secretParameterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretParametersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
