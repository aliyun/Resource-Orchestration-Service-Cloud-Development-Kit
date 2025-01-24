package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `UserDefineRegion`.
type IUserDefineRegion interface {
	alicloudroscdkcore.IResource
	// Attribute BelongRegion: Under the physical region ID.
	AttrBelongRegion() interface{}
	// Attribute DebugEnable: Whether debug is enable.
	AttrDebugEnable() interface{}
	// Attribute Id: Resource ID.
	AttrId() interface{}
	// Attribute RegionName: Region name.
	AttrRegionName() interface{}
	// Attribute UserId: User account ID.
	AttrUserId() interface{}
	Props() *UserDefineRegionProps
}

// The jsii proxy for IUserDefineRegion
type jsiiProxy_IUserDefineRegion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserDefineRegion) AttrBelongRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBelongRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegion) AttrDebugEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDebugEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegion) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegion) AttrRegionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegion) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegion) Props() *UserDefineRegionProps {
	var returns *UserDefineRegionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

