package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `PatchBaselines`.
type IPatchBaselines interface {
	alicloudroscdkcore.IResource
	// Attribute PatchBaselineNames: The list of patch baseline names.
	AttrPatchBaselineNames() interface{}
	// Attribute PatchBaselines: The list of patch baselines.
	AttrPatchBaselines() interface{}
	Props() *PatchBaselinesProps
}

// The jsii proxy for IPatchBaselines
type jsiiProxy_IPatchBaselines struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPatchBaselines) AttrPatchBaselineNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselineNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaselines) AttrPatchBaselines() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselines",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaselines) Props() *PatchBaselinesProps {
	var returns *PatchBaselinesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

