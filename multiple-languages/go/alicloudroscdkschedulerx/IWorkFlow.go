package alicloudroscdkschedulerx

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkschedulerx/internal"
)

// Represents a `WorkFlow`.
type IWorkFlow interface {
	alicloudroscdkcore.IResource
	// Attribute Description: Workflow description.
	AttrDescription() interface{}
	// Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
	AttrGroupId() interface{}
	// Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.
	//
	// The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
	AttrMaxConcurrency() interface{}
	// Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
	AttrNamespace() interface{}
	// Attribute TimeExpression: Time expression, which is set based on the selected time type.
	AttrTimeExpression() interface{}
	// Attribute TimeType: Time type.
	AttrTimeType() interface{}
	// Attribute WorkFlowId: workflow id.
	AttrWorkFlowId() interface{}
	// Attribute WorkflowName: Workflow Name.
	AttrWorkflowName() interface{}
	Props() *WorkFlowProps
}

// The jsii proxy for IWorkFlow
type jsiiProxy_IWorkFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkFlow) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrMaxConcurrency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxConcurrency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrTimeExpression() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeExpression",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrTimeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrWorkFlowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkFlowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) AttrWorkflowName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkflowName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkFlow) Props() *WorkFlowProps {
	var returns *WorkFlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

