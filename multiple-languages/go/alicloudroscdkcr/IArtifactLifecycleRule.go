package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `ArtifactLifecycleRule`.
type IArtifactLifecycleRule interface {
	alicloudroscdkcore.IResource
	// Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
	AttrArtifactLifecycleRuleId() interface{}
	// Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
	AttrAuto() interface{}
	// Attribute CreateTime: Creation time of the lifecycle management rule.
	AttrCreateTime() interface{}
	// Attribute InstanceId: ACR Instance ID.
	AttrInstanceId() interface{}
	// Attribute ModifiedTime: Change time of the lifecycle management rule.
	AttrModifiedTime() interface{}
	// Attribute NamespaceName: The name of the namespace.
	AttrNamespaceName() interface{}
	// Attribute RepoName: The name of the image repository.
	AttrRepoName() interface{}
	// Attribute RetentionTagCount: The number of images that you want to retain.
	AttrRetentionTagCount() interface{}
	// Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
	AttrScheduleTime() interface{}
	// Attribute Scope: The deletion scope.
	AttrScope() interface{}
	// Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
	AttrTagRegexp() interface{}
	Props() *ArtifactLifecycleRuleProps
}

// The jsii proxy for IArtifactLifecycleRule
type jsiiProxy_IArtifactLifecycleRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrArtifactLifecycleRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArtifactLifecycleRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrAuto() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuto",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrNamespaceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrRepoName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrRetentionTagCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetentionTagCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrScheduleTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduleTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) AttrTagRegexp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTagRegexp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IArtifactLifecycleRule) Props() *ArtifactLifecycleRuleProps {
	var returns *ArtifactLifecycleRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

