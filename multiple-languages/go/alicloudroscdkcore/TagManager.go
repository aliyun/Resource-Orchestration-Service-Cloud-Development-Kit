package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// TagManager facilitates a common implementation of tagging for Constructs.
type TagManager interface {
	// The property name for tag values.
	//
	// Normally this is `tags` but some resources choose a different name. Cognito
	// UserPool uses UserPoolTags.
	TagPropertyName() *string
	// Determine if the aspect applies here.
	//
	// Looks at the include and exclude resourceTypeName arrays to determine if
	// the aspect applies here.
	ApplyTagAspectHere(include *[]*string, exclude *[]*string) *bool
	// Returns true if there are any tags defined.
	HasTags() *bool
	// Removes the specified tag from the array if it exists.
	RemoveTag(key *string, priority *float64)
	// Renders tags into the proper format based on TagType.
	RenderTags() interface{}
	// Adds the specified tag to the array of tags.
	SetTag(key *string, value *string, priority *float64, applyToLaunchedInstances *bool)
	// Render the tags in a readable format.
	TagValues() *map[string]*string
}

// The jsii proxy struct for TagManager
type jsiiProxy_TagManager struct {
	_ byte // padding
}

func (j *jsiiProxy_TagManager) TagPropertyName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"tagPropertyName",
		&returns,
	)
	return returns
}


func NewTagManager(tagType TagType, resourceTypeName *string, tagStructure interface{}, options *TagManagerOptions) TagManager {
	_init_.Initialize()

	if err := validateNewTagManagerParameters(tagType, resourceTypeName, options); err != nil {
		panic(err)
	}
	j := jsiiProxy_TagManager{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.TagManager",
		[]interface{}{tagType, resourceTypeName, tagStructure, options},
		&j,
	)

	return &j
}

func NewTagManager_Override(t TagManager, tagType TagType, resourceTypeName *string, tagStructure interface{}, options *TagManagerOptions) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.TagManager",
		[]interface{}{tagType, resourceTypeName, tagStructure, options},
		t,
	)
}

// Check whether the given construct is Taggable.
func TagManager_IsTaggable(construct interface{}) *bool {
	_init_.Initialize()

	if err := validateTagManager_IsTaggableParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.TagManager",
		"isTaggable",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func (t *jsiiProxy_TagManager) ApplyTagAspectHere(include *[]*string, exclude *[]*string) *bool {
	var returns *bool

	_jsii_.Invoke(
		t,
		"applyTagAspectHere",
		[]interface{}{include, exclude},
		&returns,
	)

	return returns
}

func (t *jsiiProxy_TagManager) HasTags() *bool {
	var returns *bool

	_jsii_.Invoke(
		t,
		"hasTags",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (t *jsiiProxy_TagManager) RemoveTag(key *string, priority *float64) {
	if err := t.validateRemoveTagParameters(key, priority); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		t,
		"removeTag",
		[]interface{}{key, priority},
	)
}

func (t *jsiiProxy_TagManager) RenderTags() interface{} {
	var returns interface{}

	_jsii_.Invoke(
		t,
		"renderTags",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (t *jsiiProxy_TagManager) SetTag(key *string, value *string, priority *float64, applyToLaunchedInstances *bool) {
	if err := t.validateSetTagParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		t,
		"setTag",
		[]interface{}{key, value, priority, applyToLaunchedInstances},
	)
}

func (t *jsiiProxy_TagManager) TagValues() *map[string]*string {
	var returns *map[string]*string

	_jsii_.Invoke(
		t,
		"tagValues",
		nil, // no parameters
		&returns,
	)

	return returns
}

