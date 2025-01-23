package alicloudroscdkpaiplugin

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaiplugin/internal"
)

// Represents a `Campaign`.
type ICampaign interface {
	alicloudroscdkcore.IResource
	// Attribute CampaignId: The Campaign ID created this time.
	AttrCampaignId() interface{}
	Props() *CampaignProps
}

// The jsii proxy for ICampaign
type jsiiProxy_ICampaign struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICampaign) AttrCampaignId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCampaignId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICampaign) Props() *CampaignProps {
	var returns *CampaignProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

