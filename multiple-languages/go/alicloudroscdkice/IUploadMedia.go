package alicloudroscdkice

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkice/internal"
)

// Represents a `UploadMedia`.
type IUploadMedia interface {
	alicloudroscdkcore.IResource
	// Attribute FileURL: The OSS URL of the file.
	//
	// The URL does not contain the information used for authentication.
	AttrFileUrl() interface{}
	// Attribute MediaId: The ID of the media asset.
	AttrMediaId() interface{}
	// Attribute MediaURL: The URL of the media asset.
	//
	// Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
	AttrMediaUrl() interface{}
	// Attribute UploadAddress: The upload URL.
	//
	// Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
	AttrUploadAddress() interface{}
	// Attribute UploadAuth: The upload credential.
	//
	// Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
	AttrUploadAuth() interface{}
	Props() *UploadMediaProps
}

// The jsii proxy for IUploadMedia
type jsiiProxy_IUploadMedia struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUploadMedia) AttrFileUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUploadMedia) AttrMediaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMediaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUploadMedia) AttrMediaUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMediaUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUploadMedia) AttrUploadAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUploadAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUploadMedia) AttrUploadAuth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUploadAuth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUploadMedia) Props() *UploadMediaProps {
	var returns *UploadMediaProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

