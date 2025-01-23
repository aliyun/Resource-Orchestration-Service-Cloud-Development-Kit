package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ManagedPrometheus`.
type IManagedPrometheus interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterType: The type of the cluster.
	AttrClusterType() interface{}
	// Attribute VpcId: The vpc ID of the cluster.
	AttrVpcId() interface{}
	Props() *ManagedPrometheusProps
}

// The jsii proxy for IManagedPrometheus
type jsiiProxy_IManagedPrometheus struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IManagedPrometheus) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedPrometheus) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedPrometheus) Props() *ManagedPrometheusProps {
	var returns *ManagedPrometheusProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

