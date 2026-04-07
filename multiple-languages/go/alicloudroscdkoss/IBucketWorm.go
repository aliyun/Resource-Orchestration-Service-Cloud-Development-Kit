package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketWorm`.
type IBucketWorm interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute ExpirationDate: Retention Policy Expiration Time.
	AttrExpirationDate() interface{}
	// Attribute RetentionPeriodInDays: The specified number of days to retain the Object.
	AttrRetentionPeriodInDays() interface{}
	// Attribute WormId: The ID of the retention policy.
	AttrWormId() interface{}
	Props() *BucketWormProps
}

// The jsii proxy for IBucketWorm
type jsiiProxy_IBucketWorm struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketWorm) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketWorm) AttrExpirationDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpirationDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketWorm) AttrRetentionPeriodInDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetentionPeriodInDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketWorm) AttrWormId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWormId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketWorm) Props() *BucketWormProps {
	var returns *BucketWormProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

