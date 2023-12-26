import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
export interface ClusterProps {

    /**
     * Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property emrVer: The version of EMR.
     */
    readonly emrVer: string | ros.IResolvable;

    /**
     * Property hostGroup:
     */
    readonly hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property netType: The type of the network.
     */
    readonly netType: string | ros.IResolvable;

    /**
     * Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    readonly useLocalMetaDb: boolean | ros.IResolvable;

    /**
     * Property zoneId: The zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property authorizeContent: Not required.
     */
    readonly authorizeContent?: string | ros.IResolvable;

    /**
     * Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property bootstrapAction:
     */
    readonly bootstrapAction?: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clickHouseConf: undefined
     */
    readonly clickHouseConf?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property config:
     */
    readonly config?: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property configurations: Not required.
     */
    readonly configurations?: string | ros.IResolvable;

    /**
     * Property depositType: The hosting type.
     */
    readonly depositType?: string | ros.IResolvable;

    /**
     * Property easEnable: Indicates whether the cluster is a high-security cluster.
     */
    readonly easEnable?: boolean | ros.IResolvable;

    /**
     * Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
     * that two master nodes are required.
     */
    readonly highAvailabilityEnable?: boolean | ros.IResolvable;

    /**
     * Property initCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly initCustomHiveMetaDb?: boolean | ros.IResolvable;

    /**
     * Property instanceGeneration: The generation of the ECS instances.
     */
    readonly instanceGeneration?: string | ros.IResolvable;

    /**
     * Property ioOptimized: Indicates wether I\/O optimization is enabled. Default value: true.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;

    /**
     * Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
     * a bandwidth of 8 MB is set by default.
     */
    readonly isOpenPublicIp?: boolean | ros.IResolvable;

    /**
     * Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property logPath: The log path in OSS.
     */
    readonly logPath?: string | ros.IResolvable;

    /**
     * Property machineType: The type of the machine.
     */
    readonly machineType?: string | ros.IResolvable;

    /**
     * Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    readonly masterPwd?: string | ros.IResolvable;

    /**
     * Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql:\/\/xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    readonly metaStoreConf?: string | ros.IResolvable;

    /**
     * Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    readonly metaStoreType?: string | ros.IResolvable;

    /**
     * Property optionSoftWareList: The list of optional services.
     */
    readonly optionSoftWareList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    readonly relatedClusterId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * Property sshEnable: Indicates whether SSH is enabled.
     */
    readonly sshEnable?: boolean | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];

    /**
     * Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly useCustomHiveMetaDb?: boolean | ros.IResolvable;

    /**
     * Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    readonly userDefinedEmrEcsRole?: string | ros.IResolvable;

    /**
     * Property userInfo:
     */
    readonly userInfo?: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property whiteListType: Not required.
     */
    readonly whiteListType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::Cluster`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
export class Cluster extends ros.Resource {

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute HostGroups: The host group list of the cluster.
     */
    public readonly attrHostGroups: ros.IResolvable;

    /**
     * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    public readonly attrMasterNodeInnerIps: ros.IResolvable;

    /**
     * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    public readonly attrMasterNodePubIps: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            bootstrapAction: props.bootstrapAction,
            resourceGroupId: props.resourceGroupId,
            securityGroupName: props.securityGroupName,
            config: props.config,
            clickHouseConf: props.clickHouseConf,
            autoRenew: props.autoRenew,
            hostGroup: props.hostGroup,
            userInfo: props.userInfo,
            highAvailabilityEnable: props.highAvailabilityEnable,
            name: props.name,
            optionSoftWareList: props.optionSoftWareList,
            masterPwd: props.masterPwd,
            sshEnable: props.sshEnable,
            useCustomHiveMetaDb: props.useCustomHiveMetaDb,
            isOpenPublicIp: props.isOpenPublicIp,
            configurations: props.configurations,
            authorizeContent: props.authorizeContent,
            netType: props.netType,
            userDefinedEmrEcsRole: props.userDefinedEmrEcsRole,
            tags: props.tags,
            useLocalMetaDb: props.useLocalMetaDb,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized === undefined || props.ioOptimized === null ? true : props.ioOptimized,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            machineType: props.machineType,
            depositType: props.depositType,
            metaStoreType: props.metaStoreType,
            period: props.period,
            emrVer: props.emrVer,
            clusterType: props.clusterType,
            easEnable: props.easEnable,
            relatedClusterId: props.relatedClusterId,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            whiteListType: props.whiteListType,
            metaStoreConf: props.metaStoreConf,
            instanceGeneration: props.instanceGeneration,
            logPath: props.logPath,
            initCustomHiveMetaDb: props.initCustomHiveMetaDb,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrHostGroups = rosCluster.attrHostGroups;
        this.attrMasterNodeInnerIps = rosCluster.attrMasterNodeInnerIps;
        this.attrMasterNodePubIps = rosCluster.attrMasterNodePubIps;
    }
}
