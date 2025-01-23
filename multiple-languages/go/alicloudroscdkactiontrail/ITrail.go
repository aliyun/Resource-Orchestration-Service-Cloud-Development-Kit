package alicloudroscdkactiontrail

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkactiontrail/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Trail`.
type ITrail interface {
	alicloudroscdkcore.IResource
	// Attribute Name: The name of the trail to be created, which must be unique for an account.
	AttrName() interface{}
	Props() *TrailProps
}

// The jsii proxy for ITrail
type jsiiProxy_ITrail struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrail) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrail) Props() *TrailProps {
	var returns *TrailProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

