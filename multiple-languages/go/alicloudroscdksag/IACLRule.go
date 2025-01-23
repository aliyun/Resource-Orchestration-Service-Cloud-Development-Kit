package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `ACLRule`.
type IACLRule interface {
	alicloudroscdkcore.IResource
	// Attribute AcrId: Access control rule ID.
	AttrAcrId() interface{}
	Props() *ACLRuleProps
}

// The jsii proxy for IACLRule
type jsiiProxy_IACLRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IACLRule) AttrAcrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IACLRule) Props() *ACLRuleProps {
	var returns *ACLRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

