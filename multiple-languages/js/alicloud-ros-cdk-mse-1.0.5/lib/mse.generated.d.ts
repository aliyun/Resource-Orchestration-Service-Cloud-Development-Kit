import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    readonly netType: string | ros.IResolvable;
    /**
     * @Property aclEntryList: acl entry list
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
     * @Property diskCapacity: disk capacity, unit: G
     */
    readonly diskCapacity?: number | ros.IResolvable;
    /**
     * @Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;
    /**
     * @Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;
    /**
     * @Property pubNetworkFlow: pub network flow
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
     * @Attribute AclEntryList: acl entry list
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
     * @Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly attrClusterSpecification: ros.IResolvable;
    /**
     * @Attribute ClusterType: cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly attrClusterVersion: ros.IResolvable;
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
     * @Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: ros.IResolvable;
    /**
     * @Attribute NetType: network type, Enum: privatenet,pubnet
     */
    readonly attrNetType: ros.IResolvable;
    /**
     * @Attribute PayInfo: pay info
     */
    readonly attrPayInfo: ros.IResolvable;
    /**
     * @Attribute PubNetworkFlow: pub network flow
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
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: cluster type
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: instance count
     */
    instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    netType: string | ros.IResolvable;
    /**
     * @Property aclEntryList: acl entry list
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
     * @Property diskCapacity: disk capacity, unit: G
     */
    diskCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property diskType: disk type
     */
    diskType: string | ros.IResolvable | undefined;
    /**
     * @Property privateSlbSpecification:
     */
    privateSlbSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property pubNetworkFlow: pub network flow
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
