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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::GitCodeRepo`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GitCodeRepo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
export declare class RosGitCodeRepo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::GitCodeRepo";
    /**
     * @Attribute AuthorizedUrl: Authorized url.
     */
    readonly attrAuthorizedUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property owner: Git account.
     */
    owner: string | ros.IResolvable;
    /**
     * @Property platform: Git platform.
     */
    platform: string | ros.IResolvable;
    /**
     * @Property repository: Git repository.
     */
    repository: string | ros.IResolvable;
    /**
     * @Property commitId: Git commit id.
     */
    commitId: string | ros.IResolvable | undefined;
    /**
     * @Property organization: Git organization.
     */
    organization: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGitCodeRepoProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaseline`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PatchBaseline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
export declare class RosPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaseline";
    /**
     * @Attribute ApprovalRules: Accept the rules.
     */
    readonly attrApprovalRules: ros.IResolvable;
    /**
     * @Attribute ApprovedPatches: Approved patch list.
     */
    readonly attrApprovedPatches: ros.IResolvable;
    /**
     * @Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
     */
    readonly attrApprovedPatchesEnableNonSecurity: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreatedBy: Patch baseline creator.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute Description: Patches baseline description information.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IsDefault: Whether it is the default patch baseline.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute OperationSystem: Operating system type.
     */
    readonly attrOperationSystem: ros.IResolvable;
    /**
     * @Attribute PatchBaselineId: Patch baseline ID.
     */
    readonly attrPatchBaselineId: ros.IResolvable;
    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    readonly attrPatchBaselineName: ros.IResolvable;
    /**
     * @Attribute RejectedPatches: Reject the name of the patch.
     */
    readonly attrRejectedPatches: ros.IResolvable;
    /**
     * @Attribute RejectedPatchesAction: The operation of rejecting the patch.
     */
    readonly attrRejectedPatchesAction: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: Approve whether the patch includes updates other than security
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ShareType: Patch baseline sharing type.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute Sources: Patch source configuration list.
     */
    readonly attrSources: ros.IResolvable;
    /**
     * @Attribute Tags: Tags of patch baseline.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: Patch baseline updater.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: Update time.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselineProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaselines`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PatchBaselines` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export declare class RosPatchBaselines extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaselines";
    /**
     * @Attribute PatchBaselineNames: The list of patch baseline names.
     */
    readonly attrPatchBaselineNames: ros.IResolvable;
    /**
     * @Attribute PatchBaselines: The list of patch baselines.
     */
    readonly attrPatchBaselines: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property operationSystem: Operating system type.
     */
    operationSystem: string | ros.IResolvable | undefined;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property shareType: Patch baseline sharing type.
     */
    shareType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselinesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::SecretParameter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecretParameter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
 */
export declare class RosSecretParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameter";
    /**
     * @Attribute Constraints: The constraints of the encryption parameter.
     */
    readonly attrConstraints: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the encryption parameter was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The user who created the encryption parameter.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute Description: The description of the encryption parameter.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
     */
    readonly attrKeyId: ros.IResolvable;
    /**
     * @Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable;
    /**
     * @Attribute SecretParameterName: The name of the parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the parameter.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Type: The type of the parameter.
     */
    readonly attrType: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    /**
     * @Attribute Value: The value of the encryption parameter.
     */
    readonly attrValue: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property secretParameterName: The name of the parameter.
     */
    secretParameterName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParameterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::SecretParameters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecretParameters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export declare class RosSecretParameters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameters";
    /**
     * @Attribute SecretParameterNames: The list of secret parameter names.
     */
    readonly attrSecretParameterNames: ros.IResolvable;
    /**
     * @Attribute SecretParameters: The list of secret parameters.
     */
    readonly attrSecretParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    secretParameterName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParametersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::Template";
    /**
     * @Attribute Content: The content of the template.
     */
    readonly attrContent: ros.IResolvable;
    /**
     * @Attribute CreatedBy: The creator of the template.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * @Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    readonly attrCreatedDate: ros.IResolvable;
    /**
     * @Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    readonly attrHasTrigger: ros.IResolvable;
    /**
     * @Attribute Hash: The SHA-256 value of the template content.
     */
    readonly attrHash: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ShareType: The share type of the template. Valid values:
Public
Private
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * @Attribute Tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TemplateFormat: The format of the template. Valid values:
JSON
YAML
     */
    readonly attrTemplateFormat: ros.IResolvable;
    /**
     * @Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable;
    /**
     * @Attribute TemplateType: The type of the template. Valid values:
Automation: the template for automated tasks.
State: the template for configuration inventories.
Package: the template for software packages.
     */
    readonly attrTemplateType: ros.IResolvable;
    /**
     * @Attribute UpdatedBy: The user who last updated the template.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * @Attribute UpdatedDate: The time when the template was last updated.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property templateName: The name of the template.
     */
    templateName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
     */
    templateVersion: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
    readonly tags?: {
        [key: string]: (any);
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::Templates`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Templates` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
 */
export declare class RosTemplates extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::Templates";
    /**
     * @Attribute TemplateNames: The list of template_names.
     */
    readonly attrTemplateNames: ros.IResolvable;
    /**
     * @Attribute Templates: The list of templates.
     */
    readonly attrTemplates: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property createdBy: The creator of the template.
     */
    createdBy: string | ros.IResolvable | undefined;
    /**
     * @Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
     */
    createdDateAfter: string | ros.IResolvable | undefined;
    /**
     * @Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
     */
    createdDateBefore: string | ros.IResolvable | undefined;
    /**
     * @Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
     */
    hasTrigger: boolean | ros.IResolvable | undefined;
    /**
     * @Property isExample: Specifies whether the template is an example template.
     */
    isExample: boolean | ros.IResolvable | undefined;
    /**
     * @Property isFavorite: Specifies whether the template is added to favorites.
     */
    isFavorite: boolean | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property shareType: The share type of the template. Valid values:
     * Public
     * Private
     */
    shareType: string | ros.IResolvable | undefined;
    /**
     * @Property sortField: The field that is used to sort the templates to be queried. Valid values:
     * TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
     * Popularity: The system sorts the returned templates based on the popularity of the templates.
     * TemplateName: The system sorts the returned templates based on the names of the templates.
     * CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
     * UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
     */
    sortField: string | ros.IResolvable | undefined;
    /**
     * @Property sortOrder: The order in which you want to sort the results. Valid values:
     * Ascending: ascending order.
     * Descending: descending order. This is the default value.
     */
    sortOrder: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
     */
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property templateFormat: The format of the template. Valid values:
     * JSON
     * YAML
     */
    templateFormat: string | ros.IResolvable | undefined;
    /**
     * @Property templateName: The name of the template.
     */
    templateName: string | ros.IResolvable | undefined;
    /**
     * @Property templateType: The type of the template. Valid values:
     * Automation: the template for automated tasks.
     * State: the template for configuration inventories.
     * Package: the template for software packages.
     */
    templateType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplatesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
