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


class Images(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.Images",
):
    '''A ROS resource type:  ``DATASOURCE::CloudPhone::Images``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ImagesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CloudPhone::Images``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``DATASOURCE::CloudPhone::Images``.

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


class KeyPairs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.KeyPairs",
):
    '''A ROS resource type:  ``DATASOURCE::CloudPhone::KeyPairs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KeyPairsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CloudPhone::KeyPairs``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``DATASOURCE::CloudPhone::KeyPairs``.

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


class RosImages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosImages",
):
    '''A ROS template type:  ``DATASOURCE::CloudPhone::Images``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CloudPhone::Images``.

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
        '''Properties for defining a ``DATASOURCE::CloudPhone::Images``.

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


class RosKeyPairs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairs",
):
    '''A ROS template type:  ``DATASOURCE::CloudPhone::KeyPairs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyPairsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CloudPhone::KeyPairs``.

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
        '''Properties for defining a ``DATASOURCE::CloudPhone::KeyPairs``.

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
    "Images",
    "ImagesProps",
    "KeyPairs",
    "KeyPairsProps",
    "RosImages",
    "RosImagesProps",
    "RosKeyPairs",
    "RosKeyPairsProps",
]

publication.publish()

def _typecheckingstub__586bd5d057577b291854a0dc576db38d478f51d44001972daeb59614062bb25e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ImagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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

def _typecheckingstub__2154339fbbe1c0ea5f34ed164a5b741bd0bb0514caa313a2ab5ed66dc1605a6c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KeyPairsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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
