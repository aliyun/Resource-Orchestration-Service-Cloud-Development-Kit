package alicloudroscdkrocketmq5

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/internal"
)

// Represents a `Acl`.
type IAcl interface {
	alicloudroscdkcore.IResource
	// Attribute Actions: The type of operation authorized.
	AttrActions() interface{}
	// Attribute Decision: The decision result of the authorization.
	AttrDecision() interface{}
	// Attribute InstanceId: The ID of the RocketMQ instance.
	AttrInstanceId() interface{}
	// Attribute IpWhitelists: The IP addresses in the whitelist.
	AttrIpWhitelists() interface{}
	// Attribute ResourceName: The name of the resource on which you want to grant permissions.
	AttrResourceName() interface{}
	// Attribute ResourceType: The type of the resource on which you want to grant permissions.
	AttrResourceType() interface{}
	// Attribute Username: The username of the account.
	AttrUsername() interface{}
	Props() *AclProps
}

// The jsii proxy for IAcl
type jsiiProxy_IAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAcl) AttrActions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrDecision() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDecision",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrIpWhitelists() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpWhitelists",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrResourceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsername",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) Props() *AclProps {
	var returns *AclProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

