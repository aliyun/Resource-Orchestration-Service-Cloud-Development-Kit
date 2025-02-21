package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `AutoSnapshotPolicy`.
type IAutoSnapshotPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute AutoSnapshotPolicyId: The automatic snapshot policy ID.
	AttrAutoSnapshotPolicyId() interface{}
	Props() *AutoSnapshotPolicyProps
}

// The jsii proxy for IAutoSnapshotPolicy
type jsiiProxy_IAutoSnapshotPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) Props() *AutoSnapshotPolicyProps {
	var returns *AutoSnapshotPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

