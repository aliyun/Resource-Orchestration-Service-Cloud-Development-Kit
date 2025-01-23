package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `BackendServerToVServerGroupAddition`.
type IBackendServerToVServerGroupAddition interface {
	alicloudroscdkcore.IResource
	// Attribute VServerGroupId: The ID of virtual server group.
	AttrVServerGroupId() interface{}
	Props() *BackendServerToVServerGroupAdditionProps
}

// The jsii proxy for IBackendServerToVServerGroupAddition
type jsiiProxy_IBackendServerToVServerGroupAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackendServerToVServerGroupAddition) AttrVServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackendServerToVServerGroupAddition) Props() *BackendServerToVServerGroupAdditionProps {
	var returns *BackendServerToVServerGroupAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

