package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `AttackPathWhitelist`.
type IAttackPathWhitelist interface {
	alicloudroscdkcore.IResource
	// Attribute AttackPathAssetList: List of attack path assets.
	AttrAttackPathAssetList() interface{}
	// Attribute AttackPathWhitelistId: The attack path whitelist ID.
	AttrAttackPathWhitelistId() interface{}
	// Attribute PathName: The whitelist path name.
	AttrPathName() interface{}
	// Attribute PathType: The whitelist path type.
	AttrPathType() interface{}
	// Attribute Remark: Remark information.
	AttrRemark() interface{}
	// Attribute WhitelistName: The whitelist name.
	AttrWhitelistName() interface{}
	// Attribute WhitelistType: The whitelist type.
	AttrWhitelistType() interface{}
	Props() *AttackPathWhitelistProps
}

// The jsii proxy for IAttackPathWhitelist
type jsiiProxy_IAttackPathWhitelist struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrAttackPathAssetList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttackPathAssetList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrAttackPathWhitelistId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttackPathWhitelistId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrPathName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPathName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrPathType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPathType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrWhitelistName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWhitelistName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) AttrWhitelistType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWhitelistType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttackPathWhitelist) Props() *AttackPathWhitelistProps {
	var returns *AttackPathWhitelistProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

