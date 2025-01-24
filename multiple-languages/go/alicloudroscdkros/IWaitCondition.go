package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `WaitCondition`.
type IWaitCondition interface {
	alicloudroscdkcore.IResource
	// Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
	AttrData() interface{}
	// Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
	AttrErrorData() interface{}
	// Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
	AttrJoinedErrorData() interface{}
	Props() *WaitConditionProps
}

// The jsii proxy for IWaitCondition
type jsiiProxy_IWaitCondition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitCondition) AttrData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitCondition) AttrErrorData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrErrorData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitCondition) AttrJoinedErrorData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJoinedErrorData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitCondition) Props() *WaitConditionProps {
	var returns *WaitConditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

