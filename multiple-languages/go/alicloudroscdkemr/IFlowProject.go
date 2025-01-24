package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `FlowProject`.
type IFlowProject interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the project was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the project.
	AttrDescription() interface{}
	// Attribute FlowProjectId: The ID of the project.
	AttrFlowProjectId() interface{}
	// Attribute FlowProjectName: The name of the project.
	AttrFlowProjectName() interface{}
	// Attribute GmtModified: The time when the project was modified.
	AttrGmtModified() interface{}
	// Attribute UserId: The ID of the primary account.
	AttrUserId() interface{}
	Props() *FlowProjectProps
}

// The jsii proxy for IFlowProject
type jsiiProxy_IFlowProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlowProject) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) AttrFlowProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowProjectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) AttrFlowProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) AttrGmtModified() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModified",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProject) Props() *FlowProjectProps {
	var returns *FlowProjectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

