package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `Cluster`.
type ICluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute HostGroups: The host group list of the cluster.
	AttrHostGroups() interface{}
	// Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
	AttrMasterNodeInnerIps() interface{}
	// Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
	AttrMasterNodePubIps() interface{}
	Props() *ClusterProps
}

// The jsii proxy for ICluster
type jsiiProxy_ICluster struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_ICluster) AttrHostGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMasterNodeInnerIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterNodeInnerIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster) AttrMasterNodePubIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterNodePubIps",
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

