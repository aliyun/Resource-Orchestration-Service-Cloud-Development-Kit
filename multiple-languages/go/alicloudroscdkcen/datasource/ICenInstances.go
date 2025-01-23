package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenInstances`.
type ICenInstances interface {
	alicloudroscdkcore.IResource
	// Attribute CenIds: The list of The Cen instance ids.
	AttrCenIds() interface{}
	// Attribute Cens: The information about Cens.
	AttrCens() interface{}
	Props() *CenInstancesProps
}

// The jsii proxy for ICenInstances
type jsiiProxy_ICenInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenInstances) AttrCenIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenInstances) AttrCens() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCens",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenInstances) Props() *CenInstancesProps {
	var returns *CenInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

