package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `Bucket`.
type IBucket interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DomainName: The public DNS name of the specified bucket.
	AttrDomainName() interface{}
	// Attribute InternalDomainName: The internal DNS name of the specified bucket.
	AttrInternalDomainName() interface{}
	// Attribute Name: The name of Bucket.
	AttrName() interface{}
	Props() *BucketProps
}

// The jsii proxy for IBucket
type jsiiProxy_IBucket struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucket) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrInternalDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternalDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) Props() *BucketProps {
	var returns *BucketProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

