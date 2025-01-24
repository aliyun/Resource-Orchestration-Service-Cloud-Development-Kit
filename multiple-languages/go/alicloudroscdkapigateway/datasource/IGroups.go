package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Groups`.
type IGroups interface {
	alicloudroscdkcore.IResource
	// Attribute ApiGroupIds: The list of The ApiGateway group ids.
	AttrApiGroupIds() interface{}
	// Attribute ApiGroups: The information about ApiGateway groups.
	AttrApiGroups() interface{}
	Props() *GroupsProps
}

// The jsii proxy for IGroups
type jsiiProxy_IGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroups) AttrApiGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroups) AttrApiGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroups) Props() *GroupsProps {
	var returns *GroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

