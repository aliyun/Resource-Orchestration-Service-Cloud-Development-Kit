// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosGitCodeRepo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
export interface RosGitCodeRepoProps {

    /**
     * @Property owner: Git account.
     */
    readonly owner: string | ros.IResolvable;

    /**
     * @Property platform: Git platform.
     */
    readonly platform: string | ros.IResolvable;

    /**
     * @Property repository: Git repository.
     */
    readonly repository: string | ros.IResolvable;

    /**
     * @Property commitId: Git commit id.
     */
    readonly commitId?: string | ros.IResolvable;

    /**
     * @Property organization: Git organization.
     */
    readonly organization?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGitCodeRepoProps`
 *
 * @param properties - the TypeScript properties of a `RosGitCodeRepoProps`
 *
 * @returns the result of the validation.
 */
function RosGitCodeRepoPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('repository', ros.requiredValidator)(properties.repository));
    errors.collect(ros.propertyValidator('repository', ros.validateString)(properties.repository));
    errors.collect(ros.propertyValidator('owner', ros.requiredValidator)(properties.owner));
    errors.collect(ros.propertyValidator('owner', ros.validateString)(properties.owner));
    errors.collect(ros.propertyValidator('organization', ros.validateString)(properties.organization));
    errors.collect(ros.propertyValidator('platform', ros.requiredValidator)(properties.platform));
    if(properties.platform && (typeof properties.platform) !== 'object') {
        errors.collect(ros.propertyValidator('platform', ros.validateAllowedValues)({
          data: properties.platform,
          allowedValues: ["github","gitee"],
        }));
    }
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('commitId', ros.validateString)(properties.commitId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosGitCodeRepoProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::GitCodeRepo` resource
 *
 * @param properties - the TypeScript properties of a `RosGitCodeRepoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::GitCodeRepo` resource.
 */
// @ts-ignore TS6133
function rosGitCodeRepoPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGitCodeRepoPropsValidator(properties).assertSuccess();
    }
    return {
      'Owner': ros.stringToRosTemplate(properties.owner),
      'Platform': ros.stringToRosTemplate(properties.platform),
      'Repository': ros.stringToRosTemplate(properties.repository),
      'CommitId': ros.stringToRosTemplate(properties.commitId),
      'Organization': ros.stringToRosTemplate(properties.organization),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::GitCodeRepo`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GitCodeRepo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
export class RosGitCodeRepo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::GitCodeRepo";

    /**
     * @Attribute AuthorizedUrl: Authorized url.
     */
    public readonly attrAuthorizedUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property owner: Git account.
     */
    public owner: string | ros.IResolvable;

    /**
     * @Property platform: Git platform.
     */
    public platform: string | ros.IResolvable;

    /**
     * @Property repository: Git repository.
     */
    public repository: string | ros.IResolvable;

    /**
     * @Property commitId: Git commit id.
     */
    public commitId: string | ros.IResolvable | undefined;

    /**
     * @Property organization: Git organization.
     */
    public organization: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosGitCodeRepoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGitCodeRepo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthorizedUrl = this.getAtt('AuthorizedUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.owner = props.owner;
        this.platform = props.platform;
        this.repository = props.repository;
        this.commitId = props.commitId;
        this.organization = props.organization;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            owner: this.owner,
            platform: this.platform,
            repository: this.repository,
            commitId: this.commitId,
            organization: this.organization,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGitCodeRepoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPatchBaseline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export interface RosPatchBaselineProps {

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'PatchBaselineName': ros.stringToRosTemplate(properties.patchBaselineName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
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
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            patchBaselineName: this.patchBaselineName,
            refreshOptions: this.refreshOptions,
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'OperationSystem': ros.stringToRosTemplate(properties.operationSystem),
      'PatchBaselineName': ros.stringToRosTemplate(properties.patchBaselineName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ShareType': ros.stringToRosTemplate(properties.shareType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaselines`.
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.refreshOptions = props.refreshOptions;
        this.shareType = props.shareType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            operationSystem: this.operationSystem,
            patchBaselineName: this.patchBaselineName,
            refreshOptions: this.refreshOptions,
            shareType: this.shareType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPatchBaselinesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecretParameter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
 */
export interface RosSecretParameterProps {

    /**
     * @Property secretParameterName: The name of the parameter.
     */
    readonly secretParameterName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecretParameterProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretParameterProps`
 *
 * @returns the result of the validation.
 */
function RosSecretParameterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretParameterName', ros.requiredValidator)(properties.secretParameterName));
    errors.collect(ros.propertyValidator('secretParameterName', ros.validateString)(properties.secretParameterName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSecretParameterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::SecretParameter` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretParameterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::SecretParameter` resource.
 */
// @ts-ignore TS6133
function rosSecretParameterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretParameterPropsValidator(properties).assertSuccess();
    }
    return {
      'SecretParameterName': ros.stringToRosTemplate(properties.secretParameterName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::SecretParameter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecretParameter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
 */
export class RosSecretParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameter";

    /**
     * @Attribute Constraints: The constraints of the encryption parameter.
     */
    public readonly attrConstraints: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the encryption parameter was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The user who created the encryption parameter.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute Description: The description of the encryption parameter.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
     */
    public readonly attrKeyId: ros.IResolvable;

    /**
     * @Attribute ParameterVersion: The version number of the encryption parameter.
     */
    public readonly attrParameterVersion: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecretParameterId: The ID of the encryption parameter.
     */
    public readonly attrSecretParameterId: ros.IResolvable;

    /**
     * @Attribute SecretParameterName: The name of the parameter.
     */
    public readonly attrSecretParameterName: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the encryption parameter.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the parameter.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Type: The type of the parameter.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    /**
     * @Attribute Value: The value of the encryption parameter.
     */
    public readonly attrValue: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property secretParameterName: The name of the parameter.
     */
    public secretParameterName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosSecretParameterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecretParameter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConstraints = this.getAtt('Constraints');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrDescription = this.getAtt('Description');
        this.attrKeyId = this.getAtt('KeyId');
        this.attrParameterVersion = this.getAtt('ParameterVersion');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecretParameterId = this.getAtt('SecretParameterId');
        this.attrSecretParameterName = this.getAtt('SecretParameterName');
        this.attrShareType = this.getAtt('ShareType');
        this.attrTags = this.getAtt('Tags');
        this.attrType = this.getAtt('Type');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');
        this.attrValue = this.getAtt('Value');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.secretParameterName = props.secretParameterName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            secretParameterName: this.secretParameterName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretParameterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecretParameters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export interface RosSecretParametersProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecretParameterName': ros.stringToRosTemplate(properties.secretParameterName),
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.secretParameterName = props.secretParameterName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            secretParameterName: this.secretParameterName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretParametersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
 */
export interface RosTemplateProps {

    /**
     * @Property templateName: The name of the template.
     */
    readonly templateName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
     */
    readonly templateVersion?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'TemplateName': ros.stringToRosTemplate(properties.templateName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'TemplateVersion': ros.stringToRosTemplate(properties.templateVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
 */
export class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::Template";

    /**
     * @Attribute Content: The content of the template.
     */
    public readonly attrContent: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The creator of the template.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    public readonly attrCreatedDate: ros.IResolvable;

    /**
     * @Attribute Description: The description of the template.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    public readonly attrHasTrigger: ros.IResolvable;

    /**
     * @Attribute Hash: The SHA-256 value of the template content.
     */
    public readonly attrHash: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the template. Valid values:
Public
Private
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute Tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TemplateFormat: The format of the template. Valid values:
JSON
YAML
     */
    public readonly attrTemplateFormat: ros.IResolvable;

    /**
     * @Attribute TemplateId: The ID of the template.
     */
    public readonly attrTemplateId: ros.IResolvable;

    /**
     * @Attribute TemplateType: The type of the template. Valid values:
Automation: the template for automated tasks.
State: the template for configuration inventories.
Package: the template for software packages.
     */
    public readonly attrTemplateType: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: The user who last updated the template.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: The time when the template was last updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property templateName: The name of the template.
     */
    public templateName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
     */
    public templateVersion: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContent = this.getAtt('Content');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrCreatedDate = this.getAtt('CreatedDate');
        this.attrDescription = this.getAtt('Description');
        this.attrHasTrigger = this.getAtt('HasTrigger');
        this.attrHash = this.getAtt('Hash');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrShareType = this.getAtt('ShareType');
        this.attrTags = this.getAtt('Tags');
        this.attrTemplateFormat = this.getAtt('TemplateFormat');
        this.attrTemplateId = this.getAtt('TemplateId');
        this.attrTemplateType = this.getAtt('TemplateType');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.templateName = props.templateName;
        this.refreshOptions = props.refreshOptions;
        this.templateVersion = props.templateVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            templateName: this.templateName,
            refreshOptions: this.refreshOptions,
            templateVersion: this.templateVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTemplates`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
export interface RosTemplatesProps {

    /**
     * @Property category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
     */
    readonly category?: string | ros.IResolvable;

    /**
     * @Property createdBy: The creator of the template.
     */
    readonly createdBy?: string | ros.IResolvable;

    /**
     * @Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly createdDateAfter?: string | ros.IResolvable;

    /**
     * @Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    readonly createdDateBefore?: string | ros.IResolvable;

    /**
     * @Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    readonly hasTrigger?: boolean | ros.IResolvable;

    /**
     * @Property isExample: Specifies whether the template is an example template.
     */
    readonly isExample?: boolean | ros.IResolvable;

    /**
     * @Property isFavorite: Specifies whether the template is added to favorites.
     */
    readonly isFavorite?: boolean | ros.IResolvable;

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
     * @Property shareType: The share type of the template. Valid values:
     * Public
     * Private
     */
    readonly shareType?: string | ros.IResolvable;

    /**
     * @Property sortField: The field that is used to sort the templates to be queried. Valid values:
     * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
     * Popularity: The system sorts the returned templates based on the popularity of the templates.
     * TemplateName: The system sorts the returned templates based on the names of the templates.
     * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
     * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
     */
    readonly sortField?: string | ros.IResolvable;

    /**
     * @Property sortOrder: The order in which you want to sort the results. Valid values:
     * Ascending: ascending order.
     * Descending: descending order. This is the default value.
     */
    readonly sortOrder?: string | ros.IResolvable;

    /**
     * @Property tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * @Property templateFormat: The format of the template. Valid values:
     * JSON
     * YAML
     */
    readonly templateFormat?: string | ros.IResolvable;

    /**
     * @Property templateName: The name of the template.
     */
    readonly templateName?: string | ros.IResolvable;

    /**
     * @Property templateType: The type of the template. Valid values:
     * Automation: the template for automated tasks.
     * State: the template for configuration inventories.
     * Package: the template for software packages.
     */
    readonly templateType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTemplatesProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplatesProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["TimerTrigger","EventTrigger","AlarmTrigger","Other"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('createdBy', ros.validateString)(properties.createdBy));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('templateFormat', ros.validateString)(properties.templateFormat));
    errors.collect(ros.propertyValidator('createdDateAfter', ros.validateString)(properties.createdDateAfter));
    errors.collect(ros.propertyValidator('isExample', ros.validateBoolean)(properties.isExample));
    errors.collect(ros.propertyValidator('createdDateBefore', ros.validateString)(properties.createdDateBefore));
    if(properties.sortOrder && (typeof properties.sortOrder) !== 'object') {
        errors.collect(ros.propertyValidator('sortOrder', ros.validateAllowedValues)({
          data: properties.sortOrder,
          allowedValues: ["Ascending","Descending"],
        }));
    }
    errors.collect(ros.propertyValidator('sortOrder', ros.validateString)(properties.sortOrder));
    if(properties.sortField && (typeof properties.sortField) !== 'object') {
        errors.collect(ros.propertyValidator('sortField', ros.validateAllowedValues)({
          data: properties.sortField,
          allowedValues: ["TotalExecutionCount","Popularity","TemplateName","CreatedDate","UpdatedDate"],
        }));
    }
    errors.collect(ros.propertyValidator('sortField', ros.validateString)(properties.sortField));
    if(properties.templateType && (typeof properties.templateType) !== 'object') {
        errors.collect(ros.propertyValidator('templateType', ros.validateAllowedValues)({
          data: properties.templateType,
          allowedValues: ["Automation","State","Package"],
        }));
    }
    errors.collect(ros.propertyValidator('templateType', ros.validateString)(properties.templateType));
    errors.collect(ros.propertyValidator('isFavorite', ros.validateBoolean)(properties.isFavorite));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('hasTrigger', ros.validateBoolean)(properties.hasTrigger));
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    if(properties.shareType && (typeof properties.shareType) !== 'object') {
        errors.collect(ros.propertyValidator('shareType', ros.validateAllowedValues)({
          data: properties.shareType,
          allowedValues: ["Public","Private"],
        }));
    }
    errors.collect(ros.propertyValidator('shareType', ros.validateString)(properties.shareType));
    return errors.wrap('supplied properties not correct for "RosTemplatesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OOS::Templates` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplatesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OOS::Templates` resource.
 */
// @ts-ignore TS6133
function rosTemplatesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatesPropsValidator(properties).assertSuccess();
    }
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'CreatedBy': ros.stringToRosTemplate(properties.createdBy),
      'CreatedDateAfter': ros.stringToRosTemplate(properties.createdDateAfter),
      'CreatedDateBefore': ros.stringToRosTemplate(properties.createdDateBefore),
      'HasTrigger': ros.booleanToRosTemplate(properties.hasTrigger),
      'IsExample': ros.booleanToRosTemplate(properties.isExample),
      'IsFavorite': ros.booleanToRosTemplate(properties.isFavorite),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ShareType': ros.stringToRosTemplate(properties.shareType),
      'SortField': ros.stringToRosTemplate(properties.sortField),
      'SortOrder': ros.stringToRosTemplate(properties.sortOrder),
      'Tags': ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      'TemplateFormat': ros.stringToRosTemplate(properties.templateFormat),
      'TemplateName': ros.stringToRosTemplate(properties.templateName),
      'TemplateType': ros.stringToRosTemplate(properties.templateType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::Templates`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Templates` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
export class RosTemplates extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::Templates";

    /**
     * @Attribute TemplateNames: The list of template_names.
     */
    public readonly attrTemplateNames: ros.IResolvable;

    /**
     * @Attribute Templates: The list of templates.
     */
    public readonly attrTemplates: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property createdBy: The creator of the template.
     */
    public createdBy: string | ros.IResolvable | undefined;

    /**
     * @Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public createdDateAfter: string | ros.IResolvable | undefined;

    /**
     * @Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    public createdDateBefore: string | ros.IResolvable | undefined;

    /**
     * @Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    public hasTrigger: boolean | ros.IResolvable | undefined;

    /**
     * @Property isExample: Specifies whether the template is an example template.
     */
    public isExample: boolean | ros.IResolvable | undefined;

    /**
     * @Property isFavorite: Specifies whether the template is added to favorites.
     */
    public isFavorite: boolean | ros.IResolvable | undefined;

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
     * @Property shareType: The share type of the template. Valid values:
     * Public
     * Private
     */
    public shareType: string | ros.IResolvable | undefined;

    /**
     * @Property sortField: The field that is used to sort the templates to be queried. Valid values:
     * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
     * Popularity: The system sorts the returned templates based on the popularity of the templates.
     * TemplateName: The system sorts the returned templates based on the names of the templates.
     * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
     * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
     */
    public sortField: string | ros.IResolvable | undefined;

    /**
     * @Property sortOrder: The order in which you want to sort the results. Valid values:
     * Ascending: ascending order.
     * Descending: descending order. This is the default value.
     */
    public sortOrder: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property templateFormat: The format of the template. Valid values:
     * JSON
     * YAML
     */
    public templateFormat: string | ros.IResolvable | undefined;

    /**
     * @Property templateName: The name of the template.
     */
    public templateName: string | ros.IResolvable | undefined;

    /**
     * @Property templateType: The type of the template. Valid values:
     * Automation: the template for automated tasks.
     * State: the template for configuration inventories.
     * Package: the template for software packages.
     */
    public templateType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplatesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplates.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTemplateNames = this.getAtt('TemplateNames');
        this.attrTemplates = this.getAtt('Templates');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.createdBy = props.createdBy;
        this.createdDateAfter = props.createdDateAfter;
        this.createdDateBefore = props.createdDateBefore;
        this.hasTrigger = props.hasTrigger;
        this.isExample = props.isExample;
        this.isFavorite = props.isFavorite;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.shareType = props.shareType;
        this.sortField = props.sortField;
        this.sortOrder = props.sortOrder;
        this.tags = props.tags;
        this.templateFormat = props.templateFormat;
        this.templateName = props.templateName;
        this.templateType = props.templateType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            createdBy: this.createdBy,
            createdDateAfter: this.createdDateAfter,
            createdDateBefore: this.createdDateBefore,
            hasTrigger: this.hasTrigger,
            isExample: this.isExample,
            isFavorite: this.isFavorite,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            shareType: this.shareType,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            tags: this.tags,
            templateFormat: this.templateFormat,
            templateName: this.templateName,
            templateType: this.templateType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
