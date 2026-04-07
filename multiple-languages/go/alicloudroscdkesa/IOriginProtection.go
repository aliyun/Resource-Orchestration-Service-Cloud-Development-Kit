package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `OriginProtection`.
type IOriginProtection interface {
	alicloudroscdkcore.IResource
	// Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.
	AttrCurrentIpWhitelist() interface{}
	// Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.
	AttrDiffIpWhitelist() interface{}
	// Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.
	AttrLatestIpWhitelist() interface{}
	// Attribute OriginConverge: The IP convergence status.
	AttrOriginConverge() interface{}
	// Attribute OriginProtection: Indicates whether origin protection is enabled.
	AttrOriginProtection() interface{}
	// Attribute SiteId: The website ID.
	AttrSiteId() interface{}
	Props() *OriginProtectionProps
}

// The jsii proxy for IOriginProtection
type jsiiProxy_IOriginProtection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginProtection) AttrCurrentIpWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentIpWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) AttrDiffIpWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiffIpWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) AttrLatestIpWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestIpWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) AttrOriginConverge() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginConverge",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) AttrOriginProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginProtection) Props() *OriginProtectionProps {
	var returns *OriginProtectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

