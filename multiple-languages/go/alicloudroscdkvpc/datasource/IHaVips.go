package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `HaVips`.
type IHaVips interface {
	alicloudroscdkcore.IResource
	// Attribute HaVipIds: The list of ha vip IDs.
	AttrHaVipIds() interface{}
	// Attribute HaVips: The list of ha vips.
	AttrHaVips() interface{}
	Props() *HaVipsProps
}

// The jsii proxy for IHaVips
type jsiiProxy_IHaVips struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHaVips) AttrHaVipIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHaVipIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVips) AttrHaVips() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHaVips",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVips) Props() *HaVipsProps {
	var returns *HaVipsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

