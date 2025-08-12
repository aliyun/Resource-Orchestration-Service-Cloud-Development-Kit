package alicloudroscdkgreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgreen/internal"
)

// Represents a `InspectionConfigEnable`.
type IInspectionConfigEnable interface {
	alicloudroscdkcore.IResource
	Props() *InspectionConfigEnableProps
}

// The jsii proxy for IInspectionConfigEnable
type jsiiProxy_IInspectionConfigEnable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInspectionConfigEnable) Props() *InspectionConfigEnableProps {
	var returns *InspectionConfigEnableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

