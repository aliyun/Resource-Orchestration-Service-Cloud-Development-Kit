package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `BgpGroup`.
type IBgpGroup interface {
	alicloudroscdkcore.IResource
	// Attribute BgpGroupId: The ID of the BGP group.
	AttrBgpGroupId() interface{}
	// Attribute Name: The name of the BGP group.
	AttrName() interface{}
	Props() *BgpGroupProps
}

// The jsii proxy for IBgpGroup
type jsiiProxy_IBgpGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBgpGroup) AttrBgpGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpGroup) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpGroup) Props() *BgpGroupProps {
	var returns *BgpGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

