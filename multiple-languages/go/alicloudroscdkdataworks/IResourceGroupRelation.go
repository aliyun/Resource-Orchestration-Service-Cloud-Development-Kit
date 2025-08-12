package alicloudroscdkdataworks

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdataworks/internal"
)

// Represents a `ResourceGroupRelation`.
type IResourceGroupRelation interface {
	alicloudroscdkcore.IResource
	Props() *ResourceGroupRelationProps
}

// The jsii proxy for IResourceGroupRelation
type jsiiProxy_IResourceGroupRelation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroupRelation) Props() *ResourceGroupRelationProps {
	var returns *ResourceGroupRelationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

