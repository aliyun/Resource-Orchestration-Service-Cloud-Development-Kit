package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketLogging`.
type IBucketLogging interface {
	alicloudroscdkcore.IResource
	// Attribute LoggingRole: Authorization role used for bucket logging.
	AttrLoggingRole() interface{}
	// Attribute TargetBucket: The bucket that stores access logs.
	AttrTargetBucket() interface{}
	// Attribute TargetPrefix: The prefix of the saved log objects.
	//
	// This element can be left empty.
	AttrTargetPrefix() interface{}
	Props() *BucketLoggingProps
}

// The jsii proxy for IBucketLogging
type jsiiProxy_IBucketLogging struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketLogging) AttrLoggingRole() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoggingRole",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketLogging) AttrTargetBucket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetBucket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketLogging) AttrTargetPrefix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetPrefix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketLogging) Props() *BucketLoggingProps {
	var returns *BucketLoggingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

