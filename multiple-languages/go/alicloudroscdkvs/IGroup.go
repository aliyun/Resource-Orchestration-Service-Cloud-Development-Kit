package alicloudroscdkvs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvs/internal"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GbId: GB ID space provided.
	//
	// (Applies only to access the space marked States).
	AttrGbId() interface{}
	// Attribute GbIp: GB signaling server address space provided.
	//
	// (Applies only to access the space marked States).
	AttrGbIp() interface{}
	// Attribute GbPort: GB Port space provided.
	//
	// (Applies only to access the space marked States).
	AttrGbPort() interface{}
	// Attribute Id: Space ID.
	AttrId() interface{}
	Props() *GroupProps
}

// The jsii proxy for IGroup
type jsiiProxy_IGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroup) AttrGbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrGbIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGbIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrGbPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGbPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) Props() *GroupProps {
	var returns *GroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

