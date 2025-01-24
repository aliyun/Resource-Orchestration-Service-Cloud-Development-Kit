package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `QosAssociation`.
type IQosAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute QosId: The ID of the QoS policy.
	AttrQosId() interface{}
	// Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
	AttrSmartAgId() interface{}
	Props() *QosAssociationProps
}

// The jsii proxy for IQosAssociation
type jsiiProxy_IQosAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQosAssociation) AttrQosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQosAssociation) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQosAssociation) Props() *QosAssociationProps {
	var returns *QosAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

