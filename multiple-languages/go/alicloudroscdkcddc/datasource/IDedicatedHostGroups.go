package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DedicatedHostGroups`.
type IDedicatedHostGroups interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
	AttrDedicatedHostGroupIds() interface{}
	// Attribute DedicatedHostGroups: The list of dedicated host groups.
	AttrDedicatedHostGroups() interface{}
	Props() *DedicatedHostGroupsProps
}

// The jsii proxy for IDedicatedHostGroups
type jsiiProxy_IDedicatedHostGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHostGroups) AttrDedicatedHostGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostGroups) AttrDedicatedHostGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostGroups) Props() *DedicatedHostGroupsProps {
	var returns *DedicatedHostGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

