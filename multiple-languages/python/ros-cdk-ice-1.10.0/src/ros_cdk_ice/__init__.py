'''
## Aliyun ROS ICE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ICE from '@alicloud/ros-cdk-ice';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.CategoryProps",
    jsii_struct_bases=[],
    name_mapping={"cate_name": "cateName", "parent_id": "parentId", "type": "type"},
)
class CategoryProps:
    def __init__(
        self,
        *,
        cate_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Category``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category

        :param cate_name: Property cateName: The category name. The value can be up to 64 bytes in length. The value must be encoded in UTF-8.
        :param parent_id: Property parentId: The ID of the parent category.
        :param type: Property type: The type of the category. Valid values: default: audio, video, and image files. This is the default value. material: short video materials.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d3fcc8dc3afb5612cf428cc49e0377f5efd2938f65567bc0879f840f3370f88)
            check_type(argname="argument cate_name", value=cate_name, expected_type=type_hints["cate_name"])
            check_type(argname="argument parent_id", value=parent_id, expected_type=type_hints["parent_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cate_name": cate_name,
        }
        if parent_id is not None:
            self._values["parent_id"] = parent_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def cate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cateName: The category name.

        The value can be up to 64 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("cate_name")
        assert result is not None, "Required property 'cate_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parentId: The ID of the parent category.'''
        result = self._values.get("parent_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the category.

        Valid values:
        default: audio, video, and image files. This is the default value.
        material: short video materials.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CategoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-ice.ICategory")
class ICategory(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Category``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCateId")
    def attr_cate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CateId: The ID of the category.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLevel")
    def attr_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Level: The level of the category.

        The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParentId")
    def attr_parent_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentId: The ID of the parent category.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CategoryProps:
        ...


class _ICategoryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Category``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ice.ICategory"

    @builtins.property
    @jsii.member(jsii_name="attrCateId")
    def attr_cate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CateId: The ID of the category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCateId"))

    @builtins.property
    @jsii.member(jsii_name="attrLevel")
    def attr_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Level: The level of the category.

        The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrParentId")
    def attr_parent_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentId: The ID of the parent category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CategoryProps:
        return typing.cast(CategoryProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICategory).__jsii_proxy_class__ = lambda : _ICategoryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ice.IInsertMediaToSearchLib")
class IInsertMediaToSearchLib(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``InsertMediaToSearchLib``.'''

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InsertMediaToSearchLibProps":
        ...


class _IInsertMediaToSearchLibProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``InsertMediaToSearchLib``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ice.IInsertMediaToSearchLib"

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InsertMediaToSearchLibProps":
        return typing.cast("InsertMediaToSearchLibProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInsertMediaToSearchLib).__jsii_proxy_class__ = lambda : _IInsertMediaToSearchLibProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ice.IMediaInfo")
class IMediaInfo(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``MediaInfo``.'''

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset in IMS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MediaInfoProps":
        ...


class _IMediaInfoProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MediaInfo``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ice.IMediaInfo"

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset in IMS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MediaInfoProps":
        return typing.cast("MediaInfoProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMediaInfo).__jsii_proxy_class__ = lambda : _IMediaInfoProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ice.ISearchLib")
class ISearchLib(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SearchLib``.'''

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchLibName: The name of the Search Lib.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SearchLibProps":
        ...


class _ISearchLibProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SearchLib``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ice.ISearchLib"

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchLibName: The name of the Search Lib.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchLibName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SearchLibProps":
        return typing.cast("SearchLibProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISearchLib).__jsii_proxy_class__ = lambda : _ISearchLibProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ice.IUploadMedia")
class IUploadMedia(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UploadMedia``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFileUrl")
    def attr_file_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileURL: The OSS URL of the file.

        The URL does not contain the information used for authentication.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMediaUrl")
    def attr_media_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaURL: The URL of the media asset.

        Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUploadAddress")
    def attr_upload_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAddress: The upload URL.

        Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUploadAuth")
    def attr_upload_auth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAuth: The upload credential.

        Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UploadMediaProps":
        ...


class _IUploadMediaProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UploadMedia``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ice.IUploadMedia"

    @builtins.property
    @jsii.member(jsii_name="attrFileUrl")
    def attr_file_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileURL: The OSS URL of the file.

        The URL does not contain the information used for authentication.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFileUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaUrl")
    def attr_media_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaURL: The URL of the media asset.

        Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAddress")
    def attr_upload_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAddress: The upload URL.

        Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUploadAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAuth")
    def attr_upload_auth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAuth: The upload credential.

        Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUploadAuth"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UploadMediaProps":
        return typing.cast("UploadMediaProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUploadMedia).__jsii_proxy_class__ = lambda : _IUploadMediaProxy


@jsii.implements(IInsertMediaToSearchLib)
class InsertMediaToSearchLib(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.InsertMediaToSearchLib",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::InsertMediaToSearchLib``, which is used to add a media asset to a search library.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInsertMediaToSearchLib``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InsertMediaToSearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67be7fa32c6631f0b7d3b2d2a5b86838586b9569f9126be5a1e58c1522f960e0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InsertMediaToSearchLibProps":
        return typing.cast("InsertMediaToSearchLibProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d19132eba792dc121ca451e1ddc0c29e60a5dfe225b7ad65c697fef8b7f25e9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c10f98fe19941735880df592609d05c37592c488dc9d1e443422dc01c686cf8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ea64723e8214989567c8bcb5a35cf07a92b4bf53294e84b6b4087a6818dcd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.InsertMediaToSearchLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "input": "input",
        "media_id": "mediaId",
        "media_type": "mediaType",
        "msg_body": "msgBody",
        "search_lib_name": "searchLibName",
    },
)
class InsertMediaToSearchLibProps:
    def __init__(
        self,
        *,
        input: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        media_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        msg_body: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        search_lib_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InsertMediaToSearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib

        :param input: Property input: The URL of the video, audio, or image file that you want to import to the search library. Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail. Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-]. Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
        :param media_id: Property mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
        :param media_type: Property mediaType: The type of the media asset. Valid values: video (default) image audio
        :param msg_body: Property msgBody: The message body.
        :param search_lib_name: Property searchLibName: The name of the search library. Default value: ims-default-search-lib.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eecfc6ad93f68691660056631fa03103ef2263820b3e7e4bef65fb533aad2f8f)
            check_type(argname="argument input", value=input, expected_type=type_hints["input"])
            check_type(argname="argument media_id", value=media_id, expected_type=type_hints["media_id"])
            check_type(argname="argument media_type", value=media_type, expected_type=type_hints["media_type"])
            check_type(argname="argument msg_body", value=msg_body, expected_type=type_hints["msg_body"])
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "input": input,
        }
        if media_id is not None:
            self._values["media_id"] = media_id
        if media_type is not None:
            self._values["media_type"] = media_type
        if msg_body is not None:
            self._values["msg_body"] = msg_body
        if search_lib_name is not None:
            self._values["search_lib_name"] = search_lib_name

    @builtins.property
    def input(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property input: The URL of the video, audio, or image file that you want to import to the search library.

        Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
        Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
        Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
        '''
        result = self._values.get("input")
        assert result is not None, "Required property 'input' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def media_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mediaId: The ID of the media asset.

        Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
        '''
        result = self._values.get("media_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mediaType: The type of the media asset.

        Valid values:
        video (default)
        image
        audio
        '''
        result = self._values.get("media_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def msg_body(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property msgBody: The message body.'''
        result = self._values.get("msg_body")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchLibName: The name of the search library.

        Default value: ims-default-search-lib.
        '''
        result = self._values.get("search_lib_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InsertMediaToSearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMediaInfo)
class MediaInfo(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.MediaInfo",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::MediaInfo``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMediaInfo``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MediaInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e952053da27fc728a3068f7d5c4969744b771738e11f74666ea1fd22052e050)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset in IMS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MediaInfoProps":
        return typing.cast("MediaInfoProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__777f43c96a7ce9c016d6850d7a76671ffdf806bd4a6e27cc9fab8a3003176dd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bed9f019f828178622c445b1f51ec73b4a7cc2271a1298f5221f35abf994d79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39b5415fb7ddfb57f447747583ded01e6226d8e8e03d4925f0a0b75f2c59d9d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.MediaInfoProps",
    jsii_struct_bases=[],
    name_mapping={
        "input_url": "inputUrl",
        "business_type": "businessType",
        "cate_id": "cateId",
        "cover_url": "coverUrl",
        "description": "description",
        "media_tags": "mediaTags",
        "media_type": "mediaType",
        "overwrite": "overwrite",
        "reference_id": "referenceId",
        "register_config": "registerConfig",
        "smart_tag_template_id": "smartTagTemplateId",
        "title": "title",
        "user_data": "userData",
        "workflow_id": "workflowId",
    },
)
class MediaInfoProps:
    def __init__(
        self,
        *,
        input_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        business_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cate_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cover_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        media_tags: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        overwrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reference_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        register_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        smart_tag_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        workflow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MediaInfo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo

        :param input_url: Property inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported: OSS URL in one of the following formats: http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated. URL of an ApsaraVideo VOD media asset vod://***20b48fb04483915d4f2cd8ac****
        :param business_type: Property businessType: The business type of the media asset. Valid values: subtitles watermark opening ending general
        :param cate_id: Property cateId: The category ID.
        :param cover_url: Property coverUrl: The thumbnail URL of the media asset. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        :param description: Property description: The description of the media asset. The value can be up to 1,024 bytes in length. The value must be encoded in UTF-8.
        :param media_tags: Property mediaTags: The tags of the media asset. Up to 16 tags are supported. Separate multiple tags with commas (,). Each tag can be up to 32 bytes in length. The value must be encoded in UTF-8.
        :param media_type: Property mediaType: The type of the media asset. Valid values: image video audio text We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information .
        :param overwrite: Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values: - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered. - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
        :param reference_id: Property referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
        :param register_config: Property registerConfig: The registration configurations. By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation. By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
        :param smart_tag_template_id: Property smartTagTemplateId: The ID of the smart tagging template. Valid values: S00000101-300080: the system template that supports natural language processing (NLP) for content recognition. S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities. S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition. After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
        :param title: Property title: The title. If you do not specify this parameter, a default title is automatically generated based on the date. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        :param user_data: Property userData: The user data. You can specify a custom callback URL.
        :param workflow_id: Property workflowId: The workflow ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ce2ddaae061e3f2c7ca00a8dc6cc1871b17199ac8824f417d89a36a51c2527e)
            check_type(argname="argument input_url", value=input_url, expected_type=type_hints["input_url"])
            check_type(argname="argument business_type", value=business_type, expected_type=type_hints["business_type"])
            check_type(argname="argument cate_id", value=cate_id, expected_type=type_hints["cate_id"])
            check_type(argname="argument cover_url", value=cover_url, expected_type=type_hints["cover_url"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument media_tags", value=media_tags, expected_type=type_hints["media_tags"])
            check_type(argname="argument media_type", value=media_type, expected_type=type_hints["media_type"])
            check_type(argname="argument overwrite", value=overwrite, expected_type=type_hints["overwrite"])
            check_type(argname="argument reference_id", value=reference_id, expected_type=type_hints["reference_id"])
            check_type(argname="argument register_config", value=register_config, expected_type=type_hints["register_config"])
            check_type(argname="argument smart_tag_template_id", value=smart_tag_template_id, expected_type=type_hints["smart_tag_template_id"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument workflow_id", value=workflow_id, expected_type=type_hints["workflow_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "input_url": input_url,
        }
        if business_type is not None:
            self._values["business_type"] = business_type
        if cate_id is not None:
            self._values["cate_id"] = cate_id
        if cover_url is not None:
            self._values["cover_url"] = cover_url
        if description is not None:
            self._values["description"] = description
        if media_tags is not None:
            self._values["media_tags"] = media_tags
        if media_type is not None:
            self._values["media_type"] = media_type
        if overwrite is not None:
            self._values["overwrite"] = overwrite
        if reference_id is not None:
            self._values["reference_id"] = reference_id
        if register_config is not None:
            self._values["register_config"] = register_config
        if smart_tag_template_id is not None:
            self._values["smart_tag_template_id"] = smart_tag_template_id
        if title is not None:
            self._values["title"] = title
        if user_data is not None:
            self._values["user_data"] = user_data
        if workflow_id is not None:
            self._values["workflow_id"] = workflow_id

    @builtins.property
    def input_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property inputUrl: The URL of the media asset in another service.

        The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
        OSS URL in one of the following formats:
        http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
        oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
        URL of an ApsaraVideo VOD media asset
        vod://***20b48fb04483915d4f2cd8ac****
        '''
        result = self._values.get("input_url")
        assert result is not None, "Required property 'input_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def business_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property businessType: The business type of the media asset.

        Valid values:
        subtitles
        watermark
        opening
        ending
        general
        '''
        result = self._values.get("business_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cate_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cateId: The category ID.'''
        result = self._values.get("cate_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cover_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coverUrl: The thumbnail URL of the media asset.

        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("cover_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the media asset.

        The value can be up to 1,024 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def media_tags(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property mediaTags: The tags of the media asset.

        Up to 16 tags are supported.
        Separate multiple tags with commas (,).
        Each tag can be up to 32 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("media_tags")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mediaType: The type of the media asset.

        Valid values:
        image
        video
        audio
        text
        We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
        .
        '''
        result = self._values.get("media_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def overwrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL.

        Default value: false. Valid values:

        - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
        - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
        '''
        result = self._values.get("overwrite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reference_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property referenceId: The custom ID.

        The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
        '''
        result = self._values.get("reference_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def register_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property registerConfig: The registration configurations.

        By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
        By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
        '''
        result = self._values.get("register_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def smart_tag_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property smartTagTemplateId: The ID of the smart tagging template.

        Valid values:
        S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
        S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
        S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
        After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
        '''
        result = self._values.get("smart_tag_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property title: The title.

        If you do not specify this parameter, a default title is automatically generated based on the date.
        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("title")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property userData: The user data.

        You can specify a custom callback URL.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def workflow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workflowId: The workflow ID.'''
        result = self._values.get("workflow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MediaInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCategory(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosCategory",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::Category``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Category`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCategoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0166976fdfe1ee588d4daaa6c5f159cc91a24a852c308fe73d46331c73c39660)
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
            type_hints = typing.get_type_hints(_typecheckingstub__af092bbe93ea435619d8e18a9ebf4e21daee1aa6b87431587ff32f76c25819e0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCateId")
    def attr_cate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CateId: The ID of the category.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCateId"))

    @builtins.property
    @jsii.member(jsii_name="attrLevel")
    def attr_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Level: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrParentId")
    def attr_parent_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentId: The ID of the parent category.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cateName")
    def cate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        cateName: The category name.
        The value can be up to 64 bytes in length.
        The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cateName"))

    @cate_name.setter
    def cate_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__068a53d5b91fff304801d82e528c702ab0f6fe58550887d2501d5cdbb23f227e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cateName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7cc9e90e232745b2f7882189babc7fc5da7c5fb7db2927ba488de6c6705b1129)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="parentId")
    def parent_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentId: The ID of the parent category.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parentId"))

    @parent_id.setter
    def parent_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84d597bb5a1f875535bcba038958305974a96a44acb30e11e071fd23bf949fad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentId", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the category. Valid values:
        default: audio, video, and image files. This is the default value.
        material: short video materials.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e36a8b0009ec59b255b056f921ffde59150bb9ce560ccdd016399aad4f0b71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosCategoryProps",
    jsii_struct_bases=[],
    name_mapping={"cate_name": "cateName", "parent_id": "parentId", "type": "type"},
)
class RosCategoryProps:
    def __init__(
        self,
        *,
        cate_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCategory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category

        :param cate_name: 
        :param parent_id: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db846b16da5307e5e761c9dc13f4f063e9b62830ddbc9040362dd6a1c7def470)
            check_type(argname="argument cate_name", value=cate_name, expected_type=type_hints["cate_name"])
            check_type(argname="argument parent_id", value=parent_id, expected_type=type_hints["parent_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cate_name": cate_name,
        }
        if parent_id is not None:
            self._values["parent_id"] = parent_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def cate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        cateName: The category name.
        The value can be up to 64 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("cate_name")
        assert result is not None, "Required property 'cate_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentId: The ID of the parent category.
        '''
        result = self._values.get("parent_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the category. Valid values:
        default: audio, video, and image files. This is the default value.
        material: short video materials.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCategoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInsertMediaToSearchLib(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosInsertMediaToSearchLib",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::InsertMediaToSearchLib``, which is used to add a media asset to a search library.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InsertMediaToSearchLib`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInsertMediaToSearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ef20cf5466aaf17cf04d8bf1062d7e0a444955c4592a50152550bc78ce6e39e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8e013df05b49ccf9aadb2f3a406ee466cb634bf11f206a3c5f21ecf24e07033d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MediaId: The ID of the media asset.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__16c3d1bbea496bc33b948c0fb91002c94a52d020157e2de47f24aeb2b2c8b8db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="input")
    def input(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        input: The URL of the video, audio, or image file that you want to import to the search library.
        Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
        Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
        Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "input"))

    @input.setter
    def input(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f71e1b0b5a3d2fd03f82933b1061e7aca54ee69de2229a1ea9e87c28b165ee96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "input", value)

    @builtins.property
    @jsii.member(jsii_name="mediaId")
    def media_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mediaId"))

    @media_id.setter
    def media_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad3e0b1ed19f2d58bf837b0c926e8ae93f32b9cd696448339b1dbffb3e499774)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mediaId", value)

    @builtins.property
    @jsii.member(jsii_name="mediaType")
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mediaType: The type of the media asset. Valid values:
        video (default)
        image
        audio
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mediaType"))

    @media_type.setter
    def media_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb4d90143d8ef8372e243a652e551b8823e128c6da249fa8a1a771746635f460)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mediaType", value)

    @builtins.property
    @jsii.member(jsii_name="msgBody")
    def msg_body(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: msgBody: The message body.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "msgBody"))

    @msg_body.setter
    def msg_body(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__552fe33a32573aa96d3d5a1d2e9361fc534492a9d9ee4579178fe35fec36dd19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "msgBody", value)

    @builtins.property
    @jsii.member(jsii_name="searchLibName")
    def search_lib_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchLibName: The name of the search library. Default value: ims-default-search-lib.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchLibName"))

    @search_lib_name.setter
    def search_lib_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5414ac5583d5d5af59e393b95fd2b6a6e10883874a5ab7aef3b9d7cb193b5cea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchLibName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosInsertMediaToSearchLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "input": "input",
        "media_id": "mediaId",
        "media_type": "mediaType",
        "msg_body": "msgBody",
        "search_lib_name": "searchLibName",
    },
)
class RosInsertMediaToSearchLibProps:
    def __init__(
        self,
        *,
        input: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        media_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        msg_body: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        search_lib_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInsertMediaToSearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib

        :param input: 
        :param media_id: 
        :param media_type: 
        :param msg_body: 
        :param search_lib_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac16a02722118710b0055c14d0081aed79bf214aeb036b0c16bb881c6a100b16)
            check_type(argname="argument input", value=input, expected_type=type_hints["input"])
            check_type(argname="argument media_id", value=media_id, expected_type=type_hints["media_id"])
            check_type(argname="argument media_type", value=media_type, expected_type=type_hints["media_type"])
            check_type(argname="argument msg_body", value=msg_body, expected_type=type_hints["msg_body"])
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "input": input,
        }
        if media_id is not None:
            self._values["media_id"] = media_id
        if media_type is not None:
            self._values["media_type"] = media_type
        if msg_body is not None:
            self._values["msg_body"] = msg_body
        if search_lib_name is not None:
            self._values["search_lib_name"] = search_lib_name

    @builtins.property
    def input(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        input: The URL of the video, audio, or image file that you want to import to the search library.
        Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
        Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-]/[object_path-].
        Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-****.mp4.
        '''
        result = self._values.get("input")
        assert result is not None, "Required property 'input' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def media_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mediaId: The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
        '''
        result = self._values.get("media_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mediaType: The type of the media asset. Valid values:
        video (default)
        image
        audio
        '''
        result = self._values.get("media_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def msg_body(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: msgBody: The message body.
        '''
        result = self._values.get("msg_body")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchLibName: The name of the search library. Default value: ims-default-search-lib.
        '''
        result = self._values.get("search_lib_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInsertMediaToSearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMediaInfo(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosMediaInfo",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::MediaInfo``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MediaInfo`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMediaInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac8e29a9ed3706af3902d358153e71e0083c248c1bbae1c6c310a89d12d06406)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8fa495a7348998d024342d2f2b5db7d86aa2756c2cb8bb62be6fd93c34ce3e17)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MediaId: The ID of the media asset in IMS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__61063ad67a44c1eb1ccda514738105b4440b58da1ee0d25bc83e9f6c1788f8e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="inputUrl")
    def input_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
        OSS URL in one of the following formats:
        http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
        oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
        URL of an ApsaraVideo VOD media asset
        vod://***20b48fb04483915d4f2cd8ac****
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "inputUrl"))

    @input_url.setter
    def input_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9f7413ac86eacac364d434269be7acadf1191c200103c65dab0a3eb782de483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inputUrl", value)

    @builtins.property
    @jsii.member(jsii_name="businessType")
    def business_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        businessType: The business type of the media asset. Valid values:
        subtitles
        watermark
        opening
        ending
        general
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "businessType"))

    @business_type.setter
    def business_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7300d994158aeea3368135163fd0be4b5184e327bfc34af370275456aafce99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "businessType", value)

    @builtins.property
    @jsii.member(jsii_name="cateId")
    def cate_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cateId: The category ID.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cateId"))

    @cate_id.setter
    def cate_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a0bcca1fa83ad3ea3b4a0f9727750e3d4eba0b9a5a3b2ecd0ae226d2532f9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cateId", value)

    @builtins.property
    @jsii.member(jsii_name="coverUrl")
    def cover_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coverUrl: The thumbnail URL of the media asset.
        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coverUrl"))

    @cover_url.setter
    def cover_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5049a440da8eb4749a248698eb83fb537e918897df7370fedfcd48fc72fbcbc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coverUrl", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the media asset.
        The value can be up to 1,024 bytes in length.
        The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca368b74218ff317a5cd1f03737ef8f38e61a986cf3850a8aeb2e80ffefdbc5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="mediaTags")
    def media_tags(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        mediaTags: The tags of the media asset.
        Up to 16 tags are supported.
        Separate multiple tags with commas (,).
        Each tag can be up to 32 bytes in length.
        The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "mediaTags"))

    @media_tags.setter
    def media_tags(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5a488859527a9d19b97ffe8ce6d5dc145afd133b62c01ecc88ca984e8ba3f99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mediaTags", value)

    @builtins.property
    @jsii.member(jsii_name="mediaType")
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mediaType: The type of the media asset. Valid values:
        image
        video
        audio
        text
        We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
        .
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mediaType"))

    @media_type.setter
    def media_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__318f354678886dd4515fc3613b85a29d9b011ca308d8b7581aab0a7bb28dda2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mediaType", value)

    @builtins.property
    @jsii.member(jsii_name="overwrite")
    def overwrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:

        - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
        - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "overwrite"))

    @overwrite.setter
    def overwrite(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__235c49ec450f950b1c4306352ab8dae9b12e802b82dacb2006d9d32605fd738d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "overwrite", value)

    @builtins.property
    @jsii.member(jsii_name="referenceId")
    def reference_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "referenceId"))

    @reference_id.setter
    def reference_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d53c8f8ebc0089f92623f83158623eb351897146eeca1b991bfe2088001c90cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "referenceId", value)

    @builtins.property
    @jsii.member(jsii_name="registerConfig")
    def register_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        registerConfig: The registration configurations.
        By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
        By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "registerConfig"))

    @register_config.setter
    def register_config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72a27a2a10b919e3dba9c67a422bef3bdb1217754578bc8da77f071a4622f190)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "registerConfig", value)

    @builtins.property
    @jsii.member(jsii_name="smartTagTemplateId")
    def smart_tag_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        smartTagTemplateId: The ID of the smart tagging template. Valid values:
        S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
        S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
        S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
        After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "smartTagTemplateId"))

    @smart_tag_template_id.setter
    def smart_tag_template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92b9973453cd8e98cd701ae127edcd473168000820406d2702bc14b11150e05c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartTagTemplateId", value)

    @builtins.property
    @jsii.member(jsii_name="title")
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "title"))

    @title.setter
    def title(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e42824de25af7ceddde3e9f5138485093f388da75f5f861c2f47962dbbdcb4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "title", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: userData: The user data. You can specify a custom callback URL.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f50f52a9206334e50419338b59f38562a40a3ed8f0cbf07e6944b8e31145d8b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)

    @builtins.property
    @jsii.member(jsii_name="workflowId")
    def workflow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workflowId: The workflow ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workflowId"))

    @workflow_id.setter
    def workflow_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12c372ba7989b3f2da3597429d824cd392ce20d0c2aad47c85aa25d809170df2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workflowId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosMediaInfoProps",
    jsii_struct_bases=[],
    name_mapping={
        "input_url": "inputUrl",
        "business_type": "businessType",
        "cate_id": "cateId",
        "cover_url": "coverUrl",
        "description": "description",
        "media_tags": "mediaTags",
        "media_type": "mediaType",
        "overwrite": "overwrite",
        "reference_id": "referenceId",
        "register_config": "registerConfig",
        "smart_tag_template_id": "smartTagTemplateId",
        "title": "title",
        "user_data": "userData",
        "workflow_id": "workflowId",
    },
)
class RosMediaInfoProps:
    def __init__(
        self,
        *,
        input_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        business_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cate_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cover_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        media_tags: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        overwrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reference_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        register_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        smart_tag_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        workflow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMediaInfo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo

        :param input_url: 
        :param business_type: 
        :param cate_id: 
        :param cover_url: 
        :param description: 
        :param media_tags: 
        :param media_type: 
        :param overwrite: 
        :param reference_id: 
        :param register_config: 
        :param smart_tag_template_id: 
        :param title: 
        :param user_data: 
        :param workflow_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e65d3a2540bd708db5734980de4f8942874a2848c0ccf1d4c89073b6d8dc2afa)
            check_type(argname="argument input_url", value=input_url, expected_type=type_hints["input_url"])
            check_type(argname="argument business_type", value=business_type, expected_type=type_hints["business_type"])
            check_type(argname="argument cate_id", value=cate_id, expected_type=type_hints["cate_id"])
            check_type(argname="argument cover_url", value=cover_url, expected_type=type_hints["cover_url"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument media_tags", value=media_tags, expected_type=type_hints["media_tags"])
            check_type(argname="argument media_type", value=media_type, expected_type=type_hints["media_type"])
            check_type(argname="argument overwrite", value=overwrite, expected_type=type_hints["overwrite"])
            check_type(argname="argument reference_id", value=reference_id, expected_type=type_hints["reference_id"])
            check_type(argname="argument register_config", value=register_config, expected_type=type_hints["register_config"])
            check_type(argname="argument smart_tag_template_id", value=smart_tag_template_id, expected_type=type_hints["smart_tag_template_id"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument workflow_id", value=workflow_id, expected_type=type_hints["workflow_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "input_url": input_url,
        }
        if business_type is not None:
            self._values["business_type"] = business_type
        if cate_id is not None:
            self._values["cate_id"] = cate_id
        if cover_url is not None:
            self._values["cover_url"] = cover_url
        if description is not None:
            self._values["description"] = description
        if media_tags is not None:
            self._values["media_tags"] = media_tags
        if media_type is not None:
            self._values["media_type"] = media_type
        if overwrite is not None:
            self._values["overwrite"] = overwrite
        if reference_id is not None:
            self._values["reference_id"] = reference_id
        if register_config is not None:
            self._values["register_config"] = register_config
        if smart_tag_template_id is not None:
            self._values["smart_tag_template_id"] = smart_tag_template_id
        if title is not None:
            self._values["title"] = title
        if user_data is not None:
            self._values["user_data"] = user_data
        if workflow_id is not None:
            self._values["workflow_id"] = workflow_id

    @builtins.property
    def input_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        inputUrl: The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered. The following types of URLs are supported:
        OSS URL in one of the following formats:
        http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
        oss://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
        URL of an ApsaraVideo VOD media asset
        vod://***20b48fb04483915d4f2cd8ac****
        '''
        result = self._values.get("input_url")
        assert result is not None, "Required property 'input_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def business_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        businessType: The business type of the media asset. Valid values:
        subtitles
        watermark
        opening
        ending
        general
        '''
        result = self._values.get("business_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cate_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cateId: The category ID.
        '''
        result = self._values.get("cate_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cover_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coverUrl: The thumbnail URL of the media asset.
        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("cover_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the media asset.
        The value can be up to 1,024 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def media_tags(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        mediaTags: The tags of the media asset.
        Up to 16 tags are supported.
        Separate multiple tags with commas (,).
        Each tag can be up to 32 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("media_tags")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def media_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mediaType: The type of the media asset. Valid values:
        image
        video
        audio
        text
        We recommend that you specify this parameter based on your business requirements. If you set InputURL to an OSS URL, the media asset type can be automatically determined based on the file name extension. For more information
        .
        '''
        result = self._values.get("media_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def overwrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        overwrite: Specifies whether to overwrite the media asset that has been registered by using the same URL. Default value: false. Valid values:

        - true: If a media asset has been registered by using the same URL, the original media asset is deleted and the new media asset is registered.
        - false: If a media asset has been registered by using the same URL, the new media asset is not registered. A URL cannot be used to register multiple media assets.
        '''
        result = self._values.get("overwrite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reference_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: referenceId: The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). Make sure that the ID is unique among users.
        '''
        result = self._values.get("reference_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def register_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        registerConfig: The registration configurations.
        By default, a sprite is generated for the media asset. You can set NeedSprite to false to disable automatic sprite generation.
        By default, a snapshot is generated for the media asset. You can set NeedSnapshot to false to disable automatic snapshot generation.
        '''
        result = self._values.get("register_config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def smart_tag_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        smartTagTemplateId: The ID of the smart tagging template. Valid values:
        S00000101-300080: the system template that supports natural language processing (NLP) for content recognition.
        S00000103-000001: the system template that supports NLP for content recognition and all tagging capabilities.
        S00000103-000002: the system template that supports all tagging capabilities but does not support NLP for content recognition.
        After you configure this parameter, a smart tag analysis task is automatically initiated after the media asset is registered. For more information about the billable items.
        '''
        result = self._values.get("smart_tag_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        title: The title. If you do not specify this parameter, a default title is automatically generated based on the date.
        The value can be up to 128 bytes in length.
        The value must be encoded in UTF-8.
        '''
        result = self._values.get("title")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: userData: The user data. You can specify a custom callback URL.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def workflow_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workflowId: The workflow ID.
        '''
        result = self._values.get("workflow_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMediaInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSearchLib(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosSearchLib",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::SearchLib``, which is used to create a search library.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SearchLib`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a90f16b9f888330d29f098afcac98750bec32b46601aa93c20fd3b46ff00ede)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9b7f354767ccbe5d13f6a1ab57c4507de7b801345f615a01c72c3ddad5901fb9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SearchLibName: The name of the Search Lib.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchLibName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__eed4677cd187f56922cb32f1a1505e9fda4e43eb886a3d5ce57acc200aa277d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="searchLibName")
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searchLibName: The name of the Search Lib.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "searchLibName"))

    @search_lib_name.setter
    def search_lib_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deb8553d6d6319a5ab1dc5153cb1ac2896f6391875b83a6267ffb4ab9305e44f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchLibName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosSearchLibProps",
    jsii_struct_bases=[],
    name_mapping={"search_lib_name": "searchLibName"},
)
class RosSearchLibProps:
    def __init__(
        self,
        *,
        search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib

        :param search_lib_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69cc9e9f60d0c89a8b6693b44f30ae4f84961a8b2fc00509ac0da019f4877b71)
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "search_lib_name": search_lib_name,
        }

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searchLibName: The name of the Search Lib.
        '''
        result = self._values.get("search_lib_name")
        assert result is not None, "Required property 'search_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUploadMedia(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosUploadMedia",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::UploadMedia``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UploadMedia`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUploadMediaProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83cb429105e7bf498bf81f20e304be2c152953b5d1452b9aad784d28e89f41eb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2536c14a4aa46abd3ada51d1db5e2c50165be1a7791f82a35423081ba8aaafc7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileUrl")
    def attr_file_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileURL: The OSS URL of the file. The URL does not contain the information used for authentication.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MediaId: The ID of the media asset.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaUrl")
    def attr_media_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        MediaURL: The URL of the media asset.
        Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMediaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAddress")
    def attr_upload_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        UploadAddress: The upload URL.
        Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUploadAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAuth")
    def attr_upload_auth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        UploadAuth: The upload credential.
        Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUploadAuth"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fc45435829300e8ece20cd5278d4d58fd4dcb3fcea6adda807bbf4376e244e02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appId: The application ID. Default value: app-1000000.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e77ea7c7912818c89f646edfff8d393659e1cf59ec46bc0ff99c487578557751)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appId", value)

    @builtins.property
    @jsii.member(jsii_name="entityId")
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "entityId"))

    @entity_id.setter
    def entity_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bac22822d404cb6109b89debf9373822108df470ec3c939147b29e1eb28b673d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entityId", value)

    @builtins.property
    @jsii.member(jsii_name="fileInfo")
    def file_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        fileInfo: The file information, which is in the JSON format and contains the following fields:
        Type: required. The file type. Valid values: video, image, audio, text, and other.
        Name: required. The file name without the extension.
        Size: optional. The file size.
        Ext: required. The file name extension.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "fileInfo"))

    @file_info.setter
    def file_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7603afed17ad34ef8e9271581404d88109a860adbbe3cca3cb088caf437e5a3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileInfo", value)

    @builtins.property
    @jsii.member(jsii_name="mediaMetaData")
    def media_meta_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields:
        Title: required.
        The value can be up to 128 characters in length.
        The value must be encoded in UTF-8.
        Description: optional.
        The value can be up to 1,024 characters in length.
        The value must be encoded in UTF-8.
        CateId: optional.
        Tags: optional.
        BusinessType: required. Valid values:
        opening or ending if Type is set to video
        default or cover if Type is set to image
        subtitles or font if Type is set to text
        watermark if Type is set to material
        general CoverURL: optional.
        DynamicMetaData: The value is a string.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "mediaMetaData"))

    @media_meta_data.setter
    def media_meta_data(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d40c8d918e7868eeadf36905513a02241c2eb818cc26ae3cf271b04cb077d74e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mediaMetaData", value)

    @builtins.property
    @jsii.member(jsii_name="postProcessConfig")
    def post_process_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "postProcessConfig"))

    @post_process_config.setter
    def post_process_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdc2e7c2dc2521560f05f7b7d999714c0c262d7fa0813da53767e5a1d0970ef3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postProcessConfig", value)

    @builtins.property
    @jsii.member(jsii_name="uploadTargetConfig")
    def upload_target_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        uploadTargetConfig: The destination storage address.
        Set StorageType to oss.
        Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "uploadTargetConfig"))

    @upload_target_config.setter
    def upload_target_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96b8ad3995cc2d95fe00cbcbab35464a35d983d216b202ae9b915a2c7f0dde9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uploadTargetConfig", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94d8083709f19f148496a9027fb8c293a2f34f8745d7282bcd6d7b5409d11a08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosUploadMediaProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "entity_id": "entityId",
        "file_info": "fileInfo",
        "media_meta_data": "mediaMetaData",
        "post_process_config": "postProcessConfig",
        "upload_target_config": "uploadTargetConfig",
        "user_data": "userData",
    },
)
class RosUploadMediaProps:
    def __init__(
        self,
        *,
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        media_meta_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        post_process_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        upload_target_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosUploadMedia``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia

        :param app_id: 
        :param entity_id: 
        :param file_info: 
        :param media_meta_data: 
        :param post_process_config: 
        :param upload_target_config: 
        :param user_data: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baef9b0ba0a71135b4d20c69e248c00fab5df748c266bf5645a0d52bf0c0fd47)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument entity_id", value=entity_id, expected_type=type_hints["entity_id"])
            check_type(argname="argument file_info", value=file_info, expected_type=type_hints["file_info"])
            check_type(argname="argument media_meta_data", value=media_meta_data, expected_type=type_hints["media_meta_data"])
            check_type(argname="argument post_process_config", value=post_process_config, expected_type=type_hints["post_process_config"])
            check_type(argname="argument upload_target_config", value=upload_target_config, expected_type=type_hints["upload_target_config"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_id is not None:
            self._values["app_id"] = app_id
        if entity_id is not None:
            self._values["entity_id"] = entity_id
        if file_info is not None:
            self._values["file_info"] = file_info
        if media_meta_data is not None:
            self._values["media_meta_data"] = media_meta_data
        if post_process_config is not None:
            self._values["post_process_config"] = post_process_config
        if upload_target_config is not None:
            self._values["upload_target_config"] = upload_target_config
        if user_data is not None:
            self._values["user_data"] = user_data

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appId: The application ID. Default value: app-1000000.
        '''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
        '''
        result = self._values.get("entity_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        fileInfo: The file information, which is in the JSON format and contains the following fields:
        Type: required. The file type. Valid values: video, image, audio, text, and other.
        Name: required. The file name without the extension.
        Size: optional. The file size.
        Ext: required. The file name extension.
        '''
        result = self._values.get("file_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def media_meta_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields:
        Title: required.
        The value can be up to 128 characters in length.
        The value must be encoded in UTF-8.
        Description: optional.
        The value can be up to 1,024 characters in length.
        The value must be encoded in UTF-8.
        CateId: optional.
        Tags: optional.
        BusinessType: required. Valid values:
        opening or ending if Type is set to video
        default or cover if Type is set to image
        subtitles or font if Type is set to text
        watermark if Type is set to material
        general CoverURL: optional.
        DynamicMetaData: The value is a string.
        '''
        result = self._values.get("media_meta_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def post_process_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
        '''
        result = self._values.get("post_process_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def upload_target_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        uploadTargetConfig: The destination storage address.
        Set StorageType to oss.
        Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
        '''
        result = self._values.get("upload_target_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUploadMediaProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISearchLib)
class SearchLib(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.SearchLib",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::SearchLib``, which is used to create a search library.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSearchLib``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__532bd109695555bc823e14799286317d063b3c76ff24704bd4cefe4d3a94b32f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchLibName: The name of the Search Lib.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchLibName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SearchLibProps":
        return typing.cast("SearchLibProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a38826d6d9311aee06b09284293faeee3a880456e10167bcd29e0431f10a2db2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee91b95c078114864f83f4e8b7eec62c8ef5995a23c7eafaa75aefae331b1d28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a329664c06454ff7ec6dcf95e75a3e4f9581509eef88a37d9f157589fe7c1359)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.SearchLibProps",
    jsii_struct_bases=[],
    name_mapping={"search_lib_name": "searchLibName"},
)
class SearchLibProps:
    def __init__(
        self,
        *,
        search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``SearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib

        :param search_lib_name: Property searchLibName: The name of the Search Lib.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3be7221910143bcc9e69b3a6f7b69e6f9bbde0afd692aba14dedb11c4b43c8)
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "search_lib_name": search_lib_name,
        }

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property searchLibName: The name of the Search Lib.'''
        result = self._values.get("search_lib_name")
        assert result is not None, "Required property 'search_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUploadMedia)
class UploadMedia(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.UploadMedia",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::UploadMedia``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUploadMedia``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["UploadMediaProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd1c57f9a221f598e90a11491321f13a0f5dd803e84acd893388c58791518c5d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileUrl")
    def attr_file_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FileURL: The OSS URL of the file.

        The URL does not contain the information used for authentication.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFileUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaId")
    def attr_media_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaId: The ID of the media asset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaId"))

    @builtins.property
    @jsii.member(jsii_name="attrMediaUrl")
    def attr_media_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MediaURL: The URL of the media asset.

        Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMediaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAddress")
    def attr_upload_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAddress: The upload URL.

        Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUploadAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrUploadAuth")
    def attr_upload_auth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UploadAuth: The upload credential.

        Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUploadAuth"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UploadMediaProps":
        return typing.cast("UploadMediaProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86057edd6c098b3e4dd0a3aba5dae59d8b38d17acb642d4a2def02b852d420c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a454912c562f91f5df36bd2d0ce42ca3f3c8081a830fb7f2213dd21b6314c7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13d7019bc58d0800e5b1e10476f339388759a81d957642048cc8b5c0e2dd2ca6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.UploadMediaProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "entity_id": "entityId",
        "file_info": "fileInfo",
        "media_meta_data": "mediaMetaData",
        "post_process_config": "postProcessConfig",
        "upload_target_config": "uploadTargetConfig",
        "user_data": "userData",
    },
)
class UploadMediaProps:
    def __init__(
        self,
        *,
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        media_meta_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        post_process_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        upload_target_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``UploadMedia``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia

        :param app_id: Property appId: The application ID. Default value: app-1000000.
        :param entity_id: Property entityId: The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
        :param file_info: Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required. The file type. Valid values: video, image, audio, text, and other. Name: required. The file name without the extension. Size: optional. The file size. Ext: required. The file name extension.
        :param media_meta_data: Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required. The value can be up to 128 characters in length. The value must be encoded in UTF-8. Description: optional. The value can be up to 1,024 characters in length. The value must be encoded in UTF-8. CateId: optional. Tags: optional. BusinessType: required. Valid values: opening or ending if Type is set to video default or cover if Type is set to image subtitles or font if Type is set to text watermark if Type is set to material general CoverURL: optional. DynamicMetaData: The value is a string.
        :param post_process_config: Property postProcessConfig: Type = video || audio There is a post-upload processing action. ProcessType Value: Workflow.
        :param upload_target_config: Property uploadTargetConfig: The destination storage address. Set StorageType to oss. Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
        :param user_data: Property userData: The user data. The value must be a JSON string. You can configure settings such as message callbacks.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98a9c6f98ce9ca841802cecc3043be13d4600317311e9ba27636a992c572fafe)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument entity_id", value=entity_id, expected_type=type_hints["entity_id"])
            check_type(argname="argument file_info", value=file_info, expected_type=type_hints["file_info"])
            check_type(argname="argument media_meta_data", value=media_meta_data, expected_type=type_hints["media_meta_data"])
            check_type(argname="argument post_process_config", value=post_process_config, expected_type=type_hints["post_process_config"])
            check_type(argname="argument upload_target_config", value=upload_target_config, expected_type=type_hints["upload_target_config"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_id is not None:
            self._values["app_id"] = app_id
        if entity_id is not None:
            self._values["entity_id"] = entity_id
        if file_info is not None:
            self._values["file_info"] = file_info
        if media_meta_data is not None:
            self._values["media_meta_data"] = media_meta_data
        if post_process_config is not None:
            self._values["post_process_config"] = post_process_config
        if upload_target_config is not None:
            self._values["upload_target_config"] = upload_target_config
        if user_data is not None:
            self._values["user_data"] = user_data

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appId: The application ID.

        Default value: app-1000000.
        '''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def entity_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property entityId: The entity ID.

        You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
        '''
        result = self._values.get("entity_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property fileInfo: The file information, which is in the JSON format and contains the following fields: Type: required.

        The file type. Valid values: video, image, audio, text, and other.
        Name: required. The file name without the extension.
        Size: optional. The file size.
        Ext: required. The file name extension.
        '''
        result = self._values.get("file_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def media_meta_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property mediaMetaData: The metadata of the media asset, which is a JSON string that contains the following fields: Title: required.

        The value can be up to 128 characters in length.
        The value must be encoded in UTF-8.
        Description: optional.
        The value can be up to 1,024 characters in length.
        The value must be encoded in UTF-8.
        CateId: optional.
        Tags: optional.
        BusinessType: required. Valid values:
        opening or ending if Type is set to video
        default or cover if Type is set to image
        subtitles or font if Type is set to text
        watermark if Type is set to material
        general CoverURL: optional.
        DynamicMetaData: The value is a string.
        '''
        result = self._values.get("media_meta_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def post_process_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property postProcessConfig: Type = video || audio There is a post-upload processing action.

        ProcessType Value: Workflow.
        '''
        result = self._values.get("post_process_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def upload_target_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property uploadTargetConfig: The destination storage address.

        Set StorageType to oss.
        Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
        '''
        result = self._values.get("upload_target_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property userData: The user data.

        The value must be a JSON string. You can configure settings such as message callbacks.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UploadMediaProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICategory)
class Category(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.Category",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::Category``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCategory``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CategoryProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ae24d074ba898accecc089ae626043b50c3f30d64768941c79782801b31db54)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCateId")
    def attr_cate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CateId: The ID of the category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCateId"))

    @builtins.property
    @jsii.member(jsii_name="attrLevel")
    def attr_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Level: The level of the category.

        The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrParentId")
    def attr_parent_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentId: The ID of the parent category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CategoryProps:
        return typing.cast(CategoryProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b5b7b1cba06fe1e4c3387575de34ef934fd6e02765f726798381385c514966f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dadd9014322f6a6c9763f8d2769965d6f1aa76ce1ce172ac478e1f2a9294b44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2409e25e77c9d0b5d499c07ca18ae7d7f1a1fb2ca6d9139f7f072b5dcf51e625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Category",
    "CategoryProps",
    "ICategory",
    "IInsertMediaToSearchLib",
    "IMediaInfo",
    "ISearchLib",
    "IUploadMedia",
    "InsertMediaToSearchLib",
    "InsertMediaToSearchLibProps",
    "MediaInfo",
    "MediaInfoProps",
    "RosCategory",
    "RosCategoryProps",
    "RosInsertMediaToSearchLib",
    "RosInsertMediaToSearchLibProps",
    "RosMediaInfo",
    "RosMediaInfoProps",
    "RosSearchLib",
    "RosSearchLibProps",
    "RosUploadMedia",
    "RosUploadMediaProps",
    "SearchLib",
    "SearchLibProps",
    "UploadMedia",
    "UploadMediaProps",
]

publication.publish()

def _typecheckingstub__8d3fcc8dc3afb5612cf428cc49e0377f5efd2938f65567bc0879f840f3370f88(
    *,
    cate_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67be7fa32c6631f0b7d3b2d2a5b86838586b9569f9126be5a1e58c1522f960e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InsertMediaToSearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d19132eba792dc121ca451e1ddc0c29e60a5dfe225b7ad65c697fef8b7f25e9d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c10f98fe19941735880df592609d05c37592c488dc9d1e443422dc01c686cf8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ea64723e8214989567c8bcb5a35cf07a92b4bf53294e84b6b4087a6818dcd1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eecfc6ad93f68691660056631fa03103ef2263820b3e7e4bef65fb533aad2f8f(
    *,
    input: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    media_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    msg_body: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    search_lib_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e952053da27fc728a3068f7d5c4969744b771738e11f74666ea1fd22052e050(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MediaInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__777f43c96a7ce9c016d6850d7a76671ffdf806bd4a6e27cc9fab8a3003176dd0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bed9f019f828178622c445b1f51ec73b4a7cc2271a1298f5221f35abf994d79(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39b5415fb7ddfb57f447747583ded01e6226d8e8e03d4925f0a0b75f2c59d9d2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ce2ddaae061e3f2c7ca00a8dc6cc1871b17199ac8824f417d89a36a51c2527e(
    *,
    input_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    business_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cate_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cover_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    media_tags: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    overwrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reference_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    register_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    smart_tag_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    workflow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0166976fdfe1ee588d4daaa6c5f159cc91a24a852c308fe73d46331c73c39660(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCategoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af092bbe93ea435619d8e18a9ebf4e21daee1aa6b87431587ff32f76c25819e0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__068a53d5b91fff304801d82e528c702ab0f6fe58550887d2501d5cdbb23f227e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cc9e90e232745b2f7882189babc7fc5da7c5fb7db2927ba488de6c6705b1129(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84d597bb5a1f875535bcba038958305974a96a44acb30e11e071fd23bf949fad(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37e36a8b0009ec59b255b056f921ffde59150bb9ce560ccdd016399aad4f0b71(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db846b16da5307e5e761c9dc13f4f063e9b62830ddbc9040362dd6a1c7def470(
    *,
    cate_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ef20cf5466aaf17cf04d8bf1062d7e0a444955c4592a50152550bc78ce6e39e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInsertMediaToSearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e013df05b49ccf9aadb2f3a406ee466cb634bf11f206a3c5f21ecf24e07033d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16c3d1bbea496bc33b948c0fb91002c94a52d020157e2de47f24aeb2b2c8b8db(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f71e1b0b5a3d2fd03f82933b1061e7aca54ee69de2229a1ea9e87c28b165ee96(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad3e0b1ed19f2d58bf837b0c926e8ae93f32b9cd696448339b1dbffb3e499774(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb4d90143d8ef8372e243a652e551b8823e128c6da249fa8a1a771746635f460(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__552fe33a32573aa96d3d5a1d2e9361fc534492a9d9ee4579178fe35fec36dd19(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5414ac5583d5d5af59e393b95fd2b6a6e10883874a5ab7aef3b9d7cb193b5cea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac16a02722118710b0055c14d0081aed79bf214aeb036b0c16bb881c6a100b16(
    *,
    input: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    media_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    msg_body: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    search_lib_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac8e29a9ed3706af3902d358153e71e0083c248c1bbae1c6c310a89d12d06406(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMediaInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fa495a7348998d024342d2f2b5db7d86aa2756c2cb8bb62be6fd93c34ce3e17(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61063ad67a44c1eb1ccda514738105b4440b58da1ee0d25bc83e9f6c1788f8e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9f7413ac86eacac364d434269be7acadf1191c200103c65dab0a3eb782de483(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7300d994158aeea3368135163fd0be4b5184e327bfc34af370275456aafce99(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a0bcca1fa83ad3ea3b4a0f9727750e3d4eba0b9a5a3b2ecd0ae226d2532f9d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5049a440da8eb4749a248698eb83fb537e918897df7370fedfcd48fc72fbcbc9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca368b74218ff317a5cd1f03737ef8f38e61a986cf3850a8aeb2e80ffefdbc5b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5a488859527a9d19b97ffe8ce6d5dc145afd133b62c01ecc88ca984e8ba3f99(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__318f354678886dd4515fc3613b85a29d9b011ca308d8b7581aab0a7bb28dda2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__235c49ec450f950b1c4306352ab8dae9b12e802b82dacb2006d9d32605fd738d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d53c8f8ebc0089f92623f83158623eb351897146eeca1b991bfe2088001c90cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72a27a2a10b919e3dba9c67a422bef3bdb1217754578bc8da77f071a4622f190(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92b9973453cd8e98cd701ae127edcd473168000820406d2702bc14b11150e05c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e42824de25af7ceddde3e9f5138485093f388da75f5f861c2f47962dbbdcb4f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f50f52a9206334e50419338b59f38562a40a3ed8f0cbf07e6944b8e31145d8b1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12c372ba7989b3f2da3597429d824cd392ce20d0c2aad47c85aa25d809170df2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e65d3a2540bd708db5734980de4f8942874a2848c0ccf1d4c89073b6d8dc2afa(
    *,
    input_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    business_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cate_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cover_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    media_tags: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    media_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    overwrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reference_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    register_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    smart_tag_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    workflow_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a90f16b9f888330d29f098afcac98750bec32b46601aa93c20fd3b46ff00ede(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b7f354767ccbe5d13f6a1ab57c4507de7b801345f615a01c72c3ddad5901fb9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eed4677cd187f56922cb32f1a1505e9fda4e43eb886a3d5ce57acc200aa277d1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deb8553d6d6319a5ab1dc5153cb1ac2896f6391875b83a6267ffb4ab9305e44f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69cc9e9f60d0c89a8b6693b44f30ae4f84961a8b2fc00509ac0da019f4877b71(
    *,
    search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83cb429105e7bf498bf81f20e304be2c152953b5d1452b9aad784d28e89f41eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUploadMediaProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2536c14a4aa46abd3ada51d1db5e2c50165be1a7791f82a35423081ba8aaafc7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc45435829300e8ece20cd5278d4d58fd4dcb3fcea6adda807bbf4376e244e02(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e77ea7c7912818c89f646edfff8d393659e1cf59ec46bc0ff99c487578557751(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bac22822d404cb6109b89debf9373822108df470ec3c939147b29e1eb28b673d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7603afed17ad34ef8e9271581404d88109a860adbbe3cca3cb088caf437e5a3f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d40c8d918e7868eeadf36905513a02241c2eb818cc26ae3cf271b04cb077d74e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdc2e7c2dc2521560f05f7b7d999714c0c262d7fa0813da53767e5a1d0970ef3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96b8ad3995cc2d95fe00cbcbab35464a35d983d216b202ae9b915a2c7f0dde9e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94d8083709f19f148496a9027fb8c293a2f34f8745d7282bcd6d7b5409d11a08(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baef9b0ba0a71135b4d20c69e248c00fab5df748c266bf5645a0d52bf0c0fd47(
    *,
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    media_meta_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    post_process_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    upload_target_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__532bd109695555bc823e14799286317d063b3c76ff24704bd4cefe4d3a94b32f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a38826d6d9311aee06b09284293faeee3a880456e10167bcd29e0431f10a2db2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee91b95c078114864f83f4e8b7eec62c8ef5995a23c7eafaa75aefae331b1d28(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a329664c06454ff7ec6dcf95e75a3e4f9581509eef88a37d9f157589fe7c1359(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f3be7221910143bcc9e69b3a6f7b69e6f9bbde0afd692aba14dedb11c4b43c8(
    *,
    search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd1c57f9a221f598e90a11491321f13a0f5dd803e84acd893388c58791518c5d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[UploadMediaProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86057edd6c098b3e4dd0a3aba5dae59d8b38d17acb642d4a2def02b852d420c0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a454912c562f91f5df36bd2d0ce42ca3f3c8081a830fb7f2213dd21b6314c7e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13d7019bc58d0800e5b1e10476f339388759a81d957642048cc8b5c0e2dd2ca6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98a9c6f98ce9ca841802cecc3043be13d4600317311e9ba27636a992c572fafe(
    *,
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    media_meta_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    post_process_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    upload_target_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    user_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ae24d074ba898accecc089ae626043b50c3f30d64768941c79782801b31db54(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CategoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b5b7b1cba06fe1e4c3387575de34ef934fd6e02765f726798381385c514966f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dadd9014322f6a6c9763f8d2769965d6f1aa76ce1ce172ac478e1f2a9294b44(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2409e25e77c9d0b5d499c07ca18ae7d7f1a1fb2ca6d9139f7f072b5dcf51e625(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
