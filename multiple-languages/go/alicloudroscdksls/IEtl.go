package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Etl`.
type IEtl interface {
	alicloudroscdkcore.IResource
	// Attribute Name: ETL name.
	AttrName() interface{}
	Props() *EtlProps
}

// The jsii proxy for IEtl
type jsiiProxy_IEtl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEtl) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEtl) Props() *EtlProps {
	var returns *EtlProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

