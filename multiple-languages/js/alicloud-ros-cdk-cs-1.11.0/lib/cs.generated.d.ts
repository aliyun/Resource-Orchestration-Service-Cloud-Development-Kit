import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosASKCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export interface RosASKClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosASKCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosASKCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    readonly ipStack?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    readonly maintenanceWindow?: RosASKCluster.MaintenanceWindowProperty | ros.IResolvable;
    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    readonly serviceDiscoveryTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosASKCluster.TagsProperty[];
    /**
     * @Property timeZone: The time zone used by the cluster..
     */
    readonly timeZone?: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ASKCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ASKCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
 */
export declare class RosASKCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ASKCluster";
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    addons: Array<RosASKCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    deleteOptions: Array<RosASKCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    encryptionProviderKey: string | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default value: true.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    ipStack: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    maintenanceWindow: RosASKCluster.MaintenanceWindowProperty | ros.IResolvable | undefined;
    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    privateZone: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    serviceDiscoveryTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosASKCluster.TagsProperty[] | undefined;
    /**
     * @Property timeZone: The time zone used by the cluster..
     */
    timeZone: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosASKClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosASKCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosASKCluster {
    /**
     * @stability external
     */
    interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
export declare namespace RosASKCluster {
    /**
     * @stability external
     */
    interface MaintenanceWindowProperty {
        /**
         * @Property recurrence: The RFC5545 Recurrence Rule currently only supports FREQ=WEEKLY and does not support specifying COUNT or UNTIL
         */
        readonly recurrence?: string | ros.IResolvable;
        /**
         * @Property maintenanceTime: Maintenance start time. RFC3339 standard format.
         */
        readonly maintenanceTime?: string | ros.IResolvable;
        /**
         * @Property weeklyPeriod: Maintenance cycle. Multiple values are separated by a half-comma (,). Values: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
         */
        readonly weeklyPeriod?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to open the maintenance window. Value:
     * - true: Opens the maintenance window.
     * - false: The maintenance window is not opened.
     * Default value: false
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property duration: Maintenance time. Value range [1,24] in hours.
     * Default value: 3h
         */
        readonly duration?: string | ros.IResolvable;
    }
}
export declare namespace RosASKCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAnyCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export interface RosAnyClusterProps {
    /**
     * @Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::AnyCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnyCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
export declare class RosAnyCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::AnyCluster";
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterConfig: Cluster config.
     */
    clusterConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnyClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosApplicationDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export interface RosApplicationDeploymentProps {
    /**
     * @Property chartUrl: Helm chart package URL, must be a valid URL.
     */
    readonly chartUrl: string | ros.IResolvable;
    /**
     * @Property clusterId: The cluster id of the deployed application.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property name: Name of the deployed application.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property namespace: Deployment namespace.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property type: Type of the deployed application, currently can only be helm.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property values: Helm deployment parameters, a map that will be converted to YAML text.
     */
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ApplicationDeployment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplicationDeployment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export declare class RosApplicationDeployment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ApplicationDeployment";
    /**
     * @Attribute TaskId: The task ID of the application deployment.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chartUrl: Helm chart package URL, must be a valid URL.
     */
    chartUrl: string | ros.IResolvable;
    /**
     * @Property clusterId: The cluster id of the deployed application.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property name: Name of the deployed application.
     */
    name: string | ros.IResolvable;
    /**
     * @Property namespace: Deployment namespace.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property type: Type of the deployed application, currently can only be helm.
     */
    type: string | ros.IResolvable;
    /**
     * @Property values: Helm deployment parameters, a map that will be converted to YAML text.
     */
    values: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationDeploymentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosClusterAddons`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export interface RosClusterAddonsProps {
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    readonly installedIgnore?: boolean | ros.IResolvable;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterAddons.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterAddons`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterAddons` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export declare class RosClusterAddons extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterAddons";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    readonly attrWaitUntilData: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    addons: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    installedIgnore: boolean | ros.IResolvable | undefined;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    rolePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    validationMode: string | ros.IResolvable | undefined;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    waitUntil: Array<RosClusterAddons.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterAddonsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterAddons {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosClusterAddons {
    /**
     * @stability external
     */
    interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property apiVersion: The API version of the kubernetes resource to query.
         */
        readonly apiVersion?: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosClusterApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export interface RosClusterApplicationProps {
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property yamlContent: The yaml content of application.
     */
    readonly yamlContent: string | ros.IResolvable;
    /**
     * @Property creationMode: Creation modes include:
     * - Normal: create new resources, will report error if already exists.
     * - Apply: similar to kubectl apply, create if not exists, update if exists. During the deletion phase, ROS will delete newly created application, but updated existing application will not be deleted.
     */
    readonly creationMode?: string | ros.IResolvable;
    /**
     * @Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
     */
    readonly defaultNamespace?: string | ros.IResolvable;
    /**
     * @Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
     */
    readonly defaultNamespaceDeletion?: boolean | ros.IResolvable;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;
    /**
     * @Property stage: At what stage to run. Valid values:
     * - All: all stages, including create, update, and delete.
     * - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.
     */
    readonly stage?: string | ros.IResolvable;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterApplication`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export declare class RosClusterApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterApplication";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    readonly attrWaitUntilData: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property yamlContent: The yaml content of application.
     */
    yamlContent: string | ros.IResolvable;
    /**
     * @Property creationMode: Creation modes include:
     * - Normal: create new resources, will report error if already exists.
     * - Apply: similar to kubectl apply, create if not exists, update if exists. During the deletion phase, ROS will delete newly created application, but updated existing application will not be deleted.
     */
    creationMode: string | ros.IResolvable | undefined;
    /**
     * @Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
     */
    defaultNamespace: string | ros.IResolvable | undefined;
    /**
     * @Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
     */
    defaultNamespaceDeletion: boolean | ros.IResolvable | undefined;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    rolePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property stage: At what stage to run. Valid values:
     * - All: all stages, including create, update, and delete.
     * - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.
     */
    stage: string | ros.IResolvable | undefined;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
     */
    validationMode: string | ros.IResolvable | undefined;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    waitUntil: Array<RosClusterApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterApplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterApplication {
    /**
     * @stability external
     */
    interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property apiVersion: The API version of the kubernetes resource to query.
         */
        readonly apiVersion?: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosClusterHelmApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export interface RosClusterHelmApplicationProps {
    /**
     * @Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    readonly chartUrl: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property name: The name for helm release.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property chartValues: Chart custom values.
     */
    readonly chartValues?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
     */
    readonly credential?: RosClusterHelmApplication.CredentialProperty | ros.IResolvable;
    /**
     * @Property ignoreExisting: How to ignore existing helm application:
     * Disabled(default): If a helm application with the same name exists, an error will be reported when creating it.
     * SkipInstallIfExisting: If there is a helm application with the same name, the helm application creation process will be ignored.
     * SkipAllOperationsIfExisting: If there is a helm application with the same name, the helm application creation process will be ignored. If the helm application is not created by this resource, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: string | ros.IResolvable;
    /**
     * @Property namespace: Namespace to use with helm. Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    readonly namespace?: string | ros.IResolvable;
    /**
     * @Property namespaceDeletion: Whether to delete the namespace specified. If Namespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether NamespaceDeletion is true or not, it will not be deleted.
     */
    readonly namespaceDeletion?: boolean | ros.IResolvable;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterHelmApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterHelmApplication`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterHelmApplication` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export declare class RosClusterHelmApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterHelmApplication";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    readonly attrWaitUntilData: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    chartUrl: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property name: The name for helm release.
     */
    name: string | ros.IResolvable;
    /**
     * @Property chartValues: Chart custom values.
     */
    chartValues: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
     */
    credential: RosClusterHelmApplication.CredentialProperty | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: How to ignore existing helm application:
     * Disabled(default): If a helm application with the same name exists, an error will be reported when creating it.
     * SkipInstallIfExisting: If there is a helm application with the same name, the helm application creation process will be ignored.
     * SkipAllOperationsIfExisting: If there is a helm application with the same name, the helm application creation process will be ignored. If the helm application is not created by this resource, it will be ignored during update and delete stage.
     */
    ignoreExisting: string | ros.IResolvable | undefined;
    /**
     * @Property namespace: Namespace to use with helm. Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceDeletion: Whether to delete the namespace specified. If Namespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether NamespaceDeletion is true or not, it will not be deleted.
     */
    namespaceDeletion: boolean | ros.IResolvable | undefined;
    /**
     * @Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    rolePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    validationMode: string | ros.IResolvable | undefined;
    /**
     * @Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    waitUntil: Array<RosClusterHelmApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterHelmApplicationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterHelmApplication {
    /**
     * @stability external
     */
    interface CredentialProperty {
        /**
         * @Property userName: The username of repo.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property password: The password of repo.
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosClusterHelmApplication {
    /**
     * @stability external
     */
    interface WaitUntilProperty {
        /**
         * @Property operator: The operator to compare the value with the result of jsonpath expression.
         */
        readonly operator: string | ros.IResolvable;
        /**
         * @Property apiVersion: The API version of the kubernetes resource to query.
         */
        readonly apiVersion?: string | ros.IResolvable;
        /**
         * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
         */
        readonly firstMatch?: boolean | ros.IResolvable;
        /**
         * @Property valueType: The type of value. Default value is String.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property timeout: The timeout of waiting for the condition to be met. The unit is seconds.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property kind: The kind of kubernetes resources to query.
         */
        readonly kind: string | ros.IResolvable;
        /**
         * @Property value: The value to compare with the result of jsonpath expression.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property stage: At what stage to wait. Valid values:
     * - Create\/Update: the create and update stage.
     * - Delete: the delete stage.
     * The default is Create\/Update.
         */
        readonly stage?: string | ros.IResolvable;
        /**
         * @Property jsonPath: Json path expression to filter the output.
         */
        readonly jsonPath?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of kubernetes containing the resource. Default value is DefaultNamespace
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the kubernetes resource to query.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosClusterNodePool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export interface RosClusterNodePoolProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    readonly scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;
    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    readonly autoScaling?: RosClusterNodePool.AutoScalingProperty | ros.IResolvable;
    /**
     * @Property count: The number of nodes in the node pool.
     */
    readonly count?: number | ros.IResolvable;
    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    readonly kubernetesConfig?: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable;
    /**
     * @Property management: The configurations of the managed node pool.
     */
    readonly management?: RosClusterNodePool.ManagementProperty | ros.IResolvable;
    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    readonly nodePoolInfo?: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable;
    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    readonly teeConfig?: RosClusterNodePool.TeeConfigProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ClusterNodePool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterNodePool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export declare class RosClusterNodePool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterNodePool";
    /**
     * @Attribute NodePoolId: Cluster node pool ID.
     */
    readonly attrNodePoolId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;
    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    autoScaling: RosClusterNodePool.AutoScalingProperty | ros.IResolvable | undefined;
    /**
     * @Property count: The number of nodes in the node pool.
     */
    count: number | ros.IResolvable | undefined;
    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    kubernetesConfig: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property management: The configurations of the managed node pool.
     */
    management: RosClusterNodePool.ManagementProperty | ros.IResolvable | undefined;
    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    nodePoolInfo: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable | undefined;
    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    teeConfig: RosClusterNodePool.TeeConfigProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface AutoScalingProperty {
        /**
         * @Property eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
         */
        readonly eipBandwidth?: number | ros.IResolvable;
        /**
         * @Property type: The instance types that can be used for the auto scaling of the node pool. Valid values:
     * cpu: regular instance.
     * gpu: GPU-accelerated instance.
     * gpushare: shared GPU-accelerated instance.
     * spot: preemptible instance.
     * Default value: cpu.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
     * true: associates an EIP with the node pool.
     * false: does not associate an EIP with the node pool.
     * Default value: false.
         */
        readonly isBondEip?: boolean | ros.IResolvable;
        /**
         * @Property minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly minInstances?: number | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling.
     * false: disables auto scaling.
     * If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly maxInstances?: number | ros.IResolvable;
        /**
         * @Property eipInternetChargeType: The billing method of the EIP. Valid values:
     * PayByBandwidth: pay-by-bandwidth.
     * PayByTraffic: pay-by-data-transfer.
     * Default value: PayByBandwidth.
         */
        readonly eipInternetChargeType?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property categories: The list of data disk types.
         */
        readonly categories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface InstancePatternsProperty {
        /**
         * @Property cpuArchitectures: The CPU architecture.
         */
        readonly cpuArchitectures?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cores: The number of vCPUs.
         */
        readonly cores?: number | ros.IResolvable;
        /**
         * @Property maxCpuCores: The maximum number of vCPUs.
         */
        readonly maxCpuCores?: number | ros.IResolvable;
        /**
         * @Property memory: The memory size of the instance. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property instanceCategories: The instance categories.
         */
        readonly instanceCategories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceFamilyLevel: The instance family level. For example, EnterpriseLevel.
         */
        readonly instanceFamilyLevel?: string | ros.IResolvable;
        /**
         * @Property maxMemorySize: The maximum memory size of the instance. Unit: GiB.
         */
        readonly maxMemorySize?: number | ros.IResolvable;
        /**
         * @Property minCpuCores: The minimum number of vCPUs.
         */
        readonly minCpuCores?: number | ros.IResolvable;
        /**
         * @Property minMemorySize: The minimum memory size of the instance. Unit: GiB.
         */
        readonly minMemorySize?: number | ros.IResolvable;
        /**
         * @Property instanceTypeFamilies: The instance type families.
         */
        readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property excludedInstanceTypes: The excluded instance types.
         */
        readonly excludedInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
     * true: installs the CloudMonitor agent on ECS nodes.
     * false: does not install the CloudMonitor agent on ECS nodes.
     * Default value: false.
         */
        readonly cmsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property userData: The user-defined data.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosClusterNodePool.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
         */
        readonly unschedulable?: boolean | ros.IResolvable;
        /**
         * @Property taints: The taints of the nodes.
         */
        readonly taints?: Array<RosClusterNodePool.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface ManagementProperty {
        /**
         * @Property upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
         */
        readonly upgradeConfig?: RosClusterNodePool.UpgradeConfigProperty | ros.IResolvable;
        /**
         * @Property autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
     * true: enables auto repairing.
     * false: disables auto repairing.
         */
        readonly autoRepair?: boolean | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable managed node pools. Valid values:
     * true: enables managed node pools.
     * false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface NodePoolInfoProperty {
        /**
         * @Property resourceGroupId: The ID of the resource group to which the node pool belongs.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface ScalingGroupProperty {
        /**
         * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
     * true: supplements preemptible instances.
     * false: does not supplement preemptible instances.
         */
        readonly spotInstanceRemedy?: boolean | ros.IResolvable;
        /**
         * @Property socEnabled: Specifies whether to enable MLPS Security Hardening.
         */
        readonly socEnabled?: boolean | ros.IResolvable;
        /**
         * @Property instancePatterns: The ECS instance type patterns of the nodes.
         */
        readonly instancePatterns?: Array<RosClusterNodePool.InstancePatternsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosClusterNodePool.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
     * true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
     * false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
         */
        readonly compensateWithOnDemand?: boolean | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
         */
        readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
     * true: enables auto-renewal.
     * false: disables auto-renewal.
     * Default value: true.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property imageType: The type of the OS image. You must specify this parameter or Platform.
         */
        readonly imageType?: string | ros.IResolvable;
        /**
         * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
         */
        readonly onDemandBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property securityHardeningOs: Indicates whether Alibaba Cloud Linux Security Hardening is enabled. Valid values:true: enables Alibaba Cloud Linux Security Hardening.false: disables Alibaba Cloud Linux Security Hardening.Default value: false.
         */
        readonly securityHardeningOs?: boolean | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
         */
        readonly spotPriceLimit?: Array<RosClusterNodePool.SpotPriceLimitProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosClusterNodePool.TagsProperty[];
        /**
         * @Property spotStrategy: The type of preemptible instance. Valid values:
     * NoSpot: non-preemptible instance.
     * SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
     * SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
         */
        readonly spotStrategy?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
        /**
         * @Property multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
     * PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
     * COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
     * BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
     * Default value: PRIORITY.
         */
        readonly multiAzPolicy?: string | ros.IResolvable;
        /**
         * @Property autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1
         */
        readonly autoRenewPeriod?: number | ros.IResolvable;
        /**
         * @Property scalingPolicy: The scaling mode of the scaling group. Valid values:
     * release: the standard mode. ECS instances are created and released based on the resource usage.
     * recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
     * Default value:release.
         */
        readonly scalingPolicy?: string | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group to which the nodes belong.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
         */
        readonly spotInstancePools?: number | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "6", "12", "24", "36"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3"}
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut:
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
         */
        readonly periodUnit?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface SpotPriceLimitProperty {
        /**
         * @Property priceLimit: The price limit of a preemptible instance.
         */
        readonly priceLimit: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type for preemptible instances.
         */
        readonly instanceType: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TeeConfigProperty {
        /**
         * @Property teeEnable: Specifies whether to enable confidential computing for the cluster.
         */
        readonly teeEnable: boolean | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface UpgradeConfigProperty {
        /**
         * @Property autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
     * true: enables auto upgrading.
     * false: disables auto upgrading.
         */
        readonly autoUpgrade?: boolean | ros.IResolvable;
        /**
         * @Property surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
         */
        readonly surgePercentage?: number | ros.IResolvable;
        /**
         * @Property surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
         */
        readonly surge?: number | ros.IResolvable;
        /**
         * @Property maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
     * Valid values: 1 to 1000.
     * Default value: 1.
         */
        readonly maxUnavailable?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosGrantPermissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export interface RosGrantPermissionsProps {
    /**
     * @Property permissions: The permissions that you want to grant to the RAM user.
     */
    readonly permissions: Array<RosGrantPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property userId: The ID of the RAM user.
     */
    readonly userId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::GrantPermissions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrantPermissions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export declare class RosGrantPermissions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::GrantPermissions";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property permissions: The permissions that you want to grant to the RAM user.
     */
    permissions: Array<RosGrantPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property userId: The ID of the RAM user.
     */
    userId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantPermissionsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGrantPermissions {
    /**
     * @stability external
     */
    interface PermissionsProperty {
        /**
         * @Property roleName: he predefined role name. Valid values:
     * admin: administrator
     * ops: O&M engineer
     * dev: developer
     * restricted: restricted user
     * The custom cluster role.
         */
        readonly roleName: string | ros.IResolvable;
        /**
         * @Property clusterId: The ID of the cluster that you want to manage. When the role_type parameter is set to all-clusters, this parameter is set to an empty string.
         */
        readonly clusterId: string | ros.IResolvable;
        /**
         * @Property roleType: The authorization type. Valid values:
     * cluster: indicates that the permissions are scoped to a cluster.
     * namespace: specifies that the permissions are scoped to a namespace of a cluster.
     * all-clusters: specifies that the permissions are scoped to all clusters.
         */
        readonly roleType: string | ros.IResolvable;
        /**
         * @Property isCustom: Specifies whether to perform a custom authorization. To perform a custom authorization, set RoleName to a custom cluster role.
         */
        readonly isCustom?: boolean | ros.IResolvable;
        /**
         * @Property isRamRole: Specifies whether the permissions are granted to a RAM role.
         */
        readonly isRamRole?: boolean | ros.IResolvable;
        /**
         * @Property namespace: The namespace to which the permissions are scoped. This parameter is required only if you set RoleType to namespace.
         */
        readonly namespace?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosManagedEdgeKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export interface RosManagedEdgeKubernetesClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    readonly ipStack?: string | ros.IResolvable;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    readonly maintenanceWindow?: RosManagedEdgeKubernetesCluster.MaintenanceWindowProperty | ros.IResolvable;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * @Property nodePools: The configurations of Node pools.
     */
    readonly nodePools?: Array<RosManagedEdgeKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property rrsaConfig: The configuration of RRSA.
     */
    readonly rrsaConfig?: RosManagedEdgeKubernetesCluster.RrsaConfigProperty | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedEdgeKubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
 */
export declare class RosManagedEdgeKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedEdgeKubernetesCluster";
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    addons: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    cloudMonitorFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    containerCidr: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    encryptionProviderKey: string | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    ipStack: string | ros.IResolvable | undefined;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    maintenanceWindow: RosManagedEdgeKubernetesCluster.MaintenanceWindowProperty | ros.IResolvable | undefined;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    nodeCidrMask: string | ros.IResolvable | undefined;
    /**
     * @Property nodePools: The configurations of Node pools.
     */
    nodePools: Array<RosManagedEdgeKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    profile: string | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property rrsaConfig: The configuration of RRSA.
     */
    rrsaConfig: RosManagedEdgeKubernetesCluster.RrsaConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosManagedEdgeKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property categories: The list of data disk types.
         */
        readonly categories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface InstancePatternsProperty {
        /**
         * @Property cpuArchitectures: The CPU architecture.
         */
        readonly cpuArchitectures?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cores: The number of vCPUs.
         */
        readonly cores?: number | ros.IResolvable;
        /**
         * @Property maxCpuCores: The maximum number of vCPUs.
         */
        readonly maxCpuCores?: number | ros.IResolvable;
        /**
         * @Property memory: The memory size of the instance. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property instanceCategories: The instance categories.
         */
        readonly instanceCategories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceFamilyLevel: The instance family level. For example, EnterpriseLevel.
         */
        readonly instanceFamilyLevel?: string | ros.IResolvable;
        /**
         * @Property maxMemorySize: The maximum memory size of the instance. Unit: GiB.
         */
        readonly maxMemorySize?: number | ros.IResolvable;
        /**
         * @Property minCpuCores: The minimum number of vCPUs.
         */
        readonly minCpuCores?: number | ros.IResolvable;
        /**
         * @Property minMemorySize: The minimum memory size of the instance. Unit: GiB.
         */
        readonly minMemorySize?: number | ros.IResolvable;
        /**
         * @Property instanceTypeFamilies: The instance type families.
         */
        readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property excludedInstanceTypes: The excluded instance types.
         */
        readonly excludedInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosManagedEdgeKubernetesCluster.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property taints: You can add taints to nodes that are added to the cluster.
         */
        readonly taints?: Array<RosManagedEdgeKubernetesCluster.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface MaintenanceWindowProperty {
        /**
         * @Property recurrence: The RFC5545 Recurrence Rule currently only supports FREQ=WEEKLY and does not support specifying COUNT or UNTIL
         */
        readonly recurrence?: string | ros.IResolvable;
        /**
         * @Property maintenanceTime: Maintenance start time. RFC3339 standard format.
         */
        readonly maintenanceTime?: string | ros.IResolvable;
        /**
         * @Property weeklyPeriod: Maintenance cycle. Multiple values are separated by a half-comma (,). Values: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
         */
        readonly weeklyPeriod?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to open the maintenance window. Value:
     * - true: Opens the maintenance window.
     * - false: The maintenance window is not opened.
     * Default value: false
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property duration: Maintenance time. Value range [1,24] in hours.
     * Default value: 3h
         */
        readonly duration?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface NodePoolInfoProperty {
        /**
         * @Property type: Node pool type. Value range:
     * ess: Node pool.
     * edge: Edge node pool.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource Group ID of a node pool.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface NodePoolsProperty {
        /**
         * @Property nodePoolInfo: The configurations of the node pool.
         */
        readonly nodePoolInfo?: RosManagedEdgeKubernetesCluster.NodePoolInfoProperty | ros.IResolvable;
        /**
         * @Property kubernetesConfig: The configurations of the ACK cluster.
         */
        readonly kubernetesConfig?: RosManagedEdgeKubernetesCluster.KubernetesConfigProperty | ros.IResolvable;
        /**
         * @Property scalingGroup: The configurations of the scaling group used by the node pool.
         */
        readonly scalingGroup: RosManagedEdgeKubernetesCluster.ScalingGroupProperty | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface RrsaConfigProperty {
        /**
         * @Property enabled: Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature.
         */
        readonly enabled: boolean | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface ScalingGroupProperty {
        /**
         * @Property desiredSize: The desired number of nodes in the node pool.
         */
        readonly desiredSize?: number | ros.IResolvable;
        /**
         * @Property socEnabled: Specifies whether to enable MLPS Security Hardening.
         */
        readonly socEnabled?: boolean | ros.IResolvable;
        /**
         * @Property instancePatterns: The ECS instance type patterns of the nodes.
         */
        readonly instancePatterns?: Array<RosManagedEdgeKubernetesCluster.InstancePatternsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosManagedEdgeKubernetesCluster.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property imageType: The type of the OS image. You must specify this parameter or Platform.
         */
        readonly imageType?: string | ros.IResolvable;
        /**
         * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
         */
        readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut:
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityHardeningOs: Indicates whether Alibaba Cloud Linux Security Hardening is enabled. Valid values:true: enables Alibaba Cloud Linux Security Hardening.false: disables Alibaba Cloud Linux Security Hardening.Default value: false.
         */
        readonly securityHardeningOs?: boolean | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosManagedEdgeKubernetesCluster.ScalingGroupTagsProperty[];
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface ScalingGroupTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosManagedKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
 */
export interface RosManagedKubernetesClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * @Property controlPlaneLogComponents: List of target components for which logs need to be collected. Supports apiserver, kcm, scheduler, ccm and controlplane-events.
     */
    readonly controlPlaneLogComponents?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property controlPlaneLogProject: Control plane log project. If this field is not set, a log service project named k8s-log-{ClusterID} will be automatically created.
     */
    readonly controlPlaneLogProject?: string | ros.IResolvable;
    /**
     * @Property controlPlaneLogTtl: Control plane log retention duration (unit: day). Default 30.
     */
    readonly controlPlaneLogTtl?: number | ros.IResolvable;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosManagedKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    readonly ipStack?: string | ros.IResolvable;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    readonly maintenanceWindow?: RosManagedKubernetesCluster.MaintenanceWindowProperty | ros.IResolvable;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    readonly nodeNameMode?: string | ros.IResolvable;
    /**
     * @Property nodePools: The configurations of Node pools.
     */
    readonly nodePools?: Array<RosManagedKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property rrsaConfig: The configuration of RRSA.
     */
    readonly rrsaConfig?: RosManagedKubernetesCluster.RrsaConfigProperty | ros.IResolvable;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    readonly securityHardeningOs?: boolean | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedKubernetesCluster.TagsProperty[];
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ManagedKubernetesCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedKubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
 */
export declare class RosManagedKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedKubernetesCluster";
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    addons: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    cloudMonitorFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
     */
    containerCidr: string | ros.IResolvable | undefined;
    /**
     * @Property controlPlaneLogComponents: List of target components for which logs need to be collected. Supports apiserver, kcm, scheduler, ccm and controlplane-events.
     */
    controlPlaneLogComponents: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property controlPlaneLogProject: Control plane log project. If this field is not set, a log service project named k8s-log-{ClusterID} will be automatically created.
     */
    controlPlaneLogProject: string | ros.IResolvable | undefined;
    /**
     * @Property controlPlaneLogTtl: Control plane log retention duration (unit: day). Default 30.
     */
    controlPlaneLogTtl: number | ros.IResolvable | undefined;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    deleteOptions: Array<RosManagedKubernetesCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    encryptionProviderKey: string | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    formatDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipStack: The IP stack of the cluster. Value: ipv4 (Single stack) or ipv6 (Dual Stack). Default value: ipv4
     */
    ipStack: string | ros.IResolvable | undefined;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    keepInstanceName: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property maintenanceWindow: Cluster maintenance window.
     */
    maintenanceWindow: RosManagedKubernetesCluster.MaintenanceWindowProperty | ros.IResolvable | undefined;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    nodeCidrMask: string | ros.IResolvable | undefined;
    /**
     * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    nodeNameMode: string | ros.IResolvable | undefined;
    /**
     * @Property nodePools: The configurations of Node pools.
     */
    nodePools: Array<RosManagedKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    osType: string | ros.IResolvable | undefined;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    platform: string | ros.IResolvable | undefined;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property rrsaConfig: The configuration of RRSA.
     */
    rrsaConfig: RosManagedKubernetesCluster.RrsaConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    runtime: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityHardeningOs: Alibaba Cloud OS security hardening. Value:
     * true: enables security hardening OS.
     * false: disables security hardening OS.
     * Default value: false.
     */
    securityHardeningOs: boolean | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    socEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosManagedKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    taint: Array<{
        [key: string]: any;
    }> | ros.IResolvable | undefined;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    timeZone: string | ros.IResolvable | undefined;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property categories: The list of data disk types.
         */
        readonly categories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface InstancePatternsProperty {
        /**
         * @Property cpuArchitectures: The CPU architecture.
         */
        readonly cpuArchitectures?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cores: The number of vCPUs.
         */
        readonly cores?: number | ros.IResolvable;
        /**
         * @Property maxCpuCores: The maximum number of vCPUs.
         */
        readonly maxCpuCores?: number | ros.IResolvable;
        /**
         * @Property memory: The memory size of the instance. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property instanceCategories: The instance categories.
         */
        readonly instanceCategories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceFamilyLevel: The instance family level. For example, EnterpriseLevel.
         */
        readonly instanceFamilyLevel?: string | ros.IResolvable;
        /**
         * @Property maxMemorySize: The maximum memory size of the instance. Unit: GiB.
         */
        readonly maxMemorySize?: number | ros.IResolvable;
        /**
         * @Property minCpuCores: The minimum number of vCPUs.
         */
        readonly minCpuCores?: number | ros.IResolvable;
        /**
         * @Property minMemorySize: The minimum memory size of the instance. Unit: GiB.
         */
        readonly minMemorySize?: number | ros.IResolvable;
        /**
         * @Property instanceTypeFamilies: The instance type families.
         */
        readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property excludedInstanceTypes: The excluded instance types.
         */
        readonly excludedInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosManagedKubernetesCluster.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property taints: You can add taints to nodes that are added to the cluster.
         */
        readonly taints?: Array<RosManagedKubernetesCluster.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface MaintenanceWindowProperty {
        /**
         * @Property recurrence: The RFC5545 Recurrence Rule currently only supports FREQ=WEEKLY and does not support specifying COUNT or UNTIL
         */
        readonly recurrence?: string | ros.IResolvable;
        /**
         * @Property maintenanceTime: Maintenance start time. RFC3339 standard format.
         */
        readonly maintenanceTime?: string | ros.IResolvable;
        /**
         * @Property weeklyPeriod: Maintenance cycle. Multiple values are separated by a half-comma (,). Values: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
         */
        readonly weeklyPeriod?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to open the maintenance window. Value:
     * - true: Opens the maintenance window.
     * - false: The maintenance window is not opened.
     * Default value: false
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property duration: Maintenance time. Value range [1,24] in hours.
     * Default value: 3h
         */
        readonly duration?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface NodePoolInfoProperty {
        /**
         * @Property type: Node pool type. Value range:
     * ess: Node pool.
     * edge: Edge node pool.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource Group ID of a node pool.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface NodePoolsProperty {
        /**
         * @Property nodePoolInfo: The configurations of the node pool.
         */
        readonly nodePoolInfo?: RosManagedKubernetesCluster.NodePoolInfoProperty | ros.IResolvable;
        /**
         * @Property kubernetesConfig: The configurations of the ACK cluster.
         */
        readonly kubernetesConfig?: RosManagedKubernetesCluster.KubernetesConfigProperty | ros.IResolvable;
        /**
         * @Property scalingGroup: The configurations of the scaling group used by the node pool.
         */
        readonly scalingGroup: RosManagedKubernetesCluster.ScalingGroupProperty | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface RrsaConfigProperty {
        /**
         * @Property enabled: Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature.
         */
        readonly enabled: boolean | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface ScalingGroupProperty {
        /**
         * @Property desiredSize: The desired number of nodes in the node pool.
         */
        readonly desiredSize?: number | ros.IResolvable;
        /**
         * @Property socEnabled: Specifies whether to enable MLPS Security Hardening.
         */
        readonly socEnabled?: boolean | ros.IResolvable;
        /**
         * @Property instancePatterns: The ECS instance type patterns of the nodes.
         */
        readonly instancePatterns?: Array<RosManagedKubernetesCluster.InstancePatternsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosManagedKubernetesCluster.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property imageType: The type of the OS image. You must specify this parameter or Platform.
         */
        readonly imageType?: string | ros.IResolvable;
        /**
         * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
         */
        readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut:
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityHardeningOs: Indicates whether Alibaba Cloud Linux Security Hardening is enabled. Valid values:true: enables Alibaba Cloud Linux Security Hardening.false: disables Alibaba Cloud Linux Security Hardening.Default value: false.
         */
        readonly securityHardeningOs?: boolean | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property zoneIds: Zone ids of virtual switches belongs to.
         */
        readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:\/\/ or http:\/\/.
         */
        readonly tags?: RosManagedKubernetesCluster.ScalingGroupTagsProperty[];
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface ScalingGroupTagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
