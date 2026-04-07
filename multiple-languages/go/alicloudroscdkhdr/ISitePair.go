package alicloudroscdkhdr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhdr/internal"
)

// Represents a `SitePair`.
type ISitePair interface {
	alicloudroscdkcore.IResource
	// Attribute PrimarySiteId: The ID of the primary site.
	AttrPrimarySiteId() interface{}
	// Attribute SecondarySiteId: The ID of the secondary site.
	AttrSecondarySiteId() interface{}
	// Attribute SitePairId: The ID of the site pair.
	AttrSitePairId() interface{}
	Props() *SitePairProps
}

// The jsii proxy for ISitePair
type jsiiProxy_ISitePair struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISitePair) AttrPrimarySiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimarySiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISitePair) AttrSecondarySiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondarySiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISitePair) AttrSitePairId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSitePairId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISitePair) Props() *SitePairProps {
	var returns *SitePairProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

