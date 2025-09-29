import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
export interface RosClusterProps {
    /**
     * @Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property emrVer: The version of EMR.
     */
    readonly emrVer: string | ros.IResolvable;
    /**
     * @Property hostGroup:
     */
    readonly hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property netType: The type of the network.
     */
    readonly netType: string | ros.IResolvable;
    /**
     * @Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    readonly useLocalMetaDb: boolean | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property authorizeContent: Not required.
     */
    readonly authorizeContent?: string | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property bootstrapAction:
     */
    readonly bootstrapAction?: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clickHouseConf: undefined
     */
    readonly clickHouseConf?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property config:
     */
    readonly config?: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property configurations: Not required.
     */
    readonly configurations?: string | ros.IResolvable;
    /**
     * @Property depositType: The hosting type.
     */
    readonly depositType?: string | ros.IResolvable;
    /**
     * @Property easEnable: Indicates whether the cluster is a high-security cluster.
     */
    readonly easEnable?: boolean | ros.IResolvable;
    /**
     * @Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
     * that two master nodes are required.
     */
    readonly highAvailabilityEnable?: boolean | ros.IResolvable;
    /**
     * @Property initCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly initCustomHiveMetaDb?: boolean | ros.IResolvable;
    /**
     * @Property instanceGeneration: The generation of the ECS instances.
     */
    readonly instanceGeneration?: string | ros.IResolvable;
    /**
     * @Property ioOptimized: Indicates wether I\/O optimization is enabled. Default value: true.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;
    /**
     * @Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
     * a bandwidth of 8 MB is set by default.
     */
    readonly isOpenPublicIp?: boolean | ros.IResolvable;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property logPath: The log path in OSS.
     */
    readonly logPath?: string | ros.IResolvable;
    /**
     * @Property machineType: The type of the machine.
     */
    readonly machineType?: string | ros.IResolvable;
    /**
     * @Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    readonly masterPwd?: string | ros.IResolvable;
    /**
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql:\/\/xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    readonly metaStoreConf?: string | ros.IResolvable;
    /**
     * @Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    readonly metaStoreType?: string | ros.IResolvable;
    /**
     * @Property optionSoftWareList: The list of optional services.
     */
    readonly optionSoftWareList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    readonly relatedClusterId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property sshEnable: Indicates whether SSH is enabled.
     */
    readonly sshEnable?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];
    /**
     * @Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly useCustomHiveMetaDb?: boolean | ros.IResolvable;
    /**
     * @Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    readonly userDefinedEmrEcsRole?: string | ros.IResolvable;
    /**
     * @Property userInfo:
     */
    readonly userInfo?: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property whiteListType: Not required.
     */
    readonly whiteListType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::Cluster`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute HostGroups: The host group list of the cluster.
     */
    readonly attrHostGroups: ros.IResolvable;
    /**
     * @Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    readonly attrMasterNodeInnerIps: ros.IResolvable;
    /**
     * @Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    readonly attrMasterNodePubIps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property emrVer: The version of EMR.
     */
    emrVer: string | ros.IResolvable;
    /**
     * @Property hostGroup:
     */
    hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    name: string | ros.IResolvable;
    /**
     * @Property netType: The type of the network.
     */
    netType: string | ros.IResolvable;
    /**
     * @Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    useLocalMetaDb: boolean | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property authorizeContent: Not required.
     */
    authorizeContent: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property bootstrapAction:
     */
    bootstrapAction: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clickHouseConf: undefined
     */
    clickHouseConf: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property config:
     */
    config: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property configurations: Not required.
     */
    configurations: string | ros.IResolvable | undefined;
    /**
     * @Property depositType: The hosting type.
     */
    depositType: string | ros.IResolvable | undefined;
    /**
     * @Property easEnable: Indicates whether the cluster is a high-security cluster.
     */
    easEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
     * that two master nodes are required.
     */
    highAvailabilityEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property initCustomHiveMetaDb: A reserved parameter. Not required.
     */
    initCustomHiveMetaDb: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceGeneration: The generation of the ECS instances.
     */
    instanceGeneration: string | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: Indicates wether I\/O optimization is enabled. Default value: true.
     */
    ioOptimized: boolean | ros.IResolvable | undefined;
    /**
     * @Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
     * a bandwidth of 8 MB is set by default.
     */
    isOpenPublicIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: The name of the key pair.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property logPath: The log path in OSS.
     */
    logPath: string | ros.IResolvable | undefined;
    /**
     * @Property machineType: The type of the machine.
     */
    machineType: string | ros.IResolvable | undefined;
    /**
     * @Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    masterPwd: string | ros.IResolvable | undefined;
    /**
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql:\/\/xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    metaStoreConf: string | ros.IResolvable | undefined;
    /**
     * @Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    metaStoreType: string | ros.IResolvable | undefined;
    /**
     * @Property optionSoftWareList: The list of optional services.
     */
    optionSoftWareList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    relatedClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property sshEnable: Indicates whether SSH is enabled.
     */
    sshEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCluster.TagsProperty[] | undefined;
    /**
     * @Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    useCustomHiveMetaDb: boolean | ros.IResolvable | undefined;
    /**
     * @Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    userDefinedEmrEcsRole: string | ros.IResolvable | undefined;
    /**
     * @Property userInfo:
     */
    userInfo: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property whiteListType: Not required.
     */
    whiteListType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface BootstrapActionProperty {
        /**
         * @Property path: The path where the bootstrap action script is stored.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property arg: The argument that you pass into the bootstrap action.
         */
        readonly arg?: string | ros.IResolvable;
        /**
         * @Property name: The name of the bootstrap action.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface ConfigProperty {
        /**
         * @Property replace: A reserved parameter.
         */
        readonly replace?: string | ros.IResolvable;
        /**
         * @Property configValue: The value of the custom configuration item.
         */
        readonly configValue?: string | ros.IResolvable;
        /**
         * @Property configKey: The key of the custom configuration item.
         */
        readonly configKey?: string | ros.IResolvable;
        /**
         * @Property serviceName: The name (capitalized) of the service that is configured by using the custom configuration
     * item.
         */
        readonly serviceName?: string | ros.IResolvable;
        /**
         * @Property fileName: The name of the file that contains the configuration item.
         */
        readonly fileName?: string | ros.IResolvable;
        /**
         * @Property encrypt: A reserved parameter.
         */
        readonly encrypt?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface HostGroupProperty {
        /**
         * @Property hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
     * can only create a maximum of one master instance group and core instance group.
         */
        readonly hostGroupType: string | ros.IResolvable;
        /**
         * @Property comment: A reserved parameter. Not required.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property diskCount: The data disk number of the instance group.
         */
        readonly diskCount: number | ros.IResolvable;
        /**
         * @Property nodeCount: The number of nodes in the node group.
         */
        readonly nodeCount: number | ros.IResolvable;
        /**
         * @Property sysDiskType: The system disk type of the instance group.
         */
        readonly sysDiskType: string | ros.IResolvable;
        /**
         * @Property clusterId: A reserved parameter. Not required.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property autoRenew: Indicates whether the instance group is auto-renewed.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property hostPassword: The password of the host. Currently, only gateways are supported.
         */
        readonly hostPassword?: string | ros.IResolvable;
        /**
         * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property hostGroupName: The name of the instance group.
         */
        readonly hostGroupName?: string | ros.IResolvable;
        /**
         * @Property gpuDriver: The GPU driver.
         */
        readonly gpuDriver?: string | ros.IResolvable;
        /**
         * @Property diskType: The data disk type of the instance group. Valid values: CLOUD, CLOUD_EFFICIENCY, CLOUD_SSD, CLOUD_ESSD etc.
         */
        readonly diskType: string | ros.IResolvable;
        /**
         * @Property diskCapacity: The data disk capacity of the instance group.
         */
        readonly diskCapacity: number | ros.IResolvable;
        /**
         * @Property hostGroupId: A reserved parameter.
         */
        readonly hostGroupId?: string | ros.IResolvable;
        /**
         * @Property chargeType: The billing method for the instance group.
         */
        readonly chargeType: string | ros.IResolvable;
        /**
         * @Property createType: A reserved parameter. Not required.
         */
        readonly createType?: string | ros.IResolvable;
        /**
         * @Property hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
         */
        readonly hostKeyPairName?: string | ros.IResolvable;
        /**
         * @Property sysDiskCapacity: The system disk capacity of the instance group.
         */
        readonly sysDiskCapacity: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the instance group.
         */
        readonly instanceType: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
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
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface UserInfoProperty {
        /**
         * @Property userName: The username for Knox.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property userId: The ID of the Alibaba Cloud account for Knox.
         */
        readonly userId?: string | ros.IResolvable;
        /**
         * @Property password: The password of the cluster.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCluster2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
export interface RosCluster2Props {
    /**
     * @Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
     */
    readonly applications: Array<RosCluster2.ApplicationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:\/\/ and https: \/\/.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type.Ranges:
     * DATALAKE: The new version of the data lake.
     * OLAP: Data analysis.
     * DATAFLOW: Real -time data stream.
     * DATASERVING: Data service.
     * HADOOP: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
     */
    readonly nodeAttributes: RosCluster2.NodeAttributesProperty | ros.IResolvable;
    /**
     * @Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
     */
    readonly nodeGroups: Array<RosCluster2.NodeGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
     */
    readonly releaseVersion: string | ros.IResolvable;
    /**
     * @Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
     */
    readonly applicationConfigs?: Array<RosCluster2.ApplicationConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
     */
    readonly bootstrapScripts?: Array<RosCluster2.BootstrapScriptsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deployMode: Application deployment mode in the cluster.Ranges:
     * Normal: non -high available deployment.Cluster 1 master node.
     * HA: High availability deployment.High availability deployment requires at least 3 master nodes.
     */
    readonly deployMode?: string | ros.IResolvable;
    /**
     * @Property paymentType: Payment type. Ranges:
     * PayAsYouGo: Post-paid, pay-as-you-go.
     * Subscription: Prepaid, yearly and monthly.
     * Default: PayAsYouGo.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityMode: Cluster Kerberos security mode.Ranges:
     * Normal: General mode, does not open the Kerberos mode.
     * Kerberos: Open the Kerberos mode.
     */
    readonly securityMode?: string | ros.IResolvable;
    /**
     * @Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
     */
    readonly subscriptionConfig?: RosCluster2.SubscriptionConfigProperty | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster2.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::Cluster2`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
export declare class RosCluster2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster2";
    /**
     * @Attribute ApplicationLinks: ApplicationLinks of cluster.
     */
    readonly attrApplicationLinks: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
     */
    applications: Array<RosCluster2.ApplicationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:\/\/ and https: \/\/.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
     */
    clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type.Ranges:
     * DATALAKE: The new version of the data lake.
     * OLAP: Data analysis.
     * DATAFLOW: Real -time data stream.
     * DATASERVING: Data service.
     * HADOOP: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
     */
    nodeAttributes: RosCluster2.NodeAttributesProperty | ros.IResolvable;
    /**
     * @Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
     */
    nodeGroups: Array<RosCluster2.NodeGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
     */
    releaseVersion: string | ros.IResolvable;
    /**
     * @Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
     */
    applicationConfigs: Array<RosCluster2.ApplicationConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
     */
    bootstrapScripts: Array<RosCluster2.BootstrapScriptsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deployMode: Application deployment mode in the cluster.Ranges:
     * Normal: non -high available deployment.Cluster 1 master node.
     * HA: High availability deployment.High availability deployment requires at least 3 master nodes.
     */
    deployMode: string | ros.IResolvable | undefined;
    /**
     * @Property paymentType: Payment type. Ranges:
     * PayAsYouGo: Post-paid, pay-as-you-go.
     * Subscription: Prepaid, yearly and monthly.
     * Default: PayAsYouGo.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityMode: Cluster Kerberos security mode.Ranges:
     * Normal: General mode, does not open the Kerberos mode.
     * Kerberos: Open the Kerberos mode.
     */
    securityMode: string | ros.IResolvable | undefined;
    /**
     * @Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
     */
    subscriptionConfig: RosCluster2.SubscriptionConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCluster2.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCluster2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface ApplicationConfigsProperty {
        /**
         * @Property configFileName: Configuration file name.
         */
        readonly configFileName?: string | ros.IResolvable;
        /**
         * @Property applicationName: Application name
         */
        readonly applicationName: string | ros.IResolvable;
        /**
         * @Property configItemKey: Configuration key.
         */
        readonly configItemKey?: string | ros.IResolvable;
        /**
         * @Property nodeGroupName: Node group name.
     * This parameter takes effect when the ConfigScope
     * value is NODE_GROUP and the parameter NodeGroupId is empty.
         */
        readonly nodeGroupName?: string | ros.IResolvable;
        /**
         * @Property nodeGroupId: Node group ID. This parameter takes effect when ConfigScope takes the value NODE_GROUP.
     * The NodeGroupId parameter takes precedence over the NodeGroupName.
         */
        readonly nodeGroupId?: string | ros.IResolvable;
        /**
         * @Property configScope: Configuration scope. Ranges:
     * CLUSTER: Cluster level.
     * NODE_GROUP: Node group level.
     * Default: CLUSTER.
         */
        readonly configScope?: string | ros.IResolvable;
        /**
         * @Property configItemValue: Configuration value.
         */
        readonly configItemValue?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface ApplicationsProperty {
        /**
         * @Property applicationName: Application name
         */
        readonly applicationName: string | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface BootstrapScriptsProperty {
        /**
         * @Property scriptPath: The OSS path where the script is located. Required. Start with oss:\/\/.
         */
        readonly scriptPath: string | ros.IResolvable;
        /**
         * @Property scriptArgs: Script execution parameters. Optional parameter.
         */
        readonly scriptArgs?: string | ros.IResolvable;
        /**
         * @Property executionFailStrategy: Execute failure strategy. Allowed values:FAILED_CONTINUE: Does not block cluster creation or cluster expansion after failure.FAILED_BLOCK: Blocks cluster creation or cluster expansion after failure.
         */
        readonly executionFailStrategy?: string | ros.IResolvable;
        /**
         * @Property priority: Script execution priority. Value range: 1~100.
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property scriptName: script name. Required.
     * The length is 1~64 characters.
     * It must start with a big or small letter or Chinese.
     * It cannot start with http:\/\/ and https:\/\/.
     * It can contain Chinese, English, numbers, underscores (_), or dashes (-)
         */
        readonly scriptName: string | ros.IResolvable;
        /**
         * @Property executionMoment: When the script is executed. Allowed values:
     * BEFORE_INSTALL: Before the app is installed.
     * AFTER_STARTED: After the app starts.
         */
        readonly executionMoment?: string | ros.IResolvable;
        /**
         * @Property nodeSelector: Node selector.
         */
        readonly nodeSelector: RosCluster2.NodeSelectorProperty | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface CostOptimizedConfigProperty {
        /**
         * @Property onDemandBaseCapacity: The minimum number of instances by quantity.
     * The minimum number of instance counts required by the node group,
     * the value range: 0~1000. When the number of metered instances is
     * less than this value, the metered instance will be created first.
         */
        readonly onDemandBaseCapacity: number | ros.IResolvable;
        /**
         * @Property onDemandPercentageAboveBaseCapacity: After the node group satisfies the OnDemandBaseCapacity requirement
     * of the minimum on-demand instance, the proportion of the
     * on-demand instances in the excess instances, ranging from 0 to 100.
         */
        readonly onDemandPercentageAboveBaseCapacity: number | ros.IResolvable;
        /**
         * @Property spotInstancePools: Specify the number of available instance types,
     * and the scaling group will create preemptible instances
     * in a balanced manner according to the multiple types with
     * the lowest cost. Value range: 0~10.
         */
        readonly spotInstancePools: number | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property category: Category of system disk.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD.Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     * Default is PL1.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property count: The number of system disks per node, the default value is 1.
         */
        readonly count?: number | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface NodeAttributesProperty {
        /**
         * @Property keyPairName: ECS ssh login key.
         */
        readonly keyPairName?: string | ros.IResolvable;
        /**
         * @Property vpcId: Vpc id
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property zoneId: Zone id
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property masterRootPassword: MASTER node root password.
         */
        readonly masterRootPassword?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID. EMR only supports common security groups, not enterprise security groups.
         */
        readonly securityGroupId: string | ros.IResolvable;
        /**
         * @Property ramRole: The role of the ECS access resource binding. Default value: AliyunECSInstanceForEMRRole.
         */
        readonly ramRole?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface NodeGroupsProperty {
        /**
         * @Property withPublicIp: Whether to open the public IP. Default is false.
         */
        readonly withPublicIp?: boolean | ros.IResolvable;
        /**
         * @Property spotInstanceRemedy: After it is enabled, when it receives a system message that the preemptible
     * instance will be recycled, the scaling group will try to create a new
     * instance to replace the preemptible instance that will be recycled. Ranges:
     * true: Enable fill-in preemptive instances.
     * false: Do not enable fill-up preemptive instances.
     * Default: false.
         */
        readonly spotInstanceRemedy?: boolean | ros.IResolvable;
        /**
         * @Property nodeCount: number of nodes. Value range: 1~1000.
         */
        readonly nodeCount?: number | ros.IResolvable;
        /**
         * @Property nodeGroupName: Node group name. The maximum length is 128 characters.
     * Node group names are required to be unique within the cluster.
         */
        readonly nodeGroupName?: string | ros.IResolvable;
        /**
         * @Property dataDisks: data disk. The current data disk supports only one disk type.
         */
        readonly dataDisks?: Array<RosCluster2.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property vSwitchIds: List of virtual machine switch IDs.
     * The value range of the number of array elements N: 1~20.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property spotBidPrices: Preemptible Spot Instance bid price.
     * The parameter SpotStrategy takes effect when the value is SpotWithPriceLimit.
     * The value range of the number of array elements N: 0~100.
         */
        readonly spotBidPrices?: Array<RosCluster2.SpotBidPricesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nodeResizeStrategy: Node expansion strategy. Ranges:
     * COST_OPTIMIZED: Cost optimization strategy.
     * PRIORITY: Priority policy.
     * Default: PRIORITY.
         */
        readonly nodeResizeStrategy?: string | ros.IResolvable;
        /**
         * @Property systemDisk: Disk config.
         */
        readonly systemDisk?: RosCluster2.SystemDiskProperty | ros.IResolvable;
        /**
         * @Property nodeGroupType: Node group type. Ranges:
     * MASTER: Master node group type.
     * CORE: Core node group type.
     * TASK: Compute order node group type.
         */
        readonly nodeGroupType: string | ros.IResolvable;
        /**
         * @Property instanceTypes: A list of node instance types. The value range of the number of array elements N: 1~100.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property additionalSecurityGroupIds: Additional security groups. Additional security groups set
     * individually for node groups in addition to the security
     * groups set by the cluster.
     * The value range of the number of array elements N: 0~2.
         */
        readonly additionalSecurityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property costOptimizedConfig: Cost-optimized mode configuration.
         */
        readonly costOptimizedConfig?: RosCluster2.CostOptimizedConfigProperty | ros.IResolvable;
        /**
         * @Property gracefulShutdown: Whether the components deployed on the node group enable graceful offline. Ranges:
     * true: Enable graceful logout.
     * false: Graceful logout is not enabled.
     * Default: false.
         */
        readonly gracefulShutdown?: boolean | ros.IResolvable;
        /**
         * @Property deploymentSetStrategy: Deployment set policy. Ranges:
     * NONE: Does not apply to deployment sets.
     * CLUSTER: Use cluster-level deployment sets.
     * NODE_GROUP: Use node group level deployment sets.
     * Default: NONE.
         */
        readonly deploymentSetStrategy?: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface NodeSelectorProperty {
        /**
         * @Property nodeGroupTypes: Node group type. It takes effect when NodeSelectType is NodeGroup
     * and the parameter NodeGroupId is empty.
     * The number of array elements, N, ranges from 0 to 10.
         */
        readonly nodeGroupTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nodeGroupName: Node group name. This parameter takes effect when
     * NodeSelectType is NodeGroup and the parameter NodeGroupId is empty.
         */
        readonly nodeGroupName?: string | ros.IResolvable;
        /**
         * @Property nodeGroupId: Node group ID. This parameter takes effect when NodeSelectType is NodeGroup.
         */
        readonly nodeGroupId?: string | ros.IResolvable;
        /**
         * @Property nodeSelectType: Node selection type.  Allowed values:
     * CLUSTER: Cluster.
     * NODE_GROUP: Node group.
     * NODE: Node.
         */
        readonly nodeSelectType: string | ros.IResolvable;
        /**
         * @Property nodeNames: List of node names. When the NodeSelectType value is Node,
     * this parameter takes effect.
         */
        readonly nodeNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface SpotBidPricesProperty {
        /**
         * @Property bidPrice: The maximum hourly bid for the instance. A maximum of 3 decimal
     * places are supported. This parameter takes effect when
     * the parameter SpotStrategy=SpotWithPriceLimit.
         */
        readonly bidPrice?: number | ros.IResolvable;
        /**
         * @Property instanceType: ECS instance type.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface SubscriptionConfigProperty {
        /**
         * @Property autoRenewDurationUnit: Automatic renewal time unit, Month
         */
        readonly autoRenewDurationUnit?: string | ros.IResolvable;
        /**
         * @Property autoRenew: Automatic renewal. Ranges:
     * true: Enable startup renewal.
     * false: Automatic renewal is not enabled.
     * Default: false.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property paymentDurationUnit: Payment time unit, Month
         */
        readonly paymentDurationUnit?: string | ros.IResolvable;
        /**
         * @Property paymentDuration: Payment time. When the value of PaymentDurationUnit is Month,
     * the values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
         */
        readonly paymentDuration?: number | ros.IResolvable;
        /**
         * @Property autoRenewDuration: Auto-renewal duration. It takes effect when AutoRenew is true.
     * When the AutoRenewDurationUnit value is Month, the values are:
     * 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
         */
        readonly autoRenewDuration?: number | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface SystemDiskProperty {
        /**
         * @Property category: Category of system disk.
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD.Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
     * Default is PL1.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
         */
        readonly size: number | ros.IResolvable;
        /**
         * @Property count: The number of system disks per node, the default value is 1.
         */
        readonly count?: number | ros.IResolvable;
    }
}
export declare namespace RosCluster2 {
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
 * Properties for defining a `RosClusterServiceConfigs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
export interface RosClusterServiceConfigsProps {
    /**
     * @Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property serviceConfigs: Server configs
     */
    readonly serviceConfigs: Array<RosClusterServiceConfigs.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::ClusterServiceConfigs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterServiceConfigs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
export declare class RosClusterServiceConfigs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::ClusterServiceConfigs";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property serviceConfigs: Server configs
     */
    serviceConfigs: Array<RosClusterServiceConfigs.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterServiceConfigsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterServiceConfigs {
    /**
     * @stability external
     */
    interface ServiceConfigsProperty {
        /**
         * @Property comment: The comment for the configuration change.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property gatewayClusterIdList:
         */
        readonly gatewayClusterIdList?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property serviceName: The name of the service.
         */
        readonly serviceName: string | ros.IResolvable;
        /**
         * @Property customConfigParams: The modification of custom configuration parameters.
         */
        readonly customConfigParams?: string | ros.IResolvable;
        /**
         * @Property refreshHostConfig: Specifies whether to configure the job immediately after the modification.
         */
        readonly refreshHostConfig?: boolean | ros.IResolvable;
        /**
         * @Property hostInstanceId: The instance ID of the host. This is typically the ID of an ECS instance.
         */
        readonly hostInstanceId?: string | ros.IResolvable;
        /**
         * @Property configType: The type of the configuration parameters.
         */
        readonly configType?: string | ros.IResolvable;
        /**
         * @Property configParams: The specific change of the configuration. It is a JSON string.
         */
        readonly configParams: string | ros.IResolvable;
        /**
         * @Property groupId: The ID of the host group.
         */
        readonly groupId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosFlowProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
export interface RosFlowProjectProps {
    /**
     * @Property description: The description of the project.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property flowProjectName: The name of the project.
     */
    readonly flowProjectName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::FlowProject`, which is used to create a data development project.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
export declare class RosFlowProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::FlowProject";
    /**
     * @Attribute CreateTime: The time when the project was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the project.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute FlowProjectId: The ID of the project.
     */
    readonly attrFlowProjectId: ros.IResolvable;
    /**
     * @Attribute FlowProjectName: The name of the project.
     */
    readonly attrFlowProjectName: ros.IResolvable;
    /**
     * @Attribute GmtModified: The time when the project was modified.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the primary account.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: The description of the project.
     */
    description: string | ros.IResolvable;
    /**
     * @Property flowProjectName: The name of the project.
     */
    flowProjectName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosStarRocksInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
export interface RosStarRocksInstanceProps {
    /**
     * @Property adminPassword: Password of admin user.
     */
    readonly adminPassword: string | ros.IResolvable;
    /**
     * @Property clusterZoneId: Primary ZoneId of StarRocks instance.
     */
    readonly clusterZoneId: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the StarRocks instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property packageType: The package type of the instance:
     * - **trial: Starter Edition
     * - **official: Standard
     */
    readonly packageType: string | ros.IResolvable;
    /**
     * @Property payType: The pay type of the StarRocks instance:
     * - **prePaid
     * - **postPaid
     *
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property runMode: The run mode of the instance:
     * - **shared_nothing: Storage and calculation.
     * - **shared_data: Storage and calculation separation.
     * - **lakehouse: Data lake analysis.
     */
    readonly runMode: string | ros.IResolvable;
    /**
     * @Property version: The version of the StarRocks instance.
     */
    readonly version: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID of the StarRocks instance.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to enable automatic renewal. This is only meaningful when payType is set to PrePaid. Disabled by default.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backendNodeGroups: List of BE or CN compute group information.
     */
    readonly backendNodeGroups?: Array<RosStarRocksInstance.BackendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property duration: Duration of purchase. It is only meaningful when PayType is set to PrePaid.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property encrypted: Whether encrypted.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property frontendNodeGroups: List of FE Node Group Information.
     */
    readonly frontendNodeGroups?: Array<RosStarRocksInstance.FrontendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property observerNodeGroups: list of Observer calculates group information.
     */
    readonly observerNodeGroups?: Array<RosStarRocksInstance.ObserverNodeGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property orderId: Order ID.
     */
    readonly orderId?: number | ros.IResolvable;
    /**
     * @Property ossAccessingRoleName: Role name used for password-free access to OSS.
     */
    readonly ossAccessingRoleName?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: The duration unit for purchasing:
     * - Month
     * - Year
     * This is only meaningful when PayType is set to PrePaid.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property promotionOptionNo: Promotion ID.
     */
    readonly promotionOptionNo?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property resourceType: Resource type.
     */
    readonly resourceType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of StarRocks.
     */
    readonly tags?: RosStarRocksInstance.TagsProperty[];
    /**
     * @Property vswitches: The VSwitches info of the StarRocks instance.
     */
    readonly vswitches?: Array<RosStarRocksInstance.VswitchesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::StarRocksInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StarRocksInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-starrocksinstance
 */
export declare class RosStarRocksInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::StarRocksInstance";
    /**
     * @Attribute AclId: Access control ID.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute Architecture: Architecture of StarRocks instance.
     */
    readonly attrArchitecture: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the StarRocks instance.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
     */
    readonly attrEnableAutoMinorVersionUpgrade: ros.IResolvable;
    /**
     * @Attribute EnableSsl: Enable SSL.
     */
    readonly attrEnableSsl: ros.IResolvable;
    /**
     * @Attribute EnabledAuditLoader: Whether enable audit loader.
     */
    readonly attrEnabledAuditLoader: ros.IResolvable;
    /**
     * @Attribute Encrypted: Whether encrypted.
     */
    readonly attrEncrypted: ros.IResolvable;
    /**
     * @Attribute ExpireTime: StarRocks Instance expire time.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the StarRocks instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the StarRocks instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute IsolateLeader: Whether leader FE is isolated.
     */
    readonly attrIsolateLeader: ros.IResolvable;
    /**
     * @Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    readonly attrKmsKeyId: ros.IResolvable;
    /**
     * @Attribute MaintainablePeriod: StarRocks Instance maintainable period.
     */
    readonly attrMaintainablePeriod: ros.IResolvable;
    /**
     * @Attribute MinorVersion: StarRocks Instance minor version.
     */
    readonly attrMinorVersion: ros.IResolvable;
    /**
     * @Attribute MonitorType: Monitor Type.
     */
    readonly attrMonitorType: ros.IResolvable;
    /**
     * @Attribute OssLocation: OSS Location.
     */
    readonly attrOssLocation: ros.IResolvable;
    /**
     * @Attribute PackageType: The package type of the StarRocks instance.
     */
    readonly attrPackageType: ros.IResolvable;
    /**
     * @Attribute PayType: The pay type of the StarRocks instance.
     */
    readonly attrPayType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute RunMode: The run mode of the StarRocks instance.
     */
    readonly attrRunMode: ros.IResolvable;
    /**
     * @Attribute RunningTime: StarRocks Instance running time.
     */
    readonly attrRunningTime: ros.IResolvable;
    /**
     * @Attribute SecurityGroupManaged: Whether security group is managed.
     */
    readonly attrSecurityGroupManaged: ros.IResolvable;
    /**
     * @Attribute SgId: Security Group ID of StarRocks instance.
     */
    readonly attrSgId: ros.IResolvable;
    /**
     * @Attribute Tags: Tag list of the StarRocks instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Version: The version of the StarRocks instance.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID of the StarRocks instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute Vswitches: The VSwitches info of the StarRocks instance.
     */
    readonly attrVswitches: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property adminPassword: Password of admin user.
     */
    adminPassword: string | ros.IResolvable;
    /**
     * @Property clusterZoneId: Primary ZoneId of StarRocks instance.
     */
    clusterZoneId: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the StarRocks instance.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property packageType: The package type of the instance:
     * - **trial: Starter Edition
     * - **official: Standard
     */
    packageType: string | ros.IResolvable;
    /**
     * @Property payType: The pay type of the StarRocks instance:
     * - **prePaid
     * - **postPaid
     *
     */
    payType: string | ros.IResolvable;
    /**
     * @Property runMode: The run mode of the instance:
     * - **shared_nothing: Storage and calculation.
     * - **shared_data: Storage and calculation separation.
     * - **lakehouse: Data lake analysis.
     */
    runMode: string | ros.IResolvable;
    /**
     * @Property version: The version of the StarRocks instance.
     */
    version: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC ID of the StarRocks instance.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to enable automatic renewal. This is only meaningful when payType is set to PrePaid. Disabled by default.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backendNodeGroups: List of BE or CN compute group information.
     */
    backendNodeGroups: Array<RosStarRocksInstance.BackendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property duration: Duration of purchase. It is only meaningful when PayType is set to PrePaid.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether encrypted.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property frontendNodeGroups: List of FE Node Group Information.
     */
    frontendNodeGroups: Array<RosStarRocksInstance.FrontendNodeGroupsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property observerNodeGroups: list of Observer calculates group information.
     */
    observerNodeGroups: Array<RosStarRocksInstance.ObserverNodeGroupsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property orderId: Order ID.
     */
    orderId: number | ros.IResolvable | undefined;
    /**
     * @Property ossAccessingRoleName: Role name used for password-free access to OSS.
     */
    ossAccessingRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The duration unit for purchasing:
     * - Month
     * - Year
     * This is only meaningful when PayType is set to PrePaid.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property promotionOptionNo: Promotion ID.
     */
    promotionOptionNo: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceType: Resource type.
     */
    resourceType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of StarRocks.
     */
    tags: RosStarRocksInstance.TagsProperty[] | undefined;
    /**
     * @Property vswitches: The VSwitches info of the StarRocks instance.
     */
    vswitches: Array<RosStarRocksInstance.VswitchesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStarRocksInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosStarRocksInstance {
    /**
     * @stability external
     */
    interface BackendNodeGroupsProperty {
        /**
         * @Property cu: Number of CUs. CU (Compute Unit) is the basic measurement unit of the service, where 1 CU = 1 CPU core + 4 GiB memory.
         */
        readonly cu?: number | ros.IResolvable;
        /**
         * @Property zoneId: Zone ID.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property diskNumber: The number of disks.
         */
        readonly diskNumber?: number | ros.IResolvable;
        /**
         * @Property specType: Compute group specification types include the following:
     * - **standard
     * - **localSSD
     * - **bigData
     * - **ramEnhanced
     * - **networkEnhanced.
         */
        readonly specType?: string | ros.IResolvable;
        /**
         * @Property storagePerformanceLevel: Performance levels of cloud disks include the following values:
     * - **pl0: Maximum random read\/write IOPS per disk is 10,000.
     * - **pl1: Maximum random read\/write IOPS per disk is 50,000.
     * - **pl2: Maximum random read\/write IOPS per disk is 100,000.
     * - **pl3: Maximum random read\/write IOPS per disk is 1,000,000.
         */
        readonly storagePerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property residentNodeNumber: Resident node number of node group.
         */
        readonly residentNodeNumber?: number | ros.IResolvable;
        /**
         * @Property storageSize: Storage size, measured in GiB.
         */
        readonly storageSize?: number | ros.IResolvable;
        /**
         * @Property localStorageInstanceType: Local SSD instance specifications.
         */
        readonly localStorageInstanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosStarRocksInstance {
    /**
     * @stability external
     */
    interface FrontendNodeGroupsProperty {
        /**
         * @Property cu: Number of CUs. CU (Compute Unit) is the basic measurement unit of the service, where 1 CU = 1 CPU core + 4 GiB memory.
         */
        readonly cu?: number | ros.IResolvable;
        /**
         * @Property zoneId: Zone ID.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property diskNumber: The number of disks.
         */
        readonly diskNumber?: number | ros.IResolvable;
        /**
         * @Property specType: Compute group specification types include the following:
     * - **standard
     * - **ramEnhanced.
         */
        readonly specType?: string | ros.IResolvable;
        /**
         * @Property storagePerformanceLevel: Performance levels of cloud disks include the following values:
     * - **pl0: Maximum random read\/write IOPS per disk is 10,000.
     * - **pl1: Maximum random read\/write IOPS per disk is 50,000.
     * - **pl2: Maximum random read\/write IOPS per disk is 100,000.
     * - **pl3: Maximum random read\/write IOPS per disk is 1,000,000.
         */
        readonly storagePerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property residentNodeNumber: Resident node number of node group.
         */
        readonly residentNodeNumber?: number | ros.IResolvable;
        /**
         * @Property storageSize: Storage size, measured in GiB.
         */
        readonly storageSize?: number | ros.IResolvable;
        /**
         * @Property localStorageInstanceType: Local SSD instance specifications.
         */
        readonly localStorageInstanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosStarRocksInstance {
    /**
     * @stability external
     */
    interface ObserverNodeGroupsProperty {
        /**
         * @Property cu: Number of CUs. CU (Compute Unit) is the basic measurement unit of the service, where 1 CU = 1 CPU core + 4 GiB memory.
         */
        readonly cu?: number | ros.IResolvable;
        /**
         * @Property zoneId: Zone ID.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property diskNumber: Number of disks.
         */
        readonly diskNumber?: number | ros.IResolvable;
        /**
         * @Property specType: Compute group specification types include the following:
     * - **standard.
         */
        readonly specType?: string | ros.IResolvable;
        /**
         * @Property storagePerformanceLevel: Performance levels of cloud disks include the following values:
     * - **pl0: Maximum random read\/write IOPS per disk is 10,000.
     * - **pl1: Maximum random read\/write IOPS per disk is 50,000.
     * - **pl2: Maximum random read\/write IOPS per disk is 100,000.
     * - **pl3: Maximum random read\/write IOPS per disk is 1,000,000.
         */
        readonly storagePerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property residentNodeNumber: Resident node number of node group.
         */
        readonly residentNodeNumber?: number | ros.IResolvable;
        /**
         * @Property storageSize: Storage size, measured in GiB.
         */
        readonly storageSize?: number | ros.IResolvable;
        /**
         * @Property localStorageInstanceType: Local SSD instance specifications.
         */
        readonly localStorageInstanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosStarRocksInstance {
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
export declare namespace RosStarRocksInstance {
    /**
     * @stability external
     */
    interface VswitchesProperty {
        /**
         * @Property zoneId: Zone ID of VSwitch.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: ID of VSwitch.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
