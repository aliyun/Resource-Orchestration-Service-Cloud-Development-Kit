package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `CustomCheckStandardPolicy`.
type ICustomCheckStandardPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute PolicyId: The ID of the custom check policy.
	AttrPolicyId() interface{}
	Props() *CustomCheckStandardPolicyProps
}

// The jsii proxy for ICustomCheckStandardPolicy
type jsiiProxy_ICustomCheckStandardPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomCheckStandardPolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckStandardPolicy) Props() *CustomCheckStandardPolicyProps {
	var returns *CustomCheckStandardPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

