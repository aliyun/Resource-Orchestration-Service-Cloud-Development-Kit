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
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::Project`, which is used to create a DataWorks workspace.
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
     * @Attribute IsDefault: Indicates whether the workspace is the default workspace. Valid values:
1: The workspace is the default workspace.
0: The workspace is not the default workspace.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute ProjectId: The ID of the workspace.
     */
    readonly attrProjectId: ros.IResolvable;
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
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
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
