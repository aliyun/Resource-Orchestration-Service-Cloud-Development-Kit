import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosArtifactLifecycleRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export interface RosArtifactLifecycleRuleProps {
    /**
     * @Property auto: Specify whether to automatically execute the lifecycle management rule.
     */
    readonly auto: boolean | ros.IResolvable;
    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;
    /**
     * @Property repoName: The name of the image repository.
     */
    readonly repoName?: string | ros.IResolvable;
    /**
     * @Property retentionTagCount: The number of images that you want to retain.
     */
    readonly retentionTagCount?: number | ros.IResolvable;
    /**
     * @Property scheduleTime: The execution cycle of the lifecycle management rule.
     */
    readonly scheduleTime?: string | ros.IResolvable;
    /**
     * @Property scope: The deletion scope.
     */
    readonly scope?: string | ros.IResolvable;
    /**
     * @Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    readonly tagRegexp?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::ArtifactLifecycleRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ArtifactLifecycleRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
export declare class RosArtifactLifecycleRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::ArtifactLifecycleRule";
    /**
     * @Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    readonly attrArtifactLifecycleRuleId: ros.IResolvable;
    /**
     * @Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    readonly attrAuto: ros.IResolvable;
    /**
     * @Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: ACR Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * @Attribute NamespaceName: The name of the namespace.
     */
    readonly attrNamespaceName: ros.IResolvable;
    /**
     * @Attribute RepoName: The name of the image repository.
     */
    readonly attrRepoName: ros.IResolvable;
    /**
     * @Attribute RetentionTagCount: The number of images that you want to retain.
     */
    readonly attrRetentionTagCount: ros.IResolvable;
    /**
     * @Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    readonly attrScheduleTime: ros.IResolvable;
    /**
     * @Attribute Scope: The deletion scope.
     */
    readonly attrScope: ros.IResolvable;
    /**
     * @Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    readonly attrTagRegexp: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property auto: Specify whether to automatically execute the lifecycle management rule.
     */
    auto: boolean | ros.IResolvable;
    /**
     * @Property instanceId: ACR Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: The name of the namespace.
     */
    namespaceName: string | ros.IResolvable | undefined;
    /**
     * @Property repoName: The name of the image repository.
     */
    repoName: string | ros.IResolvable | undefined;
    /**
     * @Property retentionTagCount: The number of images that you want to retain.
     */
    retentionTagCount: number | ros.IResolvable | undefined;
    /**
     * @Property scheduleTime: The execution cycle of the lifecycle management rule.
     */
    scheduleTime: string | ros.IResolvable | undefined;
    /**
     * @Property scope: The deletion scope.
     */
    scope: string | ros.IResolvable | undefined;
    /**
     * @Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    tagRegexp: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosArtifactLifecycleRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property imageScanner: Security scan engine.
     */
    readonly imageScanner?: string | ros.IResolvable;
    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    readonly instanceStorageName?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    readonly renewPeriod?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Instance`, which is used to create a Container Registry Enterprise Edition instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Instance";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: InstanceName.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceSpecification: The instance specification.
     */
    readonly attrInstanceSpecification: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: Last modification time.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property imageScanner: Security scan engine.
     */
    imageScanner: string | ros.IResolvable | undefined;
    /**
     * @Property instanceStorageName: Custom OSS Bucket name.
     */
    instanceStorageName: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus: Automatic renewal status, value:
     * - AutoRenewal: automatic renewal.
     * - ManualRenewal: manual renewal.
     * Default ManualRenewal.
     */
    renewalStatus: string | ros.IResolvable | undefined;
    /**
     * @Property renewPeriod: Automatic renewal cycle, in months.
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    renewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstanceEndpointAclPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
export interface RosInstanceEndpointAclPolicyProps {
    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property autoEnableType: Whether to auto enable the type of the endpoint.
     */
    readonly autoEnableType?: string | ros.IResolvable;
    /**
     * @Property comment: The description of the entry.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceEndpointAclPolicy`, which is used to create a whitelist policy for the public endpoint of an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceEndpointAclPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
export declare class RosInstanceEndpointAclPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceEndpointAclPolicy";
    /**
     * @Attribute Entry: The IP address range that is allowed to access the instance.
     */
    readonly attrEntry: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    entry: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property autoEnableType: Whether to auto enable the type of the endpoint.
     */
    autoEnableType: string | ros.IResolvable | undefined;
    /**
     * @Property comment: The description of the entry.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property endpointType: The type of the endpoint.
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    moduleName: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceEndpointAclPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstanceVpcEndpointLinkedVpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export interface RosInstanceVpcEndpointLinkedVpcProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vswitchId: The ID of the vswitch.
     */
    readonly vswitchId: string | ros.IResolvable;
    /**
     * @Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
     * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
     * Valid values:
     * - **true**: Automatically creates a Privatezone record.
     * - **false** (default): Do not automatically create Privatezone records.
     */
    readonly enableCreateDnsRecordInPvzt?: boolean | ros.IResolvable;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
     * - **Registry** (default): Access the image repository.
     * - **Chart**: Access Helm Chart.
     */
    readonly moduleName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `InstanceVpcEndpointLinkedVpc` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
export declare class RosInstanceVpcEndpointLinkedVpc extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceVpcEndpointLinkedVpc";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the vpc.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VswitchId: The ID of the vswitch.
     */
    readonly attrVswitchId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the vpc.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vswitchId: The ID of the vswitch.
     */
    vswitchId: string | ros.IResolvable;
    /**
     * @Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
     * If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
     * Valid values:
     * - **true**: Automatically creates a Privatezone record.
     * - **false** (default): Do not automatically create Privatezone records.
     */
    enableCreateDnsRecordInPvzt: boolean | ros.IResolvable | undefined;
    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
     * - **Registry** (default): Access the image repository.
     * - **Chart**: Access Helm Chart.
     */
    moduleName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceVpcEndpointLinkedVpcProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property namespace: The name of the namespace.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    readonly autoCreate?: boolean | ros.IResolvable;
    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    readonly defaultVisibility?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Namespace`, which is used to create a namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Namespace";
    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute NamespaceId: The namespace ID.
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: The name of the namespace.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    autoCreate: boolean | ros.IResolvable | undefined;
    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    defaultVisibility: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRepoSyncRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export interface RosRepoSyncRuleProps {
    /**
     * @Property instanceId: The ID of the CR instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: The name of the CR namespace.
     */
    readonly namespaceName: string | ros.IResolvable;
    /**
     * @Property syncRuleName: The name of the image sync rule.
     */
    readonly syncRuleName: string | ros.IResolvable;
    /**
     * @Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
     */
    readonly syncScope: string | ros.IResolvable;
    /**
     * @Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
     */
    readonly syncTrigger: string | ros.IResolvable;
    /**
     * @Property targetInstanceId: The ID of the destination instance.
     */
    readonly targetInstanceId: string | ros.IResolvable;
    /**
     * @Property targetNamespaceName: The name of the destination namespace.
     */
    readonly targetNamespaceName: string | ros.IResolvable;
    /**
     * @Property targetRegionId: The ID of the destination region.
     */
    readonly targetRegionId: string | ros.IResolvable;
    /**
     * @Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
     */
    readonly repoName?: string | ros.IResolvable;
    /**
     * @Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    readonly repoNameFilter?: string | ros.IResolvable;
    /**
     * @Property tagFilter: The tag filter. Default value: .*
     */
    readonly tagFilter?: string | ros.IResolvable;
    /**
     * @Property targetRepoName: The name of the destination image repository. This parameter is optional.
     */
    readonly targetRepoName?: string | ros.IResolvable;
    /**
     * @Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    readonly targetUserId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::RepoSyncRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RepoSyncRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
export declare class RosRepoSyncRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::RepoSyncRule";
    /**
     * @Attribute SyncRuleId: The ID of the synchronization rule.
     */
    readonly attrSyncRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the CR instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property namespaceName: The name of the CR namespace.
     */
    namespaceName: string | ros.IResolvable;
    /**
     * @Property syncRuleName: The name of the image sync rule.
     */
    syncRuleName: string | ros.IResolvable;
    /**
     * @Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
     */
    syncScope: string | ros.IResolvable;
    /**
     * @Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
     */
    syncTrigger: string | ros.IResolvable;
    /**
     * @Property targetInstanceId: The ID of the destination instance.
     */
    targetInstanceId: string | ros.IResolvable;
    /**
     * @Property targetNamespaceName: The name of the destination namespace.
     */
    targetNamespaceName: string | ros.IResolvable;
    /**
     * @Property targetRegionId: The ID of the destination region.
     */
    targetRegionId: string | ros.IResolvable;
    /**
     * @Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
     */
    repoName: string | ros.IResolvable | undefined;
    /**
     * @Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    repoNameFilter: string | ros.IResolvable | undefined;
    /**
     * @Property tagFilter: The tag filter. Default value: .*
     */
    tagFilter: string | ros.IResolvable | undefined;
    /**
     * @Property targetRepoName: The name of the destination image repository. This parameter is optional.
     */
    targetRepoName: string | ros.IResolvable | undefined;
    /**
     * @Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    targetUserId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepoSyncRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosRepository`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export interface RosRepositoryProps {
    /**
     * @Property repoName: The name of the repository.
     */
    readonly repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    readonly repoType: string | ros.IResolvable;
    /**
     * @Property summary: The summary of the repository.
     */
    readonly summary: string | ros.IResolvable;
    /**
     * @Property detail: The description of the repository.
     */
    readonly detail?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;
    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    readonly tagImmutability?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::Repository`, which is used to create an image repository.
 * @Note This class does not contain additional functions, so it is recommended to use the `Repository` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
 */
export declare class RosRepository extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Repository";
    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute RepoId: The repository ID.
     */
    readonly attrRepoId: ros.IResolvable;
    /**
     * @Attribute RepoName: The name of the repository.
     */
    readonly attrRepoName: ros.IResolvable;
    /**
     * @Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly attrRepoNamespace: ros.IResolvable;
    /**
     * @Attribute RepoType: The type of the repository.
     */
    readonly attrRepoType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repoName: The name of the repository.
     */
    repoName: string | ros.IResolvable;
    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    repoNamespace: string | ros.IResolvable;
    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    repoType: string | ros.IResolvable;
    /**
     * @Property summary: The summary of the repository.
     */
    summary: string | ros.IResolvable;
    /**
     * @Property detail: The description of the repository.
     */
    detail: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property repoSource: Code Source message.
     */
    repoSource: RosRepository.RepoSourceProperty | ros.IResolvable | undefined;
    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    tagImmutability: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoryProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRepository {
    /**
     * @stability external
     */
    interface RepoSourceProperty {
        /**
         * @Property isAutoBuild: Whether to enable automatic construction
         */
        readonly isAutoBuild: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoNamespace: Source code repository namespace
         */
        readonly sourceRepoNamespace: string | ros.IResolvable;
        /**
         * @Property sourceRepoName: Source code warehouse name
         */
        readonly sourceRepoName: string | ros.IResolvable;
        /**
         * @Property isOversea: Whether to enable overseas construction
         */
        readonly isOversea: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoType: code source type. Allow values:
     * CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
         */
        readonly sourceRepoType: string | ros.IResolvable;
        /**
         * @Property isDisableCache: Whether to disable Cache at build time
         */
        readonly isDisableCache: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosScanRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export interface RosScanRuleProps {
    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    readonly repoTagFilterPattern: string | ros.IResolvable;
    /**
     * @Property ruleName: The scan rule name.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property scanScope: The scan scope. Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    readonly scanScope: string | ros.IResolvable;
    /**
     * @Property scanType: The scan type. Valid values:
     * * VUL: Products Cloud Security Scanner.
     * * SBOM: Product Content Analysis.
     */
    readonly scanType: string | ros.IResolvable;
    /**
     * @Property triggerType: Trigger type. Valid values:
     * * AUTO: automatically trigger.
     * * MANUAL: manually trigger.
     */
    readonly triggerType: string | ros.IResolvable;
    /**
     * @Property namespaces: The list of namespaces.
     * * When the scan scope is NAMESPACE, this parameter cannot be empty.
     * * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
     */
    readonly namespaces?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
     * * When the scan scope is REPO, this parameter cannot be empty.
     */
    readonly repoNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::ScanRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScanRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
export declare class RosScanRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::ScanRule";
    /**
     * @Attribute CreateTime: Creation time of the scan rule.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: ACR Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    /**
     * @Attribute RepoNames: The list of repositories.
     */
    readonly attrRepoNames: ros.IResolvable;
    /**
     * @Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    readonly attrRepoTagFilterPattern: ros.IResolvable;
    /**
     * @Attribute RuleName: The scan rule name.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * @Attribute ScanRuleId: The ID of the scan rule.
     */
    readonly attrScanRuleId: ros.IResolvable;
    /**
     * @Attribute ScanScope: The scan scope.
     */
    readonly attrScanScope: ros.IResolvable;
    /**
     * @Attribute ScanType: The scan type.
     */
    readonly attrScanType: ros.IResolvable;
    /**
     * @Attribute TriggerType: Trigger type.
     */
    readonly attrTriggerType: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Change time of the scan rule.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: ACR Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    repoTagFilterPattern: string | ros.IResolvable;
    /**
     * @Property ruleName: The scan rule name.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property scanScope: The scan scope. Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    scanScope: string | ros.IResolvable;
    /**
     * @Property scanType: The scan type. Valid values:
     * * VUL: Products Cloud Security Scanner.
     * * SBOM: Product Content Analysis.
     */
    scanType: string | ros.IResolvable;
    /**
     * @Property triggerType: Trigger type. Valid values:
     * * AUTO: automatically trigger.
     * * MANUAL: manually trigger.
     */
    triggerType: string | ros.IResolvable;
    /**
     * @Property namespaces: The list of namespaces.
     * * When the scan scope is NAMESPACE, this parameter cannot be empty.
     * * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
     */
    namespaces: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
     * * When the scan scope is REPO, this parameter cannot be empty.
     */
    repoNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScanRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosStorageDomainRoutingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export interface RosStorageDomainRoutingRuleProps {
    /**
     * @Property instanceId: ACR Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property routes: Domain name routing entry.
     */
    readonly routes: Array<RosStorageDomainRoutingRule.RoutesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::StorageDomainRoutingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageDomainRoutingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
 */
export declare class RosStorageDomainRoutingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::StorageDomainRoutingRule";
    /**
     * @Attribute CreateTime: The creation time of the Rule.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ModifyTime: The Modify Time of the Rule.
     */
    readonly attrModifyTime: ros.IResolvable;
    /**
     * @Attribute Routes: Domain name routing entry.
     */
    readonly attrRoutes: ros.IResolvable;
    /**
     * @Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: ACR Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property routes: Domain name routing entry.
     */
    routes: Array<RosStorageDomainRoutingRule.RoutesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageDomainRoutingRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosStorageDomainRoutingRule {
    /**
     * @stability external
     */
    interface RoutesProperty {
        /**
         * @Property storageDomain: Storage domain name.
         */
        readonly storageDomain: string | ros.IResolvable;
        /**
         * @Property endpointType: Endpoint Type.
         */
        readonly endpointType: string | ros.IResolvable;
        /**
         * @Property instanceDomain: Instance domain name.
         */
        readonly instanceDomain: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosUserInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export interface RosUserInfoProps {
    /**
     * @Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;
    /**
     * @Property instanceId: The ID of enterprise edition ACR instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CR::UserInfo`, which is used to create the information about a user.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export declare class RosUserInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::UserInfo";
    /**
     * @Attribute LoginName: Login name.
     */
    readonly attrLoginName: ros.IResolvable;
    /**
     * @Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property user: User info. If user exists, will update user info.
     */
    user: RosUserInfo.UserProperty | ros.IResolvable;
    /**
     * @Property instanceId: The ID of enterprise edition ACR instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserInfoProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUserInfo {
    /**
     * @stability external
     */
    interface UserProperty {
        /**
         * @Property password: Password.
         */
        readonly password: string | ros.IResolvable;
    }
}
