package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `RecommendInstanceTypes`.
type IRecommendInstanceTypes interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceTypeIds: The list of instance type ids.
	//
	// Note that instance type ids are not unique.
	AttrInstanceTypeIds() interface{}
	// Attribute InstanceTypes: The list of instance types, including information such as cores and memory.
	AttrInstanceTypes() interface{}
	Props() *RecommendInstanceTypesProps
}

// The jsii proxy for IRecommendInstanceTypes
type jsiiProxy_IRecommendInstanceTypes struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRecommendInstanceTypes) AttrInstanceTypeIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceTypeIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecommendInstanceTypes) AttrInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecommendInstanceTypes) Props() *RecommendInstanceTypesProps {
	var returns *RecommendInstanceTypesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

