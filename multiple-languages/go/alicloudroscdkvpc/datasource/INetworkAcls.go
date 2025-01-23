package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `NetworkAcls`.
type INetworkAcls interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkAclIds: The list of The network acl ids.
	AttrNetworkAclIds() interface{}
	// Attribute NetworkAcls: The list of The network acls.
	AttrNetworkAcls() interface{}
	Props() *NetworkAclsProps
}

// The jsii proxy for INetworkAcls
type jsiiProxy_INetworkAcls struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkAcls) AttrNetworkAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkAcls) AttrNetworkAcls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAcls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkAcls) Props() *NetworkAclsProps {
	var returns *NetworkAclsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

