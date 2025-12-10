package alicloudroscdkflink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkflink/internal"
)

// Represents a `InstanceV2`.
type IInstanceV2 interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute OrderId: Order information.
	AttrOrderId() interface{}
	// Attribute WorkspaceId: Workspace ID.
	AttrWorkspaceId() interface{}
	Props() *InstanceV2Props
}

// The jsii proxy for IInstanceV2
type jsiiProxy_IInstanceV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) Props() *InstanceV2Props {
	var returns *InstanceV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

