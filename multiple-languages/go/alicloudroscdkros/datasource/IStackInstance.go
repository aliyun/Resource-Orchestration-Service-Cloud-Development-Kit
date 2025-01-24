package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/datasource/internal"
)

// Represents a `StackInstance`.
type IStackInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AccountId: The account id of the stack.
	AttrAccountId() interface{}
	// Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
	AttrDriftDetectionTime() interface{}
	// Attribute Outputs: The outputs of the stack instance.
	AttrOutputs() interface{}
	// Attribute ParameterOverrides: Override parameter list.
	AttrParameterOverrides() interface{}
	// Attribute RdFolderId: The resource folder ID of the resource directory.
	AttrRdFolderId() interface{}
	// Attribute RegionId: The region id of the stack.
	AttrRegionId() interface{}
	// Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
	AttrStackDriftStatus() interface{}
	// Attribute StackGroupId: The resource stack group ID.
	AttrStackGroupId() interface{}
	// Attribute StackGroupName: The resource stack group name.
	AttrStackGroupName() interface{}
	// Attribute StackId: The stack id of stack instance.
	AttrStackId() interface{}
	// Attribute Status: Resource stack status.
	AttrStatus() interface{}
	// Attribute StatusReason: Status reason description.
	AttrStatusReason() interface{}
	Props() *StackInstanceProps
}

// The jsii proxy for IStackInstance
type jsiiProxy_IStackInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStackInstance) AttrAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrDriftDetectionTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDriftDetectionTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrOutputs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOutputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrParameterOverrides() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterOverrides",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrRdFolderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRdFolderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStackDriftStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackDriftStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStackGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStackGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) AttrStatusReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackInstance) Props() *StackInstanceProps {
	var returns *StackInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

