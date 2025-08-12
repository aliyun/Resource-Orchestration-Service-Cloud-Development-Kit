package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `EtlV2`.
type IEtlV2 interface {
	alicloudroscdkcore.IResource
	// Attribute Name: ETL name.
	AttrName() interface{}
	Props() *EtlV2Props
}

// The jsii proxy for IEtlV2
type jsiiProxy_IEtlV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEtlV2) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEtlV2) Props() *EtlV2Props {
	var returns *EtlV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

