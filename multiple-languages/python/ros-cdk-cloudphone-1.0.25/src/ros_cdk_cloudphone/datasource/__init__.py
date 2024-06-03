import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Image(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.Image",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CloudPhone::Image``, which is used to query the information about an image.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e8afe03e77e24336d7f8ffbc327fd9e53519993ed23e216fe2e0d5ae8c39f0b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Image creation time, in ISO 8601 format.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Image description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCategory: Image type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageId: Image ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageName: The name of the mirror image.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsSelfShared")
    def attr_is_self_shared(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsSelfShared: Whether the image has been shared with other users.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsSelfShared"))

    @builtins.property
    @jsii.member(jsii_name="attrOsName")
    def attr_os_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsName: The Chinese display name of the operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsName"))

    @builtins.property
    @jsii.member(jsii_name="attrOsNameEn")
    def attr_os_name_en(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsNameEn: The English display name of the operating system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsNameEn"))

    @builtins.property
    @jsii.member(jsii_name="attrOsType")
    def attr_os_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsType: Operating system type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsType"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Platform: Operating system distribution.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Progress: The progress of mirror image production.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Status: Image state.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrUsage")
    def attr_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Usage: Whether the image is already running in the cloud phone instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsage"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd899cc9df89f78a2eab503303e628de0ea7d2c27c57245ec4356be8b834015f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33bd92fd77c3178b5feed733d798db723cb6a18dcad18554c95662d2932e3117)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ImageProps":
        return typing.cast("ImageProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ImageProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85617cea359258e48fc663b30af98ad7e01c70262d0f6ee8b7bc618e5ab459b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e3db31f2e41a3731e906f6cf719b9f9d23d32a7d278931316c338f906c59d83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.ImageProps",
    jsii_struct_bases=[],
    name_mapping={"image_id": "imageId"},
)
class ImageProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Image``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image

        :param image_id: Property imageId: Image ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__565fd3fc2bb36657d7b70b1be3042f89e573593e71f54e6827215bcaac4c7972)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
        }

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: Image ID.'''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Images(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.Images",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CloudPhone::Images``, which is used to query the information about available images.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImages``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ImagesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__586bd5d057577b291854a0dc576db38d478f51d44001972daeb59614062bb25e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrImageIds")
    def attr_image_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageIds: The list of image IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Images: The list of images.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1aaa8afea1542fd3f8b0a27cce90724905bb469fbadcb59d4ea73b653aa4966f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25c76a0a2b6be54e88d312de590ab75b3f87cc7f506f85dc11d0555f6a0c54ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ImagesProps":
        return typing.cast("ImagesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ImagesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eab350acf46521077c1055e82289ab739e998e53de05c8773c357486c4626cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dc2a8e4629eb0eb0c46787bff53f235c5978b0193825de4976e3281ef2796e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.ImagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_category": "imageCategory",
        "image_id": "imageId",
        "image_name": "imageName",
    },
)
class ImagesProps:
    def __init__(
        self,
        *,
        image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Images``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images

        :param image_category: Property imageCategory: Mirror type.
        :param image_id: Property imageId: Image ID.
        :param image_name: Property imageName: The name of the mirror image.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edd36adf84d4f30b6977de3db0de758d961d3fa7bc75388dca4f2a56232a6917)
            check_type(argname="argument image_category", value=image_category, expected_type=type_hints["image_category"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if image_category is not None:
            self._values["image_category"] = image_category
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_name is not None:
            self._values["image_name"] = image_name

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageCategory: Mirror type.'''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: Image ID.'''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageName: The name of the mirror image.'''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KeyPair(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.KeyPair",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CloudPhone::KeyPair``, which is used to query the information about a key pair.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKeyPair``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["KeyPairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f165db14bfc6a9966cb503153250cdb4d2ce5d19791c55cb04cb7cdace03f90)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairFingerPrint")
    def attr_key_pair_finger_print(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairFingerPrint"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairName: The Key Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72999ecb7e00bef2ae1dff17e7140a06c54736a7d9b6fea40756d630e4fec311)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77e4c789df985fc9e20ebe80a0c70751747950e966885067e4eea07d75ef17c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "KeyPairProps":
        return typing.cast("KeyPairProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "KeyPairProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__606664a7b62780683feefa88044d6271b892930b21af75f15259c5cfddcfd82d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__484da8e8ab8f0582374c7b8f9e522b92c1fafef450a6c9e77b0bf7c4b61ae726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.KeyPairProps",
    jsii_struct_bases=[],
    name_mapping={"key_pair_name": "keyPairName"},
)
class KeyPairProps:
    def __init__(
        self,
        *,
        key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``KeyPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair

        :param key_pair_name: Property keyPairName: The Key Name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45df963a67280a55654651ab0f3d50dceb4b36af580da06b52bbebbfdfad3c44)
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key_pair_name": key_pair_name,
        }

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property keyPairName: The Key Name.'''
        result = self._values.get("key_pair_name")
        assert result is not None, "Required property 'key_pair_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KeyPairs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.KeyPairs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CloudPhone::KeyPairs``, which is used to query the information about key pairs.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKeyPairs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KeyPairsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2154339fbbe1c0ea5f34ed164a5b741bd0bb0514caa313a2ab5ed66dc1605a6c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairNames")
    def attr_key_pair_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairNames: The list of key pair names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairNames"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairs")
    def attr_key_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairs: The list of key pairs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d20bc7d54a80f1148160a0a4af1734f809324aefcb8182830eac56792c9c6b52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2b89f2260d1ef6dc9cb727570a28325678de69cd527eaafca262600132223f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "KeyPairsProps":
        return typing.cast("KeyPairsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "KeyPairsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__413bbcd47331d24dd2be0872c2aee441cf1579de2e630132c8af1b51beef12e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__209fde5e9fdf3920d8ece39ecdb436762bd30bf39f80cac36dc5a938b1440ada)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.KeyPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "key_pair_finger_print": "keyPairFingerPrint",
        "key_pair_name": "keyPairName",
    },
)
class KeyPairsProps:
    def __init__(
        self,
        *,
        key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``KeyPairs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs

        :param key_pair_finger_print: Property keyPairFingerPrint: The Private Key of the Fingerprint.
        :param key_pair_name: Property keyPairName: The Key Name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__525fca4b5f6c656464466b973653d666814eb873b0c7b07aa1fdf65b0205a23d)
            check_type(argname="argument key_pair_finger_print", value=key_pair_finger_print, expected_type=type_hints["key_pair_finger_print"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_pair_finger_print is not None:
            self._values["key_pair_finger_print"] = key_pair_finger_print
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name

    @builtins.property
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairFingerPrint: The Private Key of the Fingerprint.'''
        result = self._values.get("key_pair_finger_print")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: The Key Name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosImage",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CloudPhone::Image``, which is used to query the information about an image.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Image`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25cbb4c3746a46afd57c0a46eebb7d51ff6958ba5ce643b9a3437766a565dc06)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__019688f40c01b08020e05f57df0ef54a46c2b2d12aff14353ab76718cb6e880a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Image creation time, in ISO 8601 format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Image description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCategory: Image type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageId: Image ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageName: The name of the mirror image.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsSelfShared")
    def attr_is_self_shared(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsSelfShared: Whether the image has been shared with other users.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsSelfShared"))

    @builtins.property
    @jsii.member(jsii_name="attrOsName")
    def attr_os_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsName: The Chinese display name of the operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsName"))

    @builtins.property
    @jsii.member(jsii_name="attrOsNameEn")
    def attr_os_name_en(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsNameEn: The English display name of the operating system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsNameEn"))

    @builtins.property
    @jsii.member(jsii_name="attrOsType")
    def attr_os_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsType: Operating system type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsType"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Platform: Operating system distribution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Progress: The progress of mirror image production.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: Image state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrUsage")
    def attr_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Usage: Whether the image is already running in the cloud phone instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsage"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4304254c0fca71e3238db21d84ff9985800a09ae972e1174f87feeca06b20112)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: Image ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__451f54f6b31d8fd34bd56032c309def0755a6678aad73e0cc84d2a0014887005)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosImageProps",
    jsii_struct_bases=[],
    name_mapping={"image_id": "imageId"},
)
class RosImageProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosImage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image

        :param image_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9a751d5756954ecb4269c1fcc66c1a7d8c82efbbfc0bf26da3b111d70e17d7b)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
        }

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: Image ID.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosImages",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CloudPhone::Images``, which is used to query the information about available images.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Images`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70fd1439a770de314c27d00838092baddc2f59713b75d366eb4ff79ced3e8371)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6eab2c7c02dbb437fc90587d23a04389a2854a7fe698a97fdd0bd6fe495b95e5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrImageIds")
    def attr_image_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageIds: The list of image IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Images: The list of images.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e5a560e7cc0e22c9d57e7161a99b42a8c756234947dc85f18a532f83b929307)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageCategory")
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCategory: Mirror type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageCategory"))

    @image_category.setter
    def image_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1609d6ef49246b3ee692e316920c7bc3b0404a33e3bfa044d1a5cc36015d746d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCategory", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Image ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4049b3c42a00669a15eb641f553234d0565a40b7876dce493d7dbd0de5850b8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="imageName")
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The name of the mirror image.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageName"))

    @image_name.setter
    def image_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cb27b55b6acb327995a836cec75b70a2823d2525196bbbd146d40cc27096c38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosImagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_category": "imageCategory",
        "image_id": "imageId",
        "image_name": "imageName",
    },
)
class RosImagesProps:
    def __init__(
        self,
        *,
        image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images

        :param image_category: 
        :param image_id: 
        :param image_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7615e6d3a11ee57c167c6aa806eab65f612e4542c7291571a9bfd4bc626184e)
            check_type(argname="argument image_category", value=image_category, expected_type=type_hints["image_category"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if image_category is not None:
            self._values["image_category"] = image_category
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_name is not None:
            self._values["image_name"] = image_name

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCategory: Mirror type.
        '''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Image ID.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The name of the mirror image.
        '''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKeyPair(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosKeyPair",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CloudPhone::KeyPair``, which is used to query the information about a key pair.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KeyPair`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyPairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3344f74355fb01e9603edfdb21dd23f043be6daa1ac8e8ad37987037cd5396ab)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c981f056e31aadbf7378e853aa30346947e0724e56710b495f4d9287882f904)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairFingerPrint")
    def attr_key_pair_finger_print(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairFingerPrint: The Private Key of the Fingerprint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairFingerPrint"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairName: The Key Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a84f6eb20885d5052d5faac9d5f629c7044926c8460ed313a01df249ceb9b7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyPairName: The Key Name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e587a344ce0ceff0bf90be0ff06dfd89b32f3fe614d8a68fff4ffe0fcfc80ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairProps",
    jsii_struct_bases=[],
    name_mapping={"key_pair_name": "keyPairName"},
)
class RosKeyPairProps:
    def __init__(
        self,
        *,
        key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosKeyPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair

        :param key_pair_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78d31d0a7353c704150e71db0e06e72508274768c5575e099cc9777d28b6ac15)
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key_pair_name": key_pair_name,
        }

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyPairName: The Key Name.
        '''
        result = self._values.get("key_pair_name")
        assert result is not None, "Required property 'key_pair_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKeyPairs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CloudPhone::KeyPairs``, which is used to query the information about key pairs.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KeyPairs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyPairsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d6762ada07ad256f4abe3a9e4ddff617977cf7112ae8321fe5260aa480a97da)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5b40b740030bac293b8c62f9a8610055571fb476475175415a607e3a50de1b0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairNames")
    def attr_key_pair_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairNames: The list of key pair names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairNames"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairs")
    def attr_key_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairs: The list of key pairs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07f2dddab2c36ffd1fb67086a8b4980316cfbd94d753f577e3bd4d18daf502e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairFingerPrint")
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairFingerPrint: The Private Key of the Fingerprint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairFingerPrint"))

    @key_pair_finger_print.setter
    def key_pair_finger_print(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c05d2b8976aa78e70c8a321fd67d99ecf4b704a67cb7edf9a0fd651505fbfbbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairFingerPrint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The Key Name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3d16b335cd55fe56a465fa6c5e87e25b8897fa90fad432186797b52ddb46bc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "key_pair_finger_print": "keyPairFingerPrint",
        "key_pair_name": "keyPairName",
    },
)
class RosKeyPairsProps:
    def __init__(
        self,
        *,
        key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKeyPairs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs

        :param key_pair_finger_print: 
        :param key_pair_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38975cc1d0cea6847da3e82229d095b9970cdb63c022f402319a1de40d1963a1)
            check_type(argname="argument key_pair_finger_print", value=key_pair_finger_print, expected_type=type_hints["key_pair_finger_print"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_pair_finger_print is not None:
            self._values["key_pair_finger_print"] = key_pair_finger_print
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name

    @builtins.property
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairFingerPrint: The Private Key of the Fingerprint.
        '''
        result = self._values.get("key_pair_finger_print")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The Key Name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Image",
    "ImageProps",
    "Images",
    "ImagesProps",
    "KeyPair",
    "KeyPairProps",
    "KeyPairs",
    "KeyPairsProps",
    "RosImage",
    "RosImageProps",
    "RosImages",
    "RosImagesProps",
    "RosKeyPair",
    "RosKeyPairProps",
    "RosKeyPairs",
    "RosKeyPairsProps",
]

publication.publish()

def _typecheckingstub__1e8afe03e77e24336d7f8ffbc327fd9e53519993ed23e216fe2e0d5ae8c39f0b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd899cc9df89f78a2eab503303e628de0ea7d2c27c57245ec4356be8b834015f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33bd92fd77c3178b5feed733d798db723cb6a18dcad18554c95662d2932e3117(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85617cea359258e48fc663b30af98ad7e01c70262d0f6ee8b7bc618e5ab459b7(
    value: ImageProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e3db31f2e41a3731e906f6cf719b9f9d23d32a7d278931316c338f906c59d83(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__565fd3fc2bb36657d7b70b1be3042f89e573593e71f54e6827215bcaac4c7972(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__586bd5d057577b291854a0dc576db38d478f51d44001972daeb59614062bb25e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ImagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1aaa8afea1542fd3f8b0a27cce90724905bb469fbadcb59d4ea73b653aa4966f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c76a0a2b6be54e88d312de590ab75b3f87cc7f506f85dc11d0555f6a0c54ee(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eab350acf46521077c1055e82289ab739e998e53de05c8773c357486c4626cc(
    value: ImagesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dc2a8e4629eb0eb0c46787bff53f235c5978b0193825de4976e3281ef2796e5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edd36adf84d4f30b6977de3db0de758d961d3fa7bc75388dca4f2a56232a6917(
    *,
    image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f165db14bfc6a9966cb503153250cdb4d2ce5d19791c55cb04cb7cdace03f90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[KeyPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72999ecb7e00bef2ae1dff17e7140a06c54736a7d9b6fea40756d630e4fec311(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77e4c789df985fc9e20ebe80a0c70751747950e966885067e4eea07d75ef17c5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__606664a7b62780683feefa88044d6271b892930b21af75f15259c5cfddcfd82d(
    value: KeyPairProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__484da8e8ab8f0582374c7b8f9e522b92c1fafef450a6c9e77b0bf7c4b61ae726(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45df963a67280a55654651ab0f3d50dceb4b36af580da06b52bbebbfdfad3c44(
    *,
    key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2154339fbbe1c0ea5f34ed164a5b741bd0bb0514caa313a2ab5ed66dc1605a6c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KeyPairsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d20bc7d54a80f1148160a0a4af1734f809324aefcb8182830eac56792c9c6b52(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2b89f2260d1ef6dc9cb727570a28325678de69cd527eaafca262600132223f9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__413bbcd47331d24dd2be0872c2aee441cf1579de2e630132c8af1b51beef12e2(
    value: KeyPairsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__209fde5e9fdf3920d8ece39ecdb436762bd30bf39f80cac36dc5a938b1440ada(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__525fca4b5f6c656464466b973653d666814eb873b0c7b07aa1fdf65b0205a23d(
    *,
    key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25cbb4c3746a46afd57c0a46eebb7d51ff6958ba5ce643b9a3437766a565dc06(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__019688f40c01b08020e05f57df0ef54a46c2b2d12aff14353ab76718cb6e880a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4304254c0fca71e3238db21d84ff9985800a09ae972e1174f87feeca06b20112(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__451f54f6b31d8fd34bd56032c309def0755a6678aad73e0cc84d2a0014887005(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9a751d5756954ecb4269c1fcc66c1a7d8c82efbbfc0bf26da3b111d70e17d7b(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70fd1439a770de314c27d00838092baddc2f59713b75d366eb4ff79ced3e8371(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImagesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6eab2c7c02dbb437fc90587d23a04389a2854a7fe698a97fdd0bd6fe495b95e5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e5a560e7cc0e22c9d57e7161a99b42a8c756234947dc85f18a532f83b929307(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1609d6ef49246b3ee692e316920c7bc3b0404a33e3bfa044d1a5cc36015d746d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4049b3c42a00669a15eb641f553234d0565a40b7876dce493d7dbd0de5850b8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cb27b55b6acb327995a836cec75b70a2823d2525196bbbd146d40cc27096c38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7615e6d3a11ee57c167c6aa806eab65f612e4542c7291571a9bfd4bc626184e(
    *,
    image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3344f74355fb01e9603edfdb21dd23f043be6daa1ac8e8ad37987037cd5396ab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeyPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c981f056e31aadbf7378e853aa30346947e0724e56710b495f4d9287882f904(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a84f6eb20885d5052d5faac9d5f629c7044926c8460ed313a01df249ceb9b7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e587a344ce0ceff0bf90be0ff06dfd89b32f3fe614d8a68fff4ffe0fcfc80ee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78d31d0a7353c704150e71db0e06e72508274768c5575e099cc9777d28b6ac15(
    *,
    key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d6762ada07ad256f4abe3a9e4ddff617977cf7112ae8321fe5260aa480a97da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeyPairsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b40b740030bac293b8c62f9a8610055571fb476475175415a607e3a50de1b0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07f2dddab2c36ffd1fb67086a8b4980316cfbd94d753f577e3bd4d18daf502e2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c05d2b8976aa78e70c8a321fd67d99ecf4b704a67cb7edf9a0fd651505fbfbbe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3d16b335cd55fe56a465fa6c5e87e25b8897fa90fad432186797b52ddb46bc0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38975cc1d0cea6847da3e82229d095b9970cdb63c022f402319a1de40d1963a1(
    *,
    key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
