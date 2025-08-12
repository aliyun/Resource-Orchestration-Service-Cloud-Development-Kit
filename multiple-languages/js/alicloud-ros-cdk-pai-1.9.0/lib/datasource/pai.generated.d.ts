import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export interface RosDatasetProps {
    /**
     * @Property datasetId: The first ID of the resource.
     */
    readonly datasetId: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Dataset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
export declare class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Dataset";
    /**
     * @Attribute Accessibility: Workspace visibility.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DataSourceType: The data source type.
     */
    readonly attrDataSourceType: ros.IResolvable;
    /**
     * @Attribute DataType: The dataset type. The default value is COMMON.
     */
    readonly attrDataType: ros.IResolvable;
    /**
     * @Attribute DatasetId: The first ID of the resource.
     */
    readonly attrDatasetId: ros.IResolvable;
    /**
     * @Attribute DatasetName: The name of the dataset.
     */
    readonly attrDatasetName: ros.IResolvable;
    /**
     * @Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute GmtModifiedTime: Update time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable;
    /**
     * @Attribute Options: The extended field, which is of the JsonString type.
     */
    readonly attrOptions: ros.IResolvable;
    /**
     * @Attribute OwnerId: The ID of the primary account.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * @Attribute Property: The properties of the dataset.
     */
    readonly attrProperty: ros.IResolvable;
    /**
     * @Attribute SourceId: The data source ID.
     */
    readonly attrSourceId: ros.IResolvable;
    /**
     * @Attribute SourceType: The data source type. The default value is USER.
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * @Attribute Uri: The Uri configuration sample is as follows:.
     */
    readonly attrUri: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the user to which the dataset belongs.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: The ID of the workspace where the dataset is located.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property datasetId: The first ID of the resource.
     */
    datasetId: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    workspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosDatasetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDatasets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export interface RosDatasetsProps {
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Datasets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Datasets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
 */
export declare class RosDatasets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Datasets";
    /**
     * @Attribute DatasetIds: The list of dataset IDs.
     */
    readonly attrDatasetIds: ros.IResolvable;
    /**
     * @Attribute Datasets: The list of datasets.
     */
    readonly attrDatasets: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    sourceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export interface RosServiceProps {
    /**
     * @Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Service`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
 */
export declare class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Service";
    /**
     * @Attribute AccessToken: The request token of the service.
     */
    readonly attrAccessToken: ros.IResolvable;
    /**
     * @Attribute CallerUid: The user ID of the account that is used to create the service.
     */
    readonly attrCallerUid: ros.IResolvable;
    /**
     * @Attribute Cpu: The CPU that you applied for each instance.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the service was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CurrentVersion: The current version of the model.
     */
    readonly attrCurrentVersion: ros.IResolvable;
    /**
     * @Attribute ExtraData: The additional information about the service.
     */
    readonly attrExtraData: ros.IResolvable;
    /**
     * @Attribute Gpu: The GPU that you applied for each instance.
     */
    readonly attrGpu: ros.IResolvable;
    /**
     * @Attribute Image: The data image of the service.
     */
    readonly attrImage: ros.IResolvable;
    /**
     * @Attribute InternetEndpoint: The public endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * @Attribute IntranetEndpoint: The private endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * @Attribute Labels: The tags of the service.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * @Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable;
    /**
     * @Attribute Memory: The memory that you applied for each instance.
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * @Attribute Message: The summary of the service.
     */
    readonly attrMessage: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace of the service.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * @Attribute PendingInstance: The number of instances for the suspended service.
     */
    readonly attrPendingInstance: ros.IResolvable;
    /**
     * @Attribute Reason: The reason why the service is in the current state.
     */
    readonly attrReason: ros.IResolvable;
    /**
     * @Attribute Resource: The resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable;
    /**
     * @Attribute ResourceAlias: The alias of the resource group to which the service belongs.
     */
    readonly attrResourceAlias: ros.IResolvable;
    /**
     * @Attribute Role: The role of the service.
     */
    readonly attrRole: ros.IResolvable;
    /**
     * @Attribute RoleAttrs: The additional attributes of the service role.
     */
    readonly attrRoleAttrs: ros.IResolvable;
    /**
     * @Attribute RunningInstance: The number of instances for the running service.
     */
    readonly attrRunningInstance: ros.IResolvable;
    /**
     * @Attribute SafetyLock: The security lock of the service.
     */
    readonly attrSafetyLock: ros.IResolvable;
    /**
     * @Attribute ServiceConfig: The configurations of the service.
     */
    readonly attrServiceConfig: ros.IResolvable;
    /**
     * @Attribute ServiceGroup: The group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable;
    /**
     * @Attribute ServiceName: The name of the service.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
     */
    readonly attrServiceUid: ros.IResolvable;
    /**
     * @Attribute TotalInstance: The total number of instances of the service.
     */
    readonly attrTotalInstance: ros.IResolvable;
    /**
     * @Attribute UpdateTime: The time when the service was updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute Weight: The weight of the canary release for the service.
     */
    readonly attrWeight: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: The name of the service.
     */
    serviceName: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosServices`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export interface RosServicesProps {
    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property serviceName: Service Name.
     */
    readonly serviceName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Services`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Services` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export declare class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Services";
    /**
     * @Attribute ServiceNames: The list of service names.
     */
    readonly attrServiceNames: ros.IResolvable;
    /**
     * @Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property labels: Service Tag.
     */
    labels: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property serviceName: Service Name.
     */
    serviceName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export interface RosWorkspaceProps {
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export declare class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspace";
    /**
     * @Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable;
    /**
     * @Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable;
    /**
     * @Attribute Description: The description of the workspace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DisplayName: The display name of the workspace.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute EnvTypes: The environments of the workspace.
     */
    readonly attrEnvTypes: ros.IResolvable;
    /**
     * @Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable;
    /**
     * @Attribute IsDefault: Default Workspace.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: The first ID of the resource.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * @Attribute WorkspaceName: The name of the workspace.
     */
    readonly attrWorkspaceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    workspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceDlc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export interface RosWorkspaceResourceDlcProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlc`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export declare class RosWorkspaceResourceDlc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlc";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceDlcProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceDlcs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export interface RosWorkspaceResourceDlcsProps {
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlcs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlcs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export declare class RosWorkspaceResourceDlcs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceDlcs";
    /**
     * @Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * @Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.
     */
    readonly attrWorkspaceResourceDlcs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    groupName: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceDlcsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceFlink`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
 */
export interface RosWorkspaceResourceFlinkProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlink`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlink` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
 */
export declare class RosWorkspaceResourceFlink extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlink";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceFlinkProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceFlinks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export interface RosWorkspaceResourceFlinksProps {
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlinks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlinks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export declare class RosWorkspaceResourceFlinks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceFlinks";
    /**
     * @Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * @Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
     */
    readonly attrWorkspaceResourceFlinks: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    groupName: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceFlinksProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export interface RosWorkspaceResourceMaxComputeProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxCompute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxCompute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export declare class RosWorkspaceResourceMaxCompute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxCompute";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * @Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceMaxComputeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaceResourceMaxComputes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export interface RosWorkspaceResourceMaxComputesProps {
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxComputes`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxComputes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export declare class RosWorkspaceResourceMaxComputes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::WorkspaceResourceMaxComputes";
    /**
     * @Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * @Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.
     */
    readonly attrWorkspaceResourceMaxComputes: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    groupName: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceResourceMaxComputesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
 */
export interface RosWorkspacesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PAI::Workspaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
 */
export declare class RosWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspaces";
    /**
     * @Attribute WorkspaceIds: The list of workspace IDs.
     */
    readonly attrWorkspaceIds: ros.IResolvable;
    /**
     * @Attribute Workspaces: The list of workspaces.
     */
    readonly attrWorkspaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    workspaceId: string | ros.IResolvable | undefined;
    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    workspaceName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspacesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
