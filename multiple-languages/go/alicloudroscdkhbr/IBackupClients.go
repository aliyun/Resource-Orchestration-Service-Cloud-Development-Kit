package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `BackupClients`.
type IBackupClients interface {
	alicloudroscdkcore.IResource
	// Attribute ClientIds: ID list of clients installed in instances.
	AttrClientIds() interface{}
	// Attribute InstanceIds: ID list of instances to install backup client.
	AttrInstanceIds() interface{}
	Props() *BackupClientsProps
}

// The jsii proxy for IBackupClients
type jsiiProxy_IBackupClients struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackupClients) AttrClientIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupClients) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupClients) Props() *BackupClientsProps {
	var returns *BackupClientsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

