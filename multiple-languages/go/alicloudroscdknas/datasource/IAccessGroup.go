package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/datasource/internal"
)

// Represents a `AccessGroup`.
type IAccessGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AccessGroupName: The name of the permission group.
	AttrAccessGroupName() interface{}
	// Attribute AccessGroupType: Permission group types, including VPC and Classic.
	AttrAccessGroupType() interface{}
	// Attribute Description: Permission group description information.
	AttrDescription() interface{}
	// Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
	AttrMountTargetCount() interface{}
	// Attribute RuleCount: The number of permission group rules contained in this permission group.
	AttrRuleCount() interface{}
	Props() *AccessGroupProps
}

// The jsii proxy for IAccessGroup
type jsiiProxy_IAccessGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessGroup) AttrAccessGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) AttrAccessGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) AttrMountTargetCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountTargetCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) AttrRuleCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) Props() *AccessGroupProps {
	var returns *AccessGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

