package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `Cluster`.
type ICluster interface {
	alicloudroscdkcore.IResource
	// Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
	AttrAclEntryList() interface{}
	// Attribute AclId: acl id.
	AttrAclId() interface{}
	// Attribute AppVersion: app version.
	AttrAppVersion() interface{}
	// Attribute ClusterAliasName: cluster alias name.
	AttrClusterAliasName() interface{}
	// Attribute ClusterId: cluster id.
	AttrClusterId() interface{}
	// Attribute ClusterName: cluster name.
	AttrClusterName() interface{}
	// Attribute ClusterSpecification: Cluster specifications.
	//
	// Note the msversion requirements of the version parameter,
	// Optional parameters:
	// "MSE_ SC _1_2_60_c",
	// "MSE_ SC _2_4_60_c",
	// "MSE_ SC _4_8_60_c",
	// "MSE_ SC _8_16_60_c",
	// "MSE_ SC _16_32_60_c".
	AttrClusterSpecification() interface{}
	// Attribute ClusterType: cluster type.
	AttrClusterType() interface{}
	// Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
	AttrClusterVersion() interface{}
	// Attribute ConfigAuthEnabled: Whether the configuration supports it.
	//
	// Valid values: true: false: not supported.
	AttrConfigAuthEnabled() interface{}
	// Attribute ConfigSecretEnabled: Whether the configuration password takes effect.
	//
	// The value is as follows: true: valid false: not valid.
	AttrConfigSecretEnabled() interface{}
	// Attribute ConnectionType: network connect type.
	AttrConnectionType() interface{}
	// Attribute Cpu: cpu core size.
	AttrCpu() interface{}
	// Attribute DiskCapacity: disk capacity, unit: G.
	AttrDiskCapacity() interface{}
	// Attribute DiskType: disk type.
	AttrDiskType() interface{}
	// Attribute HealthStatus: health status.
	AttrHealthStatus() interface{}
	// Attribute InstanceCount: instance count.
	AttrInstanceCount() interface{}
	// Attribute InstanceId: instance id.
	AttrInstanceId() interface{}
	// Attribute InternetAddress: internet address.
	AttrInternetAddress() interface{}
	// Attribute InternetDomain: internet domain.
	AttrInternetDomain() interface{}
	// Attribute InternetPort: internet port.
	AttrInternetPort() interface{}
	// Attribute IntranetAddress: intranet address.
	AttrIntranetAddress() interface{}
	// Attribute IntranetDomain: intranet domain.
	AttrIntranetDomain() interface{}
	// Attribute IntranetPort: intranet port.
	AttrIntranetPort() interface{}
	// Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.
	AttrMcpEnabled() interface{}
	// Attribute MemoryCapacity: memory capacity.
	AttrMemoryCapacity() interface{}
	// Attribute MseVersion: Required, the value is as follows:.
	//
	// -'mse_dev': indicates the development version.
	// -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
	AttrMseVersion() interface{}
	// Attribute NetType: Network type (whether private network is enabled or not).
	//
	// privatenet indicates that private network is enabled.
	AttrNetType() interface{}
	// Attribute PayInfo: pay info.
	AttrPayInfo() interface{}
	// Attribute PubNetworkFlow: Public network bandwidth.
	//
	// If the bandwidth is greater than 0, the public network is enabled.
	AttrPubNetworkFlow() interface{}
	// Attribute VpcId: vpc id.
	AttrVpcId() interface{}
	// Attribute VSwitchId: switcher Id.
	AttrVSwitchId() interface{}
	Props() *ClusterProps
}

// The jsii proxy for ICluster
type jsiiProxy_ICluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICluster) AttrAclEntryList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclEntryList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrAppVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterAliasName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterAliasName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrClusterVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrConfigAuthEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigAuthEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrConfigSecretEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigSecretEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrConnectionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrDiskCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrDiskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrHealthStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrInstanceCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrInternetAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrInternetDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrInternetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrIntranetAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrIntranetDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrIntranetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMcpEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMcpEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMemoryCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemoryCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMseVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrNetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrPayInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrPubNetworkFlow() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubNetworkFlow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) Props() *ClusterProps {
	var returns *ClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

