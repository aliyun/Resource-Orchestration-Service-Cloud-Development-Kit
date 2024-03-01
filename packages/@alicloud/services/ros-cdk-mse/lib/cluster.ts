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
     * Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC _1_2_60_c",
     * "MSE_ SC _2_4_60_c",
     * "MSE_ SC _4_8_60_c",
     * "MSE_ SC _8_16_60_c",
     * "MSE_ SC _16_32_60_c"
     */
    readonly clusterSpecification: string | ros.IResolvable;

    /**
     * Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly clusterVersion: string | ros.IResolvable;

    /**
     * Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;

    /**
     * Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly netType: string | ros.IResolvable;

    /**
     * Property acceptLanguage:
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clusterAliasName: cluster alias name
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * Property connectionType: network connect type
     */
    readonly connectionType?: string | ros.IResolvable;

    /**
     * Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * Property mseVersion: Required, the value is as follows:
     * 
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly mseVersion?: string | ros.IResolvable;

    /**
     * Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;

    /**
     * Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly pubNetworkFlow?: string | ros.IResolvable;

    /**
     * Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string | ros.IResolvable;

    /**
     * Property requestPars:
     */
    readonly requestPars?: string | ros.IResolvable;

    /**
     * Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Cluster`, which is used to create a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export class Cluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    public readonly attrAclEntryList: ros.IResolvable;

    /**
     * Attribute AclId: acl id
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * Attribute AppVersion: app version
     */
    public readonly attrAppVersion: ros.IResolvable;

    /**
     * Attribute ClusterAliasName: cluster alias name
     */
    public readonly attrClusterAliasName: ros.IResolvable;

    /**
     * Attribute ClusterId: cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterName: cluster name
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * Attribute ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
Optional parameters:
"MSE_ SC _1_2_60_c",
"MSE_ SC _2_4_60_c",
"MSE_ SC _4_8_60_c",
"MSE_ SC _8_16_60_c",
"MSE_ SC _16_32_60_c"
     */
    public readonly attrClusterSpecification: ros.IResolvable;

    /**
     * Attribute ClusterType: cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    public readonly attrClusterVersion: ros.IResolvable;

    /**
     * Attribute ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
     */
    public readonly attrConfigAuthEnabled: ros.IResolvable;

    /**
     * Attribute ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
     */
    public readonly attrConfigSecretEnabled: ros.IResolvable;

    /**
     * Attribute ConnectionType: network connect type
     */
    public readonly attrConnectionType: ros.IResolvable;

    /**
     * Attribute Cpu: cpu core size
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * Attribute DiskCapacity: disk capacity, unit: G
     */
    public readonly attrDiskCapacity: ros.IResolvable;

    /**
     * Attribute DiskType: disk type
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * Attribute HealthStatus: health status
     */
    public readonly attrHealthStatus: ros.IResolvable;

    /**
     * Attribute InstanceCount: instance count
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * Attribute InstanceId: instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InternetAddress: internet address
     */
    public readonly attrInternetAddress: ros.IResolvable;

    /**
     * Attribute InternetDomain: internet domain
     */
    public readonly attrInternetDomain: ros.IResolvable;

    /**
     * Attribute InternetPort: internet port
     */
    public readonly attrInternetPort: ros.IResolvable;

    /**
     * Attribute IntranetAddress: intranet address
     */
    public readonly attrIntranetAddress: ros.IResolvable;

    /**
     * Attribute IntranetDomain: intranet domain
     */
    public readonly attrIntranetDomain: ros.IResolvable;

    /**
     * Attribute IntranetPort: intranet port
     */
    public readonly attrIntranetPort: ros.IResolvable;

    /**
     * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
     */
    public readonly attrMcpEnabled: ros.IResolvable;

    /**
     * Attribute MemoryCapacity: memory capacity
     */
    public readonly attrMemoryCapacity: ros.IResolvable;

    /**
     * Attribute MseVersion: Required, the value is as follows:

-'mse_dev': indicates the development version.
-'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    public readonly attrMseVersion: ros.IResolvable;

    /**
     * Attribute NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    public readonly attrNetType: ros.IResolvable;

    /**
     * Attribute PayInfo: pay info
     */
    public readonly attrPayInfo: ros.IResolvable;

    /**
     * Attribute PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    public readonly attrPubNetworkFlow: ros.IResolvable;

    /**
     * Attribute VSwitchId: switcher Id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

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
            privateSlbSpecification: props.privateSlbSpecification,
            clusterVersion: props.clusterVersion,
            connectionType: props.connectionType,
            aclEntryList: props.aclEntryList,
            clusterSpecification: props.clusterSpecification,
            vSwitchId: props.vSwitchId,
            pubSlbSpecification: props.pubSlbSpecification,
            clusterType: props.clusterType,
            diskType: props.diskType,
            clusterAliasName: props.clusterAliasName,
            instanceCount: props.instanceCount,
            vpcId: props.vpcId,
            requestPars: props.requestPars,
            pubNetworkFlow: props.pubNetworkFlow,
            acceptLanguage: props.acceptLanguage,
            netType: props.netType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrAclEntryList = rosCluster.attrAclEntryList;
        this.attrAclId = rosCluster.attrAclId;
        this.attrAppVersion = rosCluster.attrAppVersion;
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
