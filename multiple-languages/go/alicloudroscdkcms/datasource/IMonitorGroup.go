package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitorGroup`.
type IMonitorGroup interface {
	alicloudroscdkcore.IResource
	// Attribute BindUrl: BindUrl.
	AttrBindUrl() interface{}
	// Attribute ContactGroups: AlarmContactGroupName.
	AttrContactGroups() interface{}
	// Attribute CreateTime: GmtCreate.
	AttrCreateTime() interface{}
	// Attribute DynamicTagRuleId: DynamicTagRuleId.
	AttrDynamicTagRuleId() interface{}
	// Attribute GmtModified: GmtModified.
	AttrGmtModified() interface{}
	// Attribute GroupId: GroupId.
	AttrGroupId() interface{}
	// Attribute MonitorGroupName: MonitorGroupName.
	AttrMonitorGroupName() interface{}
	// Attribute ServiceId: ServiceId.
	AttrServiceId() interface{}
	// Attribute Tags: Tags.
	AttrTags() interface{}
	// Attribute TemplateIds: TemplateIds.
	AttrTemplateIds() interface{}
	// Attribute Type: Type.
	AttrType() interface{}
	Props() *MonitorGroupProps
}

// The jsii proxy for IMonitorGroup
type jsiiProxy_IMonitorGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitorGroup) AttrBindUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrContactGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrDynamicTagRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDynamicTagRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrGmtModified() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModified",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrMonitorGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrTemplateIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroup) Props() *MonitorGroupProps {
	var returns *MonitorGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

