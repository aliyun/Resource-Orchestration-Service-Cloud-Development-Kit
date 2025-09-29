import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
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
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];
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
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;
    /**
     * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly attrAclEntryList: ros.IResolvable | string;
    /**
     * Attribute AclId: acl id
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AppVersion: app version
     */
    readonly attrAppVersion: ros.IResolvable | string;
    /**
     * Attribute ClusterAliasName: cluster alias name
     */
    readonly attrClusterAliasName: ros.IResolvable | string;
    /**
     * Attribute ClusterId: cluster id
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterName: cluster name
     */
    readonly attrClusterName: ros.IResolvable | string;
    /**
     * Attribute ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
Optional parameters:
"MSE_ SC _1_2_60_c",
"MSE_ SC _2_4_60_c",
"MSE_ SC _4_8_60_c",
"MSE_ SC _8_16_60_c",
"MSE_ SC _16_32_60_c"
     */
    readonly attrClusterSpecification: ros.IResolvable | string;
    /**
     * Attribute ClusterType: cluster type
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly attrClusterVersion: ros.IResolvable | string;
    /**
     * Attribute ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
     */
    readonly attrConfigAuthEnabled: ros.IResolvable | string;
    /**
     * Attribute ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
     */
    readonly attrConfigSecretEnabled: ros.IResolvable | string;
    /**
     * Attribute ConnectionType: network connect type
     */
    readonly attrConnectionType: ros.IResolvable | string;
    /**
     * Attribute Cpu: cpu core size
     */
    readonly attrCpu: ros.IResolvable | string;
    /**
     * Attribute DiskCapacity: disk capacity, unit: G
     */
    readonly attrDiskCapacity: ros.IResolvable | string;
    /**
     * Attribute DiskType: disk type
     */
    readonly attrDiskType: ros.IResolvable | string;
    /**
     * Attribute HealthStatus: health status
     */
    readonly attrHealthStatus: ros.IResolvable | string;
    /**
     * Attribute InstanceCount: instance count
     */
    readonly attrInstanceCount: ros.IResolvable | string;
    /**
     * Attribute InstanceId: instance id
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InternetAddress: internet address
     */
    readonly attrInternetAddress: ros.IResolvable | string;
    /**
     * Attribute InternetDomain: internet domain
     */
    readonly attrInternetDomain: ros.IResolvable | string;
    /**
     * Attribute InternetPort: internet port
     */
    readonly attrInternetPort: ros.IResolvable | string;
    /**
     * Attribute IntranetAddress: intranet address
     */
    readonly attrIntranetAddress: ros.IResolvable | string;
    /**
     * Attribute IntranetDomain: intranet domain
     */
    readonly attrIntranetDomain: ros.IResolvable | string;
    /**
     * Attribute IntranetPort: intranet port
     */
    readonly attrIntranetPort: ros.IResolvable | string;
    /**
     * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
     */
    readonly attrMcpEnabled: ros.IResolvable | string;
    /**
     * Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: ros.IResolvable | string;
    /**
     * Attribute MseVersion: Required, the value is as follows:

-'mse_dev': indicates the development version.
-'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly attrMseVersion: ros.IResolvable | string;
    /**
     * Attribute NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly attrNetType: ros.IResolvable | string;
    /**
     * Attribute PayInfo: pay info
     */
    readonly attrPayInfo: ros.IResolvable | string;
    /**
     * Attribute PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly attrPubNetworkFlow: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: switcher Id
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: vpc id
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Cluster`, which is used to create a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export declare class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly attrAclEntryList: ros.IResolvable | string;
    /**
     * Attribute AclId: acl id
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AppVersion: app version
     */
    readonly attrAppVersion: ros.IResolvable | string;
    /**
     * Attribute ClusterAliasName: cluster alias name
     */
    readonly attrClusterAliasName: ros.IResolvable | string;
    /**
     * Attribute ClusterId: cluster id
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterName: cluster name
     */
    readonly attrClusterName: ros.IResolvable | string;
    /**
     * Attribute ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
Optional parameters:
"MSE_ SC _1_2_60_c",
"MSE_ SC _2_4_60_c",
"MSE_ SC _4_8_60_c",
"MSE_ SC _8_16_60_c",
"MSE_ SC _16_32_60_c"
     */
    readonly attrClusterSpecification: ros.IResolvable | string;
    /**
     * Attribute ClusterType: cluster type
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly attrClusterVersion: ros.IResolvable | string;
    /**
     * Attribute ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
     */
    readonly attrConfigAuthEnabled: ros.IResolvable | string;
    /**
     * Attribute ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
     */
    readonly attrConfigSecretEnabled: ros.IResolvable | string;
    /**
     * Attribute ConnectionType: network connect type
     */
    readonly attrConnectionType: ros.IResolvable | string;
    /**
     * Attribute Cpu: cpu core size
     */
    readonly attrCpu: ros.IResolvable | string;
    /**
     * Attribute DiskCapacity: disk capacity, unit: G
     */
    readonly attrDiskCapacity: ros.IResolvable | string;
    /**
     * Attribute DiskType: disk type
     */
    readonly attrDiskType: ros.IResolvable | string;
    /**
     * Attribute HealthStatus: health status
     */
    readonly attrHealthStatus: ros.IResolvable | string;
    /**
     * Attribute InstanceCount: instance count
     */
    readonly attrInstanceCount: ros.IResolvable | string;
    /**
     * Attribute InstanceId: instance id
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InternetAddress: internet address
     */
    readonly attrInternetAddress: ros.IResolvable | string;
    /**
     * Attribute InternetDomain: internet domain
     */
    readonly attrInternetDomain: ros.IResolvable | string;
    /**
     * Attribute InternetPort: internet port
     */
    readonly attrInternetPort: ros.IResolvable | string;
    /**
     * Attribute IntranetAddress: intranet address
     */
    readonly attrIntranetAddress: ros.IResolvable | string;
    /**
     * Attribute IntranetDomain: intranet domain
     */
    readonly attrIntranetDomain: ros.IResolvable | string;
    /**
     * Attribute IntranetPort: intranet port
     */
    readonly attrIntranetPort: ros.IResolvable | string;
    /**
     * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
     */
    readonly attrMcpEnabled: ros.IResolvable | string;
    /**
     * Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: ros.IResolvable | string;
    /**
     * Attribute MseVersion: Required, the value is as follows:

-'mse_dev': indicates the development version.
-'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly attrMseVersion: ros.IResolvable | string;
    /**
     * Attribute NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly attrNetType: ros.IResolvable | string;
    /**
     * Attribute PayInfo: pay info
     */
    readonly attrPayInfo: ros.IResolvable | string;
    /**
     * Attribute PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly attrPubNetworkFlow: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: switcher Id
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: vpc id
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
