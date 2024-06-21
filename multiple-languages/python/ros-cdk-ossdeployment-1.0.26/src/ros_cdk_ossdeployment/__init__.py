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
import ros_cdk_fc as _ros_cdk_fc_0e2a3401
import ros_cdk_oss as _ros_cdk_oss_09748c2c
import ros_cdk_ossassets as _ros_cdk_ossassets_e763282b
import ros_cdk_ros as _ros_cdk_ros_021c5dd0


class BucketDeployment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ossdeployment.BucketDeployment",
):
    '''``BucketDeployment`` populates an OSS bucket with the contents of .zip files from other OSS buckets or from local disk.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BucketDeploymentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83944a1f2cb9e83802bc544f96ef7e263874a3ba6011b9267fc915f7d98683b8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="cr")
    def cr(self) -> _ros_cdk_ros_021c5dd0.RosCustomResource:
        '''Attribute cr: Custom resource to trigger the bucket deployment.'''
        return typing.cast(_ros_cdk_ros_021c5dd0.RosCustomResource, jsii.get(self, "cr"))

    @builtins.property
    @jsii.member(jsii_name="fcFunction")
    def fc_function(self) -> _ros_cdk_fc_0e2a3401.Function:
        '''Attribute fcFunction: FC function to use to forward content to the destination bucket.'''
        return typing.cast(_ros_cdk_fc_0e2a3401.Function, jsii.get(self, "fcFunction"))

    @builtins.property
    @jsii.member(jsii_name="fcService")
    def fc_service(self) -> _ros_cdk_fc_0e2a3401.Service:
        '''Attribute fcService: FC service to use to forward content to the destination bucket.'''
        return typing.cast(_ros_cdk_fc_0e2a3401.Service, jsii.get(self, "fcService"))

    @builtins.property
    @jsii.member(jsii_name="handlerRoleArn")
    def handler_role_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "handlerRoleArn"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_bucket": "destinationBucket",
        "sources": "sources",
        "log_monitoring": "logMonitoring",
        "retain_on_create": "retainOnCreate",
        "role_arn": "roleArn",
        "timeout": "timeout",
    },
)
class BucketDeploymentProps:
    def __init__(
        self,
        *,
        destination_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket],
        sources: typing.Sequence["ISource"],
        log_monitoring: typing.Optional[builtins.bool] = None,
        retain_on_create: typing.Optional[builtins.bool] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        '''
        :param destination_bucket: The OSS bucket to sync the contents of the zip file to.
        :param sources: The sources from which to deploy the contents of this bucket.
        :param log_monitoring: Whether log monitoring is enabled. Enabling log monitoring allows you to record the details of your deployment, which makes it easier to troubleshoot when something goes wrong. Enabling logging monitoring incurs an additional logging service fee. Default: - false
        :param retain_on_create: If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket. Otherwise, the temporary bucket will be deleted when the stack is destroyed. Default: - false
        :param role_arn: The ARN of the execution role associated with this function. Default: - A role is automatically created
        :param timeout: The timeout period in seconds for the function to run. Default: - 60
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3f771c4cecc98ebf1bb74cd89dbc74ecc5d6682bcfdf1e62b85fcb3f477ec5d)
            check_type(argname="argument destination_bucket", value=destination_bucket, expected_type=type_hints["destination_bucket"])
            check_type(argname="argument sources", value=sources, expected_type=type_hints["sources"])
            check_type(argname="argument log_monitoring", value=log_monitoring, expected_type=type_hints["log_monitoring"])
            check_type(argname="argument retain_on_create", value=retain_on_create, expected_type=type_hints["retain_on_create"])
            check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "destination_bucket": destination_bucket,
            "sources": sources,
        }
        if log_monitoring is not None:
            self._values["log_monitoring"] = log_monitoring
        if retain_on_create is not None:
            self._values["retain_on_create"] = retain_on_create
        if role_arn is not None:
            self._values["role_arn"] = role_arn
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def destination_bucket(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket]:
        '''The OSS bucket to sync the contents of the zip file to.'''
        result = self._values.get("destination_bucket")
        assert result is not None, "Required property 'destination_bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket], result)

    @builtins.property
    def sources(self) -> typing.List["ISource"]:
        '''The sources from which to deploy the contents of this bucket.'''
        result = self._values.get("sources")
        assert result is not None, "Required property 'sources' is missing"
        return typing.cast(typing.List["ISource"], result)

    @builtins.property
    def log_monitoring(self) -> typing.Optional[builtins.bool]:
        '''Whether log monitoring is enabled.

        Enabling log monitoring allows you to record the details of your deployment,
        which makes it easier to troubleshoot when something goes wrong.

        Enabling logging monitoring incurs an additional logging service fee.

        :default: - false
        '''
        result = self._values.get("log_monitoring")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def retain_on_create(self) -> typing.Optional[builtins.bool]:
        '''If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.

        Otherwise, the temporary bucket will be deleted when the stack is destroyed.

        :default: - false
        '''
        result = self._values.get("retain_on_create")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''The ARN of the execution role associated with this function.

        :default: - A role is automatically created
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(self) -> typing.Optional[jsii.Number]:
        '''The timeout period in seconds for the function to run.

        :default: - 60
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[jsii.Number], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketDeploymentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-ossdeployment.ISource")
class ISource(typing_extensions.Protocol):
    '''Represents a source for bucket deployments.'''

    @jsii.member(jsii_name="bind")
    def bind(self, scope: _ros_cdk_core_7adfd82f.Construct) -> "SourceConfig":
        '''Binds the source to a bucket deployment.

        :param scope: The construct tree context.
        '''
        ...


class _ISourceProxy:
    '''Represents a source for bucket deployments.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ossdeployment.ISource"

    @jsii.member(jsii_name="bind")
    def bind(self, scope: _ros_cdk_core_7adfd82f.Construct) -> "SourceConfig":
        '''Binds the source to a bucket deployment.

        :param scope: The construct tree context.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d534c53177d9ecf5a4a8b249c8d15fcdb6ac586d161445ad8d385c4dff9ce5e3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
        return typing.cast("SourceConfig", jsii.invoke(self, "bind", [scope]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISource).__jsii_proxy_class__ = lambda : _ISourceProxy


class Source(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ossdeployment.Source",
):
    '''Specifies bucket deployment source.

    Usage::

        Source.bucket(bucketName, objectKey)
        Source.asset('/local/path/to/directory')
        Source.asset('/local/path/to/a/file.zip')
        Source.data('hello/world/file.txt', 'Hello, world!')
        Source.jsonData('config.json', { key: value })
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="asset")
    @builtins.classmethod
    def asset(
        cls,
        path: builtins.str,
        options: typing.Optional[typing.Union[_ros_cdk_ossassets_e763282b.AssetOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        object_prefix: typing.Optional[builtins.str] = None,
    ) -> ISource:
        '''Uses a local file path as the source of the target bucket contents.

        ROS CDK will create a temporary bucket and upload the files you want to upload to it.
        Make sure that the region id you specify in synth and deploy is the same region id as the destination upload bucket.

        If the local asset is a .zip archive, make sure you trust the
        producer of the archive.

        :param path: The path to a local file or a directory.
        :param options: Options for the Asset.
        :param object_prefix: The prefix of object key. You can use it to specify the location of the object in the target bucket.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58947a6300aa7918384de2f7a37fd0df6b238f8bfd32a6b8e24ad11536bbd39b)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument object_prefix", value=object_prefix, expected_type=type_hints["object_prefix"])
        return typing.cast(ISource, jsii.sinvoke(cls, "asset", [path, options, object_prefix]))

    @jsii.member(jsii_name="bucket")
    @builtins.classmethod
    def bucket(
        cls,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> ISource:
        '''Uses a file stored in an OSS bucket as the source for the destination bucket contents.

        Make sure you trust the producer of the archive. The source bucket and the destination bucket must be in the same region.

        :param bucket: The OSS Bucket.
        :param object_key: The path of.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d8d1bdfbe83ad5afabac5b53d49387a078bef4c1465d903b0d9b6747ffe30ef)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
        return typing.cast(ISource, jsii.sinvoke(cls, "bucket", [bucket, object_key]))

    @jsii.member(jsii_name="data")
    @builtins.classmethod
    def data(cls, object_key: builtins.str, data: builtins.str) -> ISource:
        '''Deploys an object with the specified string contents into the bucket.

        To store a JSON object use ``Source.jsonData()``.

        :param object_key: The destination OSS object key (relative to the root of the OSS deployment).
        :param data: The data to be stored in the object.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a07c7aa6c9f2b8b44c937d4258994a1eb8ca17aaeee5278fccf5868cc5d2620)
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        return typing.cast(ISource, jsii.sinvoke(cls, "data", [object_key, data]))

    @jsii.member(jsii_name="jsonData")
    @builtins.classmethod
    def json_data(cls, object_key: builtins.str, obj: typing.Any) -> ISource:
        '''Deploys an object with the specified JSON object into the bucket.

        :param object_key: The destination OSS object key (relative to the root of the OSS deployment).
        :param obj: A JSON object.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e1c87fa71288090aef835f89bb76d3d801b333d01a23f81753494bb2c92a0e7)
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(ISource, jsii.sinvoke(cls, "jsonData", [object_key, obj]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ossdeployment.SourceConfig",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "object_key": "objectKey",
        "file_name": "fileName",
    },
)
class SourceConfig:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Source information.

        :param bucket: The name of source bucket to deploy from.
        :param object_key: An object key in the source bucket to deploy from.
        :param file_name: The name of source local file to deploy from.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83a5971951abeced223e52a18f8a399c521008709de6168d824017753403a2c2)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
            check_type(argname="argument file_name", value=file_name, expected_type=type_hints["file_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket": bucket,
            "object_key": object_key,
        }
        if file_name is not None:
            self._values["file_name"] = file_name

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''The name of source bucket to deploy from.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''An object key in the source bucket to deploy from.'''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_name(self) -> typing.Optional[builtins.str]:
        '''The name of source local file to deploy from.'''
        result = self._values.get("file_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SourceConfig(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "BucketDeployment",
    "BucketDeploymentProps",
    "ISource",
    "Source",
    "SourceConfig",
]

publication.publish()

def _typecheckingstub__83944a1f2cb9e83802bc544f96ef7e263874a3ba6011b9267fc915f7d98683b8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BucketDeploymentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f771c4cecc98ebf1bb74cd89dbc74ecc5d6682bcfdf1e62b85fcb3f477ec5d(
    *,
    destination_bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket],
    sources: typing.Sequence[ISource],
    log_monitoring: typing.Optional[builtins.bool] = None,
    retain_on_create: typing.Optional[builtins.bool] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d534c53177d9ecf5a4a8b249c8d15fcdb6ac586d161445ad8d385c4dff9ce5e3(
    scope: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58947a6300aa7918384de2f7a37fd0df6b238f8bfd32a6b8e24ad11536bbd39b(
    path: builtins.str,
    options: typing.Optional[typing.Union[_ros_cdk_ossassets_e763282b.AssetOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    object_prefix: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d8d1bdfbe83ad5afabac5b53d49387a078bef4c1465d903b0d9b6747ffe30ef(
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_oss_09748c2c.Bucket],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a07c7aa6c9f2b8b44c937d4258994a1eb8ca17aaeee5278fccf5868cc5d2620(
    object_key: builtins.str,
    data: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e1c87fa71288090aef835f89bb76d3d801b333d01a23f81753494bb2c92a0e7(
    object_key: builtins.str,
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a5971951abeced223e52a18f8a399c521008709de6168d824017753403a2c2(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass
