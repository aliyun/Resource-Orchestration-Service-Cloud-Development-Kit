package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `DbVault`.
type IDbVault interface {
	alicloudroscdkcore.IResource
	// Attribute Description: Description of the vault.
	AttrDescription() interface{}
	// Attribute RetentionDays: Data retention days of the vault.
	//
	// Data will be deleted when it's older than this time.
	AttrRetentionDays() interface{}
	// Attribute VaultId: Vault ID.
	AttrVaultId() interface{}
	// Attribute VaultName: Display name of the vault.
	AttrVaultName() interface{}
	// Attribute VaultRegionId: The region ID to create the vault.
	AttrVaultRegionId() interface{}
	Props() *DbVaultProps
}

// The jsii proxy for IDbVault
type jsiiProxy_IDbVault struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDbVault) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbVault) AttrRetentionDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetentionDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbVault) AttrVaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbVault) AttrVaultName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbVault) AttrVaultRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbVault) Props() *DbVaultProps {
	var returns *DbVaultProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

