package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Dashboard`.
type IDashboard interface {
	alicloudroscdkcore.IResource
	// Attribute DashboardName: Dashboard name.
	AttrDashboardName() interface{}
	// Attribute DisplayName: Display name.
	AttrDisplayName() interface{}
	Props() *DashboardProps
}

// The jsii proxy for IDashboard
type jsiiProxy_IDashboard struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDashboard) AttrDashboardName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDashboardName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDashboard) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDashboard) Props() *DashboardProps {
	var returns *DashboardProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

