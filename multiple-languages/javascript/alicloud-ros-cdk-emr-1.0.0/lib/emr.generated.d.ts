import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EMR::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    readonly chargeType: string;
    /**
     * @Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
     */
    readonly clusterType: string;
    /**
     * @Property emrVer: The version of EMR.
     */
    readonly emrVer: string;
    /**
     * @Property hostGroup:
     */
    readonly hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    readonly name: string;
    /**
     * @Property netType: The type of the network.
     */
    readonly netType: string;
    /**
     * @Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    readonly useLocalMetaDb: boolean | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId: string;
    /**
     * @Property authorizeContent: Not required.
     */
    readonly authorizeContent?: string;
    /**
     * @Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property bootstrapAction:
     */
    readonly bootstrapAction?: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property config:
     */
    readonly config?: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property configurations: Not required.
     */
    readonly configurations?: string;
    /**
     * @Property depositType: The hosting type.
     */
    readonly depositType?: string;
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
    readonly instanceGeneration?: string;
    /**
     * @Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
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
    readonly keyPairName?: string;
    /**
     * @Property logPath: The log path in OSS.
     */
    readonly logPath?: string;
    /**
     * @Property machineType: The type of the machine.
     */
    readonly machineType?: string;
    /**
     * @Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    readonly masterPwd?: string;
    /**
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    readonly metaStoreConf?: string;
    /**
     * @Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    readonly metaStoreType?: string;
    /**
     * @Property optionSoftWareList: The list of optional services.
     */
    readonly optionSoftWareList?: string[];
    /**
     * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    readonly period?: number;
    /**
     * @Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    readonly relatedClusterId?: string;
    /**
     * @Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    readonly securityGroupId?: string;
    /**
     * @Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    readonly securityGroupName?: string;
    /**
     * @Property sshEnable: Indicates whether SSH is enabled.
     */
    readonly sshEnable?: boolean | ros.IResolvable;
    /**
     * @Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly useCustomHiveMetaDb?: boolean | ros.IResolvable;
    /**
     * @Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    readonly userDefinedEmrEcsRole?: string;
    /**
     * @Property userInfo:
     */
    readonly userInfo?: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    readonly vSwitchId?: string;
    /**
     * @Property whiteListType: Not required.
     */
    readonly whiteListType?: string;
}
/**
 * A ROS template type:  `ALIYUN::EMR::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: any;
    /**
     * @Attribute HostGroups: The host group list of the cluster.
     */
    readonly attrHostGroups: any;
    /**
     * @Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    readonly attrMasterNodeInnerIps: any;
    /**
     * @Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    readonly attrMasterNodePubIps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    chargeType: string;
    /**
     * @Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
     */
    clusterType: string;
    /**
     * @Property emrVer: The version of EMR.
     */
    emrVer: string;
    /**
     * @Property hostGroup:
     */
    hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    name: string;
    /**
     * @Property netType: The type of the network.
     */
    netType: string;
    /**
     * @Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    useLocalMetaDb: boolean | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    zoneId: string;
    /**
     * @Property authorizeContent: Not required.
     */
    authorizeContent: string | undefined;
    /**
     * @Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property bootstrapAction:
     */
    bootstrapAction: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property config:
     */
    config: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property configurations: Not required.
     */
    configurations: string | undefined;
    /**
     * @Property depositType: The hosting type.
     */
    depositType: string | undefined;
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
    instanceGeneration: string | undefined;
    /**
     * @Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
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
    keyPairName: string | undefined;
    /**
     * @Property logPath: The log path in OSS.
     */
    logPath: string | undefined;
    /**
     * @Property machineType: The type of the machine.
     */
    machineType: string | undefined;
    /**
     * @Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    masterPwd: string | undefined;
    /**
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    metaStoreConf: string | undefined;
    /**
     * @Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    metaStoreType: string | undefined;
    /**
     * @Property optionSoftWareList: The list of optional services.
     */
    optionSoftWareList: string[] | undefined;
    /**
     * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    period: number | undefined;
    /**
     * @Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    relatedClusterId: string | undefined;
    /**
     * @Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    securityGroupName: string | undefined;
    /**
     * @Property sshEnable: Indicates whether SSH is enabled.
     */
    sshEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    useCustomHiveMetaDb: boolean | ros.IResolvable | undefined;
    /**
     * @Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    userDefinedEmrEcsRole: string | undefined;
    /**
     * @Property userInfo:
     */
    userInfo: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    vSwitchId: string | undefined;
    /**
     * @Property whiteListType: Not required.
     */
    whiteListType: string | undefined;
    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     *
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
        readonly path?: string;
        /**
         * @Property arg: The argument that you pass into the bootstrap action.
         */
        readonly arg?: string;
        /**
         * @Property name: The name of the bootstrap action.
         */
        readonly name?: string;
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
        readonly replace?: string;
        /**
         * @Property configValue: The value of the custom configuration item.
         */
        readonly configValue?: string;
        /**
         * @Property configKey: The key of the custom configuration item.
         */
        readonly configKey?: string;
        /**
         * @Property serviceName: The name (capitalized) of the service that is configured by using the custom configuration
     * item.
         */
        readonly serviceName?: string;
        /**
         * @Property fileName: The name of the file that contains the configuration item.
         */
        readonly fileName?: string;
        /**
         * @Property encrypt: A reserved parameter.
         */
        readonly encrypt?: string;
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
        readonly hostGroupType: string;
        /**
         * @Property comment: A reserved parameter. Not required.
         */
        readonly comment?: string;
        /**
         * @Property diskCount: The data disk number of the instance group.
         */
        readonly diskCount: number;
        /**
         * @Property nodeCount: The number of nodes in the node group.
         */
        readonly nodeCount: number;
        /**
         * @Property sysDiskType: The system disk type of the instance group.
         */
        readonly sysDiskType: string;
        /**
         * @Property clusterId: A reserved parameter. Not required.
         */
        readonly clusterId?: string;
        /**
         * @Property autoRenew: Indicates whether the instance group is auto-renewed.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
         */
        readonly vSwitchId?: string;
        /**
         * @Property hostPassword: The password of the host. Currently, only gateways are supported.
         */
        readonly hostPassword?: string;
        /**
         * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
         */
        readonly period?: number;
        /**
         * @Property hostGroupName: The name of the instance group.
         */
        readonly hostGroupName?: string;
        /**
         * @Property gpuDriver: The GPU driver.
         */
        readonly gpuDriver?: string;
        /**
         * @Property diskType: The data disk type of the instance group.
         */
        readonly diskType: string;
        /**
         * @Property diskCapacity: The data disk capacity of the instance group.
         */
        readonly diskCapacity: number;
        /**
         * @Property hostGroupId: A reserved parameter.
         */
        readonly hostGroupId?: string;
        /**
         * @Property chargeType: The billing method for the instance group.
         */
        readonly chargeType: string;
        /**
         * @Property createType: A reserved parameter. Not required.
         */
        readonly createType?: string;
        /**
         * @Property hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
         */
        readonly hostKeyPairName?: string;
        /**
         * @Property sysDiskCapacity: The system disk capacity of the instance group.
         */
        readonly sysDiskCapacity: number;
        /**
         * @Property instanceType: The instance type of the instance group.
         */
        readonly instanceType: string;
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
        readonly userName?: string;
        /**
         * @Property userId: The ID of the Alibaba Cloud account for Knox.
         */
        readonly userId?: string;
        /**
         * @Property password: The password of the cluster.
         */
        readonly password?: string;
    }
}
