package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/datasource/internal"
)

// Represents a `Bucket`.
type IBucket interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the Bucket.
	AttrCreateTime() interface{}
	// Attribute ExtranetEndpoint: The domain name of the Bucket.
	AttrExtranetEndpoint() interface{}
	// Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
	AttrIntranetEndpoint() interface{}
	// Attribute Location: The region where the Bucket is located.
	AttrLocation() interface{}
	// Attribute Name: Bucket name.
	AttrName() interface{}
	// Attribute Owner: Container for storing Bucket owner information.
	AttrOwner() interface{}
	// Attribute StorageClass: The storage type of the Bucket.
	AttrStorageClass() interface{}
	Props() *BucketProps
}

// The jsii proxy for IBucket
type jsiiProxy_IBucket struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucket) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrExtranetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtranetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrIntranetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocation",
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

func (j *jsiiProxy_IBucket) AttrOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucket) AttrStorageClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageClass",
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

