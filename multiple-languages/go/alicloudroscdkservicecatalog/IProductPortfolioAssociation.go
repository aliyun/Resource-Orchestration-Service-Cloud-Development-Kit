package alicloudroscdkservicecatalog

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkservicecatalog/internal"
)

// Represents a `ProductPortfolioAssociation`.
type IProductPortfolioAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute ProductId: The ID of the product.
	AttrProductId() interface{}
	Props() *ProductPortfolioAssociationProps
}

// The jsii proxy for IProductPortfolioAssociation
type jsiiProxy_IProductPortfolioAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProductPortfolioAssociation) AttrProductId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductPortfolioAssociation) Props() *ProductPortfolioAssociationProps {
	var returns *ProductPortfolioAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

