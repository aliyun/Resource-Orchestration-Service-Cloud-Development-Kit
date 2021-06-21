// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::EMR::Cluster`
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
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
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
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bootstrapAction', ros.listValidator(RosCluster_BootstrapActionPropertyValidator))(properties.bootstrapAction));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('config', ros.listValidator(RosCluster_ConfigPropertyValidator))(properties.config));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('hostGroup', ros.requiredValidator)(properties.hostGroup));
    errors.collect(ros.propertyValidator('hostGroup', ros.listValidator(RosCluster_HostGroupPropertyValidator))(properties.hostGroup));
    errors.collect(ros.propertyValidator('userInfo', ros.listValidator(RosCluster_UserInfoPropertyValidator))(properties.userInfo));
    errors.collect(ros.propertyValidator('highAvailabilityEnable', ros.validateBoolean)(properties.highAvailabilityEnable));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('optionSoftWareList', ros.listValidator(ros.validateString))(properties.optionSoftWareList));
    if(properties.masterPwd && (Array.isArray(properties.masterPwd) || (typeof properties.masterPwd) === 'string')) {
        errors.collect(ros.propertyValidator('masterPwd', ros.validateLength)({
            data: properties.masterPwd.length,
            min: 8,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('masterPwd', ros.validateString)(properties.masterPwd));
    errors.collect(ros.propertyValidator('sshEnable', ros.validateBoolean)(properties.sshEnable));
    errors.collect(ros.propertyValidator('useCustomHiveMetaDb', ros.validateBoolean)(properties.useCustomHiveMetaDb));
    errors.collect(ros.propertyValidator('isOpenPublicIp', ros.validateBoolean)(properties.isOpenPublicIp));
    errors.collect(ros.propertyValidator('configurations', ros.validateString)(properties.configurations));
    errors.collect(ros.propertyValidator('authorizeContent', ros.validateString)(properties.authorizeContent));
    errors.collect(ros.propertyValidator('netType', ros.requiredValidator)(properties.netType));
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    errors.collect(ros.propertyValidator('userDefinedEmrEcsRole', ros.validateString)(properties.userDefinedEmrEcsRole));
    errors.collect(ros.propertyValidator('useLocalMetaDb', ros.requiredValidator)(properties.useLocalMetaDb));
    errors.collect(ros.propertyValidator('useLocalMetaDb', ros.validateBoolean)(properties.useLocalMetaDb));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateBoolean)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('machineType', ros.validateString)(properties.machineType));
    errors.collect(ros.propertyValidator('depositType', ros.validateString)(properties.depositType));
    errors.collect(ros.propertyValidator('metaStoreType', ros.validateString)(properties.metaStoreType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('emrVer', ros.requiredValidator)(properties.emrVer));
    errors.collect(ros.propertyValidator('emrVer', ros.validateString)(properties.emrVer));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('easEnable', ros.validateBoolean)(properties.easEnable));
    errors.collect(ros.propertyValidator('relatedClusterId', ros.validateString)(properties.relatedClusterId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('whiteListType', ros.validateString)(properties.whiteListType));
    errors.collect(ros.propertyValidator('metaStoreConf', ros.validateString)(properties.metaStoreConf));
    errors.collect(ros.propertyValidator('instanceGeneration', ros.validateString)(properties.instanceGeneration));
    errors.collect(ros.propertyValidator('logPath', ros.validateString)(properties.logPath));
    errors.collect(ros.propertyValidator('initCustomHiveMetaDb', ros.validateBoolean)(properties.initCustomHiveMetaDb));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      EmrVer: ros.stringToRosTemplate(properties.emrVer),
      HostGroup: ros.listMapper(rosClusterHostGroupPropertyToRosTemplate)(properties.hostGroup),
      Name: ros.stringToRosTemplate(properties.name),
      NetType: ros.stringToRosTemplate(properties.netType),
      UseLocalMetaDb: ros.booleanToRosTemplate(properties.useLocalMetaDb),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      AuthorizeContent: ros.stringToRosTemplate(properties.authorizeContent),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BootstrapAction: ros.listMapper(rosClusterBootstrapActionPropertyToRosTemplate)(properties.bootstrapAction),
      Config: ros.listMapper(rosClusterConfigPropertyToRosTemplate)(properties.config),
      Configurations: ros.stringToRosTemplate(properties.configurations),
      DepositType: ros.stringToRosTemplate(properties.depositType),
      EasEnable: ros.booleanToRosTemplate(properties.easEnable),
      HighAvailabilityEnable: ros.booleanToRosTemplate(properties.highAvailabilityEnable),
      InitCustomHiveMetaDB: ros.booleanToRosTemplate(properties.initCustomHiveMetaDb),
      InstanceGeneration: ros.stringToRosTemplate(properties.instanceGeneration),
      IoOptimized: ros.booleanToRosTemplate(properties.ioOptimized),
      IsOpenPublicIp: ros.booleanToRosTemplate(properties.isOpenPublicIp),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LogPath: ros.stringToRosTemplate(properties.logPath),
      MachineType: ros.stringToRosTemplate(properties.machineType),
      MasterPwd: ros.stringToRosTemplate(properties.masterPwd),
      MetaStoreConf: ros.stringToRosTemplate(properties.metaStoreConf),
      MetaStoreType: ros.stringToRosTemplate(properties.metaStoreType),
      OptionSoftWareList: ros.listMapper(ros.stringToRosTemplate)(properties.optionSoftWareList),
      Period: ros.numberToRosTemplate(properties.period),
      RelatedClusterId: ros.stringToRosTemplate(properties.relatedClusterId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SshEnable: ros.booleanToRosTemplate(properties.sshEnable),
      UseCustomHiveMetaDB: ros.booleanToRosTemplate(properties.useCustomHiveMetaDb),
      UserDefinedEmrEcsRole: ros.stringToRosTemplate(properties.userDefinedEmrEcsRole),
      UserInfo: ros.listMapper(rosClusterUserInfoPropertyToRosTemplate)(properties.userInfo),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      WhiteListType: ros.stringToRosTemplate(properties.whiteListType),
    };
}

/**
 * A ROS template type:  `ALIYUN::EMR::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute HostGroups: The host group list of the cluster.
     */
    public readonly attrHostGroups: ros.IResolvable;

    /**
     * @Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    public readonly attrMasterNodeInnerIps: ros.IResolvable;

    /**
     * @Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    public readonly attrMasterNodePubIps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
     * subscription.
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property emrVer: The version of EMR.
     */
    public emrVer: string | ros.IResolvable;

    /**
     * @Property hostGroup:
     */
    public hostGroup: Array<RosCluster.HostGroupProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
     * Chinese characters, letters, numbers, hyphens (-), and underscores (_).
     */
    public name: string | ros.IResolvable;

    /**
     * @Property netType: The type of the network.
     */
    public netType: string | ros.IResolvable;

    /**
     * @Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
     */
    public useLocalMetaDb: boolean | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property authorizeContent: Not required.
     */
    public authorizeContent: string | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property bootstrapAction:
     */
    public bootstrapAction: Array<RosCluster.BootstrapActionProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property config:
     */
    public config: Array<RosCluster.ConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property configurations: Not required.
     */
    public configurations: string | ros.IResolvable | undefined;

    /**
     * @Property depositType: The hosting type.
     */
    public depositType: string | ros.IResolvable | undefined;

    /**
     * @Property easEnable: Indicates whether the cluster is a high-security cluster.
     */
    public easEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
     * that two master nodes are required.
     */
    public highAvailabilityEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property initCustomHiveMetaDb: A reserved parameter. Not required.
     */
    public initCustomHiveMetaDb: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceGeneration: The generation of the ECS instances.
     */
    public instanceGeneration: string | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
     */
    public ioOptimized: boolean | ros.IResolvable | undefined;

    /**
     * @Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
     * a bandwidth of 8 MB is set by default.
     */
    public isOpenPublicIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: The name of the key pair.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property logPath: The log path in OSS.
     */
    public logPath: string | ros.IResolvable | undefined;

    /**
     * @Property machineType: The type of the machine.
     */
    public machineType: string | ros.IResolvable | undefined;

    /**
     * @Property masterPwd: The SSH password for the master node. The password must meet the following requirements.
     * Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
     * It must contain three types of characters (uppercase letters, lowercase letters, numbers,
     * and special symbols).
     */
    public masterPwd: string | ros.IResolvable | undefined;

    /**
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
     */
    public metaStoreConf: string | ros.IResolvable | undefined;

    /**
     * @Property metaStoreType: Meta store type. Allow types:
     * local: Local cluster
     * unified: Unified meta data
     * user_rds: User's RDS
     */
    public metaStoreType: string | ros.IResolvable | undefined;

    /**
     * @Property optionSoftWareList: The list of optional services.
     */
    public optionSoftWareList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
     * 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
     */
    public relatedClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and
     * use it. Note: If you use an existing security group, the default security group policy
     * is applied to this security group: Only port 22 is open at the inbound and all ports
     * are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
     * this name is used to create a new security group. After the cluster is created, you
     * can view the ID of the security group on the Cluster Management page. The default
     * security group policy is applied to this security group: Only port 22 is open at the
     * inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
     * or SecurityGroupName.
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property sshEnable: Indicates whether SSH is enabled.
     */
    public sshEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property useCustomHiveMetaDb: A reserved parameter. Not required.
     */
    public useCustomHiveMetaDb: boolean | ros.IResolvable | undefined;

    /**
     * @Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
     */
    public userDefinedEmrEcsRole: string | ros.IResolvable | undefined;

    /**
     * @Property userInfo:
     */
    public userInfo: Array<RosCluster.UserInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property whiteListType: Not required.
     */
    public whiteListType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrHostGroups = this.getAtt('HostGroups');
        this.attrMasterNodeInnerIps = this.getAtt('MasterNodeInnerIps');
        this.attrMasterNodePubIps = this.getAtt('MasterNodePubIps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chargeType = props.chargeType;
        this.clusterType = props.clusterType;
        this.emrVer = props.emrVer;
        this.hostGroup = props.hostGroup;
        this.name = props.name;
        this.netType = props.netType;
        this.useLocalMetaDb = props.useLocalMetaDb;
        this.zoneId = props.zoneId;
        this.authorizeContent = props.authorizeContent;
        this.autoRenew = props.autoRenew;
        this.bootstrapAction = props.bootstrapAction;
        this.config = props.config;
        this.configurations = props.configurations;
        this.depositType = props.depositType;
        this.easEnable = props.easEnable;
        this.highAvailabilityEnable = props.highAvailabilityEnable;
        this.initCustomHiveMetaDb = props.initCustomHiveMetaDb;
        this.instanceGeneration = props.instanceGeneration;
        this.ioOptimized = props.ioOptimized;
        this.isOpenPublicIp = props.isOpenPublicIp;
        this.keyPairName = props.keyPairName;
        this.logPath = props.logPath;
        this.machineType = props.machineType;
        this.masterPwd = props.masterPwd;
        this.metaStoreConf = props.metaStoreConf;
        this.metaStoreType = props.metaStoreType;
        this.optionSoftWareList = props.optionSoftWareList;
        this.period = props.period;
        this.relatedClusterId = props.relatedClusterId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupName = props.securityGroupName;
        this.sshEnable = props.sshEnable;
        this.useCustomHiveMetaDb = props.useCustomHiveMetaDb;
        this.userDefinedEmrEcsRole = props.userDefinedEmrEcsRole;
        this.userInfo = props.userInfo;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.whiteListType = props.whiteListType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chargeType: this.chargeType,
            clusterType: this.clusterType,
            emrVer: this.emrVer,
            hostGroup: this.hostGroup,
            name: this.name,
            netType: this.netType,
            useLocalMetaDb: this.useLocalMetaDb,
            zoneId: this.zoneId,
            authorizeContent: this.authorizeContent,
            autoRenew: this.autoRenew,
            bootstrapAction: this.bootstrapAction,
            config: this.config,
            configurations: this.configurations,
            depositType: this.depositType,
            easEnable: this.easEnable,
            highAvailabilityEnable: this.highAvailabilityEnable,
            initCustomHiveMetaDb: this.initCustomHiveMetaDb,
            instanceGeneration: this.instanceGeneration,
            ioOptimized: this.ioOptimized,
            isOpenPublicIp: this.isOpenPublicIp,
            keyPairName: this.keyPairName,
            logPath: this.logPath,
            machineType: this.machineType,
            masterPwd: this.masterPwd,
            metaStoreConf: this.metaStoreConf,
            metaStoreType: this.metaStoreType,
            optionSoftWareList: this.optionSoftWareList,
            period: this.period,
            relatedClusterId: this.relatedClusterId,
            securityGroupId: this.securityGroupId,
            securityGroupName: this.securityGroupName,
            sshEnable: this.sshEnable,
            useCustomHiveMetaDb: this.useCustomHiveMetaDb,
            userDefinedEmrEcsRole: this.userDefinedEmrEcsRole,
            userInfo: this.userInfo,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            whiteListType: this.whiteListType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface BootstrapActionProperty {
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
/**
 * Determine whether the given properties match those of a `BootstrapActionProperty`
 *
 * @param properties - the TypeScript properties of a `BootstrapActionProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_BootstrapActionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('arg', ros.validateString)(properties.arg));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "BootstrapActionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.BootstrapAction` resource
 *
 * @param properties - the TypeScript properties of a `BootstrapActionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.BootstrapAction` resource.
 */
// @ts-ignore TS6133
function rosClusterBootstrapActionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_BootstrapActionPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      Arg: ros.stringToRosTemplate(properties.arg),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface ConfigProperty {
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
/**
 * Determine whether the given properties match those of a `ConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_ConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replace', ros.validateString)(properties.replace));
    errors.collect(ros.propertyValidator('configValue', ros.validateString)(properties.configValue));
    errors.collect(ros.propertyValidator('configKey', ros.validateString)(properties.configKey));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('fileName', ros.validateString)(properties.fileName));
    errors.collect(ros.propertyValidator('encrypt', ros.validateString)(properties.encrypt));
    return errors.wrap('supplied properties not correct for "ConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.Config` resource
 *
 * @param properties - the TypeScript properties of a `ConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.Config` resource.
 */
// @ts-ignore TS6133
function rosClusterConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_ConfigPropertyValidator(properties).assertSuccess();
    return {
      Replace: ros.stringToRosTemplate(properties.replace),
      ConfigValue: ros.stringToRosTemplate(properties.configValue),
      ConfigKey: ros.stringToRosTemplate(properties.configKey),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      FileName: ros.stringToRosTemplate(properties.fileName),
      Encrypt: ros.stringToRosTemplate(properties.encrypt),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface HostGroupProperty {
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
         * @Property autoRenew: Indicates whether the instance group is auto-renewed.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
         */
        readonly vSwitchId?: string | ros.IResolvable;
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
/**
 * Determine whether the given properties match those of a `HostGroupProperty`
 *
 * @param properties - the TypeScript properties of a `HostGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_HostGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hostGroupType', ros.requiredValidator)(properties.hostGroupType));
    if(properties.hostGroupType && (typeof properties.hostGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('hostGroupType', ros.validateAllowedValues)({
          data: properties.hostGroupType,
          allowedValues: ["MASTER","CORE","TASK"],
        }));
    }
    errors.collect(ros.propertyValidator('hostGroupType', ros.validateString)(properties.hostGroupType));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('diskCount', ros.requiredValidator)(properties.diskCount));
    if(properties.diskCount && (typeof properties.diskCount) !== 'object') {
        errors.collect(ros.propertyValidator('diskCount', ros.validateRange)({
            data: properties.diskCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('diskCount', ros.validateNumber)(properties.diskCount));
    errors.collect(ros.propertyValidator('nodeCount', ros.requiredValidator)(properties.nodeCount));
    errors.collect(ros.propertyValidator('nodeCount', ros.validateNumber)(properties.nodeCount));
    errors.collect(ros.propertyValidator('sysDiskType', ros.requiredValidator)(properties.sysDiskType));
    errors.collect(ros.propertyValidator('sysDiskType', ros.validateString)(properties.sysDiskType));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('hostPassword', ros.validateString)(properties.hostPassword));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('hostGroupName', ros.validateString)(properties.hostGroupName));
    errors.collect(ros.propertyValidator('gpuDriver', ros.validateString)(properties.gpuDriver));
    errors.collect(ros.propertyValidator('diskType', ros.requiredValidator)(properties.diskType));
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('diskCapacity', ros.requiredValidator)(properties.diskCapacity));
    errors.collect(ros.propertyValidator('diskCapacity', ros.validateNumber)(properties.diskCapacity));
    errors.collect(ros.propertyValidator('hostGroupId', ros.validateString)(properties.hostGroupId));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('createType', ros.validateString)(properties.createType));
    errors.collect(ros.propertyValidator('hostKeyPairName', ros.validateString)(properties.hostKeyPairName));
    errors.collect(ros.propertyValidator('sysDiskCapacity', ros.requiredValidator)(properties.sysDiskCapacity));
    errors.collect(ros.propertyValidator('sysDiskCapacity', ros.validateNumber)(properties.sysDiskCapacity));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "HostGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.HostGroup` resource
 *
 * @param properties - the TypeScript properties of a `HostGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.HostGroup` resource.
 */
// @ts-ignore TS6133
function rosClusterHostGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_HostGroupPropertyValidator(properties).assertSuccess();
    return {
      HostGroupType: ros.stringToRosTemplate(properties.hostGroupType),
      Comment: ros.stringToRosTemplate(properties.comment),
      DiskCount: ros.numberToRosTemplate(properties.diskCount),
      NodeCount: ros.numberToRosTemplate(properties.nodeCount),
      SysDiskType: ros.stringToRosTemplate(properties.sysDiskType),
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      HostPassword: ros.stringToRosTemplate(properties.hostPassword),
      Period: ros.numberToRosTemplate(properties.period),
      HostGroupName: ros.stringToRosTemplate(properties.hostGroupName),
      GpuDriver: ros.stringToRosTemplate(properties.gpuDriver),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      DiskCapacity: ros.numberToRosTemplate(properties.diskCapacity),
      HostGroupId: ros.stringToRosTemplate(properties.hostGroupId),
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      CreateType: ros.stringToRosTemplate(properties.createType),
      HostKeyPairName: ros.stringToRosTemplate(properties.hostKeyPairName),
      SysDiskCapacity: ros.numberToRosTemplate(properties.sysDiskCapacity),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface UserInfoProperty {
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
 * Determine whether the given properties match those of a `UserInfoProperty`
 *
 * @param properties - the TypeScript properties of a `UserInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_UserInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('userId', ros.validateString)(properties.userId));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "UserInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.UserInfo` resource
 *
 * @param properties - the TypeScript properties of a `UserInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.UserInfo` resource.
 */
// @ts-ignore TS6133
function rosClusterUserInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_UserInfoPropertyValidator(properties).assertSuccess();
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
      UserId: ros.stringToRosTemplate(properties.userId),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

/**
 * Properties for defining a `ALIYUN::EMR::ClusterServiceConfigs`
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
 * Determine whether the given properties match those of a `RosClusterServiceConfigsProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterServiceConfigsProps`
 *
 * @returns the result of the validation.
 */
function RosClusterServiceConfigsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('serviceConfigs', ros.requiredValidator)(properties.serviceConfigs));
    errors.collect(ros.propertyValidator('serviceConfigs', ros.listValidator(RosClusterServiceConfigs_ServiceConfigsPropertyValidator))(properties.serviceConfigs));
    return errors.wrap('supplied properties not correct for "RosClusterServiceConfigsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::ClusterServiceConfigs` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterServiceConfigsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::ClusterServiceConfigs` resource.
 */
// @ts-ignore TS6133
function rosClusterServiceConfigsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterServiceConfigsPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterId: ros.stringToRosTemplate(properties.clusterId),
      ServiceConfigs: ros.listMapper(rosClusterServiceConfigsServiceConfigsPropertyToRosTemplate)(properties.serviceConfigs),
    };
}

/**
 * A ROS template type:  `ALIYUN::EMR::ClusterServiceConfigs`
 */
export class RosClusterServiceConfigs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::ClusterServiceConfigs";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterId: The ID of the cluster.
     */
    public clusterId: string | ros.IResolvable;

    /**
     * @Property serviceConfigs: Server configs
     */
    public serviceConfigs: Array<RosClusterServiceConfigs.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::EMR::ClusterServiceConfigs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterServiceConfigsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClusterServiceConfigs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterId = props.clusterId;
        this.serviceConfigs = props.serviceConfigs;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterId: this.clusterId,
            serviceConfigs: this.serviceConfigs,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterServiceConfigsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosClusterServiceConfigs {
    /**
     * @stability external
     */
    export interface ServiceConfigsProperty {
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
 * Determine whether the given properties match those of a `ServiceConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `ServiceConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosClusterServiceConfigs_ServiceConfigsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('gatewayClusterIdList', ros.listValidator(ros.validateString))(properties.gatewayClusterIdList));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('customConfigParams', ros.validateString)(properties.customConfigParams));
    errors.collect(ros.propertyValidator('refreshHostConfig', ros.validateBoolean)(properties.refreshHostConfig));
    errors.collect(ros.propertyValidator('hostInstanceId', ros.validateString)(properties.hostInstanceId));
    errors.collect(ros.propertyValidator('configType', ros.validateString)(properties.configType));
    errors.collect(ros.propertyValidator('configParams', ros.requiredValidator)(properties.configParams));
    errors.collect(ros.propertyValidator('configParams', ros.validateString)(properties.configParams));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "ServiceConfigsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::ClusterServiceConfigs.ServiceConfigs` resource
 *
 * @param properties - the TypeScript properties of a `ServiceConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::ClusterServiceConfigs.ServiceConfigs` resource.
 */
// @ts-ignore TS6133
function rosClusterServiceConfigsServiceConfigsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosClusterServiceConfigs_ServiceConfigsPropertyValidator(properties).assertSuccess();
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      GatewayClusterIdList: ros.listMapper(ros.stringToRosTemplate)(properties.gatewayClusterIdList),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      CustomConfigParams: ros.stringToRosTemplate(properties.customConfigParams),
      RefreshHostConfig: ros.booleanToRosTemplate(properties.refreshHostConfig),
      HostInstanceId: ros.stringToRosTemplate(properties.hostInstanceId),
      ConfigType: ros.stringToRosTemplate(properties.configType),
      ConfigParams: ros.stringToRosTemplate(properties.configParams),
      GroupId: ros.stringToRosTemplate(properties.groupId),
    };
}
