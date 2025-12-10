import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export interface RosClusterProps {
    /**
     * @Property clusterSpecification: Engine specification.
     *
     * [Professional Edition]
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_4_8_60_c`: 4 cores 8GB
     * - `MSE_SC_8_16_60_c`: 8 cores 16GB
     * - `MSE_SC_16_32_60_c`: 16 cores 32GB
     *
     * [Development Edition]
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     *
     * [Serverless Edition]
     * - Ignore this parameter or fill with `MSE_SC_SERVERLESS`.
     */
    readonly clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: Cluster version.
     *
     * [Professional Edition]
     * - `NACOS_2_0_0`: Nacos 2.x.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     *
     * [Development Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     *
     * [Serverless Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     */
    readonly clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: Number of instance nodes. Range: 1~15.
     *
     * [Professional Edition]
     * - Must be >=3 and odd number.
     *
     * [Development Edition]
     * - Only 1 allowed.
     *
     * [Serverless Edition]
     * - Ignore this parameter.
     */
    readonly instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: Network type. Valid values:
     * - `privatenet`: Private network.
     * - `pubnet`: Public network.
     */
    readonly netType: string | ros.IResolvable;
    /**
     * @Property aclEntryList: List of ACL entries.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
     * Ignored for Serverless Edition.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property clusterAliasName: cluster alias name.
     */
    readonly clusterAliasName?: string | ros.IResolvable;
    /**
     * @Property connectionType: Network access type, `slb` or `single_eni`; some regions only support `single_eni` for Development Edition.
     */
    readonly connectionType?: string | ros.IResolvable;
    /**
     * @Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
     */
    readonly eipEnabled?: boolean | ros.IResolvable;
    /**
     * @Property mseVersion: Must be filled unless special circumstances. Valid values:
     * - `mse_pro`: Professional Edition.
     * - `mse_dev`: Development Edition.
     * - `mse_serverless`: Serverless Edition.
     */
    readonly mseVersion?: string | ros.IResolvable;
    /**
     * @Property pubNetworkFlow: Public network flow. Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    readonly pubNetworkFlow?: number | ros.IResolvable;
    /**
     * @Property requestPars: Extended request parameters in JSON format.
     */
    readonly requestPars?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
     */
    readonly securityGroupType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Switch ID.
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
     * @Attribute AclEntryList: The list of ACL entries.
     */
    readonly attrAclEntryList: ros.IResolvable;
    /**
     * @Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * @Attribute AppVersion: The version of the application.
     */
    readonly attrAppVersion: ros.IResolvable;
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ClusterAliasName: The alias name of the cluster.
     */
    readonly attrClusterAliasName: ros.IResolvable;
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * @Attribute ClusterSpecification: The specification of the cluster.
     */
    readonly attrClusterSpecification: ros.IResolvable;
    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute ClusterVersion: The version of the cluster.
     */
    readonly attrClusterVersion: ros.IResolvable;
    /**
     * @Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    readonly attrConfigAuthEnabled: ros.IResolvable;
    /**
     * @Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    readonly attrConfigSecretEnabled: ros.IResolvable;
    /**
     * @Attribute ConnectionType: The connection type.
     */
    readonly attrConnectionType: ros.IResolvable;
    /**
     * @Attribute Cpu: The number of CPU cores.
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * @Attribute DiskCapacity: The disk capacity.
     */
    readonly attrDiskCapacity: ros.IResolvable;
    /**
     * @Attribute DiskType: The disk type.
     */
    readonly attrDiskType: ros.IResolvable;
    /**
     * @Attribute HealthStatus: The health status of the cluster.
     */
    readonly attrHealthStatus: ros.IResolvable;
    /**
     * @Attribute InstanceCount: The number of instances.
     */
    readonly attrInstanceCount: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the cluster instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InternetAddress: The public network address of the cluster.
     */
    readonly attrInternetAddress: ros.IResolvable;
    /**
     * @Attribute InternetDomain: The public network domain of the cluster.
     */
    readonly attrInternetDomain: ros.IResolvable;
    /**
     * @Attribute InternetPort: The public network port of the cluster.
     */
    readonly attrInternetPort: ros.IResolvable;
    /**
     * @Attribute IntranetAddress: The intranet address of the cluster.
     */
    readonly attrIntranetAddress: ros.IResolvable;
    /**
     * @Attribute IntranetDomain: The intranet domain of the cluster.
     */
    readonly attrIntranetDomain: ros.IResolvable;
    /**
     * @Attribute IntranetPort: The intranet port of the cluster.
     */
    readonly attrIntranetPort: ros.IResolvable;
    /**
     * @Attribute MCPEnabled: Whether to enable the MCP.
     */
    readonly attrMcpEnabled: ros.IResolvable;
    /**
     * @Attribute MemoryCapacity: The memory capacity.
     */
    readonly attrMemoryCapacity: ros.IResolvable;
    /**
     * @Attribute MseVersion: The MSE version.
     */
    readonly attrMseVersion: ros.IResolvable;
    /**
     * @Attribute NetType: The network type.
     */
    readonly attrNetType: ros.IResolvable;
    /**
     * @Attribute PayInfo: The payment information.
     */
    readonly attrPayInfo: ros.IResolvable;
    /**
     * @Attribute PubNetworkFlow: The public network flow.
     */
    readonly attrPubNetworkFlow: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterSpecification: Engine specification.
     *
     * [Professional Edition]
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_4_8_60_c`: 4 cores 8GB
     * - `MSE_SC_8_16_60_c`: 8 cores 16GB
     * - `MSE_SC_16_32_60_c`: 16 cores 32GB
     *
     * [Development Edition]
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     *
     * [Serverless Edition]
     * - Ignore this parameter or fill with `MSE_SC_SERVERLESS`.
     */
    clusterSpecification: string | ros.IResolvable;
    /**
     * @Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property clusterVersion: Cluster version.
     *
     * [Professional Edition]
     * - `NACOS_2_0_0`: Nacos 2.x.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     *
     * [Development Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     *
     * [Serverless Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     */
    clusterVersion: string | ros.IResolvable;
    /**
     * @Property instanceCount: Number of instance nodes. Range: 1~15.
     *
     * [Professional Edition]
     * - Must be >=3 and odd number.
     *
     * [Development Edition]
     * - Only 1 allowed.
     *
     * [Serverless Edition]
     * - Ignore this parameter.
     */
    instanceCount: number | ros.IResolvable;
    /**
     * @Property netType: Network type. Valid values:
     * - `privatenet`: Private network.
     * - `pubnet`: Public network.
     */
    netType: string | ros.IResolvable;
    /**
     * @Property aclEntryList: List of ACL entries.
     */
    aclEntryList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
     * Ignored for Serverless Edition.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property clusterAliasName: cluster alias name.
     */
    clusterAliasName: string | ros.IResolvable | undefined;
    /**
     * @Property connectionType: Network access type, `slb` or `single_eni`; some regions only support `single_eni` for Development Edition.
     */
    connectionType: string | ros.IResolvable | undefined;
    /**
     * @Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
     */
    eipEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property mseVersion: Must be filled unless special circumstances. Valid values:
     * - `mse_pro`: Professional Edition.
     * - `mse_dev`: Development Edition.
     * - `mse_serverless`: Serverless Edition.
     */
    mseVersion: string | ros.IResolvable | undefined;
    /**
     * @Property pubNetworkFlow: Public network flow. Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    pubNetworkFlow: number | ros.IResolvable | undefined;
    /**
     * @Property requestPars: Extended request parameters in JSON format.
     */
    requestPars: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
     */
    securityGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosCluster.TagsProperty[] | undefined;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: Switch ID.
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
 * Properties for defining a `RosGatewayDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export interface RosGatewayDomainProps {
    /**
     * @Property gatewayUniqueId: The unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The domain name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property protocol: The protocol type: HTTP, HTTPS.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * @Property certIdentifier: Certificate ID.
     */
    readonly certIdentifier?: string | ros.IResolvable;
    /**
     * @Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    readonly http2?: string | ros.IResolvable;
    /**
     * @Property mustHttps: Whether to enable HTTPS.
     */
    readonly mustHttps?: boolean | ros.IResolvable;
    /**
     * @Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    readonly tlsCipherSuitesConfigJson?: RosGatewayDomain.TlsCipherSuitesConfigJSONProperty | ros.IResolvable;
    /**
     * @Property tlsMax: The maximum TLS version.
     */
    readonly tlsMax?: string | ros.IResolvable;
    /**
     * @Property tlsMin: The minimum TLS version.
     */
    readonly tlsMin?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayDomain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export declare class RosGatewayDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayDomain";
    /**
     * @Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayUniqueId: The unique identifier of the gateway.
     */
    gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The domain name.
     */
    name: string | ros.IResolvable;
    /**
     * @Property protocol: The protocol type: HTTP, HTTPS.
     */
    protocol: string | ros.IResolvable;
    /**
     * @Property certIdentifier: Certificate ID.
     */
    certIdentifier: string | ros.IResolvable | undefined;
    /**
     * @Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    http2: string | ros.IResolvable | undefined;
    /**
     * @Property mustHttps: Whether to enable HTTPS.
     */
    mustHttps: boolean | ros.IResolvable | undefined;
    /**
     * @Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    tlsCipherSuitesConfigJson: RosGatewayDomain.TlsCipherSuitesConfigJSONProperty | ros.IResolvable | undefined;
    /**
     * @Property tlsMax: The maximum TLS version.
     */
    tlsMax: string | ros.IResolvable | undefined;
    /**
     * @Property tlsMin: The minimum TLS version.
     */
    tlsMin: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGatewayDomain {
    /**
     * @stability external
     */
    interface TlsCipherSuitesConfigJSONProperty {
        /**
         * @Property tlsCipherSuites: List of encryption suite names.
         */
        readonly tlsCipherSuites?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property configType: Encryption suite configuration type.
         */
        readonly configType?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosGatewayRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export interface RosGatewayRouteProps {
    /**
     * @Property domainIdList: The list of domain IDs in JSON format.
     */
    readonly domainIdList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The name of the route.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: The description of the route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property destinationType: The type of destination service. Valid values:
     * - Single: single service
     * - Multiple: multiple services
     * - VersionOriented: tag-based routing
     * - Mock: mock response
     * - Redirect: redirect
     */
    readonly destinationType?: string | ros.IResolvable;
    /**
     * @Property directResponseJson: Configuration for mock response.
     */
    readonly directResponseJson?: RosGatewayRoute.DirectResponseJSONProperty | ros.IResolvable;
    /**
     * @Property domainId: The ID of the domain.
     */
    readonly domainId?: number | ros.IResolvable;
    /**
     * @Property fallback: Whether to enable fallback service.
     */
    readonly fallback?: boolean | ros.IResolvable;
    /**
     * @Property fallbackServices: The list of fallback services.
     */
    readonly fallbackServices?: Array<RosGatewayRoute.FallbackServicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId?: number | ros.IResolvable;
    /**
     * @Property policies: The JSON string of route policies.
     */
    readonly policies?: string | ros.IResolvable;
    /**
     * @Property predicates: Matching rules for the route.
     */
    readonly predicates?: RosGatewayRoute.PredicatesProperty | ros.IResolvable;
    /**
     * @Property redirectJson: Configuration for redirect.
     */
    readonly redirectJson?: RosGatewayRoute.RedirectJSONProperty | ros.IResolvable;
    /**
     * @Property routeOrder: The order of the route. Smaller values indicate higher priority.
     */
    readonly routeOrder?: number | ros.IResolvable;
    /**
     * @Property routeType: The type of the route. Valid value: Op (control route).
     */
    readonly routeType?: string | ros.IResolvable;
    /**
     * @Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
     */
    readonly services?: Array<RosGatewayRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayRoute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayRoute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export declare class RosGatewayRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayRoute";
    /**
     * @Attribute RouteId: The ID of the route.
     */
    readonly attrRouteId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainIdList: The list of domain IDs in JSON format.
     */
    domainIdList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: The name of the route.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: The description of the route.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property destinationType: The type of destination service. Valid values:
     * - Single: single service
     * - Multiple: multiple services
     * - VersionOriented: tag-based routing
     * - Mock: mock response
     * - Redirect: redirect
     */
    destinationType: string | ros.IResolvable | undefined;
    /**
     * @Property directResponseJson: Configuration for mock response.
     */
    directResponseJson: RosGatewayRoute.DirectResponseJSONProperty | ros.IResolvable | undefined;
    /**
     * @Property domainId: The ID of the domain.
     */
    domainId: number | ros.IResolvable | undefined;
    /**
     * @Property fallback: Whether to enable fallback service.
     */
    fallback: boolean | ros.IResolvable | undefined;
    /**
     * @Property fallbackServices: The list of fallback services.
     */
    fallbackServices: Array<RosGatewayRoute.FallbackServicesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property gatewayId: The ID of the gateway.
     */
    gatewayId: number | ros.IResolvable | undefined;
    /**
     * @Property policies: The JSON string of route policies.
     */
    policies: string | ros.IResolvable | undefined;
    /**
     * @Property predicates: Matching rules for the route.
     */
    predicates: RosGatewayRoute.PredicatesProperty | ros.IResolvable | undefined;
    /**
     * @Property redirectJson: Configuration for redirect.
     */
    redirectJson: RosGatewayRoute.RedirectJSONProperty | ros.IResolvable | undefined;
    /**
     * @Property routeOrder: The order of the route. Smaller values indicate higher priority.
     */
    routeOrder: number | ros.IResolvable | undefined;
    /**
     * @Property routeType: The type of the route. Valid value: Op (control route).
     */
    routeType: string | ros.IResolvable | undefined;
    /**
     * @Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
     */
    services: Array<RosGatewayRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayRouteProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface DirectResponseJSONProperty {
        /**
         * @Property body: The body content to return for the mock response.
         */
        readonly body?: string | ros.IResolvable;
        /**
         * @Property code: The HTTP status code to return for the mock response.
         */
        readonly code?: number | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface FallbackServicesProperty {
        /**
         * @Property agreementType: The protocol type of the fallback service.
         */
        readonly agreementType?: string | ros.IResolvable;
        /**
         * @Property groupName: The group name of the fallback service.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property servicePort: The port of the fallback service.
         */
        readonly servicePort?: number | ros.IResolvable;
        /**
         * @Property percent: The weight percentage of the fallback service.
         */
        readonly percent?: number | ros.IResolvable;
        /**
         * @Property version: The version of the fallback service.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property sourceType: The source type of the fallback service.
         */
        readonly sourceType?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of the fallback service.
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the fallback service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the fallback service.
         */
        readonly serviceId?: number | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface HeaderPredicatesProperty {
        /**
         * @Property type: The matching type for the header.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of the request header.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the request header.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface HttpDubboTranscoderProperty {
        /**
         * @Property dubboServiceName: The name of the Dubbo service.
         */
        readonly dubboServiceName?: string | ros.IResolvable;
        /**
         * @Property mothedMapList: List of Dubbo forwarding rules.
         */
        readonly mothedMapList?: Array<RosGatewayRoute.MothedMapListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dubboServiceGroup: The group of the Dubbo service.
         */
        readonly dubboServiceGroup?: string | ros.IResolvable;
        /**
         * @Property dubboServiceVersion: The version of the Dubbo service.
         */
        readonly dubboServiceVersion?: string | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface MothedMapListProperty {
        /**
         * @Property dubboMothedName: The name of the Dubbo method.
         */
        readonly dubboMothedName?: string | ros.IResolvable;
        /**
         * @Property mothedpath: The path to match for the method.
         */
        readonly mothedpath?: string | ros.IResolvable;
        /**
         * @Property passThroughList: List of headers to pass through.
         */
        readonly passThroughList?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpMothed: The corresponding HTTP method. Supported values:
     * - ALL_GET
     * - ALL_POST
     * - ALL_PUT
     * - ALL_DELETE
     * - ALL_PATCH
         */
        readonly httpMothed?: string | ros.IResolvable;
        /**
         * @Property paramMapsList: List of parameter mappings.
         */
        readonly paramMapsList?: Array<RosGatewayRoute.ParamMapsListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property passThroughAllHeaders: Header pass-through type. Valid values:
     * - PASS_ALL: Pass all headers.
     * - PASS_NOT: Do not pass any header.
     * - PASS_ASSIGN: Pass specified headers.
         */
        readonly passThroughAllHeaders?: string | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface ParamMapsListProperty {
        /**
         * @Property mappingType: The type of the backend parameter.
         */
        readonly mappingType?: string | ros.IResolvable;
        /**
         * @Property extractKeySpec: Position of input parameter. Valid values:
     * - ALL_QUERY_PARAMETER: Query parameters
     * - ALL_HEADER: Request headers
     * - ALL_PATH: Request path
     * - ALL_BODY: Request body
         */
        readonly extractKeySpec?: string | ros.IResolvable;
        /**
         * @Property extractKey: The key to extract from the input.
         */
        readonly extractKey?: string | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface PathPredicatesProperty {
        /**
         * @Property path: The path to match.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property type: The type of path matching. Valid values:
     * - PRE: prefix match.
     * - EQUAL: exact match.
     * - REGULAR: regular expression match.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property ignoreCase: Whether to ignore case when matching paths.
         */
        readonly ignoreCase?: boolean | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface PredicatesProperty {
        /**
         * @Property headerPredicates: Request header matching rules.
         */
        readonly headerPredicates?: Array<RosGatewayRoute.HeaderPredicatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property methodPredicates: HTTP method matching rules.
         */
        readonly methodPredicates?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryPredicates: URL query parameter matching rules.
         */
        readonly queryPredicates?: Array<RosGatewayRoute.QueryPredicatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property pathPredicates: Path matching rules.
         */
        readonly pathPredicates?: RosGatewayRoute.PathPredicatesProperty | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface QueryPredicatesProperty {
        /**
         * @Property type: The matching type for the query parameter.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value to match for the query parameter.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the query parameter.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface RedirectJSONProperty {
        /**
         * @Property path: The path to redirect to.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property host: The host to redirect to.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property code: The HTTP status code for redirect.
         */
        readonly code?: number | ros.IResolvable;
    }
}
export declare namespace RosGatewayRoute {
    /**
     * @stability external
     */
    interface ServicesProperty {
        /**
         * @Property agreementType: The protocol type of the service.
         */
        readonly agreementType?: string | ros.IResolvable;
        /**
         * @Property groupName: The group name of the service.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property servicePort: The port of the backend service.
         */
        readonly servicePort?: number | ros.IResolvable;
        /**
         * @Property percent: The percentage of traffic allocated to this service\/version. Only used for multiple-service or tag-based routing.
         */
        readonly percent?: number | ros.IResolvable;
        /**
         * @Property version: The version of the service. Only used for tag-based routing.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property sourceType: The source type of the service.
         */
        readonly sourceType?: string | ros.IResolvable;
        /**
         * @Property httpDubboTranscoder: Configuration for Dubbo protocol transcoding.
         */
        readonly httpDubboTranscoder?: RosGatewayRoute.HttpDubboTranscoderProperty | ros.IResolvable;
        /**
         * @Property namespace: The namespace where the service resides.
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the service.
         */
        readonly serviceId?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosGatewayService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export interface RosGatewayServiceProps {
    /**
     * @Property gatewayUniqueId: Unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: Name of the service.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property sourceType: Type of service source. Valid values:
     * - MSE: MSE-NACOS
     * - K8s: ACK container service
     * - VIP: Fixed address
     * - DNS: DNS domain name
     * - FC: Function Compute
     * - EDAS: EDAS
     * - MSE_ZK: MSE-Zookeeper
     * - SAE: SAE
     *
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property dnsServerList: List of DNS servers.
     */
    readonly dnsServerList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property fcAlias: Function Compute service alias. Used when SourceType is FC.
     */
    readonly fcAlias?: string | ros.IResolvable;
    /**
     * @Property fcServiceName: Function Compute service name. Required when SourceType is FC.
     */
    readonly fcServiceName?: string | ros.IResolvable;
    /**
     * @Property fcVersion: Function Compute service version. Used when SourceType is FC.
     */
    readonly fcVersion?: string | ros.IResolvable;
    /**
     * @Property groupName: Group name of the service.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property ips: List of IPs.
     */
    readonly ips?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property namespace: Namespace of the service.
     */
    readonly namespace?: string | ros.IResolvable;
    /**
     * @Property saeAppId: SAE application ID.
     */
    readonly saeAppId?: string | ros.IResolvable;
    /**
     * @Property servicePort: Port of the service.
     */
    readonly servicePort?: number | ros.IResolvable;
    /**
     * @Property serviceProtocol: Protocol of the service.
     */
    readonly serviceProtocol?: string | ros.IResolvable;
    /**
     * @Property sourceId: Source ID of the service. Used when specifying a source to add services.
     */
    readonly sourceId?: number | ros.IResolvable;
    /**
     * @Property tlsSetting: TLS settings for the service.
     */
    readonly tlsSetting?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export declare class RosGatewayService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayService";
    /**
     * @Attribute Name: The name of the service.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute ServiceId: The ID of the gateway service.
     */
    readonly attrServiceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayUniqueId: Unique identifier of the gateway.
     */
    gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property name: Name of the service.
     */
    name: string | ros.IResolvable;
    /**
     * @Property sourceType: Type of service source. Valid values:
     * - MSE: MSE-NACOS
     * - K8s: ACK container service
     * - VIP: Fixed address
     * - DNS: DNS domain name
     * - FC: Function Compute
     * - EDAS: EDAS
     * - MSE_ZK: MSE-Zookeeper
     * - SAE: SAE
     *
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property dnsServerList: List of DNS servers.
     */
    dnsServerList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property fcAlias: Function Compute service alias. Used when SourceType is FC.
     */
    fcAlias: string | ros.IResolvable | undefined;
    /**
     * @Property fcServiceName: Function Compute service name. Required when SourceType is FC.
     */
    fcServiceName: string | ros.IResolvable | undefined;
    /**
     * @Property fcVersion: Function Compute service version. Used when SourceType is FC.
     */
    fcVersion: string | ros.IResolvable | undefined;
    /**
     * @Property groupName: Group name of the service.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property ips: List of IPs.
     */
    ips: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property namespace: Namespace of the service.
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * @Property saeAppId: SAE application ID.
     */
    saeAppId: string | ros.IResolvable | undefined;
    /**
     * @Property servicePort: Port of the service.
     */
    servicePort: number | ros.IResolvable | undefined;
    /**
     * @Property serviceProtocol: Protocol of the service.
     */
    serviceProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property sourceId: Source ID of the service. Used when specifying a source to add services.
     */
    sourceId: number | ros.IResolvable | undefined;
    /**
     * @Property tlsSetting: TLS settings for the service.
     */
    tlsSetting: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayServiceProps, enableResourcePropertyConstraint: boolean);
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::NacosService`.
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
 * Properties for defining a `RosPluginConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export interface RosPluginConfigProps {
    /**
     * @Property configLevel: The scope of the plugin application.
     * - 0: Global
     * - 1: Route
     * - 2: Domain
     */
    readonly configLevel: number | ros.IResolvable;
    /**
     * @Property enable: Whether to enable the plugin.
     */
    readonly enable: boolean | ros.IResolvable;
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property pluginId: The ID of the gateway plugin.
     */
    readonly pluginId: number | ros.IResolvable;
    /**
     * @Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    readonly config?: string | ros.IResolvable;
    /**
     * @Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
     */
    readonly resourceIdList?: Array<number | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::PluginConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export declare class RosPluginConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::PluginConfig";
    /**
     * @Attribute PluginConfigId: The ID of the plugin config.
     */
    readonly attrPluginConfigId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configLevel: The scope of the plugin application.
     * - 0: Global
     * - 1: Route
     * - 2: Domain
     */
    configLevel: number | ros.IResolvable;
    /**
     * @Property enable: Whether to enable the plugin.
     */
    enable: boolean | ros.IResolvable;
    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    gatewayUniqueId: string | ros.IResolvable;
    /**
     * @Property pluginId: The ID of the gateway plugin.
     */
    pluginId: number | ros.IResolvable;
    /**
     * @Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    config: string | ros.IResolvable | undefined;
    /**
     * @Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
     */
    resourceIdList: Array<number | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginConfigProps, enableResourcePropertyConstraint: boolean);
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
