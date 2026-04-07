package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketCnameToken`.
type IBucketCnameToken interface {
	alicloudroscdkcore.IResource
	// Attribute Bucket: The name of the bucket.
	AttrBucket() interface{}
	// Attribute Domain: The custom domain.
	AttrDomain() interface{}
	// Attribute ExpireTime: Token Expiration Time.
	AttrExpireTime() interface{}
	// Attribute Token: Token used to verify domain ownership.
	AttrToken() interface{}
	Props() *BucketCnameTokenProps
}

// The jsii proxy for IBucketCnameToken
type jsiiProxy_IBucketCnameToken struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketCnameToken) AttrBucket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBucket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketCnameToken) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketCnameToken) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketCnameToken) AttrToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketCnameToken) Props() *BucketCnameTokenProps {
	var returns *BucketCnameTokenProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

