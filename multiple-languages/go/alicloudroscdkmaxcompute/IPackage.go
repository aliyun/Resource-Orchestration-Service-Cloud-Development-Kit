package alicloudroscdkmaxcompute

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmaxcompute/internal"
)

// Represents a `Package`.
type IPackage interface {
	alicloudroscdkcore.IResource
	// Attribute PackageName: The name of the project package.
	AttrPackageName() interface{}
	// Attribute ProjectName: The name of the MaxCompute project.
	AttrProjectName() interface{}
	Props() *PackageProps
}

// The jsii proxy for IPackage
type jsiiProxy_IPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPackage) AttrPackageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPackageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPackage) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPackage) Props() *PackageProps {
	var returns *PackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

