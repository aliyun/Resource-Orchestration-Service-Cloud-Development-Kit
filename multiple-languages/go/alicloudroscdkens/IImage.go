package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `Image`.
type IImage interface {
	alicloudroscdkcore.IResource
	// Attribute Architecture: The image architecture.
	//
	// Valid values:
	// i386
	// x86_64.
	AttrArchitecture() interface{}
	// Attribute ComputeType: Computing type.
	//
	// ens_vm/ens: x86 computing.
	// bare_metal: x86 bare machine or x86 bare metal.
	// arm_vm: ARM computing.
	// arm_bare_metal: ARM bare machine or ARM bare metal.
	// pcfarm: heterogeneous computing.
	AttrComputeType() interface{}
	// Attribute CreateTime: The image creation time.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute ImageId: The ID of the image.
	AttrImageId() interface{}
	// Attribute ImageName: The name of the image.
	AttrImageName() interface{}
	// Attribute ImageOwnerAlias: The source of the image.
	//
	// Valid values:
	// system: public images
	// self: your custom images.
	AttrImageOwnerAlias() interface{}
	// Attribute ImageSize: The size of the image.
	//
	// Unit: GiB.
	AttrImageSize() interface{}
	// Attribute InstanceId: The ID of the instance corresponding to the image.
	AttrInstanceId() interface{}
	// Attribute OsVersion: The operating system version.
	AttrOsVersion() interface{}
	// Attribute Platform: The type of operating system used by the image.
	//
	// centos
	// ubuntu
	// alios
	// debian
	// rhel
	// windows.
	AttrPlatform() interface{}
	// Attribute SnapshotId: The ID of the snapshot corresponding to the image.
	AttrSnapshotId() interface{}
	Props() *ImageProps
}

// The jsii proxy for IImage
type jsiiProxy_IImage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImage) AttrArchitecture() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArchitecture",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrComputeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComputeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageOwnerAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrOsVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrPlatform() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlatform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) Props() *ImageProps {
	var returns *ImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

