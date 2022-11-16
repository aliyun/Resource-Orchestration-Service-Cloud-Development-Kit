import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
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
     * @Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::MSE::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property vpcId: vpc id
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: switcher Id
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::MSE::Cluster`.
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
/**
 * Properties for defining a `ALIYUN::MSE::Gateway`
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
 * A ROS template type:  `ALIYUN::MSE::Gateway`
 */
export declare class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::MSE::Gateway`.
     *
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
