package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `SupabaseProject`.
type ISupabaseProject interface {
	alicloudroscdkcore.IResource
	// Attribute ApiKeys: API keys.
	AttrApiKeys() interface{}
	// Attribute Eni: Network interface.
	AttrEni() interface{}
	// Attribute PrivateConnectUrl: Private connection URL.
	AttrPrivateConnectUrl() interface{}
	// Attribute ProjectId: Supabase instance ID.
	AttrProjectId() interface{}
	// Attribute PublicConnectUrl: Public connection URL.
	AttrPublicConnectUrl() interface{}
	Props() *SupabaseProjectProps
}

// The jsii proxy for ISupabaseProject
type jsiiProxy_ISupabaseProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISupabaseProject) AttrApiKeys() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiKeys",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISupabaseProject) AttrEni() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEni",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISupabaseProject) AttrPrivateConnectUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateConnectUrl",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_ISupabaseProject) AttrPublicConnectUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectUrl",
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

