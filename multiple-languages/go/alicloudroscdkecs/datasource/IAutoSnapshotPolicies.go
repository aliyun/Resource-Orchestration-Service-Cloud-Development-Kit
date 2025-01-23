package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `AutoSnapshotPolicies`.
type IAutoSnapshotPolicies interface {
	alicloudroscdkcore.IResource
	// Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
	AttrAutoSnapshotPolicies() interface{}
	// Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
	AttrAutoSnapshotPolicyIds() interface{}
	Props() *AutoSnapshotPoliciesProps
}

// The jsii proxy for IAutoSnapshotPolicies
type jsiiProxy_IAutoSnapshotPolicies struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoSnapshotPolicies) AttrAutoSnapshotPolicies() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicies) AttrAutoSnapshotPolicyIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicyIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicies) Props() *AutoSnapshotPoliciesProps {
	var returns *AutoSnapshotPoliciesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

