package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `LayerVersion`.
type ILayerVersion interface {
	alicloudroscdkcore.IResource
	// Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.
	AttrAcl() interface{}
	// Attribute CodeSize: The code package size of the layer, in bytes.
	AttrCodeSize() interface{}
	// Attribute CompatibleRuntime: List of runtime environments supported by the layer.
	AttrCompatibleRuntime() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Description: Description of the version.
	AttrDescription() interface{}
	// Attribute LayerName: Name of the layer.
	AttrLayerName() interface{}
	// Attribute LayerVersionArn: Layer version ARN.
	//
	// The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
	AttrLayerVersionArn() interface{}
	// Attribute License: Layer License Agreement.
	AttrLicense() interface{}
	// Attribute Version: The version of the layer.
	AttrVersion() interface{}
	Props() *LayerVersionProps
}

// The jsii proxy for ILayerVersion
type jsiiProxy_ILayerVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILayerVersion) AttrAcl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrCodeSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrCompatibleRuntime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompatibleRuntime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrLayerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLayerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrLayerVersionArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLayerVersionArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrLicense() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLicense",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILayerVersion) Props() *LayerVersionProps {
	var returns *LayerVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

