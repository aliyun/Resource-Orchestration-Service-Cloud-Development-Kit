package alicloudroscdklindorm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdklindorm/internal"
)

// Represents a `MultiZoneInstance`.
type IMultiZoneInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AuthInfos: The list of the Lindorm instance auth infos.
	AttrAuthInfos() interface{}
	// Attribute InstanceId: The ID of the Lindorm instance that is created.
	AttrInstanceId() interface{}
	// Attribute JdbcUrlList: The list of the jdbc connection address.
	AttrJdbcUrlList() interface{}
	Props() *MultiZoneInstanceProps
}

// The jsii proxy for IMultiZoneInstance
type jsiiProxy_IMultiZoneInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMultiZoneInstance) AttrAuthInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneInstance) AttrJdbcUrlList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJdbcUrlList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMultiZoneInstance) Props() *MultiZoneInstanceProps {
	var returns *MultiZoneInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

