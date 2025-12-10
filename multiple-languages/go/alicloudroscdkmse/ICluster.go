package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `Cluster`.
type ICluster interface {
	alicloudroscdkcore.IResource
	// Attribute AclEntryList: The list of ACL entries.
	AttrAclEntryList() interface{}
	// Attribute AclId: The ID of the ACL.
	AttrAclId() interface{}
	// Attribute AppVersion: The version of the application.
	AttrAppVersion() interface{}
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ClusterAliasName: The alias name of the cluster.
	AttrClusterAliasName() interface{}
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute ClusterName: The name of the cluster.
	AttrClusterName() interface{}
	// Attribute ClusterSpecification: The specification of the cluster.
	AttrClusterSpecification() interface{}
	// Attribute ClusterType: The type of the cluster.
	AttrClusterType() interface{}
	// Attribute ClusterVersion: The version of the cluster.
	AttrClusterVersion() interface{}
	// Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
	AttrConfigAuthEnabled() interface{}
	// Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
	AttrConfigSecretEnabled() interface{}
	// Attribute ConnectionType: The connection type.
	AttrConnectionType() interface{}
	// Attribute Cpu: The number of CPU cores.
	AttrCpu() interface{}
	// Attribute DiskCapacity: The disk capacity.
	AttrDiskCapacity() interface{}
	// Attribute DiskType: The disk type.
	AttrDiskType() interface{}
	// Attribute HealthStatus: The health status of the cluster.
	AttrHealthStatus() interface{}
	// Attribute InstanceCount: The number of instances.
	AttrInstanceCount() interface{}
	// Attribute InstanceId: The ID of the cluster instance.
	AttrInstanceId() interface{}
	// Attribute InternetAddress: The public network address of the cluster.
	AttrInternetAddress() interface{}
	// Attribute InternetDomain: The public network domain of the cluster.
	AttrInternetDomain() interface{}
	// Attribute InternetPort: The public network port of the cluster.
	AttrInternetPort() interface{}
	// Attribute IntranetAddress: The intranet address of the cluster.
	AttrIntranetAddress() interface{}
	// Attribute IntranetDomain: The intranet domain of the cluster.
	AttrIntranetDomain() interface{}
	// Attribute IntranetPort: The intranet port of the cluster.
	AttrIntranetPort() interface{}
	// Attribute MCPEnabled: Whether to enable the MCP.
	AttrMcpEnabled() interface{}
	// Attribute MemoryCapacity: The memory capacity.
	AttrMemoryCapacity() interface{}
	// Attribute MseVersion: The MSE version.
	AttrMseVersion() interface{}
	// Attribute NetType: The network type.
	AttrNetType() interface{}
	// Attribute PayInfo: The payment information.
	AttrPayInfo() interface{}
	// Attribute PubNetworkFlow: The public network flow.
	AttrPubNetworkFlow() interface{}
	// Attribute VpcId: The ID of the VPC.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the VSwitch.
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

func (j *jsiiProxy_ICluster) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
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

