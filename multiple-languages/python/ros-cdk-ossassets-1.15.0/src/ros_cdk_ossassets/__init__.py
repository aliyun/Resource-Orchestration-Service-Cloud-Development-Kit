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


class Asset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ossassets.Asset",
):
    '''An asset represents a local file or directory, which is automatically uploaded to OSS bucket and then can be referenced within a CDK application.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        *,
        path: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
        ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
        bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param path: The disk location of the asset. The path should refer to one of the following: - A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket. - A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to Function during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow_symlinks: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f59b97b647f7702528985ecfc08109a9a086fd2ff928367cc8b8d39eb12eee17)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = AssetProps(
            path=path,
            deploy_time=deploy_time,
            exclude=exclude,
            follow_symlinks=follow_symlinks,
            ignore_mode=ignore_mode,
            asset_hash=asset_hash,
            asset_hash_type=asset_hash_type,
            bundling=bundling,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="addResourceMetadata")
    def add_resource_metadata(
        self,
        resource: _ros_cdk_core_7adfd82f.RosResource,
        resource_property: builtins.str,
    ) -> None:
        '''Adds ROS template metadata to the specified resource with information that indicates which resource property is mapped to this local asset.

        Asset metadata will only be included if the stack is synthesized with the
        "ros:cdk:enable-asset-metadata" context key defined, which is the default
        behavior when synthesizing via the CDK Toolkit.

        :param resource: The ROS resource which is using this asset.
        :param resource_property: The property name where this asset is referenced.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6af17030f81f8373857223eaa36efef70f940708f6e4fe73ad4c468466d1a2a3)
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            check_type(argname="argument resource_property", value=resource_property, expected_type=type_hints["resource_property"])
        return typing.cast(None, jsii.invoke(self, "addResourceMetadata", [resource, resource_property]))

    @builtins.property
    @jsii.member(jsii_name="assetHash")
    def asset_hash(self) -> builtins.str:
        '''A cryptographic hash of the asset.'''
        return typing.cast(builtins.str, jsii.get(self, "assetHash"))

    @builtins.property
    @jsii.member(jsii_name="assetPath")
    def asset_path(self) -> builtins.str:
        '''The path to the asset, relative to the current Cloud Assembly.

        If asset staging is disabled, this will just be the original path.
        If asset staging is enabled it will be the staged path.
        '''
        return typing.cast(builtins.str, jsii.get(self, "assetPath"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(self) -> builtins.str:
        '''Attribute that represents the name of the OSS bucket this asset exists in.'''
        return typing.cast(builtins.str, jsii.get(self, "bucketName"))

    @builtins.property
    @jsii.member(jsii_name="httpUrl")
    def http_url(self) -> builtins.str:
        '''Attribute which represents the OSS HTTP URL of this asset.

        For example, ``https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}``
        '''
        return typing.cast(builtins.str, jsii.get(self, "httpUrl"))

    @builtins.property
    @jsii.member(jsii_name="isFile")
    def is_file(self) -> builtins.bool:
        '''Indicates if this asset is a single file.

        Allows constructs to ensure that the
        correct file type was used.
        '''
        return typing.cast(builtins.bool, jsii.get(self, "isFile"))

    @builtins.property
    @jsii.member(jsii_name="isZipArchive")
    def is_zip_archive(self) -> builtins.bool:
        '''Indicates if this asset is a zip archive.

        Allows constructs to ensure that the
        correct file type was used.
        '''
        return typing.cast(builtins.bool, jsii.get(self, "isZipArchive"))

    @builtins.property
    @jsii.member(jsii_name="objectKey")
    def object_key(self) -> builtins.str:
        '''Attribute which represents the OSS object key of this asset.'''
        return typing.cast(builtins.str, jsii.get(self, "objectKey"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ossassets.AssetOptions",
    jsii_struct_bases=[
        _ros_cdk_core_7adfd82f.FileCopyOptions, _ros_cdk_core_7adfd82f.AssetOptions
    ],
    name_mapping={
        "exclude": "exclude",
        "follow_symlinks": "followSymlinks",
        "ignore_mode": "ignoreMode",
        "asset_hash": "assetHash",
        "asset_hash_type": "assetHashType",
        "bundling": "bundling",
        "deploy_time": "deployTime",
    },
)
class AssetOptions(
    _ros_cdk_core_7adfd82f.FileCopyOptions,
    _ros_cdk_core_7adfd82f.AssetOptions,
):
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
        ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
        bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        deploy_time: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''
        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow_symlinks: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to Function during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        '''
        if isinstance(bundling, dict):
            bundling = _ros_cdk_core_7adfd82f.BundlingOptions(**bundling)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a41aa3a110520cd9ab5f948a6173025453d0c926f032b9479bdbb7957b1678e)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow_symlinks", value=follow_symlinks, expected_type=type_hints["follow_symlinks"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
            check_type(argname="argument asset_hash", value=asset_hash, expected_type=type_hints["asset_hash"])
            check_type(argname="argument asset_hash_type", value=asset_hash_type, expected_type=type_hints["asset_hash_type"])
            check_type(argname="argument bundling", value=bundling, expected_type=type_hints["bundling"])
            check_type(argname="argument deploy_time", value=deploy_time, expected_type=type_hints["deploy_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow_symlinks is not None:
            self._values["follow_symlinks"] = follow_symlinks
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode
        if asset_hash is not None:
            self._values["asset_hash"] = asset_hash
        if asset_hash_type is not None:
            self._values["asset_hash_type"] = asset_hash_type
        if bundling is not None:
            self._values["bundling"] = bundling
        if deploy_time is not None:
            self._values["deploy_time"] = deploy_time

    @builtins.property
    def exclude(self) -> typing.Optional[typing.List[builtins.str]]:
        '''File paths matching the patterns will be excluded.

        See ``ignoreMode`` to set the matching behavior.
        Has no effect on Assets bundled using the ``bundling`` property.

        :default: - nothing is excluded
        '''
        result = self._values.get("exclude")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def follow_symlinks(
        self,
    ) -> typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow_symlinks")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode], result)

    @builtins.property
    def asset_hash(self) -> typing.Optional[builtins.str]:
        '''Specify a custom hash for this asset.

        If ``assetHashType`` is set it must
        be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will
        be SHA256 hashed and encoded as hex. The resulting hash will be the asset
        hash.

        NOTE: the hash is used in order to identify a specific revision of the asset, and
        used for optimizing and caching deployment activities related to this asset such as
        packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
        need to make sure it is updated every time the asset changes, or otherwise it is
        possible that some deployments will not be invalidated.

        :default: - based on ``assetHashType``
        '''
        result = self._values.get("asset_hash")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def asset_hash_type(self) -> typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType]:
        '''Specifies the type of hash to calculate for this asset.

        If ``assetHash`` is configured, this option must be ``undefined`` or
        ``AssetHashType.CUSTOM``.

        :default:

        - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is
        explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        '''
        result = self._values.get("asset_hash_type")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType], result)

    @builtins.property
    def bundling(self) -> typing.Optional[_ros_cdk_core_7adfd82f.BundlingOptions]:
        '''Bundle the asset by executing a command in a Docker container or a custom bundling provider.

        The asset path will be mounted at ``/asset-input``. The Docker
        container is responsible for putting content at ``/asset-output``.
        The content at ``/asset-output`` will be zipped and used as the
        final asset.

        :default:

        - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
        archived into a .zip file and uploaded to OSS bucket otherwise.
        '''
        result = self._values.get("bundling")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.BundlingOptions], result)

    @builtins.property
    def deploy_time(self) -> typing.Optional[builtins.bool]:
        '''Whether or not the asset needs to exist beyond deployment time;

        i.e.
        are copied over to a different location and not needed afterwards.
        Setting this property to true has an impact on the lifecycle of the asset,
        because we will assume that it is safe to delete after the ROS
        deployment succeeds.

        For example, FC Function assets are copied over to Function during
        deployment. Therefore, it is not necessary to store the asset in OSS bucket,
        so we consider those deployTime assets.

        :default: false
        '''
        result = self._values.get("deploy_time")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ossassets.AssetProps",
    jsii_struct_bases=[AssetOptions],
    name_mapping={
        "exclude": "exclude",
        "follow_symlinks": "followSymlinks",
        "ignore_mode": "ignoreMode",
        "asset_hash": "assetHash",
        "asset_hash_type": "assetHashType",
        "bundling": "bundling",
        "deploy_time": "deployTime",
        "path": "path",
    },
)
class AssetProps(AssetOptions):
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
        ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
        bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        deploy_time: typing.Optional[builtins.bool] = None,
        path: builtins.str,
    ) -> None:
        '''
        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow_symlinks: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to Function during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param path: The disk location of the asset. The path should refer to one of the following: - A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket. - A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.
        '''
        if isinstance(bundling, dict):
            bundling = _ros_cdk_core_7adfd82f.BundlingOptions(**bundling)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b954987a208b5238b8ef1e55118299b7c8398064f943397358547b206d97829)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow_symlinks", value=follow_symlinks, expected_type=type_hints["follow_symlinks"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
            check_type(argname="argument asset_hash", value=asset_hash, expected_type=type_hints["asset_hash"])
            check_type(argname="argument asset_hash_type", value=asset_hash_type, expected_type=type_hints["asset_hash_type"])
            check_type(argname="argument bundling", value=bundling, expected_type=type_hints["bundling"])
            check_type(argname="argument deploy_time", value=deploy_time, expected_type=type_hints["deploy_time"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "path": path,
        }
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow_symlinks is not None:
            self._values["follow_symlinks"] = follow_symlinks
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode
        if asset_hash is not None:
            self._values["asset_hash"] = asset_hash
        if asset_hash_type is not None:
            self._values["asset_hash_type"] = asset_hash_type
        if bundling is not None:
            self._values["bundling"] = bundling
        if deploy_time is not None:
            self._values["deploy_time"] = deploy_time

    @builtins.property
    def exclude(self) -> typing.Optional[typing.List[builtins.str]]:
        '''File paths matching the patterns will be excluded.

        See ``ignoreMode`` to set the matching behavior.
        Has no effect on Assets bundled using the ``bundling`` property.

        :default: - nothing is excluded
        '''
        result = self._values.get("exclude")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def follow_symlinks(
        self,
    ) -> typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow_symlinks")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode], result)

    @builtins.property
    def asset_hash(self) -> typing.Optional[builtins.str]:
        '''Specify a custom hash for this asset.

        If ``assetHashType`` is set it must
        be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will
        be SHA256 hashed and encoded as hex. The resulting hash will be the asset
        hash.

        NOTE: the hash is used in order to identify a specific revision of the asset, and
        used for optimizing and caching deployment activities related to this asset such as
        packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
        need to make sure it is updated every time the asset changes, or otherwise it is
        possible that some deployments will not be invalidated.

        :default: - based on ``assetHashType``
        '''
        result = self._values.get("asset_hash")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def asset_hash_type(self) -> typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType]:
        '''Specifies the type of hash to calculate for this asset.

        If ``assetHash`` is configured, this option must be ``undefined`` or
        ``AssetHashType.CUSTOM``.

        :default:

        - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is
        explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        '''
        result = self._values.get("asset_hash_type")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType], result)

    @builtins.property
    def bundling(self) -> typing.Optional[_ros_cdk_core_7adfd82f.BundlingOptions]:
        '''Bundle the asset by executing a command in a Docker container or a custom bundling provider.

        The asset path will be mounted at ``/asset-input``. The Docker
        container is responsible for putting content at ``/asset-output``.
        The content at ``/asset-output`` will be zipped and used as the
        final asset.

        :default:

        - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
        archived into a .zip file and uploaded to OSS bucket otherwise.
        '''
        result = self._values.get("bundling")
        return typing.cast(typing.Optional[_ros_cdk_core_7adfd82f.BundlingOptions], result)

    @builtins.property
    def deploy_time(self) -> typing.Optional[builtins.bool]:
        '''Whether or not the asset needs to exist beyond deployment time;

        i.e.
        are copied over to a different location and not needed afterwards.
        Setting this property to true has an impact on the lifecycle of the asset,
        because we will assume that it is safe to delete after the ROS
        deployment succeeds.

        For example, FC Function assets are copied over to Function during
        deployment. Therefore, it is not necessary to store the asset in OSS bucket,
        so we consider those deployTime assets.

        :default: false
        '''
        result = self._values.get("deploy_time")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def path(self) -> builtins.str:
        '''The disk location of the asset.

        The path should refer to one of the following:

        - A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket.
        - A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.
        '''
        result = self._values.get("path")
        assert result is not None, "Required property 'path' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Asset",
    "AssetOptions",
    "AssetProps",
]

publication.publish()

def _typecheckingstub__f59b97b647f7702528985ecfc08109a9a086fd2ff928367cc8b8d39eb12eee17(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    *,
    path: builtins.str,
    deploy_time: typing.Optional[builtins.bool] = None,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
    bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6af17030f81f8373857223eaa36efef70f940708f6e4fe73ad4c468466d1a2a3(
    resource: _ros_cdk_core_7adfd82f.RosResource,
    resource_property: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a41aa3a110520cd9ab5f948a6173025453d0c926f032b9479bdbb7957b1678e(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
    bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    deploy_time: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b954987a208b5238b8ef1e55118299b7c8398064f943397358547b206d97829(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow_symlinks: typing.Optional[_ros_cdk_core_7adfd82f.SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[_ros_cdk_core_7adfd82f.IgnoreMode] = None,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[_ros_cdk_core_7adfd82f.AssetHashType] = None,
    bundling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    deploy_time: typing.Optional[builtins.bool] = None,
    path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass
