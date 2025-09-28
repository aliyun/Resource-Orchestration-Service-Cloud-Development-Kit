package alicloudroscdkdatalakeformation

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdatalakeformation/internal"
)

// Represents a `Catalog`.
type ICatalog interface {
	alicloudroscdkcore.IResource
	// Attribute CatalogId: Catalog ID.
	AttrCatalogId() interface{}
	// Attribute IsShared: Whether it is a shared data catalog.
	AttrIsShared() interface{}
	// Attribute Name: Catalog name.
	AttrName() interface{}
	// Attribute Options: Configuration parameters.
	AttrOptions() interface{}
	// Attribute ShareId: Share ID.
	AttrShareId() interface{}
	// Attribute Type: Catalog type.
	AttrType() interface{}
	Props() *CatalogProps
}

// The jsii proxy for ICatalog
type jsiiProxy_ICatalog struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICatalog) AttrCatalogId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCatalogId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) AttrIsShared() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsShared",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) AttrOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) AttrShareId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICatalog) Props() *CatalogProps {
	var returns *CatalogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

