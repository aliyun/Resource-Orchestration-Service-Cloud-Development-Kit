package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBClusterAccount`.
type IEnterpriseDBClusterAccount interface {
	alicloudroscdkcore.IResource
	// Attribute Account: The name of the database account.
	AttrAccount() interface{}
	// Attribute AccountType: The type of the database account.
	AttrAccountType() interface{}
	// Attribute Description: The description of the account.
	AttrDescription() interface{}
	// Attribute DmlAuthSetting: The information about permissions.
	AttrDmlAuthSetting() interface{}
	Props() *EnterpriseDBClusterAccountProps
}

// The jsii proxy for IEnterpriseDBClusterAccount
type jsiiProxy_IEnterpriseDBClusterAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBClusterAccount) AttrAccount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterAccount) AttrAccountType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterAccount) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterAccount) AttrDmlAuthSetting() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDmlAuthSetting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterAccount) Props() *EnterpriseDBClusterAccountProps {
	var returns *EnterpriseDBClusterAccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

