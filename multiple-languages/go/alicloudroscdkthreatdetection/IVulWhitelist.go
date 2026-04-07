package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `VulWhitelist`.
type IVulWhitelist interface {
	alicloudroscdkcore.IResource
	// Attribute Reason: The reason why you add the vulnerability to the whitelist.
	AttrReason() interface{}
	// Attribute TargetInfo: The applicable scope of the whitelist.
	AttrTargetInfo() interface{}
	// Attribute VulWhitelistId: The ID of the whitelist.
	AttrVulWhitelistId() interface{}
	// Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
	AttrWhitelist() interface{}
	Props() *VulWhitelistProps
}

// The jsii proxy for IVulWhitelist
type jsiiProxy_IVulWhitelist struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVulWhitelist) AttrReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVulWhitelist) AttrTargetInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVulWhitelist) AttrVulWhitelistId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVulWhitelistId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVulWhitelist) AttrWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVulWhitelist) Props() *VulWhitelistProps {
	var returns *VulWhitelistProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

