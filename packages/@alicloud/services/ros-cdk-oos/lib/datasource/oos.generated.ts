// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPatchBaseline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export interface RosPatchBaselineProps {

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPatchBaselineProps`
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselineProps`
 *
 * @returns the result of the validation.
 */
function RosPatchBaselinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('patchBaselineName', ros.requiredValidator)(properties.patchBaselineName));
    errors.collect(ros.propertyValidator('patchBaselineName', ros.validateString)(properties.patchBaselineName));
    return errors.wrap('supplied properties not correct for "RosPatchBaselineProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::PatchBaseline` resource
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::PatchBaseline` resource.
 */
// @ts-ignore TS6133
function rosPatchBaselinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPatchBaselinePropsValidator(properties).assertSuccess();
    }
    return {
      PatchBaselineName: ros.stringToRosTemplate(properties.patchBaselineName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaseline`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PatchBaseline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export class RosPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaseline";

    /**
     * @Attribute ApprovalRules: Accept the rules.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * @Attribute ApprovedPatches: Approved patch list.
     */
    public readonly attrApprovedPatches: ros.IResolvable;

    /**
     * @Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    public readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreatedBy: Patch baseline creator.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute Description: Patches baseline description information.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IsDefault: Whether it is the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute OperationSystem: Operating system type.
     */
    public readonly attrOperationSystem: ros.IResolvable;

    /**
     * @Attribute PatchBaselineId: Patch baseline ID.
     */
    public readonly attrPatchBaselineId: ros.IResolvable;

    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable;

    /**
     * @Attribute RejectedPatches: Reject the name of the patch.
     */
    public readonly attrRejectedPatches: ros.IResolvable;

    /**
     * @Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    public readonly attrRejectedPatchesAction: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ShareType: Patch baseline sharing type.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute Sources: Patch source configuration list.
     */
    public readonly attrSources: ros.IResolvable;

    /**
     * @Attribute Tags: Tags of patch baseline.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: Patch baseline updater.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: Update time.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    public patchBaselineName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPatchBaseline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApprovalRules = this.getAtt('ApprovalRules');
        this.attrApprovedPatches = this.getAtt('ApprovedPatches');
        this.attrApprovedPatchesEnableNonSecurity = this.getAtt('ApprovedPatchesEnableNonSecurity');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrDescription = this.getAtt('Description');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrOperationSystem = this.getAtt('OperationSystem');
        this.attrPatchBaselineId = this.getAtt('PatchBaselineId');
        this.attrPatchBaselineName = this.getAtt('PatchBaselineName');
        this.attrRejectedPatches = this.getAtt('RejectedPatches');
        this.attrRejectedPatchesAction = this.getAtt('RejectedPatchesAction');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrShareType = this.getAtt('ShareType');
        this.attrSources = this.getAtt('Sources');
        this.attrTags = this.getAtt('Tags');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.patchBaselineName = props.patchBaselineName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            patchBaselineName: this.patchBaselineName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPatchBaselinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

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
