package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `WebRule`.
type IWebRule interface {
	alicloudroscdkcore.IResource
	// Attribute Domain: The domain name of the website that you want to add to the instance.
	AttrDomain() interface{}
	Props() *WebRuleProps
}

// The jsii proxy for IWebRule
type jsiiProxy_IWebRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWebRule) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebRule) Props() *WebRuleProps {
	var returns *WebRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

