package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `Handshake`.
type IHandshake interface {
	alicloudroscdkcore.IResource
	// Attribute HandshakeId: This ID of Resource Manager handshake.
	AttrHandshakeId() interface{}
	// Attribute MasterAccountId: Resource account master account ID.
	AttrMasterAccountId() interface{}
	// Attribute MasterAccountName: The name of the main account of the resource directory.
	AttrMasterAccountName() interface{}
	// Attribute Note: Remarks.
	AttrNote() interface{}
	// Attribute ResourceDirectoryId: Resource directory ID.
	AttrResourceDirectoryId() interface{}
	// Attribute TargetEntity: Invited account ID or login email.
	AttrTargetEntity() interface{}
	// Attribute TargetType: Type of account being invited.
	//
	// Valid values: Account, Email.
	AttrTargetType() interface{}
	Props() *HandshakeProps
}

// The jsii proxy for IHandshake
type jsiiProxy_IHandshake struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHandshake) AttrHandshakeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHandshakeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrMasterAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrMasterAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrNote() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNote",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrResourceDirectoryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceDirectoryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrTargetEntity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetEntity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) AttrTargetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHandshake) Props() *HandshakeProps {
	var returns *HandshakeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

