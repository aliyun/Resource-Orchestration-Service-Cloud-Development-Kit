package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `DbAgent`.
type IDbAgent interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: Uni backup agent instance ids.
	AttrInstanceIds() interface{}
	// Attribute TaskId: Uni backup agent install task id.
	AttrTaskId() interface{}
	// Attribute UniBackupInstanceDetails: Uni backup agent instance info details.
	AttrUniBackupInstanceDetails() interface{}
	// Attribute UniBackupInstances: Uni backup agent instance info.
	AttrUniBackupInstances() interface{}
	Props() *DbAgentProps
}

// The jsii proxy for IDbAgent
type jsiiProxy_IDbAgent struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDbAgent) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbAgent) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbAgent) AttrUniBackupInstanceDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUniBackupInstanceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbAgent) AttrUniBackupInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUniBackupInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbAgent) Props() *DbAgentProps {
	var returns *DbAgentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

