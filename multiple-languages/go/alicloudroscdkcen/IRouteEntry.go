package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `RouteEntry`.
type IRouteEntry interface {
	alicloudroscdkcore.IResource
	Props() *RouteEntryProps
}

// The jsii proxy for IRouteEntry
type jsiiProxy_IRouteEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteEntry) Props() *RouteEntryProps {
	var returns *RouteEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

