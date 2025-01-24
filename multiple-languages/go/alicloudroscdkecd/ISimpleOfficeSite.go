package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `SimpleOfficeSite`.
type ISimpleOfficeSite interface {
	alicloudroscdkcore.IResource
	// Attribute OfficeSiteId: The ID of the workspace.
	AttrOfficeSiteId() interface{}
	Props() *SimpleOfficeSiteProps
}

// The jsii proxy for ISimpleOfficeSite
type jsiiProxy_ISimpleOfficeSite struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISimpleOfficeSite) AttrOfficeSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOfficeSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISimpleOfficeSite) Props() *SimpleOfficeSiteProps {
	var returns *SimpleOfficeSiteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

