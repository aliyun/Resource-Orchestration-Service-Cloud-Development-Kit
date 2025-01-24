package alicloudroscdklindorm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdklindorm/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AuthInfos: The list of the Lindorm instance auth infos.
	AttrAuthInfos() interface{}
	// Attribute InstanceId: The ID of the Lindorm instance that is created.
	AttrInstanceId() interface{}
	// Attribute JdbcUrlList: The list of the jdbc connection address.
	AttrJdbcUrlList() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAuthInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrJdbcUrlList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJdbcUrlList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

