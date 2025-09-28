package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `SupabaseProject`.
type ISupabaseProject interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectId: Supabase instance ID.
	AttrProjectId() interface{}
	Props() *SupabaseProjectProps
}

// The jsii proxy for ISupabaseProject
type jsiiProxy_ISupabaseProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISupabaseProject) AttrProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISupabaseProject) Props() *SupabaseProjectProps {
	var returns *SupabaseProjectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

