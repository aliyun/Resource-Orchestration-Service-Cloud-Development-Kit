package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBClusterSecurityIP`.
type IEnterpriseDBClusterSecurityIP interface {
	alicloudroscdkcore.IResource
	// Attribute GroupName: The name of the whitelist whose settings you want to modify.
	AttrGroupName() interface{}
	// Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
	AttrSecurityIpList() interface{}
	// Attribute SecurityIpType: The type of IP address.
	AttrSecurityIpType() interface{}
	// Attribute WhitelistNetType: The network type of the whitelist.
	AttrWhitelistNetType() interface{}
	Props() *EnterpriseDBClusterSecurityIPProps
}

// The jsii proxy for IEnterpriseDBClusterSecurityIP
type jsiiProxy_IEnterpriseDBClusterSecurityIP struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBClusterSecurityIP) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterSecurityIP) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterSecurityIP) AttrSecurityIpType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterSecurityIP) AttrWhitelistNetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWhitelistNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterSecurityIP) Props() *EnterpriseDBClusterSecurityIPProps {
	var returns *EnterpriseDBClusterSecurityIPProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

