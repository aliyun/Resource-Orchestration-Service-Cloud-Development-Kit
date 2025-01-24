package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/datasource/internal"
)

// Represents a `Vaults`.
type IVaults interface {
	alicloudroscdkcore.IResource
	// Attribute VaultIds: The list of vault IDs.
	AttrVaultIds() interface{}
	// Attribute Vaults: The list of vaults.
	AttrVaults() interface{}
	Props() *VaultsProps
}

// The jsii proxy for IVaults
type jsiiProxy_IVaults struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVaults) AttrVaultIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVaults) AttrVaults() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaults",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVaults) Props() *VaultsProps {
	var returns *VaultsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

