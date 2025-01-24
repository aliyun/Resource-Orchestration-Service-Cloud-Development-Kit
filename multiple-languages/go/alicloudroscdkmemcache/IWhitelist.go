package alicloudroscdkmemcache

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmemcache/internal"
)

// Represents a `Whitelist`.
type IWhitelist interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityIpGroupAttribute: The default is empty.
	//
	// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
	AttrSecurityIpGroupAttribute() interface{}
	// Attribute SecurityIpGroupName: Whitelist group.
	AttrSecurityIpGroupName() interface{}
	// Attribute SecurityIps: IP address whitelist to be modified.
	AttrSecurityIps() interface{}
	Props() *WhitelistProps
}

// The jsii proxy for IWhitelist
type jsiiProxy_IWhitelist struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWhitelist) AttrSecurityIpGroupAttribute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpGroupAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWhitelist) AttrSecurityIpGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWhitelist) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWhitelist) Props() *WhitelistProps {
	var returns *WhitelistProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

