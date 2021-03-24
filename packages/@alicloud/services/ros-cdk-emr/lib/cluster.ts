import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::EMR::Cluster`
 */
export interface ClusterProps {

    /**
     * Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    readonly chargeType: string;

    /**
     * Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
     */
    readonly clusterType: string;

    /**
     * Property emrVer: The version of EMR.
     */
    readonly emrVer: string;

    /**
     * Property hostGroup:
     */
    readonly hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    readonly name: string;

    /**
     * Property netType: The type of the network.
     */
    readonly netType: string;

    /**
     * Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    readonly useLocalMetaDb: boolean | ros.IResolvable;

    /**
     * Property zoneId: The zone ID.
     */
    readonly zoneId: string;

    /**
     * Property authorizeContent: Not required.
     */
    readonly authorizeContent?: string;

    /**
     * Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property bootstrapAction:
     */
    readonly bootstrapAction?: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property config:
     */
    readonly config?: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property configurations: Not required.
     */
    readonly configurations?: string;

    /**
     * Property depositType: The hosting type.
     */
    readonly depositType?: string;

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
    readonly instanceGeneration?: string;

    /**
     * Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
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
    readonly keyPairName?: string;

    /**
     * Property logPath: The log path in OSS.
     */
    readonly logPath?: string;

    /**
     * Property machineType: The type of the machine.
     */
    readonly machineType?: string;

    /**
     * Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    readonly masterPwd?: string;

    /**
     * Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    readonly metaStoreConf?: string;

    /**
     * Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    readonly metaStoreType?: string;

    /**
     * Property optionSoftWareList: The list of optional services.
     */
    readonly optionSoftWareList?: string[];

    /**
     * Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    readonly period?: number;

    /**
     * Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    readonly relatedClusterId?: string;

    /**
     * Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    readonly securityGroupId?: string;

    /**
     * Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    readonly securityGroupName?: string;

    /**
     * Property sshEnable: Indicates whether SSH is enabled.
     */
    readonly sshEnable?: boolean | ros.IResolvable;

    /**
     * Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    readonly useCustomHiveMetaDb?: boolean | ros.IResolvable;

    /**
     * Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    readonly userDefinedEmrEcsRole?: string;

    /**
     * Property userInfo:
     */
    readonly userInfo?: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    readonly vpcId?: string;

    /**
     * Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    readonly vSwitchId?: string;

    /**
     * Property whiteListType: Not required.
     */
    readonly whiteListType?: string;
}

/**
 * A ROS resource type:  `ALIYUN::EMR::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: any;

    /**
     * Attribute HostGroups: The host group list of the cluster.
     */
    public readonly attrHostGroups: any;

    /**
     * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    public readonly attrMasterNodeInnerIps: any;

    /**
     * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    public readonly attrMasterNodePubIps: any;

    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            bootstrapAction: props.bootstrapAction,
            securityGroupName: props.securityGroupName,
            config: props.config,
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
            useLocalMetaDb: props.useLocalMetaDb,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : true,
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
