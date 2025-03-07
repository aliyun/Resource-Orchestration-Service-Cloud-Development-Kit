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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.datasource.BucketProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "refresh_options": "refreshOptions"},
)
class BucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Bucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket

        :param bucket_name: Property bucketName: Bucket name. The naming conventions for buckets are as follows: Only lowercase letters, numbers, and dashes (-) can be included. Must start and end with lowercase letters or numbers. The length must be between 3 and 63 characters.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a70a3b32064bf58a978a9f8fcaca0b116718e1f42a473e81f670fec9d29e13a)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: Bucket name.

        The naming conventions for buckets are as follows:
        Only lowercase letters, numbers, and dashes (-) can be included.
        Must start and end with lowercase letters or numbers.
        The length must be between 3 and 63 characters.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.datasource.BucketsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions"},
)
class BucketsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Buckets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24607a5d058c212a01c6e6da6cd80cec18c23efcbc5ca19de0ff533465a4bb45)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.datasource.IBucket")
class IBucket(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Bucket``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtranetEndpoint")
    def attr_extranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtranetEndpoint: The domain name of the Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLocation")
    def attr_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Location: The region where the Bucket is located.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Bucket name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Container for storing Bucket owner information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageClass")
    def attr_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageClass: The storage type of the Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        ...


class _IBucketProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Bucket``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.datasource.IBucket"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExtranetEndpoint")
    def attr_extranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtranetEndpoint: The domain name of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLocation")
    def attr_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Location: The region where the Bucket is located.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocation"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Bucket name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Container for storing Bucket owner information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageClass")
    def attr_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageClass: The storage type of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        return typing.cast(BucketProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBucket).__jsii_proxy_class__ = lambda : _IBucketProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.datasource.IBuckets")
class IBuckets(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Buckets``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBucketNames")
    def attr_bucket_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketNames: The list of bucket names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The list of buckets.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketsProps:
        ...


class _IBucketsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Buckets``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.datasource.IBuckets"

    @builtins.property
    @jsii.member(jsii_name="attrBucketNames")
    def attr_bucket_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketNames: The list of bucket names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketNames"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The list of buckets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuckets"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketsProps:
        return typing.cast(BucketsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBuckets).__jsii_proxy_class__ = lambda : _IBucketsProxy


class RosBucket(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.datasource.RosBucket",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OSS::Bucket``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Bucket`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0b70be61f8bc427dd91a541099082dd9d1dde84e085b8eb769fe3e171231169)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f7347651cbb9b5229fa503465598f6b7dcae267d3c383d51400748e543185d1d)
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
        :Attribute: CreateTime: The creation time of the Bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExtranetEndpoint")
    def attr_extranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExtranetEndpoint: The domain name of the Bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLocation")
    def attr_location(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Location: The region where the Bucket is located.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLocation"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Bucket name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Owner: Container for storing Bucket owner information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageClass")
    def attr_storage_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageClass: The storage type of the Bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        bucketName: Bucket name. The naming conventions for buckets are as follows:
        Only lowercase letters, numbers, and dashes (-) can be included.
        Must start and end with lowercase letters or numbers.
        The length must be between 3 and 63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44537cb541c0d60c7a2f635ecb5f96b473d86ad4bce6481780d6bf5a15cee6ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ab2c1472f09103d62ab127353bfc32ac29297ad215cabe1dc18cb39d0abcba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5be5438f9a9781ed1a7c30a77ebd6b4967cdc28c09db6b387af7ecf80f931b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.datasource.RosBucketProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "refresh_options": "refreshOptions"},
)
class RosBucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket

        :param bucket_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b53b6332484c45f4854b30f1fc35b16c6a291ea6e5759a1c083e1f7a3d3a943)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        bucketName: Bucket name. The naming conventions for buckets are as follows:
        Only lowercase letters, numbers, and dashes (-) can be included.
        Must start and end with lowercase letters or numbers.
        The length must be between 3 and 63 characters.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBuckets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.datasource.RosBuckets",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OSS::Buckets``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Buckets`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBucketsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__320996d2301d2110ea5198aaa206f3e5f36c412c6115e8748b6c759bec521e9d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55ac892e57c2672b2d0bf72318f157de08cfca0fe19cb8ff43d15066e19c0996)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBucketNames")
    def attr_bucket_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BucketNames: The list of bucket names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketNames"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Buckets: The list of buckets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBuckets"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__50fcbd39783ed83622a002f567381dab9c4ba0e48b1a4e21d3a18298fa212d8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dfb4470da5389b8f37f8cbae5fadefe73b58dd6faf22a1f20592f502c2c4845)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.datasource.RosBucketsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions"},
)
class RosBucketsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBuckets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets

        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0891407178a80b3c9375fb5c1abca47b4205918bbff69f1922fcf2890ac741d5)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBucketsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IBucket)
class Bucket(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.datasource.Bucket",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OSS::Bucket``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBucket``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dee263d86159af3af871e9140511f24d10fc2b1c9d16d14d79abdc35bfeb5e47)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExtranetEndpoint")
    def attr_extranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtranetEndpoint: The domain name of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLocation")
    def attr_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Location: The region where the Bucket is located.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocation"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Bucket name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Container for storing Bucket owner information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageClass")
    def attr_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageClass: The storage type of the Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        return typing.cast(BucketProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d33895b71c483490c88c2d91cf68f1541dc7e2bda613e94d72ecb3e55395fafa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2f3ef2b4de09ac7088eb3c58550f5842f6c9f8d0375bd246e6ae2608a18220a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e73e85937adef824ae0851a9ff7cb6feecc5b6e7a223e2583cac04ebb342094)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IBuckets)
class Buckets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.datasource.Buckets",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OSS::Buckets``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBuckets``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[BucketsProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3696a81047d1e89e2381552d25b73ccb260719952ad3a1b5353ca2e4df677516)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBucketNames")
    def attr_bucket_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketNames: The list of bucket names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketNames"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The list of buckets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuckets"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketsProps:
        return typing.cast(BucketsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45436187da553d6627e9b0b08a2ac2b01cce65e8a578324171664e3ef537b4ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bee085e3d9f2e619265b297ccbcb23c37574bf89c051a68cada857adeccaedf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fca675c1f484c894e248934ab477957f7a2d35dcf7a2b936fc0115107f05d78f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Bucket",
    "BucketProps",
    "Buckets",
    "BucketsProps",
    "IBucket",
    "IBuckets",
    "RosBucket",
    "RosBucketProps",
    "RosBuckets",
    "RosBucketsProps",
]

publication.publish()

def _typecheckingstub__4a70a3b32064bf58a978a9f8fcaca0b116718e1f42a473e81f670fec9d29e13a(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24607a5d058c212a01c6e6da6cd80cec18c23efcbc5ca19de0ff533465a4bb45(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0b70be61f8bc427dd91a541099082dd9d1dde84e085b8eb769fe3e171231169(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7347651cbb9b5229fa503465598f6b7dcae267d3c383d51400748e543185d1d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44537cb541c0d60c7a2f635ecb5f96b473d86ad4bce6481780d6bf5a15cee6ba(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ab2c1472f09103d62ab127353bfc32ac29297ad215cabe1dc18cb39d0abcba1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5be5438f9a9781ed1a7c30a77ebd6b4967cdc28c09db6b387af7ecf80f931b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b53b6332484c45f4854b30f1fc35b16c6a291ea6e5759a1c083e1f7a3d3a943(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__320996d2301d2110ea5198aaa206f3e5f36c412c6115e8748b6c759bec521e9d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBucketsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55ac892e57c2672b2d0bf72318f157de08cfca0fe19cb8ff43d15066e19c0996(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50fcbd39783ed83622a002f567381dab9c4ba0e48b1a4e21d3a18298fa212d8d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dfb4470da5389b8f37f8cbae5fadefe73b58dd6faf22a1f20592f502c2c4845(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0891407178a80b3c9375fb5c1abca47b4205918bbff69f1922fcf2890ac741d5(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dee263d86159af3af871e9140511f24d10fc2b1c9d16d14d79abdc35bfeb5e47(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d33895b71c483490c88c2d91cf68f1541dc7e2bda613e94d72ecb3e55395fafa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2f3ef2b4de09ac7088eb3c58550f5842f6c9f8d0375bd246e6ae2608a18220a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e73e85937adef824ae0851a9ff7cb6feecc5b6e7a223e2583cac04ebb342094(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3696a81047d1e89e2381552d25b73ccb260719952ad3a1b5353ca2e4df677516(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[BucketsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45436187da553d6627e9b0b08a2ac2b01cce65e8a578324171664e3ef537b4ad(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bee085e3d9f2e619265b297ccbcb23c37574bf89c051a68cada857adeccaedf(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fca675c1f484c894e248934ab477957f7a2d35dcf7a2b936fc0115107f05d78f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
