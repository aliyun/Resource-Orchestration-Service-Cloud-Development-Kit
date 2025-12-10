import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
 */
export interface RosProjectProps {
    /**
     * @Property projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    readonly projectIdentifier: string | ros.IResolvable;
    /**
     * @Property disableDevelopment: Specifies whether to disable the Development role. Valid values:
     * false: enables the Development role.
     * true: disables the Development role.
     * Default value: false.
     */
    readonly disableDevelopment?: boolean | ros.IResolvable;
    /**
     * @Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
     * true: allowed
     * false: not allowed
     * Default value: true.
     */
    readonly isAllowDownload?: boolean | ros.IResolvable;
    /**
     * @Property projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
     */
    readonly projectDescription?: string | ros.IResolvable;
    /**
     * @Property projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
     * 2: basic mode
     * 3: standard mode
     * Default value: 2.
     */
    readonly projectMode?: number | ros.IResolvable;
    /**
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.The value contains 3 to 28 characters.
     */
    readonly projectName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProject.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::Project";
    /**
     * @Attribute EnvTypes: The environment of the workspace. Valid values: PROD and DEV.
The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
     */
    readonly attrEnvTypes: ros.IResolvable;
    /**
     * @Attribute Id: The ID number of the workspace.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether the workspace is the default workspace. Valid values:
1: The workspace is the default workspace.
0: The workspace is not the default workspace.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute ProjectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    readonly attrProjectIdentifier: ros.IResolvable;
    /**
     * @Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled. Valid values:
1: The workspace protection feature is enabled.
0: The workspace protection feature is disabled.
     */
    readonly attrProtectedMode: ros.IResolvable;
    /**
     * @Attribute ResidentArea: The type of the workspace. Valid values: private and swap.
     */
    readonly attrResidentArea: ros.IResolvable;
    /**
     * @Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
     */
    readonly attrSchedulerMaxRetryTimes: ros.IResolvable;
    /**
     * @Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs. Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
     */
    readonly attrSchedulerRetryInterval: ros.IResolvable;
    /**
     * @Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant. Valid values:
0: The MaxCompute tables are invisible to the users within a tenant.
1: The MaxCompute tables are visible to the users within a tenant.
     */
    readonly attrTablePrivacyMode: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    projectIdentifier: string | ros.IResolvable;
    /**
     * @Property disableDevelopment: Specifies whether to disable the Development role. Valid values:
     * false: enables the Development role.
     * true: disables the Development role.
     * Default value: false.
     */
    disableDevelopment: boolean | ros.IResolvable | undefined;
    /**
     * @Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
     * true: allowed
     * false: not allowed
     * Default value: true.
     */
    isAllowDownload: boolean | ros.IResolvable | undefined;
    /**
     * @Property projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
     */
    projectDescription: string | ros.IResolvable | undefined;
    /**
     * @Property projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
     * 2: basic mode
     * 3: standard mode
     * Default value: 2.
     */
    projectMode: number | ros.IResolvable | undefined;
    /**
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.The value contains 3 to 28 characters.
     */
    projectName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosProject.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export interface RosResourceGroupProps {
    /**
     * @Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property vpcId: The default bound VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The default bound switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoRenewEnabled: Whether to renew automatically.
     */
    readonly autoRenewEnabled?: boolean | ros.IResolvable;
    /**
     * @Property paymentDuration: Paid time. Default is 1.
     */
    readonly paymentDuration?: number | ros.IResolvable;
    /**
     * @Property paymentDurationUnit: Paid time unit. Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;
    /**
     * @Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    readonly spec?: number | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to ResourceGroup. Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosResourceGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::ResourceGroup";
    /**
     * @Attribute Id: Creates a unique identifier for a common resource group.
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    name: string | ros.IResolvable;
    /**
     * @Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property vpcId: The default bound VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The default bound switch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property autoRenewEnabled: Whether to renew automatically.
     */
    autoRenewEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property paymentDuration: Paid time. Default is 1.
     */
    paymentDuration: number | ros.IResolvable | undefined;
    /**
     * @Property paymentDurationUnit: Paid time unit. Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    paymentDurationUnit: string | ros.IResolvable | undefined;
    /**
     * @Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    spec: number | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to ResourceGroup. Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosResourceGroup.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosResourceGroupRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export interface RosResourceGroupRelationProps {
    /**
     * @Property projectId: Workspace ID to bind
     */
    readonly projectId: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Unique ID of resource group
     */
    readonly resourceGroupId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::ResourceGroupRelation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroupRelation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export declare class RosResourceGroupRelation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::ResourceGroupRelation";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectId: Workspace ID to bind
     */
    projectId: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: Unique ID of resource group
     */
    resourceGroupId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupRelationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
