package alicloudroscdkhbase

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbase/internal"
)

// Represents a `MultiZoneCluster`.
type IMultiZoneCluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the instance.
	AttrClusterId() interface{}
	// Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
	AttrServiceConnAddrs() interface{}
	// Attribute SlbConnAddrs: LIST of SlbConnAddr.
	AttrSlbConnAddrs() interface{}
	// Attribute ThriftConn: Thrift Connection address list.
	AttrThriftConn() interface{}
	// Attribute UiProxyConnAddrInfo: WebUI connection information list.
	AttrUiProxyConnAddrInfo() interface{}
	// Attribute ZkConnAddrs: List of ZkConnAddr.
	AttrZkConnAddrs() interface{}
	Props() *MultiZoneClusterProps
}

// The jsii proxy for IMultiZoneCluster
type jsiiProxy_IMultiZoneCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMultiZoneCluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) AttrServiceConnAddrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceConnAddrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) AttrSlbConnAddrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlbConnAddrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) AttrThriftConn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrThriftConn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) AttrUiProxyConnAddrInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUiProxyConnAddrInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) AttrZkConnAddrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZkConnAddrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneCluster) Props() *MultiZoneClusterProps {
	var returns *MultiZoneClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

