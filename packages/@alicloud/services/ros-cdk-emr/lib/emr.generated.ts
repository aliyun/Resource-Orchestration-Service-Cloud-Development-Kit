// Generated from the AliCloud ROS Resource Specification

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
    readonly clickHouseConf?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('config', ros.listValidator(RosCluster_ConfigPropertyValidator))(properties.config));
    errors.collect(ros.propertyValidator('clickHouseConf', ros.hashValidator(ros.validateAny))(properties.clickHouseConf));
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCluster_TagsPropertyValidator))(properties.tags));
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
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
      ClickHouseConf: ros.hashMapper(ros.objectToRosTemplate)(properties.clickHouseConf),
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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SshEnable: ros.booleanToRosTemplate(properties.sshEnable),
      Tags: ros.listMapper(rosClusterTagsPropertyToRosTemplate)(properties.tags),
      UseCustomHiveMetaDB: ros.booleanToRosTemplate(properties.useCustomHiveMetaDb),
      UserDefinedEmrEcsRole: ros.stringToRosTemplate(properties.userDefinedEmrEcsRole),
      UserInfo: ros.listMapper(rosClusterUserInfoPropertyToRosTemplate)(properties.userInfo),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      WhiteListType: ros.stringToRosTemplate(properties.whiteListType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::Cluster`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster";

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
     * @Property clickHouseConf: undefined
     */
    public clickHouseConf: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

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
     * @Property ioOptimized: Indicates wether I\/O optimization is enabled. Default value: true.
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
     * @Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql:\/\/xxxxxx", "dbUserName":"username", "dbPassword":"password"}
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
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCluster.TagsProperty[] | undefined;

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
        this.clickHouseConf = props.clickHouseConf;
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
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupName = props.securityGroupName;
        this.sshEnable = props.sshEnable;
        this.tags = props.tags;
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
            clickHouseConf: this.clickHouseConf,
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
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupName: this.securityGroupName,
            sshEnable: this.sshEnable,
            tags: this.tags,
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
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
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
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
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
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
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
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
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
 * Determine whether the given properties match those of a `RosCluster2Props`
 *
 * @param properties - the TypeScript properties of a `RosCluster2Props`
 *
 * @returns the result of the validation.
 */
function RosCluster2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('applications', ros.requiredValidator)(properties.applications));
    errors.collect(ros.propertyValidator('applications', ros.listValidator(RosCluster2_ApplicationsPropertyValidator))(properties.applications));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.applicationConfigs && (Array.isArray(properties.applicationConfigs) || (typeof properties.applicationConfigs) === 'string')) {
        errors.collect(ros.propertyValidator('applicationConfigs', ros.validateLength)({
            data: properties.applicationConfigs.length,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('applicationConfigs', ros.listValidator(RosCluster2_ApplicationConfigsPropertyValidator))(properties.applicationConfigs));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('nodeGroups', ros.requiredValidator)(properties.nodeGroups));
    if(properties.nodeGroups && (Array.isArray(properties.nodeGroups) || (typeof properties.nodeGroups) === 'string')) {
        errors.collect(ros.propertyValidator('nodeGroups', ros.validateLength)({
            data: properties.nodeGroups.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('nodeGroups', ros.listValidator(RosCluster2_NodeGroupsPropertyValidator))(properties.nodeGroups));
    errors.collect(ros.propertyValidator('releaseVersion', ros.requiredValidator)(properties.releaseVersion));
    errors.collect(ros.propertyValidator('releaseVersion', ros.validateString)(properties.releaseVersion));
    errors.collect(ros.propertyValidator('bootstrapScripts', ros.listValidator(RosCluster2_BootstrapScriptsPropertyValidator))(properties.bootstrapScripts));
    errors.collect(ros.propertyValidator('subscriptionConfig', RosCluster2_SubscriptionConfigPropertyValidator)(properties.subscriptionConfig));
    if(properties.deployMode && (typeof properties.deployMode) !== 'object') {
        errors.collect(ros.propertyValidator('deployMode', ros.validateAllowedValues)({
          data: properties.deployMode,
          allowedValues: ["HA","NORMAL"],
        }));
    }
    errors.collect(ros.propertyValidator('deployMode', ros.validateString)(properties.deployMode));
    if(properties.securityMode && (typeof properties.securityMode) !== 'object') {
        errors.collect(ros.propertyValidator('securityMode', ros.validateAllowedValues)({
          data: properties.securityMode,
          allowedValues: ["KERBEROS","NORMAL"],
        }));
    }
    errors.collect(ros.propertyValidator('securityMode', ros.validateString)(properties.securityMode));
    errors.collect(ros.propertyValidator('nodeAttributes', ros.requiredValidator)(properties.nodeAttributes));
    errors.collect(ros.propertyValidator('nodeAttributes', RosCluster2_NodeAttributesPropertyValidator)(properties.nodeAttributes));
    errors.collect(ros.propertyValidator('clusterName', ros.requiredValidator)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCluster2_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosCluster2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2` resource
 *
 * @param properties - the TypeScript properties of a `RosCluster2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2` resource.
 */
// @ts-ignore TS6133
function rosCluster2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCluster2PropsValidator(properties).assertSuccess();
    }
    return {
      Applications: ros.listMapper(rosCluster2ApplicationsPropertyToRosTemplate)(properties.applications),
      ClusterName: ros.stringToRosTemplate(properties.clusterName),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      NodeAttributes: rosCluster2NodeAttributesPropertyToRosTemplate(properties.nodeAttributes),
      NodeGroups: ros.listMapper(rosCluster2NodeGroupsPropertyToRosTemplate)(properties.nodeGroups),
      ReleaseVersion: ros.stringToRosTemplate(properties.releaseVersion),
      ApplicationConfigs: ros.listMapper(rosCluster2ApplicationConfigsPropertyToRosTemplate)(properties.applicationConfigs),
      BootstrapScripts: ros.listMapper(rosCluster2BootstrapScriptsPropertyToRosTemplate)(properties.bootstrapScripts),
      DeployMode: ros.stringToRosTemplate(properties.deployMode),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SecurityMode: ros.stringToRosTemplate(properties.securityMode),
      SubscriptionConfig: rosCluster2SubscriptionConfigPropertyToRosTemplate(properties.subscriptionConfig),
      Tags: ros.listMapper(rosCluster2TagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::Cluster2`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
export class RosCluster2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::Cluster2";

    /**
     * @Attribute ApplicationLinks: ApplicationLinks of cluster.
     */
    public readonly attrApplicationLinks: ros.IResolvable;

    /**
     * @Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
     */
    public applications: Array<RosCluster2.ApplicationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:\/\/ and https: \/\/.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
     */
    public clusterName: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type.Ranges:
     * DATALAKE: The new version of the data lake.
     * OLAP: Data analysis.
     * DATAFLOW: Real -time data stream.
     * DATASERVING: Data service.
     * HADOOP: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
     */
    public nodeAttributes: RosCluster2.NodeAttributesProperty | ros.IResolvable;

    /**
     * @Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
     */
    public nodeGroups: Array<RosCluster2.NodeGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
     */
    public releaseVersion: string | ros.IResolvable;

    /**
     * @Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
     */
    public applicationConfigs: Array<RosCluster2.ApplicationConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
     */
    public bootstrapScripts: Array<RosCluster2.BootstrapScriptsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deployMode: Application deployment mode in the cluster.Ranges:
     * Normal: non -high available deployment.Cluster 1 master node.
     * HA: High availability deployment.High availability deployment requires at least 3 master nodes.
     */
    public deployMode: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment type. Ranges: 
     * PayAsYouGo: Post-paid, pay-as-you-go.
     * Subscription: Prepaid, yearly and monthly.
     * Default: PayAsYouGo.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityMode: Cluster Kerberos security mode.Ranges:
     * Normal: General mode, does not open the Kerberos mode.
     * Kerberos: Open the Kerberos mode.
     */
    public securityMode: string | ros.IResolvable | undefined;

    /**
     * @Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
     */
    public subscriptionConfig: RosCluster2.SubscriptionConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCluster2.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCluster2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApplicationLinks = this.getAtt('ApplicationLinks');
        this.attrClusterId = this.getAtt('ClusterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.applications = props.applications;
        this.clusterName = props.clusterName;
        this.clusterType = props.clusterType;
        this.nodeAttributes = props.nodeAttributes;
        this.nodeGroups = props.nodeGroups;
        this.releaseVersion = props.releaseVersion;
        this.applicationConfigs = props.applicationConfigs;
        this.bootstrapScripts = props.bootstrapScripts;
        this.deployMode = props.deployMode;
        this.paymentType = props.paymentType;
        this.resourceGroupId = props.resourceGroupId;
        this.securityMode = props.securityMode;
        this.subscriptionConfig = props.subscriptionConfig;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            applications: this.applications,
            clusterName: this.clusterName,
            clusterType: this.clusterType,
            nodeAttributes: this.nodeAttributes,
            nodeGroups: this.nodeGroups,
            releaseVersion: this.releaseVersion,
            applicationConfigs: this.applicationConfigs,
            bootstrapScripts: this.bootstrapScripts,
            deployMode: this.deployMode,
            paymentType: this.paymentType,
            resourceGroupId: this.resourceGroupId,
            securityMode: this.securityMode,
            subscriptionConfig: this.subscriptionConfig,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCluster2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface ApplicationConfigsProperty {
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
/**
 * Determine whether the given properties match those of a `ApplicationConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `ApplicationConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_ApplicationConfigsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configFileName', ros.validateString)(properties.configFileName));
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('configItemKey', ros.validateString)(properties.configItemKey));
    errors.collect(ros.propertyValidator('nodeGroupName', ros.validateString)(properties.nodeGroupName));
    errors.collect(ros.propertyValidator('nodeGroupId', ros.validateString)(properties.nodeGroupId));
    errors.collect(ros.propertyValidator('configScope', ros.validateString)(properties.configScope));
    errors.collect(ros.propertyValidator('configItemValue', ros.validateString)(properties.configItemValue));
    return errors.wrap('supplied properties not correct for "ApplicationConfigsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.ApplicationConfigs` resource
 *
 * @param properties - the TypeScript properties of a `ApplicationConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.ApplicationConfigs` resource.
 */
// @ts-ignore TS6133
function rosCluster2ApplicationConfigsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_ApplicationConfigsPropertyValidator(properties).assertSuccess();
    return {
      ConfigFileName: ros.stringToRosTemplate(properties.configFileName),
      ApplicationName: ros.stringToRosTemplate(properties.applicationName),
      ConfigItemKey: ros.stringToRosTemplate(properties.configItemKey),
      NodeGroupName: ros.stringToRosTemplate(properties.nodeGroupName),
      NodeGroupId: ros.stringToRosTemplate(properties.nodeGroupId),
      ConfigScope: ros.stringToRosTemplate(properties.configScope),
      ConfigItemValue: ros.stringToRosTemplate(properties.configItemValue),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface ApplicationsProperty {
        /**
         * @Property applicationName: Application name
         */
        readonly applicationName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ApplicationsProperty`
 *
 * @param properties - the TypeScript properties of a `ApplicationsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_ApplicationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    return errors.wrap('supplied properties not correct for "ApplicationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.Applications` resource
 *
 * @param properties - the TypeScript properties of a `ApplicationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.Applications` resource.
 */
// @ts-ignore TS6133
function rosCluster2ApplicationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_ApplicationsPropertyValidator(properties).assertSuccess();
    return {
      ApplicationName: ros.stringToRosTemplate(properties.applicationName),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface BootstrapScriptsProperty {
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
/**
 * Determine whether the given properties match those of a `BootstrapScriptsProperty`
 *
 * @param properties - the TypeScript properties of a `BootstrapScriptsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_BootstrapScriptsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scriptPath', ros.requiredValidator)(properties.scriptPath));
    errors.collect(ros.propertyValidator('scriptPath', ros.validateString)(properties.scriptPath));
    errors.collect(ros.propertyValidator('scriptArgs', ros.validateString)(properties.scriptArgs));
    if(properties.executionFailStrategy && (typeof properties.executionFailStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('executionFailStrategy', ros.validateAllowedValues)({
          data: properties.executionFailStrategy,
          allowedValues: ["FAILED_CONTINUE","FAILED_BLOCK"],
        }));
    }
    errors.collect(ros.propertyValidator('executionFailStrategy', ros.validateString)(properties.executionFailStrategy));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('scriptName', ros.requiredValidator)(properties.scriptName));
    errors.collect(ros.propertyValidator('scriptName', ros.validateString)(properties.scriptName));
    if(properties.executionMoment && (typeof properties.executionMoment) !== 'object') {
        errors.collect(ros.propertyValidator('executionMoment', ros.validateAllowedValues)({
          data: properties.executionMoment,
          allowedValues: ["BEFORE_INSTALL","AFTER_STARTED"],
        }));
    }
    errors.collect(ros.propertyValidator('executionMoment', ros.validateString)(properties.executionMoment));
    errors.collect(ros.propertyValidator('nodeSelector', ros.requiredValidator)(properties.nodeSelector));
    errors.collect(ros.propertyValidator('nodeSelector', RosCluster2_NodeSelectorPropertyValidator)(properties.nodeSelector));
    return errors.wrap('supplied properties not correct for "BootstrapScriptsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.BootstrapScripts` resource
 *
 * @param properties - the TypeScript properties of a `BootstrapScriptsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.BootstrapScripts` resource.
 */
// @ts-ignore TS6133
function rosCluster2BootstrapScriptsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_BootstrapScriptsPropertyValidator(properties).assertSuccess();
    return {
      ScriptPath: ros.stringToRosTemplate(properties.scriptPath),
      ScriptArgs: ros.stringToRosTemplate(properties.scriptArgs),
      ExecutionFailStrategy: ros.stringToRosTemplate(properties.executionFailStrategy),
      Priority: ros.numberToRosTemplate(properties.priority),
      ScriptName: ros.stringToRosTemplate(properties.scriptName),
      ExecutionMoment: ros.stringToRosTemplate(properties.executionMoment),
      NodeSelector: rosCluster2NodeSelectorPropertyToRosTemplate(properties.nodeSelector),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface CostOptimizedConfigProperty {
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
/**
 * Determine whether the given properties match those of a `CostOptimizedConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CostOptimizedConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_CostOptimizedConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.requiredValidator)(properties.onDemandBaseCapacity));
    if(properties.onDemandBaseCapacity && (typeof properties.onDemandBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateRange)({
            data: properties.onDemandBaseCapacity,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateNumber)(properties.onDemandBaseCapacity));
    errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.requiredValidator)(properties.onDemandPercentageAboveBaseCapacity));
    if(properties.onDemandPercentageAboveBaseCapacity && (typeof properties.onDemandPercentageAboveBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateRange)({
            data: properties.onDemandPercentageAboveBaseCapacity,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateNumber)(properties.onDemandPercentageAboveBaseCapacity));
    errors.collect(ros.propertyValidator('spotInstancePools', ros.requiredValidator)(properties.spotInstancePools));
    if(properties.spotInstancePools && (typeof properties.spotInstancePools) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstancePools', ros.validateRange)({
            data: properties.spotInstancePools,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('spotInstancePools', ros.validateNumber)(properties.spotInstancePools));
    return errors.wrap('supplied properties not correct for "CostOptimizedConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.CostOptimizedConfig` resource
 *
 * @param properties - the TypeScript properties of a `CostOptimizedConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.CostOptimizedConfig` resource.
 */
// @ts-ignore TS6133
function rosCluster2CostOptimizedConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_CostOptimizedConfigPropertyValidator(properties).assertSuccess();
    return {
      OnDemandBaseCapacity: ros.numberToRosTemplate(properties.onDemandBaseCapacity),
      OnDemandPercentageAboveBaseCapacity: ros.numberToRosTemplate(properties.onDemandPercentageAboveBaseCapacity),
      SpotInstancePools: ros.numberToRosTemplate(properties.spotInstancePools),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface DataDisksProperty {
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
/**
 * Determine whether the given properties match those of a `DataDisksProperty`
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_DataDisksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    return errors.wrap('supplied properties not correct for "DataDisksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.DataDisks` resource
 *
 * @param properties - the TypeScript properties of a `DataDisksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.DataDisks` resource.
 */
// @ts-ignore TS6133
function rosCluster2DataDisksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_DataDisksPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.numberToRosTemplate(properties.size),
      Count: ros.numberToRosTemplate(properties.count),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface NodeAttributesProperty {
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
/**
 * Determine whether the given properties match those of a `NodeAttributesProperty`
 *
 * @param properties - the TypeScript properties of a `NodeAttributesProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_NodeAttributesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('masterRootPassword', ros.validateString)(properties.masterRootPassword));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('ramRole', ros.validateString)(properties.ramRole));
    return errors.wrap('supplied properties not correct for "NodeAttributesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeAttributes` resource
 *
 * @param properties - the TypeScript properties of a `NodeAttributesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeAttributes` resource.
 */
// @ts-ignore TS6133
function rosCluster2NodeAttributesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_NodeAttributesPropertyValidator(properties).assertSuccess();
    return {
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      MasterRootPassword: ros.stringToRosTemplate(properties.masterRootPassword),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      RamRole: ros.stringToRosTemplate(properties.ramRole),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface NodeGroupsProperty {
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
/**
 * Determine whether the given properties match those of a `NodeGroupsProperty`
 *
 * @param properties - the TypeScript properties of a `NodeGroupsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_NodeGroupsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('withPublicIp', ros.validateBoolean)(properties.withPublicIp));
    errors.collect(ros.propertyValidator('spotInstanceRemedy', ros.validateBoolean)(properties.spotInstanceRemedy));
    if(properties.nodeCount && (typeof properties.nodeCount) !== 'object') {
        errors.collect(ros.propertyValidator('nodeCount', ros.validateRange)({
            data: properties.nodeCount,
            min: 1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('nodeCount', ros.validateNumber)(properties.nodeCount));
    errors.collect(ros.propertyValidator('nodeGroupName', ros.validateString)(properties.nodeGroupName));
    errors.collect(ros.propertyValidator('dataDisks', ros.listValidator(RosCluster2_DataDisksPropertyValidator))(properties.dataDisks));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    if(properties.spotBidPrices && (Array.isArray(properties.spotBidPrices) || (typeof properties.spotBidPrices) === 'string')) {
        errors.collect(ros.propertyValidator('spotBidPrices', ros.validateLength)({
            data: properties.spotBidPrices.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('spotBidPrices', ros.listValidator(RosCluster2_SpotBidPricesPropertyValidator))(properties.spotBidPrices));
    if(properties.nodeResizeStrategy && (typeof properties.nodeResizeStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('nodeResizeStrategy', ros.validateAllowedValues)({
          data: properties.nodeResizeStrategy,
          allowedValues: ["COST_OPTIMIZED","PRIORITY"],
        }));
    }
    errors.collect(ros.propertyValidator('nodeResizeStrategy', ros.validateString)(properties.nodeResizeStrategy));
    errors.collect(ros.propertyValidator('systemDisk', RosCluster2_SystemDiskPropertyValidator)(properties.systemDisk));
    errors.collect(ros.propertyValidator('nodeGroupType', ros.requiredValidator)(properties.nodeGroupType));
    errors.collect(ros.propertyValidator('nodeGroupType', ros.validateString)(properties.nodeGroupType));
    errors.collect(ros.propertyValidator('instanceTypes', ros.requiredValidator)(properties.instanceTypes));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateString))(properties.instanceTypes));
    if(properties.additionalSecurityGroupIds && (Array.isArray(properties.additionalSecurityGroupIds) || (typeof properties.additionalSecurityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('additionalSecurityGroupIds', ros.validateLength)({
            data: properties.additionalSecurityGroupIds.length,
            min: 0,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('additionalSecurityGroupIds', ros.listValidator(ros.validateString))(properties.additionalSecurityGroupIds));
    errors.collect(ros.propertyValidator('costOptimizedConfig', RosCluster2_CostOptimizedConfigPropertyValidator)(properties.costOptimizedConfig));
    errors.collect(ros.propertyValidator('gracefulShutdown', ros.validateBoolean)(properties.gracefulShutdown));
    if(properties.deploymentSetStrategy && (typeof properties.deploymentSetStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('deploymentSetStrategy', ros.validateAllowedValues)({
          data: properties.deploymentSetStrategy,
          allowedValues: ["NONE","CLUSTER","NODE_GROUP"],
        }));
    }
    errors.collect(ros.propertyValidator('deploymentSetStrategy', ros.validateString)(properties.deploymentSetStrategy));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "NodeGroupsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeGroups` resource
 *
 * @param properties - the TypeScript properties of a `NodeGroupsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeGroups` resource.
 */
// @ts-ignore TS6133
function rosCluster2NodeGroupsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_NodeGroupsPropertyValidator(properties).assertSuccess();
    return {
      WithPublicIp: ros.booleanToRosTemplate(properties.withPublicIp),
      SpotInstanceRemedy: ros.booleanToRosTemplate(properties.spotInstanceRemedy),
      NodeCount: ros.numberToRosTemplate(properties.nodeCount),
      NodeGroupName: ros.stringToRosTemplate(properties.nodeGroupName),
      DataDisks: ros.listMapper(rosCluster2DataDisksPropertyToRosTemplate)(properties.dataDisks),
      VSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      SpotBidPrices: ros.listMapper(rosCluster2SpotBidPricesPropertyToRosTemplate)(properties.spotBidPrices),
      NodeResizeStrategy: ros.stringToRosTemplate(properties.nodeResizeStrategy),
      SystemDisk: rosCluster2SystemDiskPropertyToRosTemplate(properties.systemDisk),
      NodeGroupType: ros.stringToRosTemplate(properties.nodeGroupType),
      InstanceTypes: ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypes),
      AdditionalSecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.additionalSecurityGroupIds),
      CostOptimizedConfig: rosCluster2CostOptimizedConfigPropertyToRosTemplate(properties.costOptimizedConfig),
      GracefulShutdown: ros.booleanToRosTemplate(properties.gracefulShutdown),
      DeploymentSetStrategy: ros.stringToRosTemplate(properties.deploymentSetStrategy),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface NodeSelectorProperty {
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
/**
 * Determine whether the given properties match those of a `NodeSelectorProperty`
 *
 * @param properties - the TypeScript properties of a `NodeSelectorProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_NodeSelectorPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nodeGroupTypes', ros.listValidator(ros.validateString))(properties.nodeGroupTypes));
    errors.collect(ros.propertyValidator('nodeGroupName', ros.validateString)(properties.nodeGroupName));
    errors.collect(ros.propertyValidator('nodeGroupId', ros.validateString)(properties.nodeGroupId));
    errors.collect(ros.propertyValidator('nodeSelectType', ros.requiredValidator)(properties.nodeSelectType));
    if(properties.nodeSelectType && (typeof properties.nodeSelectType) !== 'object') {
        errors.collect(ros.propertyValidator('nodeSelectType', ros.validateAllowedValues)({
          data: properties.nodeSelectType,
          allowedValues: ["CLUSTER","NODE_GROUP","NODE"],
        }));
    }
    errors.collect(ros.propertyValidator('nodeSelectType', ros.validateString)(properties.nodeSelectType));
    errors.collect(ros.propertyValidator('nodeNames', ros.listValidator(ros.validateString))(properties.nodeNames));
    return errors.wrap('supplied properties not correct for "NodeSelectorProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeSelector` resource
 *
 * @param properties - the TypeScript properties of a `NodeSelectorProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.NodeSelector` resource.
 */
// @ts-ignore TS6133
function rosCluster2NodeSelectorPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_NodeSelectorPropertyValidator(properties).assertSuccess();
    return {
      NodeGroupTypes: ros.listMapper(ros.stringToRosTemplate)(properties.nodeGroupTypes),
      NodeGroupName: ros.stringToRosTemplate(properties.nodeGroupName),
      NodeGroupId: ros.stringToRosTemplate(properties.nodeGroupId),
      NodeSelectType: ros.stringToRosTemplate(properties.nodeSelectType),
      NodeNames: ros.listMapper(ros.stringToRosTemplate)(properties.nodeNames),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface SpotBidPricesProperty {
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
/**
 * Determine whether the given properties match those of a `SpotBidPricesProperty`
 *
 * @param properties - the TypeScript properties of a `SpotBidPricesProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_SpotBidPricesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bidPrice', ros.validateNumber)(properties.bidPrice));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "SpotBidPricesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SpotBidPrices` resource
 *
 * @param properties - the TypeScript properties of a `SpotBidPricesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SpotBidPrices` resource.
 */
// @ts-ignore TS6133
function rosCluster2SpotBidPricesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_SpotBidPricesPropertyValidator(properties).assertSuccess();
    return {
      BidPrice: ros.numberToRosTemplate(properties.bidPrice),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface SubscriptionConfigProperty {
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
/**
 * Determine whether the given properties match those of a `SubscriptionConfigProperty`
 *
 * @param properties - the TypeScript properties of a `SubscriptionConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_SubscriptionConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewDurationUnit && (typeof properties.autoRenewDurationUnit) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDurationUnit', ros.validateAllowedValues)({
          data: properties.autoRenewDurationUnit,
          allowedValues: ["Month"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewDurationUnit', ros.validateString)(properties.autoRenewDurationUnit));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.paymentDurationUnit && (typeof properties.paymentDurationUnit) !== 'object') {
        errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateAllowedValues)({
          data: properties.paymentDurationUnit,
          allowedValues: ["Month"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateString)(properties.paymentDurationUnit));
    if(properties.paymentDuration && (typeof properties.paymentDuration) !== 'object') {
        errors.collect(ros.propertyValidator('paymentDuration', ros.validateAllowedValues)({
          data: properties.paymentDuration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('paymentDuration', ros.validateNumber)(properties.paymentDuration));
    if(properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateAllowedValues)({
          data: properties.autoRenewDuration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    return errors.wrap('supplied properties not correct for "SubscriptionConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SubscriptionConfig` resource
 *
 * @param properties - the TypeScript properties of a `SubscriptionConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SubscriptionConfig` resource.
 */
// @ts-ignore TS6133
function rosCluster2SubscriptionConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_SubscriptionConfigPropertyValidator(properties).assertSuccess();
    return {
      AutoRenewDurationUnit: ros.stringToRosTemplate(properties.autoRenewDurationUnit),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      PaymentDurationUnit: ros.stringToRosTemplate(properties.paymentDurationUnit),
      PaymentDuration: ros.numberToRosTemplate(properties.paymentDuration),
      AutoRenewDuration: ros.numberToRosTemplate(properties.autoRenewDuration),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface SystemDiskProperty {
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
/**
 * Determine whether the given properties match those of a `SystemDiskProperty`
 *
 * @param properties - the TypeScript properties of a `SystemDiskProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_SystemDiskPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    if(properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    return errors.wrap('supplied properties not correct for "SystemDiskProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SystemDisk` resource
 *
 * @param properties - the TypeScript properties of a `SystemDiskProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.SystemDisk` resource.
 */
// @ts-ignore TS6133
function rosCluster2SystemDiskPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_SystemDiskPropertyValidator(properties).assertSuccess();
    return {
      Category: ros.stringToRosTemplate(properties.category),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.numberToRosTemplate(properties.size),
      Count: ros.numberToRosTemplate(properties.count),
    };
}

export namespace RosCluster2 {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster2_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::Cluster2.Tags` resource.
 */
// @ts-ignore TS6133
function rosCluster2TagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster2_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::ClusterServiceConfigs`, which is used to create or modify the configurations of a specified service in a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterServiceConfigs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
 */
export class RosClusterServiceConfigs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::ClusterServiceConfigs";

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
 * Determine whether the given properties match those of a `RosFlowProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectProps`
 *
 * @returns the result of the validation.
 */
function RosFlowProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('flowProjectName', ros.requiredValidator)(properties.flowProjectName));
    errors.collect(ros.propertyValidator('flowProjectName', ros.validateString)(properties.flowProjectName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosFlowProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EMR::FlowProject` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EMR::FlowProject` resource.
 */
// @ts-ignore TS6133
function rosFlowProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      FlowProjectName: ros.stringToRosTemplate(properties.flowProjectName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::FlowProject`, which is used to create a data development project.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
export class RosFlowProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EMR::FlowProject";

    /**
     * @Attribute CreateTime: The time when the project was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the project.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute FlowProjectId: The ID of the project.
     */
    public readonly attrFlowProjectId: ros.IResolvable;

    /**
     * @Attribute FlowProjectName: The name of the project.
     */
    public readonly attrFlowProjectName: ros.IResolvable;

    /**
     * @Attribute GmtModified: The time when the project was modified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the primary account.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the project.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property flowProjectName: The name of the project.
     */
    public flowProjectName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrFlowProjectId = this.getAtt('FlowProjectId');
        this.attrFlowProjectName = this.getAtt('FlowProjectName');
        this.attrGmtModified = this.getAtt('GmtModified');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.flowProjectName = props.flowProjectName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            flowProjectName: this.flowProjectName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
