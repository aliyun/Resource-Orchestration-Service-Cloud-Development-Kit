package alicloudroscdkdlf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdlf/internal"
)

// Represents a `Catalog`.
type ICatalog interface {
	alicloudroscdkcore.IResource
	// Attribute CatalogId: Catalog ID.
	AttrCatalogId() interface{}
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

func (j *jsiiProxy_ICatalog) Props() *CatalogProps {
	var returns *CatalogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

