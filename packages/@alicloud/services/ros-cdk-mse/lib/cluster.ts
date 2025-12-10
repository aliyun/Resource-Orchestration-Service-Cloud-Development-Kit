import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export interface ClusterProps {

    /**
     * Property clusterSpecification: Engine specification.
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
     * Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property clusterVersion: Cluster version.
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
     * Property instanceCount: Number of instance nodes. Range: 1~15.
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
     * Property netType: Network type. Valid values:
     * - `privatenet`: Private network.
     * - `pubnet`: Public network.
     */
    readonly netType: string | ros.IResolvable;

    /**
     * Property aclEntryList: List of ACL entries.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
     * Ignored for Serverless Edition.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property clusterAliasName: cluster alias name.
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * Property connectionType: Network access type, `slb` or `single_eni`; some regions only support `single_eni` for Development Edition.
     */
    readonly connectionType?: string | ros.IResolvable;

    /**
     * Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
     */
    readonly eipEnabled?: boolean | ros.IResolvable;

    /**
     * Property mseVersion: Must be filled unless special circumstances. Valid values:
     * - `mse_pro`: Professional Edition.
     * - `mse_dev`: Development Edition.
     * - `mse_serverless`: Serverless Edition.
     */
    readonly mseVersion?: string | ros.IResolvable;

    /**
     * Property pubNetworkFlow: Public network flow. Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    readonly pubNetworkFlow?: number | ros.IResolvable;

    /**
     * Property requestPars: Extended request parameters in JSON format.
     */
    readonly requestPars?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];

    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: Switch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;

    /**
     * Attribute AclEntryList: The list of ACL entries.
     */
    readonly attrAclEntryList: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AppVersion: The version of the application.
     */
    readonly attrAppVersion: ros.IResolvable | string;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClusterAliasName: The alias name of the cluster.
     */
    readonly attrClusterAliasName: ros.IResolvable | string;

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable | string;

    /**
     * Attribute ClusterSpecification: The specification of the cluster.
     */
    readonly attrClusterSpecification: ros.IResolvable | string;

    /**
     * Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute ClusterVersion: The version of the cluster.
     */
    readonly attrClusterVersion: ros.IResolvable | string;

    /**
     * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    readonly attrConfigAuthEnabled: ros.IResolvable | string;

    /**
     * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    readonly attrConfigSecretEnabled: ros.IResolvable | string;

    /**
     * Attribute ConnectionType: The connection type.
     */
    readonly attrConnectionType: ros.IResolvable | string;

    /**
     * Attribute Cpu: The number of CPU cores.
     */
    readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute DiskCapacity: The disk capacity.
     */
    readonly attrDiskCapacity: ros.IResolvable | string;

    /**
     * Attribute DiskType: The disk type.
     */
    readonly attrDiskType: ros.IResolvable | string;

    /**
     * Attribute HealthStatus: The health status of the cluster.
     */
    readonly attrHealthStatus: ros.IResolvable | string;

    /**
     * Attribute InstanceCount: The number of instances.
     */
    readonly attrInstanceCount: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the cluster instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InternetAddress: The public network address of the cluster.
     */
    readonly attrInternetAddress: ros.IResolvable | string;

    /**
     * Attribute InternetDomain: The public network domain of the cluster.
     */
    readonly attrInternetDomain: ros.IResolvable | string;

    /**
     * Attribute InternetPort: The public network port of the cluster.
     */
    readonly attrInternetPort: ros.IResolvable | string;

    /**
     * Attribute IntranetAddress: The intranet address of the cluster.
     */
    readonly attrIntranetAddress: ros.IResolvable | string;

    /**
     * Attribute IntranetDomain: The intranet domain of the cluster.
     */
    readonly attrIntranetDomain: ros.IResolvable | string;

    /**
     * Attribute IntranetPort: The intranet port of the cluster.
     */
    readonly attrIntranetPort: ros.IResolvable | string;

    /**
     * Attribute MCPEnabled: Whether to enable the MCP.
     */
    readonly attrMcpEnabled: ros.IResolvable | string;

    /**
     * Attribute MemoryCapacity: The memory capacity.
     */
    readonly attrMemoryCapacity: ros.IResolvable | string;

    /**
     * Attribute MseVersion: The MSE version.
     */
    readonly attrMseVersion: ros.IResolvable | string;

    /**
     * Attribute NetType: The network type.
     */
    readonly attrNetType: ros.IResolvable | string;

    /**
     * Attribute PayInfo: The payment information.
     */
    readonly attrPayInfo: ros.IResolvable | string;

    /**
     * Attribute PubNetworkFlow: The public network flow.
     */
    readonly attrPubNetworkFlow: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Cluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclEntryList: The list of ACL entries.
     */
    public readonly attrAclEntryList: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AppVersion: The version of the application.
     */
    public readonly attrAppVersion: ros.IResolvable | string;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClusterAliasName: The alias name of the cluster.
     */
    public readonly attrClusterAliasName: ros.IResolvable | string;

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    public readonly attrClusterName: ros.IResolvable | string;

    /**
     * Attribute ClusterSpecification: The specification of the cluster.
     */
    public readonly attrClusterSpecification: ros.IResolvable | string;

    /**
     * Attribute ClusterType: The type of the cluster.
     */
    public readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute ClusterVersion: The version of the cluster.
     */
    public readonly attrClusterVersion: ros.IResolvable | string;

    /**
     * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    public readonly attrConfigAuthEnabled: ros.IResolvable | string;

    /**
     * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    public readonly attrConfigSecretEnabled: ros.IResolvable | string;

    /**
     * Attribute ConnectionType: The connection type.
     */
    public readonly attrConnectionType: ros.IResolvable | string;

    /**
     * Attribute Cpu: The number of CPU cores.
     */
    public readonly attrCpu: ros.IResolvable | string;

    /**
     * Attribute DiskCapacity: The disk capacity.
     */
    public readonly attrDiskCapacity: ros.IResolvable | string;

    /**
     * Attribute DiskType: The disk type.
     */
    public readonly attrDiskType: ros.IResolvable | string;

    /**
     * Attribute HealthStatus: The health status of the cluster.
     */
    public readonly attrHealthStatus: ros.IResolvable | string;

    /**
     * Attribute InstanceCount: The number of instances.
     */
    public readonly attrInstanceCount: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the cluster instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InternetAddress: The public network address of the cluster.
     */
    public readonly attrInternetAddress: ros.IResolvable | string;

    /**
     * Attribute InternetDomain: The public network domain of the cluster.
     */
    public readonly attrInternetDomain: ros.IResolvable | string;

    /**
     * Attribute InternetPort: The public network port of the cluster.
     */
    public readonly attrInternetPort: ros.IResolvable | string;

    /**
     * Attribute IntranetAddress: The intranet address of the cluster.
     */
    public readonly attrIntranetAddress: ros.IResolvable | string;

    /**
     * Attribute IntranetDomain: The intranet domain of the cluster.
     */
    public readonly attrIntranetDomain: ros.IResolvable | string;

    /**
     * Attribute IntranetPort: The intranet port of the cluster.
     */
    public readonly attrIntranetPort: ros.IResolvable | string;

    /**
     * Attribute MCPEnabled: Whether to enable the MCP.
     */
    public readonly attrMcpEnabled: ros.IResolvable | string;

    /**
     * Attribute MemoryCapacity: The memory capacity.
     */
    public readonly attrMemoryCapacity: ros.IResolvable | string;

    /**
     * Attribute MseVersion: The MSE version.
     */
    public readonly attrMseVersion: ros.IResolvable | string;

    /**
     * Attribute NetType: The network type.
     */
    public readonly attrNetType: ros.IResolvable | string;

    /**
     * Attribute PayInfo: The payment information.
     */
    public readonly attrPayInfo: ros.IResolvable | string;

    /**
     * Attribute PubNetworkFlow: The public network flow.
     */
    public readonly attrPubNetworkFlow: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCluster = new RosCluster(this, id,  {
            mseVersion: props.mseVersion,
            clusterVersion: props.clusterVersion,
            connectionType: props.connectionType,
            resourceGroupId: props.resourceGroupId,
            aclEntryList: props.aclEntryList,
            clusterSpecification: props.clusterSpecification,
            vSwitchId: props.vSwitchId,
            securityGroupType: props.securityGroupType,
            clusterType: props.clusterType,
            clusterAliasName: props.clusterAliasName,
            instanceCount: props.instanceCount,
            vpcId: props.vpcId,
            requestPars: props.requestPars,
            chargeType: props.chargeType,
            pubNetworkFlow: props.pubNetworkFlow,
            netType: props.netType,
            eipEnabled: props.eipEnabled,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrAclEntryList = rosCluster.attrAclEntryList;
        this.attrAclId = rosCluster.attrAclId;
        this.attrAppVersion = rosCluster.attrAppVersion;
        this.attrArn = rosCluster.attrArn;
        this.attrClusterAliasName = rosCluster.attrClusterAliasName;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrClusterName = rosCluster.attrClusterName;
        this.attrClusterSpecification = rosCluster.attrClusterSpecification;
        this.attrClusterType = rosCluster.attrClusterType;
        this.attrClusterVersion = rosCluster.attrClusterVersion;
        this.attrConfigAuthEnabled = rosCluster.attrConfigAuthEnabled;
        this.attrConfigSecretEnabled = rosCluster.attrConfigSecretEnabled;
        this.attrConnectionType = rosCluster.attrConnectionType;
        this.attrCpu = rosCluster.attrCpu;
        this.attrDiskCapacity = rosCluster.attrDiskCapacity;
        this.attrDiskType = rosCluster.attrDiskType;
        this.attrHealthStatus = rosCluster.attrHealthStatus;
        this.attrInstanceCount = rosCluster.attrInstanceCount;
        this.attrInstanceId = rosCluster.attrInstanceId;
        this.attrInternetAddress = rosCluster.attrInternetAddress;
        this.attrInternetDomain = rosCluster.attrInternetDomain;
        this.attrInternetPort = rosCluster.attrInternetPort;
        this.attrIntranetAddress = rosCluster.attrIntranetAddress;
        this.attrIntranetDomain = rosCluster.attrIntranetDomain;
        this.attrIntranetPort = rosCluster.attrIntranetPort;
        this.attrMcpEnabled = rosCluster.attrMcpEnabled;
        this.attrMemoryCapacity = rosCluster.attrMemoryCapacity;
        this.attrMseVersion = rosCluster.attrMseVersion;
        this.attrNetType = rosCluster.attrNetType;
        this.attrPayInfo = rosCluster.attrPayInfo;
        this.attrPubNetworkFlow = rosCluster.attrPubNetworkFlow;
        this.attrVSwitchId = rosCluster.attrVSwitchId;
        this.attrVpcId = rosCluster.attrVpcId;
    }
}
