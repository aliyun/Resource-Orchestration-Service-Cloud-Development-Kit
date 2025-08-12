package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `AnalyzeProductLog`.
type IAnalyzeProductLog interface {
	alicloudroscdkcore.IResource
	Props() *AnalyzeProductLogProps
}

// The jsii proxy for IAnalyzeProductLog
type jsiiProxy_IAnalyzeProductLog struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAnalyzeProductLog) Props() *AnalyzeProductLogProps {
	var returns *AnalyzeProductLogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

