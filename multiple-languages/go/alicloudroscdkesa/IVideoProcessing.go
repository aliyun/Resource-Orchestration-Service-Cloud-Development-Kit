package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `VideoProcessing`.
type IVideoProcessing interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The configuration type.
	AttrConfigType() interface{}
	// Attribute FlvSeekEnd: Custom FLV end parameters.
	AttrFlvSeekEnd() interface{}
	// Attribute FlvSeekStart: Custom FLV start parameters.
	AttrFlvSeekStart() interface{}
	// Attribute FlvVideoSeekMode: FLV drag mode.
	AttrFlvVideoSeekMode() interface{}
	// Attribute Mp4SeekEnd: Custom mp4 end parameters.
	AttrMp4SeekEnd() interface{}
	// Attribute Mp4SeekStart: Custom mp4 start parameters.
	AttrMp4SeekStart() interface{}
	// Attribute Rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleName() interface{}
	// Attribute Sequence: The rule execution order prioritizes lower numerical values.
	//
	// It is only applicable when setting or modifying the order of individual rule configurations.
	AttrSequence() interface{}
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute VideoSeekEnable: Drag and drop the play function switch.
	AttrVideoSeekEnable() interface{}
	Props() *VideoProcessingProps
}

// The jsii proxy for IVideoProcessing
type jsiiProxy_IVideoProcessing struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVideoProcessing) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrFlvSeekEnd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlvSeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrFlvSeekStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlvSeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrFlvVideoSeekMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlvVideoSeekMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrMp4SeekEnd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMp4SeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrMp4SeekStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMp4SeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) AttrVideoSeekEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoSeekEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVideoProcessing) Props() *VideoProcessingProps {
	var returns *VideoProcessingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

