package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AlarmContact`.
type IAlarmContact interface {
	alicloudroscdkcore.IResource
	// Attribute AlarmContactName: AlarmContactName.
	AttrAlarmContactName() interface{}
	// Attribute ChannelsAliIm: ChannelsAliIM.
	AttrChannelsAliIm() interface{}
	// Attribute ChannelsDingWebHook: ChannelsDingWebHook.
	AttrChannelsDingWebHook() interface{}
	// Attribute ChannelsMail: ChannelsMail.
	AttrChannelsMail() interface{}
	// Attribute ChannelsSms: ChannelsSMS.
	AttrChannelsSms() interface{}
	// Attribute ChannelsStateAliIm: ChannelsStateAliIM.
	AttrChannelsStateAliIm() interface{}
	// Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
	AttrChannelsStateDingWebHook() interface{}
	// Attribute ChannelsStateMail: ChannelsStateMail.
	AttrChannelsStateMail() interface{}
	// Attribute ChannelsStateSms: ChannelsStateSMS.
	AttrChannelsStateSms() interface{}
	// Attribute ContactGroups: ContactGroups.
	AttrContactGroups() interface{}
	// Attribute CreateTime: CreateTime.
	AttrCreateTime() interface{}
	// Attribute Describe: Describe.
	AttrDescribe() interface{}
	// Attribute Lang: The language type of the alarm.
	AttrLang() interface{}
	// Attribute UpdateTime: UpdateTime.
	AttrUpdateTime() interface{}
	Props() *AlarmContactProps
}

// The jsii proxy for IAlarmContact
type jsiiProxy_IAlarmContact struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlarmContact) AttrAlarmContactName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlarmContactName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsAliIm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsAliIm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsDingWebHook() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsDingWebHook",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsMail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsMail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsSms() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsSms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsStateAliIm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateAliIm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsStateDingWebHook() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateDingWebHook",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsStateMail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateMail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrChannelsStateSms() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChannelsStateSms",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrContactGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrDescribe() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescribe",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrLang() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLang",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmContact) Props() *AlarmContactProps {
	var returns *AlarmContactProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

