package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `AttackPathSensitiveAssetConfig`.
type IAttackPathSensitiveAssetConfig interface {
	alicloudroscdkcore.IResource
	// Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
	AttrAttackPathAssetList() interface{}
	// Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
	AttrAttackPathSensitiveAssetConfigId() interface{}
	Props() *AttackPathSensitiveAssetConfigProps
}

// The jsii proxy for IAttackPathSensitiveAssetConfig
type jsiiProxy_IAttackPathSensitiveAssetConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAttackPathSensitiveAssetConfig) AttrAttackPathAssetList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttackPathAssetList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathSensitiveAssetConfig) AttrAttackPathSensitiveAssetConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttackPathSensitiveAssetConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathSensitiveAssetConfig) Props() *AttackPathSensitiveAssetConfigProps {
	var returns *AttackPathSensitiveAssetConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

