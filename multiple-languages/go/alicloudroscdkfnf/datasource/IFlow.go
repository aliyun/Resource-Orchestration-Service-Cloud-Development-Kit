package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/datasource/internal"
)

// Represents a `Flow`.
type IFlow interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the flow was created.
	AttrCreateTime() interface{}
	// Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.
	//
	// Considering compatibility, the system supports the two flow definition specifications.
	AttrDefinition() interface{}
	// Attribute Description: The description of the flow.
	AttrDescription() interface{}
	// Attribute FlowId: The unique ID of the flow.
	AttrFlowId() interface{}
	// Attribute FlowName: The name of the flow.
	//
	// The name must be unique within a region for the same Alibaba Cloud account.
	AttrFlowName() interface{}
	// Attribute LastModifiedTime: The time when the flow was last modified.
	AttrLastModifiedTime() interface{}
	// Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.
	//
	// During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
	AttrRoleArn() interface{}
	// Attribute Type: The type of the flow.
	//
	// Valid values are FDL or DEFAULT.
	AttrType() interface{}
	Props() *FlowProps
}

// The jsii proxy for IFlow
type jsiiProxy_IFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlow) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrDefinition() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefinition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrFlowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrFlowName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrLastModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrRoleArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) Props() *FlowProps {
	var returns *FlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

