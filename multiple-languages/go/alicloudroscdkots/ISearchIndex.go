package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `SearchIndex`.
type ISearchIndex interface {
	alicloudroscdkcore.IResource
	// Attribute IndexName: Index name.
	AttrIndexName() interface{}
	Props() *SearchIndexProps
}

// The jsii proxy for ISearchIndex
type jsiiProxy_ISearchIndex struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISearchIndex) AttrIndexName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIndexName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISearchIndex) Props() *SearchIndexProps {
	var returns *SearchIndexProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

