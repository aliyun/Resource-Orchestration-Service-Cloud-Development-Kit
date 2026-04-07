package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `ReplicationVault`.
type IReplicationVault interface {
	alicloudroscdkcore.IResource
	// Attribute VaultId: The ID of the vault.
	AttrVaultId() interface{}
	Props() *ReplicationVaultProps
}

// The jsii proxy for IReplicationVault
type jsiiProxy_IReplicationVault struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IReplicationVault) AttrVaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReplicationVault) Props() *ReplicationVaultProps {
	var returns *ReplicationVaultProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

