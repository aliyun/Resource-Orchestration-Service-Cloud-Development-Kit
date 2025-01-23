package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/datasource/internal"
)

// Represents a `Buckets`.
type IBuckets interface {
	alicloudroscdkcore.IResource
	// Attribute BucketNames: The list of bucket names.
	AttrBucketNames() interface{}
	// Attribute Buckets: The list of buckets.
	AttrBuckets() interface{}
	Props() *BucketsProps
}

// The jsii proxy for IBuckets
type jsiiProxy_IBuckets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBuckets) AttrBucketNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBucketNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBuckets) AttrBuckets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBuckets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBuckets) Props() *BucketsProps {
	var returns *BucketsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

