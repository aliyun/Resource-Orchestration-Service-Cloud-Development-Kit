package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketPublicAccessBlock`.
type IBucketPublicAccessBlock interface {
	alicloudroscdkcore.IResource
	// Attribute BlockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
	AttrBlockPublicAccess() interface{}
	Props() *BucketPublicAccessBlockProps
}

// The jsii proxy for IBucketPublicAccessBlock
type jsiiProxy_IBucketPublicAccessBlock struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketPublicAccessBlock) AttrBlockPublicAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBlockPublicAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketPublicAccessBlock) Props() *BucketPublicAccessBlockProps {
	var returns *BucketPublicAccessBlockProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

