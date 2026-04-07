package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `RepoSyncRule`.
type IRepoSyncRule interface {
	alicloudroscdkcore.IResource
	// Attribute SyncRuleId: The ID of the synchronization rule.
	AttrSyncRuleId() interface{}
	Props() *RepoSyncRuleProps
}

// The jsii proxy for IRepoSyncRule
type jsiiProxy_IRepoSyncRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRepoSyncRule) AttrSyncRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSyncRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepoSyncRule) Props() *RepoSyncRuleProps {
	var returns *RepoSyncRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

