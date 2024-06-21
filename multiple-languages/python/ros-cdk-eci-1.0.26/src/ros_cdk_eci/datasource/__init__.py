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


class ImageCache(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.datasource.ImageCache",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ECI::ImageCache``, which is used to query the information about an image cache.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImageCache``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageCacheProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2fd96b4e1e7481411fb574ad9cd1b4a8d3d8d9a8f8e15611210b0a486659cdb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContainerGroupId: ContainerGroupId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: CreateTime.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEliminationStrategy")
    def attr_elimination_strategy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EliminationStrategy: The elimination strategy of the mirror cache.

        The default is empty, indicating that it has been kept.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEliminationStrategy"))

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Events: Events.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEvents"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireDateTime")
    def attr_expire_date_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpireDateTime: ExpireDateTime.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireDateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrFlashSnapshotId")
    def attr_flash_snapshot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlashSnapshotId: FlashSnapshotId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlashSnapshotId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheId: ImageCacheId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheName")
    def attr_image_cache_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheName: ImageCacheName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheSize")
    def attr_image_cache_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheSize: ImageCacheSize.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheSize"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheTags")
    def attr_image_cache_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheTags: Tags.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheTags"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Images: Images.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Progress: Progress.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: ResourceGroupId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotId")
    def attr_snapshot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SnapshotId: SnapshotId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshotId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca4219554e7b781386f15e9fac01439776e7df0833aef63afecf5a0754749bd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ec68fd7831e635554e1b3a4b3da7bdf071ecb8394852c234e95679dabbb9960)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ImageCacheProps":
        return typing.cast("ImageCacheProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ImageCacheProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67bbcc7ab61baead0923a99a0fc3740261be9ae91dce7aa7746948c1b7ad6dc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7e78838f5c854f473a3a854a47699596ddacbd7e5e332cb9859e69987089164)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.datasource.ImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={"image_cache_id": "imageCacheId"},
)
class ImageCacheProps:
    def __init__(
        self,
        *,
        image_cache_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ImageCache``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache

        :param image_cache_id: Property imageCacheId: ImageCacheId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2cc372ba5b68fd590ccbc7f3d95151d0307b60b02182bfacd2822e762335f13)
            check_type(argname="argument image_cache_id", value=image_cache_id, expected_type=type_hints["image_cache_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_cache_id": image_cache_id,
        }

    @builtins.property
    def image_cache_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageCacheId: ImageCacheId.'''
        result = self._values.get("image_cache_id")
        assert result is not None, "Required property 'image_cache_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ImageCaches(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.datasource.ImageCaches",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ECI::ImageCaches``, which is used to query multiple image caches at a time.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImageCaches``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ImageCachesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afbd8d74e5ed8f62face7d30c38948770e44024cc52827cc3babc9dff4261851)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheIds")
    def attr_image_cache_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheIds: The list of image cache IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCaches")
    def attr_image_caches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCaches: The list of image caches.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCaches"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__592a5723690283c73bfdd100a271ed159855770640d4502fb0d0d7b735447829)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a1651336fb32f1fe1558c09fa75d1b46cf5b718842fd01bcf554112fd05d64a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ImageCachesProps":
        return typing.cast("ImageCachesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ImageCachesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a3914934a2ad39eb821a1255ce2c23093abe626e65c4898a972600ee0e50870)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2723013acd82d3a660164ab1fcdd0aced49d3279357a233e26b3efb3a1a25d2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.datasource.ImageCachesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_cache_id": "imageCacheId",
        "image_cache_name": "imageCacheName",
        "limit": "limit",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
    },
)
class ImageCachesProps:
    def __init__(
        self,
        *,
        image_cache_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_cache_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ImageCaches``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches

        :param image_cache_id: Property imageCacheId: ImageCacheId.
        :param image_cache_name: Property imageCacheName: ImageCacheName.
        :param limit: Property limit: Number of pages.
        :param resource_group_id: Property resourceGroupId: ResourceGroupId.
        :param snapshot_id: Property snapshotId: SnapshotId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95229382280bc990127ffd36415b99499e82c38ef92527043ea0521ede4a6aff)
            check_type(argname="argument image_cache_id", value=image_cache_id, expected_type=type_hints["image_cache_id"])
            check_type(argname="argument image_cache_name", value=image_cache_name, expected_type=type_hints["image_cache_name"])
            check_type(argname="argument limit", value=limit, expected_type=type_hints["limit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if image_cache_id is not None:
            self._values["image_cache_id"] = image_cache_id
        if image_cache_name is not None:
            self._values["image_cache_name"] = image_cache_name
        if limit is not None:
            self._values["limit"] = limit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id

    @builtins.property
    def image_cache_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageCacheId: ImageCacheId.'''
        result = self._values.get("image_cache_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_cache_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageCacheName: ImageCacheName.'''
        result = self._values.get("image_cache_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property limit: Number of pages.'''
        result = self._values.get("limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: ResourceGroupId.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotId: SnapshotId.'''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageCachesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageCache(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.datasource.RosImageCache",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ECI::ImageCache``, which is used to query the information about an image cache.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImageCache`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageCacheProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3a81831b1223dc6db461e3ad345cb735e90cc305e07eccb587f38f8c2cdaa28)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f9023fab570c6540f455dd454c50a0be666b06beebf77ee35e68e2e885482b9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerGroupId: ContainerGroupId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: CreateTime.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEliminationStrategy")
    def attr_elimination_strategy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEliminationStrategy"))

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Events: Events.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEvents"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireDateTime")
    def attr_expire_date_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpireDateTime: ExpireDateTime.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireDateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrFlashSnapshotId")
    def attr_flash_snapshot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlashSnapshotId: FlashSnapshotId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlashSnapshotId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheId: ImageCacheId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheName")
    def attr_image_cache_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheName: ImageCacheName.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheSize")
    def attr_image_cache_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheSize: ImageCacheSize.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheSize"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheTags")
    def attr_image_cache_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheTags: Tags.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheTags"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Images: Images.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Progress: Progress.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: ResourceGroupId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotId")
    def attr_snapshot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SnapshotId: SnapshotId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshotId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d7d1bcf4f40028974cdb47493ceda920df76f8deea1eb8e7cf871ce13f99df8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageCacheId")
    def image_cache_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageCacheId: ImageCacheId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageCacheId"))

    @image_cache_id.setter
    def image_cache_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a738df609205393e4d84a16d108176ecaedc353ce6e2eb1334cb387b28acbbda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCacheId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.datasource.RosImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={"image_cache_id": "imageCacheId"},
)
class RosImageCacheProps:
    def __init__(
        self,
        *,
        image_cache_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosImageCache``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache

        :param image_cache_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1e3cf906cd8afde000e317377005c0dc2f6d407e1c52f352ba0321127e32d21)
            check_type(argname="argument image_cache_id", value=image_cache_id, expected_type=type_hints["image_cache_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_cache_id": image_cache_id,
        }

    @builtins.property
    def image_cache_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageCacheId: ImageCacheId.
        '''
        result = self._values.get("image_cache_id")
        assert result is not None, "Required property 'image_cache_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageCaches(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.datasource.RosImageCaches",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ECI::ImageCaches``, which is used to query multiple image caches at a time.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImageCaches`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageCachesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e1f32db5e7d1d7ed08ed56ad632f21cd9e5a7f1a2d09eca5838f7d5741698a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2313498613f3b703abd3b400a3f8e54c82ad8f37bba65590e3d7cf4c1adca2c4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheIds")
    def attr_image_cache_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheIds: The list of image cache IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCaches")
    def attr_image_caches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCaches: The list of image caches.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCaches"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9769599933f9fa375b0c4c54a0a0517ba250f32b2a8dc8a8eb9770307a836281)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageCacheId")
    def image_cache_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCacheId: ImageCacheId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageCacheId"))

    @image_cache_id.setter
    def image_cache_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d2a9480acb380781370e21650d075f9eb88c1f84f2bb23994ad627a58f11b2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCacheId", value)

    @builtins.property
    @jsii.member(jsii_name="imageCacheName")
    def image_cache_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCacheName: ImageCacheName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageCacheName"))

    @image_cache_name.setter
    def image_cache_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__384a25cd3df8e45b8091f0f38e059c8524d2f845cfa3d65850b50961ce4289c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCacheName", value)

    @builtins.property
    @jsii.member(jsii_name="limit")
    def limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: limit: Number of pages.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "limit"))

    @limit.setter
    def limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df4e7e93f5c81c60583fc706ea8d760d9bfa40b4feaba0cd7376261b45871707)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "limit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: ResourceGroupId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88222903cc3e1466fdb376160f504473a9823e4dbcdfb20be671d9319d483b5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: SnapshotId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a957dcd05ab439bb41f7486e7c9b4f8850a44d18d05a04a20d13b333780f7f68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.datasource.RosImageCachesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_cache_id": "imageCacheId",
        "image_cache_name": "imageCacheName",
        "limit": "limit",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
    },
)
class RosImageCachesProps:
    def __init__(
        self,
        *,
        image_cache_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_cache_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImageCaches``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches

        :param image_cache_id: 
        :param image_cache_name: 
        :param limit: 
        :param resource_group_id: 
        :param snapshot_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d375d52fde6142cbb776c8d9180795a2cb628c4a744ba1fe2e0ea8d067a39cbc)
            check_type(argname="argument image_cache_id", value=image_cache_id, expected_type=type_hints["image_cache_id"])
            check_type(argname="argument image_cache_name", value=image_cache_name, expected_type=type_hints["image_cache_name"])
            check_type(argname="argument limit", value=limit, expected_type=type_hints["limit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if image_cache_id is not None:
            self._values["image_cache_id"] = image_cache_id
        if image_cache_name is not None:
            self._values["image_cache_name"] = image_cache_name
        if limit is not None:
            self._values["limit"] = limit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id

    @builtins.property
    def image_cache_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCacheId: ImageCacheId.
        '''
        result = self._values.get("image_cache_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_cache_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCacheName: ImageCacheName.
        '''
        result = self._values.get("image_cache_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: limit: Number of pages.
        '''
        result = self._values.get("limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: ResourceGroupId.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: SnapshotId.
        '''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageCachesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ImageCache",
    "ImageCacheProps",
    "ImageCaches",
    "ImageCachesProps",
    "RosImageCache",
    "RosImageCacheProps",
    "RosImageCaches",
    "RosImageCachesProps",
]

publication.publish()

def _typecheckingstub__d2fd96b4e1e7481411fb574ad9cd1b4a8d3d8d9a8f8e15611210b0a486659cdb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageCacheProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca4219554e7b781386f15e9fac01439776e7df0833aef63afecf5a0754749bd9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ec68fd7831e635554e1b3a4b3da7bdf071ecb8394852c234e95679dabbb9960(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67bbcc7ab61baead0923a99a0fc3740261be9ae91dce7aa7746948c1b7ad6dc7(
    value: ImageCacheProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7e78838f5c854f473a3a854a47699596ddacbd7e5e332cb9859e69987089164(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2cc372ba5b68fd590ccbc7f3d95151d0307b60b02182bfacd2822e762335f13(
    *,
    image_cache_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afbd8d74e5ed8f62face7d30c38948770e44024cc52827cc3babc9dff4261851(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ImageCachesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__592a5723690283c73bfdd100a271ed159855770640d4502fb0d0d7b735447829(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a1651336fb32f1fe1558c09fa75d1b46cf5b718842fd01bcf554112fd05d64a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a3914934a2ad39eb821a1255ce2c23093abe626e65c4898a972600ee0e50870(
    value: ImageCachesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2723013acd82d3a660164ab1fcdd0aced49d3279357a233e26b3efb3a1a25d2b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95229382280bc990127ffd36415b99499e82c38ef92527043ea0521ede4a6aff(
    *,
    image_cache_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_cache_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3a81831b1223dc6db461e3ad345cb735e90cc305e07eccb587f38f8c2cdaa28(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageCacheProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f9023fab570c6540f455dd454c50a0be666b06beebf77ee35e68e2e885482b9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7d1bcf4f40028974cdb47493ceda920df76f8deea1eb8e7cf871ce13f99df8f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a738df609205393e4d84a16d108176ecaedc353ce6e2eb1334cb387b28acbbda(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1e3cf906cd8afde000e317377005c0dc2f6d407e1c52f352ba0321127e32d21(
    *,
    image_cache_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e1f32db5e7d1d7ed08ed56ad632f21cd9e5a7f1a2d09eca5838f7d5741698a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageCachesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2313498613f3b703abd3b400a3f8e54c82ad8f37bba65590e3d7cf4c1adca2c4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9769599933f9fa375b0c4c54a0a0517ba250f32b2a8dc8a8eb9770307a836281(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d2a9480acb380781370e21650d075f9eb88c1f84f2bb23994ad627a58f11b2d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__384a25cd3df8e45b8091f0f38e059c8524d2f845cfa3d65850b50961ce4289c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df4e7e93f5c81c60583fc706ea8d760d9bfa40b4feaba0cd7376261b45871707(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88222903cc3e1466fdb376160f504473a9823e4dbcdfb20be671d9319d483b5e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a957dcd05ab439bb41f7486e7c9b4f8850a44d18d05a04a20d13b333780f7f68(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d375d52fde6142cbb776c8d9180795a2cb628c4a744ba1fe2e0ea8d067a39cbc(
    *,
    image_cache_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_cache_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
