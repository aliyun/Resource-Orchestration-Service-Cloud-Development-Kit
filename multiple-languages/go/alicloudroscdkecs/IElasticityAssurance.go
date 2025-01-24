package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `ElasticityAssurance`.
type IElasticityAssurance interface {
	alicloudroscdkcore.IResource
	// Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
	AttrPrivatePoolOptionsId() interface{}
	Props() *ElasticityAssuranceProps
}

// The jsii proxy for IElasticityAssurance
type jsiiProxy_IElasticityAssurance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IElasticityAssurance) AttrPrivatePoolOptionsId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticityAssurance) Props() *ElasticityAssuranceProps {
	var returns *ElasticityAssuranceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

