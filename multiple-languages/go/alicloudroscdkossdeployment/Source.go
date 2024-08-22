package alicloudroscdkossdeployment

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkossdeployment/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkossassets"
)

// Specifies bucket deployment source.
//
// Usage:
//
//      Source.bucket(bucketName, objectKey)
//      Source.asset('/local/path/to/directory')
//      Source.asset('/local/path/to/a/file.zip')
//      Source.data('hello/world/file.txt', 'Hello, world!')
//      Source.jsonData('config.json', { key: value })
type Source interface {
}

// The jsii proxy struct for Source
type jsiiProxy_Source struct {
	_ byte // padding
}

func NewSource() Source {
	_init_.Initialize()

	j := jsiiProxy_Source{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ossdeployment.Source",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewSource_Override(s Source) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ossdeployment.Source",
		nil, // no parameters
		s,
	)
}

// Uses a local file path as the source of the target bucket contents.
//
// ROS CDK will create a temporary bucket and upload the files you want to upload to it.
// Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.
//
// If the local asset is a .zip archive, make sure you trust the
// producer of the archive.
func Source_Asset(path *string, options *alicloudroscdkossassets.AssetOptions, objectPrefix *string) ISource {
	_init_.Initialize()

	if err := validateSource_AssetParameters(path, options); err != nil {
		panic(err)
	}
	var returns ISource

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ossdeployment.Source",
		"asset",
		[]interface{}{path, options, objectPrefix},
		&returns,
	)

	return returns
}

// Uses a file stored in an OSS bucket as the source for the destination bucket contents.
//
// Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.
func Source_Bucket(bucket interface{}, objectKey interface{}) ISource {
	_init_.Initialize()

	if err := validateSource_BucketParameters(bucket, objectKey); err != nil {
		panic(err)
	}
	var returns ISource

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ossdeployment.Source",
		"bucket",
		[]interface{}{bucket, objectKey},
		&returns,
	)

	return returns
}

// Deploys an object with the specified string contents into the bucket.
//
// To store a JSON object use `Source.jsonData()`.
func Source_Data(objectKey *string, data *string) ISource {
	_init_.Initialize()

	if err := validateSource_DataParameters(objectKey, data); err != nil {
		panic(err)
	}
	var returns ISource

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ossdeployment.Source",
		"data",
		[]interface{}{objectKey, data},
		&returns,
	)

	return returns
}

// Deploys an object with the specified JSON object into the bucket.
func Source_JsonData(objectKey *string, obj interface{}) ISource {
	_init_.Initialize()

	if err := validateSource_JsonDataParameters(objectKey, obj); err != nil {
		panic(err)
	}
	var returns ISource

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ossdeployment.Source",
		"jsonData",
		[]interface{}{objectKey, obj},
		&returns,
	)

	return returns
}

