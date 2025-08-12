import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export interface RosClusterProps {
    /**
     * @Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC _1_2_60_c",
     * "MSE_ SC _2_4_60_c",
     * "MSE_ SC _4_8_60_c",
     * "MSE_ SC _8_16_60_c",
     * "MSE_ SC _16_32_60_c"
     */
    readonly clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly netType: string | ros.IResolvable;
    /**
     * @Property acceptLanguage:
     */
    readonly acceptLanguage?: string | ros.IResolvable;
    /**
     * @Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterAliasName: cluster alias name
     */
    readonly clusterAliasName?: string | ros.IResolvable;
    /**
     * @Property connectionType: network connect type
     */
    readonly connectionType?: string | ros.IResolvable;
    /**
     * @Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;
    /**
     * @Property mseVersion: Required, the value is as follows:
     *
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly mseVersion?: string | ros.IResolvable;
    /**
     * @Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;
    /**
     * @Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly pubNetworkFlow?: string | ros.IResolvable;
    /**
     * @Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string | ros.IResolvable;
    /**
     * @Property requestPars:
     */
    readonly requestPars?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];
    /**
     * @Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Cluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Cluster";
    /**
     * @Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly attrAclEntryList: ros.IResolvable;
    /**
     * @Attribute AclId: acl id
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AppVersion: app version
     */
    readonly attrAppVersion: ros.IResolvable;
    /**
     * @Attribute ClusterAliasName: cluster alias name
     */
    readonly attrClusterAliasName: ros.IResolvable;
    /**
     * @Attribute ClusterId: cluster id
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterName: cluster name
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * @Attribute ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
Optional parameters:
"MSE_ SC _1_2_60_c",
"MSE_ SC _2_4_60_c",
"MSE_ SC _4_8_60_c",
"MSE_ SC _8_16_60_c",
"MSE_ SC _16_32_60_c"
     */
    readonly attrClusterSpecification: ros.IResolvable;
    /**
     * @Attribute ClusterType: cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly attrClusterVersion: ros.IResolvable;
    /**
     * @Attribute ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
     */
    readonly attrConfigAuthEnabled: ros.IResolvable;
    /**
     * @Attribute ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
     */
    readonly attrConfigSecretEnabled: ros.IResolvable;
    /**
     * @Attribute ConnectionType: network connect type
     */
    readonly attrConnectionType: ros.IResolvable;
    /**
     * @Attribute Cpu: cpu core size
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * @Attribute DiskCapacity: disk capacity, unit: G
     */
    readonly attrDiskCapacity: ros.IResolvable;
    /**
     * @Attribute DiskType: disk type
     */
    readonly attrDiskType: ros.IResolvable;
    /**
     * @Attribute HealthStatus: health status
     */
    readonly attrHealthStatus: ros.IResolvable;
    /**
     * @Attribute InstanceCount: instance count
     */
    readonly attrInstanceCount: ros.IResolvable;
    /**
     * @Attribute InstanceId: instance id
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InternetAddress: internet address
     */
    readonly attrInternetAddress: ros.IResolvable;
    /**
     * @Attribute InternetDomain: internet domain
     */
    readonly attrInternetDomain: ros.IResolvable;
    /**
     * @Attribute InternetPort: internet port
     */
    readonly attrInternetPort: ros.IResolvable;
    /**
     * @Attribute IntranetAddress: intranet address
     */
    readonly attrIntranetAddress: ros.IResolvable;
    /**
     * @Attribute IntranetDomain: intranet domain
     */
    readonly attrIntranetDomain: ros.IResolvable;
    /**
     * @Attribute IntranetPort: intranet port
     */
    readonly attrIntranetPort: ros.IResolvable;
    /**
     * @Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
     */
    readonly attrMcpEnabled: ros.IResolvable;
    /**
     * @Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: ros.IResolvable;
    /**
     * @Attribute MseVersion: Required, the value is as follows:

-'mse_dev': indicates the development version.
-'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly attrMseVersion: ros.IResolvable;
    /**
     * @Attribute NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly attrNetType: ros.IResolvable;
    /**
     * @Attribute PayInfo: pay info
     */
    readonly attrPayInfo: ros.IResolvable;
    /**
     * @Attribute PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly attrPubNetworkFlow: ros.IResolvable;
    /**
     * @Attribute VSwitchId: switcher Id
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: vpc id
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC _1_2_60_c",
     * "MSE_ SC _2_4_60_c",
     * "MSE_ SC _4_8_60_c",
     * "MSE_ SC _8_16_60_c",
     * "MSE_ SC _16_32_60_c"
     */
    clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: cluster type
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: instance count
     */
    instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    netType: string | ros.IResolvable;
    /**
     * @Property acceptLanguage:
     */
    acceptLanguage: string | ros.IResolvable | undefined;
    /**
     * @Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    aclEntryList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clusterAliasName: cluster alias name
     */
    clusterAliasName: string | ros.IResolvable | undefined;
    /**
     * @Property connectionType: network connect type
     */
    connectionType: string | ros.IResolvable | undefined;
    /**
     * @Property diskType: disk type
     */
    diskType: string | ros.IResolvable | undefined;
    /**
     * @Property mseVersion: Required, the value is as follows:
     *
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    mseVersion: string | ros.IResolvable | undefined;
    /**
     * @Property privateSlbSpecification:
     */
    privateSlbSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    pubNetworkFlow: string | ros.IResolvable | undefined;
    /**
     * @Property pubSlbSpecification:
     */
    pubSlbSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property requestPars:
     */
    requestPars: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCluster.TagsProperty[] | undefined;
    /**
     * @Property vpcId: vpc id
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: switcher Id
     */
    vSwitchId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosEngineNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export interface RosEngineNamespaceProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property name: The display name of the namespace.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property desc: The description of the namespace.
     */
    readonly desc?: string | ros.IResolvable;
    /**
     * @Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    readonly identity?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::EngineNamespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EngineNamespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export declare class RosEngineNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::EngineNamespace";
    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property name: The display name of the namespace.
     */
    name: string | ros.IResolvable;
    /**
     * @Property desc: The description of the namespace.
     */
    desc: string | ros.IResolvable | undefined;
    /**
     * @Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    identity: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEngineNamespaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
export interface RosGatewayProps {
    /**
     * @Property replica: Gateway Node Number
     */
    readonly replica: number | ros.IResolvable;
    /**
     * @Property spec: Gateway Node Specifications
     */
    readonly spec: string | ros.IResolvable;
    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    readonly backupVSwitchId?: string | ros.IResolvable;
    /**
     * @Property enterpriseSecurityGroup:
     */
    readonly enterpriseSecurityGroup?: string | ros.IResolvable;
    /**
     * @Property internetSlbSpec:
     */
    readonly internetSlbSpec?: string | ros.IResolvable;
    /**
     * @Property name:
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property slbSpec:
     */
    readonly slbSpec?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
export declare class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway";
    /**
     * @Attribute BackupVSwitchId: VSwitchId For Backup
     */
    readonly attrBackupVSwitchId: ros.IResolvable;
    /**
     * @Attribute GatewayUniqueId: Gateway unique identification
     */
    readonly attrGatewayUniqueId: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Replica: Gateway Node Number
     */
    readonly attrReplica: ros.IResolvable;
    /**
     * @Attribute Spec: Gateway Node Specifications
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property replica: Gateway Node Number
     */
    replica: number | ros.IResolvable;
    /**
     * @Property spec: Gateway Node Specifications
     */
    spec: string | ros.IResolvable;
    /**
     * @Property vpcId: VpcId
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitchId
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    backupVSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property enterpriseSecurityGroup:
     */
    enterpriseSecurityGroup: string | ros.IResolvable | undefined;
    /**
     * @Property internetSlbSpec:
     */
    internetSlbSpec: string | ros.IResolvable | undefined;
    /**
     * @Property name:
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property slbSpec:
     */
    slbSpec: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGateway2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export interface RosGateway2Props {
    /**
     * @Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property acceptLanguage: The language of the response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly acceptLanguage?: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method you specify when you purchase an normal instance.
     * Valid values:
     * PREPAY: subscription
     * POSTPAY: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly clbNetworkType?: string | ros.IResolvable;
    /**
     * @Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
     */
    readonly enableHardwareAcceleration?: boolean | ros.IResolvable;
    /**
     * @Property enableSls: Specifies whether to activate Log Service.
     */
    readonly enableSls?: boolean | ros.IResolvable;
    /**
     * @Property enableXtrace: Whether to activate Tracing Analysis.
     */
    readonly enableXtrace?: boolean | ros.IResolvable;
    /**
     * @Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
     */
    readonly enterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property internetSlb: Public network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.smal)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly internetSlb?: string | ros.IResolvable;
    /**
     * @Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
     * pubnet: public network
     * privatenet: privatenet
     * privatepubnet: public + private network
     */
    readonly managedEntryNetworkType?: string | ros.IResolvable;
    /**
     * @Property mserVersion: The MSE gateway instance type. Valid values:
     * mse_pro: normal instance
     * mse_premium: professional normal instancemse_serverless: serverless instance
     */
    readonly mserVersion?: string | ros.IResolvable;
    /**
     * @Property name: The name of the created gateway.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly nlbNetworkType?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
     */
    readonly replica?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property slbSpec: Private network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.small)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly slbSpec?: string | ros.IResolvable;
    /**
     * @Property spec: The node specifications you specify when you purchase an normal instance. Valid values:
     * MSE_GTW_16_32_200_c(16C32G)
     * MSE_GTW_2_4_200_c(2C4G)
     * MSE_GTW_4_8_200_c(4C8G)
     * MSE_GTW_8_16_200_c(8C16G)
     */
    readonly spec?: string | ros.IResolvable;
    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosGateway2.TagsProperty[];
    /**
     * @Property vSwitchId: The primary VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId2: The secondary VSwitch ID.
     */
    readonly vSwitchId2?: string | ros.IResolvable;
    /**
     * @Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
     */
    readonly xtraceRatio?: number | ros.IResolvable;
    /**
     * @Property zoneInfo: The info details of the available zone.
     */
    readonly zoneInfo?: Array<RosGateway2.ZoneInfoProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Gateway2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export declare class RosGateway2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway2";
    /**
     * @Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    readonly attrGatewayUniqueId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the vpc.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property acceptLanguage: The language of the response. Valid values:
     * zh: Chinese
     * en: English
     */
    acceptLanguage: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method you specify when you purchase an normal instance.
     * Valid values:
     * PREPAY: subscription
     * POSTPAY: pay-as-you-go
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    clbNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
     */
    enableHardwareAcceleration: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSls: Specifies whether to activate Log Service.
     */
    enableSls: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableXtrace: Whether to activate Tracing Analysis.
     */
    enableXtrace: boolean | ros.IResolvable | undefined;
    /**
     * @Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
     */
    enterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property internetSlb: Public network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.smal)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    internetSlb: string | ros.IResolvable | undefined;
    /**
     * @Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
     * pubnet: public network
     * privatenet: privatenet
     * privatepubnet: public + private network
     */
    managedEntryNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property mserVersion: The MSE gateway instance type. Valid values:
     * mse_pro: normal instance
     * mse_premium: professional normal instancemse_serverless: serverless instance
     */
    mserVersion: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the created gateway.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    nlbNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
     */
    replica: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property slbSpec: Private network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.small)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    slbSpec: string | ros.IResolvable | undefined;
    /**
     * @Property spec: The node specifications you specify when you purchase an normal instance. Valid values:
     * MSE_GTW_16_32_200_c(16C32G)
     * MSE_GTW_2_4_200_c(2C4G)
     * MSE_GTW_4_8_200_c(4C8G)
     * MSE_GTW_8_16_200_c(8C16G)
     */
    spec: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    tags: RosGateway2.TagsProperty[] | undefined;
    /**
     * @Property vSwitchId: The primary VSwitch ID.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId2: The secondary VSwitch ID.
     */
    vSwitchId2: string | ros.IResolvable | undefined;
    /**
     * @Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
     */
    xtraceRatio: number | ros.IResolvable | undefined;
    /**
     * @Property zoneInfo: The info details of the available zone.
     */
    zoneInfo: Array<RosGateway2.ZoneInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGateway2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGateway2 {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosGateway2 {
    /**
     * @stability external
     */
    interface ZoneInfoProperty {
        /**
         * @Property zoneId: The id of the zone.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The id of the VSwitch.
         */
        readonly vSwitchId?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosNacosConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
 */
export interface RosNacosConfigProps {
    /**
     * @Property dataId: The data ID.
     */
    readonly dataId: string | ros.IResolvable;
    /**
     * @Property group: The ID of the group.
     */
    readonly group: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property appName: The name of the application.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * @Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    readonly betaIps?: string | ros.IResolvable;
    /**
     * @Property content: The content of the configuration.
     */
    readonly content?: string | ros.IResolvable;
    /**
     * @Property desc: The description of the configuration.
     */
    readonly desc?: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * @Property tags: The tag of the configuration.
     */
    readonly tags?: string;
    /**
     * @Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::NacosConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NacosConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
 */
export declare class RosNacosConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataId: The data ID.
     */
    dataId: string | ros.IResolvable;
    /**
     * @Property group: The ID of the group.
     */
    group: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property appName: The name of the application.
     */
    appName: string | ros.IResolvable | undefined;
    /**
     * @Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    betaIps: string | ros.IResolvable | undefined;
    /**
     * @Property content: The content of the configuration.
     */
    content: string | ros.IResolvable | undefined;
    /**
     * @Property desc: The description of the configuration.
     */
    desc: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    namespaceId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tag of the configuration.
     */
    tags: string | undefined;
    /**
     * @Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNacosConfigProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNacosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export interface RosNacosServiceProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * @Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    readonly ephemeral?: boolean | ros.IResolvable;
    /**
     * @Property groupName: The name of the group.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * @Property protectThreshold: The protection threshold.
     */
    readonly protectThreshold?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::NacosService`, which is used to create a Nacos service.
 * @Note This class does not contain additional functions, so it is recommended to use the `NacosService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export declare class RosNacosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosService";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property serviceName: The name of the service.
     */
    serviceName: string | ros.IResolvable;
    /**
     * @Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    ephemeral: boolean | ros.IResolvable | undefined;
    /**
     * @Property groupName: The name of the group.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    namespaceId: string | ros.IResolvable | undefined;
    /**
     * @Property protectThreshold: The protection threshold.
     */
    protectThreshold: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNacosServiceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosServiceSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export interface RosServiceSourceProps {
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    readonly source: string | ros.IResolvable;
    /**
     * @Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly address?: string | ros.IResolvable;
    /**
     * @Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    readonly groupList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ingressOptions: The Ingress configuration.
     */
    readonly ingressOptions?: RosServiceSource.IngressOptionsProperty | ros.IResolvable;
    /**
     * @Property pathList: An array of service root paths.
     */
    readonly pathList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::ServiceSource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceSource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export declare class RosServiceSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::ServiceSource";
    /**
     * @Attribute Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * @Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    readonly attrGatewayUniqueId: ros.IResolvable;
    /**
     * @Attribute Id: The ID of service source.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The name.
If Type is set to K8S, this parameter specifies the name of the ACK cluster.
If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    name: string | ros.IResolvable;
    /**
     * @Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    source: string | ros.IResolvable;
    /**
     * @Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    address: string | ros.IResolvable | undefined;
    /**
     * @Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    groupList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ingressOptions: The Ingress configuration.
     */
    ingressOptions: RosServiceSource.IngressOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property pathList: An array of service root paths.
     */
    pathList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceSourceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServiceSource {
    /**
     * @stability external
     */
    interface IngressOptionsProperty {
        /**
         * @Property ingressClass: Specifies whether to monitor Ingress classes.
         */
        readonly ingressClass?: string | ros.IResolvable;
        /**
         * @Property enableStatus: Specifies whether to update the Ingress status.
         */
        readonly enableStatus?: string | ros.IResolvable;
        /**
         * @Property watchNamespace: The namespace whose resources you want to monitor.
         */
        readonly watchNamespace?: string | ros.IResolvable;
        /**
         * @Property enableIngress: Specifies whether to enable Ingress.
         */
        readonly enableIngress?: string | ros.IResolvable;
    }
}
