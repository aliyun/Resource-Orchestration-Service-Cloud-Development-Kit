package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `ClusterMember`.
type IClusterMember interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster ID.
	AttrClusterId() interface{}
	// Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
	AttrClusterMemberIds() interface{}
	// Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
	AttrEcuIds() interface{}
	// Attribute InstanceIds: ECS instance IDs.
	AttrInstanceIds() interface{}
	Props() *ClusterMemberProps
}

// The jsii proxy for IClusterMember
type jsiiProxy_IClusterMember struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterMember) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterMember) AttrClusterMemberIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterMemberIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterMember) AttrEcuIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEcuIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterMember) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterMember) Props() *ClusterMemberProps {
	var returns *ClusterMemberProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

