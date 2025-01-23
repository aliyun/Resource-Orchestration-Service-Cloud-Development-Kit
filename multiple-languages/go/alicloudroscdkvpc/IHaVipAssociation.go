package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `HaVipAssociation`.
type IHaVipAssociation interface {
	alicloudroscdkcore.IResource
	Props() *HaVipAssociationProps
}

// The jsii proxy for IHaVipAssociation
type jsiiProxy_IHaVipAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHaVipAssociation) Props() *HaVipAssociationProps {
	var returns *HaVipAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

