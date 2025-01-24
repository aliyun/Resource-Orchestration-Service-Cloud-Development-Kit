package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `Cluster2`.
type ICluster2 interface {
	alicloudroscdkcore.IResource
	// Attribute ApplicationLinks: ApplicationLinks of cluster.
	AttrApplicationLinks() interface{}
	// Attribute ClusterId: Cluster ID.
	AttrClusterId() interface{}
	Props() *Cluster2Props
}

// The jsii proxy for ICluster2
type jsiiProxy_ICluster2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICluster2) AttrApplicationLinks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationLinks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster2) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster2) Props() *Cluster2Props {
	var returns *Cluster2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

