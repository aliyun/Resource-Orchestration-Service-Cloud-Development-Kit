import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCodeSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export interface RosCodeSourceProps {
    /**
     * @Property accessibility: Visibility of the code configuration, possible values:
     * - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * - PUBLIC: In this workspace, it is visible to everyone.
     */
    readonly accessibility: string | ros.IResolvable;
    /**
     * @Property codeRepo: Code repository address.
     */
    readonly codeRepo: string | ros.IResolvable;
    /**
     * @Property displayName: Code source configuration name.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property mountPath: The local Mount Directory of the code.
     */
    readonly mountPath: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property codeBranch: Code repository branch.
     */
    readonly codeBranch?: string | ros.IResolvable;
    /**
     * @Property codeCommit: The code CommitId.
     */
    readonly codeCommit?: string | ros.IResolvable;
    /**
     * @Property codeRepoAccessToken: The Token used to access the code repository.
     */
    readonly codeRepoAccessToken?: string | ros.IResolvable;
    /**
     * @Property codeRepoUserName: The user name of the code repository.
     */
    readonly codeRepoUserName?: string | ros.IResolvable;
    /**
     * @Property description: A detailed description of the code configuration.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::CodeSource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CodeSource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
export declare class RosCodeSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::CodeSource";
    /**
     * @Attribute Accessibility: Visibility of the code configuration.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * @Attribute CodeBranch: Code repository branch.
     */
    readonly attrCodeBranch: ros.IResolvable;
    /**
     * @Attribute CodeCommit: The code CommitId.
     */
    readonly attrCodeCommit: ros.IResolvable;
    /**
     * @Attribute CodeRepo: Code repository address.
     */
    readonly attrCodeRepo: ros.IResolvable;
    /**
     * @Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    readonly attrCodeRepoAccessToken: ros.IResolvable;
    /**
     * @Attribute CodeRepoUserName: The user name of the code repository.
     */
    readonly attrCodeRepoUserName: ros.IResolvable;
    /**
     * @Attribute CodeSourcesId: The ID of the created code configuration.
     */
    readonly attrCodeSourcesId: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the code.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: A detailed description of the code configuration.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DisplayName: Code source configuration name.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute GmtModifyTime: Code configuration modification time. The time format is iso8601.
     */
    readonly attrGmtModifyTime: ros.IResolvable;
    /**
     * @Attribute MountPath: The local Mount Directory of the code.
     */
    readonly attrMountPath: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the creator of the code configuration source.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessibility: Visibility of the code configuration, possible values:
     * - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * - PUBLIC: In this workspace, it is visible to everyone.
     */
    accessibility: string | ros.IResolvable;
    /**
     * @Property codeRepo: Code repository address.
     */
    codeRepo: string | ros.IResolvable;
    /**
     * @Property displayName: Code source configuration name.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property mountPath: The local Mount Directory of the code.
     */
    mountPath: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property codeBranch: Code repository branch.
     */
    codeBranch: string | ros.IResolvable | undefined;
    /**
     * @Property codeCommit: The code CommitId.
     */
    codeCommit: string | ros.IResolvable | undefined;
    /**
     * @Property codeRepoAccessToken: The Token used to access the code repository.
     */
    codeRepoAccessToken: string | ros.IResolvable | undefined;
    /**
     * @Property codeRepoUserName: The user name of the code repository.
     */
    codeRepoUserName: string | ros.IResolvable | undefined;
    /**
     * @Property description: A detailed description of the code configuration.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCodeSourceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDataset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
 */
export interface RosDatasetProps {
    /**
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    readonly datasetName: string | ros.IResolvable;
    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    readonly dataSourceType: string | ros.IResolvable;
    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    readonly property: string | ros.IResolvable;
    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    readonly uri: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    readonly accessibility?: string | ros.IResolvable;
    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    readonly dataType?: string | ros.IResolvable;
    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    readonly options?: string | ros.IResolvable;
    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Dataset`, which is used to create a dataset.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dataset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
 */
export declare class RosDataset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Dataset";
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
     * @Property datasetName: The name of the dataset. The naming rules are as follows:
     * - Start with a lowercase letter, uppercase letter, number, or Chinese.
     * - Can contain an underscore (_) or a dash (-).
     * - 1~127 characters in length.
     */
    datasetName: string | ros.IResolvable;
    /**
     * @Property dataSourceType: The data source type. The following values are supported:
     * - OSS: Alibaba Cloud Object Storage (OSS).
     * - NAS: Alibaba cloud file storage (NAS).
     */
    dataSourceType: string | ros.IResolvable;
    /**
     * @Property property: The properties of the dataset. The following values are supported:
     * - FILE: FILE.
     * - DIRECTORY: folder.
     */
    property: string | ros.IResolvable;
    /**
     * @Property uri: The Uri configuration sample is as follows:
     * - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
     * - The data source type is NAS:
     * The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
     * CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
     * CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
     * CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
     */
    uri: string | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located.
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property accessibility: Workspace visibility. The following values are supported:
     * - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
     * - PUBLIC: The workspace is visible to all users.
     */
    accessibility: string | ros.IResolvable | undefined;
    /**
     * @Property dataType: The dataset type. The default value is COMMON. The following values are supported:
     * - COMMON: COMMON.
     * - PIC: picture.
     * - TEXT: TEXT.
     * - VIDEO: VIDEO.
     * - AUDIO: AUDIO.
     */
    dataType: string | ros.IResolvable | undefined;
    /**
     * @Property description: Custom descriptions of datasets to distinguish between different datasets.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property options: The extended field, which is of the JsonString type.
     * When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
     */
    options: string | ros.IResolvable | undefined;
    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    sourceId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceType: The data source type. The default value is USER. The following values are supported:
     * - PAI-PUBLIC-DATASET:PAI public dataset.
     * - ITAG: The dataset generated by the iTAG module annotation result.
     * - USER: The data set registered by the USER.
     */
    sourceType: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosExperiment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export interface RosExperimentProps {
    /**
     * @Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    readonly artifactUri: string | ros.IResolvable;
    /**
     * @Property experimentName: Name is the name of the experiment, unique in a namespace.
     */
    readonly experimentName: string | ros.IResolvable;
    /**
     * @Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property accessibility: Experimental Visibility.
     */
    readonly accessibility?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Experiment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Experiment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export declare class RosExperiment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Experiment";
    /**
     * @Attribute Accessibility: Experimental Visibility.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * @Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    readonly attrArtifactUri: ros.IResolvable;
    /**
     * @Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    readonly attrExperimentId: ros.IResolvable;
    /**
     * @Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    readonly attrExperimentName: ros.IResolvable;
    /**
     * @Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    readonly attrGmtModifiedTime: ros.IResolvable;
    /**
     * @Attribute Labels: Labels are tags of the experiment.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * @Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * @Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    readonly attrTensorboardLogUri: ros.IResolvable;
    /**
     * @Attribute UserId: UserId is the user account id which created this entity.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    artifactUri: string | ros.IResolvable;
    /**
     * @Property experimentName: Name is the name of the experiment, unique in a namespace.
     */
    experimentName: string | ros.IResolvable;
    /**
     * @Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property accessibility: Experimental Visibility.
     */
    accessibility: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExperimentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRun`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export interface RosRunProps {
    /**
     * @Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    readonly experimentId: string | ros.IResolvable;
    /**
     * @Property runName: The name of the Run.
     */
    readonly runName?: string | ros.IResolvable;
    /**
     * @Property sourceId: Attribute Resource field representing the source task ID.
     */
    readonly sourceId?: string | ros.IResolvable;
    /**
     * @Property sourceType: Resource attribute fields representing the source type.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Run`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Run` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export declare class RosRun extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Run";
    /**
     * @Attribute Accessibility: Resource attribute fields representing visibility.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the Run.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    readonly attrExperimentId: ros.IResolvable;
    /**
     * @Attribute GmtModifiedTime: Resource attribute fields representing edit time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable;
    /**
     * @Attribute Labels: Run attribute field representing the run tag.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * @Attribute Metrics: Resource attribute field representing the run metric.
     */
    readonly attrMetrics: ros.IResolvable;
    /**
     * @Attribute OwnerId: Resource attribute field representing owner.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * @Attribute Params: Resource attribute field representing the run parameter.
     */
    readonly attrParams: ros.IResolvable;
    /**
     * @Attribute RunId: The ID of the Run.
     */
    readonly attrRunId: ros.IResolvable;
    /**
     * @Attribute RunName: The name of the Run.
     */
    readonly attrRunName: ros.IResolvable;
    /**
     * @Attribute SourceId: Attribute Resource field representing the source task ID.
     */
    readonly attrSourceId: ros.IResolvable;
    /**
     * @Attribute SourceType: Run attribute fields representing the source type.
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * @Attribute UserId: Run attribute field representing creator ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    experimentId: string | ros.IResolvable;
    /**
     * @Property runName: The name of the Run.
     */
    runName: string | ros.IResolvable | undefined;
    /**
     * @Property sourceId: Attribute Resource field representing the source task ID.
     */
    sourceId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceType: Resource attribute fields representing the source type.
     */
    sourceType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export interface RosServiceProps {
    /**
     * @Property serviceConfig: Service configuration information.
     */
    readonly serviceConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property develop: Whether to enter the development mode.
     */
    readonly develop?: string | ros.IResolvable;
    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Service`, which is used to create an Elastic Algorithm Service (EAS) service in Machine Learning Platform for AI (PAI).
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
export declare class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Service";
    /**
     * @Attribute AccessToken: Service Request authentication token.
     */
    readonly attrAccessToken: ros.IResolvable;
    /**
     * @Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
     */
    readonly attrCallerUid: ros.IResolvable;
    /**
     * @Attribute Cpu: Number of service CPU cores.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time of the service.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CurrentVersion: Current running version of the service.
     */
    readonly attrCurrentVersion: ros.IResolvable;
    /**
     * @Attribute ExtraData: Service Extra Information.
     */
    readonly attrExtraData: ros.IResolvable;
    /**
     * @Attribute Gpu: Number of service GPU cards.
     */
    readonly attrGpu: ros.IResolvable;
    /**
     * @Attribute Image: Service Deployment Mirroring.
     */
    readonly attrImage: ros.IResolvable;
    /**
     * @Attribute InternetEndpoint: Public network Endpoint of the service.
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * @Attribute IntranetEndpoint: The intranet Endpoint of the service.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * @Attribute Labels: Service Tag.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * @Attribute LatestVersion: The latest version of the service.
     */
    readonly attrLatestVersion: ros.IResolvable;
    /**
     * @Attribute Memory: Memory of service (MB).
     */
    readonly attrMemory: ros.IResolvable;
    /**
     * @Attribute Message: Latest information on services.
     */
    readonly attrMessage: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace to which the service belongs.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute ParentUid: Primary account ID of the creator.
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * @Attribute PendingInstance: Number of instances where the service is not currently ready.
     */
    readonly attrPendingInstance: ros.IResolvable;
    /**
     * @Attribute Reason: Service deployment failure reason.
     */
    readonly attrReason: ros.IResolvable;
    /**
     * @Attribute Resource: The ID of the resource group to which the service belongs.
     */
    readonly attrResource: ros.IResolvable;
    /**
     * @Attribute ResourceAlias: Name of the resource group where the service resides.
     */
    readonly attrResourceAlias: ros.IResolvable;
    /**
     * @Attribute Role: Grouping Service Role.
     */
    readonly attrRole: ros.IResolvable;
    /**
     * @Attribute RoleAttrs: Grouping Service Role Properties.
     */
    readonly attrRoleAttrs: ros.IResolvable;
    /**
     * @Attribute RunningInstance: Number of instances in service running.
     */
    readonly attrRunningInstance: ros.IResolvable;
    /**
     * @Attribute SafetyLock: Service Security Lock Status.
     */
    readonly attrSafetyLock: ros.IResolvable;
    /**
     * @Attribute ServiceConfig: Service configuration information.
     */
    readonly attrServiceConfig: ros.IResolvable;
    /**
     * @Attribute ServiceGroup: Group to which the service belongs.
     */
    readonly attrServiceGroup: ros.IResolvable;
    /**
     * @Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * @Attribute ServiceUid: Unique Service ID.
     */
    readonly attrServiceUid: ros.IResolvable;
    /**
     * @Attribute TotalInstance: Total number of instances required by the service.
     */
    readonly attrTotalInstance: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Service Last Updated.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * @Attribute Weight: Packet Service Traffic Weight.
     */
    readonly attrWeight: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceConfig: Service configuration information.
     */
    serviceConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property develop: Whether to enter the development mode.
     */
    develop: string | ros.IResolvable | undefined;
    /**
     * @Property labels: Service Tag.
     */
    labels: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
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
 * Properties for defining a `RosWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export interface RosWorkspaceProps {
    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    readonly envTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName: string | ros.IResolvable;
    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::Workspace`, which is used to create a workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export declare class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::Workspace";
    /**
     * @Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable;
    /**
     * @Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable;
    /**
     * @Attribute Description: Workspace description, no more than 80 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute EnvTypes: Environments contained in the workspace:.
     */
    readonly attrEnvTypes: ros.IResolvable;
    /**
     * @Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable;
    /**
     * @Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * @Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * @Attribute WorkspaceName: The workspace name.
     */
    readonly attrWorkspaceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Workspace description, no more than 80 characters.
     */
    description: string | ros.IResolvable;
    /**
     * @Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    envTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    workspaceName: string | ros.IResolvable;
    /**
     * @Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    displayName: string | ros.IResolvable | undefined;
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
 */
export interface RosWorkspaceResourceDlcProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceDlc.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceDlc`, which is used to associate Deep Learning Containers (DLC) resources with a workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceDlc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
 */
export declare class RosWorkspaceResourceDlc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceDlc";
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
     * @Property resources: Resource List.
     */
    resources: Array<RosWorkspaceResourceDlc.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    option: string | ros.IResolvable | undefined;
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
export declare namespace RosWorkspaceResourceDlc {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosWorkspaceResourceFlink`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export interface RosWorkspaceResourceFlinkProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceFlink.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceFlink`, which is used to associate Realtime Compute for Apache Flink resources with a workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceFlink` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export declare class RosWorkspaceResourceFlink extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceFlink";
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
     * @Property resources: Resource List.
     */
    resources: Array<RosWorkspaceResourceFlink.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    option: string | ros.IResolvable | undefined;
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
export declare namespace RosWorkspaceResourceFlink {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosWorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export interface RosWorkspaceResourceMaxComputeProps {
    /**
     * @Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceMaxCompute.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::WorkspaceResourceMaxCompute`, which is used to associate MaxCompute resources with a workspace.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkspaceResourceMaxCompute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export declare class RosWorkspaceResourceMaxCompute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAI::WorkspaceResourceMaxCompute";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute GroupName: Resource group name.
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
     * @Property resources: Resource List.
     */
    resources: Array<RosWorkspaceResourceMaxCompute.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    isDefault: boolean | ros.IResolvable | undefined;
    /**
     * @Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    option: string | ros.IResolvable | undefined;
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
export declare namespace RosWorkspaceResourceMaxCompute {
    /**
     * @stability external
     */
    interface QuotasProperty {
        /**
         * @Property quotaId: The resource quota ID.
     * Obtain the ID of the Quota through ListQuotas.
         */
        readonly quotaId: string | ros.IResolvable;
    }
}
export declare namespace RosWorkspaceResourceMaxCompute {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
         */
        readonly workspaceResourceWorkspaceId: string | ros.IResolvable;
        /**
         * @Property quotas: The list of resource quotas. Currently, only MaxCompute resources have resource quotas.
         */
        readonly quotas?: Array<RosWorkspaceResourceMaxCompute.QuotasProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
         */
        readonly workspaceResourceName: string | ros.IResolvable;
        /**
         * @Property spec: Resource Specifications.
         */
        readonly spec?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property envType: Environment, Support:
     * - dev: Development
     * - prod: Production.
         */
        readonly envType: string | ros.IResolvable;
    }
}
