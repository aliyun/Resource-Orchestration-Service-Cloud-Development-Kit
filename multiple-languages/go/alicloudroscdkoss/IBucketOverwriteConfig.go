package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketOverwriteConfig`.
type IBucketOverwriteConfig interface {
	alicloudroscdkcore.IResource
	// Attribute Rule: Forbid overwrite rule.
	AttrRule() interface{}
	Props() *BucketOverwriteConfigProps
}

// The jsii proxy for IBucketOverwriteConfig
type jsiiProxy_IBucketOverwriteConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketOverwriteConfig) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketOverwriteConfig) Props() *BucketOverwriteConfigProps {
	var returns *BucketOverwriteConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

