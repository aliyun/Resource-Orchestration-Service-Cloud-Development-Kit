'''
# `@alicloud/ros-cdk-core`

> TODO: description

## Usage

```
const core = require('@alicloud/ros-cdk-core');

// TODO: DEMONSTRATE API
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

import constructs as _constructs_77d1e7e8
import ros_cdk_assembly_schema as _ros_cdk_assembly_schema_63fe2cdf
import ros_cdk_cxapi as _ros_cdk_cxapi_45dace6b


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AppProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_synth": "autoSynth",
        "context": "context",
        "outdir": "outdir",
        "runtime_info": "runtimeInfo",
        "stack_traces": "stackTraces",
        "tree_metadata": "treeMetadata",
    },
)
class AppProps:
    def __init__(
        self,
        *,
        auto_synth: typing.Optional[builtins.bool] = None,
        context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        outdir: typing.Optional[builtins.str] = None,
        runtime_info: typing.Optional[builtins.bool] = None,
        stack_traces: typing.Optional[builtins.bool] = None,
        tree_metadata: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Initialization props for apps.

        :param auto_synth: Automatically call 'synth()' before the program exits. If you set this, you don't have to call 'synth()' explicitly. Note that this feature is only available for certain programming languages, and calling 'synth()' is still recommended. Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false' otherwise
        :param context: Additional context values for the application. Context set by the CLI or the 'context' key in 'cdk.json' has precedence. Context can be read from any construct using 'node.getContext(key)'. Default: - no additional context
        :param outdir: The output directory into which to emit synthesized artifacts. You should never need to set this value. By default, the value you pass to the CLI's ``--output`` flag will be used, and if you change it to a different directory the CLI will fail to pick up the generated Cloud Assembly. This property is intended for internal and testing use. Default: - If this value is *not* set, considers the environment variable ``CDK_OUTDIR``. If ``CDK_OUTDIR`` is not defined, uses a temp directory.
        :param runtime_info: Include runtime versioning information. Default: true runtime info is included unless related comtext is set.
        :param stack_traces: Include construct creation stack trace. Default: true stack traces are included unless related context is set.
        :param tree_metadata: Include construct tree metadata as part of the Cloud Assembly. Default: true
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__748c8a4f3f80cbb46f7db3d45e1fc62f897a813df65337c1692a26757af6df49)
            check_type(argname="argument auto_synth", value=auto_synth, expected_type=type_hints["auto_synth"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
            check_type(argname="argument runtime_info", value=runtime_info, expected_type=type_hints["runtime_info"])
            check_type(argname="argument stack_traces", value=stack_traces, expected_type=type_hints["stack_traces"])
            check_type(argname="argument tree_metadata", value=tree_metadata, expected_type=type_hints["tree_metadata"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_synth is not None:
            self._values["auto_synth"] = auto_synth
        if context is not None:
            self._values["context"] = context
        if outdir is not None:
            self._values["outdir"] = outdir
        if runtime_info is not None:
            self._values["runtime_info"] = runtime_info
        if stack_traces is not None:
            self._values["stack_traces"] = stack_traces
        if tree_metadata is not None:
            self._values["tree_metadata"] = tree_metadata

    @builtins.property
    def auto_synth(self) -> typing.Optional[builtins.bool]:
        '''Automatically call 'synth()' before the program exits.

        If you set this, you don't have to call 'synth()' explicitly. Note that
        this feature is only available for certain programming languages, and
        calling 'synth()' is still recommended.

        Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
        otherwise
        '''
        result = self._values.get("auto_synth")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def context(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Additional context values for the application.

        Context set by the CLI or the 'context' key in 'cdk.json' has precedence.

        Context can be read from any construct using 'node.getContext(key)'.

        :default: - no additional context
        '''
        result = self._values.get("context")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''The output directory into which to emit synthesized artifacts.

        You should never need to set this value. By default, the value you pass to
        the CLI's ``--output`` flag will be used, and if you change it to a different
        directory the CLI will fail to pick up the generated Cloud Assembly.

        This property is intended for internal and testing use.

        :default:

        - If this value is *not* set, considers the environment variable ``CDK_OUTDIR``.
        If ``CDK_OUTDIR`` is not defined, uses a temp directory.
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def runtime_info(self) -> typing.Optional[builtins.bool]:
        '''Include runtime versioning information.

        :default: true runtime info is included unless related comtext is set.
        '''
        result = self._values.get("runtime_info")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def stack_traces(self) -> typing.Optional[builtins.bool]:
        '''Include construct creation stack trace.

        :default: true stack traces are included unless related context is set.
        '''
        result = self._values.get("stack_traces")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def tree_metadata(self) -> typing.Optional[builtins.bool]:
        '''Include construct tree metadata as part of the Cloud Assembly.

        :default: true
        '''
        result = self._values.get("tree_metadata")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Arn(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Arn"):
    @jsii.member(jsii_name="extractResourceName")
    @builtins.classmethod
    def extract_resource_name(
        cls,
        arn: builtins.str,
        resource_type: builtins.str,
    ) -> builtins.str:
        '''Extract the full resource name from an ARN.

        Necessary for resource names (paths) that may contain the separator, like
        ``acs:ram::123456789012****:role/adminrole/alice``.

        Only works if we statically know the expected ``resourceType`` beforehand, since we're going
        to use that to split the string on ':/' (and take the right-hand side).

        We can't extract the 'resourceType' from the ARN at hand, because ROS Expressions
        only allow literals in the 'separator' argument to ``{ Fn::Split }``, and so it can't be
        ``{ Fn::Select: [5, { Fn::Split: [':', ARN] }}``.

        Only necessary for ARN formats for which the type-name separator is ``/``.

        :param arn: -
        :param resource_type: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e1028034161b616e8ede54829eca6fc8f9fed80e2631285392d839b0ad86011)
            check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "extractResourceName", [arn, resource_type]))

    @jsii.member(jsii_name="format")
    @builtins.classmethod
    def format(
        cls,
        components: typing.Union["ArnComponents", typing.Dict[builtins.str, typing.Any]],
        stack: typing.Optional["Stack"] = None,
    ) -> builtins.str:
        '''Creates an ARN from components.

        If ``partition``, ``region`` or ``account`` are not specified, the stack's
        partition, region and account will be used.

        If any component is the empty string, an empty string will be inserted
        into the generated ARN at the location that component corresponds to.

        The ARN will be formatted as follows:

        {partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

        The required ARN pieces that are omitted will be taken from the stack that
        the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
        can be 'undefined'.

        :param components: -
        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47fb05b0e2b64af32b7c13940785dbd944da780492fb36e79132aac2815ce259)
            check_type(argname="argument components", value=components, expected_type=type_hints["components"])
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "format", [components, stack]))

    @jsii.member(jsii_name="split")
    @builtins.classmethod
    def split(
        cls,
        arn: typing.Union[builtins.str, "IResolvable"],
        arn_format: "ArnFormat",
    ) -> "ArnComponents":
        '''Splits the provided ARN into its components.

        Works both if 'arn' is a string like 'acs:oss:::bucket',
        and a Token representing a dynamic CloudFormation expression
        (in which case the returned components will also be dynamic ROS expressions,
        encoded as Tokens).

        :param arn: the ARN to split into its components.
        :param arn_format: the expected format of 'arn' - depends on what format the service 'arn' represents uses.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7398a992328b7020fe53783e30a1c4002a0f7f11f28b42238a1d662d75d94368)
            check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
            check_type(argname="argument arn_format", value=arn_format, expected_type=type_hints["arn_format"])
        return typing.cast("ArnComponents", jsii.sinvoke(cls, "split", [arn, arn_format]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ArnComponents",
    jsii_struct_bases=[],
    name_mapping={
        "resource": "resource",
        "service": "service",
        "account": "account",
        "arn_format": "arnFormat",
        "partition": "partition",
        "region": "region",
        "resource_name": "resourceName",
    },
)
class ArnComponents:
    def __init__(
        self,
        *,
        resource: builtins.str,
        service: builtins.str,
        account: typing.Optional[builtins.str] = None,
        arn_format: typing.Optional["ArnFormat"] = None,
        partition: typing.Optional[builtins.str] = None,
        region: typing.Optional[builtins.str] = None,
        resource_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param resource: Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.
        :param service: The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').
        :param account: The ID of the ACS account that owns the resource, without the hyphens. For example, 123456789012. Note that the ARNs for some resources don't require an account number, so this component might be omitted. Default: The account the stack is deployed to.
        :param arn_format: The specific ARN format to use for this ARN value. Default: - uses value of ``sep`` as the separator for formatting, ``ArnFormat.SLASH_RESOURCE_NAME`` if that property was also not provided
        :param partition: The partition that the resource is in. Default: acs
        :param region: The region the resource resides in. Note that the ARNs for some resources do not require a region, so this component might be omitted. Default: The region the stack is deployed to.
        :param resource_name: Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as ``"*"``. This is service-dependent.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aebed7c22e31c083edc6df69ae2445798c8a2872cee11bdc4750de57d691e71e)
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            check_type(argname="argument service", value=service, expected_type=type_hints["service"])
            check_type(argname="argument account", value=account, expected_type=type_hints["account"])
            check_type(argname="argument arn_format", value=arn_format, expected_type=type_hints["arn_format"])
            check_type(argname="argument partition", value=partition, expected_type=type_hints["partition"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument resource_name", value=resource_name, expected_type=type_hints["resource_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource": resource,
            "service": service,
        }
        if account is not None:
            self._values["account"] = account
        if arn_format is not None:
            self._values["arn_format"] = arn_format
        if partition is not None:
            self._values["partition"] = partition
        if region is not None:
            self._values["region"] = region
        if resource_name is not None:
            self._values["resource_name"] = resource_name

    @builtins.property
    def resource(self) -> builtins.str:
        '''Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.'''
        result = self._values.get("resource")
        assert result is not None, "Required property 'resource' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def service(self) -> builtins.str:
        '''The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').'''
        result = self._values.get("service")
        assert result is not None, "Required property 'service' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def account(self) -> typing.Optional[builtins.str]:
        '''The ID of the ACS account that owns the resource, without the hyphens.

        For example, 123456789012. Note that the ARNs for some resources don't
        require an account number, so this component might be omitted.

        :default: The account the stack is deployed to.
        '''
        result = self._values.get("account")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def arn_format(self) -> typing.Optional["ArnFormat"]:
        '''The specific ARN format to use for this ARN value.

        :default:

        - uses value of ``sep`` as the separator for formatting,
        ``ArnFormat.SLASH_RESOURCE_NAME`` if that property was also not provided
        '''
        result = self._values.get("arn_format")
        return typing.cast(typing.Optional["ArnFormat"], result)

    @builtins.property
    def partition(self) -> typing.Optional[builtins.str]:
        '''The partition that the resource is in.

        :default: acs
        '''
        result = self._values.get("partition")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The region the resource resides in.

        Note that the ARNs for some resources
        do not require a region, so this component might be omitted.

        :default: The region the stack is deployed to.
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def resource_name(self) -> typing.Optional[builtins.str]:
        '''Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as ``"*"``. This is service-dependent.'''
        result = self._values.get("resource_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ArnComponents(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.ArnFormat")
class ArnFormat(enum.Enum):
    '''An enum representing the various ARN formats that different services use.'''

    NO_RESOURCE_NAME = "NO_RESOURCE_NAME"
    '''This represents a format where there is no 'resourceName' part.

    Everything after the last colon is considered the 'resource',
    even if it contains slashes.
    For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
    '''
    COLON_RESOURCE_NAME = "COLON_RESOURCE_NAME"
    '''This represents a format where the 'resource' and 'resourceName' parts are separated with a colon.

    Everything after the last colon is considered the 'resourceName',
    even if it contains slashes.
    '''
    SLASH_RESOURCE_NAME = "SLASH_RESOURCE_NAME"
    '''This represents a format where the 'resource' and 'resourceName' parts are separated with a slash.

    Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
    Everything after the separating slash is considered the 'resourceName',
    even if it contains colons.
    The region part can be omitted.
    Like in: 'acs:ram::123456789012****:role/RoleName'.
    '''
    SLASH_RESOURCE_SLASH_RESOURCE_NAME = "SLASH_RESOURCE_SLASH_RESOURCE_NAME"
    '''This represents a format where the 'resource' and 'resourceName' parts are seperated with a slash, but there is also an additional slash after the colon separating 'account' from 'resource'.

    Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
    Note that the leading slash is *not* included in the parsed 'resource' part.
    '''


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.AssetHashType")
class AssetHashType(enum.Enum):
    '''The type of asset hash.

    NOTE: the hash is used in order to identify a specific revision of the asset, and
    used for optimizing and caching deployment activities related to this asset such as
    packaging, uploading to OSS bucket, etc.
    '''

    SOURCE = "SOURCE"
    '''Based on the content of the source path.

    When bundling, use ``SOURCE`` when the content of the bundling output is not
    stable across repeated bundling operations.
    '''
    OUTPUT = "OUTPUT"
    '''Based on the content of the bundling output.

    Use ``OUTPUT`` when the source of the asset is a top level folder containing
    code and/or dependencies that are not directly linked to the asset.
    '''
    CUSTOM = "CUSTOM"
    '''Use a custom hash.'''


class AssetManifestBuilder(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.AssetManifestBuilder",
):
    '''Build an asset manifest from assets added to a stack.

    This class does not need to be used by app builders; it is only necessary for building Stack Synthesizers.
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addDockerImageAsset")
    def add_docker_image_asset(
        self,
        stack: "Stack",
        source_hash: builtins.str,
        source: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.DockerImageSource, typing.Dict[builtins.str, typing.Any]],
        *,
        image_tag: builtins.str,
        repository_name: builtins.str,
        region: typing.Optional[builtins.str] = None,
    ) -> _ros_cdk_assembly_schema_63fe2cdf.DockerImageDestination:
        '''Add a docker asset source and destination to the manifest.

        sourceHash should be unique for every source.

        :param stack: -
        :param source_hash: -
        :param source: -
        :param image_tag: Tag of the image to publish.
        :param repository_name: Name of the ECR repository to publish to.
        :param region: The region where this asset will need to be published. Default: - Current region
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6a595020af2d73b80111249f9b1e850162ad574d0ea6c76750b9d2c5f7e1f82)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument source_hash", value=source_hash, expected_type=type_hints["source_hash"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        dest = _ros_cdk_assembly_schema_63fe2cdf.DockerImageDestination(
            image_tag=image_tag, repository_name=repository_name, region=region
        )

        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.DockerImageDestination, jsii.invoke(self, "addDockerImageAsset", [stack, source_hash, source, dest]))

    @jsii.member(jsii_name="addFileAsset")
    def add_file_asset(
        self,
        stack: "Stack",
        source_hash: builtins.str,
        source: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.FileSource, typing.Dict[builtins.str, typing.Any]],
        *,
        bucket_name: builtins.str,
        object_key: builtins.str,
        region: typing.Optional[builtins.str] = None,
    ) -> _ros_cdk_assembly_schema_63fe2cdf.FileDestination:
        '''Add a file asset source and destination to the manifest.

        sourceHash should be unique for every source.

        :param stack: -
        :param source_hash: -
        :param source: -
        :param bucket_name: The name of the bucket.
        :param object_key: The destination object key.
        :param region: The region where this asset will need to be published. Default: - Current region
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a361abaca86ed4c2e222be7e390fa3dd4191be97122c7364fb511644b82a1d87)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument source_hash", value=source_hash, expected_type=type_hints["source_hash"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        dest = _ros_cdk_assembly_schema_63fe2cdf.FileDestination(
            bucket_name=bucket_name, object_key=object_key, region=region
        )

        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.FileDestination, jsii.invoke(self, "addFileAsset", [stack, source_hash, source, dest]))

    @jsii.member(jsii_name="defaultAddDockerImageAsset")
    def default_add_docker_image_asset(
        self,
        stack: "Stack",
        asset: typing.Union["DockerImageAssetSource", typing.Dict[builtins.str, typing.Any]],
        *,
        repository_name: builtins.str,
        docker_tag_prefix: typing.Optional[builtins.str] = None,
    ) -> _ros_cdk_assembly_schema_63fe2cdf.DockerImageDestination:
        '''Add a docker image asset to the manifest with default settings.

        Derive the region from the stack, use the asset hash as the key, and set the prefix.

        :param stack: -
        :param asset: -
        :param repository_name: Repository name where the docker image asset should be written.
        :param docker_tag_prefix: Prefix to add to the asset hash to make the Docker image tag. Default: ''
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0afe23a0841ab704361316d864c2a66fa9a1e8745e6aae9bc7309144ccb72f4f)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument asset", value=asset, expected_type=type_hints["asset"])
        target = AssetManifestDockerImageDestination(
            repository_name=repository_name, docker_tag_prefix=docker_tag_prefix
        )

        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.DockerImageDestination, jsii.invoke(self, "defaultAddDockerImageAsset", [stack, asset, target]))

    @jsii.member(jsii_name="defaultAddFileAsset")
    def default_add_file_asset(
        self,
        stack: "Stack",
        asset: typing.Union["FileAssetSource", typing.Dict[builtins.str, typing.Any]],
        *,
        bucket_name: builtins.str,
        bucket_prefix: typing.Optional[builtins.str] = None,
    ) -> _ros_cdk_assembly_schema_63fe2cdf.FileDestination:
        '''Add a file asset to the manifest with default settings.

        Derive the region from the stack, use the asset hash as the key, copy the
        file extension over, and set the prefix.

        :param stack: -
        :param asset: -
        :param bucket_name: Bucket name where the file asset should be written.
        :param bucket_prefix: Prefix to prepend to the asset hash. Default: ''
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdb528b9af0fd890076bcb80dd8af4b816143d08cd19bf6c4078a5cd30cc4fba)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument asset", value=asset, expected_type=type_hints["asset"])
        target = AssetManifestFileDestination(
            bucket_name=bucket_name, bucket_prefix=bucket_prefix
        )

        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.FileDestination, jsii.invoke(self, "defaultAddFileAsset", [stack, asset, target]))

    @jsii.member(jsii_name="emitManifest")
    def emit_manifest(
        self,
        stack: "Stack",
        session: "ISynthesisSession",
        options: typing.Optional[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AssetManifestOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> builtins.str:
        '''Write the manifest to disk, and add it to the synthesis session.

        Return the artifact id, which should be added to the ``additionalDependencies``
        field of the stack artifact.

        :param stack: -
        :param session: -
        :param options: -
        :param dependencies: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d1a58772effc05805eaedf1356cc8b5e7040c6d8b60707cf0aad03fbbf422f)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument dependencies", value=dependencies, expected_type=type_hints["dependencies"])
        return typing.cast(builtins.str, jsii.invoke(self, "emitManifest", [stack, session, options, dependencies]))

    @builtins.property
    @jsii.member(jsii_name="hasAssets")
    def has_assets(self) -> builtins.bool:
        '''Whether there are any assets registered in the manifest.'''
        return typing.cast(builtins.bool, jsii.get(self, "hasAssets"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AssetManifestDockerImageDestination",
    jsii_struct_bases=[],
    name_mapping={
        "repository_name": "repositoryName",
        "docker_tag_prefix": "dockerTagPrefix",
    },
)
class AssetManifestDockerImageDestination:
    def __init__(
        self,
        *,
        repository_name: builtins.str,
        docker_tag_prefix: typing.Optional[builtins.str] = None,
    ) -> None:
        '''The destination for a docker image asset, when it is given to the AssetManifestBuilder.

        :param repository_name: Repository name where the docker image asset should be written.
        :param docker_tag_prefix: Prefix to add to the asset hash to make the Docker image tag. Default: ''
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3034f90e7b536a93709b6ad6f2a004e54ea5f55eb122a5b8dc0996d3dcc9f474)
            check_type(argname="argument repository_name", value=repository_name, expected_type=type_hints["repository_name"])
            check_type(argname="argument docker_tag_prefix", value=docker_tag_prefix, expected_type=type_hints["docker_tag_prefix"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "repository_name": repository_name,
        }
        if docker_tag_prefix is not None:
            self._values["docker_tag_prefix"] = docker_tag_prefix

    @builtins.property
    def repository_name(self) -> builtins.str:
        '''Repository name where the docker image asset should be written.'''
        result = self._values.get("repository_name")
        assert result is not None, "Required property 'repository_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def docker_tag_prefix(self) -> typing.Optional[builtins.str]:
        '''Prefix to add to the asset hash to make the Docker image tag.

        :default: ''
        '''
        result = self._values.get("docker_tag_prefix")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetManifestDockerImageDestination(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AssetManifestFileDestination",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "bucket_prefix": "bucketPrefix"},
)
class AssetManifestFileDestination:
    def __init__(
        self,
        *,
        bucket_name: builtins.str,
        bucket_prefix: typing.Optional[builtins.str] = None,
    ) -> None:
        '''The destination for a file asset, when it is given to the AssetManifestBuilder.

        :param bucket_name: Bucket name where the file asset should be written.
        :param bucket_prefix: Prefix to prepend to the asset hash. Default: ''
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd5bfbc2a86191e831043600ce3ae9ceea5291a361db5b09611add9bcee0ae66)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument bucket_prefix", value=bucket_prefix, expected_type=type_hints["bucket_prefix"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if bucket_prefix is not None:
            self._values["bucket_prefix"] = bucket_prefix

    @builtins.property
    def bucket_name(self) -> builtins.str:
        '''Bucket name where the file asset should be written.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def bucket_prefix(self) -> typing.Optional[builtins.str]:
        '''Prefix to prepend to the asset hash.

        :default: ''
        '''
        result = self._values.get("bucket_prefix")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetManifestFileDestination(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AssetOptions",
    jsii_struct_bases=[],
    name_mapping={
        "asset_hash": "assetHash",
        "asset_hash_type": "assetHashType",
        "bundling": "bundling",
    },
)
class AssetOptions:
    def __init__(
        self,
        *,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[AssetHashType] = None,
        bundling: typing.Optional[typing.Union["BundlingOptions", typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Asset hash options.

        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        '''
        if isinstance(bundling, dict):
            bundling = BundlingOptions(**bundling)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__518951ee015946f515000c1dd54bd4eceeea12eb08fb64701dc6151c2d720086)
            check_type(argname="argument asset_hash", value=asset_hash, expected_type=type_hints["asset_hash"])
            check_type(argname="argument asset_hash_type", value=asset_hash_type, expected_type=type_hints["asset_hash_type"])
            check_type(argname="argument bundling", value=bundling, expected_type=type_hints["bundling"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if asset_hash is not None:
            self._values["asset_hash"] = asset_hash
        if asset_hash_type is not None:
            self._values["asset_hash_type"] = asset_hash_type
        if bundling is not None:
            self._values["bundling"] = bundling

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
    def asset_hash_type(self) -> typing.Optional[AssetHashType]:
        '''Specifies the type of hash to calculate for this asset.

        If ``assetHash`` is configured, this option must be ``undefined`` or
        ``AssetHashType.CUSTOM``.

        :default:

        - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is
        explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        '''
        result = self._values.get("asset_hash_type")
        return typing.cast(typing.Optional[AssetHashType], result)

    @builtins.property
    def bundling(self) -> typing.Optional["BundlingOptions"]:
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
        return typing.cast(typing.Optional["BundlingOptions"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.BundlingFileAccess")
class BundlingFileAccess(enum.Enum):
    '''The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.'''

    VOLUME_COPY = "VOLUME_COPY"
    '''Creates temporary volumes and containers to copy files from the host to the bundling container and back.

    This is slower, but works also in more complex situations with remote or shared docker sockets.
    '''
    BIND_MOUNT = "BIND_MOUNT"
    '''The source and output folders will be mounted as bind mount from the host system This is faster and simpler, but less portable than ``VOLUME_COPY``.'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.BundlingOptions",
    jsii_struct_bases=[],
    name_mapping={
        "image": "image",
        "bundling_file_access": "bundlingFileAccess",
        "command": "command",
        "entrypoint": "entrypoint",
        "environment": "environment",
        "local": "local",
        "network": "network",
        "output_type": "outputType",
        "platform": "platform",
        "security_opt": "securityOpt",
        "user": "user",
        "volumes": "volumes",
        "volumes_from": "volumesFrom",
        "working_directory": "workingDirectory",
    },
)
class BundlingOptions:
    def __init__(
        self,
        *,
        image: "DockerImage",
        bundling_file_access: typing.Optional[BundlingFileAccess] = None,
        command: typing.Optional[typing.Sequence[builtins.str]] = None,
        entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
        environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        local: typing.Optional["ILocalBundling"] = None,
        network: typing.Optional[builtins.str] = None,
        output_type: typing.Optional["BundlingOutput"] = None,
        platform: typing.Optional[builtins.str] = None,
        security_opt: typing.Optional[builtins.str] = None,
        user: typing.Optional[builtins.str] = None,
        volumes: typing.Optional[typing.Sequence[typing.Union["DockerVolume", typing.Dict[builtins.str, typing.Any]]]] = None,
        volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
        working_directory: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Bundling options.

        :param image: The Docker image where the command will run.
        :param bundling_file_access: The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host. Default: - BundlingFileAccess.BIND_MOUNT
        :param command: The command to run in the Docker container. Example value: ``['npm', 'install']`` Default: - run the command defined in the image
        :param entrypoint: The entrypoint to run in the Docker container. Example value: ``['/bin/sh', '-c']`` Default: - run the entrypoint defined in the image
        :param environment: The environment variables to pass to the Docker container. Default: - no environment variables.
        :param local: Local bundling provider. The provider implements a method ``tryBundle()`` which should return ``true`` if local bundling was performed. If ``false`` is returned, docker bundling will be done. Default: - bundling will only be performed in a Docker container
        :param network: Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_. Default: - no networking options
        :param output_type: The type of output that this bundling operation is producing. Default: BundlingOutput.AUTO_DISCOVER
        :param platform: Platform to build for. *Requires Docker Buildx*. Specify this property to build images on a specific platform. Default: - no platform specified (the current machine architecture will be used)
        :param security_opt: `Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container. Default: - no security options
        :param user: The user to use when running the Docker container. user | user:group | uid | uid:gid | user:gid | uid:group Default: - uid:gid of the current user or 1000:1000 on Windows
        :param volumes: Additional Docker volumes to mount. Default: - no additional volumes are mounted
        :param volumes_from: Where to mount the specified volumes from. Default: - no containers are specified to mount volumes from
        :param working_directory: Working directory inside the Docker container. Default: /asset-input
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1212544ec5356eec539b2d2ffc9af47ed2ea9b52cdd1745e7a3bad470335b92e)
            check_type(argname="argument image", value=image, expected_type=type_hints["image"])
            check_type(argname="argument bundling_file_access", value=bundling_file_access, expected_type=type_hints["bundling_file_access"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument entrypoint", value=entrypoint, expected_type=type_hints["entrypoint"])
            check_type(argname="argument environment", value=environment, expected_type=type_hints["environment"])
            check_type(argname="argument local", value=local, expected_type=type_hints["local"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument output_type", value=output_type, expected_type=type_hints["output_type"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument security_opt", value=security_opt, expected_type=type_hints["security_opt"])
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument volumes", value=volumes, expected_type=type_hints["volumes"])
            check_type(argname="argument volumes_from", value=volumes_from, expected_type=type_hints["volumes_from"])
            check_type(argname="argument working_directory", value=working_directory, expected_type=type_hints["working_directory"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image": image,
        }
        if bundling_file_access is not None:
            self._values["bundling_file_access"] = bundling_file_access
        if command is not None:
            self._values["command"] = command
        if entrypoint is not None:
            self._values["entrypoint"] = entrypoint
        if environment is not None:
            self._values["environment"] = environment
        if local is not None:
            self._values["local"] = local
        if network is not None:
            self._values["network"] = network
        if output_type is not None:
            self._values["output_type"] = output_type
        if platform is not None:
            self._values["platform"] = platform
        if security_opt is not None:
            self._values["security_opt"] = security_opt
        if user is not None:
            self._values["user"] = user
        if volumes is not None:
            self._values["volumes"] = volumes
        if volumes_from is not None:
            self._values["volumes_from"] = volumes_from
        if working_directory is not None:
            self._values["working_directory"] = working_directory

    @builtins.property
    def image(self) -> "DockerImage":
        '''The Docker image where the command will run.'''
        result = self._values.get("image")
        assert result is not None, "Required property 'image' is missing"
        return typing.cast("DockerImage", result)

    @builtins.property
    def bundling_file_access(self) -> typing.Optional[BundlingFileAccess]:
        '''The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.

        :default: - BundlingFileAccess.BIND_MOUNT
        '''
        result = self._values.get("bundling_file_access")
        return typing.cast(typing.Optional[BundlingFileAccess], result)

    @builtins.property
    def command(self) -> typing.Optional[typing.List[builtins.str]]:
        '''The command to run in the Docker container.

        Example value: ``['npm', 'install']``

        :default: - run the command defined in the image

        :see: https://docs.docker.com/engine/reference/run/
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def entrypoint(self) -> typing.Optional[typing.List[builtins.str]]:
        '''The entrypoint to run in the Docker container.

        Example value: ``['/bin/sh', '-c']``

        :default: - run the entrypoint defined in the image

        :see: https://docs.docker.com/engine/reference/builder/#entrypoint
        '''
        result = self._values.get("entrypoint")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def environment(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''The environment variables to pass to the Docker container.

        :default: - no environment variables.
        '''
        result = self._values.get("environment")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def local(self) -> typing.Optional["ILocalBundling"]:
        '''Local bundling provider.

        The provider implements a method ``tryBundle()`` which should return ``true``
        if local bundling was performed. If ``false`` is returned, docker bundling
        will be done.

        :default: - bundling will only be performed in a Docker container
        '''
        result = self._values.get("local")
        return typing.cast(typing.Optional["ILocalBundling"], result)

    @builtins.property
    def network(self) -> typing.Optional[builtins.str]:
        '''Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_.

        :default: - no networking options
        '''
        result = self._values.get("network")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def output_type(self) -> typing.Optional["BundlingOutput"]:
        '''The type of output that this bundling operation is producing.

        :default: BundlingOutput.AUTO_DISCOVER
        '''
        result = self._values.get("output_type")
        return typing.cast(typing.Optional["BundlingOutput"], result)

    @builtins.property
    def platform(self) -> typing.Optional[builtins.str]:
        '''Platform to build for. *Requires Docker Buildx*.

        Specify this property to build images on a specific platform.

        :default: - no platform specified (the current machine architecture will be used)
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def security_opt(self) -> typing.Optional[builtins.str]:
        '''`Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container.

        :default: - no security options
        '''
        result = self._values.get("security_opt")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def user(self) -> typing.Optional[builtins.str]:
        '''The user to use when running the Docker container.

        user | user:group | uid | uid:gid | user:gid | uid:group

        :default: - uid:gid of the current user or 1000:1000 on Windows

        :see: https://docs.docker.com/engine/reference/run/#user
        '''
        result = self._values.get("user")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def volumes(self) -> typing.Optional[typing.List["DockerVolume"]]:
        '''Additional Docker volumes to mount.

        :default: - no additional volumes are mounted
        '''
        result = self._values.get("volumes")
        return typing.cast(typing.Optional[typing.List["DockerVolume"]], result)

    @builtins.property
    def volumes_from(self) -> typing.Optional[typing.List[builtins.str]]:
        '''Where to mount the specified volumes from.

        :default: - no containers are specified to mount volumes from

        :see: https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
        '''
        result = self._values.get("volumes_from")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def working_directory(self) -> typing.Optional[builtins.str]:
        '''Working directory inside the Docker container.

        :default: /asset-input
        '''
        result = self._values.get("working_directory")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BundlingOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.BundlingOutput")
class BundlingOutput(enum.Enum):
    '''The type of output that a bundling operation is producing.'''

    ARCHIVED = "ARCHIVED"
    '''The bundling output directory includes a single .zip or .jar file which will be used as the final bundle. If the output directory does not include exactly a single archive, bundling will fail.'''
    NOT_ARCHIVED = "NOT_ARCHIVED"
    '''The bundling output directory contains one or more files which will be archived and uploaded as a .zip file to OSS bucket.'''
    AUTO_DISCOVER = "AUTO_DISCOVER"
    '''If the bundling output directory contains a single archive file (zip or jar) it will be used as the bundle output as-is.

    Otherwise, all the files in the bundling output directory will be zipped.
    '''
    SINGLE_FILE = "SINGLE_FILE"
    '''The bundling output directory includes a single file which will be used as the final bundle.

    If the output directory does not
    include exactly a single file, bundling will fail.

    Similar to ARCHIVED but for non-archive files
    '''


class ConstructNode(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ConstructNode",
):
    '''Represents the construct node in the scope tree.'''

    def __init__(
        self,
        host: "Construct",
        scope: "IConstruct",
        id: builtins.str,
    ) -> None:
        '''
        :param host: -
        :param scope: -
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a47bad65275b85b8612877823d54537652d86b16d9cc47c3f0fe2e682cad87e)
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [host, scope, id])

    @jsii.member(jsii_name="prepare")
    @builtins.classmethod
    def prepare(cls, node: "ConstructNode") -> None:
        '''(deprecated) Invokes "prepare" on all constructs (depth-first, post-order) in the tree under ``node``.

        :param node: The root node.

        :deprecated: Use ``app.synth()`` instead

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6645ca4ad5ccd4cd68a4050a9e5c2511fdb248cb9310394c721b1c69950e5975)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        return typing.cast(None, jsii.sinvoke(cls, "prepare", [node]))

    @jsii.member(jsii_name="synth")
    @builtins.classmethod
    def synth(
        cls,
        node: "ConstructNode",
        *,
        outdir: typing.Optional[builtins.str] = None,
        skip_validation: typing.Optional[builtins.bool] = None,
        runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> _ros_cdk_cxapi_45dace6b.CloudAssembly:
        '''(deprecated) Synthesizes a CloudAssembly from a construct tree.

        :param node: The root of the construct tree.
        :param outdir: (deprecated) The output directory into which to synthesize the cloud assembly. Default: - creates a temporary directory
        :param skip_validation: (deprecated) Whether synthesis should skip the validation phase. Default: false
        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included

        :deprecated: Use ``app.synth()`` or ``stage.synth()`` instead

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df4441eafb1cb1046b32ca5295d005d3131df919989d3b694d1ce2e3881d2b51)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        options = SynthesisOptions(
            outdir=outdir, skip_validation=skip_validation, runtime_info=runtime_info
        )

        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssembly, jsii.sinvoke(cls, "synth", [node, options]))

    @jsii.member(jsii_name="validate")
    @builtins.classmethod
    def validate(cls, node: "ConstructNode") -> typing.List["ValidationError"]:
        '''Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns the list of all errors.

        An empty list indicates that there are no errors.

        :param node: The root node.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15d58cf30911824dccc4b726e85b99d3c5af21fbe85acb679afb5632b9b4410b)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        return typing.cast(typing.List["ValidationError"], jsii.sinvoke(cls, "validate", [node]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(self, *dependencies: "IDependable") -> None:
        '''Add an ordering dependency on another Construct.

        All constructs in the dependency's scope will be deployed before any
        construct in this construct's scope.

        :param dependencies: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4621c8e910f9ed69913adeffe0161d40cfde5ebadeba3e7bd20a4b0cfbfee3b9)
            check_type(argname="argument dependencies", value=dependencies, expected_type=typing.Tuple[type_hints["dependencies"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(None, jsii.invoke(self, "addDependency", [*dependencies]))

    @jsii.member(jsii_name="addError")
    def add_error(self, message: builtins.str) -> None:
        '''Adds an { "error":  } metadata entry to this construct.

        The toolkit will fail synthesis when errors are reported.

        :param message: The error message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5828fca22ddd84c8c5f392d283078c4556c6a3104e3afda44917f05f086da22f)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addError", [message]))

    @jsii.member(jsii_name="addInfo")
    def add_info(self, message: builtins.str) -> None:
        '''Adds a { "info":  } metadata entry to this construct.

        The toolkit will display the info message when apps are synthesized.

        :param message: The info message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f520bb9a468976f66105a240b5a66c7ade94873ab55373e1ac571b500c21d6a)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addInfo", [message]))

    @jsii.member(jsii_name="addMetadata")
    def add_metadata(
        self,
        type: builtins.str,
        data: typing.Any,
        from_function: typing.Any = None,
    ) -> None:
        '''Adds a metadata entry to this construct.

        Entries are arbitrary values and will also include a stack trace to allow tracing back to
        the code location for when the entry was added. It can be used, for example, to include source
        mapping in templates to improve diagnostics.

        :param type: a string denoting the type of metadata.
        :param data: the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
        :param from_function: a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__959c55db0db52728d3f598e4c83dd98fc47eb2297c12d34642150aad945923fd)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument from_function", value=from_function, expected_type=type_hints["from_function"])
        return typing.cast(None, jsii.invoke(self, "addMetadata", [type, data, from_function]))

    @jsii.member(jsii_name="addWarning")
    def add_warning(self, message: builtins.str) -> None:
        '''Adds a { "warning":  } metadata entry to this construct.

        The toolkit will display the warning when an app is synthesized, or fail
        if run in --strict mode.

        :param message: The warning message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__570f16aaf6d6ed0a36aaf59690d63691db9c638fa7db4426ffff61a3eec2507a)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addWarning", [message]))

    @jsii.member(jsii_name="findAll")
    def find_all(
        self,
        order: typing.Optional["ConstructOrder"] = None,
    ) -> typing.List["IConstruct"]:
        '''Return this construct and all of its children in the given order.

        :param order: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f373a014879a19ab5383814e7c60e2fdc9b85ff481266088ce12f7a126854d60)
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
        return typing.cast(typing.List["IConstruct"], jsii.invoke(self, "findAll", [order]))

    @jsii.member(jsii_name="findChild")
    def find_child(self, id: builtins.str) -> "IConstruct":
        '''Return a direct child by id.

        Throws an error if the child is not found.

        :param id: Identifier of direct child.

        :return: Child with the given id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4e9a97593ce9f2c58b87536455eb37e870708a060b383b357d9f6fcb2469e26)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        return typing.cast("IConstruct", jsii.invoke(self, "findChild", [id]))

    @jsii.member(jsii_name="setContext")
    def set_context(self, key: builtins.str, value: typing.Any) -> None:
        '''This can be used to set contextual values.

        Context must be set before any children are added, since children may consult context info during construction.
        If the key already exists, it will be overridden.

        :param key: The context key.
        :param value: The context value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffc85bdb046e28e24026eca3ca7feb5e1cbec09d4e2d58eb5f259741e0f5805)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setContext", [key, value]))

    @jsii.member(jsii_name="tryFindChild")
    def try_find_child(self, id: builtins.str) -> typing.Optional["IConstruct"]:
        '''Return a direct child by id, or undefined.

        :param id: Identifier of direct child.

        :return: the child if found, or undefined
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cbe01369ed9844edb9ceff08f9f1d6ffdf493083e9de9b90f37b2eb7024c63c)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        return typing.cast(typing.Optional["IConstruct"], jsii.invoke(self, "tryFindChild", [id]))

    @jsii.member(jsii_name="tryGetContext")
    def try_get_context(self, key: builtins.str) -> typing.Any:
        '''Retrieves a value from tree context.

        Context is usually initialized at the root, but can be overridden at any point in the tree.

        :param key: The context key.

        :return: The context value or ``undefined`` if there is no context value for thie key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d5e8d9fc5378c36b1914ff9ef3d1743c82cf3a6020c5d4b16ef390692134d84)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
        return typing.cast(typing.Any, jsii.invoke(self, "tryGetContext", [key]))

    @jsii.member(jsii_name="tryRemoveChild")
    def try_remove_child(self, child_name: builtins.str) -> builtins.bool:
        '''(experimental) Remove the child with the given name, if present.

        :param child_name: -

        :return: Whether a child with the given name was deleted.

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4528d4bf540c03795edbfe799321d679a7800f5bda281eb50419a46623ff4eb1)
            check_type(argname="argument child_name", value=child_name, expected_type=type_hints["child_name"])
        return typing.cast(builtins.bool, jsii.invoke(self, "tryRemoveChild", [child_name]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="PATH_SEP")
    def PATH_SEP(cls) -> builtins.str:
        '''Separator used to delimit construct path components.'''
        return typing.cast(builtins.str, jsii.sget(cls, "PATH_SEP"))

    @builtins.property
    @jsii.member(jsii_name="children")
    def children(self) -> typing.List["IConstruct"]:
        '''All direct children of this construct.'''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "children"))

    @builtins.property
    @jsii.member(jsii_name="dependencies")
    def dependencies(self) -> typing.List["Dependency"]:
        '''Return all dependencies registered on this node or any of its children.'''
        return typing.cast(typing.List["Dependency"], jsii.get(self, "dependencies"))

    @builtins.property
    @jsii.member(jsii_name="id")
    def id(self) -> builtins.str:
        '''The id of this construct within the current scope.

        This is a a scope-unique id. To obtain an app-unique id for this construct, use ``uniqueId``.
        '''
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @builtins.property
    @jsii.member(jsii_name="locked")
    def locked(self) -> builtins.bool:
        '''Returns true if this construct or the scopes in which it is defined are locked.'''
        return typing.cast(builtins.bool, jsii.get(self, "locked"))

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.List[_ros_cdk_cxapi_45dace6b.MetadataEntry]:
        '''An immutable array of metadata objects associated with this construct.

        This can be used, for example, to implement support for deprecation notices, source mapping, etc.
        '''
        return typing.cast(typing.List[_ros_cdk_cxapi_45dace6b.MetadataEntry], jsii.get(self, "metadata"))

    @builtins.property
    @jsii.member(jsii_name="path")
    def path(self) -> builtins.str:
        '''The full, absolute path of this construct in the tree.

        Components are separated by '/'.
        '''
        return typing.cast(builtins.str, jsii.get(self, "path"))

    @builtins.property
    @jsii.member(jsii_name="root")
    def root(self) -> "IConstruct":
        '''
        :return: The root of the construct tree.
        '''
        return typing.cast("IConstruct", jsii.get(self, "root"))

    @builtins.property
    @jsii.member(jsii_name="scopes")
    def scopes(self) -> typing.List["IConstruct"]:
        '''All parent scopes of this construct.

        :return:

        a list of parent scopes. The last element in the list will always
        be the current construct and the first element will be the root of the
        tree.
        '''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "scopes"))

    @builtins.property
    @jsii.member(jsii_name="uniqueId")
    def unique_id(self) -> builtins.str:
        '''A tree-global unique alphanumeric identifier for this construct.

        Includes all components of the tree.
        '''
        return typing.cast(builtins.str, jsii.get(self, "uniqueId"))

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> typing.Optional["IConstruct"]:
        '''Returns the scope in which this construct is defined.

        The value is ``undefined`` at the root of the construct scope tree.
        '''
        return typing.cast(typing.Optional["IConstruct"], jsii.get(self, "scope"))

    @builtins.property
    @jsii.member(jsii_name="defaultChild")
    def default_child(self) -> typing.Optional["IConstruct"]:
        '''Returns the child construct that has the id ``Default`` or ``Resource"``.

        This is usually the construct that provides the bulk of the underlying functionality.
        Useful for modifications of the underlying construct that are not available at the higher levels.
        Override the defaultChild property.

        This should only be used in the cases where the correct
        default child is not named 'Resource' or 'Default' as it
        should be.

        If you set this to undefined, the default behavior of finding
        the child named 'Resource' or 'Default' will be used.

        :return: a construct or undefined if there is no default child

        :throws: if there is more than one child
        '''
        return typing.cast(typing.Optional["IConstruct"], jsii.get(self, "defaultChild"))

    @default_child.setter
    def default_child(self, value: typing.Optional["IConstruct"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1122548f7c053a88310186a509d813226fa408734e0b465c5934441a333f1cf4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultChild", value)


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.ConstructOrder")
class ConstructOrder(enum.Enum):
    '''In what order to return constructs.'''

    PREORDER = "PREORDER"
    '''Depth-first, pre-order.'''
    POSTORDER = "POSTORDER"
    '''Depth-first, post-order (leaf nodes first).'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.CopyOptions",
    jsii_struct_bases=[],
    name_mapping={
        "exclude": "exclude",
        "follow": "follow",
        "ignore_mode": "ignoreMode",
    },
)
class CopyOptions:
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow: typing.Optional["SymlinkFollowMode"] = None,
        ignore_mode: typing.Optional["IgnoreMode"] = None,
    ) -> None:
        '''Options applied when copying directories.

        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a089c22aec3b0e246273f153f7563236caca3abf7794a5aba0ecd3f17c9131df)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow", value=follow, expected_type=type_hints["follow"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow is not None:
            self._values["follow"] = follow
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode

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
    def follow(self) -> typing.Optional["SymlinkFollowMode"]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow")
        return typing.cast(typing.Optional["SymlinkFollowMode"], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional["IgnoreMode"]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional["IgnoreMode"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CopyOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DefaultStackSynthesizerProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_prefix": "bucketPrefix",
        "file_assets_bucket_name": "fileAssetsBucketName",
        "qualifier": "qualifier",
    },
)
class DefaultStackSynthesizerProps:
    def __init__(
        self,
        *,
        bucket_prefix: typing.Optional[builtins.str] = None,
        file_assets_bucket_name: typing.Optional[builtins.str] = None,
        qualifier: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Configuration properties for DefaultStackSynthesizer.

        :param bucket_prefix: bucketPrefix to use while storing OSS Assets. Default: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
        :param file_assets_bucket_name: Name of the OSS bucket to hold file assets. You must supply this if you have given a non-standard name to the staging bucket. The placeholders ``${Qualifier}``, ``${ALIYUN::AccountId}`` and ``${ALIYUN::Region}`` will be replaced with the values of qualifier and the stack's account and region, respectively. Default: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
        :param qualifier: Qualifier to disambiguate multiple environments in the same account. You can use this and leave the other naming properties empty if you have deployed the bootstrap environment with standard names but only differnet qualifiers.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba524959d80a1a88eee86a3a039a209594e07b39da331bb1cafb9fc849c5a97d)
            check_type(argname="argument bucket_prefix", value=bucket_prefix, expected_type=type_hints["bucket_prefix"])
            check_type(argname="argument file_assets_bucket_name", value=file_assets_bucket_name, expected_type=type_hints["file_assets_bucket_name"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bucket_prefix is not None:
            self._values["bucket_prefix"] = bucket_prefix
        if file_assets_bucket_name is not None:
            self._values["file_assets_bucket_name"] = file_assets_bucket_name
        if qualifier is not None:
            self._values["qualifier"] = qualifier

    @builtins.property
    def bucket_prefix(self) -> typing.Optional[builtins.str]:
        '''bucketPrefix to use while storing OSS Assets.

        :default: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
        '''
        result = self._values.get("bucket_prefix")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def file_assets_bucket_name(self) -> typing.Optional[builtins.str]:
        '''Name of the OSS bucket to hold file assets.

        You must supply this if you have given a non-standard name to the staging bucket.

        The placeholders ``${Qualifier}``, ``${ALIYUN::AccountId}`` and ``${ALIYUN::Region}`` will
        be replaced with the values of qualifier and the stack's account and region,
        respectively.

        :default: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
        '''
        result = self._values.get("file_assets_bucket_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        '''Qualifier to disambiguate multiple environments in the same account.

        You can use this and leave the other naming properties empty if you have deployed
        the bootstrap environment with standard names but only differnet qualifiers.
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DefaultStackSynthesizerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DependableTrait(
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.DependableTrait",
):
    '''(experimental) Trait for IDependable.

    Traits are interfaces that are privately implemented by objects. Instead of
    showing up in the public interface of a class, they need to be queried
    explicitly. This is used to implement certain framework features that are
    not intended to be used by Construct consumers, and so should be hidden
    from accidental use.

    :stability: experimental

    Example::

        // Usage
        const roots = DependableTrait.get(construct).dependencyRoots;
        
        // Definition
        DependableTrait.implement(construct, {
          get dependencyRoots() { return []; }
        });
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="get")
    @builtins.classmethod
    def get(cls, instance: "IDependable") -> "DependableTrait":
        '''(experimental) Return the matching DependableTrait for the given class instance.

        :param instance: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be877a98a70eaf2e415053ecc3597f54d82bf1b02ab801068be53d34c3645e0b)
            check_type(argname="argument instance", value=instance, expected_type=type_hints["instance"])
        return typing.cast("DependableTrait", jsii.sinvoke(cls, "get", [instance]))

    @jsii.member(jsii_name="implement")
    @builtins.classmethod
    def implement(cls, instance: "IDependable", trait: "DependableTrait") -> None:
        '''(experimental) Register ``instance`` to have the given DependableTrait.

        Should be called in the class constructor.

        :param instance: -
        :param trait: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27f51d221a1d3f0592bfeaf5e954b8d1ed157c843e51a32099396c3c78cc123d)
            check_type(argname="argument instance", value=instance, expected_type=type_hints["instance"])
            check_type(argname="argument trait", value=trait, expected_type=type_hints["trait"])
        return typing.cast(None, jsii.sinvoke(cls, "implement", [instance, trait]))

    @builtins.property
    @jsii.member(jsii_name="dependencyRoots")
    @abc.abstractmethod
    def dependency_roots(self) -> typing.List["IConstruct"]:
        '''(experimental) The set of constructs that form the root of this dependable.

        All resources under all returned constructs are included in the ordering
        dependency.

        :stability: experimental
        '''
        ...


class _DependableTraitProxy(DependableTrait):
    @builtins.property
    @jsii.member(jsii_name="dependencyRoots")
    def dependency_roots(self) -> typing.List["IConstruct"]:
        '''(experimental) The set of constructs that form the root of this dependable.

        All resources under all returned constructs are included in the ordering
        dependency.

        :stability: experimental
        '''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "dependencyRoots"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, DependableTrait).__jsii_proxy_class__ = lambda : _DependableTraitProxy


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.Dependency",
    jsii_struct_bases=[],
    name_mapping={"source": "source", "target": "target"},
)
class Dependency:
    def __init__(self, *, source: "IConstruct", target: "IConstruct") -> None:
        '''A single dependency.

        :param source: Source the dependency.
        :param target: Target of the dependency.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be971e1a5b7d053e1a29fe327cce65a823280ff9c0231b2ae0a5de6c0c9cafaa)
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source": source,
            "target": target,
        }

    @builtins.property
    def source(self) -> "IConstruct":
        '''Source the dependency.'''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast("IConstruct", result)

    @builtins.property
    def target(self) -> "IConstruct":
        '''Target of the dependency.'''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast("IConstruct", result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Dependency(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerBuildOptions",
    jsii_struct_bases=[],
    name_mapping={
        "build_args": "buildArgs",
        "cache_disabled": "cacheDisabled",
        "cache_from": "cacheFrom",
        "cache_to": "cacheTo",
        "file": "file",
        "platform": "platform",
        "target_stage": "targetStage",
    },
)
class DockerBuildOptions:
    def __init__(
        self,
        *,
        build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        cache_disabled: typing.Optional[builtins.bool] = None,
        cache_from: typing.Optional[typing.Sequence[typing.Union["DockerCacheOption", typing.Dict[builtins.str, typing.Any]]]] = None,
        cache_to: typing.Optional[typing.Union["DockerCacheOption", typing.Dict[builtins.str, typing.Any]]] = None,
        file: typing.Optional[builtins.str] = None,
        platform: typing.Optional[builtins.str] = None,
        target_stage: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Docker build options.

        :param build_args: Build args. Default: - no build args
        :param cache_disabled: Disable the cache and pass ``--no-cache`` to the ``docker build`` command. Default: - cache is used
        :param cache_from: Cache from options to pass to the ``docker build`` command. Default: - no cache from args are passed
        :param cache_to: Cache to options to pass to the ``docker build`` command. Default: - no cache to args are passed
        :param file: Name of the Dockerfile, must relative to the docker build path. Default: ``Dockerfile``
        :param platform: Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*. Example value: ``linux/amd64`` Default: - no platform specified
        :param target_stage: Set build target for multi-stage container builds. Any stage defined afterwards will be ignored. Example value: ``build-env`` Default: - Build all stages defined in the Dockerfile
        '''
        if isinstance(cache_to, dict):
            cache_to = DockerCacheOption(**cache_to)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d74694e2d9eb15024dbbceab0f94c14e18b3f536a404d081bbec8a334814a9c3)
            check_type(argname="argument build_args", value=build_args, expected_type=type_hints["build_args"])
            check_type(argname="argument cache_disabled", value=cache_disabled, expected_type=type_hints["cache_disabled"])
            check_type(argname="argument cache_from", value=cache_from, expected_type=type_hints["cache_from"])
            check_type(argname="argument cache_to", value=cache_to, expected_type=type_hints["cache_to"])
            check_type(argname="argument file", value=file, expected_type=type_hints["file"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument target_stage", value=target_stage, expected_type=type_hints["target_stage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if build_args is not None:
            self._values["build_args"] = build_args
        if cache_disabled is not None:
            self._values["cache_disabled"] = cache_disabled
        if cache_from is not None:
            self._values["cache_from"] = cache_from
        if cache_to is not None:
            self._values["cache_to"] = cache_to
        if file is not None:
            self._values["file"] = file
        if platform is not None:
            self._values["platform"] = platform
        if target_stage is not None:
            self._values["target_stage"] = target_stage

    @builtins.property
    def build_args(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Build args.

        :default: - no build args
        '''
        result = self._values.get("build_args")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def cache_disabled(self) -> typing.Optional[builtins.bool]:
        '''Disable the cache and pass ``--no-cache`` to the ``docker build`` command.

        :default: - cache is used
        '''
        result = self._values.get("cache_disabled")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def cache_from(self) -> typing.Optional[typing.List["DockerCacheOption"]]:
        '''Cache from options to pass to the ``docker build`` command.

        :default: - no cache from args are passed
        '''
        result = self._values.get("cache_from")
        return typing.cast(typing.Optional[typing.List["DockerCacheOption"]], result)

    @builtins.property
    def cache_to(self) -> typing.Optional["DockerCacheOption"]:
        '''Cache to options to pass to the ``docker build`` command.

        :default: - no cache to args are passed
        '''
        result = self._values.get("cache_to")
        return typing.cast(typing.Optional["DockerCacheOption"], result)

    @builtins.property
    def file(self) -> typing.Optional[builtins.str]:
        '''Name of the Dockerfile, must relative to the docker build path.

        :default: ``Dockerfile``
        '''
        result = self._values.get("file")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def platform(self) -> typing.Optional[builtins.str]:
        '''Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*.

        Example value: ``linux/amd64``

        :default: - no platform specified
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def target_stage(self) -> typing.Optional[builtins.str]:
        '''Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.

        Example value: ``build-env``

        :default: - Build all stages defined in the Dockerfile
        '''
        result = self._values.get("target_stage")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerBuildOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DockerBuildSecret(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DockerBuildSecret",
):
    '''Methods to build Docker CLI arguments for builds using secrets.

    Docker BuildKit must be enabled to use build secrets.

    :see: https://docs.docker.com/build/buildkit/
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="fromSrc")
    @builtins.classmethod
    def from_src(cls, src: builtins.str) -> builtins.str:
        '''A Docker build secret from a file source.

        :param src: The path to the source file, relative to the build directory.

        :return: The latter half required for ``--secret``
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7f3feaf1eebe9c08e9d7d4053e214c8bc7a3ed5996e50df05489993fdfa2da0)
            check_type(argname="argument src", value=src, expected_type=type_hints["src"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "fromSrc", [src]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerCacheOption",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "params": "params"},
)
class DockerCacheOption:
    def __init__(
        self,
        *,
        type: builtins.str,
        params: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    ) -> None:
        '''Options for configuring the Docker cache backend.

        :param type: The type of cache to use. Refer to https://docs.docker.com/build/cache/backends/ for full list of backends. Default: - unspecified
        :param params: Any parameters to pass into the docker cache backend configuration. Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration. Default: {} No options provided
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd1e13a668f6482329fc3ab0f3861d1d0a540664746d3cb674dbbf27f290cb7b)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument params", value=params, expected_type=type_hints["params"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
        }
        if params is not None:
            self._values["params"] = params

    @builtins.property
    def type(self) -> builtins.str:
        '''The type of cache to use.

        Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.

        :default: - unspecified

        Example::

            'registry'
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def params(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Any parameters to pass into the docker cache backend configuration.

        Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.

        :default: {} No options provided
        '''
        result = self._values.get("params")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerCacheOption(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DockerImage(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DockerImage",
):
    '''A Docker image.'''

    def __init__(
        self,
        image: builtins.str,
        _image_hash: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param image: -
        :param _image_hash: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76c520f34e0d96be775d608bc06291da540ae52294cb1a74ac24bfad0e64891e)
            check_type(argname="argument image", value=image, expected_type=type_hints["image"])
            check_type(argname="argument _image_hash", value=_image_hash, expected_type=type_hints["_image_hash"])
        jsii.create(self.__class__, self, [image, _image_hash])

    @jsii.member(jsii_name="fromBuild")
    @builtins.classmethod
    def from_build(
        cls,
        path: builtins.str,
        *,
        build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        cache_disabled: typing.Optional[builtins.bool] = None,
        cache_from: typing.Optional[typing.Sequence[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]]] = None,
        cache_to: typing.Optional[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]] = None,
        file: typing.Optional[builtins.str] = None,
        platform: typing.Optional[builtins.str] = None,
        target_stage: typing.Optional[builtins.str] = None,
    ) -> "DockerImage":
        '''Builds a Docker image.

        :param path: The path to the directory containing the Docker file.
        :param build_args: Build args. Default: - no build args
        :param cache_disabled: Disable the cache and pass ``--no-cache`` to the ``docker build`` command. Default: - cache is used
        :param cache_from: Cache from options to pass to the ``docker build`` command. Default: - no cache from args are passed
        :param cache_to: Cache to options to pass to the ``docker build`` command. Default: - no cache to args are passed
        :param file: Name of the Dockerfile, must relative to the docker build path. Default: ``Dockerfile``
        :param platform: Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*. Example value: ``linux/amd64`` Default: - no platform specified
        :param target_stage: Set build target for multi-stage container builds. Any stage defined afterwards will be ignored. Example value: ``build-env`` Default: - Build all stages defined in the Dockerfile
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc529a0bfff1f88664e9bd4b0724aaafd84823ee43e813cffa98eca88b81a00f)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        options = DockerBuildOptions(
            build_args=build_args,
            cache_disabled=cache_disabled,
            cache_from=cache_from,
            cache_to=cache_to,
            file=file,
            platform=platform,
            target_stage=target_stage,
        )

        return typing.cast("DockerImage", jsii.sinvoke(cls, "fromBuild", [path, options]))

    @jsii.member(jsii_name="fromRegistry")
    @builtins.classmethod
    def from_registry(cls, image: builtins.str) -> "DockerImage":
        '''Reference an image on DockerHub or another online registry.

        :param image: the image name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15ce9754c4ee8638bf2182bfd6ee5a978f60f7f46d2fc2d8268b0e8582cabff2)
            check_type(argname="argument image", value=image, expected_type=type_hints["image"])
        return typing.cast("DockerImage", jsii.sinvoke(cls, "fromRegistry", [image]))

    @jsii.member(jsii_name="cp")
    def cp(
        self,
        image_path: builtins.str,
        output_path: typing.Optional[builtins.str] = None,
    ) -> builtins.str:
        '''Copies a file or directory out of the Docker image to the local filesystem.

        If ``outputPath`` is omitted the destination path is a temporary directory.

        :param image_path: the path in the Docker image.
        :param output_path: the destination path for the copy operation.

        :return: the destination path
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24b84f515d28447ed661ab925548774a353985b73875637634ae3a9ca18cb1d1)
            check_type(argname="argument image_path", value=image_path, expected_type=type_hints["image_path"])
            check_type(argname="argument output_path", value=output_path, expected_type=type_hints["output_path"])
        return typing.cast(builtins.str, jsii.invoke(self, "cp", [image_path, output_path]))

    @jsii.member(jsii_name="run")
    def run(
        self,
        *,
        command: typing.Optional[typing.Sequence[builtins.str]] = None,
        entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
        environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        network: typing.Optional[builtins.str] = None,
        platform: typing.Optional[builtins.str] = None,
        security_opt: typing.Optional[builtins.str] = None,
        user: typing.Optional[builtins.str] = None,
        volumes: typing.Optional[typing.Sequence[typing.Union["DockerVolume", typing.Dict[builtins.str, typing.Any]]]] = None,
        volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
        working_directory: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Runs a Docker image.

        :param command: The command to run in the container. Default: - run the command defined in the image
        :param entrypoint: The entrypoint to run in the container. Default: - run the entrypoint defined in the image
        :param environment: The environment variables to pass to the container. Default: - no environment variables.
        :param network: Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_. Default: - no networking options
        :param platform: Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*. Example value: ``linux/amd64`` Default: - no platform specified
        :param security_opt: `Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container. Default: - no security options
        :param user: The user to use when running the container. Default: - root or image default
        :param volumes: Docker volumes to mount. Default: - no volumes are mounted
        :param volumes_from: Where to mount the specified volumes from. Default: - no containers are specified to mount volumes from
        :param working_directory: Working directory inside the container. Default: - image default
        '''
        options = DockerRunOptions(
            command=command,
            entrypoint=entrypoint,
            environment=environment,
            network=network,
            platform=platform,
            security_opt=security_opt,
            user=user,
            volumes=volumes,
            volumes_from=volumes_from,
            working_directory=working_directory,
        )

        return typing.cast(None, jsii.invoke(self, "run", [options]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> builtins.str:
        '''Provides a stable representation of this image for JSON serialization.

        :return: The overridden image name if set or image hash name in that order
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toJSON", []))

    @builtins.property
    @jsii.member(jsii_name="image")
    def image(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "image"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerImageAssetLocation",
    jsii_struct_bases=[],
    name_mapping={
        "image_uri": "imageUri",
        "repository_name": "repositoryName",
        "image_tag": "imageTag",
    },
)
class DockerImageAssetLocation:
    def __init__(
        self,
        *,
        image_uri: builtins.str,
        repository_name: builtins.str,
        image_tag: typing.Optional[builtins.str] = None,
    ) -> None:
        '''The location of the published docker image.

        This is where the image can be
        consumed at runtime.

        :param image_uri: The URI of the image in Aliyun ACR (including a tag).
        :param repository_name: The name of the ACR repository.
        :param image_tag: The tag of the image in Aliyun ACR. Default: - the hash of the asset, or the ``dockerTagPrefix`` concatenated with the asset hash if a ``dockerTagPrefix`` is specified in the stack synthesizer
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25fdfa24b34331b8b5a44b5e43dcc80fa129cf24a11c9a9c25399d6cddcd7d9d)
            check_type(argname="argument image_uri", value=image_uri, expected_type=type_hints["image_uri"])
            check_type(argname="argument repository_name", value=repository_name, expected_type=type_hints["repository_name"])
            check_type(argname="argument image_tag", value=image_tag, expected_type=type_hints["image_tag"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_uri": image_uri,
            "repository_name": repository_name,
        }
        if image_tag is not None:
            self._values["image_tag"] = image_tag

    @builtins.property
    def image_uri(self) -> builtins.str:
        '''The URI of the image in Aliyun ACR (including a tag).'''
        result = self._values.get("image_uri")
        assert result is not None, "Required property 'image_uri' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def repository_name(self) -> builtins.str:
        '''The name of the ACR repository.'''
        result = self._values.get("repository_name")
        assert result is not None, "Required property 'repository_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def image_tag(self) -> typing.Optional[builtins.str]:
        '''The tag of the image in Aliyun ACR.

        :default: - the hash of the asset, or the ``dockerTagPrefix`` concatenated with the asset hash if a ``dockerTagPrefix`` is specified in the stack synthesizer
        '''
        result = self._values.get("image_tag")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerImageAssetLocation(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerImageAssetSource",
    jsii_struct_bases=[],
    name_mapping={
        "source_hash": "sourceHash",
        "asset_name": "assetName",
        "directory_name": "directoryName",
        "docker_build_args": "dockerBuildArgs",
        "docker_build_sac_rets": "dockerBuildSACRets",
        "docker_build_ssh": "dockerBuildSsh",
        "docker_build_target": "dockerBuildTarget",
        "docker_cache_disabled": "dockerCacheDisabled",
        "docker_cache_from": "dockerCacheFrom",
        "docker_cache_to": "dockerCacheTo",
        "docker_file": "dockerFile",
        "docker_outputs": "dockerOutputs",
        "executable": "executable",
        "network_mode": "networkMode",
        "platform": "platform",
    },
)
class DockerImageAssetSource:
    def __init__(
        self,
        *,
        source_hash: builtins.str,
        asset_name: typing.Optional[builtins.str] = None,
        directory_name: typing.Optional[builtins.str] = None,
        docker_build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        docker_build_sac_rets: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        docker_build_ssh: typing.Optional[builtins.str] = None,
        docker_build_target: typing.Optional[builtins.str] = None,
        docker_cache_disabled: typing.Optional[builtins.bool] = None,
        docker_cache_from: typing.Optional[typing.Sequence[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]]] = None,
        docker_cache_to: typing.Optional[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]] = None,
        docker_file: typing.Optional[builtins.str] = None,
        docker_outputs: typing.Optional[typing.Sequence[builtins.str]] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        network_mode: typing.Optional[builtins.str] = None,
        platform: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param source_hash: The hash of the contents of the docker build context. This hash is used throughout the system to identify this image and avoid duplicate work in case the source did not change. NOTE: this means that if you wish to update your docker image, you must make a modification to the source (e.g. add some metadata to your Dockerfile).
        :param asset_name: Unique identifier of the docker image asset and its potential revisions. Required if using AppScopedStagingSynthesizer. Default: - no asset name
        :param directory_name: The directory where the Dockerfile is stored, must be relative to the cloud assembly root. Default: - Exactly one of ``directoryName`` and ``executable`` is required
        :param docker_build_args: Build args to pass to the ``docker build`` command. Since Docker build arguments are resolved before deployment, keys and values cannot refer to unresolved tokens. Only allowed when ``directoryName`` is specified. Default: - no build args are passed
        :param docker_build_sac_rets: Build sACRets to pass to the ``docker build`` command. Since Docker build sACRets are resolved before deployment, keys and values cannot refer to unresolved tokens. Only allowed when ``directoryName`` is specified. Default: - no build sACRets are passed
        :param docker_build_ssh: SSH agent socket or keys to pass to the ``docker buildx`` command. Default: - no ssh arg is passed
        :param docker_build_target: Docker target to build to. Only allowed when ``directoryName`` is specified. Default: - no target
        :param docker_cache_disabled: Disable the cache and pass ``--no-cache`` to the ``docker build`` command. Default: - cache is used
        :param docker_cache_from: Cache from options to pass to the ``docker build`` command. Default: - no cache from args are passed
        :param docker_cache_to: Cache to options to pass to the ``docker build`` command. Default: - no cache to args are passed
        :param docker_file: Path to the Dockerfile (relative to the directory). Only allowed when ``directoryName`` is specified. Default: - no file
        :param docker_outputs: Outputs to pass to the ``docker build`` command. Default: - no build args are passed
        :param executable: An external command that will produce the packaged asset. The command should produce the name of a local Docker image on ``stdout``. Default: - Exactly one of ``directoryName`` and ``executable`` is required
        :param network_mode: Networking mode for the RUN commands during build. *Requires Docker Engine API v1.25+*. Specify this property to build images on a specific networking mode. Default: - no networking mode specified
        :param platform: Platform to build for. *Requires Docker Buildx*. Specify this property to build images on a specific platform. Default: - no platform specified (the current machine architecture will be used)
        '''
        if isinstance(docker_cache_to, dict):
            docker_cache_to = DockerCacheOption(**docker_cache_to)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4b209a01f5a01b4f5e323063bed05f24ee94312ac19f813eb9f17aafd780f0f)
            check_type(argname="argument source_hash", value=source_hash, expected_type=type_hints["source_hash"])
            check_type(argname="argument asset_name", value=asset_name, expected_type=type_hints["asset_name"])
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
            check_type(argname="argument docker_build_args", value=docker_build_args, expected_type=type_hints["docker_build_args"])
            check_type(argname="argument docker_build_sac_rets", value=docker_build_sac_rets, expected_type=type_hints["docker_build_sac_rets"])
            check_type(argname="argument docker_build_ssh", value=docker_build_ssh, expected_type=type_hints["docker_build_ssh"])
            check_type(argname="argument docker_build_target", value=docker_build_target, expected_type=type_hints["docker_build_target"])
            check_type(argname="argument docker_cache_disabled", value=docker_cache_disabled, expected_type=type_hints["docker_cache_disabled"])
            check_type(argname="argument docker_cache_from", value=docker_cache_from, expected_type=type_hints["docker_cache_from"])
            check_type(argname="argument docker_cache_to", value=docker_cache_to, expected_type=type_hints["docker_cache_to"])
            check_type(argname="argument docker_file", value=docker_file, expected_type=type_hints["docker_file"])
            check_type(argname="argument docker_outputs", value=docker_outputs, expected_type=type_hints["docker_outputs"])
            check_type(argname="argument executable", value=executable, expected_type=type_hints["executable"])
            check_type(argname="argument network_mode", value=network_mode, expected_type=type_hints["network_mode"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_hash": source_hash,
        }
        if asset_name is not None:
            self._values["asset_name"] = asset_name
        if directory_name is not None:
            self._values["directory_name"] = directory_name
        if docker_build_args is not None:
            self._values["docker_build_args"] = docker_build_args
        if docker_build_sac_rets is not None:
            self._values["docker_build_sac_rets"] = docker_build_sac_rets
        if docker_build_ssh is not None:
            self._values["docker_build_ssh"] = docker_build_ssh
        if docker_build_target is not None:
            self._values["docker_build_target"] = docker_build_target
        if docker_cache_disabled is not None:
            self._values["docker_cache_disabled"] = docker_cache_disabled
        if docker_cache_from is not None:
            self._values["docker_cache_from"] = docker_cache_from
        if docker_cache_to is not None:
            self._values["docker_cache_to"] = docker_cache_to
        if docker_file is not None:
            self._values["docker_file"] = docker_file
        if docker_outputs is not None:
            self._values["docker_outputs"] = docker_outputs
        if executable is not None:
            self._values["executable"] = executable
        if network_mode is not None:
            self._values["network_mode"] = network_mode
        if platform is not None:
            self._values["platform"] = platform

    @builtins.property
    def source_hash(self) -> builtins.str:
        '''The hash of the contents of the docker build context.

        This hash is used
        throughout the system to identify this image and avoid duplicate work
        in case the source did not change.

        NOTE: this means that if you wish to update your docker image, you
        must make a modification to the source (e.g. add some metadata to your Dockerfile).
        '''
        result = self._values.get("source_hash")
        assert result is not None, "Required property 'source_hash' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def asset_name(self) -> typing.Optional[builtins.str]:
        '''Unique identifier of the docker image asset and its potential revisions.

        Required if using AppScopedStagingSynthesizer.

        :default: - no asset name
        '''
        result = self._values.get("asset_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def directory_name(self) -> typing.Optional[builtins.str]:
        '''The directory where the Dockerfile is stored, must be relative to the cloud assembly root.

        :default: - Exactly one of ``directoryName`` and ``executable`` is required
        '''
        result = self._values.get("directory_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def docker_build_args(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Build args to pass to the ``docker build`` command.

        Since Docker build arguments are resolved before deployment, keys and
        values cannot refer to unresolved tokens.

        Only allowed when ``directoryName`` is specified.

        :default: - no build args are passed
        '''
        result = self._values.get("docker_build_args")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def docker_build_sac_rets(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Build sACRets to pass to the ``docker build`` command.

        Since Docker build sACRets are resolved before deployment, keys and
        values cannot refer to unresolved tokens.

        Only allowed when ``directoryName`` is specified.

        :default: - no build sACRets are passed
        '''
        result = self._values.get("docker_build_sac_rets")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def docker_build_ssh(self) -> typing.Optional[builtins.str]:
        '''SSH agent socket or keys to pass to the ``docker buildx`` command.

        :default: - no ssh arg is passed
        '''
        result = self._values.get("docker_build_ssh")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def docker_build_target(self) -> typing.Optional[builtins.str]:
        '''Docker target to build to.

        Only allowed when ``directoryName`` is specified.

        :default: - no target
        '''
        result = self._values.get("docker_build_target")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def docker_cache_disabled(self) -> typing.Optional[builtins.bool]:
        '''Disable the cache and pass ``--no-cache`` to the ``docker build`` command.

        :default: - cache is used
        '''
        result = self._values.get("docker_cache_disabled")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def docker_cache_from(self) -> typing.Optional[typing.List[DockerCacheOption]]:
        '''Cache from options to pass to the ``docker build`` command.

        :default: - no cache from args are passed
        '''
        result = self._values.get("docker_cache_from")
        return typing.cast(typing.Optional[typing.List[DockerCacheOption]], result)

    @builtins.property
    def docker_cache_to(self) -> typing.Optional[DockerCacheOption]:
        '''Cache to options to pass to the ``docker build`` command.

        :default: - no cache to args are passed
        '''
        result = self._values.get("docker_cache_to")
        return typing.cast(typing.Optional[DockerCacheOption], result)

    @builtins.property
    def docker_file(self) -> typing.Optional[builtins.str]:
        '''Path to the Dockerfile (relative to the directory).

        Only allowed when ``directoryName`` is specified.

        :default: - no file
        '''
        result = self._values.get("docker_file")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def docker_outputs(self) -> typing.Optional[typing.List[builtins.str]]:
        '''Outputs to pass to the ``docker build`` command.

        :default: - no build args are passed
        '''
        result = self._values.get("docker_outputs")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def executable(self) -> typing.Optional[typing.List[builtins.str]]:
        '''An external command that will produce the packaged asset.

        The command should produce the name of a local Docker image on ``stdout``.

        :default: - Exactly one of ``directoryName`` and ``executable`` is required
        '''
        result = self._values.get("executable")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def network_mode(self) -> typing.Optional[builtins.str]:
        '''Networking mode for the RUN commands during build. *Requires Docker Engine API v1.25+*.

        Specify this property to build images on a specific networking mode.

        :default: - no networking mode specified
        '''
        result = self._values.get("network_mode")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def platform(self) -> typing.Optional[builtins.str]:
        '''Platform to build for. *Requires Docker Buildx*.

        Specify this property to build images on a specific platform.

        :default: - no platform specified (the current machine architecture will be used)
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerImageAssetSource(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerRunOptions",
    jsii_struct_bases=[],
    name_mapping={
        "command": "command",
        "entrypoint": "entrypoint",
        "environment": "environment",
        "network": "network",
        "platform": "platform",
        "security_opt": "securityOpt",
        "user": "user",
        "volumes": "volumes",
        "volumes_from": "volumesFrom",
        "working_directory": "workingDirectory",
    },
)
class DockerRunOptions:
    def __init__(
        self,
        *,
        command: typing.Optional[typing.Sequence[builtins.str]] = None,
        entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
        environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        network: typing.Optional[builtins.str] = None,
        platform: typing.Optional[builtins.str] = None,
        security_opt: typing.Optional[builtins.str] = None,
        user: typing.Optional[builtins.str] = None,
        volumes: typing.Optional[typing.Sequence[typing.Union["DockerVolume", typing.Dict[builtins.str, typing.Any]]]] = None,
        volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
        working_directory: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Docker run options.

        :param command: The command to run in the container. Default: - run the command defined in the image
        :param entrypoint: The entrypoint to run in the container. Default: - run the entrypoint defined in the image
        :param environment: The environment variables to pass to the container. Default: - no environment variables.
        :param network: Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_. Default: - no networking options
        :param platform: Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*. Example value: ``linux/amd64`` Default: - no platform specified
        :param security_opt: `Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container. Default: - no security options
        :param user: The user to use when running the container. Default: - root or image default
        :param volumes: Docker volumes to mount. Default: - no volumes are mounted
        :param volumes_from: Where to mount the specified volumes from. Default: - no containers are specified to mount volumes from
        :param working_directory: Working directory inside the container. Default: - image default
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6109b6cf6f19bb608750be04c117972f018ce5914e8f2b826f25391315f4b061)
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument entrypoint", value=entrypoint, expected_type=type_hints["entrypoint"])
            check_type(argname="argument environment", value=environment, expected_type=type_hints["environment"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument security_opt", value=security_opt, expected_type=type_hints["security_opt"])
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument volumes", value=volumes, expected_type=type_hints["volumes"])
            check_type(argname="argument volumes_from", value=volumes_from, expected_type=type_hints["volumes_from"])
            check_type(argname="argument working_directory", value=working_directory, expected_type=type_hints["working_directory"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if command is not None:
            self._values["command"] = command
        if entrypoint is not None:
            self._values["entrypoint"] = entrypoint
        if environment is not None:
            self._values["environment"] = environment
        if network is not None:
            self._values["network"] = network
        if platform is not None:
            self._values["platform"] = platform
        if security_opt is not None:
            self._values["security_opt"] = security_opt
        if user is not None:
            self._values["user"] = user
        if volumes is not None:
            self._values["volumes"] = volumes
        if volumes_from is not None:
            self._values["volumes_from"] = volumes_from
        if working_directory is not None:
            self._values["working_directory"] = working_directory

    @builtins.property
    def command(self) -> typing.Optional[typing.List[builtins.str]]:
        '''The command to run in the container.

        :default: - run the command defined in the image
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def entrypoint(self) -> typing.Optional[typing.List[builtins.str]]:
        '''The entrypoint to run in the container.

        :default: - run the entrypoint defined in the image
        '''
        result = self._values.get("entrypoint")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def environment(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''The environment variables to pass to the container.

        :default: - no environment variables.
        '''
        result = self._values.get("environment")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def network(self) -> typing.Optional[builtins.str]:
        '''Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_.

        :default: - no networking options
        '''
        result = self._values.get("network")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def platform(self) -> typing.Optional[builtins.str]:
        '''Set platform if server is multi-platform capable. *Requires Docker Engine API v1.38+*.

        Example value: ``linux/amd64``

        :default: - no platform specified
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def security_opt(self) -> typing.Optional[builtins.str]:
        '''`Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container.

        :default: - no security options
        '''
        result = self._values.get("security_opt")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def user(self) -> typing.Optional[builtins.str]:
        '''The user to use when running the container.

        :default: - root or image default
        '''
        result = self._values.get("user")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def volumes(self) -> typing.Optional[typing.List["DockerVolume"]]:
        '''Docker volumes to mount.

        :default: - no volumes are mounted
        '''
        result = self._values.get("volumes")
        return typing.cast(typing.Optional[typing.List["DockerVolume"]], result)

    @builtins.property
    def volumes_from(self) -> typing.Optional[typing.List[builtins.str]]:
        '''Where to mount the specified volumes from.

        :default: - no containers are specified to mount volumes from

        :see: https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
        '''
        result = self._values.get("volumes_from")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def working_directory(self) -> typing.Optional[builtins.str]:
        '''Working directory inside the container.

        :default: - image default
        '''
        result = self._values.get("working_directory")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerRunOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DockerVolume",
    jsii_struct_bases=[],
    name_mapping={
        "container_path": "containerPath",
        "host_path": "hostPath",
        "consistency": "consistency",
    },
)
class DockerVolume:
    def __init__(
        self,
        *,
        container_path: builtins.str,
        host_path: builtins.str,
        consistency: typing.Optional["DockerVolumeConsistency"] = None,
    ) -> None:
        '''A Docker volume.

        :param container_path: The path where the file or directory is mounted in the container.
        :param host_path: The path to the file or directory on the host machine.
        :param consistency: Mount consistency. Only applicable for macOS Default: DockerConsistency.DELEGATED
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f36876a5743c00f8aa3baaf30015375a0cb64e3c3544271cf78c2d69ff52e388)
            check_type(argname="argument container_path", value=container_path, expected_type=type_hints["container_path"])
            check_type(argname="argument host_path", value=host_path, expected_type=type_hints["host_path"])
            check_type(argname="argument consistency", value=consistency, expected_type=type_hints["consistency"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "container_path": container_path,
            "host_path": host_path,
        }
        if consistency is not None:
            self._values["consistency"] = consistency

    @builtins.property
    def container_path(self) -> builtins.str:
        '''The path where the file or directory is mounted in the container.'''
        result = self._values.get("container_path")
        assert result is not None, "Required property 'container_path' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def host_path(self) -> builtins.str:
        '''The path to the file or directory on the host machine.'''
        result = self._values.get("host_path")
        assert result is not None, "Required property 'host_path' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def consistency(self) -> typing.Optional["DockerVolumeConsistency"]:
        '''Mount consistency.

        Only applicable for macOS

        :default: DockerConsistency.DELEGATED

        :see: https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos
        '''
        result = self._values.get("consistency")
        return typing.cast(typing.Optional["DockerVolumeConsistency"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DockerVolume(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.DockerVolumeConsistency")
class DockerVolumeConsistency(enum.Enum):
    '''Supported Docker volume consistency types.

    Only valid on macOS due to the way file storage works on Mac
    '''

    CONSISTENT = "CONSISTENT"
    '''Read/write operations inside the Docker container are applied immediately on the mounted host machine volumes.'''
    DELEGATED = "DELEGATED"
    '''Read/write operations on mounted Docker volumes are first written inside the container and then synchronized to the host machine.'''
    CACHED = "CACHED"
    '''Read/write operations on mounted Docker volumes are first applied on the host machine and then synchronized to the container.'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.EncodingOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint"},
)
class EncodingOptions:
    def __init__(self, *, display_hint: typing.Optional[builtins.str] = None) -> None:
        '''Properties to string encodings.

        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__592ddd870eea1153b99934c7382cc772fd9c62743fc04f026567e47d474c14a6)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''A hint for the Token's purpose when stringifying it.'''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EncodingOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.Environment",
    jsii_struct_bases=[],
    name_mapping={"account": "account", "region": "region"},
)
class Environment:
    def __init__(
        self,
        *,
        account: typing.Optional[builtins.str] = None,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''The deployment environment for a stack.

        :param account: The ALIYUN account ID for this environment. This can be either a concrete value such as ``585191031104`` or ``ALIYUN.ACCOUNT_ID`` which indicates that account ID will only be determined during deployment (it will resolve to the ROS intrinsic ``{"Ref":"ALIYUN::AccountId"}``). Note that certain features, such as cross-stack references and environmental context providers require concrete region information and will cause this stack to emit synthesis errors. Default: ALIYUN.ACCOUNT_ID which means that the stack will be account-agnostic.
        :param region: The ALIYUN region for this environment. This can be either a concrete value such as ``eu-west-2`` or ``ALIYUN.REGION`` which indicates that account ID will only be determined during deployment (it will resolve to the ROS intrinsic ``{"Ref":"ALIYUN::Region"}``). Note that certain features, such as cross-stack references and environmental context providers require concrete region information and will cause this stack to emit synthesis errors. Default: ALIYUN.REGION which means that the stack will be region-agnostic.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2798f0bfb575b3a7ef818072cd5d77f3d587c0817ceab03d3ac78d1d53819f6d)
            check_type(argname="argument account", value=account, expected_type=type_hints["account"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if account is not None:
            self._values["account"] = account
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def account(self) -> typing.Optional[builtins.str]:
        '''The ALIYUN account ID for this environment.

        This can be either a concrete value such as ``585191031104`` or ``ALIYUN.ACCOUNT_ID`` which
        indicates that account ID will only be determined during deployment (it
        will resolve to the ROS intrinsic ``{"Ref":"ALIYUN::AccountId"}``).
        Note that certain features, such as cross-stack references and
        environmental context providers require concrete region information and
        will cause this stack to emit synthesis errors.

        :default: ALIYUN.ACCOUNT_ID which means that the stack will be account-agnostic.
        '''
        result = self._values.get("account")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The ALIYUN region for this environment.

        This can be either a concrete value such as ``eu-west-2`` or ``ALIYUN.REGION``
        which indicates that account ID will only be determined during deployment
        (it will resolve to the ROS intrinsic ``{"Ref":"ALIYUN::Region"}``).
        Note that certain features, such as cross-stack references and
        environmental context providers require concrete region information and
        will cause this stack to emit synthesis errors.

        :default: ALIYUN.REGION which means that the stack will be region-agnostic.
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Environment(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.FileAssetLocation",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "http_url": "httpUrl",
        "object_key": "objectKey",
        "region": "region",
    },
)
class FileAssetLocation:
    def __init__(
        self,
        *,
        bucket_name: builtins.str,
        http_url: builtins.str,
        object_key: builtins.str,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''The location of the published file asset.

        This is where the asset
        can be consumed at runtime.

        :param bucket_name: The name of the OSS bucket.
        :param http_url: The HTTP URL of this asset on OSS. This value suitable for inclusion in a ROS template, and may be an encoded token. Example value: ``https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}``
        :param object_key: The path of OSS object.
        :param region: The region of the OSS bucket.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd19ceea152996067335ed47366009b166a3183fa73364a1d4597d61a0b79c9e)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument http_url", value=http_url, expected_type=type_hints["http_url"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "http_url": http_url,
            "object_key": object_key,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def bucket_name(self) -> builtins.str:
        '''The name of the OSS bucket.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def http_url(self) -> builtins.str:
        '''The HTTP URL of this asset on OSS.

        This value suitable for inclusion in a ROS template, and
        may be an encoded token.

        Example value: ``https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}``
        '''
        result = self._values.get("http_url")
        assert result is not None, "Required property 'http_url' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def object_key(self) -> builtins.str:
        '''The path of OSS object.'''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The region of the OSS bucket.'''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileAssetLocation(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.FileAssetPackaging")
class FileAssetPackaging(enum.Enum):
    '''Packaging modes for file assets.'''

    ZIP_DIRECTORY = "ZIP_DIRECTORY"
    '''The asset source path points to a directory, which should be archived using zip and and then uploaded to Aliyun OSS bucket.'''
    FILE = "FILE"
    '''The asset source path points to a single file, which should be uploaded to Aliyun OSS bucket.'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.FileAssetSource",
    jsii_struct_bases=[],
    name_mapping={
        "source_hash": "sourceHash",
        "deploy_time": "deployTime",
        "executable": "executable",
        "file_name": "fileName",
        "packaging": "packaging",
    },
)
class FileAssetSource:
    def __init__(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> None:
        '''Represents the source for a file asset.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2682133824b0eab08471f419a7bd8f1d79735418bef3976680785b85ace943d3)
            check_type(argname="argument source_hash", value=source_hash, expected_type=type_hints["source_hash"])
            check_type(argname="argument deploy_time", value=deploy_time, expected_type=type_hints["deploy_time"])
            check_type(argname="argument executable", value=executable, expected_type=type_hints["executable"])
            check_type(argname="argument file_name", value=file_name, expected_type=type_hints["file_name"])
            check_type(argname="argument packaging", value=packaging, expected_type=type_hints["packaging"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_hash": source_hash,
        }
        if deploy_time is not None:
            self._values["deploy_time"] = deploy_time
        if executable is not None:
            self._values["executable"] = executable
        if file_name is not None:
            self._values["file_name"] = file_name
        if packaging is not None:
            self._values["packaging"] = packaging

    @builtins.property
    def source_hash(self) -> builtins.str:
        '''A hash on the content source.

        This hash is used to uniquely identify this
        asset throughout the system. If this value doesn't change, the asset will
        not be rebuilt or republished.
        '''
        result = self._values.get("source_hash")
        assert result is not None, "Required property 'source_hash' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def deploy_time(self) -> typing.Optional[builtins.bool]:
        '''Whether or not the asset needs to exist beyond deployment time;

        i.e.
        are copied over to a different location and not needed afterwards.
        Setting this property to true has an impact on the lifecycle of the asset,
        because we will assume that it is safe to delete after the ROS
        deployment succeeds.

        For example, FC Function assets are copied over to FC during
        deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
        we consider those deployTime assets.

        :default: false
        '''
        result = self._values.get("deploy_time")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def executable(self) -> typing.Optional[typing.List[builtins.str]]:
        '''An external command that will produce the packaged asset.

        The command should produce the location of a ZIP file on ``stdout``.

        :default: - Exactly one of ``fileName`` and ``executable`` is required
        '''
        result = self._values.get("executable")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def file_name(self) -> typing.Optional[builtins.str]:
        '''The path, relative to the root of the cloud assembly, in which this asset source resides.

        This can be a path to a file or a directory, depending on the
        packaging type.

        :default: - Exactly one of ``fileName`` and ``executable`` is required
        '''
        result = self._values.get("file_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def packaging(self) -> typing.Optional[FileAssetPackaging]:
        '''Which type of packaging to perform.

        :default: - Required if ``fileName`` is specified.
        '''
        result = self._values.get("packaging")
        return typing.cast(typing.Optional[FileAssetPackaging], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileAssetSource(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.FileCopyOptions",
    jsii_struct_bases=[],
    name_mapping={
        "exclude": "exclude",
        "follow_symlinks": "followSymlinks",
        "ignore_mode": "ignoreMode",
    },
)
class FileCopyOptions:
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow_symlinks: typing.Optional["SymlinkFollowMode"] = None,
        ignore_mode: typing.Optional["IgnoreMode"] = None,
    ) -> None:
        '''Options applied when copying directories into the staging location.

        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow_symlinks: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__992c189686df402d38fd5945c3521c6068ee8126bc6f53a69945fe845e1358c2)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow_symlinks", value=follow_symlinks, expected_type=type_hints["follow_symlinks"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow_symlinks is not None:
            self._values["follow_symlinks"] = follow_symlinks
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode

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
    def follow_symlinks(self) -> typing.Optional["SymlinkFollowMode"]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow_symlinks")
        return typing.cast(typing.Optional["SymlinkFollowMode"], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional["IgnoreMode"]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional["IgnoreMode"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileCopyOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.FileFingerprintOptions",
    jsii_struct_bases=[FileCopyOptions],
    name_mapping={
        "exclude": "exclude",
        "follow_symlinks": "followSymlinks",
        "ignore_mode": "ignoreMode",
        "extra_hash": "extraHash",
    },
)
class FileFingerprintOptions(FileCopyOptions):
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow_symlinks: typing.Optional["SymlinkFollowMode"] = None,
        ignore_mode: typing.Optional["IgnoreMode"] = None,
        extra_hash: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Options related to calculating source hash.

        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow_symlinks: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param extra_hash: Extra information to encode into the fingerprint (e.g. build instructions and other inputs). Default: - hash is only based on source content
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4241e4a4c6de68cd01a569a348986f14042d51d090c9a3a04593d484a999d2a6)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow_symlinks", value=follow_symlinks, expected_type=type_hints["follow_symlinks"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
            check_type(argname="argument extra_hash", value=extra_hash, expected_type=type_hints["extra_hash"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow_symlinks is not None:
            self._values["follow_symlinks"] = follow_symlinks
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode
        if extra_hash is not None:
            self._values["extra_hash"] = extra_hash

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
    def follow_symlinks(self) -> typing.Optional["SymlinkFollowMode"]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow_symlinks")
        return typing.cast(typing.Optional["SymlinkFollowMode"], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional["IgnoreMode"]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional["IgnoreMode"], result)

    @builtins.property
    def extra_hash(self) -> typing.Optional[builtins.str]:
        '''Extra information to encode into the fingerprint (e.g. build instructions and other inputs).

        :default: - hash is only based on source content
        '''
        result = self._values.get("extra_hash")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileFingerprintOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystem(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FileSystem",
):
    '''File system utilities.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="copyDirectory")
    @builtins.classmethod
    def copy_directory(
        cls,
        src_dir: builtins.str,
        dest_dir: builtins.str,
        options: typing.Optional[typing.Union[CopyOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        root_dir: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Copies an entire directory structure.

        :param src_dir: Source directory.
        :param dest_dir: Destination directory.
        :param options: options.
        :param root_dir: Root directory to calculate exclusions from.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__669c7dcfd5e608865581f17c194c0ae285322f2141844550e6dfbee60687b199)
            check_type(argname="argument src_dir", value=src_dir, expected_type=type_hints["src_dir"])
            check_type(argname="argument dest_dir", value=dest_dir, expected_type=type_hints["dest_dir"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument root_dir", value=root_dir, expected_type=type_hints["root_dir"])
        return typing.cast(None, jsii.sinvoke(cls, "copyDirectory", [src_dir, dest_dir, options, root_dir]))

    @jsii.member(jsii_name="fingerprint")
    @builtins.classmethod
    def fingerprint(
        cls,
        file_or_directory: builtins.str,
        *,
        extra_hash: typing.Optional[builtins.str] = None,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow: typing.Optional["SymlinkFollowMode"] = None,
        ignore_mode: typing.Optional["IgnoreMode"] = None,
    ) -> builtins.str:
        '''Produces fingerprint based on the contents of a single file or an entire directory tree.

        Line endings are converted from CRLF to LF.

        The fingerprint will also include:

        1. An extra string if defined in ``options.extra``.
        2. The symlink follow mode value.

        :param file_or_directory: The directory or file to fingerprint.
        :param extra_hash: Extra information to encode into the fingerprint (e.g. build instructions and other inputs). Default: - hash is only based on source content
        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6717888dbbe244ca98e40d941d337984a7814bab2acc4c6239ce3e4661caa56)
            check_type(argname="argument file_or_directory", value=file_or_directory, expected_type=type_hints["file_or_directory"])
        options = FingerprintOptions(
            extra_hash=extra_hash,
            exclude=exclude,
            follow=follow,
            ignore_mode=ignore_mode,
        )

        return typing.cast(builtins.str, jsii.sinvoke(cls, "fingerprint", [file_or_directory, options]))

    @jsii.member(jsii_name="isEmpty")
    @builtins.classmethod
    def is_empty(cls, dir: builtins.str) -> builtins.bool:
        '''Checks whether a directory is empty.

        :param dir: The directory to check.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19652aed1bbce55404f609f091f1c0886f2ec20ac7f3b99b369a978cd6f16a88)
            check_type(argname="argument dir", value=dir, expected_type=type_hints["dir"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isEmpty", [dir]))

    @jsii.member(jsii_name="mkdtemp")
    @builtins.classmethod
    def mkdtemp(cls, prefix: builtins.str) -> builtins.str:
        '''Creates a unique temporary directory in the **system temp directory**.

        :param prefix: A prefix for the directory name. Six random characters will be generated and appended behind this prefix.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72cb202b0f828ef6d9ad6b6cd87bb117872cd019536c0c049176d9da29b8e162)
            check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "mkdtemp", [prefix]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="tmpdir")
    def tmpdir(cls) -> builtins.str:
        '''The real path of the system temp directory.'''
        return typing.cast(builtins.str, jsii.sget(cls, "tmpdir"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.FingerprintOptions",
    jsii_struct_bases=[CopyOptions],
    name_mapping={
        "exclude": "exclude",
        "follow": "follow",
        "ignore_mode": "ignoreMode",
        "extra_hash": "extraHash",
    },
)
class FingerprintOptions(CopyOptions):
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow: typing.Optional["SymlinkFollowMode"] = None,
        ignore_mode: typing.Optional["IgnoreMode"] = None,
        extra_hash: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Options related to calculating source hash.

        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param extra_hash: Extra information to encode into the fingerprint (e.g. build instructions and other inputs). Default: - hash is only based on source content
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cce6b5a065927818d7a9732a848ae82fb6618b3c6b36a47c43415fc11b53bef)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow", value=follow, expected_type=type_hints["follow"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
            check_type(argname="argument extra_hash", value=extra_hash, expected_type=type_hints["extra_hash"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow is not None:
            self._values["follow"] = follow
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode
        if extra_hash is not None:
            self._values["extra_hash"] = extra_hash

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
    def follow(self) -> typing.Optional["SymlinkFollowMode"]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow")
        return typing.cast(typing.Optional["SymlinkFollowMode"], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional["IgnoreMode"]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional["IgnoreMode"], result)

    @builtins.property
    def extra_hash(self) -> typing.Optional[builtins.str]:
        '''Extra information to encode into the fingerprint (e.g. build instructions and other inputs).

        :default: - hash is only based on source content
        '''
        result = self._values.get("extra_hash")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FingerprintOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Fn(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Fn"):
    '''Resource Orchestration Service intrinsic functions.

    https://help.aliyun.com/zh/ros/user-guide/functions
    '''

    @jsii.member(jsii_name="add")
    @builtins.classmethod
    def add(
        cls,
        values: typing.Union[jsii.Number, typing.Sequence[typing.Any], typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4463aa739260d8ce63c1fc5c0d0104b648438afea3cc84fd0508ce2ff89e41d)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "add", [values]))

    @jsii.member(jsii_name="any")
    @builtins.classmethod
    def any(
        cls,
        values: typing.Union[typing.Sequence[typing.Any], "IResolvable"],
    ) -> builtins.str:
        '''Returns whether a value in the specified array is true or false.

        Returns true if any item in the array is true, and false otherwise.

        :param values: An array of values.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71444f786daeba51d890a6e5ac5b780540a5a28b7d1797b5cc1405fb6eb42584)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "any", [values]))

    @jsii.member(jsii_name="avg")
    @builtins.classmethod
    def avg(
        cls,
        ndigits: jsii.Number,
        values: typing.Sequence[jsii.Number],
    ) -> jsii.Number:
        '''
        :param ndigits: -
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4603e8d5b00df56f000c5dadb14d841aa452846777e902e565f1c0b2decdd8c)
            check_type(argname="argument ndigits", value=ndigits, expected_type=type_hints["ndigits"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "avg", [ndigits, values]))

    @jsii.member(jsii_name="base64Decode")
    @builtins.classmethod
    def base64_decode(cls, data: builtins.str) -> builtins.str:
        '''
        :param data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5654a30fb1a45859f496027acf7a03d482124e055620291bac9e02da204e9cb6)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "base64Decode", [data]))

    @jsii.member(jsii_name="base64Encode")
    @builtins.classmethod
    def base64_encode(cls, data: builtins.str) -> builtins.str:
        '''The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.

        :param data: The string value you want to convert to Base64.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce3856953e5d2815bfc23c0d182df0cf035b30feda4d849f172136dd500a32a0)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "base64Encode", [data]))

    @jsii.member(jsii_name="calculate")
    @builtins.classmethod
    def calculate(
        cls,
        values: builtins.str,
        ndigits: jsii.Number,
        para: typing.Sequence[jsii.Number],
    ) -> jsii.Number:
        '''
        :param values: -
        :param ndigits: -
        :param para: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__247d1bde91a0d2f5bdbe0d77b1d77116951cc7a286d8876b7ee3c841e3d01986)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument ndigits", value=ndigits, expected_type=type_hints["ndigits"])
            check_type(argname="argument para", value=para, expected_type=type_hints["para"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "calculate", [values, ndigits, para]))

    @jsii.member(jsii_name="cidr")
    @builtins.classmethod
    def cidr(
        cls,
        ip_block: typing.Union[builtins.str, "IResolvable"],
        count: typing.Union[jsii.Number, "IResolvable"],
        cidr_bits: typing.Union[jsii.Number, "IResolvable"],
    ) -> builtins.str:
        '''Returns a list of CIDR addresses.

        :param ip_block: The IP address block from which you want to allocate the CIDR. The block must be expressed in CIDR notation.
        :param count: The number of IPv4 CIDRs to generate. Valid input values range from 1 to 256 and are used to decide the total number of final subnets.
        :param cidr_bits: The number of subnet bits of the new CIDR. For example, if the value "8" is specified for this parameter, a CIDR with a "/24" mask will be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c2f8c64c05bf6bdd49194360dffed37679490b787ba1cb1986212b9b630a726)
            check_type(argname="argument ip_block", value=ip_block, expected_type=type_hints["ip_block"])
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
            check_type(argname="argument cidr_bits", value=cidr_bits, expected_type=type_hints["cidr_bits"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "cidr", [ip_block, count, cidr_bits]))

    @jsii.member(jsii_name="conditionAnd")
    @builtins.classmethod
    def condition_and(
        cls,
        *conditions: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false.

        ``Fn::And`` acts as
        an AND operator. The minimum number of conditions that you can include is
        2, and the maximum is 10.

        :param conditions: conditions to AND.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d3b053d7bd2380d1777011cb385769042414d91dcd1ac5c5d4126a11fb6ced7)
            check_type(argname="argument conditions", value=conditions, expected_type=typing.Tuple[type_hints["conditions"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionAnd", [*conditions]))

    @jsii.member(jsii_name="conditionEquals")
    @builtins.classmethod
    def condition_equals(
        cls,
        lhs: typing.Any,
        rhs: typing.Any,
    ) -> "IRosConditionExpression":
        '''Compares if two values are equal.

        Returns true if the two values are equal
        or false if they aren't.

        :param lhs: A value of any type that you want to compare.
        :param rhs: A value of any type that you want to compare.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c32d8c967b76fe1b22006921d766d24460ced611ddaeca23b0cef97797df9dee)
            check_type(argname="argument lhs", value=lhs, expected_type=type_hints["lhs"])
            check_type(argname="argument rhs", value=rhs, expected_type=type_hints["rhs"])
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionEquals", [lhs, rhs]))

    @jsii.member(jsii_name="conditionIf")
    @builtins.classmethod
    def condition_if(
        cls,
        condition_id: typing.Union[builtins.str, "IRosConditionExpression"],
        value_if_true: typing.Any,
        value_if_false: typing.Any,
    ) -> typing.Any:
        '''Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.

        :param condition_id: A reference to a condition in the Conditions section. Use the condition's name to reference it.
        :param value_if_true: A value to be returned if the specified condition evaluates to true.
        :param value_if_false: A value to be returned if the specified condition evaluates to false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98d6a20e1d755c3448e9346d51da27f01a171bd61c63ea885517e0002d03b1c1)
            check_type(argname="argument condition_id", value=condition_id, expected_type=type_hints["condition_id"])
            check_type(argname="argument value_if_true", value=value_if_true, expected_type=type_hints["value_if_true"])
            check_type(argname="argument value_if_false", value=value_if_false, expected_type=type_hints["value_if_false"])
        return typing.cast(typing.Any, jsii.sinvoke(cls, "conditionIf", [condition_id, value_if_true, value_if_false]))

    @jsii.member(jsii_name="conditionNot")
    @builtins.classmethod
    def condition_not(
        cls,
        condition: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.

        ``Fn::Not`` acts as a NOT operator.

        :param condition: A condition such as ``Fn::Equals`` that evaluates to true or false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0f1efc96374482cd77e5e775be7aaf6b0826705fbb51a9778b524db9beb7f5b)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionNot", [condition]))

    @jsii.member(jsii_name="conditionOr")
    @builtins.classmethod
    def condition_or(
        cls,
        *conditions: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.

        ``Fn::Or`` acts
        as an OR operator. The minimum number of conditions that you can include is
        2, and the maximum is 10.

        :param conditions: conditions that evaluates to true or false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87426609e3c35a1db0e27d2a3800878e1f22676645588ff18f69707d682c3b90)
            check_type(argname="argument conditions", value=conditions, expected_type=typing.Tuple[type_hints["conditions"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionOr", [*conditions]))

    @jsii.member(jsii_name="contains")
    @builtins.classmethod
    def contains(
        cls,
        values: typing.Union[typing.Sequence[typing.Any], "IResolvable"],
        value: typing.Any,
    ) -> builtins.str:
        '''Returns true if at least one member of the list matches the specified value and false otherwise.

        :param values: An array of values.
        :param value: A value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac91e0ab789981c241d754ba954dbe6473c13fca939e645fddb6883a24414d88)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "contains", [values, value]))

    @jsii.member(jsii_name="eachMemberIn")
    @builtins.classmethod
    def each_member_in(
        cls,
        values1: typing.Union[typing.Sequence[typing.Any], "IResolvable"],
        values2: typing.Union[typing.Sequence[typing.Any], "IResolvable"],
    ) -> builtins.str:
        '''Returns true if every member of the first list is equal to at least one value in the second list, and false otherwise.

        :param values1: An array of values.
        :param values2: An array of values.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d7b0936a8de6f48d40f5e98646c709ad0c0d6d2adacfbf2d09c9667ce0cc36c)
            check_type(argname="argument values1", value=values1, expected_type=type_hints["values1"])
            check_type(argname="argument values2", value=values2, expected_type=type_hints["values2"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "eachMemberIn", [values1, values2]))

    @jsii.member(jsii_name="findInMap")
    @builtins.classmethod
    def find_in_map(
        cls,
        map_name: builtins.str,
        top_level_key: builtins.str,
        second_level_key: builtins.str,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.

        :param map_name: -
        :param top_level_key: -
        :param second_level_key: -

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__483847ae80b6d31323ba40a393751618bf0a768d1d766b45ec2a6e9a1c81cbfa)
            check_type(argname="argument map_name", value=map_name, expected_type=type_hints["map_name"])
            check_type(argname="argument top_level_key", value=top_level_key, expected_type=type_hints["top_level_key"])
            check_type(argname="argument second_level_key", value=second_level_key, expected_type=type_hints["second_level_key"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "findInMap", [map_name, top_level_key, second_level_key]))

    @jsii.member(jsii_name="formatTime")
    @builtins.classmethod
    def format_time(
        cls,
        format: typing.Union[builtins.str, "IResolvable"],
        time_zone: typing.Union[builtins.str, "IResolvable"],
    ) -> builtins.str:
        '''Returns the formatted time of the object.

        :param format: The format of the time.
        :param time_zone: The time zone.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__affcb2f87792474ef0dc856ade948417fd3fcbea16e36baaaa2f626f150cf608)
            check_type(argname="argument format", value=format, expected_type=type_hints["format"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "formatTime", [format, time_zone]))

    @jsii.member(jsii_name="getAtt")
    @builtins.classmethod
    def get_att(
        cls,
        logical_name_of_resource: builtins.str,
        attribute_name: builtins.str,
    ) -> "IResolvable":
        '''The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.

        :param logical_name_of_resource: The logical name (also called logical ID) of the resource that contains the attribute that you want.
        :param attribute_name: The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.

        :return: an IResolvable object
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c616186d3b472030fc6ff0709da54ba8f4263acff902f4e13dc63abddb12693)
            check_type(argname="argument logical_name_of_resource", value=logical_name_of_resource, expected_type=type_hints["logical_name_of_resource"])
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "getAtt", [logical_name_of_resource, attribute_name]))

    @jsii.member(jsii_name="getAzs")
    @builtins.classmethod
    def get_azs(cls, region: builtins.str) -> typing.List[builtins.str]:
        '''The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.

        Because customers have access to
        different Availability Zones, the intrinsic function ``Fn::GetAZs`` enables
        template authors to write templates that adapt to the calling user's
        access. That way you don't have to hard-code a full list of Availability
        Zones for a specified region.

        :param region: The name of the region for which you want to get the Availability Zones. You can use the ROS::Region pseudo parameter to specify the region in which the stack is created. Specifying an empty string is equivalent to specifying ROS::Region.

        :return: a token represented as a string array
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5df40a11802df885fed03fa5ee963ab074e2dd8e1f13cd43d87df7b9facfb9c)
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "getAzs", [region]))

    @jsii.member(jsii_name="getJsonValue")
    @builtins.classmethod
    def get_json_value(cls, key: builtins.str, json_data: typing.Any) -> builtins.str:
        '''
        :param key: -
        :param json_data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bec0ea9134fb15498bbd9212d243dbe6cb81310293221509061e9dbe3df6313)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument json_data", value=json_data, expected_type=type_hints["json_data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "getJsonValue", [key, json_data]))

    @jsii.member(jsii_name="getStackOutput")
    @builtins.classmethod
    def get_stack_output(
        cls,
        stack_id: builtins.str,
        output_key: builtins.str,
        stack_region: typing.Optional[builtins.str] = None,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.

        :param stack_id: -
        :param output_key: -
        :param stack_region: -

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffa0ab99cd7d646eb78d61ad0b07aa230afdb88914c828db09aaab14cf714839)
            check_type(argname="argument stack_id", value=stack_id, expected_type=type_hints["stack_id"])
            check_type(argname="argument output_key", value=output_key, expected_type=type_hints["output_key"])
            check_type(argname="argument stack_region", value=stack_region, expected_type=type_hints["stack_region"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "getStackOutput", [stack_id, output_key, stack_region]))

    @jsii.member(jsii_name="indent")
    @builtins.classmethod
    def indent(
        cls,
        str: typing.Union[builtins.str, "IResolvable"],
        level: typing.Union[jsii.Number, "IResolvable"],
        indent: typing.Optional[typing.Union[jsii.Number, "IResolvable"]] = None,
    ) -> builtins.str:
        '''The intrinsic function Fn::Indent adjust the indentation of the string.

        :param str: Strings that need to be indented.
        :param level: Indentation level. The range is [0,20].
        :param indent: Optional, defaults to 2 for two Spaces per level, in the range [0,4].
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__398b193437beb1582bbb080cb9e23b26eb75d040e0782c71b898aa8b859c2674)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
            check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            check_type(argname="argument indent", value=indent, expected_type=type_hints["indent"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "indent", [str, level, indent]))

    @jsii.member(jsii_name="index")
    @builtins.classmethod
    def index(
        cls,
        item_to_find_index: typing.Any,
        item_list: typing.Union[typing.Sequence[typing.Any], "IResolvable"],
    ) -> builtins.str:
        '''Returns the index of the item in the list.

        :param item_to_find_index: The item to find in the list.
        :param item_list: The list to find the item in.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c00978591cf423ab6c911133bbb6304f86775462d78c9cb542830e060a946bd5)
            check_type(argname="argument item_to_find_index", value=item_to_find_index, expected_type=type_hints["item_to_find_index"])
            check_type(argname="argument item_list", value=item_list, expected_type=type_hints["item_list"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "index", [item_to_find_index, item_list]))

    @jsii.member(jsii_name="join")
    @builtins.classmethod
    def join(
        cls,
        delimiter: builtins.str,
        list_of_values: typing.Sequence[typing.Union[builtins.str, "IResolvable"]],
    ) -> builtins.str:
        '''The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.

        If a delimiter is the empty
        string, the set of values are concatenated with no delimiter.

        :param delimiter: The value you want to occur between fragments. The delimiter will occur between fragments only. It will not terminate the final value.
        :param list_of_values: The list of values you want combined.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88f3fc6721043fc599f60ea05b463881dcf4075d5127c09179c02a1690454ef0)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument list_of_values", value=list_of_values, expected_type=type_hints["list_of_values"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "join", [delimiter, list_of_values]))

    @jsii.member(jsii_name="jq")
    @builtins.classmethod
    def jq(
        cls,
        method: builtins.str,
        script: builtins.str,
        input_string: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param method: -
        :param script: -
        :param input_string: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bf918016f24f24d6d8d161b6d860b5a0b5506fe4d57b968ce44fea4797441b7)
            check_type(argname="argument method", value=method, expected_type=type_hints["method"])
            check_type(argname="argument script", value=script, expected_type=type_hints["script"])
            check_type(argname="argument input_string", value=input_string, expected_type=type_hints["input_string"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "jq", [method, script, input_string]))

    @jsii.member(jsii_name="lengthOf")
    @builtins.classmethod
    def length_of(cls, obj: typing.Any) -> builtins.str:
        '''Returns the length of the object.

        :param obj: An object whose length needs to be computed. Three types are supported: strings, lists, and dictionaries.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38b597a02e0376fdb7d70f797550d335aefa10f7662ed16418104e8b0a228eff)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "lengthOf", [obj]))

    @jsii.member(jsii_name="listMerge")
    @builtins.classmethod
    def list_merge(
        cls,
        value_list: typing.Sequence[typing.Union[typing.Sequence[typing.Any], "IResolvable"]],
    ) -> "IResolvable":
        '''
        :param value_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__418ce724afaaaf93016caa6baae8868b58470039ae7a0209173008f801bd0cce)
            check_type(argname="argument value_list", value=value_list, expected_type=type_hints["value_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "listMerge", [value_list]))

    @jsii.member(jsii_name="marketplaceImage")
    @builtins.classmethod
    def marketplace_image(
        cls,
        image_product_code: typing.Union[builtins.str, "IResolvable"],
    ) -> builtins.str:
        '''The intrinsic function Fn::MarketplaceImage returns the default image ID of the specified cloud marketplace image product Code.

        :param image_product_code: The product code of the cloud marketplace image.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c7a5db387ae89ac6a30e4c954067919cff32e8a64d15df467d3f729b03150c9)
            check_type(argname="argument image_product_code", value=image_product_code, expected_type=type_hints["image_product_code"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "marketplaceImage", [image_product_code]))

    @jsii.member(jsii_name="matchPattern")
    @builtins.classmethod
    def match_pattern(
        cls,
        pattern: typing.Union[builtins.str, "IResolvable"],
        value: typing.Union[builtins.str, "IResolvable"],
    ) -> builtins.str:
        '''Returns true if a specified string matches a specified pattern.

        :param pattern: A regular expression in string form.
        :param value: The string to match.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9056ae1bb402012245a88742bb4ce615a4678fa0e4c0caed7770601b6aca854)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "matchPattern", [pattern, value]))

    @jsii.member(jsii_name="max")
    @builtins.classmethod
    def max(cls, values: typing.Sequence[jsii.Number]) -> jsii.Number:
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c2a2d4a102c055ada8b542f1e629eebbdc2c3b23b6ec2f9d3156425c6e0acfe)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "max", [values]))

    @jsii.member(jsii_name="mergeMapToList")
    @builtins.classmethod
    def merge_map_to_list(
        cls,
        map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Sequence[typing.Any]]],
    ) -> "IResolvable":
        '''
        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82b64e548b2fe149619ab5ddf83a2692c9fd8f25ee48e660845b06e12306d617)
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "mergeMapToList", [map_list]))

    @jsii.member(jsii_name="min")
    @builtins.classmethod
    def min(cls, values: typing.Sequence[jsii.Number]) -> jsii.Number:
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fc4584dee600015afe6c6649a88dcc4e525cadcf95374eb87929129b2f3ef1c)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "min", [values]))

    @jsii.member(jsii_name="ref")
    @builtins.classmethod
    def ref(cls, logical_name: builtins.str) -> builtins.str:
        '''The ``Ref`` intrinsic function returns the value of the specified parameter or resource.

        Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.

        :param logical_name: The logical name of a parameter/resource for which you want to retrieve its value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e9634d4ce38e42ffeb12b5d5faf8aa2a239fc7e2f6389ee89c22a433f482341)
            check_type(argname="argument logical_name", value=logical_name, expected_type=type_hints["logical_name"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "ref", [logical_name]))

    @jsii.member(jsii_name="replace")
    @builtins.classmethod
    def replace(
        cls,
        replace_data: typing.Mapping[builtins.str, typing.Any],
        content: builtins.str,
    ) -> builtins.str:
        '''
        :param replace_data: -
        :param content: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f093db3c371af0aa55cd98c01151e474879cb90d07575abea0e5cf971413df4)
            check_type(argname="argument replace_data", value=replace_data, expected_type=type_hints["replace_data"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "replace", [replace_data, content]))

    @jsii.member(jsii_name="select")
    @builtins.classmethod
    def select(
        cls,
        index: typing.Union[builtins.str, jsii.Number],
        array: typing.Any,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.

        :param index: The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
        :param array: The list of objects to select from. This list must not be null, nor can it have null entries.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b26926a5816f273496a6351b2085fc2ed9f3fafe5e2353790c65e10563fcf72)
            check_type(argname="argument index", value=index, expected_type=type_hints["index"])
            check_type(argname="argument array", value=array, expected_type=type_hints["array"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "select", [index, array]))

    @jsii.member(jsii_name="selectMapList")
    @builtins.classmethod
    def select_map_list(
        cls,
        key: builtins.str,
        map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param key: -
        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14777cebe9bed53e78225c85b1b6b1636e8831c632317c0d9b6cec030eb1e31c)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "selectMapList", [key, map_list]))

    @jsii.member(jsii_name="split")
    @builtins.classmethod
    def split(
        cls,
        delimiter: builtins.str,
        source: builtins.str,
    ) -> typing.List[builtins.str]:
        '''To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.

        Specify the location of splits
        with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
        to pick a specific element.

        :param delimiter: A string value that determines where the source string is divided.
        :param source: The string value that you want to split.

        :return: a token represented as a string array
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e40386a7e03a946cc861ea88a3c7bc073d133b957f617719c7c9dc19f966c12)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "split", [delimiter, source]))

    @jsii.member(jsii_name="str")
    @builtins.classmethod
    def str(cls, value: typing.Any) -> builtins.str:
        '''
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00895398044099548c609b2ecdc6200196f3347f2b3473fae8a7dd295d6a55dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "str", [value]))

    @jsii.member(jsii_name="sub")
    @builtins.classmethod
    def sub(
        cls,
        body: builtins.str,
        variables: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> builtins.str:
        '''The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.

        In your templates, you can use this function
        to construct commands or outputs that include values that aren't available
        until you create or update a stack.

        :param body: A string with variables that Ros Template substitutes with their associated values at runtime. Write variables as ${MyVarName}. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map. If you specify only template parameter names, resource logical IDs, and resource attributes, don't specify a key-value map.
        :param variables: The name of a variable that you included in the String parameter. The value that Ros Template substitutes for the associated variable name at runtime.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__936318f7d306dbbfa94357c01fc7ea166b43b16cc0756f030d327ffe3a409e5c)
            check_type(argname="argument body", value=body, expected_type=type_hints["body"])
            check_type(argname="argument variables", value=variables, expected_type=type_hints["variables"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "sub", [body, variables]))


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IAnyProducer")
class IAnyProducer(typing_extensions.Protocol):
    '''Interface for lazy untyped value producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Any:
        '''Produce the value.

        :param context: -
        '''
        ...


class _IAnyProducerProxy:
    '''Interface for lazy untyped value producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IAnyProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Any:
        '''Produce the value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c17c877cbc31bd56fc0d0ada8af1359356a47e367984086f30dbdd1e8909805d)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAnyProducer).__jsii_proxy_class__ = lambda : _IAnyProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IAsset")
class IAsset(typing_extensions.Protocol):
    '''Common interface for all assets.'''

    @builtins.property
    @jsii.member(jsii_name="assetHash")
    def asset_hash(self) -> builtins.str:
        '''A hash of this asset, which is available at construction time.

        As this is a plain string, it
        can be used in construct IDs in order to enforce creation of a new resource when the content
        hash has changed.
        '''
        ...


class _IAssetProxy:
    '''Common interface for all assets.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IAsset"

    @builtins.property
    @jsii.member(jsii_name="assetHash")
    def asset_hash(self) -> builtins.str:
        '''A hash of this asset, which is available at construction time.

        As this is a plain string, it
        can be used in construct IDs in order to enforce creation of a new resource when the content
        hash has changed.
        '''
        return typing.cast(builtins.str, jsii.get(self, "assetHash"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAsset).__jsii_proxy_class__ = lambda : _IAssetProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IDependable")
class IDependable(typing_extensions.Protocol):
    '''Trait marker for classes that can be depended upon.

    The presence of this interface indicates that an object has
    an ``IDependableTrait`` implementation.

    This interface can be used to take an (ordering) dependency on a set of
    constructs. An ordering dependency implies that the resources represented by
    those constructs are deployed before the resources depending ON them are
    deployed.
    '''

    pass


class _IDependableProxy:
    '''Trait marker for classes that can be depended upon.

    The presence of this interface indicates that an object has
    an ``IDependableTrait`` implementation.

    This interface can be used to take an (ordering) dependency on a set of
    constructs. An ordering dependency implies that the resources represented by
    those constructs are deployed before the resources depending ON them are
    deployed.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IDependable"
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDependable).__jsii_proxy_class__ = lambda : _IDependableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IFragmentConcatenator")
class IFragmentConcatenator(typing_extensions.Protocol):
    '''(experimental) Function used to concatenate symbols in the target document language.

    Interface so it could potentially be exposed over jsii.

    :stability: experimental
    '''

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''(experimental) Join the fragment on the left and on the right.

        :param left: -
        :param right: -

        :stability: experimental
        '''
        ...


class _IFragmentConcatenatorProxy:
    '''(experimental) Function used to concatenate symbols in the target document language.

    Interface so it could potentially be exposed over jsii.

    :stability: experimental
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IFragmentConcatenator"

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''(experimental) Join the fragment on the left and on the right.

        :param left: -
        :param right: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c52de30a7fb0655b01843c16a129e0a7eebacf9016fd797efec15cd3678577a)
            check_type(argname="argument left", value=left, expected_type=type_hints["left"])
            check_type(argname="argument right", value=right, expected_type=type_hints["right"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [left, right]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFragmentConcatenator).__jsii_proxy_class__ = lambda : _IFragmentConcatenatorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IInspectable")
class IInspectable(typing_extensions.Protocol):
    '''Interface for examining a construct and exposing metadata.'''

    @jsii.member(jsii_name="inspect")
    def inspect(self, inspector: "TreeInspector") -> None:
        '''Examines construct.

        :param inspector: - tree inspector to collect and process attributes.
        '''
        ...


class _IInspectableProxy:
    '''Interface for examining a construct and exposing metadata.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IInspectable"

    @jsii.member(jsii_name="inspect")
    def inspect(self, inspector: "TreeInspector") -> None:
        '''Examines construct.

        :param inspector: - tree inspector to collect and process attributes.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1465a36c9a263cd138c4c560a149095fbdfecd574cfbe3422439e98c3fbdf2ed)
            check_type(argname="argument inspector", value=inspector, expected_type=type_hints["inspector"])
        return typing.cast(None, jsii.invoke(self, "inspect", [inspector]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInspectable).__jsii_proxy_class__ = lambda : _IInspectableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IListProducer")
class IListProducer(typing_extensions.Protocol):
    '''Interface for lazy list producers.'''

    @jsii.member(jsii_name="produce")
    def produce(
        self,
        context: "IResolveContext",
    ) -> typing.Optional[typing.List[builtins.str]]:
        '''Produce the list value.

        :param context: -
        '''
        ...


class _IListProducerProxy:
    '''Interface for lazy list producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IListProducer"

    @jsii.member(jsii_name="produce")
    def produce(
        self,
        context: "IResolveContext",
    ) -> typing.Optional[typing.List[builtins.str]]:
        '''Produce the list value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__767ea28bc08d47b0e1f0d4765fe0bc3f22c8289fee8b2e194da7d57277824f5a)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[typing.List[builtins.str]], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IListProducer).__jsii_proxy_class__ = lambda : _IListProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ILocalBundling")
class ILocalBundling(typing_extensions.Protocol):
    '''Local bundling.'''

    @jsii.member(jsii_name="tryBundle")
    def try_bundle(
        self,
        output_dir: builtins.str,
        *,
        image: DockerImage,
        bundling_file_access: typing.Optional[BundlingFileAccess] = None,
        command: typing.Optional[typing.Sequence[builtins.str]] = None,
        entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
        environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        local: typing.Optional["ILocalBundling"] = None,
        network: typing.Optional[builtins.str] = None,
        output_type: typing.Optional[BundlingOutput] = None,
        platform: typing.Optional[builtins.str] = None,
        security_opt: typing.Optional[builtins.str] = None,
        user: typing.Optional[builtins.str] = None,
        volumes: typing.Optional[typing.Sequence[typing.Union[DockerVolume, typing.Dict[builtins.str, typing.Any]]]] = None,
        volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
        working_directory: typing.Optional[builtins.str] = None,
    ) -> builtins.bool:
        '''This method is called before attempting docker bundling to allow the bundler to be executed locally.

        If the local bundler exists, and bundling
        was performed locally, return ``true``. Otherwise, return ``false``.

        :param output_dir: the directory where the bundled asset should be output.
        :param image: The Docker image where the command will run.
        :param bundling_file_access: The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host. Default: - BundlingFileAccess.BIND_MOUNT
        :param command: The command to run in the Docker container. Example value: ``['npm', 'install']`` Default: - run the command defined in the image
        :param entrypoint: The entrypoint to run in the Docker container. Example value: ``['/bin/sh', '-c']`` Default: - run the entrypoint defined in the image
        :param environment: The environment variables to pass to the Docker container. Default: - no environment variables.
        :param local: Local bundling provider. The provider implements a method ``tryBundle()`` which should return ``true`` if local bundling was performed. If ``false`` is returned, docker bundling will be done. Default: - bundling will only be performed in a Docker container
        :param network: Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_. Default: - no networking options
        :param output_type: The type of output that this bundling operation is producing. Default: BundlingOutput.AUTO_DISCOVER
        :param platform: Platform to build for. *Requires Docker Buildx*. Specify this property to build images on a specific platform. Default: - no platform specified (the current machine architecture will be used)
        :param security_opt: `Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container. Default: - no security options
        :param user: The user to use when running the Docker container. user | user:group | uid | uid:gid | user:gid | uid:group Default: - uid:gid of the current user or 1000:1000 on Windows
        :param volumes: Additional Docker volumes to mount. Default: - no additional volumes are mounted
        :param volumes_from: Where to mount the specified volumes from. Default: - no containers are specified to mount volumes from
        :param working_directory: Working directory inside the Docker container. Default: /asset-input
        '''
        ...


class _ILocalBundlingProxy:
    '''Local bundling.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ILocalBundling"

    @jsii.member(jsii_name="tryBundle")
    def try_bundle(
        self,
        output_dir: builtins.str,
        *,
        image: DockerImage,
        bundling_file_access: typing.Optional[BundlingFileAccess] = None,
        command: typing.Optional[typing.Sequence[builtins.str]] = None,
        entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
        environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        local: typing.Optional[ILocalBundling] = None,
        network: typing.Optional[builtins.str] = None,
        output_type: typing.Optional[BundlingOutput] = None,
        platform: typing.Optional[builtins.str] = None,
        security_opt: typing.Optional[builtins.str] = None,
        user: typing.Optional[builtins.str] = None,
        volumes: typing.Optional[typing.Sequence[typing.Union[DockerVolume, typing.Dict[builtins.str, typing.Any]]]] = None,
        volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
        working_directory: typing.Optional[builtins.str] = None,
    ) -> builtins.bool:
        '''This method is called before attempting docker bundling to allow the bundler to be executed locally.

        If the local bundler exists, and bundling
        was performed locally, return ``true``. Otherwise, return ``false``.

        :param output_dir: the directory where the bundled asset should be output.
        :param image: The Docker image where the command will run.
        :param bundling_file_access: The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host. Default: - BundlingFileAccess.BIND_MOUNT
        :param command: The command to run in the Docker container. Example value: ``['npm', 'install']`` Default: - run the command defined in the image
        :param entrypoint: The entrypoint to run in the Docker container. Example value: ``['/bin/sh', '-c']`` Default: - run the entrypoint defined in the image
        :param environment: The environment variables to pass to the Docker container. Default: - no environment variables.
        :param local: Local bundling provider. The provider implements a method ``tryBundle()`` which should return ``true`` if local bundling was performed. If ``false`` is returned, docker bundling will be done. Default: - bundling will only be performed in a Docker container
        :param network: Docker `Networking options <https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network>`_. Default: - no networking options
        :param output_type: The type of output that this bundling operation is producing. Default: BundlingOutput.AUTO_DISCOVER
        :param platform: Platform to build for. *Requires Docker Buildx*. Specify this property to build images on a specific platform. Default: - no platform specified (the current machine architecture will be used)
        :param security_opt: `Security configuration <https://docs.docker.com/engine/reference/run/#security-configuration>`_ when running the docker container. Default: - no security options
        :param user: The user to use when running the Docker container. user | user:group | uid | uid:gid | user:gid | uid:group Default: - uid:gid of the current user or 1000:1000 on Windows
        :param volumes: Additional Docker volumes to mount. Default: - no additional volumes are mounted
        :param volumes_from: Where to mount the specified volumes from. Default: - no containers are specified to mount volumes from
        :param working_directory: Working directory inside the Docker container. Default: /asset-input
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05af01274588c9689335c2451e7875a31e6954cd7c99346f355cb976c1201c2a)
            check_type(argname="argument output_dir", value=output_dir, expected_type=type_hints["output_dir"])
        options = BundlingOptions(
            image=image,
            bundling_file_access=bundling_file_access,
            command=command,
            entrypoint=entrypoint,
            environment=environment,
            local=local,
            network=network,
            output_type=output_type,
            platform=platform,
            security_opt=security_opt,
            user=user,
            volumes=volumes,
            volumes_from=volumes_from,
            working_directory=working_directory,
        )

        return typing.cast(builtins.bool, jsii.invoke(self, "tryBundle", [output_dir, options]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILocalBundling).__jsii_proxy_class__ = lambda : _ILocalBundlingProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.INumberProducer")
class INumberProducer(typing_extensions.Protocol):
    '''Interface for lazy number producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Optional[jsii.Number]:
        '''Produce the number value.

        :param context: -
        '''
        ...


class _INumberProducerProxy:
    '''Interface for lazy number producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.INumberProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Optional[jsii.Number]:
        '''Produce the number value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0831a2456f0182fa20ecb7b158e0a1186592cd9b986aa74ba61a4a4d1bbc0611)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[jsii.Number], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INumberProducer).__jsii_proxy_class__ = lambda : _INumberProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IPostProcessor")
class IPostProcessor(typing_extensions.Protocol):
    '''A Token that can post-process the complete resolved value, after resolve() has recursed over it.'''

    @jsii.member(jsii_name="postProcess")
    def post_process(self, input: typing.Any, context: "IResolveContext") -> typing.Any:
        '''Process the completely resolved value, after full recursion/resolution has happened.

        :param input: -
        :param context: -
        '''
        ...


class _IPostProcessorProxy:
    '''A Token that can post-process the complete resolved value, after resolve() has recursed over it.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IPostProcessor"

    @jsii.member(jsii_name="postProcess")
    def post_process(self, input: typing.Any, context: "IResolveContext") -> typing.Any:
        '''Process the completely resolved value, after full recursion/resolution has happened.

        :param input: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15f5bff2f879cc4cc32197c0039cad4b57418edeed34a996ca4874cf726ea5d4)
            check_type(argname="argument input", value=input, expected_type=type_hints["input"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "postProcess", [input, context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPostProcessor).__jsii_proxy_class__ = lambda : _IPostProcessorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResolvable")
class IResolvable(typing_extensions.Protocol):
    '''Interface for values that can be resolvable later.

    Tokens are special objects that participate in synthesis.
    '''

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        ...

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: "IResolveContext") -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        ...

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        ...


class _IResolvableProxy:
    '''Interface for values that can be resolvable later.

    Tokens are special objects that participate in synthesis.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResolvable"

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: "IResolveContext") -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0955aa64060a165ec5f774d258aa1859e4c9a08ded723ede00b5c1bdc9df52b3)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [context]))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResolvable).__jsii_proxy_class__ = lambda : _IResolvableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResolveContext")
class IResolveContext(typing_extensions.Protocol):
    '''Current resolution context for tokens.'''

    @builtins.property
    @jsii.member(jsii_name="preparing")
    def preparing(self) -> builtins.bool:
        '''True when we are still preparing, false if we're rendering the final output.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> "IConstruct":
        '''The scope from which resolution has been initiated.'''
        ...

    @jsii.member(jsii_name="registerPostProcessor")
    def register_post_processor(self, post_processor: IPostProcessor) -> None:
        '''Use this postprocessor after the entire token structure has been resolved.

        :param post_processor: -
        '''
        ...

    @jsii.member(jsii_name="resolve")
    def resolve(self, x: typing.Any) -> typing.Any:
        '''Resolve an inner object.

        :param x: -
        '''
        ...


class _IResolveContextProxy:
    '''Current resolution context for tokens.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResolveContext"

    @builtins.property
    @jsii.member(jsii_name="preparing")
    def preparing(self) -> builtins.bool:
        '''True when we are still preparing, false if we're rendering the final output.'''
        return typing.cast(builtins.bool, jsii.get(self, "preparing"))

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> "IConstruct":
        '''The scope from which resolution has been initiated.'''
        return typing.cast("IConstruct", jsii.get(self, "scope"))

    @jsii.member(jsii_name="registerPostProcessor")
    def register_post_processor(self, post_processor: IPostProcessor) -> None:
        '''Use this postprocessor after the entire token structure has been resolved.

        :param post_processor: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015447ccb4a9906395b20fd902cabcd4597a590171c08295f278be5342f4e7e3)
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(None, jsii.invoke(self, "registerPostProcessor", [post_processor]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, x: typing.Any) -> typing.Any:
        '''Resolve an inner object.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20944a7cc00f2136f1d3365c36cfc599ebe106e8d4cdddf174ebbd715657933c)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [x]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResolveContext).__jsii_proxy_class__ = lambda : _IResolveContextProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResourceEnvironment")
class IResourceEnvironment(typing_extensions.Protocol):
    @builtins.property
    @jsii.member(jsii_name="account")
    def account(self) -> builtins.str:
        '''The Alibaba Cloud account ID that this resource belongs to.

        Since this can be a Token
        (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
        make sure to use Token.compareStrings()
        instead of just comparing the values for equality.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> builtins.str:
        '''The Alibaba Cloud region that this resource belongs to.

        Since this can be a Token
        (for example, when the region is ROS's ALIYUN::Region intrinsic),
        make sure to use Token.compareStrings()
        instead of just comparing the values for equality.
        '''
        ...


class _IResourceEnvironmentProxy:
    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResourceEnvironment"

    @builtins.property
    @jsii.member(jsii_name="account")
    def account(self) -> builtins.str:
        '''The Alibaba Cloud account ID that this resource belongs to.

        Since this can be a Token
        (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
        make sure to use Token.compareStrings()
        instead of just comparing the values for equality.
        '''
        return typing.cast(builtins.str, jsii.get(self, "account"))

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> builtins.str:
        '''The Alibaba Cloud region that this resource belongs to.

        Since this can be a Token
        (for example, when the region is ROS's ALIYUN::Region intrinsic),
        make sure to use Token.compareStrings()
        instead of just comparing the values for equality.
        '''
        return typing.cast(builtins.str, jsii.get(self, "region"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourceEnvironment).__jsii_proxy_class__ = lambda : _IResourceEnvironmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IRosConditionExpression")
class IRosConditionExpression(IResolvable, typing_extensions.Protocol):
    '''Represents a RosTemplate element that can be used within a Condition.

    You can use intrinsic functions, such as ``Fn.conditionIf``,
    ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
    stack resources. These conditions are evaluated based on input parameters
    that you declare when you create or update a stack. After you define all your
    conditions, you can associate them with resources or resource properties in
    the Resources and Outputs sections of a template.
    '''

    pass


class _IRosConditionExpressionProxy(
    jsii.proxy_for(IResolvable), # type: ignore[misc]
):
    '''Represents a RosTemplate element that can be used within a Condition.

    You can use intrinsic functions, such as ``Fn.conditionIf``,
    ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
    stack resources. These conditions are evaluated based on input parameters
    that you declare when you create or update a stack. After you define all your
    conditions, you can associate them with resources or resource properties in
    the Resources and Outputs sections of a template.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IRosConditionExpression"
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRosConditionExpression).__jsii_proxy_class__ = lambda : _IRosConditionExpressionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IRosResourceOptions")
class IRosResourceOptions(typing_extensions.Protocol):
    @builtins.property
    @jsii.member(jsii_name="condition")
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this resource.

        This means that only if the condition evaluates to 'true' when the stack
        is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
        there is no need to use it in CDK projects.
        '''
        ...

    @condition.setter
    def condition(self, value: typing.Optional["RosCondition"]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[typing.Union[jsii.Number, IResolvable]]:
        ...

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
    ) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="deletionPolicy")
    def deletion_policy(self) -> typing.Optional["RosDeletionPolicy"]:
        '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

        You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
        attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
        that lead to resources being removed.
        '''
        ...

    @deletion_policy.setter
    def deletion_policy(self, value: typing.Optional["RosDeletionPolicy"]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        ...

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS resource.

        This is not the same as the construct metadata which can be added
        using construct.addMetadata(), but would not appear in the ROS template automatically.
        '''
        ...

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        ...


class _IRosResourceOptionsProxy:
    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IRosResourceOptions"

    @builtins.property
    @jsii.member(jsii_name="condition")
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this resource.

        This means that only if the condition evaluates to 'true' when the stack
        is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
        there is no need to use it in CDK projects.
        '''
        return typing.cast(typing.Optional["RosCondition"], jsii.get(self, "condition"))

    @condition.setter
    def condition(self, value: typing.Optional["RosCondition"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b9af138a0065ab24db0137ba4df5cee7e42b723f07b919cba01deb86f6721d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "condition", value)

    @builtins.property
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[typing.Union[jsii.Number, IResolvable]]:
        return typing.cast(typing.Optional[typing.Union[jsii.Number, IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19ccbf023e632728666a7277d8c6574e3cf45a8648865fbe9b2af9d1ae076fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "count", value)

    @builtins.property
    @jsii.member(jsii_name="deletionPolicy")
    def deletion_policy(self) -> typing.Optional["RosDeletionPolicy"]:
        '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

        You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
        attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
        that lead to resources being removed.
        '''
        return typing.cast(typing.Optional["RosDeletionPolicy"], jsii.get(self, "deletionPolicy"))

    @deletion_policy.setter
    def deletion_policy(self, value: typing.Optional["RosDeletionPolicy"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1cddf5277a3c64108ce0c15fa5faa290e10d8d379815c3af84baaccfc3808ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "description"))

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35f4c58d13e139e5c6223bdbf53164654b2095b5fd91c1bf7e993bd3dc84140f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS resource.

        This is not the same as the construct metadata which can be added
        using construct.addMetadata(), but would not appear in the ROS template automatically.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "metadata"))

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71a66b9935f95fe5d4e4f70341aa002ed47fa3648ffbbe393e5120f0f1087c43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metadata", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRosResourceOptions).__jsii_proxy_class__ = lambda : _IRosResourceOptionsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IStackSynthesizer")
class IStackSynthesizer(typing_extensions.Protocol):
    '''Encodes information how a certain Stack should be deployed.'''

    @jsii.member(jsii_name="addFileAsset")
    def add_file_asset(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> FileAssetLocation:
        '''Register a File Asset.

        Returns the parameters that can be used to refer to the asset inside the template.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        ...

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        ...

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: "ISynthesisSession") -> None:
        '''Synthesize the associated stack to the session.

        :param session: -
        '''
        ...


class _IStackSynthesizerProxy:
    '''Encodes information how a certain Stack should be deployed.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IStackSynthesizer"

    @jsii.member(jsii_name="addFileAsset")
    def add_file_asset(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> FileAssetLocation:
        '''Register a File Asset.

        Returns the parameters that can be used to refer to the asset inside the template.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        asset = FileAssetSource(
            source_hash=source_hash,
            deploy_time=deploy_time,
            executable=executable,
            file_name=file_name,
            packaging=packaging,
        )

        return typing.cast(FileAssetLocation, jsii.invoke(self, "addFileAsset", [asset]))

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a06319e966e22b6794f594e79b9622c69452df8b350eb1db66803917ce61c9c)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(None, jsii.invoke(self, "bind", [stack]))

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: "ISynthesisSession") -> None:
        '''Synthesize the associated stack to the session.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3eb16404f2ded9dd386d08b168525b1c29512b6ffcd6983dd703a3572deeef5)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStackSynthesizer).__jsii_proxy_class__ = lambda : _IStackSynthesizerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IStringProducer")
class IStringProducer(typing_extensions.Protocol):
    '''Interface for lazy string producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: IResolveContext) -> typing.Optional[builtins.str]:
        '''Produce the string value.

        :param context: -
        '''
        ...


class _IStringProducerProxy:
    '''Interface for lazy string producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IStringProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: IResolveContext) -> typing.Optional[builtins.str]:
        '''Produce the string value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4459cd8f8716a48963ca392c9ef233a3a6f41bb3af29ad7cc2c41f450aa8713d)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[builtins.str], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStringProducer).__jsii_proxy_class__ = lambda : _IStringProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ISynthesisSession")
class ISynthesisSession(typing_extensions.Protocol):
    '''Represents a single session of synthesis.

    Passed into ``Construct.synthesize()`` methods.
    '''

    @builtins.property
    @jsii.member(jsii_name="assembly")
    def assembly(self) -> _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder:
        '''Cloud assembly builder.'''
        ...

    @assembly.setter
    def assembly(self, value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The output directory for this synthesis session.'''
        ...

    @outdir.setter
    def outdir(self, value: builtins.str) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="validateOnSynth")
    def validate_on_synth(self) -> typing.Optional[builtins.bool]:
        '''Whether the stack should be validated after synthesis to check for error metadata.

        :default: - false
        '''
        ...

    @validate_on_synth.setter
    def validate_on_synth(self, value: typing.Optional[builtins.bool]) -> None:
        ...


class _ISynthesisSessionProxy:
    '''Represents a single session of synthesis.

    Passed into ``Construct.synthesize()`` methods.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ISynthesisSession"

    @builtins.property
    @jsii.member(jsii_name="assembly")
    def assembly(self) -> _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder:
        '''Cloud assembly builder.'''
        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder, jsii.get(self, "assembly"))

    @assembly.setter
    def assembly(self, value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c1cff4576a8245902913886959c7001a767c437b52225234ea1b9baf6a9e05d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "assembly", value)

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The output directory for this synthesis session.'''
        return typing.cast(builtins.str, jsii.get(self, "outdir"))

    @outdir.setter
    def outdir(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2762b383cd1433befe9d900f9538105bc7ff724b6f3bd94e9babdde6b6b651f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "outdir", value)

    @builtins.property
    @jsii.member(jsii_name="validateOnSynth")
    def validate_on_synth(self) -> typing.Optional[builtins.bool]:
        '''Whether the stack should be validated after synthesis to check for error metadata.

        :default: - false
        '''
        return typing.cast(typing.Optional[builtins.bool], jsii.get(self, "validateOnSynth"))

    @validate_on_synth.setter
    def validate_on_synth(self, value: typing.Optional[builtins.bool]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48fbde897821b211fa2fbc9afa26b64784456915b4e9e6524cd8607d6d60fbe3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "validateOnSynth", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISynthesisSession).__jsii_proxy_class__ = lambda : _ISynthesisSessionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITaggable")
class ITaggable(typing_extensions.Protocol):
    '''Interface to implement tags.'''

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> "TagManager":
        '''TagManager to set, remove and format tags.'''
        ...


class _ITaggableProxy:
    '''Interface to implement tags.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITaggable"

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> "TagManager":
        '''TagManager to set, remove and format tags.'''
        return typing.cast("TagManager", jsii.get(self, "tags"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITaggable).__jsii_proxy_class__ = lambda : _ITaggableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITemplateOptions")
class ITemplateOptions(typing_extensions.Protocol):
    '''ROS template options for a stack.'''

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        '''Gets or sets the description of this stack.

        If provided, it will be included in the ROS template's "Description" attribute.
        '''
        ...

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS template.'''
        ...

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        ...


class _ITemplateOptionsProxy:
    '''ROS template options for a stack.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITemplateOptions"

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        '''Gets or sets the description of this stack.

        If provided, it will be included in the ROS template's "Description" attribute.
        '''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "description"))

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__014ac8e6afd23cc5d8dbaa362ea76b16a5188f58d5d520c3fb9b08768d065850)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS template.'''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "metadata"))

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcca51c7205afe0a4756cb9a5de79e6efe34349870e4aaee85d9de6f3b426dbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metadata", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITemplateOptions).__jsii_proxy_class__ = lambda : _ITemplateOptionsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITokenMapper")
class ITokenMapper(typing_extensions.Protocol):
    '''Interface to apply operation to tokens in a string.

    Interface so it can be exported via jsii.
    '''

    @jsii.member(jsii_name="mapToken")
    def map_token(self, t: IResolvable) -> typing.Any:
        '''Replace a single token.

        :param t: -
        '''
        ...


class _ITokenMapperProxy:
    '''Interface to apply operation to tokens in a string.

    Interface so it can be exported via jsii.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITokenMapper"

    @jsii.member(jsii_name="mapToken")
    def map_token(self, t: IResolvable) -> typing.Any:
        '''Replace a single token.

        :param t: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06428b1b28ed30f0c1384a6d5a13aa09e69ba4094155ef9bff2074261f64bc85)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
        return typing.cast(typing.Any, jsii.invoke(self, "mapToken", [t]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITokenMapper).__jsii_proxy_class__ = lambda : _ITokenMapperProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITokenResolver")
class ITokenResolver(typing_extensions.Protocol):
    '''How to resolve tokens.'''

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        l: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a tokenized list.

        :param l: -
        :param context: -
        '''
        ...

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        s: "TokenizedStringFragments",
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a string with at least one stringified token in it.

        (May use concatenation)

        :param s: -
        :param context: -
        '''
        ...

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''Resolve a single token.

        :param t: -
        :param context: -
        :param post_processor: -
        '''
        ...


class _ITokenResolverProxy:
    '''How to resolve tokens.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITokenResolver"

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        l: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a tokenized list.

        :param l: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e2496293c1d52f1d1a1d7cb90d199bc2d95c0efc70ec58bef81c5e92e78c6c2)
            check_type(argname="argument l", value=l, expected_type=type_hints["l"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveList", [l, context]))

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        s: "TokenizedStringFragments",
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a string with at least one stringified token in it.

        (May use concatenation)

        :param s: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec6d2795c1854413fd11b04f75ac05db5d3e9ebda3e0c44fd5c5519a148c471f)
            check_type(argname="argument s", value=s, expected_type=type_hints["s"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveString", [s, context]))

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''Resolve a single token.

        :param t: -
        :param context: -
        :param post_processor: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b83a71c854922c76207ee3305ff734b2f1aaa0a7a12636de23ff86f45b756041)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveToken", [t, context, post_processor]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITokenResolver).__jsii_proxy_class__ = lambda : _ITokenResolverProxy


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.IgnoreMode")
class IgnoreMode(enum.Enum):
    '''Determines the ignore behavior to use.'''

    GLOB = "GLOB"
    '''Ignores file paths based on simple glob patterns.

    This is the default for file assets.

    It is also the default for Docker image assets, unless the 'ros-cdk:dockerIgnoreSupport'
    context flag is set.
    '''
    GIT = "GIT"
    '''Ignores file paths based on the ```.gitignore specification`` <https://git-scm.com/docs/gitignore>`_.'''
    DOCKER = "DOCKER"
    '''Ignores file paths based on the ```.dockerignore specification`` <https://docs.docker.com/engine/reference/builder/#dockerignore-file>`_.

    This is the default for Docker image assets if the 'ros-cdk:dockerIgnoreSupport'
    context flag is set.
    '''


class IgnoreStrategy(
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.IgnoreStrategy",
):
    '''Represents file path ignoring behavior.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="docker")
    @builtins.classmethod
    def docker(
        cls,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> "DockerIgnoreStrategy":
        '''Ignores file paths based on the ```.dockerignore specification`` <https://docs.docker.com/engine/reference/builder/#dockerignore-file>`_.

        :param absolute_root_path: the absolute path to the root directory of the paths to be considered.
        :param patterns: -

        :return: ``DockerIgnorePattern`` associated with the given patterns.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0cbfec08f769ff844ed0a004359192e1315638257bc713fd35793f2840195e4)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        return typing.cast("DockerIgnoreStrategy", jsii.sinvoke(cls, "docker", [absolute_root_path, patterns]))

    @jsii.member(jsii_name="fromCopyOptions")
    @builtins.classmethod
    def from_copy_options(
        cls,
        options: typing.Union[CopyOptions, typing.Dict[builtins.str, typing.Any]],
        absolute_root_path: builtins.str,
    ) -> "IgnoreStrategy":
        '''Creates an IgnoreStrategy based on the ``ignoreMode`` and ``exclude`` in a ``CopyOptions``.

        :param options: the ``CopyOptions`` to create the ``IgnoreStrategy`` from.
        :param absolute_root_path: the absolute path to the root directory of the paths to be considered.

        :return: ``IgnoreStrategy`` based on the ``CopyOptions``
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9532419df4f8f3ff63a5701e7b99427ae1020ea37d8457a63a80b1f8a3e4037)
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
        return typing.cast("IgnoreStrategy", jsii.sinvoke(cls, "fromCopyOptions", [options, absolute_root_path]))

    @jsii.member(jsii_name="git")
    @builtins.classmethod
    def git(
        cls,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> "GitIgnoreStrategy":
        '''Ignores file paths based on the ```.gitignore specification`` <https://git-scm.com/docs/gitignore>`_.

        :param absolute_root_path: the absolute path to the root directory of the paths to be considered.
        :param patterns: -

        :return: ``GitIgnorePattern`` associated with the given patterns.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79381a2684c424418cda5c8d663b07392aaceef09b45b62c2c2b9a5e401fbefe)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        return typing.cast("GitIgnoreStrategy", jsii.sinvoke(cls, "git", [absolute_root_path, patterns]))

    @jsii.member(jsii_name="glob")
    @builtins.classmethod
    def glob(
        cls,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> "GlobIgnoreStrategy":
        '''Ignores file paths based on simple glob patterns.

        :param absolute_root_path: the absolute path to the root directory of the paths to be considered.
        :param patterns: -

        :return: ``GlobIgnorePattern`` associated with the given patterns.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45307f38df52b97abdcfd622efd04b15a4e4c84a80a48d0ad913e9b5422f78fb)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        return typing.cast("GlobIgnoreStrategy", jsii.sinvoke(cls, "glob", [absolute_root_path, patterns]))

    @jsii.member(jsii_name="add")
    @abc.abstractmethod
    def add(self, pattern: builtins.str) -> None:
        '''Adds another pattern.

        :param pattern: -

        :params: pattern the pattern to add
        '''
        ...

    @jsii.member(jsii_name="ignores")
    @abc.abstractmethod
    def ignores(self, absolute_file_path: builtins.str) -> builtins.bool:
        '''Determines whether a given file path should be ignored or not.

        :param absolute_file_path: absolute file path to be assessed against the pattern.

        :return: ``true`` if the file should be ignored
        '''
        ...


class _IgnoreStrategyProxy(IgnoreStrategy):
    @jsii.member(jsii_name="add")
    def add(self, pattern: builtins.str) -> None:
        '''Adds another pattern.

        :param pattern: -

        :params: pattern the pattern to add
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__064d971408922d47e467d420d57eac93a23db6f8969ebe0c27f9e02331df2ab4)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
        return typing.cast(None, jsii.invoke(self, "add", [pattern]))

    @jsii.member(jsii_name="ignores")
    def ignores(self, absolute_file_path: builtins.str) -> builtins.bool:
        '''Determines whether a given file path should be ignored or not.

        :param absolute_file_path: absolute file path to be assessed against the pattern.

        :return: ``true`` if the file should be ignored
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b77ee9f1a5e1f3d7153624874fad9460dcfc20ad6439856240c375e99aeba10)
            check_type(argname="argument absolute_file_path", value=absolute_file_path, expected_type=type_hints["absolute_file_path"])
        return typing.cast(builtins.bool, jsii.invoke(self, "ignores", [absolute_file_path]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, IgnoreStrategy).__jsii_proxy_class__ = lambda : _IgnoreStrategyProxy


@jsii.implements(IResolvable)
class Intrinsic(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Intrinsic"):
    '''(experimental) Token subclass that represents values intrinsic to the target document language.

    This class will disappear in a future release and should not be used.

    :stability: experimental
    '''

    def __init__(self, value: typing.Any) -> None:
        '''
        :param value: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f690835f92182062a506fffc4e9d3275914ee37a6eb328a1e03037ac62192123)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])

    @jsii.member(jsii_name="newError")
    def _new_error(self, message: builtins.str) -> typing.Any:
        '''(experimental) Creates a throwable Error object that contains the token creation stack trace.

        :param message: Error message.

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9d6cb405f1dc003d11ded0e2fcf4924af28d4bb81a501991a861ccc28b25294)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(typing.Any, jsii.invoke(self, "newError", [message]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''(experimental) Produce the Token's value at resolution time.

        :param _context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed11c272182745b8f071c64a59933a914b55021a02f39aebbbdaed7955fcf4a)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> typing.Any:
        '''(experimental) Turn this Token into JSON.

        Called automatically when JSON.stringify() is called on a Token.

        :stability: experimental
        '''
        return typing.cast(typing.Any, jsii.invoke(self, "toJSON", []))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''(experimental) Convert an instance of this Token to a string.

        This method will be called implicitly by language runtimes if the object
        is embedded into a string. We treat it the same as an explicit
        stringification.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''(experimental) The captured stack trace which represents the location in which this token was created.

        :stability: experimental
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))


class Lazy(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Lazy"):
    '''Lazily produce a value.

    Can be used to return a string, list or numeric value whose actual value
    will only be calculated later, during synthesis.
    '''

    @jsii.member(jsii_name="anyValue")
    @builtins.classmethod
    def any_value(
        cls,
        producer: IAnyProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty_array: typing.Optional[builtins.bool] = None,
    ) -> IResolvable:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty_array: If the produced value is an array and it is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__855c3b8f704d5568c58b5eaf5256d1f96e8973533df785d2287a1fa17f8e0625)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyAnyValueOptions(
            display_hint=display_hint, omit_empty_array=omit_empty_array
        )

        return typing.cast(IResolvable, jsii.sinvoke(cls, "anyValue", [producer, options]))

    @jsii.member(jsii_name="listValue")
    @builtins.classmethod
    def list_value(
        cls,
        producer: IListProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty: typing.Optional[builtins.bool] = None,
    ) -> typing.List[builtins.str]:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty: If the produced list is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d27bdcb87429f6c1ad1c6a63e4fa7f37ec6b156995dd935db8c0232ba62cfb1)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyListValueOptions(
            display_hint=display_hint, omit_empty=omit_empty
        )

        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "listValue", [producer, options]))

    @jsii.member(jsii_name="numberValue")
    @builtins.classmethod
    def number_value(cls, producer: INumberProducer) -> jsii.Number:
        '''
        :param producer: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb3d27bb92f07376c0671ce2a29b9e0322a5e620e9e5d9261fcc112c7dd83880)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "numberValue", [producer]))

    @jsii.member(jsii_name="stringValue")
    @builtins.classmethod
    def string_value(
        cls,
        producer: IStringProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> builtins.str:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6b154666a2f7bd28fa1944715b8f57b93cf5a42b94aa1cc51b4c287075e2e6f)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyStringValueOptions(display_hint=display_hint)

        return typing.cast(builtins.str, jsii.sinvoke(cls, "stringValue", [producer, options]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyAnyValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint", "omit_empty_array": "omitEmptyArray"},
)
class LazyAnyValueOptions:
    def __init__(
        self,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty_array: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for creating lazy untyped tokens.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty_array: If the produced value is an array and it is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__459da39148795d4a2ffdb32575cd274897146155c51dea7f0361cb43373e04b7)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
            check_type(argname="argument omit_empty_array", value=omit_empty_array, expected_type=type_hints["omit_empty_array"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint
        if omit_empty_array is not None:
            self._values["omit_empty_array"] = omit_empty_array

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def omit_empty_array(self) -> typing.Optional[builtins.bool]:
        '''If the produced value is an array and it is empty, return 'undefined' instead.

        :default: false
        '''
        result = self._values.get("omit_empty_array")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyAnyValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyListValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint", "omit_empty": "omitEmpty"},
)
class LazyListValueOptions:
    def __init__(
        self,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for creating a lazy list token.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty: If the produced list is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f43363319a77742c2083fd9d84db3926afdc535ad84dd79e943bb24b761be25d)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
            check_type(argname="argument omit_empty", value=omit_empty, expected_type=type_hints["omit_empty"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint
        if omit_empty is not None:
            self._values["omit_empty"] = omit_empty

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def omit_empty(self) -> typing.Optional[builtins.bool]:
        '''If the produced list is empty, return 'undefined' instead.

        :default: false
        '''
        result = self._values.get("omit_empty")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyListValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyStringValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint"},
)
class LazyStringValueOptions:
    def __init__(self, *, display_hint: typing.Optional[builtins.str] = None) -> None:
        '''Options for creating a lazy string token.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11154e9acb99e91fe8a38a92330e2004810b345c011269ed4ae3381d938718d9)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyStringValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.NestedStackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "template_body": "templateBody",
        "template_url": "templateUrl",
        "timeout": "timeout",
    },
)
class NestedStackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_body: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        '''
        :param parameters: -
        :param template_body: -
        :param template_url: -
        :param timeout: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25327f9b7ddf68f2c9dae74053743641437aa840308c92297b09ca5ce4b2daad)
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template_body", value=template_body, expected_type=type_hints["template_body"])
            check_type(argname="argument template_url", value=template_url, expected_type=type_hints["template_url"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_url is not None:
            self._values["template_url"] = template_url
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def parameters(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_body(self) -> typing.Optional[builtins.str]:
        result = self._values.get("template_body")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def template_url(self) -> typing.Optional[builtins.str]:
        result = self._values.get("template_url")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def timeout(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[jsii.Number], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NestedStackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RamRoles",
    jsii_struct_bases=[],
    name_mapping={"fc_role": "fcRole"},
)
class RamRoles:
    def __init__(self, *, fc_role: typing.Union[builtins.str, IResolvable]) -> None:
        '''
        :param fc_role: The RAM role ARN that grants FC function the required permissions.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b0369694a0d60cdc67d8a1a3906fa58355520f2d97b946ee80c9f015080462f)
            check_type(argname="argument fc_role", value=fc_role, expected_type=type_hints["fc_role"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "fc_role": fc_role,
        }

    @builtins.property
    def fc_role(self) -> typing.Union[builtins.str, IResolvable]:
        '''The RAM role ARN that grants FC function the required permissions.'''
        result = self._values.get("fc_role")
        assert result is not None, "Required property 'fc_role' is missing"
        return typing.cast(typing.Union[builtins.str, IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RamRoles(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Reference(
    Intrinsic,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.Reference",
):
    '''An intrinsic Token that represents a reference to a construct.

    References are recorded.
    '''

    def __init__(
        self,
        value: typing.Any,
        target: "IConstruct",
        display_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param value: -
        :param target: -
        :param display_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f8dc2790577ee818f6a8555fec401bd0e2aad0ca17cbcf1ad940dc9bc4fe6f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        jsii.create(self.__class__, self, [value, target, display_name])

    @jsii.member(jsii_name="isReference")
    @builtins.classmethod
    def is_reference(cls, x: typing.Any) -> builtins.bool:
        '''Check whether this is actually a Reference.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac9bc39f84fa4ed07ec85a081144f2a366bff3352728edce92eb3a3ff10c4f12)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isReference", [x]))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "displayName"))

    @builtins.property
    @jsii.member(jsii_name="target")
    def target(self) -> "IConstruct":
        return typing.cast("IConstruct", jsii.get(self, "target"))


class _ReferenceProxy(Reference):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, Reference).__jsii_proxy_class__ = lambda : _ReferenceProxy


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RemovalPolicy")
class RemovalPolicy(enum.Enum):
    DESTROY = "DESTROY"
    RETAIN = "RETAIN"


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RemovalPolicyOptions",
    jsii_struct_bases=[],
    name_mapping={
        "apply_to_update_replace_policy": "applyToUpdateReplacePolicy",
        "default_policy": "defaultPolicy",
    },
)
class RemovalPolicyOptions:
    def __init__(
        self,
        *,
        apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
        default_policy: typing.Optional[RemovalPolicy] = None,
    ) -> None:
        '''
        :param apply_to_update_replace_policy: -
        :param default_policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555f312cbc4130456a07898da4b77d3db0176039426274e8555cce2bfbd8dfc7)
            check_type(argname="argument apply_to_update_replace_policy", value=apply_to_update_replace_policy, expected_type=type_hints["apply_to_update_replace_policy"])
            check_type(argname="argument default_policy", value=default_policy, expected_type=type_hints["default_policy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if apply_to_update_replace_policy is not None:
            self._values["apply_to_update_replace_policy"] = apply_to_update_replace_policy
        if default_policy is not None:
            self._values["default_policy"] = default_policy

    @builtins.property
    def apply_to_update_replace_policy(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("apply_to_update_replace_policy")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def default_policy(self) -> typing.Optional[RemovalPolicy]:
        result = self._values.get("default_policy")
        return typing.cast(typing.Optional[RemovalPolicy], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RemovalPolicyOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ResolveOptions",
    jsii_struct_bases=[],
    name_mapping={"resolver": "resolver", "scope": "scope", "preparing": "preparing"},
)
class ResolveOptions:
    def __init__(
        self,
        *,
        resolver: ITokenResolver,
        scope: "IConstruct",
        preparing: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options to the resolve() operation.

        NOT the same as the ResolveContext; ResolveContext is exposed to Token
        implementors and resolution hooks, whereas this struct is just to bundle
        a number of things that would otherwise be arguments to resolve() in a
        readable way.

        :param resolver: The resolver to apply to any resolvable tokens found.
        :param scope: The scope from which resolution is performed.
        :param preparing: Whether the resolution is being executed during the prepare phase or not. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cf5324bcb826f8eda6917454783379af5c03bb9882d50455f1f28ea76eabbf3)
            check_type(argname="argument resolver", value=resolver, expected_type=type_hints["resolver"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument preparing", value=preparing, expected_type=type_hints["preparing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resolver": resolver,
            "scope": scope,
        }
        if preparing is not None:
            self._values["preparing"] = preparing

    @builtins.property
    def resolver(self) -> ITokenResolver:
        '''The resolver to apply to any resolvable tokens found.'''
        result = self._values.get("resolver")
        assert result is not None, "Required property 'resolver' is missing"
        return typing.cast(ITokenResolver, result)

    @builtins.property
    def scope(self) -> "IConstruct":
        '''The scope from which resolution is performed.'''
        result = self._values.get("scope")
        assert result is not None, "Required property 'scope' is missing"
        return typing.cast("IConstruct", result)

    @builtins.property
    def preparing(self) -> typing.Optional[builtins.bool]:
        '''Whether the resolution is being executed during the prepare phase or not.

        :default: false
        '''
        result = self._values.get("preparing")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResolveOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "environment_from_arn": "environmentFromArn",
        "physical_name": "physicalName",
        "region": "region",
    },
)
class ResourceProps:
    def __init__(
        self,
        *,
        account: typing.Optional[builtins.str] = None,
        environment_from_arn: typing.Optional[typing.Union[builtins.str, IResolvable]] = None,
        physical_name: typing.Optional[builtins.str] = None,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Construction properties for {@link Resource}.

        :param account: The Alibaba Cloud account ID this resource belongs to. Default: - the resource is in the same account as the stack it belongs to
        :param environment_from_arn: ARN to deduce region and account from. The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources. Cannot be supplied together with either ``account`` or ``region``. Default: - take environment from ``account``, ``region`` parameters, or use Stack environment.
        :param physical_name: The value passed in by users to the physical name prop of the resource. - ``undefined`` implies that a physical name will be allocated during deployment. - a concrete value implies a specific physical name - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated. Default: - The physical name will be allocated at deployment time
        :param region: The Alibaba Cloud region this resource belongs to. Default: - the resource is in the same region as the stack it belongs to
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb39483257934b924a474a55b25ee60c39f38148113cb72ba8962bb0da42ada)
            check_type(argname="argument account", value=account, expected_type=type_hints["account"])
            check_type(argname="argument environment_from_arn", value=environment_from_arn, expected_type=type_hints["environment_from_arn"])
            check_type(argname="argument physical_name", value=physical_name, expected_type=type_hints["physical_name"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if account is not None:
            self._values["account"] = account
        if environment_from_arn is not None:
            self._values["environment_from_arn"] = environment_from_arn
        if physical_name is not None:
            self._values["physical_name"] = physical_name
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def account(self) -> typing.Optional[builtins.str]:
        '''The Alibaba Cloud account ID this resource belongs to.

        :default: - the resource is in the same account as the stack it belongs to
        '''
        result = self._values.get("account")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def environment_from_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, IResolvable]]:
        '''ARN to deduce region and account from.

        The ARN is parsed and the account and region are taken from the ARN.
        This should be used for imported resources.

        Cannot be supplied together with either ``account`` or ``region``.

        :default: - take environment from ``account``, ``region`` parameters, or use Stack environment.
        '''
        result = self._values.get("environment_from_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, IResolvable]], result)

    @builtins.property
    def physical_name(self) -> typing.Optional[builtins.str]:
        '''The value passed in by users to the physical name prop of the resource.

        - ``undefined`` implies that a physical name will be allocated during deployment.
        - a concrete value implies a specific physical name
        - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated
          by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.

        :default: - The physical name will be allocated at deployment time
        '''
        result = self._values.get("physical_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The Alibaba Cloud region this resource belongs to.

        :default: - the resource is in the same region as the stack it belongs to
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosConditionProps",
    jsii_struct_bases=[],
    name_mapping={"expression": "expression"},
)
class RosConditionProps:
    def __init__(
        self,
        *,
        expression: typing.Optional[IRosConditionExpression] = None,
    ) -> None:
        '''
        :param expression: The expression that the condition will evaluate. Default: - None.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f534de3d8e5fcb3d98fa2b9d753eded2ae1398e9c0cfaa50692ce7724b85d774)
            check_type(argname="argument expression", value=expression, expected_type=type_hints["expression"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if expression is not None:
            self._values["expression"] = expression

    @builtins.property
    def expression(self) -> typing.Optional[IRosConditionExpression]:
        '''The expression that the condition will evaluate.

        :default: - None.
        '''
        result = self._values.get("expression")
        return typing.cast(typing.Optional[IRosConditionExpression], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RosDeletionPolicy")
class RosDeletionPolicy(enum.Enum):
    '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

    You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
    attribute, ROS deletes the resource by default.
    '''

    DELETE = "DELETE"
    '''ROS will deletes the resource and all its content if applicable during stack deletion.

    You can add this deletion policy to any resource type.
    '''
    RETAIN = "RETAIN"
    '''ROS keeps the resource without deleting the resource or its contents when its stack is deleted.

    You can add this deletion policy to any resource type.
    '''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosMappingProps",
    jsii_struct_bases=[],
    name_mapping={"mapping": "mapping"},
)
class RosMappingProps:
    def __init__(
        self,
        *,
        mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param mapping: Mapping of key to a set of corresponding set of named values. The key identifies a map of name-value pairs and must be unique within the mapping. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. Default: - No mapping.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcd93622adc1517313de11a1d1758998640b5ec2e8e86746a8317929c727ae61)
            check_type(argname="argument mapping", value=mapping, expected_type=type_hints["mapping"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if mapping is not None:
            self._values["mapping"] = mapping

    @builtins.property
    def mapping(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]]:
        '''Mapping of key to a set of corresponding set of named values.

        The key identifies a map of name-value pairs and must be unique within the mapping.

        For example, if you want to set values based on a region, you can create a mapping
        that uses the region name as a key and contains the values you want to specify for
        each specific region.

        :default: - No mapping.
        '''
        result = self._values.get("mapping")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMappingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosOutputProps",
    jsii_struct_bases=[],
    name_mapping={
        "value": "value",
        "condition": "condition",
        "description": "description",
        "export_name": "exportName",
        "label": "label",
        "no_echo": "noEcho",
    },
)
class RosOutputProps:
    def __init__(
        self,
        *,
        value: typing.Any,
        condition: typing.Optional["RosCondition"] = None,
        description: typing.Optional[builtins.str] = None,
        export_name: typing.Optional[builtins.str] = None,
        label: typing.Optional[builtins.str] = None,
        no_echo: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''
        :param value: The value of the property returned by Resource Orchestration Service. The value of an output can include literals, parameter references, pseudo-parameters, a mapping value, or intrinsic functions.
        :param condition: A condition to associate with this output value. If the condition evaluates to ``false``, this output value will not be included in the stack. Default: - No condition is associated with the output.
        :param description: A String type that describes the output value. The description can be a maximum of 4 K in length. Default: - No description.
        :param export_name: The name used to export the value of this output across stacks. To import the value from another stack, use ``Fn.importValue(exportName)``. Default: - the output is not exported
        :param label: An alias for the output. Default: - No label.
        :param no_echo: Whether to output parameter values. If the value is set to true, only an asterisk (*) is printed. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee818edecc8dc711db71a3f783f7d205fa34f9482dad186f363524140313425c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument export_name", value=export_name, expected_type=type_hints["export_name"])
            check_type(argname="argument label", value=label, expected_type=type_hints["label"])
            check_type(argname="argument no_echo", value=no_echo, expected_type=type_hints["no_echo"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "value": value,
        }
        if condition is not None:
            self._values["condition"] = condition
        if description is not None:
            self._values["description"] = description
        if export_name is not None:
            self._values["export_name"] = export_name
        if label is not None:
            self._values["label"] = label
        if no_echo is not None:
            self._values["no_echo"] = no_echo

    @builtins.property
    def value(self) -> typing.Any:
        '''The value of the property returned by Resource Orchestration Service.

        The value of an output can include literals, parameter references, pseudo-parameters,
        a mapping value, or intrinsic functions.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Any, result)

    @builtins.property
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this output value.

        If the condition evaluates
        to ``false``, this output value will not be included in the stack.

        :default: - No condition is associated with the output.
        '''
        result = self._values.get("condition")
        return typing.cast(typing.Optional["RosCondition"], result)

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        '''A String type that describes the output value.

        The description can be a maximum of 4 K in length.

        :default: - No description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def export_name(self) -> typing.Optional[builtins.str]:
        '''The name used to export the value of this output across stacks.

        To import the value from another stack, use ``Fn.importValue(exportName)``.

        :default: - the output is not exported
        '''
        result = self._values.get("export_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def label(self) -> typing.Optional[builtins.str]:
        '''An alias for the output.

        :default: - No label.
        '''
        result = self._values.get("label")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def no_echo(self) -> typing.Optional[builtins.bool]:
        '''Whether to output parameter values.

        If the value is set to true, only an asterisk (*) is printed.

        :default: false
        '''
        result = self._values.get("no_echo")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOutputProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "allowed_pattern": "allowedPattern",
        "allowed_values": "allowedValues",
        "association_property": "associationProperty",
        "association_property_metadata": "associationPropertyMetadata",
        "confirm": "confirm",
        "constraint_description": "constraintDescription",
        "default_value": "defaultValue",
        "description": "description",
        "label": "label",
        "max_length": "maxLength",
        "max_value": "maxValue",
        "min_length": "minLength",
        "min_value": "minValue",
        "no_echo": "noEcho",
        "placeholder": "placeholder",
        "required": "required",
        "text_area": "textArea",
        "type": "type",
    },
)
class RosParameterProps:
    def __init__(
        self,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        placeholder: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        required: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional["RosParameterType"] = None,
    ) -> None:
        '''
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param placeholder: -
        :param required: -
        :param text_area: -
        :param type: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c39b9c0a543f07fdf20a7f9378ee395653a40289a7101cf922b7de73c8a5047b)
            check_type(argname="argument allowed_pattern", value=allowed_pattern, expected_type=type_hints["allowed_pattern"])
            check_type(argname="argument allowed_values", value=allowed_values, expected_type=type_hints["allowed_values"])
            check_type(argname="argument association_property", value=association_property, expected_type=type_hints["association_property"])
            check_type(argname="argument association_property_metadata", value=association_property_metadata, expected_type=type_hints["association_property_metadata"])
            check_type(argname="argument confirm", value=confirm, expected_type=type_hints["confirm"])
            check_type(argname="argument constraint_description", value=constraint_description, expected_type=type_hints["constraint_description"])
            check_type(argname="argument default_value", value=default_value, expected_type=type_hints["default_value"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument label", value=label, expected_type=type_hints["label"])
            check_type(argname="argument max_length", value=max_length, expected_type=type_hints["max_length"])
            check_type(argname="argument max_value", value=max_value, expected_type=type_hints["max_value"])
            check_type(argname="argument min_length", value=min_length, expected_type=type_hints["min_length"])
            check_type(argname="argument min_value", value=min_value, expected_type=type_hints["min_value"])
            check_type(argname="argument no_echo", value=no_echo, expected_type=type_hints["no_echo"])
            check_type(argname="argument placeholder", value=placeholder, expected_type=type_hints["placeholder"])
            check_type(argname="argument required", value=required, expected_type=type_hints["required"])
            check_type(argname="argument text_area", value=text_area, expected_type=type_hints["text_area"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if allowed_pattern is not None:
            self._values["allowed_pattern"] = allowed_pattern
        if allowed_values is not None:
            self._values["allowed_values"] = allowed_values
        if association_property is not None:
            self._values["association_property"] = association_property
        if association_property_metadata is not None:
            self._values["association_property_metadata"] = association_property_metadata
        if confirm is not None:
            self._values["confirm"] = confirm
        if constraint_description is not None:
            self._values["constraint_description"] = constraint_description
        if default_value is not None:
            self._values["default_value"] = default_value
        if description is not None:
            self._values["description"] = description
        if label is not None:
            self._values["label"] = label
        if max_length is not None:
            self._values["max_length"] = max_length
        if max_value is not None:
            self._values["max_value"] = max_value
        if min_length is not None:
            self._values["min_length"] = min_length
        if min_value is not None:
            self._values["min_value"] = min_value
        if no_echo is not None:
            self._values["no_echo"] = no_echo
        if placeholder is not None:
            self._values["placeholder"] = placeholder
        if required is not None:
            self._values["required"] = required
        if text_area is not None:
            self._values["text_area"] = text_area
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def allowed_pattern(self) -> typing.Optional[builtins.str]:
        result = self._values.get("allowed_pattern")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def allowed_values(self) -> typing.Optional[typing.List[typing.Any]]:
        result = self._values.get("allowed_values")
        return typing.cast(typing.Optional[typing.List[typing.Any]], result)

    @builtins.property
    def association_property(self) -> typing.Optional[builtins.str]:
        result = self._values.get("association_property")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def association_property_metadata(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("association_property_metadata")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def confirm(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("confirm")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def constraint_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]]:
        result = self._values.get("constraint_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]], result)

    @builtins.property
    def default_value(self) -> typing.Any:
        result = self._values.get("default_value")
        return typing.cast(typing.Any, result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]]:
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]], result)

    @builtins.property
    def label(self) -> typing.Optional[builtins.str]:
        result = self._values.get("label")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def max_length(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def max_value(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("max_value")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def min_length(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("min_length")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def min_value(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("min_value")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def no_echo(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("no_echo")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def placeholder(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]]:
        result = self._values.get("placeholder")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]], result)

    @builtins.property
    def required(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("required")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def text_area(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("text_area")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def type(self) -> typing.Optional["RosParameterType"]:
        result = self._values.get("type")
        return typing.cast(typing.Optional["RosParameterType"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RosParameterType")
class RosParameterType(enum.Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"
    JSON = "JSON"
    BOOLEAN = "BOOLEAN"
    COMMA_DELIMITED_LIST = "COMMA_DELIMITED_LIST"
    OOS_PARAMETER = "OOS_PARAMETER"
    OOS_SECRET_PARAMETER = "OOS_SECRET_PARAMETER"


class RosPseudo(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.RosPseudo"):
    '''Accessor for pseudo parameters.'''

    @jsii.python.classproperty
    @jsii.member(jsii_name="accountId")
    def account_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "accountId"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="index")
    def index(cls) -> jsii.Number:
        return typing.cast(jsii.Number, jsii.sget(cls, "index"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="noValue")
    def no_value(cls) -> IResolvable:
        return typing.cast(IResolvable, jsii.sget(cls, "noValue"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="region")
    def region(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "region"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="stackId")
    def stack_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "stackId"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="stackName")
    def stack_name(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "stackName"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="tenantId")
    def tenant_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "tenantId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosResourceProps",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "properties": "properties"},
)
class RosResourceProps:
    def __init__(
        self,
        *,
        type: builtins.str,
        properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''
        :param type: ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).
        :param properties: Resource properties. Default: - No resource properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ddbb242164b50fd9890ea53698b2754f764c707d0eda9dcea236241f154b189)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument properties", value=properties, expected_type=type_hints["properties"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
        }
        if properties is not None:
            self._values["properties"] = properties

    @builtins.property
    def type(self) -> builtins.str:
        '''ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def properties(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Resource properties.

        :default: - No resource properties.
        '''
        result = self._values.get("properties")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosRuleAssertionProps",
    jsii_struct_bases=[],
    name_mapping={"assert_": "assert", "assert_description": "assertDescription"},
)
class RosRuleAssertionProps:
    def __init__(
        self,
        *,
        assert_: IResolvable,
        assert_description: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param assert_: Define assertions.
        :param assert_description: Define the assertion description. Default: - None
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73a53bf80f53a35c8707a89979b3ab7f0bf3e8af308c4026c2ce7d4a266f4167)
            check_type(argname="argument assert_", value=assert_, expected_type=type_hints["assert_"])
            check_type(argname="argument assert_description", value=assert_description, expected_type=type_hints["assert_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "assert_": assert_,
        }
        if assert_description is not None:
            self._values["assert_description"] = assert_description

    @builtins.property
    def assert_(self) -> IResolvable:
        '''Define assertions.'''
        result = self._values.get("assert_")
        assert result is not None, "Required property 'assert_' is missing"
        return typing.cast(IResolvable, result)

    @builtins.property
    def assert_description(self) -> typing.Optional[builtins.str]:
        '''Define the assertion description.

        :default: - None
        '''
        result = self._values.get("assert_description")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleAssertionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={"assertions": "assertions", "rule_condition": "ruleCondition"},
)
class RosRuleProps:
    def __init__(
        self,
        *,
        assertions: typing.Union[RosRuleAssertionProps, typing.Dict[builtins.str, typing.Any]],
        rule_condition: typing.Optional[IResolvable] = None,
    ) -> None:
        '''
        :param assertions: Used to describe assertions.
        :param rule_condition: Define the rule condition. If the rule condition is not defined, the assertion is always valid. Default: - None
        '''
        if isinstance(assertions, dict):
            assertions = RosRuleAssertionProps(**assertions)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22c962f2992b27bb9268b0d395ef1b5aee74ac29ac5f61e7e77b06518c50a4a9)
            check_type(argname="argument assertions", value=assertions, expected_type=type_hints["assertions"])
            check_type(argname="argument rule_condition", value=rule_condition, expected_type=type_hints["rule_condition"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "assertions": assertions,
        }
        if rule_condition is not None:
            self._values["rule_condition"] = rule_condition

    @builtins.property
    def assertions(self) -> RosRuleAssertionProps:
        '''Used to describe assertions.'''
        result = self._values.get("assertions")
        assert result is not None, "Required property 'assertions' is missing"
        return typing.cast(RosRuleAssertionProps, result)

    @builtins.property
    def rule_condition(self) -> typing.Optional[IResolvable]:
        '''Define the rule condition.

        If the rule condition is not defined, the assertion is always valid.

        :default: - None
        '''
        result = self._values.get("rule_condition")
        return typing.cast(typing.Optional[IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosTag",
    jsii_struct_bases=[],
    name_mapping={"key": "key", "value": "value"},
)
class RosTag:
    def __init__(
        self,
        *,
        key: builtins.str,
        value: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48ebd8113f5a95e7206754d99c94b514bab899631027b98c5b25c87874858e36)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key": key,
        }
        if value is not None:
            self._values["value"] = value

    @builtins.property
    def key(self) -> builtins.str:
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def value(self) -> typing.Optional[builtins.str]:
        result = self._values.get("value")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTag(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StackProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "enable_resource_property_constraint": "enableResourcePropertyConstraint",
        "env": "env",
        "metadata": "metadata",
        "stack_name": "stackName",
        "synthesizer": "synthesizer",
        "tags": "tags",
        "version": "version",
    },
)
class StackProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
        env: typing.Optional[typing.Union[Environment, typing.Dict[builtins.str, typing.Any]]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        stack_name: typing.Optional[builtins.str] = None,
        synthesizer: typing.Optional[IStackSynthesizer] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        version: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param description: A description of the stack. Default: - No description.
        :param enable_resource_property_constraint: -
        :param env: (experimental) The ALIYUN environment (account/region) where this stack will be deployed. Set the ``region``/``account`` fields of ``env`` to either a concrete value to select the indicated environment (recommended for production stacks), or to the values of environment variables ``CDK_DEFAULT_REGION``/``CDK_DEFAULT_ACCOUNT`` to let the target environment depend on the ALIYUN credentials/configuration that the CDK CLI is executed under (recommended for development stacks). If the ``Stack`` is instantiated inside a ``Stage``, any undefined ``region``/``account`` fields from ``env`` will default to the same field on the encompassing ``Stage``, if configured there. If either ``region`` or ``account`` are not set nor inherited from ``Stage``, the Stack will be considered "*environment-agnostic*"". Environment-agnostic stacks can be deployed to any environment but may not be able to take advantage of all features of the CDK. Default: - The environment of the containing ``Stage`` if available, otherwise create the stack will be environment-agnostic.
        :param metadata: -
        :param stack_name: Name to deploy the stack with. Default: - Derived from construct path.
        :param synthesizer: Synthesis method to use while deploying this stack. Default: - ``DefaultStackSynthesizer``
        :param tags: Stack tags that will be applied to all the taggable resources and the stack itself. Default: {}
        :param version: -
        '''
        if isinstance(env, dict):
            env = Environment(**env)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a951b9e38e4266f7795d9cf17d13c5cab9723d247372544c2ea0f1e1034a0ddd)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
            check_type(argname="argument env", value=env, expected_type=type_hints["env"])
            check_type(argname="argument metadata", value=metadata, expected_type=type_hints["metadata"])
            check_type(argname="argument stack_name", value=stack_name, expected_type=type_hints["stack_name"])
            check_type(argname="argument synthesizer", value=synthesizer, expected_type=type_hints["synthesizer"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if enable_resource_property_constraint is not None:
            self._values["enable_resource_property_constraint"] = enable_resource_property_constraint
        if env is not None:
            self._values["env"] = env
        if metadata is not None:
            self._values["metadata"] = metadata
        if stack_name is not None:
            self._values["stack_name"] = stack_name
        if synthesizer is not None:
            self._values["synthesizer"] = synthesizer
        if tags is not None:
            self._values["tags"] = tags
        if version is not None:
            self._values["version"] = version

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        '''A description of the stack.

        :default: - No description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def enable_resource_property_constraint(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("enable_resource_property_constraint")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def env(self) -> typing.Optional[Environment]:
        '''(experimental) The ALIYUN environment (account/region) where this stack will be deployed.

        Set the ``region``/``account`` fields of ``env`` to either a concrete value to
        select the indicated environment (recommended for production stacks), or to
        the values of environment variables
        ``CDK_DEFAULT_REGION``/``CDK_DEFAULT_ACCOUNT`` to let the target environment
        depend on the ALIYUN credentials/configuration that the CDK CLI is executed
        under (recommended for development stacks).

        If the ``Stack`` is instantiated inside a ``Stage``, any undefined
        ``region``/``account`` fields from ``env`` will default to the same field on the
        encompassing ``Stage``, if configured there.

        If either ``region`` or ``account`` are not set nor inherited from ``Stage``, the
        Stack will be considered "*environment-agnostic*"". Environment-agnostic
        stacks can be deployed to any environment but may not be able to take
        advantage of all features of the CDK.

        :default:

        - The environment of the containing ``Stage`` if available,
        otherwise create the stack will be environment-agnostic.

        :stability: experimental

        Example::

            // Use a concrete account and region to deploy this stack to:
            // `.account` and `.region` will simply return these values.
            new Stack(app, 'Stack1', {
              env: {
                account: '123456789012',
                region: 'cn-hangzhou'
              },
            });
            
            // Use the CLI's current credentials to determine the target environment:
            // `.account` and `.region` will reflect the account+region the CLI
            // is configured to use (based on the user CLI credentials)
            new Stack(app, 'Stack2', {
              env: {
                account: process.env.CDK_DEFAULT_ACCOUNT,
                region: process.env.CDK_DEFAULT_REGION
              },
            });
            
            // Define multiple stacks stage associated with an environment
            const myStage = new Stage(app, 'MyStage', {
              env: {
                account: '123456789012',
                region: 'cn-hangzhou'
              }
            });
            
            // both of these stacks will use the stage's account/region:
            // `.account` and `.region` will resolve to the concrete values as above
            new MyStack(myStage, 'Stack1');
            new YourStack(myStage, 'Stack2');
            
            // Define an environment-agnostic stack:
            // `.account` and `.region` will resolve to `{ "Ref": "ALIYUN::AccountId" }` and `{ "Ref": "ALIYUN::Region" }` respectively.
            // which will only resolve to actual values by ROS during deployment.
            new MyStack(app, 'Stack1');
        '''
        result = self._values.get("env")
        return typing.cast(typing.Optional[Environment], result)

    @builtins.property
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("metadata")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def stack_name(self) -> typing.Optional[builtins.str]:
        '''Name to deploy the stack with.

        :default: - Derived from construct path.
        '''
        result = self._values.get("stack_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def synthesizer(self) -> typing.Optional[IStackSynthesizer]:
        '''Synthesis method to use while deploying this stack.

        :default: - ``DefaultStackSynthesizer``
        '''
        result = self._values.get("synthesizer")
        return typing.cast(typing.Optional[IStackSynthesizer], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Stack tags that will be applied to all the taggable resources and the stack itself.

        :default: {}
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def version(self) -> typing.Optional[builtins.str]:
        result = self._values.get("version")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IStackSynthesizer)
class StackSynthesizer(
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.StackSynthesizer",
):
    '''Base class for implementing an IStackSynthesizer.

    This class needs to exist to provide public surface area for external
    implementations of stack synthesizers. The protected methods give
    access to functions that are otherwise @_internal to the framework
    and could not be accessed by external implementors.
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addFileAsset")
    @abc.abstractmethod
    def add_file_asset(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> FileAssetLocation:
        '''Register a File Asset.

        Returns the parameters that can be used to refer to the asset inside the template.

        The synthesizer must rely on some out-of-band mechanism to make sure the given files
        are actually placed in the returned location before the deployment happens. This can
        be by writing the instructions to the asset manifest (for use by the ``cdk-assets`` tool),
        by relying on the CLI to upload files (legacy behavior), or some other operator controlled
        mechanism.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        ...

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53538c4c360f4f43e8a0ef787fb86115c5c09c63090333ab968528789ca17fc1)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(None, jsii.invoke(self, "bind", [stack]))

    @jsii.member(jsii_name="emitArtifact")
    def _emit_artifact(
        self,
        session: ISynthesisSession,
        *,
        additional_dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    ) -> None:
        '''Write the ROS stack artifact to the session.

        Use default settings to add a ROSStackArtifact artifact to
        the given synthesis session. The Stack artifact will control the settings for the
        ROS deployment.

        :param session: -
        :param additional_dependencies: Identifiers of additional dependencies. Default: - No additional dependencies
        :param parameters: Values for ROS stack parameters that should be passed when the stack is deployed. Default: - No parameters
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c4dce3bf05e842f09ae0378489bfd07e7da50cdaf320a1cd8f583bef3a4b7bb)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        options = SynthesizeStackArtifactOptions(
            additional_dependencies=additional_dependencies, parameters=parameters
        )

        return typing.cast(None, jsii.invoke(self, "emitArtifact", [session, options]))

    @jsii.member(jsii_name="rosLocationFromFileAsset")
    def _ros_location_from_file_asset(
        self,
        *,
        bucket_name: builtins.str,
        object_key: builtins.str,
        region: typing.Optional[builtins.str] = None,
    ) -> FileAssetLocation:
        '''Turn a file asset location into a ROS representation of that location.

        If any of the fields contain placeholders, the result will be wrapped in a ``Fn.sub``.

        :param bucket_name: The name of the bucket.
        :param object_key: The destination object key.
        :param region: The region where this asset will need to be published. Default: - Current region
        '''
        location = _ros_cdk_assembly_schema_63fe2cdf.FileDestination(
            bucket_name=bucket_name, object_key=object_key, region=region
        )

        return typing.cast(FileAssetLocation, jsii.invoke(self, "rosLocationFromFileAsset", [location]))

    @jsii.member(jsii_name="synthesize")
    @abc.abstractmethod
    def synthesize(self, session: ISynthesisSession) -> None:
        '''Synthesize the associated stack to the session.

        :param session: -
        '''
        ...

    @jsii.member(jsii_name="synthesizeTemplate")
    def _synthesize_template(self, session: ISynthesisSession) -> FileAssetSource:
        '''Write the stack template to the given session.

        Return a descriptor that represents the stack template as a file asset
        source, for adding to an asset manifest (if desired). This can be used to
        have the asset manifest system (``cdk-assets``) upload the template to OSS
        using the appropriate role, so that afterwards only a ROS
        deployment is necessary.

        If the template is uploaded as an asset, the ``stackTemplateAssetObjectUrl``
        property should be set when calling ``emitArtifact.``

        If the template is *NOT* uploaded as an asset first and the template turns
        out to be >50KB, it will need to be uploaded to OSS anyway. At that point
        the credentials will be the same identity that is doing the ``UpdateStack``
        call, which may not have the right permissions to write to OSS.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c276458fc71f6b65ea31a967d16caca3ff071fe90e442ebf54ee4bc4773534)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(FileAssetSource, jsii.invoke(self, "synthesizeTemplate", [session]))

    @builtins.property
    @jsii.member(jsii_name="boundStack")
    def _bound_stack(self) -> "Stack":
        '''Retrieve the bound stack.

        Fails if the stack hasn't been bound yet.
        '''
        return typing.cast("Stack", jsii.get(self, "boundStack"))


class _StackSynthesizerProxy(StackSynthesizer):
    @jsii.member(jsii_name="addFileAsset")
    def add_file_asset(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> FileAssetLocation:
        '''Register a File Asset.

        Returns the parameters that can be used to refer to the asset inside the template.

        The synthesizer must rely on some out-of-band mechanism to make sure the given files
        are actually placed in the returned location before the deployment happens. This can
        be by writing the instructions to the asset manifest (for use by the ``cdk-assets`` tool),
        by relying on the CLI to upload files (legacy behavior), or some other operator controlled
        mechanism.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        asset = FileAssetSource(
            source_hash=source_hash,
            deploy_time=deploy_time,
            executable=executable,
            file_name=file_name,
            packaging=packaging,
        )

        return typing.cast(FileAssetLocation, jsii.invoke(self, "addFileAsset", [asset]))

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: ISynthesisSession) -> None:
        '''Synthesize the associated stack to the session.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd2303f9be95545d96268c6b16cb7032d7bd40f87a561ee1945a643e6d80a2e4)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, StackSynthesizer).__jsii_proxy_class__ = lambda : _StackSynthesizerProxy


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StageProps",
    jsii_struct_bases=[],
    name_mapping={"outdir": "outdir"},
)
class StageProps:
    def __init__(self, *, outdir: typing.Optional[builtins.str] = None) -> None:
        '''Initialization props for a stage.

        :param outdir: The output directory into which to emit synthesized artifacts. Can only be specified if this stage is the root stage the app. If this is specified and this stage is nested within another stage, an error will be thrown. Default - for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b4d117a06de3b8d93c347567af09a0e7660f43182f1b89b3d9b139dfc7315a8)
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if outdir is not None:
            self._values["outdir"] = outdir

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''The output directory into which to emit synthesized artifacts.

        Can only be specified if this stage is the root stage the app. If this is
        specified and this stage is nested within another stage, an error will be
        thrown.

        Default - for nested stages, outdir will be determined as a relative
        directory to the outdir of the app. For apps, if outdir is not specified, a
        temporary directory will be created.
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StageSynthesisOptions",
    jsii_struct_bases=[],
    name_mapping={"skip_validation": "skipValidation"},
)
class StageSynthesisOptions:
    def __init__(
        self,
        *,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for assemly synthesis.

        :param skip_validation: Should we skip construct validation. Default: - false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4840d4380846528233f8217e18a55e03a4a174196e2c0e4f2e2111b8cfd9d593)
            check_type(argname="argument skip_validation", value=skip_validation, expected_type=type_hints["skip_validation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if skip_validation is not None:
            self._values["skip_validation"] = skip_validation

    @builtins.property
    def skip_validation(self) -> typing.Optional[builtins.bool]:
        '''Should we skip construct validation.

        :default: - false
        '''
        result = self._values.get("skip_validation")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StageSynthesisOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IFragmentConcatenator)
class StringConcat(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.StringConcat",
):
    '''Converts all fragments to strings and concats those.

    Drops 'undefined's.
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''Join the fragment on the left and on the right.

        :param left: -
        :param right: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aeb329831e76fa2de1f9eedf7841ce46f3da80065f0977e8f9f2d47cf23f4827)
            check_type(argname="argument left", value=left, expected_type=type_hints["left"])
            check_type(argname="argument right", value=right, expected_type=type_hints["right"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [left, right]))


class StringSpecializer(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.StringSpecializer",
):
    def __init__(self, stack: "Stack", qualifier: builtins.str) -> None:
        '''
        :param stack: -
        :param qualifier: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30e6200ba03470f74ed4dfadcb8a28ccda02441b3d8e34ffc1098e5e24c1d6dc)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
        jsii.create(self.__class__, self, [stack, qualifier])

    @jsii.member(jsii_name="validateNoTokens")
    @builtins.classmethod
    def validate_no_tokens(cls, str: builtins.str, what: builtins.str) -> None:
        '''Validate that the given string does not contain tokens.

        :param str: -
        :param what: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11ae23e14c11d81f0515f008bc2e873d166460f51c59baa29386302aab70d6c1)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
            check_type(argname="argument what", value=what, expected_type=type_hints["what"])
        return typing.cast(None, jsii.sinvoke(cls, "validateNoTokens", [str, what]))

    @jsii.member(jsii_name="qualifierOnly")
    def qualifier_only(self, str: builtins.str) -> builtins.str:
        '''Specialize only the qualifier.

        :param str: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf18b42c1d1df3c089fe873952926524bf8a546e4f09d0d8b8d699689623549)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
        return typing.cast(builtins.str, jsii.invoke(self, "qualifierOnly", [str]))

    @jsii.member(jsii_name="specialize")
    def specialize(self, str: builtins.str) -> builtins.str:
        '''Function to replace placeholders in the input string as much as possible.

        We replace:

        - ${Qualifier}: always
        - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available

        :param str: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d07cab2d0124b81acbacba018a836e789145c32dea00373a7605a97099c8b4e8)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
        return typing.cast(builtins.str, jsii.invoke(self, "specialize", [str]))

    @jsii.member(jsii_name="specializeNoTokens")
    def specialize_no_tokens(
        self,
        str: builtins.str,
        what: builtins.str,
    ) -> builtins.str:
        '''Specialize the given string, make sure it doesn't contain tokens.

        :param str: -
        :param what: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efc50f24637b4f3e2a73ca1977889c3fa208f30c9a439f3524b7989fb10048a8)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
            check_type(argname="argument what", value=what, expected_type=type_hints["what"])
        return typing.cast(builtins.str, jsii.invoke(self, "specializeNoTokens", [str, what]))


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.SymlinkFollowMode")
class SymlinkFollowMode(enum.Enum):
    '''Determines how symlinks are followed.'''

    NEVER = "NEVER"
    '''Never follow symlinks.'''
    ALWAYS = "ALWAYS"
    '''Materialize all symlinks, whether they are internal or external to the source directory.'''
    EXTERNAL = "EXTERNAL"
    '''Only follows symlinks that are external to the source directory.'''
    BLOCK_EXTERNAL = "BLOCK_EXTERNAL"
    '''Forbids source from having any symlinks pointing outside of the source tree.

    This is the safest mode of operation as it ensures that copy operations
    won't materialize files from the user's file system. Internal symlinks are
    not followed.

    If the copy operation runs into an external symlink, it will fail.
    '''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.SynthesisOptions",
    jsii_struct_bases=[_ros_cdk_cxapi_45dace6b.AssemblyBuildOptions],
    name_mapping={
        "runtime_info": "runtimeInfo",
        "outdir": "outdir",
        "skip_validation": "skipValidation",
    },
)
class SynthesisOptions(_ros_cdk_cxapi_45dace6b.AssemblyBuildOptions):
    def __init__(
        self,
        *,
        runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
        outdir: typing.Optional[builtins.str] = None,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''(deprecated) Options for synthesis.

        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included
        :param outdir: (deprecated) The output directory into which to synthesize the cloud assembly. Default: - creates a temporary directory
        :param skip_validation: (deprecated) Whether synthesis should skip the validation phase. Default: false

        :deprecated: use ``app.synth()`` or ``stage.synth()`` instead

        :stability: deprecated
        '''
        if isinstance(runtime_info, dict):
            runtime_info = _ros_cdk_cxapi_45dace6b.RuntimeInfo(**runtime_info)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34253714854164c90ac2f1ce4bd38e20e18b53c45053e143999cad2d528be12)
            check_type(argname="argument runtime_info", value=runtime_info, expected_type=type_hints["runtime_info"])
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
            check_type(argname="argument skip_validation", value=skip_validation, expected_type=type_hints["skip_validation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if runtime_info is not None:
            self._values["runtime_info"] = runtime_info
        if outdir is not None:
            self._values["outdir"] = outdir
        if skip_validation is not None:
            self._values["skip_validation"] = skip_validation

    @builtins.property
    def runtime_info(self) -> typing.Optional[_ros_cdk_cxapi_45dace6b.RuntimeInfo]:
        '''Include the specified runtime information (module versions) in manifest.

        :default: - if this option is not specified, runtime info will not be included
        '''
        result = self._values.get("runtime_info")
        return typing.cast(typing.Optional[_ros_cdk_cxapi_45dace6b.RuntimeInfo], result)

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''(deprecated) The output directory into which to synthesize the cloud assembly.

        :default: - creates a temporary directory

        :stability: deprecated
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def skip_validation(self) -> typing.Optional[builtins.bool]:
        '''(deprecated) Whether synthesis should skip the validation phase.

        :default: false

        :stability: deprecated
        '''
        result = self._values.get("skip_validation")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynthesisOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions",
    jsii_struct_bases=[],
    name_mapping={
        "additional_dependencies": "additionalDependencies",
        "parameters": "parameters",
    },
)
class SynthesizeStackArtifactOptions:
    def __init__(
        self,
        *,
        additional_dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    ) -> None:
        '''Stack artifact options.

        :param additional_dependencies: Identifiers of additional dependencies. Default: - No additional dependencies
        :param parameters: Values for ROS stack parameters that should be passed when the stack is deployed. Default: - No parameters
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f67fb29dbcaca07822799a7a403a59ed6a8b0daa282bec190ff8fab85c99189)
            check_type(argname="argument additional_dependencies", value=additional_dependencies, expected_type=type_hints["additional_dependencies"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if additional_dependencies is not None:
            self._values["additional_dependencies"] = additional_dependencies
        if parameters is not None:
            self._values["parameters"] = parameters

    @builtins.property
    def additional_dependencies(self) -> typing.Optional[typing.List[builtins.str]]:
        '''Identifiers of additional dependencies.

        :default: - No additional dependencies
        '''
        result = self._values.get("additional_dependencies")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def parameters(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Values for ROS stack parameters that should be passed when the stack is deployed.

        :default: - No parameters
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynthesizeStackArtifactOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TagManager(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TagManager",
):
    '''TagManager facilitates a common implementation of tagging for Constructs.'''

    def __init__(
        self,
        tag_type: "TagType",
        resource_type_name: builtins.str,
        tag_structure: typing.Any = None,
        *,
        tag_property_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param tag_type: -
        :param resource_type_name: -
        :param tag_structure: -
        :param tag_property_name: The name of the property in ROS for these tags. Normally this is ``tags``, but Cognito UserPool uses UserPoolTags Default: "tags"
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b31f0916603b9ac0a19041d432d8b63a66c9d635884be9ce7cfe64043d13b996)
            check_type(argname="argument tag_type", value=tag_type, expected_type=type_hints["tag_type"])
            check_type(argname="argument resource_type_name", value=resource_type_name, expected_type=type_hints["resource_type_name"])
            check_type(argname="argument tag_structure", value=tag_structure, expected_type=type_hints["tag_structure"])
        options = TagManagerOptions(tag_property_name=tag_property_name)

        jsii.create(self.__class__, self, [tag_type, resource_type_name, tag_structure, options])

    @jsii.member(jsii_name="isTaggable")
    @builtins.classmethod
    def is_taggable(cls, construct: typing.Any) -> builtins.bool:
        '''Check whether the given construct is Taggable.

        :param construct: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e3db5dabbad4d55b94d26d442069e119d50daaa4b8d2f279a7dbb32281bf0cd)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isTaggable", [construct]))

    @jsii.member(jsii_name="applyTagAspectHere")
    def apply_tag_aspect_here(
        self,
        include: typing.Optional[typing.Sequence[builtins.str]] = None,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> builtins.bool:
        '''Determine if the aspect applies here.

        Looks at the include and exclude resourceTypeName arrays to determine if
        the aspect applies here

        :param include: -
        :param exclude: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e52e20f19c15005b1419702493d03ce70ff0090e04c7b0116e7842aaea82195)
            check_type(argname="argument include", value=include, expected_type=type_hints["include"])
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
        return typing.cast(builtins.bool, jsii.invoke(self, "applyTagAspectHere", [include, exclude]))

    @jsii.member(jsii_name="hasTags")
    def has_tags(self) -> builtins.bool:
        '''Returns true if there are any tags defined.'''
        return typing.cast(builtins.bool, jsii.invoke(self, "hasTags", []))

    @jsii.member(jsii_name="removeTag")
    def remove_tag(self, key: builtins.str, priority: jsii.Number) -> None:
        '''Removes the specified tag from the array if it exists.

        :param key: The tag to remove.
        :param priority: The priority of the remove operation.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__607bb507ff316ca9882e67bbdda771afd44a804d1822223bddac5091599672e3)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        return typing.cast(None, jsii.invoke(self, "removeTag", [key, priority]))

    @jsii.member(jsii_name="renderTags")
    def render_tags(self) -> typing.Any:
        '''Renders tags into the proper format based on TagType.'''
        return typing.cast(typing.Any, jsii.invoke(self, "renderTags", []))

    @jsii.member(jsii_name="setTag")
    def set_tag(
        self,
        key: builtins.str,
        value: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        apply_to_launched_instances: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Adds the specified tag to the array of tags.

        :param key: -
        :param value: -
        :param priority: -
        :param apply_to_launched_instances: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b5c4a3cfda8aa538d53e13c5614c2be4dcc0dd1693e8a3c09b4896ee2915fa8)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument apply_to_launched_instances", value=apply_to_launched_instances, expected_type=type_hints["apply_to_launched_instances"])
        return typing.cast(None, jsii.invoke(self, "setTag", [key, value, priority, apply_to_launched_instances]))

    @jsii.member(jsii_name="tagValues")
    def tag_values(self) -> typing.Mapping[builtins.str, builtins.str]:
        '''Render the tags in a readable format.'''
        return typing.cast(typing.Mapping[builtins.str, builtins.str], jsii.invoke(self, "tagValues", []))

    @builtins.property
    @jsii.member(jsii_name="tagPropertyName")
    def tag_property_name(self) -> builtins.str:
        '''The property name for tag values.

        Normally this is ``tags`` but some resources choose a different name. Cognito
        UserPool uses UserPoolTags
        '''
        return typing.cast(builtins.str, jsii.get(self, "tagPropertyName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.TagManagerOptions",
    jsii_struct_bases=[],
    name_mapping={"tag_property_name": "tagPropertyName"},
)
class TagManagerOptions:
    def __init__(
        self,
        *,
        tag_property_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Options to configure TagManager behavior.

        :param tag_property_name: The name of the property in ROS for these tags. Normally this is ``tags``, but Cognito UserPool uses UserPoolTags Default: "tags"
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__762aea27829aa2022727347af6041130cc95adf01466f33b366e43fc81c7d366)
            check_type(argname="argument tag_property_name", value=tag_property_name, expected_type=type_hints["tag_property_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if tag_property_name is not None:
            self._values["tag_property_name"] = tag_property_name

    @builtins.property
    def tag_property_name(self) -> typing.Optional[builtins.str]:
        '''The name of the property in ROS for these tags.

        Normally this is ``tags``, but Cognito UserPool uses UserPoolTags

        :default: "tags"
        '''
        result = self._values.get("tag_property_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TagManagerOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.TagType")
class TagType(enum.Enum):
    STANDARD = "STANDARD"
    AUTOSCALING_GROUP = "AUTOSCALING_GROUP"
    MAP = "MAP"
    KEY_VALUE = "KEY_VALUE"
    NOT_TAGGABLE = "NOT_TAGGABLE"


class Token(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Token"):
    '''Represents a special or lazily-evaluated value.

    Can be used to delay evaluation of a certain value in case, for example,
    that it requires some context or late-bound data. Can also be used to
    mark values that need special processing at document rendering time.

    Tokens can be embedded into strings while retaining their original
    semantics.
    '''

    @jsii.member(jsii_name="asAny")
    @builtins.classmethod
    def as_any(cls, value: typing.Any) -> IResolvable:
        '''Return a resolvable representation of the given value.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10cbda2ba292cace9348c3269b4a0e4ef2c137fd31c2cfe347e37b9a82a42113)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(IResolvable, jsii.sinvoke(cls, "asAny", [value]))

    @jsii.member(jsii_name="asList")
    @builtins.classmethod
    def as_list(
        cls,
        value: typing.Any,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> typing.List[builtins.str]:
        '''Return a reversible list representation of this token.

        :param value: -
        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f4e057c19741202d697745f96cdac2507420fb69665f906cfbf139e83e5c25f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        options = EncodingOptions(display_hint=display_hint)

        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "asList", [value, options]))

    @jsii.member(jsii_name="asNumber")
    @builtins.classmethod
    def as_number(cls, value: typing.Any) -> jsii.Number:
        '''Return a reversible number representation of this token.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e810b924d685cb48f32839a0b7f6c794e8e7479f053d6175afb6b297c374c257)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "asNumber", [value]))

    @jsii.member(jsii_name="asString")
    @builtins.classmethod
    def as_string(
        cls,
        value: typing.Any,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> builtins.str:
        '''Return a reversible string representation of this token.

        If the Token is initialized with a literal, the stringified value of the
        literal is returned. Otherwise, a special quoted string representation
        of the Token is returned that can be embedded into other strings.

        Strings with quoted Tokens in them can be restored back into
        complex values with the Tokens restored by calling ``resolve()``
        on the string.

        :param value: -
        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e46304e3c03d9f33a2ee730e211b7adc4b55bc70bb89dc7321d0d2f309c2f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        options = EncodingOptions(display_hint=display_hint)

        return typing.cast(builtins.str, jsii.sinvoke(cls, "asString", [value, options]))

    @jsii.member(jsii_name="compareStrings")
    @builtins.classmethod
    def compare_strings(
        cls,
        possible_token1: builtins.str,
        possible_token2: builtins.str,
    ) -> "TokenComparison":
        '''Compare two strings that might contain Tokens with each other.

        :param possible_token1: -
        :param possible_token2: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__888059c8b2976acbd73616767b36f9158988e41fc049613d32584b3b358e78ef)
            check_type(argname="argument possible_token1", value=possible_token1, expected_type=type_hints["possible_token1"])
            check_type(argname="argument possible_token2", value=possible_token2, expected_type=type_hints["possible_token2"])
        return typing.cast("TokenComparison", jsii.sinvoke(cls, "compareStrings", [possible_token1, possible_token2]))

    @jsii.member(jsii_name="isUnresolved")
    @builtins.classmethod
    def is_unresolved(cls, obj: typing.Any) -> builtins.bool:
        '''Returns true if obj represents an unresolved value.

        One of these must be true:

        - ``obj`` is an IResolvable
        - ``obj`` is a string containing at least one encoded ``IResolvable``
        - ``obj`` is either an encoded number or list

        This does NOT recurse into lists or objects to see if they
        containing resolvables.

        :param obj: The object to test.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44124ba50108ab8e08c87dd89f6eb94b1a0664a5a3b1da6f8700b15789bf11e3)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isUnresolved", [obj]))


class TokenComparison(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TokenComparison",
):
    '''An enum-like class that represents the result of comparing two Tokens.

    The return type of ``Token.compareStrings``.
    '''

    @jsii.python.classproperty
    @jsii.member(jsii_name="BOTH_UNRESOLVED")
    def BOTH_UNRESOLVED(cls) -> "TokenComparison":
        '''This means both components are Tokens.'''
        return typing.cast("TokenComparison", jsii.sget(cls, "BOTH_UNRESOLVED"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="DIFFERENT")
    def DIFFERENT(cls) -> "TokenComparison":
        '''This means we're certain the two components are NOT Tokens, and different.'''
        return typing.cast("TokenComparison", jsii.sget(cls, "DIFFERENT"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ONE_UNRESOLVED")
    def ONE_UNRESOLVED(cls) -> "TokenComparison":
        '''This means exactly one of the components is a Token.'''
        return typing.cast("TokenComparison", jsii.sget(cls, "ONE_UNRESOLVED"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="SAME")
    def SAME(cls) -> "TokenComparison":
        '''This means we're certain the two components are NOT Tokens, and identical.'''
        return typing.cast("TokenComparison", jsii.sget(cls, "SAME"))


class Tokenization(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Tokenization",
):
    '''Less oft-needed functions to manipulate Tokens.'''

    @jsii.member(jsii_name="isResolvable")
    @builtins.classmethod
    def is_resolvable(cls, obj: typing.Any) -> builtins.bool:
        '''Return whether the given object is an IResolvable object.

        This is different from Token.isUnresolved() which will also check for
        encoded Tokens, whereas this method will only do a type check on the given
        object.

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40a96ccdbe485dab06de95cb233d33fad660624b380a8a8fb2344c6aaa56d74a)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isResolvable", [obj]))

    @jsii.member(jsii_name="resolve")
    @builtins.classmethod
    def resolve(
        cls,
        obj: typing.Any,
        *,
        resolver: ITokenResolver,
        scope: "IConstruct",
        preparing: typing.Optional[builtins.bool] = None,
    ) -> typing.Any:
        '''Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.

        Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.

        :param obj: The object to resolve.
        :param resolver: The resolver to apply to any resolvable tokens found.
        :param scope: The scope from which resolution is performed.
        :param preparing: Whether the resolution is being executed during the prepare phase or not. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c89018313fbf500beba9c940ccfdded3a6dd1cb684bcf03e9daef7e54d3978fe)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        options = ResolveOptions(resolver=resolver, scope=scope, preparing=preparing)

        return typing.cast(typing.Any, jsii.sinvoke(cls, "resolve", [obj, options]))

    @jsii.member(jsii_name="reverseList")
    @builtins.classmethod
    def reverse_list(
        cls,
        l: typing.Sequence[builtins.str],
    ) -> typing.Optional[IResolvable]:
        '''Un-encode a Tokenized value from a list.

        :param l: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e55de9d18756386134ebce512c21523d92c378766278fc50534a8cd1668af16)
            check_type(argname="argument l", value=l, expected_type=type_hints["l"])
        return typing.cast(typing.Optional[IResolvable], jsii.sinvoke(cls, "reverseList", [l]))

    @jsii.member(jsii_name="reverseNumber")
    @builtins.classmethod
    def reverse_number(cls, n: jsii.Number) -> typing.Optional[IResolvable]:
        '''Un-encode a Tokenized value from a number.

        :param n: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5e35a2fe0dd0bc9b2fdc457c232db0df1e729aec4917cfa407e15a0421c7439)
            check_type(argname="argument n", value=n, expected_type=type_hints["n"])
        return typing.cast(typing.Optional[IResolvable], jsii.sinvoke(cls, "reverseNumber", [n]))

    @jsii.member(jsii_name="reverseString")
    @builtins.classmethod
    def reverse_string(cls, s: builtins.str) -> "TokenizedStringFragments":
        '''Un-encode a string potentially containing encoded tokens.

        :param s: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4498b1ae96d2081b3636f64315f9a32e7d913a0ebb0c9043445603ef9c73ecfa)
            check_type(argname="argument s", value=s, expected_type=type_hints["s"])
        return typing.cast("TokenizedStringFragments", jsii.sinvoke(cls, "reverseString", [s]))

    @jsii.member(jsii_name="stringifyNumber")
    @builtins.classmethod
    def stringify_number(cls, x: jsii.Number) -> builtins.str:
        '''Stringify a number directly or lazily if it's a Token.

        If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4baaf0fdb93d747169ccfac8fe3c052c1e366aaa3cf94c4c3ed6cf21994123fb)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "stringifyNumber", [x]))


class TokenizedStringFragments(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TokenizedStringFragments",
):
    '''Fragments of a concatenated string containing stringified Tokens.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addIntrinsic")
    def add_intrinsic(self, value: typing.Any) -> None:
        '''
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__299944495831f0351a5c3fbe9fda834ddf89ee24168fc7a0f7401221decb1d5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addIntrinsic", [value]))

    @jsii.member(jsii_name="addLiteral")
    def add_literal(self, lit: typing.Any) -> None:
        '''
        :param lit: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2afff4a4b2f29e3e273f323f6b9d7e749e21718257d27356f4e9425c85d64467)
            check_type(argname="argument lit", value=lit, expected_type=type_hints["lit"])
        return typing.cast(None, jsii.invoke(self, "addLiteral", [lit]))

    @jsii.member(jsii_name="addToken")
    def add_token(self, token: IResolvable) -> None:
        '''
        :param token: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e46e28eb8bebe2734ab7401ad99908b2f4d641e7cffad9589a1c9df06b57557)
            check_type(argname="argument token", value=token, expected_type=type_hints["token"])
        return typing.cast(None, jsii.invoke(self, "addToken", [token]))

    @jsii.member(jsii_name="join")
    def join(self, concat: IFragmentConcatenator) -> typing.Any:
        '''Combine the string fragments using the given joiner.

        If there are any

        :param concat: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c80dc9e0477ad2aef93147913606ac3e6d84dacc0d042dcdc512372c14420f07)
            check_type(argname="argument concat", value=concat, expected_type=type_hints["concat"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [concat]))

    @jsii.member(jsii_name="mapTokens")
    def map_tokens(self, mapper: ITokenMapper) -> "TokenizedStringFragments":
        '''Apply a transformation function to all tokens in the string.

        :param mapper: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67ffc6b31d0552ac1f075e597446ec4e3590af7972656e2a81c0453e5d48f60f)
            check_type(argname="argument mapper", value=mapper, expected_type=type_hints["mapper"])
        return typing.cast("TokenizedStringFragments", jsii.invoke(self, "mapTokens", [mapper]))

    @builtins.property
    @jsii.member(jsii_name="firstValue")
    def first_value(self) -> typing.Any:
        return typing.cast(typing.Any, jsii.get(self, "firstValue"))

    @builtins.property
    @jsii.member(jsii_name="length")
    def length(self) -> jsii.Number:
        return typing.cast(jsii.Number, jsii.get(self, "length"))

    @builtins.property
    @jsii.member(jsii_name="tokens")
    def tokens(self) -> typing.List[IResolvable]:
        '''Return all Tokens from this string.'''
        return typing.cast(typing.List[IResolvable], jsii.get(self, "tokens"))

    @builtins.property
    @jsii.member(jsii_name="firstToken")
    def first_token(self) -> typing.Optional[IResolvable]:
        return typing.cast(typing.Optional[IResolvable], jsii.get(self, "firstToken"))


class TreeInspector(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TreeInspector",
):
    '''Inspector that maintains an attribute bag.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addAttribute")
    def add_attribute(self, key: builtins.str, value: typing.Any) -> None:
        '''Adds attribute to bag.

        Keys should be added by convention to prevent conflicts

        :param key: - key for metadata.
        :param value: - value of metadata.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8160540b1b0781396fbb49de8909f485bc6847f12b06c284899426a5ba73d702)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addAttribute", [key, value]))

    @builtins.property
    @jsii.member(jsii_name="attributes")
    def attributes(self) -> typing.Mapping[builtins.str, typing.Any]:
        '''Represents the bag of attributes as key-value pairs.'''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "attributes"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ValidationError",
    jsii_struct_bases=[],
    name_mapping={"message": "message", "source": "source"},
)
class ValidationError:
    def __init__(self, *, message: builtins.str, source: "Construct") -> None:
        '''An error returned during the validation phase.

        :param message: The error message.
        :param source: The construct which emitted the error.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24c461a233468bdd35c3de4534cc3efeef61b40de176800f40e33fe5d9b63935)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "message": message,
            "source": source,
        }

    @builtins.property
    def message(self) -> builtins.str:
        '''The error message.'''
        result = self._values.get("message")
        assert result is not None, "Required property 'message' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def source(self) -> "Construct":
        '''The construct which emitted the error.'''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast("Construct", result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ValidationError(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ValidationResult(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ValidationResult",
):
    '''Representation of validation results.

    Models a tree of validation errors so that we have as much information as possible
    about the failure that occurred.
    '''

    def __init__(
        self,
        error_message: typing.Optional[builtins.str] = None,
        results: typing.Optional["ValidationResults"] = None,
    ) -> None:
        '''
        :param error_message: -
        :param results: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8464e23dc0647f104591d2538171583569e436394676dc7eacc14605f4bc6c6f)
            check_type(argname="argument error_message", value=error_message, expected_type=type_hints["error_message"])
            check_type(argname="argument results", value=results, expected_type=type_hints["results"])
        jsii.create(self.__class__, self, [error_message, results])

    @jsii.member(jsii_name="assertSuccess")
    def assert_success(self) -> None:
        '''Turn a failed validation into an exception.'''
        return typing.cast(None, jsii.invoke(self, "assertSuccess", []))

    @jsii.member(jsii_name="errorTree")
    def error_tree(self) -> builtins.str:
        '''Return a string rendering of the tree of validation failures.'''
        return typing.cast(builtins.str, jsii.invoke(self, "errorTree", []))

    @jsii.member(jsii_name="prefix")
    def prefix(self, message: builtins.str) -> "ValidationResult":
        '''Wrap this result with an error message, if it concerns an error.

        :param message: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b5bac0e79db41ff39720d1056b6d3ad3381b18f0245a6992c93703c07bc82f)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast("ValidationResult", jsii.invoke(self, "prefix", [message]))

    @builtins.property
    @jsii.member(jsii_name="errorMessage")
    def error_message(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "errorMessage"))

    @builtins.property
    @jsii.member(jsii_name="isSuccess")
    def is_success(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "isSuccess"))

    @builtins.property
    @jsii.member(jsii_name="results")
    def results(self) -> "ValidationResults":
        return typing.cast("ValidationResults", jsii.get(self, "results"))


class ValidationResults(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ValidationResults",
):
    '''A collection of validation results.'''

    def __init__(
        self,
        results: typing.Optional[typing.Sequence[ValidationResult]] = None,
    ) -> None:
        '''
        :param results: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d22e62cd44b29ae7387d4d18bcbc2e8767111e1b9f70ad6d9bbaaa972ec3b410)
            check_type(argname="argument results", value=results, expected_type=type_hints["results"])
        jsii.create(self.__class__, self, [results])

    @jsii.member(jsii_name="collect")
    def collect(self, result: ValidationResult) -> None:
        '''
        :param result: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee64811eef3876aca433a599fde8c5d35b893f421e7c1492cdbaf75d4a580c38)
            check_type(argname="argument result", value=result, expected_type=type_hints["result"])
        return typing.cast(None, jsii.invoke(self, "collect", [result]))

    @jsii.member(jsii_name="errorTreeList")
    def error_tree_list(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "errorTreeList", []))

    @jsii.member(jsii_name="wrap")
    def wrap(self, message: builtins.str) -> ValidationResult:
        '''Wrap up all validation results into a single tree node.

        If there are failures in the collection, add a message, otherwise
        return a success.

        :param message: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__097ed477d8f3d33cc0e8be9230f76e3de9bcc8e9f3f4aa640fb62bd5ea9e213c)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(ValidationResult, jsii.invoke(self, "wrap", [message]))

    @builtins.property
    @jsii.member(jsii_name="isSuccess")
    def is_success(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "isSuccess"))

    @builtins.property
    @jsii.member(jsii_name="results")
    def results(self) -> typing.List[ValidationResult]:
        return typing.cast(typing.List[ValidationResult], jsii.get(self, "results"))

    @results.setter
    def results(self, value: typing.List[ValidationResult]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4403f3c33afef1e6ba1ccbadc87ac1ddd05aae6b7a400b3cbd85a043d7d85462)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "results", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AssetStagingProps",
    jsii_struct_bases=[FingerprintOptions, AssetOptions],
    name_mapping={
        "exclude": "exclude",
        "follow": "follow",
        "ignore_mode": "ignoreMode",
        "extra_hash": "extraHash",
        "asset_hash": "assetHash",
        "asset_hash_type": "assetHashType",
        "bundling": "bundling",
        "source_path": "sourcePath",
    },
)
class AssetStagingProps(FingerprintOptions, AssetOptions):
    def __init__(
        self,
        *,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow: typing.Optional[SymlinkFollowMode] = None,
        ignore_mode: typing.Optional[IgnoreMode] = None,
        extra_hash: typing.Optional[builtins.str] = None,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[AssetHashType] = None,
        bundling: typing.Optional[typing.Union[BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        source_path: builtins.str,
    ) -> None:
        '''Initialization properties for ``AssetStaging``.

        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        :param extra_hash: Extra information to encode into the fingerprint (e.g. build instructions and other inputs). Default: - hash is only based on source content
        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        :param source_path: The source file or directory to copy from.
        '''
        if isinstance(bundling, dict):
            bundling = BundlingOptions(**bundling)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3b734e5101b4cf1d56dd8c6c1699346d190f16ab5ad93672a01ee833b58c06b)
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument follow", value=follow, expected_type=type_hints["follow"])
            check_type(argname="argument ignore_mode", value=ignore_mode, expected_type=type_hints["ignore_mode"])
            check_type(argname="argument extra_hash", value=extra_hash, expected_type=type_hints["extra_hash"])
            check_type(argname="argument asset_hash", value=asset_hash, expected_type=type_hints["asset_hash"])
            check_type(argname="argument asset_hash_type", value=asset_hash_type, expected_type=type_hints["asset_hash_type"])
            check_type(argname="argument bundling", value=bundling, expected_type=type_hints["bundling"])
            check_type(argname="argument source_path", value=source_path, expected_type=type_hints["source_path"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_path": source_path,
        }
        if exclude is not None:
            self._values["exclude"] = exclude
        if follow is not None:
            self._values["follow"] = follow
        if ignore_mode is not None:
            self._values["ignore_mode"] = ignore_mode
        if extra_hash is not None:
            self._values["extra_hash"] = extra_hash
        if asset_hash is not None:
            self._values["asset_hash"] = asset_hash
        if asset_hash_type is not None:
            self._values["asset_hash_type"] = asset_hash_type
        if bundling is not None:
            self._values["bundling"] = bundling

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
    def follow(self) -> typing.Optional[SymlinkFollowMode]:
        '''A strategy for how to handle symlinks.

        :default: SymlinkFollowMode.NEVER
        '''
        result = self._values.get("follow")
        return typing.cast(typing.Optional[SymlinkFollowMode], result)

    @builtins.property
    def ignore_mode(self) -> typing.Optional[IgnoreMode]:
        '''The ignore behavior to use for ``exclude`` patterns.

        :default: IgnoreMode.GLOB
        '''
        result = self._values.get("ignore_mode")
        return typing.cast(typing.Optional[IgnoreMode], result)

    @builtins.property
    def extra_hash(self) -> typing.Optional[builtins.str]:
        '''Extra information to encode into the fingerprint (e.g. build instructions and other inputs).

        :default: - hash is only based on source content
        '''
        result = self._values.get("extra_hash")
        return typing.cast(typing.Optional[builtins.str], result)

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
    def asset_hash_type(self) -> typing.Optional[AssetHashType]:
        '''Specifies the type of hash to calculate for this asset.

        If ``assetHash`` is configured, this option must be ``undefined`` or
        ``AssetHashType.CUSTOM``.

        :default:

        - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is
        explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        '''
        result = self._values.get("asset_hash_type")
        return typing.cast(typing.Optional[AssetHashType], result)

    @builtins.property
    def bundling(self) -> typing.Optional[BundlingOptions]:
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
        return typing.cast(typing.Optional[BundlingOptions], result)

    @builtins.property
    def source_path(self) -> builtins.str:
        '''The source file or directory to copy from.'''
        result = self._values.get("source_path")
        assert result is not None, "Required property 'source_path' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssetStagingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDependable)
class ConcreteDependable(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ConcreteDependable",
):
    '''(experimental) A set of constructs to be used as a dependable.

    This class can be used when a set of constructs which are disjoint in the
    construct tree needs to be combined to be used as a single dependable.

    :stability: experimental
    '''

    def __init__(self) -> None:
        '''
        :stability: experimental
        '''
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="add")
    def add(self, construct: "IConstruct") -> None:
        '''(experimental) Add a construct to the dependency roots.

        :param construct: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2aff3187c70abf274ed13cd4a3f2e4998d0f0992886e51edb0da1d043b8c4479)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(None, jsii.invoke(self, "add", [construct]))


@jsii.implements(ITokenResolver)
class DefaultTokenResolver(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DefaultTokenResolver",
):
    '''(experimental) Default resolver implementation.

    :stability: experimental
    '''

    def __init__(self, concat: IFragmentConcatenator) -> None:
        '''
        :param concat: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9727b4179c0e167b591e6d6381af6777aa5c0bc173a9be06c520752e6276a79b)
            check_type(argname="argument concat", value=concat, expected_type=type_hints["concat"])
        jsii.create(self.__class__, self, [concat])

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        xs: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''(experimental) Resolve a tokenized list.

        :param xs: -
        :param context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__216b9096fbe63ca7f074fc29e40563204d6f77fcf26ca8d257635a47aaf5654c)
            check_type(argname="argument xs", value=xs, expected_type=type_hints["xs"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveList", [xs, context]))

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        fragments: TokenizedStringFragments,
        context: IResolveContext,
    ) -> typing.Any:
        '''(experimental) Resolve string fragments to Tokens.

        :param fragments: -
        :param context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94afe6ae9a614e95657ec50260cbe8a8f37f3334a6f8e36774cc6d50076adce9)
            check_type(argname="argument fragments", value=fragments, expected_type=type_hints["fragments"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveString", [fragments, context]))

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''(experimental) Default Token resolution.

        Resolve the Token, recurse into whatever it returns,
        then finally post-process it.

        :param t: -
        :param context: -
        :param post_processor: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c53a6ef11bc0db98771275f3ebe02ae5f19946dcc1e5c5d6d3b3d064bc41fc0c)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveToken", [t, context, post_processor]))


class DockerIgnoreStrategy(
    IgnoreStrategy,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DockerIgnoreStrategy",
):
    '''Ignores file paths based on the ```.dockerignore specification`` <https://docs.docker.com/engine/reference/builder/#dockerignore-file>`_.'''

    def __init__(
        self,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> None:
        '''
        :param absolute_root_path: -
        :param patterns: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__563d2ddab158d930a8fd714cd01e274693d3b6e9ec8efbc88b42f8ddd13123fb)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        jsii.create(self.__class__, self, [absolute_root_path, patterns])

    @jsii.member(jsii_name="add")
    def add(self, pattern: builtins.str) -> None:
        '''Adds another pattern.

        :param pattern: -

        :params: pattern the pattern to add
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83a4df182b69515d615011c559ad7f01fab59e0e50f252afc930ab76fb75bf2f)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
        return typing.cast(None, jsii.invoke(self, "add", [pattern]))

    @jsii.member(jsii_name="ignores")
    def ignores(self, absolute_file_path: builtins.str) -> builtins.bool:
        '''Determines whether a given file path should be ignored or not.

        :param absolute_file_path: absolute file path to be assessed against the pattern.

        :return: ``true`` if the file should be ignored
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__652b9e186f73f1b34a52aa76a7927a5200bef77dd81e208da8b98b0a25816241)
            check_type(argname="argument absolute_file_path", value=absolute_file_path, expected_type=type_hints["absolute_file_path"])
        return typing.cast(builtins.bool, jsii.invoke(self, "ignores", [absolute_file_path]))


class FnAdd(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAdd",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Add`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__686e2b42bbe4af2a65edd2cbf32a76d1c722ba8453b459409936c8b9aa9fbf03)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


@jsii.implements(IRosConditionExpression)
class FnAnd(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAnd",
):
    '''Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.

    ``Fn::And`` acts as an AND operator. The minimum number of
    conditions that you can include is 2, and the maximum is 10.
    '''

    def __init__(
        self,
        *condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45110e0d6534b98ed8e6e9281dc23a01599642f85573bf97ad8d584b97f59491)
            check_type(argname="argument condition", value=condition, expected_type=typing.Tuple[type_hints["condition"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        jsii.create(self.__class__, self, [*condition])


class FnAny(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAny",
):
    def __init__(
        self,
        values: typing.Union[typing.Sequence[typing.Any], IResolvable],
    ) -> None:
        '''Creates an ``Any`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__883aa4d4cc3e047618f9814f4e95fee7f309500873abeb4b274820e8771279be)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


class FnAvg(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAvg",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Avg`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9524542b26c45613494832a6e6412d4cdfe45869ceeabd7ee930da6b0ef7ef6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnBase64Decode(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnBase64Decode",
):
    def __init__(self, data: typing.Any) -> None:
        '''
        :param data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52065ec56e8eae2266f840354d908795d211fda0f7050a5d39c062982a080ba9)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        jsii.create(self.__class__, self, [data])


class FnBase64Encode(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnBase64Encode",
):
    '''The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.'''

    def __init__(self, data: typing.Any) -> None:
        '''Creates an ``Fn::Base64`` function.

        :param data: The string value you want to convert to Base64.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40e0d55844e1804e912770b8e7c076cfb38b59071e09baebb42b3e5e0e337fe0)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        jsii.create(self.__class__, self, [data])


class FnCalculate(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnCalculate",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Calculate`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26465fde8e7163abd6f7cb2de91952795d430f22b34a8d6cf28a0ef4761de891)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnCidr(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnCidr",
):
    def __init__(
        self,
        ip_block: typing.Union[builtins.str, IResolvable],
        count: typing.Union[jsii.Number, IResolvable],
        cidr_bits: typing.Union[jsii.Number, IResolvable],
    ) -> None:
        '''Creates an ``Cidr`` function.

        :param ip_block: -
        :param count: -
        :param cidr_bits: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51b1476409289959699e03eae02d70bf17c5f7f56ee3f4e249d6cdc2a86871c3)
            check_type(argname="argument ip_block", value=ip_block, expected_type=type_hints["ip_block"])
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
            check_type(argname="argument cidr_bits", value=cidr_bits, expected_type=type_hints["cidr_bits"])
        jsii.create(self.__class__, self, [ip_block, count, cidr_bits])


class FnContains(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnContains",
):
    def __init__(
        self,
        values: typing.Union[typing.Sequence[typing.Any], IResolvable],
        value: typing.Any,
    ) -> None:
        '''Creates an ``Contains`` function.

        :param values: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a6629121257e9fad1d3507bff924e811c0a92c47d180332927c970200533d84)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [values, value])


class FnEachMemberIn(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnEachMemberIn",
):
    def __init__(
        self,
        values1: typing.Union[typing.Sequence[typing.Any], IResolvable],
        values2: typing.Union[typing.Sequence[typing.Any], IResolvable],
    ) -> None:
        '''Creates an ``EachMemberIn`` function.

        :param values1: -
        :param values2: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bfba7d096a2517174d0e5480f0c50ff6ecbbc64b6fd3fc687e3cf98b5e231e6)
            check_type(argname="argument values1", value=values1, expected_type=type_hints["values1"])
            check_type(argname="argument values2", value=values2, expected_type=type_hints["values2"])
        jsii.create(self.__class__, self, [values1, values2])


@jsii.implements(IRosConditionExpression)
class FnEquals(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnEquals",
):
    '''Compares if two values are equal.

    Returns true if the two values are equal or false
    if they aren't.
    '''

    def __init__(self, lhs: typing.Any, rhs: typing.Any) -> None:
        '''Creates an ``Fn::Equals`` condition function.

        :param lhs: A value of any type that you want to compare.
        :param rhs: A value of any type that you want to compare.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3cc295f516f290459b1196f5b3f00e46e3c192dc4ac112e357e96a209e33fad)
            check_type(argname="argument lhs", value=lhs, expected_type=type_hints["lhs"])
            check_type(argname="argument rhs", value=rhs, expected_type=type_hints["rhs"])
        jsii.create(self.__class__, self, [lhs, rhs])


class FnFindInMap(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnFindInMap",
):
    '''The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.'''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::FindInMap`` function.

        param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
        param topLevelKey The top-level key name. Its value is a list of key-value pairs.
        param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd98760b6a01e88e5ed5377b56f290262fd96f6703c0328839b0e0668e6ddafa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnFormatTime(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnFormatTime",
):
    def __init__(
        self,
        format: typing.Union[builtins.str, IResolvable],
        time_zone: typing.Union[builtins.str, IResolvable],
    ) -> None:
        '''Creates an ``FormatTime`` function.

        :param format: -
        :param time_zone: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0729bf00ab98003cbd1d5099b304c9e45b01720bc1c066219d3f2a180dd54a94)
            check_type(argname="argument format", value=format, expected_type=type_hints["format"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
        jsii.create(self.__class__, self, [format, time_zone])


class FnGetAZs(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetAZs",
):
    '''The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.

    Because customers have access to different Availability Zones, the intrinsic
    function ``Fn::GetAZs`` enables template authors to write templates that adapt to the calling
    user's access. That way you don't have to hard-code a full list of Availability Zones for a
    specified region.
    '''

    def __init__(self, region: typing.Any) -> None:
        '''Creates an ``Fn::GetAZs`` function.

        :param region: The name of the region for which you want to get the Availability Zones.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99a58fd57d7de4274f57bce0fac8696676b644b6bd94046816eaa33980856884)
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        jsii.create(self.__class__, self, [region])


class FnGetAtt(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetAtt",
):
    '''The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.'''

    def __init__(
        self,
        logical_name_of_resource: builtins.str,
        attribute_name: builtins.str,
    ) -> None:
        '''Creates a ``Fn::GetAtt`` function.

        :param logical_name_of_resource: The logical name (also called logical ID) of the resource that contains the attribute that you want.
        :param attribute_name: The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bf228358201491aaacfb32677b98c44e0d2791cbef92d2c13a4a1b612a88544)
            check_type(argname="argument logical_name_of_resource", value=logical_name_of_resource, expected_type=type_hints["logical_name_of_resource"])
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        jsii.create(self.__class__, self, [logical_name_of_resource, attribute_name])


class FnGetJsonValue(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetJsonValue",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``GetJsonValue`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a2e3c1b3ac88b16338cbf206af8919482beb8d247ee3ff3215f49de03ddf0de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnGetStackOutput(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetStackOutput",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``GetStackOutput`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16e5baaf8cdfb71cdcdc61ee86e19fbe34de66252cc13ec6e10d05b56b2cae67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


@jsii.implements(IRosConditionExpression)
class FnIf(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnIf"):
    '''Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.'''

    def __init__(
        self,
        condition: typing.Union[builtins.str, IRosConditionExpression],
        value_if_true: typing.Any,
        value_if_false: typing.Any,
    ) -> None:
        '''Creates an ``Fn::If`` condition function.

        :param condition: A reference to a condition in the Conditions section. Use the condition's name to reference it.
        :param value_if_true: A value to be returned if the specified condition evaluates to true.
        :param value_if_false: A value to be returned if the specified condition evaluates to false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd45b41054d6fd402e50eb7829f1b272ebdac9695a6aa57470cb2b3361cd658f)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            check_type(argname="argument value_if_true", value=value_if_true, expected_type=type_hints["value_if_true"])
            check_type(argname="argument value_if_false", value=value_if_false, expected_type=type_hints["value_if_false"])
        jsii.create(self.__class__, self, [condition, value_if_true, value_if_false])


class FnIndent(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnIndent",
):
    def __init__(
        self,
        str: typing.Union[builtins.str, IResolvable],
        level: typing.Union[jsii.Number, IResolvable],
        indent: typing.Optional[typing.Union[jsii.Number, IResolvable]] = None,
    ) -> None:
        '''Creates an ``Indent`` function.

        :param str: -
        :param level: -
        :param indent: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3c5d15dbf3d5b349c263a8a5e5a6e6933998ab9d511072ae4f1592d61e1b6c8)
            check_type(argname="argument str", value=str, expected_type=type_hints["str"])
            check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            check_type(argname="argument indent", value=indent, expected_type=type_hints["indent"])
        jsii.create(self.__class__, self, [str, level, indent])


class FnIndex(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnIndex",
):
    def __init__(
        self,
        item_to_find_index: typing.Any,
        item_list: typing.Union[typing.Sequence[typing.Any], IResolvable],
    ) -> None:
        '''Creates an ``Index`` function.

        :param item_to_find_index: -
        :param item_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__382a7203c1e61fa1ab2adbea732faa557e594a324763f590daf1ee4ab83523a2)
            check_type(argname="argument item_to_find_index", value=item_to_find_index, expected_type=type_hints["item_to_find_index"])
            check_type(argname="argument item_list", value=item_list, expected_type=type_hints["item_list"])
        jsii.create(self.__class__, self, [item_to_find_index, item_list])


@jsii.implements(IResolvable)
class FnJoin(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnJoin"):
    '''The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.

    If a delimiter is the empty string, the set of values are concatenated
    with no delimiter.
    '''

    def __init__(
        self,
        delimiter: builtins.str,
        list_of_values: typing.Sequence[typing.Any],
    ) -> None:
        '''Creates an ``Fn::Join`` function.

        :param delimiter: The value you want to occur between fragments. The delimiter will occur between fragments only. It will not terminate the final value.
        :param list_of_values: The list of values you want combined.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0122df383b5bc5fa6367cdb94a99ac0174bb8f1f325bd5ed5b2f6ecc4dca2a6)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument list_of_values", value=list_of_values, expected_type=type_hints["list_of_values"])
        jsii.create(self.__class__, self, [delimiter, list_of_values])

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: IResolveContext) -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61ef76dd29f6e730b8a873263bec53e01d984484dab8e4c18002a13641acee47)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [context]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "toJSON", []))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))


class FnJq(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnJq"):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Jq`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb62c800fcae67b10a7b5c30ccb3c039f73b92a810339966810785336b14d0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnLength(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnLength",
):
    def __init__(self, obj: typing.Any) -> None:
        '''Creates an ``Length`` function.

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f440020913a0ca63254bd6a5010ae365004ea516ae89f71d9a1f235706ddb959)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        jsii.create(self.__class__, self, [obj])


@jsii.implements(IResolvable)
class FnListMerge(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnListMerge",
):
    '''Returns true if a specified string matches all values in a list.'''

    def __init__(self, list_of_values: typing.Sequence[typing.Any]) -> None:
        '''Creates an ``ListMerge`` function.

        :param list_of_values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8c35bdce19ff8d2ea687c9a63e379a6babcc6ff8119fd475f25f1b5ea1c25ee)
            check_type(argname="argument list_of_values", value=list_of_values, expected_type=type_hints["list_of_values"])
        jsii.create(self.__class__, self, [list_of_values])

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: IResolveContext) -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ceda63847d74b36185490f53ff9b8aaada86c97e8019f200dcc7086445d3b88c)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [context]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "toJSON", []))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))


class FnMarketplaceImage(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMarketplaceImage",
):
    def __init__(
        self,
        image_product_code: typing.Union[builtins.str, IResolvable],
    ) -> None:
        '''Creates an ``MarketplaceImage`` function.

        :param image_product_code: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__655a03d671e47da73d38406a7a5d7b6464f23cfa9b451d74ec572c2da3d51588)
            check_type(argname="argument image_product_code", value=image_product_code, expected_type=type_hints["image_product_code"])
        jsii.create(self.__class__, self, [image_product_code])


class FnMatchPattern(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMatchPattern",
):
    def __init__(
        self,
        pattern: typing.Union[builtins.str, IResolvable],
        value: typing.Union[builtins.str, IResolvable],
    ) -> None:
        '''Creates an ``MatchPattern`` function.

        :param pattern: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f82111a21b13c92ac46a4c5a36ba405020497b8c3f80985a0f4c77788b7bd058)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [pattern, value])


class FnMax(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMax",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Max`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c01b3caf582f9af877e56cc694bb360a2085322725b78786274d824cdaf2072)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


class FnMergeMapToList(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMergeMapToList",
):
    def __init__(self, map_list: typing.Any) -> None:
        '''Creates an ``FnMergeMapToList`` function.

        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a615ab5ca96cf38319d0e6b4a376abfa40a4feb616ea507c962ee6cb7b1690bd)
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        jsii.create(self.__class__, self, [map_list])


class FnMin(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMin",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Min`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9b3bd114c9b3dc0c6ac49a5be7ec7f0bcbbb1ff5fa2912854055f81c5b00296)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


@jsii.implements(IRosConditionExpression)
class FnNot(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnNot",
):
    '''Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.

    ``Fn::Not`` acts as a NOT operator.
    '''

    def __init__(
        self,
        condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''Creates an ``Fn::Not`` condition function.

        :param condition: A condition such as ``Fn::Equals`` that evaluates to true or false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8f0c940a166a4c70ea31088c6453e4302d5d801015d2550db27f2ec81e930b)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        jsii.create(self.__class__, self, [condition])


@jsii.implements(IRosConditionExpression)
class FnOr(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnOr"):
    '''Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.

    ``Fn::Or`` acts as an OR operator. The minimum number
    of conditions that you can include is 2, and the maximum is 10.
    '''

    def __init__(
        self,
        *condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''Creates an ``Fn::Or`` condition function.

        :param condition: A condition that evaluates to true or false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adf2e03c690c3cb28b74e88982a4889d3b0d5b54d92b5a3556624ce9a9f7fd8a)
            check_type(argname="argument condition", value=condition, expected_type=typing.Tuple[type_hints["condition"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        jsii.create(self.__class__, self, [*condition])


class FnRef(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnRef",
):
    '''The intrinsic function ``Ref`` returns the value of the specified parameter or resource.

    When you specify a parameter's logical name, it returns the value of the parameter.
    When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
    '''

    def __init__(self, logical_name: builtins.str) -> None:
        '''Creates an ``Ref`` function.

        :param logical_name: The logical name of a parameter/resource for which you want to retrieve its value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61889f70542841a7dcc6f9a86f78d58f369a603f32fea0e24af9a0038e420cf1)
            check_type(argname="argument logical_name", value=logical_name, expected_type=type_hints["logical_name"])
        jsii.create(self.__class__, self, [logical_name])


class FnReplace(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnReplace",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Replace`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0250eb79836dc506c39f785b743b8af41f55a581763ad1190d251682df8b0555)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSelect(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSelect",
):
    '''The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.'''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::Select`` function.

        param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
        param array The list of objects to select from. This list must not be null, nor can it have null entries.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29fbee6c85e18606ce841248ed899786d11cbeef5717939d92fbf8662a5a02e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSelectMapList(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSelectMapList",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``FnMergeMapToList`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7943bda42cbb6b91580503ce70079765bd1027495853a52b7c78d1715d76e8ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSplit(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSplit",
):
    '''To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.

    Specify the location of splits
    with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
    to pick a specific element.
    '''

    def __init__(self, value: typing.Any) -> None:
        '''Create an ``Fn::Split`` function.

        param delimiter A string value that determines where the source string is divided.
        param source The string value that you want to split.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2102430162bd15106fa9023902fbaf95aa0321bdc3212c478770febe2a0dc945)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnStr(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnStr",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Str`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b00749cf94b050e10d4ab91960af1d49a86a78183b31830079457c840eb9cb2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSub(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSub",
):
    '''The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.

    In your templates, you can use this function to construct commands or outputs
    that include values that aren't available until you create or update a stack.
    '''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::Sub`` function.

        param body A string with variables that Ros Template substitutes with their
        associated values at runtime. Write variables as ${MyVarName}. Variables
        can be template parameter names, resource logical IDs, resource attributes,
        or a variable in a key-value map. If you specify only template parameter names,
        resource logical IDs, and resource attributes, don't specify a key-value map.
        param variables The name of a variable that you included in the String parameter.
        The value that Ros Template substitutes for the associated variable name at runtime.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d91ade8c7dd39fea016dc553268e72b597d83596b15dfa5cf4baa2671204f76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class GitIgnoreStrategy(
    IgnoreStrategy,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.GitIgnoreStrategy",
):
    '''Ignores file paths based on the ```.gitignore specification`` <https://git-scm.com/docs/gitignore>`_.'''

    def __init__(
        self,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> None:
        '''
        :param absolute_root_path: -
        :param patterns: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b95e908e0884742ab6a066235810535602fa6ce8b999681672a2f8ca6b61745e)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        jsii.create(self.__class__, self, [absolute_root_path, patterns])

    @jsii.member(jsii_name="add")
    def add(self, pattern: builtins.str) -> None:
        '''Adds another pattern.

        :param pattern: -

        :params: pattern the pattern to add
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__057f740e25eeddf0a6b261655c4dbcb2e61f4a5829da2af349a1713e7149c8b5)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
        return typing.cast(None, jsii.invoke(self, "add", [pattern]))

    @jsii.member(jsii_name="ignores")
    def ignores(self, absolute_file_path: builtins.str) -> builtins.bool:
        '''Determines whether a given file path should be ignored or not.

        :param absolute_file_path: absolute file path to be assessed against the pattern.

        :return: ``true`` if the file should be ignored
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7c1ef5c6a793be825d5cababca7866c6a6d760d260a3f0b20cd8ad7a920fa90)
            check_type(argname="argument absolute_file_path", value=absolute_file_path, expected_type=type_hints["absolute_file_path"])
        return typing.cast(builtins.bool, jsii.invoke(self, "ignores", [absolute_file_path]))


class GlobIgnoreStrategy(
    IgnoreStrategy,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.GlobIgnoreStrategy",
):
    '''Ignores file paths based on simple glob patterns.'''

    def __init__(
        self,
        absolute_root_path: builtins.str,
        patterns: typing.Sequence[builtins.str],
    ) -> None:
        '''
        :param absolute_root_path: -
        :param patterns: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33484ad0804deb2c4a29a026398d3ee0d1d5c7a3e883826f18144107a7eb4f35)
            check_type(argname="argument absolute_root_path", value=absolute_root_path, expected_type=type_hints["absolute_root_path"])
            check_type(argname="argument patterns", value=patterns, expected_type=type_hints["patterns"])
        jsii.create(self.__class__, self, [absolute_root_path, patterns])

    @jsii.member(jsii_name="add")
    def add(self, pattern: builtins.str) -> None:
        '''Adds another pattern.

        :param pattern: -

        :params: pattern the pattern to add
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d16ab454d1c98386899da6fd0f072225dd74aaf371510bba57ae5a4c399acbe7)
            check_type(argname="argument pattern", value=pattern, expected_type=type_hints["pattern"])
        return typing.cast(None, jsii.invoke(self, "add", [pattern]))

    @jsii.member(jsii_name="ignores")
    def ignores(self, absolute_file_path: builtins.str) -> builtins.bool:
        '''Determines whether a given file path should be ignored or not.

        :param absolute_file_path: absolute file path to be assessed against the pattern.

        :return: ``true`` if the file should be ignored
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c144388ba3a581e6737add8cfa451f52692fc87fbb7b027058921b1895e302c6)
            check_type(argname="argument absolute_file_path", value=absolute_file_path, expected_type=type_hints["absolute_file_path"])
        return typing.cast(builtins.bool, jsii.invoke(self, "ignores", [absolute_file_path]))


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IBoundStackSynthesizer")
class IBoundStackSynthesizer(IStackSynthesizer, typing_extensions.Protocol):
    '''A Stack Synthesizer, obtained from ``IReusableStackSynthesizer.``.

    Just a type alias with a very concrete contract.
    '''

    pass


class _IBoundStackSynthesizerProxy(
    jsii.proxy_for(IStackSynthesizer), # type: ignore[misc]
):
    '''A Stack Synthesizer, obtained from ``IReusableStackSynthesizer.``.

    Just a type alias with a very concrete contract.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IBoundStackSynthesizer"
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBoundStackSynthesizer).__jsii_proxy_class__ = lambda : _IBoundStackSynthesizerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IConstruct")
class IConstruct(
    _constructs_77d1e7e8.IConstruct,
    IDependable,
    typing_extensions.Protocol,
):
    '''Represents a construct.'''

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node for this construct.'''
        ...


class _IConstructProxy(
    jsii.proxy_for(_constructs_77d1e7e8.IConstruct), # type: ignore[misc]
    jsii.proxy_for(IDependable), # type: ignore[misc]
):
    '''Represents a construct.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IConstruct"

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node for this construct.'''
        return typing.cast(ConstructNode, jsii.get(self, "node"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConstruct).__jsii_proxy_class__ = lambda : _IConstructProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResource")
class IResource(IConstruct, typing_extensions.Protocol):
    '''Interface for the Resource construct.'''

    @builtins.property
    @jsii.member(jsii_name="env")
    def env(self) -> IResourceEnvironment:
        '''The environment this resource belongs to.

        For resources that are created and managed by the CDK
        (generally, those created by creating new class instances like Role, Bucket, etc.),
        this is always the same as the environment of the stack they belong to;
        however, for imported resources
        (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
        that might be different than the stack they were imported into.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        ...


class _IResourceProxy(
    jsii.proxy_for(IConstruct), # type: ignore[misc]
):
    '''Interface for the Resource construct.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResource"

    @builtins.property
    @jsii.member(jsii_name="env")
    def env(self) -> IResourceEnvironment:
        '''The environment this resource belongs to.

        For resources that are created and managed by the CDK
        (generally, those created by creating new class instances like Role, Bucket, etc.),
        this is always the same as the environment of the stack they belong to;
        however, for imported resources
        (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
        that might be different than the stack they were imported into.
        '''
        return typing.cast(IResourceEnvironment, jsii.get(self, "env"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        return typing.cast("Stack", jsii.get(self, "stack"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResource).__jsii_proxy_class__ = lambda : _IResourceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IReusableStackSynthesizer")
class IReusableStackSynthesizer(IStackSynthesizer, typing_extensions.Protocol):
    '''Interface for Stack Synthesizers that can be used for more than one stack.

    Regular ``IStackSynthesizer`` instances can only be bound to a Stack once.
    ``IReusableStackSynthesizer`` instances.

    For backwards compatibility reasons, this class inherits from
    ``IStackSynthesizer``, but if an object implements ``IReusableStackSynthesizer``,
    no other methods than ``reusableBind()`` will be called.
    '''

    @jsii.member(jsii_name="reusableBind")
    def reusable_bind(self, stack: "Stack") -> IBoundStackSynthesizer:
        '''Produce a bound Stack Synthesizer for the given stack.

        This method may be called more than once on the same object.

        :param stack: -
        '''
        ...


class _IReusableStackSynthesizerProxy(
    jsii.proxy_for(IStackSynthesizer), # type: ignore[misc]
):
    '''Interface for Stack Synthesizers that can be used for more than one stack.

    Regular ``IStackSynthesizer`` instances can only be bound to a Stack once.
    ``IReusableStackSynthesizer`` instances.

    For backwards compatibility reasons, this class inherits from
    ``IStackSynthesizer``, but if an object implements ``IReusableStackSynthesizer``,
    no other methods than ``reusableBind()`` will be called.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IReusableStackSynthesizer"

    @jsii.member(jsii_name="reusableBind")
    def reusable_bind(self, stack: "Stack") -> IBoundStackSynthesizer:
        '''Produce a bound Stack Synthesizer for the given stack.

        This method may be called more than once on the same object.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5be4b258f7a1712e5221d2acd82b190a82ebbccbd50aeeffa2937f3d430427a)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(IBoundStackSynthesizer, jsii.invoke(self, "reusableBind", [stack]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IReusableStackSynthesizer).__jsii_proxy_class__ = lambda : _IReusableStackSynthesizerProxy


@jsii.implements(IConstruct)
class Construct(
    _constructs_77d1e7e8.Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Construct",
):
    '''Represents the building block of the construct graph.

    All constructs besides the root construct must be created within the scope of
    another construct.
    '''

    def __init__(self, scope: "Construct", id: builtins.str) -> None:
        '''
        :param scope: -
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ecfb8f7a776d0de65e015ad8172e9f8a178dfc04f8dec1b2457d86c1bcce877)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @jsii.member(jsii_name="isConstruct")
    @builtins.classmethod
    def is_construct(cls, x: typing.Any) -> builtins.bool:
        '''Return whether the given object is a Construct.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d81f1bc767e0d25084ea165ce16fa1c230bffea60cbe788385d3a0c0464589a7)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isConstruct", [x]))

    @jsii.member(jsii_name="onPrepare")
    def _on_prepare(self) -> None:
        '''Perform final modifications before synthesis.

        This method can be implemented by derived constructs in order to perform
        final changes before synthesis. prepare() will be called after child
        constructs have been prepared.

        This is an advanced framework feature. Only use this if you
        understand the implications.
        '''
        return typing.cast(None, jsii.invoke(self, "onPrepare", []))

    @jsii.member(jsii_name="onSynthesize")
    def _on_synthesize(self, session: _constructs_77d1e7e8.ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: The synthesis session.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4197923b6ab33eb87eae536a39bd7d210a48cd7dc85d241d4a8085cdf3f7dc33)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "onSynthesize", [session]))

    @jsii.member(jsii_name="onValidate")
    def _on_validate(self) -> typing.List[builtins.str]:
        '''Validate the current construct.

        This method can be implemented by derived constructs in order to perform
        validation logic. It is called on all constructs before synthesis.

        :return: An array of validation error messages, or an empty array if the construct is valid.
        '''
        return typing.cast(typing.List[builtins.str], jsii.invoke(self, "onValidate", []))

    @jsii.member(jsii_name="prepare")
    def _prepare(self) -> None:
        '''Perform final modifications before synthesis.

        This method can be implemented by derived constructs in order to perform
        final changes before synthesis. prepare() will be called after child
        constructs have been prepared.

        This is an advanced framework feature. Only use this if you
        understand the implications.
        '''
        return typing.cast(None, jsii.invoke(self, "prepare", []))

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: The synthesis session.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82b0f1fcba716c8f441e1cb0d8bf0bcd42a713fac611963624c1ca3a274b0504)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

    @jsii.member(jsii_name="validate")
    def _validate(self) -> typing.List[builtins.str]:
        '''Validate the current construct.

        This method can be implemented by derived constructs in order to perform
        validation logic. It is called on all constructs before synthesis.

        :return: An array of validation error messages, or an empty array if the construct is valid.
        '''
        return typing.cast(typing.List[builtins.str], jsii.invoke(self, "validate", []))

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node associated with this construct.'''
        return typing.cast(ConstructNode, jsii.get(self, "node"))


@jsii.implements(IReusableStackSynthesizer, IBoundStackSynthesizer)
class DefaultStackSynthesizer(
    StackSynthesizer,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DefaultStackSynthesizer",
):
    '''Uses conventionally named roles and reify asset storage locations.'''

    def __init__(
        self,
        *,
        bucket_prefix: typing.Optional[builtins.str] = None,
        file_assets_bucket_name: typing.Optional[builtins.str] = None,
        qualifier: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param bucket_prefix: bucketPrefix to use while storing OSS Assets. Default: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
        :param file_assets_bucket_name: Name of the OSS bucket to hold file assets. You must supply this if you have given a non-standard name to the staging bucket. The placeholders ``${Qualifier}``, ``${ALIYUN::AccountId}`` and ``${ALIYUN::Region}`` will be replaced with the values of qualifier and the stack's account and region, respectively. Default: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
        :param qualifier: Qualifier to disambiguate multiple environments in the same account. You can use this and leave the other naming properties empty if you have deployed the bootstrap environment with standard names but only differnet qualifiers.
        '''
        props = DefaultStackSynthesizerProps(
            bucket_prefix=bucket_prefix,
            file_assets_bucket_name=file_assets_bucket_name,
            qualifier=qualifier,
        )

        jsii.create(self.__class__, self, [props])

    @jsii.member(jsii_name="addFileAsset")
    def add_file_asset(
        self,
        *,
        source_hash: builtins.str,
        deploy_time: typing.Optional[builtins.bool] = None,
        executable: typing.Optional[typing.Sequence[builtins.str]] = None,
        file_name: typing.Optional[builtins.str] = None,
        packaging: typing.Optional[FileAssetPackaging] = None,
    ) -> FileAssetLocation:
        '''Register a File Asset.

        Returns the parameters that can be used to refer to the asset inside the template.

        The synthesizer must rely on some out-of-band mechanism to make sure the given files
        are actually placed in the returned location before the deployment happens. This can
        be by writing the instructions to the asset manifest (for use by the ``cdk-assets`` tool),
        by relying on the CLI to upload files (legacy behavior), or some other operator controlled
        mechanism.

        :param source_hash: A hash on the content source. This hash is used to uniquely identify this asset throughout the system. If this value doesn't change, the asset will not be rebuilt or republished.
        :param deploy_time: Whether or not the asset needs to exist beyond deployment time; i.e. are copied over to a different location and not needed afterwards. Setting this property to true has an impact on the lifecycle of the asset, because we will assume that it is safe to delete after the ROS deployment succeeds. For example, FC Function assets are copied over to FC during deployment. Therefore, it is not necessary to store the asset in OSS bucket, so we consider those deployTime assets. Default: false
        :param executable: An external command that will produce the packaged asset. The command should produce the location of a ZIP file on ``stdout``. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param file_name: The path, relative to the root of the cloud assembly, in which this asset source resides. This can be a path to a file or a directory, depending on the packaging type. Default: - Exactly one of ``fileName`` and ``executable`` is required
        :param packaging: Which type of packaging to perform. Default: - Required if ``fileName`` is specified.
        '''
        asset = FileAssetSource(
            source_hash=source_hash,
            deploy_time=deploy_time,
            executable=executable,
            file_name=file_name,
            packaging=packaging,
        )

        return typing.cast(FileAssetLocation, jsii.invoke(self, "addFileAsset", [asset]))

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__056834e8ea5e467b3e578dab4687464feb942970071b2e92b431cb79e887b6e4)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(None, jsii.invoke(self, "bind", [stack]))

    @jsii.member(jsii_name="reusableBind")
    def reusable_bind(self, stack: "Stack") -> IBoundStackSynthesizer:
        '''Produce a bound Stack Synthesizer for the given stack.

        This method may be called more than once on the same object.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffdadcf28093b61d83b2620b5b71e17b25cdd94ce22746e244e1271033fd8fee)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(IBoundStackSynthesizer, jsii.invoke(self, "reusableBind", [stack]))

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: ISynthesisSession) -> None:
        '''Synthesize the associated stack to the session.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__305bde5466084e63b006fcca349d617302b750b5a40ac60fc3512969c331a081)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

    @jsii.member(jsii_name="synthesizeStackArtifacts")
    def synthesize_stack_artifacts(self, session: ISynthesisSession) -> None:
        '''
        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c57938c57f0e21ffd21d8acfc12cedae1a940974abf5c9d97f6e3a44fef3f31a)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesizeStackArtifacts", [session]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="DEFAULT_FILE_ASSET_PREFIX")
    def DEFAULT_FILE_ASSET_PREFIX(cls) -> builtins.str:
        '''Default file asset prefix.'''
        return typing.cast(builtins.str, jsii.sget(cls, "DEFAULT_FILE_ASSET_PREFIX"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="DEFAULT_FILE_ASSETS_BUCKET_NAME")
    def DEFAULT_FILE_ASSETS_BUCKET_NAME(cls) -> builtins.str:
        '''Default file assets bucket name.'''
        return typing.cast(builtins.str, jsii.sget(cls, "DEFAULT_FILE_ASSETS_BUCKET_NAME"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="DEFAULT_QUALIFIER")
    def DEFAULT_QUALIFIER(cls) -> builtins.str:
        '''Default ARN qualifier.'''
        return typing.cast(builtins.str, jsii.sget(cls, "DEFAULT_QUALIFIER"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def _stack(self) -> typing.Optional["Stack"]:
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "stack"))


@jsii.implements(IResource)
class Resource(
    Construct,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.Resource",
):
    '''A construct which represents a resource.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        account: typing.Optional[builtins.str] = None,
        environment_from_arn: typing.Optional[typing.Union[builtins.str, IResolvable]] = None,
        physical_name: typing.Optional[builtins.str] = None,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param account: The Alibaba Cloud account ID this resource belongs to. Default: - the resource is in the same account as the stack it belongs to
        :param environment_from_arn: ARN to deduce region and account from. The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources. Cannot be supplied together with either ``account`` or ``region``. Default: - take environment from ``account``, ``region`` parameters, or use Stack environment.
        :param physical_name: The value passed in by users to the physical name prop of the resource. - ``undefined`` implies that a physical name will be allocated during deployment. - a concrete value implies a specific physical name - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated. Default: - The physical name will be allocated at deployment time
        :param region: The Alibaba Cloud region this resource belongs to. Default: - the resource is in the same region as the stack it belongs to
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__033bb68d0358ede779f4100fe0f171f4f4096ee9aaa265cd7450816e13f088d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = ResourceProps(
            account=account,
            environment_from_arn=environment_from_arn,
            physical_name=physical_name,
            region=region,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, condition: "RosCondition") -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa8adb2d892faa138aee5c2af9a6cbbbfc9d54b43889d0799eebf9400b57059)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [condition]))

    @jsii.member(jsii_name="addCount")
    def add_count(self, count: typing.Union[jsii.Number, IResolvable]) -> None:
        '''
        :param count: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a26f834a04528bb7b9d99cd6a3b1c1f5afa6975f3da82cac68b4b711b4c0f75)
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
        return typing.cast(None, jsii.invoke(self, "addCount", [count]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(self, resource: "Resource") -> None:
        '''
        :param resource: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72092dbfe054fc98599cfa5aeeb4d43af094fa113e4c033759d9d0e9e97c531c)
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
        return typing.cast(None, jsii.invoke(self, "addDependency", [resource]))

    @jsii.member(jsii_name="addResourceDesc")
    def add_resource_desc(self, desc: builtins.str) -> None:
        '''
        :param desc: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2de7567d682f0d1123dbb1b9b79114ec2ae9f54c7129f94c03a3d2eda6e46f0)
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
        return typing.cast(None, jsii.invoke(self, "addResourceDesc", [desc]))

    @jsii.member(jsii_name="applyRemovalPolicy")
    def apply_removal_policy(self, policy: RemovalPolicy) -> None:
        '''
        :param policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f59019a6cdb5178ab386365e04a087fe7d1567a3b3f2ad94de5f8bdf660ae7)
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
        return typing.cast(None, jsii.invoke(self, "applyRemovalPolicy", [policy]))

    @jsii.member(jsii_name="fetchCondition")
    def fetch_condition(self) -> typing.Optional["RosCondition"]:
        return typing.cast(typing.Optional["RosCondition"], jsii.invoke(self, "fetchCondition", []))

    @jsii.member(jsii_name="fetchDependency")
    def fetch_dependency(self) -> typing.Optional[typing.List[builtins.str]]:
        return typing.cast(typing.Optional[typing.List[builtins.str]], jsii.invoke(self, "fetchDependency", []))

    @jsii.member(jsii_name="fetchResourceDesc")
    def fetch_resource_desc(self) -> typing.Optional[builtins.str]:
        return typing.cast(typing.Optional[builtins.str], jsii.invoke(self, "fetchResourceDesc", []))

    @jsii.member(jsii_name="generatePhysicalName")
    def _generate_physical_name(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "generatePhysicalName", []))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, name: builtins.str) -> IResolvable:
        '''
        :param name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2160cb5dc7359592892c674d564da7c8414d648c824034201bd3dd82ec0bec)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        return typing.cast(IResolvable, jsii.invoke(self, "getAtt", [name]))

    @jsii.member(jsii_name="setMetadata")
    def set_metadata(self, key: builtins.str, value: typing.Any) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a9029d185d924daa02b18c58064fef6c16d7b34e4f28fccbe1b8eab51797cd4)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setMetadata", [key, value]))

    @builtins.property
    @jsii.member(jsii_name="env")
    def env(self) -> IResourceEnvironment:
        '''The environment this resource belongs to.

        For resources that are created and managed by the CDK
        (generally, those created by creating new class instances like Role, Bucket, etc.),
        this is always the same as the environment of the stack they belong to;
        however, for imported resources
        (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
        that might be different than the stack they were imported into.
        '''
        return typing.cast(IResourceEnvironment, jsii.get(self, "env"))

    @builtins.property
    @jsii.member(jsii_name="physicalName")
    def _physical_name(self) -> builtins.str:
        '''(experimental) Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.

        This value will resolve to one of the following:

        - a concrete value (e.g. ``"my-awesome-bucket"``)
        - ``undefined``, when a name should be generated by ROS
        - a concrete name generated automatically during synthesis, in
          cross-environment scenarios.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "physicalName"))

    @builtins.property
    @jsii.member(jsii_name="ref")
    def ref(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "ref"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        return typing.cast("Stack", jsii.get(self, "stack"))

    @builtins.property
    @jsii.member(jsii_name="resource")
    def resource(self) -> typing.Optional["RosResource"]:
        return typing.cast(typing.Optional["RosResource"], jsii.get(self, "resource"))

    @resource.setter
    def resource(self, value: typing.Optional["RosResource"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9d9dbf8b7f0d7f6cdf67a80e6264fd20b981f29db775ecb90841534c8fff724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resource", value)


class _ResourceProxy(Resource):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, Resource).__jsii_proxy_class__ = lambda : _ResourceProxy


class RosElement(
    Construct,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.RosElement",
):
    '''An element of a stack.'''

    def __init__(self, scope: Construct, id: builtins.str) -> None:
        '''Creates an entity and binds it to a tree.

        Note that the root of the tree must be a Stack object (not just any Root).

        :param scope: The parent construct.
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47cdb0909e8e294d54ce6c8ae50dfb95c5fdf1709eb8ea16fdce2ef2e8f73e7b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @jsii.member(jsii_name="isRosElement")
    @builtins.classmethod
    def is_ros_element(cls, x: typing.Any) -> builtins.bool:
        '''Returns ``true`` if a construct is a stack element (i.e. part of the synthesized template).

        Uses duck-typing instead of ``instanceof`` to allow stack elements from different
        versions of this library to be included in the same stack.

        :param x: -

        :return: The construct as a stack element or undefined if it is not a stack element.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d40a5c72ddbab2cda8b7e6ef044a141113184fda4c3aa8716c67666d897bd3e)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isRosElement", [x]))

    @jsii.member(jsii_name="overrideLogicalId")
    def override_logical_id(self, new_logical_id: builtins.str) -> None:
        '''Overrides the auto-generated logical ID with a specific ID.

        :param new_logical_id: The new logical ID to use for this stack element.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08dd30761a553a2adc5e01c01d68f30e8ddea800911818c648f0a49c635f69fb)
            check_type(argname="argument new_logical_id", value=new_logical_id, expected_type=type_hints["new_logical_id"])
        return typing.cast(None, jsii.invoke(self, "overrideLogicalId", [new_logical_id]))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''
        :return:

        the stack trace of the point where this Resource was created from, sourced
        from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
        node +internal+ entries filtered.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))

    @builtins.property
    @jsii.member(jsii_name="logicalId")
    def logical_id(self) -> builtins.str:
        '''The logical ID for this stack element.

        The logical ID of the element
        is calculated from the path of the resource node in the construct tree.

        To override this value, use ``overrideLogicalId(newLogicalId)``.

        :return:

        the logical ID as a stringified token. This value will only get
        resolved during synthesis.
        '''
        return typing.cast(builtins.str, jsii.get(self, "logicalId"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this element is defined.

        RosElements must be defined within a stack scope (directly or indirectly).
        '''
        return typing.cast("Stack", jsii.get(self, "stack"))


class _RosElementProxy(RosElement):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, RosElement).__jsii_proxy_class__ = lambda : _RosElementProxy


class RosInfo(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosInfo",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        info: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Creates properties for this stack.

        :param scope: The parent construct.
        :param id: -
        :param info: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7300de86255b954db919450213cdd6104ff126ec38b173084a8af111ebb6bf42)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument info", value=info, expected_type=type_hints["info"])
        jsii.create(self.__class__, self, [scope, id, info])

    @jsii.python.classproperty
    @jsii.member(jsii_name="description")
    def description(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "description"))

    @description.setter # type: ignore[no-redef]
    def description(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b371b50c0476a22f7da554b0ef5e1b89dc247a8bb992c6f86b2ed7c09e0892e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "description", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="formatVersion")
    def format_version(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "formatVersion"))

    @format_version.setter # type: ignore[no-redef]
    def format_version(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa96b151c96eada05a9d3b279fb66e4cb84bb539d53d0fa549a3a8b5409590e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "formatVersion", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="metadata")
    def metadata(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "metadata"))

    @metadata.setter # type: ignore[no-redef]
    def metadata(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e410986d9d6502c50d2359c177f56480efe88b9aaac9a2dc2b6b21f61681483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "metadata", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="v20150901")
    def v20150901(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "v20150901"))

    @v20150901.setter # type: ignore[no-redef]
    def v20150901(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94e885e07ee948b0adff014e19a0ee4e877f020a16bf7c546ccca03bdd02e8d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "v20150901", value)


class RosOutput(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosOutput",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        value: typing.Any,
        condition: typing.Optional["RosCondition"] = None,
        description: typing.Optional[builtins.str] = None,
        export_name: typing.Optional[builtins.str] = None,
        label: typing.Optional[builtins.str] = None,
        no_echo: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Creates an RosOutput value for this stack.

        :param scope: The parent construct.
        :param id: -
        :param value: The value of the property returned by Resource Orchestration Service. The value of an output can include literals, parameter references, pseudo-parameters, a mapping value, or intrinsic functions.
        :param condition: A condition to associate with this output value. If the condition evaluates to ``false``, this output value will not be included in the stack. Default: - No condition is associated with the output.
        :param description: A String type that describes the output value. The description can be a maximum of 4 K in length. Default: - No description.
        :param export_name: The name used to export the value of this output across stacks. To import the value from another stack, use ``Fn.importValue(exportName)``. Default: - the output is not exported
        :param label: An alias for the output. Default: - No label.
        :param no_echo: Whether to output parameter values. If the value is set to true, only an asterisk (*) is printed. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddd2ed831ba9eeda3b15433187523442a685f4956efb14117d5dafc98c124d14)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosOutputProps(
            value=value,
            condition=condition,
            description=description,
            export_name=export_name,
            label=label,
            no_echo=no_echo,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, condition: "RosCondition") -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7aaa28eb232cdee9e75f6952c8ab6cf5980c389158bbcfa89b4f4432767c575)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [condition]))


class RosParameter(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosParameter",
):
    '''A ROS parameter.

    Parameters enable you to input custom values to your template each time you create or
    update a stack.
    '''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        placeholder: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        required: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional[RosParameterType] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param placeholder: -
        :param required: -
        :param text_area: -
        :param type: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1eedc66bdf3ec0f47726c50b7cb3a20ea4c777331c44e83e7720074022f7d61)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosParameterProps(
            allowed_pattern=allowed_pattern,
            allowed_values=allowed_values,
            association_property=association_property,
            association_property_metadata=association_property_metadata,
            confirm=confirm,
            constraint_description=constraint_description,
            default_value=default_value,
            description=description,
            label=label,
            max_length=max_length,
            max_value=max_value,
            min_length=min_length,
            min_value=min_value,
            no_echo=no_echo,
            placeholder=placeholder,
            required=required,
            text_area=text_area,
            type=type,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''
        :param _context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a28eb848a0f55c965d4c5b981426497b24a126948abc9ce0a408838596a87de2)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @jsii.member(jsii_name="validateProperties")
    def validate_properties(
        self,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        placeholder: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        required: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional[RosParameterType] = None,
    ) -> None:
        '''
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param placeholder: -
        :param required: -
        :param text_area: -
        :param type: -
        '''
        props = RosParameterProps(
            allowed_pattern=allowed_pattern,
            allowed_values=allowed_values,
            association_property=association_property,
            association_property_metadata=association_property_metadata,
            confirm=confirm,
            constraint_description=constraint_description,
            default_value=default_value,
            description=description,
            label=label,
            max_length=max_length,
            max_value=max_value,
            min_length=min_length,
            min_value=min_value,
            no_echo=no_echo,
            placeholder=placeholder,
            required=required,
            text_area=text_area,
            type=type,
        )

        return typing.cast(None, jsii.invoke(self, "validateProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="TYPE_ALLOWED_VALUES")
    def TYPE_ALLOWED_VALUES(cls) -> typing.List[builtins.str]:
        return typing.cast(typing.List[builtins.str], jsii.sget(cls, "TYPE_ALLOWED_VALUES"))

    @builtins.property
    @jsii.member(jsii_name="noEcho")
    def no_echo(self) -> builtins.bool:
        '''Indicates if this parameter is configured with "NoEcho" enabled.'''
        return typing.cast(builtins.bool, jsii.get(self, "noEcho"))

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> IResolvable:
        '''The parameter value as a Token.'''
        return typing.cast(IResolvable, jsii.get(self, "value"))

    @builtins.property
    @jsii.member(jsii_name="valueAsAny")
    def value_as_any(self) -> typing.Any:
        '''The parameter value, if it represents a string.'''
        return typing.cast(typing.Any, jsii.get(self, "valueAsAny"))

    @builtins.property
    @jsii.member(jsii_name="valueAsBoolean")
    def value_as_boolean(self) -> typing.Any:
        '''The parameter value, if it represents a string.'''
        return typing.cast(typing.Any, jsii.get(self, "valueAsBoolean"))

    @builtins.property
    @jsii.member(jsii_name="valueAsList")
    def value_as_list(self) -> typing.List[builtins.str]:
        '''The parameter value, if it represents a string list.'''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "valueAsList"))

    @builtins.property
    @jsii.member(jsii_name="valueAsNumber")
    def value_as_number(self) -> jsii.Number:
        '''The parameter value, if it represents a number.'''
        return typing.cast(jsii.Number, jsii.get(self, "valueAsNumber"))

    @builtins.property
    @jsii.member(jsii_name="valueAsString")
    def value_as_string(self) -> builtins.str:
        '''The parameter value, if it represents a string.'''
        return typing.cast(builtins.str, jsii.get(self, "valueAsString"))

    class AssociationProperty(
        metaclass=jsii.JSIIMeta,
        jsii_type="@alicloud/ros-cdk-core.RosParameter.AssociationProperty",
    ):
        def __init__(self) -> None:
            jsii.create(self.__class__, self, [])

        @jsii.python.classproperty
        @jsii.member(jsii_name="ACR_NAMESPACE_NAME")
        def ACR_NAMESPACE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ACR_NAMESPACE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ACR_REPO_ATTRIBUTE")
        def ACR_REPO_ATTRIBUTE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ACR_REPO_ATTRIBUTE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ACR_REPO_TAG")
        def ACR_REPO_TAG(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ACR_REPO_TAG"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ALB_ACL_ID")
        def ALB_ACL_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ALB_ACL_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ALB_INSTANCE_ID")
        def ALB_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ALB_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ALB_LOAD_BALANCER_ID")
        def ALB_LOAD_BALANCER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ALB_LOAD_BALANCER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ALERT")
        def ALERT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ALERT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ARRAY_ITEMS")
        def ARRAY_ITEMS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ARRAY_ITEMS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ARRAY_TABLE")
        def ARRAY_TABLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ARRAY_TABLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="AUTO_COMPLETE_INPUT")
        def AUTO_COMPLETE_INPUT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "AUTO_COMPLETE_INPUT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="BOOLEAN")
        def BOOLEAN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "BOOLEAN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="BSS_PRICING_MODULE_CODE")
        def BSS_PRICING_MODULE_CODE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "BSS_PRICING_MODULE_CODE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CAS_CERTIFICATE")
        def CAS_CERTIFICATE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CAS_CERTIFICATE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CAS_CERTIFICATE_ID")
        def CAS_CERTIFICATE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CAS_CERTIFICATE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CASCADER")
        def CASCADER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CASCADER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CEN_INSTANCE_CEN_ID")
        def CEN_INSTANCE_CEN_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CEN_INSTANCE_CEN_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CEN_TRANSIT_ROUTER_ID")
        def CEN_TRANSIT_ROUTER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CEN_TRANSIT_ROUTER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CHARGE_TYPE")
        def CHARGE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CHARGE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_ALARM_METRIC_SELECTOR")
        def CMS_ALARM_METRIC_SELECTOR(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_ALARM_METRIC_SELECTOR"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_ALARM_RULE")
        def CMS_ALARM_RULE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_ALARM_RULE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_ALARM_SILENCE_TIME")
        def CMS_ALARM_SILENCE_TIME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_ALARM_SILENCE_TIME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_ALARM_TRIGGER_RESOURCES")
        def CMS_ALARM_TRIGGER_RESOURCES(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_ALARM_TRIGGER_RESOURCES"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_EVENT_FILTER_RULE")
        def CMS_EVENT_FILTER_RULE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_EVENT_FILTER_RULE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_EVENT_LEVEL")
        def CMS_EVENT_LEVEL(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_EVENT_LEVEL"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_EVENT_NAME")
        def CMS_EVENT_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_EVENT_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CMS_PRODUCT_TYPE")
        def CMS_PRODUCT_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CMS_PRODUCT_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CODE")
        def CODE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CODE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMMA_DELIMITED_LIST")
        def COMMA_DELIMITED_LIST(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMMA_DELIMITED_LIST"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMPUTE_NEST_ARTIFACT_ID")
        def COMPUTE_NEST_ARTIFACT_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMPUTE_NEST_ARTIFACT_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMPUTE_NEST_ARTIFACT_ID_VERSION")
        def COMPUTE_NEST_ARTIFACT_ID_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMPUTE_NEST_ARTIFACT_ID_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMPUTER_NEST_SERVICE_ID")
        def COMPUTER_NEST_SERVICE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMPUTER_NEST_SERVICE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMPUTER_NEST_SERVICE_INSTANCE_ID")
        def COMPUTER_NEST_SERVICE_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMPUTER_NEST_SERVICE_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="COMPUTER_NEST_SUPPLIER_SERVICE_VERSION")
        def COMPUTER_NEST_SUPPLIER_SERVICE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "COMPUTER_NEST_SUPPLIER_SERVICE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CR_INSTANCE_ID")
        def CR_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CR_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CR_NAMESPACE_NAME")
        def CR_NAMESPACE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CR_NAMESPACE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CR_REPOSITORY_REPO_NAME")
        def CR_REPOSITORY_REPO_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CR_REPOSITORY_REPO_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CR_REPOSITORY_TAG")
        def CR_REPOSITORY_TAG(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CR_REPOSITORY_TAG"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CRON")
        def CRON(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CRON"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CS_CLUSTER_ID")
        def CS_CLUSTER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CS_CLUSTER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CS_CLUSTER_NODE_POOL")
        def CS_CLUSTER_NODE_POOL(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CS_CLUSTER_NODE_POOL"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR")
        def CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "CS_MANAGED_KUBERNETES_CLUSTER_SERVICE_CIDR"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="DASH_VECTOR_API_KEY")
        def DASH_VECTOR_API_KEY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "DASH_VECTOR_API_KEY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="DATE_PICKER")
        def DATE_PICKER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "DATE_PICKER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="DATE_TIME")
        def DATE_TIME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "DATE_TIME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="DNS_DOMAIN_VALIDATE_DOMAIN")
        def DNS_DOMAIN_VALIDATE_DOMAIN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "DNS_DOMAIN_VALIDATE_DOMAIN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="DOMAIN_NAME")
        def DOMAIN_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "DOMAIN_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EAS_INSTANCE_TYPE")
        def EAS_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EAS_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EAS_RESOURCE_ID")
        def EAS_RESOURCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EAS_RESOURCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECD_BUNDLE_DESKTOP_TYPE")
        def ECD_BUNDLE_DESKTOP_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECD_BUNDLE_DESKTOP_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECI_CONTAINER_GROUP_ID")
        def ECI_CONTAINER_GROUP_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECI_CONTAINER_GROUP_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_AUTO_SNAPSHOT_POLICY_ID")
        def ECS_AUTO_SNAPSHOT_POLICY_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_AUTO_SNAPSHOT_POLICY_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_COMMAND_ID")
        def ECS_COMMAND_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_COMMAND_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_DATA_DISK_CATEGORY")
        def ECS_DATA_DISK_CATEGORY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_DATA_DISK_CATEGORY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_DEPLOYMENT_SET_ID")
        def ECS_DEPLOYMENT_SET_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_DEPLOYMENT_SET_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_DISK_ID")
        def ECS_DISK_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_DISK_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_IMAGE_ID")
        def ECS_IMAGE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_IMAGE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE")
        def ECS_INSTANCE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_ATTRIBUTE_SELECTOR")
        def ECS_INSTANCE_ATTRIBUTE_SELECTOR(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_ATTRIBUTE_SELECTOR"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_ID")
        def ECS_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_IMAGE_ID")
        def ECS_INSTANCE_IMAGE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_IMAGE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_MAX_BANDWIDTH_IN")
        def ECS_INSTANCE_MAX_BANDWIDTH_IN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_MAX_BANDWIDTH_IN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_OS_TYPE")
        def ECS_INSTANCE_OS_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_OS_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_PASSWORD")
        def ECS_INSTANCE_PASSWORD(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_PASSWORD"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_PROPERTY_EDITOR")
        def ECS_INSTANCE_PROPERTY_EDITOR(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_PROPERTY_EDITOR"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_RENEW_PERIOD")
        def ECS_INSTANCE_RENEW_PERIOD(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_RENEW_PERIOD"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_STOP_MODE")
        def ECS_INSTANCE_STOP_MODE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_STOP_MODE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_TYPE")
        def ECS_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE")
        def ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_ZONE_ID")
        def ECS_INSTANCE_ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_ZONE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_KEY_PAIR_NAME")
        def ECS_KEY_PAIR_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_KEY_PAIR_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_LAUNCH_TEMPLATE_ID")
        def ECS_LAUNCH_TEMPLATE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_LAUNCH_TEMPLATE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_LAUNCH_TEMPLATE_VERSION")
        def ECS_LAUNCH_TEMPLATE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_LAUNCH_TEMPLATE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_MANAGED_INSTANCE_ID")
        def ECS_MANAGED_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_MANAGED_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_RAM_ROLE")
        def ECS_RAM_ROLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_RAM_ROLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_REGION_ID")
        def ECS_REGION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_REGION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_REGION_ID_DEPLOY")
        def ECS_REGION_ID_DEPLOY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_REGION_ID_DEPLOY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_RESOURCE_GROUP_ID")
        def ECS_RESOURCE_GROUP_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_RESOURCE_GROUP_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_SECURITY_GROUP_ID")
        def ECS_SECURITY_GROUP_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_SECURITY_GROUP_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_SECURITY_GROUP_PORT_RANGE")
        def ECS_SECURITY_GROUP_PORT_RANGE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_SECURITY_GROUP_PORT_RANGE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_SNAPSHOT_ID")
        def ECS_SNAPSHOT_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_SNAPSHOT_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_SYSTEM_DISK_CATEGORY")
        def ECS_SYSTEM_DISK_CATEGORY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_SYSTEM_DISK_CATEGORY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_TAG")
        def ECS_TAG(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_TAG"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_TARGET_REGION_IDS")
        def ECS_TARGET_REGION_IDS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_TARGET_REGION_IDS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_VPC_ID")
        def ECS_VPC_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_VPC_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_VSWITCH")
        def ECS_VSWITCH(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_VSWITCH"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_VSWITCH_ID")
        def ECS_VSWITCH_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_VSWITCH_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_ZONE_ID")
        def ECS_ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_ZONE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EDITABLE")
        def EDITABLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EDITABLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EDITABLE_POPOVER")
        def EDITABLE_POPOVER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EDITABLE_POPOVER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EHPC_CLUSTER_ID")
        def EHPC_CLUSTER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EHPC_CLUSTER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EHPC_FILE_SYSTEM_ID")
        def EHPC_FILE_SYSTEM_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EHPC_FILE_SYSTEM_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN")
        def EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ELASTICSEARCH_INSTANCE_TYPE")
        def ELASTICSEARCH_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ELASTICSEARCH_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="EMR_ECS_CLUSTER_ID")
        def EMR_ECS_CLUSTER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "EMR_ECS_CLUSTER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ESS_AUTO_SCALING_GROUP_ID")
        def ESS_AUTO_SCALING_GROUP_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ESS_AUTO_SCALING_GROUP_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME")
        def ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ESS_ECI_SCALING_CONFIGURATION_CONTAINER_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ESS_ECI_SCALING_CONFIGURATION_ID")
        def ESS_ECI_SCALING_CONFIGURATION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ESS_ECI_SCALING_CONFIGURATION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ESS_SCALING_CONFIGURATION_ID")
        def ESS_SCALING_CONFIGURATION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ESS_SCALING_CONFIGURATION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FC_FUNCTION_NAME")
        def FC_FUNCTION_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FC_FUNCTION_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FC_SERVICE_NAME")
        def FC_SERVICE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FC_SERVICE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FC3_FUNCTION_NAME")
        def FC3_FUNCTION_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FC3_FUNCTION_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FILE_CONTENT")
        def FILE_CONTENT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FILE_CONTENT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FLOW_CONNECTION_ID")
        def FLOW_CONNECTION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FLOW_CONNECTION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FLOW_ORGANIZATION_ID")
        def FLOW_ORGANIZATION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FLOW_ORGANIZATION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FORM_GRID")
        def FORM_GRID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FORM_GRID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FORM_GROUP_COLLAPSE_PAN")
        def FORM_GROUP_COLLAPSE_PAN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FORM_GROUP_COLLAPSE_PAN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FORM_ITEM")
        def FORM_ITEM(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FORM_ITEM"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FORM_ITEM_GROUP")
        def FORM_ITEM_GROUP(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FORM_ITEM_GROUP"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="FORM_LAYOUT")
        def FORM_LAYOUT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "FORM_LAYOUT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="GMT_ZONE")
        def GMT_ZONE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "GMT_ZONE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="HOLOGRES_INSTANCE_ID")
        def HOLOGRES_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "HOLOGRES_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="INFLUX_DB_INSTANCE_TYPE")
        def INFLUX_DB_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "INFLUX_DB_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="INPUT")
        def INPUT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "INPUT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="INTEGER")
        def INTEGER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "INTEGER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="JSON")
        def JSON(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "JSON"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="KAFKA_INSTANCE_ID")
        def KAFKA_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "KAFKA_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="LINDORM_INSTANCE_ID")
        def LINDORM_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "LINDORM_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="LIST")
        def LIST(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "LIST"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="LIST_PARAMETER")
        def LIST_PARAMETER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "LIST_PARAMETER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="LIST_PARAMETERS")
        def LIST_PARAMETERS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "LIST_PARAMETERS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="MONGODB_INSTANCE_TYPE")
        def MONGODB_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "MONGODB_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NAS_FILE_SYSTEM_ID")
        def NAS_FILE_SYSTEM_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NAS_FILE_SYSTEM_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN")
        def NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NAS_FILE_SYSTEM_MOUNT_TARGET_DOMAIN"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NEST_SERVICE_ID")
        def NEST_SERVICE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NEST_SERVICE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NEST_SERVICE_VERSION")
        def NEST_SERVICE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NEST_SERVICE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NLB_INSTANCE_ID")
        def NLB_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NLB_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NLB_LOAD_BALANCER_ID")
        def NLB_LOAD_BALANCER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NLB_LOAD_BALANCER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NLB_ZONE_ID")
        def NLB_ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NLB_ZONE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NUMBER")
        def NUMBER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NUMBER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="NUMBER_PICKER")
        def NUMBER_PICKER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "NUMBER_PICKER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMMAND_CONTENT")
        def OOS_COMMAND_CONTENT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMMAND_CONTENT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR")
        def OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_CLEAN_UP_INFO")
        def OOS_COMPONENT_CLEAN_UP_INFO(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_CLEAN_UP_INFO"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_ON_OFF_TIME_LINE")
        def OOS_COMPONENT_ON_OFF_TIME_LINE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_ON_OFF_TIME_LINE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_ON_OFF_TIMES")
        def OOS_COMPONENT_ON_OFF_TIMES(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_ON_OFF_TIMES"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_OPERATION_TYPE")
        def OOS_COMPONENT_OPERATION_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_OPERATION_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_PRIVATE_TEMPLATE_NAME")
        def OOS_COMPONENT_PRIVATE_TEMPLATE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_PRIVATE_TEMPLATE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_SECTION_TYPE")
        def OOS_COMPONENT_SECTION_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_SECTION_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_TARGET_IMAGE_NAME")
        def OOS_COMPONENT_TARGET_IMAGE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_TARGET_IMAGE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_TIMER_TRIGGER")
        def OOS_COMPONENT_TIMER_TRIGGER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_TIMER_TRIGGER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_COMPONENT_TRANSIT_INSTANCE")
        def OOS_COMPONENT_TRANSIT_INSTANCE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_COMPONENT_TRANSIT_INSTANCE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_FILE_URL")
        def OOS_FILE_URL(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_FILE_URL"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_PACKAGE_NAME")
        def OOS_PACKAGE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_PACKAGE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_PACKAGE_VERSION")
        def OOS_PACKAGE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_PACKAGE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_PARAMETER_VALUE")
        def OOS_PARAMETER_VALUE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_PARAMETER_VALUE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_PATCH_BASE_LINE_NAME")
        def OOS_PATCH_BASE_LINE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_PATCH_BASE_LINE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_SECRET_PARAMETER_VALUE")
        def OOS_SECRET_PARAMETER_VALUE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_SECRET_PARAMETER_VALUE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_SERVICE_ROLE")
        def OOS_SERVICE_ROLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_SERVICE_ROLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_TEMPLATE_NAME")
        def OOS_TEMPLATE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_TEMPLATE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OOS_TEMPLATE_VERSION")
        def OOS_TEMPLATE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OOS_TEMPLATE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OSS_BUCKET_NAME")
        def OSS_BUCKET_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OSS_BUCKET_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OSS_BUCKET_OBJECT")
        def OSS_BUCKET_OBJECT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OSS_BUCKET_OBJECT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="OSS_OBJECT_NAME")
        def OSS_OBJECT_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "OSS_OBJECT_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="PARSE_TEXT")
        def PARSE_TEXT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "PARSE_TEXT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="PASSWORD")
        def PASSWORD(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "PASSWORD"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="PAY_PERIOD")
        def PAY_PERIOD(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "PAY_PERIOD"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="PAY_PERIOD_UNIT")
        def PAY_PERIOD_UNIT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "PAY_PERIOD_UNIT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="POLARDB_DB_CLUSTER_ID")
        def POLARDB_DB_CLUSTER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "POLARDB_DB_CLUSTER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="POLARDB_DB_NODE_CLASS")
        def POLARDB_DB_NODE_CLASS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "POLARDB_DB_NODE_CLASS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RADIO")
        def RADIO(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RADIO"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RAM_ROLE")
        def RAM_ROLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RAM_ROLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RAM_USER")
        def RAM_USER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RAM_USER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RATE_CONTROL")
        def RATE_CONTROL(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RATE_CONTROL"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RDS_ENGINE_ID")
        def RDS_ENGINE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RDS_ENGINE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RDS_ENGINE_VERSION")
        def RDS_ENGINE_VERSION(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RDS_ENGINE_VERSION"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RDS_INSTANCE_ACCOUNT_PASSWORD")
        def RDS_INSTANCE_ACCOUNT_PASSWORD(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RDS_INSTANCE_ACCOUNT_PASSWORD"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RDS_INSTANCE_ID")
        def RDS_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RDS_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RDS_INSTANCE_TYPE")
        def RDS_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RDS_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="READ_ONLY")
        def READ_ONLY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "READ_ONLY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="READ_ONLY_ITEM")
        def READ_ONLY_ITEM(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "READ_ONLY_ITEM"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="REDIS_INSTANCE_ID")
        def REDIS_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "REDIS_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="REDIS_INSTANCE_TYPE")
        def REDIS_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "REDIS_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="REGION_ID")
        def REGION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "REGION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RESOURCE_MANAGER_ACCOUNT")
        def RESOURCE_MANAGER_ACCOUNT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RESOURCE_MANAGER_ACCOUNT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RESOURCE_MANAGER_FOLDER")
        def RESOURCE_MANAGER_FOLDER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RESOURCE_MANAGER_FOLDER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ROS_TYPE_META_LIST")
        def ROS_TYPE_META_LIST(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ROS_TYPE_META_LIST"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SELECT")
        def SELECT(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SELECT"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID")
        def SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID")
        def SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_ACL_ID")
        def SLB_ACL_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_ACL_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_CERTIFICATE")
        def SLB_CERTIFICATE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_CERTIFICATE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_INSTANCE_ID")
        def SLB_INSTANCE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_INSTANCE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_INSTANCE_TYPE")
        def SLB_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_LOAD_BALANCER_ID")
        def SLB_LOAD_BALANCER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_LOAD_BALANCER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SLB_LOAD_BALANCER_ZONE_ID")
        def SLB_LOAD_BALANCER_ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SLB_LOAD_BALANCER_ZONE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="STRING")
        def STRING(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "STRING"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SWITCH")
        def SWITCH(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SWITCH"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TAG_KEY")
        def TAG_KEY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TAG_KEY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TAG_VALUE")
        def TAG_VALUE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TAG_VALUE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TAGS")
        def TAGS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TAGS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TARGETS")
        def TARGETS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TARGETS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TEMPLATE_NAME")
        def TEMPLATE_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TEMPLATE_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TEMPLATE_PARAMETER")
        def TEMPLATE_PARAMETER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TEMPLATE_PARAMETER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TEXT_AREA")
        def TEXT_AREA(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TEXT_AREA"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TIME")
        def TIME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TIME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TIME_TRIGGER")
        def TIME_TRIGGER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TIME_TRIGGER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TIME_TRIGGER_WEEKLY")
        def TIME_TRIGGER_WEEKLY(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TIME_TRIGGER_WEEKLY"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="TIME_ZONE")
        def TIME_ZONE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "TIME_ZONE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="USER_ACCOUNT_ID")
        def USER_ACCOUNT_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "USER_ACCOUNT_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="USER_ACCOUNT_IDS")
        def USER_ACCOUNT_IDS(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "USER_ACCOUNT_IDS"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="USER_ID")
        def USER_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "USER_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_CIDR_BLOCK")
        def VPC_CIDR_BLOCK(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_CIDR_BLOCK"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_EIP_ALLOCATION_ID")
        def VPC_EIP_ALLOCATION_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_EIP_ALLOCATION_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_NAT_GATEWAY_ID")
        def VPC_NAT_GATEWAY_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_NAT_GATEWAY_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_ROUTER_ROUTE_TABLE_ID")
        def VPC_ROUTER_ROUTE_TABLE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_ROUTER_ROUTE_TABLE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_VSWITCH_ID")
        def VPC_VSWITCH_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_VSWITCH_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_ZONE_ID")
        def VPC_ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_ZONE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VSWITCH_CIDR_BLOCK")
        def VSWITCH_CIDR_BLOCK(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VSWITCH_CIDR_BLOCK"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ZONE_ID")
        def ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ZONE_ID"))


class RosRefElement(
    RosElement,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.RosRefElement",
):
    '''Base class for referenceable template constructs which are not Resources.

    These constructs are things like Conditions and Parameters, can be
    referenced by taking the ``.ref`` attribute.

    Resource constructs do not inherit from RosRefElement because they have their
    own, more specific types returned from the .ref attribute. Also, some
    resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).
    '''

    def __init__(self, scope: Construct, id: builtins.str) -> None:
        '''Creates an entity and binds it to a tree.

        Note that the root of the tree must be a Stack object (not just any Root).

        :param scope: The parent construct.
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc68be0ccd998c03d226dee9f58b58db58d51777d1dcb148ca8580210f62d8da)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @builtins.property
    @jsii.member(jsii_name="ref")
    def ref(self) -> builtins.str:
        '''Return a string that will be resolved to a RosTemplate ``{ Ref }`` for this element.

        If, by any chance, the intrinsic reference of a resource is not a string, you could
        coerce it to an IResolvable through ``Lazy.any({ produce: resource.ref })``.
        '''
        return typing.cast(builtins.str, jsii.get(self, "ref"))


class _RosRefElementProxy(
    RosRefElement,
    jsii.proxy_for(RosElement), # type: ignore[misc]
):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, RosRefElement).__jsii_proxy_class__ = lambda : _RosRefElementProxy


class RosResource(
    RosRefElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosResource",
):
    '''Represents a ROS resource.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        type: builtins.str,
        properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Creates a resource construct.

        :param scope: -
        :param id: -
        :param type: ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).
        :param properties: Resource properties. Default: - No resource properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__941346c4ba544e38c6d484ee04db6f28c2e03e3998827ec04c07caeb8e3513b9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosResourceProps(type=type, properties=properties)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isRosResource")
    @builtins.classmethod
    def is_ros_resource(cls, construct: IConstruct) -> builtins.bool:
        '''Check whether the given construct is a RosResource.

        :param construct: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26a7a5bd0c2c812f4b7c3483c22ba2665d748cd34851f26f18d362f3b7641568)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isRosResource", [construct]))

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, con: "RosCondition") -> None:
        '''
        :param con: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bab3990b90c81f3ea564fe13bb7a16fd3f3b943f93b68220c584761a015331f)
            check_type(argname="argument con", value=con, expected_type=type_hints["con"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [con]))

    @jsii.member(jsii_name="addCount")
    def add_count(self, count: typing.Union[jsii.Number, IResolvable]) -> None:
        '''
        :param count: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dcfa9031021a07adecdb44494c0f0c80c2d66bd014996148e6443d50d8f4755)
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
        return typing.cast(None, jsii.invoke(self, "addCount", [count]))

    @jsii.member(jsii_name="addDeletionOverride")
    def add_deletion_override(self, path: builtins.str) -> None:
        '''Syntactic sugar for ``addOverride(path, undefined)``.

        :param path: The path of the value to delete.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5dc20ad26961aac937f4a09fe1babbdd7982bf6c0e340f79c2662c20030cd319)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        return typing.cast(None, jsii.invoke(self, "addDeletionOverride", [path]))

    @jsii.member(jsii_name="addDependsOn")
    def add_depends_on(self, target: "RosResource") -> None:
        '''Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

        This can be used for resources across stacks (or nested stack) boundaries
        and the dependency will automatically be transferred to the relevant scope.

        :param target: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fcdc2057253d1e8056633ce513f71b142942e1b4c71bbd14bffbb951ce349db)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        return typing.cast(None, jsii.invoke(self, "addDependsOn", [target]))

    @jsii.member(jsii_name="addDesc")
    def add_desc(self, desc: builtins.str) -> None:
        '''
        :param desc: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5603f5e790e6800ca247898c0a76a748b08bdccea54b2f8d8ef44dcd446d54b3)
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
        return typing.cast(None, jsii.invoke(self, "addDesc", [desc]))

    @jsii.member(jsii_name="addMetaData")
    def add_meta_data(self, key: builtins.str, value: typing.Any) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8d8fdbfca26a1b9c08967852905c7f2c18defd647238b134e1b34d1f98622c7)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addMetaData", [key, value]))

    @jsii.member(jsii_name="addOverride")
    def add_override(self, path: builtins.str, value: typing.Any) -> None:
        '''Adds an override to the synthesized ROS resource.

        To add a
        property override, either use ``addPropertyOverride`` or prefix ``path`` with
        "Properties." (i.e. ``Properties.TopicName``).

        If the override is nested, separate each nested level using a dot (.) in the path parameter.
        If there is an array as part of the nesting, specify the index in the path.

        For example::

           addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
           addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')

        would add the overrides Example::

           "Properties": {
              "GlobalSecondaryIndexes": [
                {
                  "Projection": {
                    "NonKeyAttributes": [ "myattribute" ]
                    ...
                  }
                  ...
                },
                {
                  "ProjectionType": "INCLUDE"
                  ...
                },
              ]
              ...
           }

        :param path: - The path of the property, you can use dot notation to override values in complex types. Any intermdediate keys will be created as needed.
        :param value: - The value. Could be primitive or complex.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de4d904e391329b12281f41d993ef7bec66f72067ac6df107010c7da6ad60fc6)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addOverride", [path, value]))

    @jsii.member(jsii_name="addPropertyDeletionOverride")
    def add_property_deletion_override(self, property_path: builtins.str) -> None:
        '''Adds an override that deletes the value of a property from the resource definition.

        :param property_path: The path to the property.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e73a34b5fd578a1a0e6d239f8de7f429c7c7cb23dd01e234b26d2537a37db7e1)
            check_type(argname="argument property_path", value=property_path, expected_type=type_hints["property_path"])
        return typing.cast(None, jsii.invoke(self, "addPropertyDeletionOverride", [property_path]))

    @jsii.member(jsii_name="addPropertyOverride")
    def add_property_override(
        self,
        property_path: builtins.str,
        value: typing.Any,
    ) -> None:
        '''Adds an override to a resource property.

        Syntactic sugar for ``addOverride("Properties.<...>", value)``.

        :param property_path: The path of the property.
        :param value: The value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d3152a58d03df66e61a691c9a3e2407cd03751db0aa384483e63e6239031b34)
            check_type(argname="argument property_path", value=property_path, expected_type=type_hints["property_path"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addPropertyOverride", [property_path, value]))

    @jsii.member(jsii_name="addRosDependency")
    def add_ros_dependency(self, target: builtins.str) -> None:
        '''
        :param target: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__571aed41b9b5890cca2490033e2ffea5957ed69b0a36cc932074ac2aff4688ec)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        return typing.cast(None, jsii.invoke(self, "addRosDependency", [target]))

    @jsii.member(jsii_name="applyRemovalPolicy")
    def apply_removal_policy(
        self,
        policy: typing.Optional[RemovalPolicy] = None,
        *,
        apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
        default_policy: typing.Optional[RemovalPolicy] = None,
    ) -> None:
        '''Sets the deletion policy of the resource based on the removal policy specified.

        :param policy: -
        :param apply_to_update_replace_policy: -
        :param default_policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f11f6c0e586fc49c3773a537af49ac2e497dcc49ecdecb8c4d92702a8e66a7e4)
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
        options = RemovalPolicyOptions(
            apply_to_update_replace_policy=apply_to_update_replace_policy,
            default_policy=default_policy,
        )

        return typing.cast(None, jsii.invoke(self, "applyRemovalPolicy", [policy, options]))

    @jsii.member(jsii_name="fetchCondition")
    def fetch_condition(self) -> typing.Optional["RosCondition"]:
        return typing.cast(typing.Optional["RosCondition"], jsii.invoke(self, "fetchCondition", []))

    @jsii.member(jsii_name="fetchDesc")
    def fetch_desc(self) -> typing.Optional[builtins.str]:
        return typing.cast(typing.Optional[builtins.str], jsii.invoke(self, "fetchDesc", []))

    @jsii.member(jsii_name="fetchRosDependency")
    def fetch_ros_dependency(self) -> typing.List[builtins.str]:
        return typing.cast(typing.List[builtins.str], jsii.invoke(self, "fetchRosDependency", []))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, attribute_name: builtins.str) -> Reference:
        '''Returns a token for an runtime attribute of this resource.

        Ideally, use generated attribute accessors (e.g. ``resource.arn``), but this can be used for future compatibility
        in case there is no generated attribute.

        :param attribute_name: The name of the attribute.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01a8a56058b17a312f5ffb8ca87bdfeb2749ff430a4213b4a7dda2c476ab0ef4)
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast(Reference, jsii.invoke(self, "getAtt", [attribute_name]))

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980668d774fee5ae667c0a3cf02ce68aedfdf3b8f92d10348ec1a94883c0c78b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Returns a string representation of this construct.

        :return: a string representation of this resource
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @jsii.member(jsii_name="validateProperties")
    def _validate_properties(self, _properties: typing.Any) -> None:
        '''
        :param _properties: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e75c1ebcfe210720730289132506828c5a1e5c261f68ef912e260fdd4f28fd4)
            check_type(argname="argument _properties", value=_properties, expected_type=type_hints["_properties"])
        return typing.cast(None, jsii.invoke(self, "validateProperties", [_properties]))

    @builtins.property
    @jsii.member(jsii_name="rosOptions")
    def ros_options(self) -> IRosResourceOptions:
        '''Options for this resource, such as condition, update policy etc.'''
        return typing.cast(IRosResourceOptions, jsii.get(self, "rosOptions"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="rosResourceType")
    def ros_resource_type(self) -> builtins.str:
        '''ROS resource type.'''
        return typing.cast(builtins.str, jsii.get(self, "rosResourceType"))

    @builtins.property
    @jsii.member(jsii_name="updatedProperites")
    def _updated_properites(self) -> typing.Mapping[builtins.str, typing.Any]:
        '''Return properties modified after initiation.

        Resources that expose mutable properties should override this function to
        collect and return the properties object for this resource.
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "updatedProperites"))


class RosRule(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosRule",
):
    '''Rules are used to verify that the parameter values passed to the template when the resource stack is created or updated are as expected.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        assertions: typing.Union[RosRuleAssertionProps, typing.Dict[builtins.str, typing.Any]],
        rule_condition: typing.Optional[IResolvable] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param assertions: Used to describe assertions.
        :param rule_condition: Define the rule condition. If the rule condition is not defined, the assertion is always valid. Default: - None
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db74c0e339c35f7d8ff06a64d27016cf418d3fb9b638759ff2c70946774bf3c7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosRuleProps(assertions=assertions, rule_condition=rule_condition)

        jsii.create(self.__class__, self, [scope, id, props])


@jsii.implements(ITaggable)
class Stack(
    Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Stack",
):
    '''A root construct which represents a single ROS stack.'''

    def __init__(
        self,
        scope: typing.Optional[Construct] = None,
        id: typing.Optional[builtins.str] = None,
        *,
        description: typing.Optional[builtins.str] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
        env: typing.Optional[typing.Union[Environment, typing.Dict[builtins.str, typing.Any]]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        stack_name: typing.Optional[builtins.str] = None,
        synthesizer: typing.Optional[IStackSynthesizer] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        version: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Creates a new stack.

        :param scope: Parent of this stack, usually a Program instance.
        :param id: The construct ID of this stack. If ``stackName`` is not explicitly defined, this id (and any parent IDs) will be used to determine the physical ID of the stack.
        :param description: A description of the stack. Default: - No description.
        :param enable_resource_property_constraint: -
        :param env: (experimental) The ALIYUN environment (account/region) where this stack will be deployed. Set the ``region``/``account`` fields of ``env`` to either a concrete value to select the indicated environment (recommended for production stacks), or to the values of environment variables ``CDK_DEFAULT_REGION``/``CDK_DEFAULT_ACCOUNT`` to let the target environment depend on the ALIYUN credentials/configuration that the CDK CLI is executed under (recommended for development stacks). If the ``Stack`` is instantiated inside a ``Stage``, any undefined ``region``/``account`` fields from ``env`` will default to the same field on the encompassing ``Stage``, if configured there. If either ``region`` or ``account`` are not set nor inherited from ``Stage``, the Stack will be considered "*environment-agnostic*"". Environment-agnostic stacks can be deployed to any environment but may not be able to take advantage of all features of the CDK. Default: - The environment of the containing ``Stage`` if available, otherwise create the stack will be environment-agnostic.
        :param metadata: -
        :param stack_name: Name to deploy the stack with. Default: - Derived from construct path.
        :param synthesizer: Synthesis method to use while deploying this stack. Default: - ``DefaultStackSynthesizer``
        :param tags: Stack tags that will be applied to all the taggable resources and the stack itself. Default: {}
        :param version: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dc168842bc69954d0e07ab74e7ad20f5227249df44949f4a202402c806ebe86)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = StackProps(
            description=description,
            enable_resource_property_constraint=enable_resource_property_constraint,
            env=env,
            metadata=metadata,
            stack_name=stack_name,
            synthesizer=synthesizer,
            tags=tags,
            version=version,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isStack")
    @builtins.classmethod
    def is_stack(cls, x: typing.Any) -> builtins.bool:
        '''Return whether the given object is a Stack.

        We do attribute detection since we can't reliably use 'instanceof'.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bc7e129e09b4feddab62e4966768ba39cbaed884489a9137f10d40ac2bf7db0)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isStack", [x]))

    @jsii.member(jsii_name="of")
    @builtins.classmethod
    def of(cls, construct: IConstruct) -> "Stack":
        '''Looks up the first stack scope in which ``construct`` is defined.

        Fails if there is no stack up the tree.

        :param construct: The construct to start the search from.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b94641c207370c83802c8c71ec1c1b6f5bfe8e7d3d68b538d8e81241a823e1e6)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast("Stack", jsii.sinvoke(cls, "of", [construct]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(
        self,
        target: "Stack",
        reason: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Add a dependency between this stack and another stack.

        This can be used to define dependencies between any two stacks within an
        app, and also supports nested stacks.

        :param target: -
        :param reason: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4506fefa5dd69433347eb17079b665a7e5aeed444aaa064f41f02e964b224b2)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
            check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
        return typing.cast(None, jsii.invoke(self, "addDependency", [target, reason]))

    @jsii.member(jsii_name="allocateLogicalId")
    def _allocate_logical_id(self, ros_element: RosElement) -> builtins.str:
        '''Returns the naming scheme used to allocate logical IDs.

        By default, uses
        the ``HashedAddressingScheme`` but this method can be overridden to customize
        this behavior.

        In order to make sure logical IDs are unique and stable, we hash the resource
        construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
        a suffix to the path components joined without a separator (ROS
        IDs only allow alphanumeric characters).

        The result will be:

        <path.join('')><md5(path.join('/')>
        "human"      "hash"

        If the "human" part of the ID exceeds 240 characters, we simply trim it so
        the total ID doesn't exceed 255 character limit.

        We only take 8 characters from the md5 hash (0.000005 chance of collision).

        Special cases:

        - If the path only contains a single component (i.e. it's a top-level
          resource), we won't add the hash to it. The hash is not needed for
          disamiguation and also, it allows for a more straightforward migration an
          existing ROS template to a CDK stack without logical ID changes
          (or renames).
        - For aesthetic reasons, if the last components of the path are the same
          (i.e. ``L1/L2/Pipeline/Pipeline``), they will be de-duplicated to make the
          resulting human portion of the ID more pleasing: ``L1L2Pipeline<HASH>``
          instead of ``L1L2PipelinePipeline<HASH>``
        - If a component is named "Default" it will be omitted from the path. This
          allows refactoring higher level abstractions around constructs without affecting
          the IDs of already deployed resources.
        - If a component is named "Resource" it will be omitted from the user-visible
          path, but included in the hash. This reduces visual noise in the human readable
          part of the identifier.

        :param ros_element: The element for which the logical ID is allocated.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0af605d4b0354a6812eb679f03dc7800afa36dba79ee386d95519a3db2ca6977)
            check_type(argname="argument ros_element", value=ros_element, expected_type=type_hints["ros_element"])
        return typing.cast(builtins.str, jsii.invoke(self, "allocateLogicalId", [ros_element]))

    @jsii.member(jsii_name="getLogicalId")
    def get_logical_id(self, element: RosElement) -> builtins.str:
        '''Allocates a stack-unique logical identity for a specific resource.

        This method is called when a ``RosElement`` is created and used to render the
        initial logical identity of resources. Logical ID renames are applied at
        this stage.

        This method uses the protected method ``allocateLogicalId`` to render the
        logical ID for an element. To modify the naming scheme, extend the ``Stack``
        class and override this method.

        :param element: The ROS element for which a logical identity is needed.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bfdee0d9f37059144839af82465d446909bf1e3490f99384d011f1a8324a431)
            check_type(argname="argument element", value=element, expected_type=type_hints["element"])
        return typing.cast(builtins.str, jsii.invoke(self, "getLogicalId", [element]))

    @jsii.member(jsii_name="prepareCrossReference")
    def _prepare_cross_reference(
        self,
        _source_stack: "Stack",
        reference: Reference,
    ) -> IResolvable:
        '''(deprecated) Deprecated.

        :param _source_stack: -
        :param reference: -

        :return: reference itself without any change

        :deprecated: cross reference handling has been moved to ``App.prepare()``.

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af7bd001d5b018cf8e304d958695046f54f29932881a260dc73b7e680abb1f87)
            check_type(argname="argument _source_stack", value=_source_stack, expected_type=type_hints["_source_stack"])
            check_type(argname="argument reference", value=reference, expected_type=type_hints["reference"])
        return typing.cast(IResolvable, jsii.invoke(self, "prepareCrossReference", [_source_stack, reference]))

    @jsii.member(jsii_name="renameLogicalId")
    def rename_logical_id(self, old_id: builtins.str, new_id: builtins.str) -> None:
        '''Rename a generated logical identities.

        To modify the naming scheme strategy, extend the ``Stack`` class and
        override the ``allocateLogicalId`` method.

        :param old_id: -
        :param new_id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbf09e8a560a6d2a51b85d6d34d59468e862c5d2438cfb9d51a67d4e52fc7683)
            check_type(argname="argument old_id", value=old_id, expected_type=type_hints["old_id"])
            check_type(argname="argument new_id", value=new_id, expected_type=type_hints["new_id"])
        return typing.cast(None, jsii.invoke(self, "renameLogicalId", [old_id, new_id]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, obj: typing.Any) -> typing.Any:
        '''Resolve a tokenized value in the context of the current stack.

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2df79660b12efbfa718154119699655340f2e0f1473b164ba21d864a85e698e4)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [obj]))

    @jsii.member(jsii_name="splitArn")
    def split_arn(
        self,
        arn: typing.Union[builtins.str, IResolvable],
        arn_format: ArnFormat,
    ) -> ArnComponents:
        '''Splits the provided ARN into its components.

        Works both if 'arn' is a string like 'acs:ram::123456789012****:role/RoleName',
        and a Token representing a dynamic ROS expression
        (in which case the returned components will also be dynamic ROS expressions,
        encoded as Tokens).

        :param arn: the ARN to split into its components.
        :param arn_format: the expected format of 'arn' - depends on what format the service 'arn' represents uses.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49b22bb304b208618c098ed046d9340e6a2fa3c848109d30db951f543f952197)
            check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
            check_type(argname="argument arn_format", value=arn_format, expected_type=type_hints["arn_format"])
        return typing.cast(ArnComponents, jsii.invoke(self, "splitArn", [arn, arn_format]))

    @jsii.member(jsii_name="synthesize")
    def synthesize(self, session: ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75aca08f1fac0a1a416aae3430197affca9795e59bba03de3c6c80b7e857c2fb)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

    @jsii.member(jsii_name="toJsonString")
    def to_json_string(
        self,
        obj: typing.Any,
        space: typing.Optional[jsii.Number] = None,
    ) -> builtins.str:
        '''Convert an object, potentially containing tokens, to a JSON string.

        :param obj: -
        :param space: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__076a3f3e8ef5caf16f7c89a9161d7d167666b81169349270d1676da89018fb23)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
            check_type(argname="argument space", value=space, expected_type=type_hints["space"])
        return typing.cast(builtins.str, jsii.invoke(self, "toJsonString", [obj, space]))

    @builtins.property
    @jsii.member(jsii_name="account")
    def account(self) -> builtins.str:
        '''The ALIYUN account into which this stack will be deployed.

        This value is resolved according to the following rules:

        1. The value provided to ``env.account`` when the stack is defined. This can
           either be a concrete account or the ``ALIYUN.ACCOUNT_ID`` token.
        2. ``ALIYUN.ACCOUNT_ID``, which represents the ROS intrinsic reference
           ``{ "Ref": "ALIYUN::AccountId" }`` encoded as a string token.

        Preferably, you should use the return value as an opaque string and not
        attempt to parse it to implement your logic. If you do, you must first
        check that it is a concrete value an not an unresolved token. If this
        value is an unresolved token (``Token.isUnresolved(stack.account)`` returns
        ``true``), this implies that the user wishes that this stack will synthesize
        into a **account-agnostic template**. In this case, your code should either
        fail (throw an error, emit a synth error using ``Annotations.of(construct).addError()``) or
        implement some other region-agnostic behavior.
        '''
        return typing.cast(builtins.str, jsii.get(self, "account"))

    @builtins.property
    @jsii.member(jsii_name="artifactId")
    def artifact_id(self) -> builtins.str:
        '''The ID of the cloud assembly artifact for this stack.'''
        return typing.cast(builtins.str, jsii.get(self, "artifactId"))

    @builtins.property
    @jsii.member(jsii_name="bundlingRequired")
    def bundling_required(self) -> builtins.bool:
        '''Indicates whether the stack requires bundling or not.'''
        return typing.cast(builtins.bool, jsii.get(self, "bundlingRequired"))

    @builtins.property
    @jsii.member(jsii_name="dependencies")
    def dependencies(self) -> typing.List["Stack"]:
        '''Return the stacks this stack depends on.'''
        return typing.cast(typing.List["Stack"], jsii.get(self, "dependencies"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @builtins.property
    @jsii.member(jsii_name="nested")
    def nested(self) -> builtins.bool:
        '''Indicates if this is a nested stack, in which case ``parentStack`` will include a reference to it's parent.'''
        return typing.cast(builtins.bool, jsii.get(self, "nested"))

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> builtins.str:
        '''The ALIYUN region into which this stack will be deployed (e.g. ``cn-beijing``).

        This value is resolved according to the following rules:

        1. The value provided to ``env.region`` when the stack is defined. This can
           either be a concrete region or the ``ALIYUN.REGION`` token.
        2. ``ALIYUN.REGION``, which is represents the ROS intrinsic reference
           ``{ "Ref": "ALIYUN::Region" }`` encoded as a string token.

        Preferably, you should use the return value as an opaque string and not
        attempt to parse it to implement your logic. If you do, you must first
        check that it is a concrete value an not an unresolved token. If this
        value is an unresolved token (``Token.isUnresolved(stack.region)`` returns
        ``true``), this implies that the user wishes that this stack will synthesize
        into a **region-agnostic template**. In this case, your code should either
        fail (throw an error, emit a synth error using ``Annotations.of(construct).addError()``) or
        implement some other region-agnostic behavior.
        '''
        return typing.cast(builtins.str, jsii.get(self, "region"))

    @builtins.property
    @jsii.member(jsii_name="stackId")
    def stack_id(self) -> builtins.str:
        '''The ID of the stack.'''
        return typing.cast(builtins.str, jsii.get(self, "stackId"))

    @builtins.property
    @jsii.member(jsii_name="stackName")
    def stack_name(self) -> builtins.str:
        '''The concrete ROS physical stack name.

        This is either the name defined explicitly in the ``stackName`` prop or
        allocated based on the stack's location in the construct tree. Stacks that
        are directly defined under the app use their construct ``id`` as their stack
        name. Stacks that are defined deeper within the tree will use a hashed naming
        scheme based on the construct path to ensure uniqueness.
        '''
        return typing.cast(builtins.str, jsii.get(self, "stackName"))

    @builtins.property
    @jsii.member(jsii_name="synthesizer")
    def synthesizer(self) -> IStackSynthesizer:
        '''(experimental) Synthesis method for this stack.

        :stability: experimental
        '''
        return typing.cast(IStackSynthesizer, jsii.get(self, "synthesizer"))

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> TagManager:
        '''Tags to be applied to the stack.'''
        return typing.cast(TagManager, jsii.get(self, "tags"))

    @builtins.property
    @jsii.member(jsii_name="templateFile")
    def template_file(self) -> builtins.str:
        '''The name of the ROS template file emitted to the output directory during synthesis.

        Example::

            MyStack.template.json
        '''
        return typing.cast(builtins.str, jsii.get(self, "templateFile"))

    @builtins.property
    @jsii.member(jsii_name="templateOptions")
    def template_options(self) -> ITemplateOptions:
        '''Options for ROS template (like version, description).'''
        return typing.cast(ITemplateOptions, jsii.get(self, "templateOptions"))

    @builtins.property
    @jsii.member(jsii_name="nestedStackParent")
    def nested_stack_parent(self) -> typing.Optional["Stack"]:
        '''If this is a nested stack, returns it's parent stack.'''
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "nestedStackParent"))

    @builtins.property
    @jsii.member(jsii_name="nestedStackResource")
    def nested_stack_resource(self) -> typing.Optional[RosResource]:
        '''(experimental) If this is a nested stack, this represents its ``ALIYUN::ROS::Stack`` resource.

        ``undefined`` for top-level (non-nested) stacks.

        :stability: experimental
        '''
        return typing.cast(typing.Optional[RosResource], jsii.get(self, "nestedStackResource"))

    @builtins.property
    @jsii.member(jsii_name="parentStack")
    def parent_stack(self) -> typing.Optional["Stack"]:
        '''(deprecated) Returns the parent of a nested stack.

        :deprecated: use ``nestedStackParent``

        :stability: deprecated
        '''
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "parentStack"))

    @builtins.property
    @jsii.member(jsii_name="roles")
    def roles(self) -> typing.Optional[RamRoles]:
        return typing.cast(typing.Optional[RamRoles], jsii.get(self, "roles"))

    @roles.setter
    def roles(self, value: typing.Optional[RamRoles]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2162c9276f24921406913dbd652f79aa8fdd01fe3653a810cc12ce9a3b5b9f12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roles", value)


class Stage(
    Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Stage",
):
    '''An abstract application modeling unit consisting of Stacks that should be deployed together.

    Derive a subclass of 'Stage' and use it to model a single instance of your
    application.

    You can then instantiate your subclass multiple times to model multiple
    copies of your application which should be be deployed to different
    environments.
    '''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        outdir: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param outdir: The output directory into which to emit synthesized artifacts. Can only be specified if this stage is the root stage the app. If this is specified and this stage is nested within another stage, an error will be thrown. Default - for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d3cc5431aa000ead0553b38893e095b0fff1ca6e8cfac885d80486e937a4dbb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = StageProps(outdir=outdir)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isStage")
    @builtins.classmethod
    def is_stage(cls, x: typing.Any) -> builtins.bool:
        '''(experimental) Test whether the given construct is a stage.

        :param x: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57cc149bf33dfb1dd59aecbfb358c0d1cccf4e870c0cbf33c3e18336b7e6de8f)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isStage", [x]))

    @jsii.member(jsii_name="of")
    @builtins.classmethod
    def of(cls, construct: IConstruct) -> typing.Optional["Stage"]:
        '''(experimental) Return the stage this construct is contained with, if available.

        If called
        on a nested stage, returns its parent.

        :param construct: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be7e7d60a27fba054f5fa1e6d28e319ee2e67b01f4cedf5452c2627e2aa17bc8)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(typing.Optional["Stage"], jsii.sinvoke(cls, "of", [construct]))

    @jsii.member(jsii_name="synth")
    def synth(
        self,
        *,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> _ros_cdk_cxapi_45dace6b.CloudAssembly:
        '''Synthesize this stage into a cloud assembly.

        Once an assembly has been synthesized, it cannot be modified. Subsequent
        calls will return the same assembly.

        :param skip_validation: Should we skip construct validation. Default: - false
        '''
        options = StageSynthesisOptions(skip_validation=skip_validation)

        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssembly, jsii.invoke(self, "synth", [options]))

    @builtins.property
    @jsii.member(jsii_name="artifactId")
    def artifact_id(self) -> builtins.str:
        '''(experimental) Artifact ID of the assembly if it is a nested stage. The root stage app will return an empty string.

        Derived from the construct path.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "artifactId"))

    @builtins.property
    @jsii.member(jsii_name="assetOutdir")
    def asset_outdir(self) -> builtins.str:
        '''The cloud assembly asset output directory.'''
        return typing.cast(builtins.str, jsii.get(self, "assetOutdir"))

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The cloud assembly output directory.'''
        return typing.cast(builtins.str, jsii.get(self, "outdir"))

    @builtins.property
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        '''(experimental) The name of the stage.

        Based on names of the parent stages separated by
        hypens.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "stageName"))

    @builtins.property
    @jsii.member(jsii_name="account")
    def account(self) -> typing.Optional[builtins.str]:
        '''The default account for all resources defined within this stage.'''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "account"))

    @builtins.property
    @jsii.member(jsii_name="parentStage")
    def parent_stage(self) -> typing.Optional["Stage"]:
        '''(experimental) The parent stage or 'undefined' if this is the app.

        -

        :stability: experimental
        '''
        return typing.cast(typing.Optional["Stage"], jsii.get(self, "parentStage"))

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Optional[builtins.str]:
        '''The default region for all resources defined within this stage.'''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "region"))


class App(Stage, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.App"):
    '''A construct which represents an entire CDK app. This construct is normally the root of the construct tree.

    You would normally define an 'App' instance in your program's entrypoint,
    then define constructs where the app is used as the parent scope.

    After all the child constructs are defined within the app, you should call
    'app.synth()' which will emit a "ros template" from this app into the
    directory specified by 'outdir'.
    '''

    def __init__(
        self,
        *,
        auto_synth: typing.Optional[builtins.bool] = None,
        context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        outdir: typing.Optional[builtins.str] = None,
        runtime_info: typing.Optional[builtins.bool] = None,
        stack_traces: typing.Optional[builtins.bool] = None,
        tree_metadata: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Initializes a CDK application.

        :param auto_synth: Automatically call 'synth()' before the program exits. If you set this, you don't have to call 'synth()' explicitly. Note that this feature is only available for certain programming languages, and calling 'synth()' is still recommended. Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false' otherwise
        :param context: Additional context values for the application. Context set by the CLI or the 'context' key in 'cdk.json' has precedence. Context can be read from any construct using 'node.getContext(key)'. Default: - no additional context
        :param outdir: The output directory into which to emit synthesized artifacts. You should never need to set this value. By default, the value you pass to the CLI's ``--output`` flag will be used, and if you change it to a different directory the CLI will fail to pick up the generated Cloud Assembly. This property is intended for internal and testing use. Default: - If this value is *not* set, considers the environment variable ``CDK_OUTDIR``. If ``CDK_OUTDIR`` is not defined, uses a temp directory.
        :param runtime_info: Include runtime versioning information. Default: true runtime info is included unless related comtext is set.
        :param stack_traces: Include construct creation stack trace. Default: true stack traces are included unless related context is set.
        :param tree_metadata: Include construct tree metadata as part of the Cloud Assembly. Default: true
        '''
        props = AppProps(
            auto_synth=auto_synth,
            context=context,
            outdir=outdir,
            runtime_info=runtime_info,
            stack_traces=stack_traces,
            tree_metadata=tree_metadata,
        )

        jsii.create(self.__class__, self, [props])

    @jsii.member(jsii_name="isApp")
    @builtins.classmethod
    def is_app(cls, obj: typing.Any) -> builtins.bool:
        '''Checks if an object is an instance of the 'App' class.

        Returns 'true' if 'obj' is an 'App'.
        Param obj The object to evaluate

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74d0fa652e39f975ef68ff4093ff1dfd8c4919e78344e1e557ea1960f095bcd0)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isApp", [obj]))


class AssetStaging(
    Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.AssetStaging",
):
    '''Stages a file or directory from a location on the file system into a staging directory.

    This is controlled by the context key 'aliyun:ros:disable-asset-staging' and enabled
    by the CLI by default in order to ensure that when the CDK app exists, all
    assets are available for deployment. Otherwise, if an app references assets
    in temporary locations, those will not be available when it exists.

    The ``stagedPath`` property is a stringified token that represents the location
    of the file or directory after staging. It will be resolved only during the
    "prepare" stage and may be either the original path or the staged path
    depending on the context setting.

    The file/directory are staged based on their content hash (fingerprint). This
    means that only if content was changed, copy will happen.
    '''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        source_path: builtins.str,
        extra_hash: typing.Optional[builtins.str] = None,
        asset_hash: typing.Optional[builtins.str] = None,
        asset_hash_type: typing.Optional[AssetHashType] = None,
        bundling: typing.Optional[typing.Union[BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
        follow: typing.Optional[SymlinkFollowMode] = None,
        ignore_mode: typing.Optional[IgnoreMode] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param source_path: The source file or directory to copy from.
        :param extra_hash: Extra information to encode into the fingerprint (e.g. build instructions and other inputs). Default: - hash is only based on source content
        :param asset_hash: Specify a custom hash for this asset. If ``assetHashType`` is set it must be set to ``AssetHashType.CUSTOM``. For consistency, this custom hash will be SHA256 hashed and encoded as hex. The resulting hash will be the asset hash. NOTE: the hash is used in order to identify a specific revision of the asset, and used for optimizing and caching deployment activities related to this asset such as packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will need to make sure it is updated every time the asset changes, or otherwise it is possible that some deployments will not be invalidated. Default: - based on ``assetHashType``
        :param asset_hash_type: Specifies the type of hash to calculate for this asset. If ``assetHash`` is configured, this option must be ``undefined`` or ``AssetHashType.CUSTOM``. Default: - the default is ``AssetHashType.SOURCE``, but if ``assetHash`` is explicitly specified this value defaults to ``AssetHashType.CUSTOM``.
        :param bundling: Bundle the asset by executing a command in a Docker container or a custom bundling provider. The asset path will be mounted at ``/asset-input``. The Docker container is responsible for putting content at ``/asset-output``. The content at ``/asset-output`` will be zipped and used as the final asset. Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file, archived into a .zip file and uploaded to OSS bucket otherwise.
        :param exclude: File paths matching the patterns will be excluded. See ``ignoreMode`` to set the matching behavior. Has no effect on Assets bundled using the ``bundling`` property. Default: - nothing is excluded
        :param follow: A strategy for how to handle symlinks. Default: SymlinkFollowMode.NEVER
        :param ignore_mode: The ignore behavior to use for ``exclude`` patterns. Default: IgnoreMode.GLOB
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed2b10527f962daea31edd4985f399f8afb755ac12d756e3ed8a0454b42947b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = AssetStagingProps(
            source_path=source_path,
            extra_hash=extra_hash,
            asset_hash=asset_hash,
            asset_hash_type=asset_hash_type,
            bundling=bundling,
            exclude=exclude,
            follow=follow,
            ignore_mode=ignore_mode,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="clearAssetHashCache")
    @builtins.classmethod
    def clear_asset_hash_cache(cls) -> None:
        '''Clears the asset hash cache.'''
        return typing.cast(None, jsii.sinvoke(cls, "clearAssetHashCache", []))

    @jsii.member(jsii_name="relativeStagedPath")
    def relative_staged_path(self, stack: Stack) -> builtins.str:
        '''Return the path to the staged asset, relative to the Cloud Assembly (manifest) directory of the given stack.

        Only returns a relative path if the asset was staged, returns an absolute path if
        it was not staged.

        A bundled asset might end up in the outDir and still not count as
        "staged"; if asset staging is disabled we're technically expected to
        reference source directories, but we don't have a source directory for the
        bundled outputs (as the bundle output is written to a temporary
        directory). Nevertheless, we will still return an absolute path.

        A non-obvious directory layout may look like this::

              CLOUD ASSEMBLY ROOT
                +-- asset.12345abcdef/
                +-- assembly-Stage
                      +-- MyStack.template.json
                      +-- MyStack.assets.json <- will contain { "path": "../asset.12345abcdef" }

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1af790ca04ce7c4138d91a05344a62071baf87cc37559b0ee0f6ec3ebfcefb96)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(builtins.str, jsii.invoke(self, "relativeStagedPath", [stack]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="BUNDLING_INPUT_DIR")
    def BUNDLING_INPUT_DIR(cls) -> builtins.str:
        '''The directory inside the bundling container into which the asset sources will be mounted.'''
        return typing.cast(builtins.str, jsii.sget(cls, "BUNDLING_INPUT_DIR"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="BUNDLING_OUTPUT_DIR")
    def BUNDLING_OUTPUT_DIR(cls) -> builtins.str:
        '''The directory inside the bundling container into which the bundled output should be written.'''
        return typing.cast(builtins.str, jsii.sget(cls, "BUNDLING_OUTPUT_DIR"))

    @builtins.property
    @jsii.member(jsii_name="absoluteStagedPath")
    def absolute_staged_path(self) -> builtins.str:
        '''Absolute path to the asset data.

        If asset staging is disabled, this will just be the source path or
        a temporary directory used for bundling.

        If asset staging is enabled it will be the staged path.

        IMPORTANT: If you are going to call ``addFileAsset()``, use
        ``relativeStagedPath()`` instead.
        '''
        return typing.cast(builtins.str, jsii.get(self, "absoluteStagedPath"))

    @builtins.property
    @jsii.member(jsii_name="assetHash")
    def asset_hash(self) -> builtins.str:
        '''A cryptographic hash of the asset.'''
        return typing.cast(builtins.str, jsii.get(self, "assetHash"))

    @builtins.property
    @jsii.member(jsii_name="isArchive")
    def is_archive(self) -> builtins.bool:
        '''Whether this asset is an archive (zip or jar).'''
        return typing.cast(builtins.bool, jsii.get(self, "isArchive"))

    @builtins.property
    @jsii.member(jsii_name="packaging")
    def packaging(self) -> FileAssetPackaging:
        '''How this asset should be packaged.'''
        return typing.cast(FileAssetPackaging, jsii.get(self, "packaging"))

    @builtins.property
    @jsii.member(jsii_name="sourcePath")
    def source_path(self) -> builtins.str:
        '''The absolute path of the asset as it was referenced by the user.'''
        return typing.cast(builtins.str, jsii.get(self, "sourcePath"))


class NestedStack(
    Stack,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.NestedStack",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_body: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param parameters: -
        :param template_body: -
        :param template_url: -
        :param timeout: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e646842a4e32a91459603425998d3a13b4b135ea05d39360f3d382a3486dc84)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = NestedStackProps(
            parameters=parameters,
            template_body=template_body,
            template_url=template_url,
            timeout=timeout,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isNestedStack")
    @builtins.classmethod
    def is_nested_stack(cls, x: typing.Any) -> builtins.bool:
        '''
        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25b017370399ffba3a033fae3ebc112f4fdd2e6f79c636d64384b8f4a381bb0d)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isNestedStack", [x]))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, attribute_name: builtins.str) -> builtins.str:
        '''
        :param attribute_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__447d9f5b6c2854b6d918d5ae1853ac034d78e15222dae3f55f6c81b4e9386c88)
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast(builtins.str, jsii.invoke(self, "getAtt", [attribute_name]))

    @jsii.member(jsii_name="setParameter")
    def set_parameter(self, name: builtins.str, value: typing.Any) -> None:
        '''
        :param name: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8acfe38a22d7972aef78bf4967459c27003e8a578a5baffcc308affdbc9c9bc)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setParameter", [name, value]))

    @builtins.property
    @jsii.member(jsii_name="stackId")
    def stack_id(self) -> builtins.str:
        '''The ID of the stack.'''
        return typing.cast(builtins.str, jsii.get(self, "stackId"))

    @builtins.property
    @jsii.member(jsii_name="stackName")
    def stack_name(self) -> builtins.str:
        '''The concrete ROS physical stack name.

        This is either the name defined explicitly in the ``stackName`` prop or
        allocated based on the stack's location in the construct tree. Stacks that
        are directly defined under the app use their construct ``id`` as their stack
        name. Stacks that are defined deeper within the tree will use a hashed naming
        scheme based on the construct path to ensure uniqueness.
        '''
        return typing.cast(builtins.str, jsii.get(self, "stackName"))


@jsii.implements(IRosConditionExpression, IResolvable)
class RosCondition(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosCondition",
):
    '''Represents a RosTemplate condition, for resources which must be conditionally created and the determination must be made at deploy time.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        expression: typing.Optional[IRosConditionExpression] = None,
    ) -> None:
        '''Build a new condition.

        The condition must be constructed with a condition token,
        that the condition is based on.

        :param scope: -
        :param id: -
        :param expression: The expression that the condition will evaluate. Default: - None.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4adeb2f3dbe000bfb1c7ec7bed924206f4df34a2bc64ad2e4e1e1504e7a7c13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosConditionProps(expression=expression)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''Synthesizes the condition.

        :param _context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2ef9d8bbd99a6ab400cec2a3268734727521372a8f3dd11a561cbbfceaa382a)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @builtins.property
    @jsii.member(jsii_name="expression")
    def expression(self) -> typing.Optional[IRosConditionExpression]:
        '''The condition statement.'''
        return typing.cast(typing.Optional[IRosConditionExpression], jsii.get(self, "expression"))

    @expression.setter
    def expression(self, value: typing.Optional[IRosConditionExpression]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__320a90f621af7519a0584bb43b35d213f2c135a2982b42bad6edb3d7ff01f842)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expression", value)


class RosMapping(
    RosRefElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosMapping",
):
    '''Represents a mapping.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param mapping: Mapping of key to a set of corresponding set of named values. The key identifies a map of name-value pairs and must be unique within the mapping. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. Default: - No mapping.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__339c8731b33058714cd4c46bb12532db7cb165d85986335505599f486cb0e2e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosMappingProps(mapping=mapping)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="findInMap")
    def find_in_map(self, key1: builtins.str, key2: builtins.str) -> IResolvable:
        '''
        :param key1: -
        :param key2: -

        :return: A reference to a value in the map based on the two keys.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2700068fd9ad29f35ddcdc8992b2ffd67e016c0cc7343a6e921126ab1927e842)
            check_type(argname="argument key1", value=key1, expected_type=type_hints["key1"])
            check_type(argname="argument key2", value=key2, expected_type=type_hints["key2"])
        return typing.cast(IResolvable, jsii.invoke(self, "findInMap", [key1, key2]))

    @jsii.member(jsii_name="setValue")
    def set_value(
        self,
        key1: builtins.str,
        key2: builtins.str,
        value: typing.Any,
    ) -> None:
        '''Sets a value in the map based on the two keys.

        :param key1: -
        :param key2: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf0fe656246b94ac6fc706854b81700474ad2a9a16e4cb7a23e1b55588f7ec37)
            check_type(argname="argument key1", value=key1, expected_type=type_hints["key1"])
            check_type(argname="argument key2", value=key2, expected_type=type_hints["key2"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setValue", [key1, key2, value]))


__all__ = [
    "App",
    "AppProps",
    "Arn",
    "ArnComponents",
    "ArnFormat",
    "AssetHashType",
    "AssetManifestBuilder",
    "AssetManifestDockerImageDestination",
    "AssetManifestFileDestination",
    "AssetOptions",
    "AssetStaging",
    "AssetStagingProps",
    "BundlingFileAccess",
    "BundlingOptions",
    "BundlingOutput",
    "ConcreteDependable",
    "Construct",
    "ConstructNode",
    "ConstructOrder",
    "CopyOptions",
    "DefaultStackSynthesizer",
    "DefaultStackSynthesizerProps",
    "DefaultTokenResolver",
    "DependableTrait",
    "Dependency",
    "DockerBuildOptions",
    "DockerBuildSecret",
    "DockerCacheOption",
    "DockerIgnoreStrategy",
    "DockerImage",
    "DockerImageAssetLocation",
    "DockerImageAssetSource",
    "DockerRunOptions",
    "DockerVolume",
    "DockerVolumeConsistency",
    "EncodingOptions",
    "Environment",
    "FileAssetLocation",
    "FileAssetPackaging",
    "FileAssetSource",
    "FileCopyOptions",
    "FileFingerprintOptions",
    "FileSystem",
    "FingerprintOptions",
    "Fn",
    "FnAdd",
    "FnAnd",
    "FnAny",
    "FnAvg",
    "FnBase64Decode",
    "FnBase64Encode",
    "FnCalculate",
    "FnCidr",
    "FnContains",
    "FnEachMemberIn",
    "FnEquals",
    "FnFindInMap",
    "FnFormatTime",
    "FnGetAZs",
    "FnGetAtt",
    "FnGetJsonValue",
    "FnGetStackOutput",
    "FnIf",
    "FnIndent",
    "FnIndex",
    "FnJoin",
    "FnJq",
    "FnLength",
    "FnListMerge",
    "FnMarketplaceImage",
    "FnMatchPattern",
    "FnMax",
    "FnMergeMapToList",
    "FnMin",
    "FnNot",
    "FnOr",
    "FnRef",
    "FnReplace",
    "FnSelect",
    "FnSelectMapList",
    "FnSplit",
    "FnStr",
    "FnSub",
    "GitIgnoreStrategy",
    "GlobIgnoreStrategy",
    "IAnyProducer",
    "IAsset",
    "IBoundStackSynthesizer",
    "IConstruct",
    "IDependable",
    "IFragmentConcatenator",
    "IInspectable",
    "IListProducer",
    "ILocalBundling",
    "INumberProducer",
    "IPostProcessor",
    "IResolvable",
    "IResolveContext",
    "IResource",
    "IResourceEnvironment",
    "IReusableStackSynthesizer",
    "IRosConditionExpression",
    "IRosResourceOptions",
    "IStackSynthesizer",
    "IStringProducer",
    "ISynthesisSession",
    "ITaggable",
    "ITemplateOptions",
    "ITokenMapper",
    "ITokenResolver",
    "IgnoreMode",
    "IgnoreStrategy",
    "Intrinsic",
    "Lazy",
    "LazyAnyValueOptions",
    "LazyListValueOptions",
    "LazyStringValueOptions",
    "NestedStack",
    "NestedStackProps",
    "RamRoles",
    "Reference",
    "RemovalPolicy",
    "RemovalPolicyOptions",
    "ResolveOptions",
    "Resource",
    "ResourceProps",
    "RosCondition",
    "RosConditionProps",
    "RosDeletionPolicy",
    "RosElement",
    "RosInfo",
    "RosMapping",
    "RosMappingProps",
    "RosOutput",
    "RosOutputProps",
    "RosParameter",
    "RosParameterProps",
    "RosParameterType",
    "RosPseudo",
    "RosRefElement",
    "RosResource",
    "RosResourceProps",
    "RosRule",
    "RosRuleAssertionProps",
    "RosRuleProps",
    "RosTag",
    "Stack",
    "StackProps",
    "StackSynthesizer",
    "Stage",
    "StageProps",
    "StageSynthesisOptions",
    "StringConcat",
    "StringSpecializer",
    "SymlinkFollowMode",
    "SynthesisOptions",
    "SynthesizeStackArtifactOptions",
    "TagManager",
    "TagManagerOptions",
    "TagType",
    "Token",
    "TokenComparison",
    "Tokenization",
    "TokenizedStringFragments",
    "TreeInspector",
    "ValidationError",
    "ValidationResult",
    "ValidationResults",
]

publication.publish()

def _typecheckingstub__748c8a4f3f80cbb46f7db3d45e1fc62f897a813df65337c1692a26757af6df49(
    *,
    auto_synth: typing.Optional[builtins.bool] = None,
    context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    outdir: typing.Optional[builtins.str] = None,
    runtime_info: typing.Optional[builtins.bool] = None,
    stack_traces: typing.Optional[builtins.bool] = None,
    tree_metadata: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e1028034161b616e8ede54829eca6fc8f9fed80e2631285392d839b0ad86011(
    arn: builtins.str,
    resource_type: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47fb05b0e2b64af32b7c13940785dbd944da780492fb36e79132aac2815ce259(
    components: typing.Union[ArnComponents, typing.Dict[builtins.str, typing.Any]],
    stack: typing.Optional[Stack] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7398a992328b7020fe53783e30a1c4002a0f7f11f28b42238a1d662d75d94368(
    arn: typing.Union[builtins.str, IResolvable],
    arn_format: ArnFormat,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aebed7c22e31c083edc6df69ae2445798c8a2872cee11bdc4750de57d691e71e(
    *,
    resource: builtins.str,
    service: builtins.str,
    account: typing.Optional[builtins.str] = None,
    arn_format: typing.Optional[ArnFormat] = None,
    partition: typing.Optional[builtins.str] = None,
    region: typing.Optional[builtins.str] = None,
    resource_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6a595020af2d73b80111249f9b1e850162ad574d0ea6c76750b9d2c5f7e1f82(
    stack: Stack,
    source_hash: builtins.str,
    source: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.DockerImageSource, typing.Dict[builtins.str, typing.Any]],
    *,
    image_tag: builtins.str,
    repository_name: builtins.str,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a361abaca86ed4c2e222be7e390fa3dd4191be97122c7364fb511644b82a1d87(
    stack: Stack,
    source_hash: builtins.str,
    source: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.FileSource, typing.Dict[builtins.str, typing.Any]],
    *,
    bucket_name: builtins.str,
    object_key: builtins.str,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0afe23a0841ab704361316d864c2a66fa9a1e8745e6aae9bc7309144ccb72f4f(
    stack: Stack,
    asset: typing.Union[DockerImageAssetSource, typing.Dict[builtins.str, typing.Any]],
    *,
    repository_name: builtins.str,
    docker_tag_prefix: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdb528b9af0fd890076bcb80dd8af4b816143d08cd19bf6c4078a5cd30cc4fba(
    stack: Stack,
    asset: typing.Union[FileAssetSource, typing.Dict[builtins.str, typing.Any]],
    *,
    bucket_name: builtins.str,
    bucket_prefix: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d1a58772effc05805eaedf1356cc8b5e7040c6d8b60707cf0aad03fbbf422f(
    stack: Stack,
    session: ISynthesisSession,
    options: typing.Optional[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AssetManifestOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3034f90e7b536a93709b6ad6f2a004e54ea5f55eb122a5b8dc0996d3dcc9f474(
    *,
    repository_name: builtins.str,
    docker_tag_prefix: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd5bfbc2a86191e831043600ce3ae9ceea5291a361db5b09611add9bcee0ae66(
    *,
    bucket_name: builtins.str,
    bucket_prefix: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__518951ee015946f515000c1dd54bd4eceeea12eb08fb64701dc6151c2d720086(
    *,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[AssetHashType] = None,
    bundling: typing.Optional[typing.Union[BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1212544ec5356eec539b2d2ffc9af47ed2ea9b52cdd1745e7a3bad470335b92e(
    *,
    image: DockerImage,
    bundling_file_access: typing.Optional[BundlingFileAccess] = None,
    command: typing.Optional[typing.Sequence[builtins.str]] = None,
    entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
    environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    local: typing.Optional[ILocalBundling] = None,
    network: typing.Optional[builtins.str] = None,
    output_type: typing.Optional[BundlingOutput] = None,
    platform: typing.Optional[builtins.str] = None,
    security_opt: typing.Optional[builtins.str] = None,
    user: typing.Optional[builtins.str] = None,
    volumes: typing.Optional[typing.Sequence[typing.Union[DockerVolume, typing.Dict[builtins.str, typing.Any]]]] = None,
    volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
    working_directory: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a47bad65275b85b8612877823d54537652d86b16d9cc47c3f0fe2e682cad87e(
    host: Construct,
    scope: IConstruct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6645ca4ad5ccd4cd68a4050a9e5c2511fdb248cb9310394c721b1c69950e5975(
    node: ConstructNode,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df4441eafb1cb1046b32ca5295d005d3131df919989d3b694d1ce2e3881d2b51(
    node: ConstructNode,
    *,
    outdir: typing.Optional[builtins.str] = None,
    skip_validation: typing.Optional[builtins.bool] = None,
    runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15d58cf30911824dccc4b726e85b99d3c5af21fbe85acb679afb5632b9b4410b(
    node: ConstructNode,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4621c8e910f9ed69913adeffe0161d40cfde5ebadeba3e7bd20a4b0cfbfee3b9(
    *dependencies: IDependable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5828fca22ddd84c8c5f392d283078c4556c6a3104e3afda44917f05f086da22f(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f520bb9a468976f66105a240b5a66c7ade94873ab55373e1ac571b500c21d6a(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__959c55db0db52728d3f598e4c83dd98fc47eb2297c12d34642150aad945923fd(
    type: builtins.str,
    data: typing.Any,
    from_function: typing.Any = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__570f16aaf6d6ed0a36aaf59690d63691db9c638fa7db4426ffff61a3eec2507a(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f373a014879a19ab5383814e7c60e2fdc9b85ff481266088ce12f7a126854d60(
    order: typing.Optional[ConstructOrder] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e9a97593ce9f2c58b87536455eb37e870708a060b383b357d9f6fcb2469e26(
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffc85bdb046e28e24026eca3ca7feb5e1cbec09d4e2d58eb5f259741e0f5805(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cbe01369ed9844edb9ceff08f9f1d6ffdf493083e9de9b90f37b2eb7024c63c(
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d5e8d9fc5378c36b1914ff9ef3d1743c82cf3a6020c5d4b16ef390692134d84(
    key: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4528d4bf540c03795edbfe799321d679a7800f5bda281eb50419a46623ff4eb1(
    child_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1122548f7c053a88310186a509d813226fa408734e0b465c5934441a333f1cf4(
    value: typing.Optional[IConstruct],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a089c22aec3b0e246273f153f7563236caca3abf7794a5aba0ecd3f17c9131df(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba524959d80a1a88eee86a3a039a209594e07b39da331bb1cafb9fc849c5a97d(
    *,
    bucket_prefix: typing.Optional[builtins.str] = None,
    file_assets_bucket_name: typing.Optional[builtins.str] = None,
    qualifier: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be877a98a70eaf2e415053ecc3597f54d82bf1b02ab801068be53d34c3645e0b(
    instance: IDependable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27f51d221a1d3f0592bfeaf5e954b8d1ed157c843e51a32099396c3c78cc123d(
    instance: IDependable,
    trait: DependableTrait,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be971e1a5b7d053e1a29fe327cce65a823280ff9c0231b2ae0a5de6c0c9cafaa(
    *,
    source: IConstruct,
    target: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d74694e2d9eb15024dbbceab0f94c14e18b3f536a404d081bbec8a334814a9c3(
    *,
    build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    cache_disabled: typing.Optional[builtins.bool] = None,
    cache_from: typing.Optional[typing.Sequence[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]]] = None,
    cache_to: typing.Optional[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]] = None,
    file: typing.Optional[builtins.str] = None,
    platform: typing.Optional[builtins.str] = None,
    target_stage: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7f3feaf1eebe9c08e9d7d4053e214c8bc7a3ed5996e50df05489993fdfa2da0(
    src: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd1e13a668f6482329fc3ab0f3861d1d0a540664746d3cb674dbbf27f290cb7b(
    *,
    type: builtins.str,
    params: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76c520f34e0d96be775d608bc06291da540ae52294cb1a74ac24bfad0e64891e(
    image: builtins.str,
    _image_hash: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc529a0bfff1f88664e9bd4b0724aaafd84823ee43e813cffa98eca88b81a00f(
    path: builtins.str,
    *,
    build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    cache_disabled: typing.Optional[builtins.bool] = None,
    cache_from: typing.Optional[typing.Sequence[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]]] = None,
    cache_to: typing.Optional[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]] = None,
    file: typing.Optional[builtins.str] = None,
    platform: typing.Optional[builtins.str] = None,
    target_stage: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15ce9754c4ee8638bf2182bfd6ee5a978f60f7f46d2fc2d8268b0e8582cabff2(
    image: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24b84f515d28447ed661ab925548774a353985b73875637634ae3a9ca18cb1d1(
    image_path: builtins.str,
    output_path: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25fdfa24b34331b8b5a44b5e43dcc80fa129cf24a11c9a9c25399d6cddcd7d9d(
    *,
    image_uri: builtins.str,
    repository_name: builtins.str,
    image_tag: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4b209a01f5a01b4f5e323063bed05f24ee94312ac19f813eb9f17aafd780f0f(
    *,
    source_hash: builtins.str,
    asset_name: typing.Optional[builtins.str] = None,
    directory_name: typing.Optional[builtins.str] = None,
    docker_build_args: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    docker_build_sac_rets: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    docker_build_ssh: typing.Optional[builtins.str] = None,
    docker_build_target: typing.Optional[builtins.str] = None,
    docker_cache_disabled: typing.Optional[builtins.bool] = None,
    docker_cache_from: typing.Optional[typing.Sequence[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]]] = None,
    docker_cache_to: typing.Optional[typing.Union[DockerCacheOption, typing.Dict[builtins.str, typing.Any]]] = None,
    docker_file: typing.Optional[builtins.str] = None,
    docker_outputs: typing.Optional[typing.Sequence[builtins.str]] = None,
    executable: typing.Optional[typing.Sequence[builtins.str]] = None,
    network_mode: typing.Optional[builtins.str] = None,
    platform: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6109b6cf6f19bb608750be04c117972f018ce5914e8f2b826f25391315f4b061(
    *,
    command: typing.Optional[typing.Sequence[builtins.str]] = None,
    entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
    environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    network: typing.Optional[builtins.str] = None,
    platform: typing.Optional[builtins.str] = None,
    security_opt: typing.Optional[builtins.str] = None,
    user: typing.Optional[builtins.str] = None,
    volumes: typing.Optional[typing.Sequence[typing.Union[DockerVolume, typing.Dict[builtins.str, typing.Any]]]] = None,
    volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
    working_directory: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f36876a5743c00f8aa3baaf30015375a0cb64e3c3544271cf78c2d69ff52e388(
    *,
    container_path: builtins.str,
    host_path: builtins.str,
    consistency: typing.Optional[DockerVolumeConsistency] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__592ddd870eea1153b99934c7382cc772fd9c62743fc04f026567e47d474c14a6(
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2798f0bfb575b3a7ef818072cd5d77f3d587c0817ceab03d3ac78d1d53819f6d(
    *,
    account: typing.Optional[builtins.str] = None,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd19ceea152996067335ed47366009b166a3183fa73364a1d4597d61a0b79c9e(
    *,
    bucket_name: builtins.str,
    http_url: builtins.str,
    object_key: builtins.str,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2682133824b0eab08471f419a7bd8f1d79735418bef3976680785b85ace943d3(
    *,
    source_hash: builtins.str,
    deploy_time: typing.Optional[builtins.bool] = None,
    executable: typing.Optional[typing.Sequence[builtins.str]] = None,
    file_name: typing.Optional[builtins.str] = None,
    packaging: typing.Optional[FileAssetPackaging] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__992c189686df402d38fd5945c3521c6068ee8126bc6f53a69945fe845e1358c2(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow_symlinks: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4241e4a4c6de68cd01a569a348986f14042d51d090c9a3a04593d484a999d2a6(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow_symlinks: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
    extra_hash: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__669c7dcfd5e608865581f17c194c0ae285322f2141844550e6dfbee60687b199(
    src_dir: builtins.str,
    dest_dir: builtins.str,
    options: typing.Optional[typing.Union[CopyOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    root_dir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6717888dbbe244ca98e40d941d337984a7814bab2acc4c6239ce3e4661caa56(
    file_or_directory: builtins.str,
    *,
    extra_hash: typing.Optional[builtins.str] = None,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19652aed1bbce55404f609f091f1c0886f2ec20ac7f3b99b369a978cd6f16a88(
    dir: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72cb202b0f828ef6d9ad6b6cd87bb117872cd019536c0c049176d9da29b8e162(
    prefix: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cce6b5a065927818d7a9732a848ae82fb6618b3c6b36a47c43415fc11b53bef(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
    extra_hash: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4463aa739260d8ce63c1fc5c0d0104b648438afea3cc84fd0508ce2ff89e41d(
    values: typing.Union[jsii.Number, typing.Sequence[typing.Any], typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71444f786daeba51d890a6e5ac5b780540a5a28b7d1797b5cc1405fb6eb42584(
    values: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4603e8d5b00df56f000c5dadb14d841aa452846777e902e565f1c0b2decdd8c(
    ndigits: jsii.Number,
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5654a30fb1a45859f496027acf7a03d482124e055620291bac9e02da204e9cb6(
    data: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce3856953e5d2815bfc23c0d182df0cf035b30feda4d849f172136dd500a32a0(
    data: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__247d1bde91a0d2f5bdbe0d77b1d77116951cc7a286d8876b7ee3c841e3d01986(
    values: builtins.str,
    ndigits: jsii.Number,
    para: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c2f8c64c05bf6bdd49194360dffed37679490b787ba1cb1986212b9b630a726(
    ip_block: typing.Union[builtins.str, IResolvable],
    count: typing.Union[jsii.Number, IResolvable],
    cidr_bits: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d3b053d7bd2380d1777011cb385769042414d91dcd1ac5c5d4126a11fb6ced7(
    *conditions: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c32d8c967b76fe1b22006921d766d24460ced611ddaeca23b0cef97797df9dee(
    lhs: typing.Any,
    rhs: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98d6a20e1d755c3448e9346d51da27f01a171bd61c63ea885517e0002d03b1c1(
    condition_id: typing.Union[builtins.str, IRosConditionExpression],
    value_if_true: typing.Any,
    value_if_false: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0f1efc96374482cd77e5e775be7aaf6b0826705fbb51a9778b524db9beb7f5b(
    condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87426609e3c35a1db0e27d2a3800878e1f22676645588ff18f69707d682c3b90(
    *conditions: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac91e0ab789981c241d754ba954dbe6473c13fca939e645fddb6883a24414d88(
    values: typing.Union[typing.Sequence[typing.Any], IResolvable],
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d7b0936a8de6f48d40f5e98646c709ad0c0d6d2adacfbf2d09c9667ce0cc36c(
    values1: typing.Union[typing.Sequence[typing.Any], IResolvable],
    values2: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__483847ae80b6d31323ba40a393751618bf0a768d1d766b45ec2a6e9a1c81cbfa(
    map_name: builtins.str,
    top_level_key: builtins.str,
    second_level_key: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__affcb2f87792474ef0dc856ade948417fd3fcbea16e36baaaa2f626f150cf608(
    format: typing.Union[builtins.str, IResolvable],
    time_zone: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c616186d3b472030fc6ff0709da54ba8f4263acff902f4e13dc63abddb12693(
    logical_name_of_resource: builtins.str,
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5df40a11802df885fed03fa5ee963ab074e2dd8e1f13cd43d87df7b9facfb9c(
    region: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bec0ea9134fb15498bbd9212d243dbe6cb81310293221509061e9dbe3df6313(
    key: builtins.str,
    json_data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffa0ab99cd7d646eb78d61ad0b07aa230afdb88914c828db09aaab14cf714839(
    stack_id: builtins.str,
    output_key: builtins.str,
    stack_region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398b193437beb1582bbb080cb9e23b26eb75d040e0782c71b898aa8b859c2674(
    str: typing.Union[builtins.str, IResolvable],
    level: typing.Union[jsii.Number, IResolvable],
    indent: typing.Optional[typing.Union[jsii.Number, IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c00978591cf423ab6c911133bbb6304f86775462d78c9cb542830e060a946bd5(
    item_to_find_index: typing.Any,
    item_list: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88f3fc6721043fc599f60ea05b463881dcf4075d5127c09179c02a1690454ef0(
    delimiter: builtins.str,
    list_of_values: typing.Sequence[typing.Union[builtins.str, IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bf918016f24f24d6d8d161b6d860b5a0b5506fe4d57b968ce44fea4797441b7(
    method: builtins.str,
    script: builtins.str,
    input_string: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38b597a02e0376fdb7d70f797550d335aefa10f7662ed16418104e8b0a228eff(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__418ce724afaaaf93016caa6baae8868b58470039ae7a0209173008f801bd0cce(
    value_list: typing.Sequence[typing.Union[typing.Sequence[typing.Any], IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c7a5db387ae89ac6a30e4c954067919cff32e8a64d15df467d3f729b03150c9(
    image_product_code: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9056ae1bb402012245a88742bb4ce615a4678fa0e4c0caed7770601b6aca854(
    pattern: typing.Union[builtins.str, IResolvable],
    value: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c2a2d4a102c055ada8b542f1e629eebbdc2c3b23b6ec2f9d3156425c6e0acfe(
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82b64e548b2fe149619ab5ddf83a2692c9fd8f25ee48e660845b06e12306d617(
    map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Sequence[typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fc4584dee600015afe6c6649a88dcc4e525cadcf95374eb87929129b2f3ef1c(
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e9634d4ce38e42ffeb12b5d5faf8aa2a239fc7e2f6389ee89c22a433f482341(
    logical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f093db3c371af0aa55cd98c01151e474879cb90d07575abea0e5cf971413df4(
    replace_data: typing.Mapping[builtins.str, typing.Any],
    content: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b26926a5816f273496a6351b2085fc2ed9f3fafe5e2353790c65e10563fcf72(
    index: typing.Union[builtins.str, jsii.Number],
    array: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14777cebe9bed53e78225c85b1b6b1636e8831c632317c0d9b6cec030eb1e31c(
    key: builtins.str,
    map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e40386a7e03a946cc861ea88a3c7bc073d133b957f617719c7c9dc19f966c12(
    delimiter: builtins.str,
    source: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00895398044099548c609b2ecdc6200196f3347f2b3473fae8a7dd295d6a55dd(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__936318f7d306dbbfa94357c01fc7ea166b43b16cc0756f030d327ffe3a409e5c(
    body: builtins.str,
    variables: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c17c877cbc31bd56fc0d0ada8af1359356a47e367984086f30dbdd1e8909805d(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c52de30a7fb0655b01843c16a129e0a7eebacf9016fd797efec15cd3678577a(
    left: typing.Any,
    right: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1465a36c9a263cd138c4c560a149095fbdfecd574cfbe3422439e98c3fbdf2ed(
    inspector: TreeInspector,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__767ea28bc08d47b0e1f0d4765fe0bc3f22c8289fee8b2e194da7d57277824f5a(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05af01274588c9689335c2451e7875a31e6954cd7c99346f355cb976c1201c2a(
    output_dir: builtins.str,
    *,
    image: DockerImage,
    bundling_file_access: typing.Optional[BundlingFileAccess] = None,
    command: typing.Optional[typing.Sequence[builtins.str]] = None,
    entrypoint: typing.Optional[typing.Sequence[builtins.str]] = None,
    environment: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    local: typing.Optional[ILocalBundling] = None,
    network: typing.Optional[builtins.str] = None,
    output_type: typing.Optional[BundlingOutput] = None,
    platform: typing.Optional[builtins.str] = None,
    security_opt: typing.Optional[builtins.str] = None,
    user: typing.Optional[builtins.str] = None,
    volumes: typing.Optional[typing.Sequence[typing.Union[DockerVolume, typing.Dict[builtins.str, typing.Any]]]] = None,
    volumes_from: typing.Optional[typing.Sequence[builtins.str]] = None,
    working_directory: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0831a2456f0182fa20ecb7b158e0a1186592cd9b986aa74ba61a4a4d1bbc0611(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15f5bff2f879cc4cc32197c0039cad4b57418edeed34a996ca4874cf726ea5d4(
    input: typing.Any,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0955aa64060a165ec5f774d258aa1859e4c9a08ded723ede00b5c1bdc9df52b3(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015447ccb4a9906395b20fd902cabcd4597a590171c08295f278be5342f4e7e3(
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20944a7cc00f2136f1d3365c36cfc599ebe106e8d4cdddf174ebbd715657933c(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b9af138a0065ab24db0137ba4df5cee7e42b723f07b919cba01deb86f6721d1(
    value: typing.Optional[RosCondition],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19ccbf023e632728666a7277d8c6574e3cf45a8648865fbe9b2af9d1ae076fb7(
    value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1cddf5277a3c64108ce0c15fa5faa290e10d8d379815c3af84baaccfc3808ac(
    value: typing.Optional[RosDeletionPolicy],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35f4c58d13e139e5c6223bdbf53164654b2095b5fd91c1bf7e993bd3dc84140f(
    value: typing.Optional[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71a66b9935f95fe5d4e4f70341aa002ed47fa3648ffbbe393e5120f0f1087c43(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a06319e966e22b6794f594e79b9622c69452df8b350eb1db66803917ce61c9c(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3eb16404f2ded9dd386d08b168525b1c29512b6ffcd6983dd703a3572deeef5(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4459cd8f8716a48963ca392c9ef233a3a6f41bb3af29ad7cc2c41f450aa8713d(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c1cff4576a8245902913886959c7001a767c437b52225234ea1b9baf6a9e05d(
    value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2762b383cd1433befe9d900f9538105bc7ff724b6f3bd94e9babdde6b6b651f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48fbde897821b211fa2fbc9afa26b64784456915b4e9e6524cd8607d6d60fbe3(
    value: typing.Optional[builtins.bool],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__014ac8e6afd23cc5d8dbaa362ea76b16a5188f58d5d520c3fb9b08768d065850(
    value: typing.Optional[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcca51c7205afe0a4756cb9a5de79e6efe34349870e4aaee85d9de6f3b426dbb(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06428b1b28ed30f0c1384a6d5a13aa09e69ba4094155ef9bff2074261f64bc85(
    t: IResolvable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e2496293c1d52f1d1a1d7cb90d199bc2d95c0efc70ec58bef81c5e92e78c6c2(
    l: typing.Sequence[builtins.str],
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec6d2795c1854413fd11b04f75ac05db5d3e9ebda3e0c44fd5c5519a148c471f(
    s: TokenizedStringFragments,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b83a71c854922c76207ee3305ff734b2f1aaa0a7a12636de23ff86f45b756041(
    t: IResolvable,
    context: IResolveContext,
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0cbfec08f769ff844ed0a004359192e1315638257bc713fd35793f2840195e4(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9532419df4f8f3ff63a5701e7b99427ae1020ea37d8457a63a80b1f8a3e4037(
    options: typing.Union[CopyOptions, typing.Dict[builtins.str, typing.Any]],
    absolute_root_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79381a2684c424418cda5c8d663b07392aaceef09b45b62c2c2b9a5e401fbefe(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45307f38df52b97abdcfd622efd04b15a4e4c84a80a48d0ad913e9b5422f78fb(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__064d971408922d47e467d420d57eac93a23db6f8969ebe0c27f9e02331df2ab4(
    pattern: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b77ee9f1a5e1f3d7153624874fad9460dcfc20ad6439856240c375e99aeba10(
    absolute_file_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f690835f92182062a506fffc4e9d3275914ee37a6eb328a1e03037ac62192123(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9d6cb405f1dc003d11ded0e2fcf4924af28d4bb81a501991a861ccc28b25294(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed11c272182745b8f071c64a59933a914b55021a02f39aebbbdaed7955fcf4a(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855c3b8f704d5568c58b5eaf5256d1f96e8973533df785d2287a1fa17f8e0625(
    producer: IAnyProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty_array: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d27bdcb87429f6c1ad1c6a63e4fa7f37ec6b156995dd935db8c0232ba62cfb1(
    producer: IListProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb3d27bb92f07376c0671ce2a29b9e0322a5e620e9e5d9261fcc112c7dd83880(
    producer: INumberProducer,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6b154666a2f7bd28fa1944715b8f57b93cf5a42b94aa1cc51b4c287075e2e6f(
    producer: IStringProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__459da39148795d4a2ffdb32575cd274897146155c51dea7f0361cb43373e04b7(
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty_array: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f43363319a77742c2083fd9d84db3926afdc535ad84dd79e943bb24b761be25d(
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11154e9acb99e91fe8a38a92330e2004810b345c011269ed4ae3381d938718d9(
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25327f9b7ddf68f2c9dae74053743641437aa840308c92297b09ca5ce4b2daad(
    *,
    parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_body: typing.Optional[builtins.str] = None,
    template_url: typing.Optional[builtins.str] = None,
    timeout: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b0369694a0d60cdc67d8a1a3906fa58355520f2d97b946ee80c9f015080462f(
    *,
    fc_role: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f8dc2790577ee818f6a8555fec401bd0e2aad0ca17cbcf1ad940dc9bc4fe6f0(
    value: typing.Any,
    target: IConstruct,
    display_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac9bc39f84fa4ed07ec85a081144f2a366bff3352728edce92eb3a3ff10c4f12(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555f312cbc4130456a07898da4b77d3db0176039426274e8555cce2bfbd8dfc7(
    *,
    apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
    default_policy: typing.Optional[RemovalPolicy] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cf5324bcb826f8eda6917454783379af5c03bb9882d50455f1f28ea76eabbf3(
    *,
    resolver: ITokenResolver,
    scope: IConstruct,
    preparing: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb39483257934b924a474a55b25ee60c39f38148113cb72ba8962bb0da42ada(
    *,
    account: typing.Optional[builtins.str] = None,
    environment_from_arn: typing.Optional[typing.Union[builtins.str, IResolvable]] = None,
    physical_name: typing.Optional[builtins.str] = None,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f534de3d8e5fcb3d98fa2b9d753eded2ae1398e9c0cfaa50692ce7724b85d774(
    *,
    expression: typing.Optional[IRosConditionExpression] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcd93622adc1517313de11a1d1758998640b5ec2e8e86746a8317929c727ae61(
    *,
    mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee818edecc8dc711db71a3f783f7d205fa34f9482dad186f363524140313425c(
    *,
    value: typing.Any,
    condition: typing.Optional[RosCondition] = None,
    description: typing.Optional[builtins.str] = None,
    export_name: typing.Optional[builtins.str] = None,
    label: typing.Optional[builtins.str] = None,
    no_echo: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c39b9c0a543f07fdf20a7f9378ee395653a40289a7101cf922b7de73c8a5047b(
    *,
    allowed_pattern: typing.Optional[builtins.str] = None,
    allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
    association_property: typing.Optional[builtins.str] = None,
    association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    confirm: typing.Optional[builtins.bool] = None,
    constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    default_value: typing.Any = None,
    description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    label: typing.Optional[builtins.str] = None,
    max_length: typing.Optional[jsii.Number] = None,
    max_value: typing.Optional[jsii.Number] = None,
    min_length: typing.Optional[jsii.Number] = None,
    min_value: typing.Optional[jsii.Number] = None,
    no_echo: typing.Optional[builtins.bool] = None,
    placeholder: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    required: typing.Optional[builtins.bool] = None,
    text_area: typing.Optional[builtins.bool] = None,
    type: typing.Optional[RosParameterType] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ddbb242164b50fd9890ea53698b2754f764c707d0eda9dcea236241f154b189(
    *,
    type: builtins.str,
    properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73a53bf80f53a35c8707a89979b3ab7f0bf3e8af308c4026c2ce7d4a266f4167(
    *,
    assert_: IResolvable,
    assert_description: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22c962f2992b27bb9268b0d395ef1b5aee74ac29ac5f61e7e77b06518c50a4a9(
    *,
    assertions: typing.Union[RosRuleAssertionProps, typing.Dict[builtins.str, typing.Any]],
    rule_condition: typing.Optional[IResolvable] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48ebd8113f5a95e7206754d99c94b514bab899631027b98c5b25c87874858e36(
    *,
    key: builtins.str,
    value: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a951b9e38e4266f7795d9cf17d13c5cab9723d247372544c2ea0f1e1034a0ddd(
    *,
    description: typing.Optional[builtins.str] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    env: typing.Optional[typing.Union[Environment, typing.Dict[builtins.str, typing.Any]]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    stack_name: typing.Optional[builtins.str] = None,
    synthesizer: typing.Optional[IStackSynthesizer] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    version: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53538c4c360f4f43e8a0ef787fb86115c5c09c63090333ab968528789ca17fc1(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c4dce3bf05e842f09ae0378489bfd07e7da50cdaf320a1cd8f583bef3a4b7bb(
    session: ISynthesisSession,
    *,
    additional_dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c276458fc71f6b65ea31a967d16caca3ff071fe90e442ebf54ee4bc4773534(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd2303f9be95545d96268c6b16cb7032d7bd40f87a561ee1945a643e6d80a2e4(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b4d117a06de3b8d93c347567af09a0e7660f43182f1b89b3d9b139dfc7315a8(
    *,
    outdir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4840d4380846528233f8217e18a55e03a4a174196e2c0e4f2e2111b8cfd9d593(
    *,
    skip_validation: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aeb329831e76fa2de1f9eedf7841ce46f3da80065f0977e8f9f2d47cf23f4827(
    left: typing.Any,
    right: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30e6200ba03470f74ed4dfadcb8a28ccda02441b3d8e34ffc1098e5e24c1d6dc(
    stack: Stack,
    qualifier: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11ae23e14c11d81f0515f008bc2e873d166460f51c59baa29386302aab70d6c1(
    str: builtins.str,
    what: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf18b42c1d1df3c089fe873952926524bf8a546e4f09d0d8b8d699689623549(
    str: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d07cab2d0124b81acbacba018a836e789145c32dea00373a7605a97099c8b4e8(
    str: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efc50f24637b4f3e2a73ca1977889c3fa208f30c9a439f3524b7989fb10048a8(
    str: builtins.str,
    what: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34253714854164c90ac2f1ce4bd38e20e18b53c45053e143999cad2d528be12(
    *,
    runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
    outdir: typing.Optional[builtins.str] = None,
    skip_validation: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f67fb29dbcaca07822799a7a403a59ed6a8b0daa282bec190ff8fab85c99189(
    *,
    additional_dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b31f0916603b9ac0a19041d432d8b63a66c9d635884be9ce7cfe64043d13b996(
    tag_type: TagType,
    resource_type_name: builtins.str,
    tag_structure: typing.Any = None,
    *,
    tag_property_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e3db5dabbad4d55b94d26d442069e119d50daaa4b8d2f279a7dbb32281bf0cd(
    construct: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e52e20f19c15005b1419702493d03ce70ff0090e04c7b0116e7842aaea82195(
    include: typing.Optional[typing.Sequence[builtins.str]] = None,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607bb507ff316ca9882e67bbdda771afd44a804d1822223bddac5091599672e3(
    key: builtins.str,
    priority: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b5c4a3cfda8aa538d53e13c5614c2be4dcc0dd1693e8a3c09b4896ee2915fa8(
    key: builtins.str,
    value: builtins.str,
    priority: typing.Optional[jsii.Number] = None,
    apply_to_launched_instances: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__762aea27829aa2022727347af6041130cc95adf01466f33b366e43fc81c7d366(
    *,
    tag_property_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10cbda2ba292cace9348c3269b4a0e4ef2c137fd31c2cfe347e37b9a82a42113(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f4e057c19741202d697745f96cdac2507420fb69665f906cfbf139e83e5c25f(
    value: typing.Any,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e810b924d685cb48f32839a0b7f6c794e8e7479f053d6175afb6b297c374c257(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e46304e3c03d9f33a2ee730e211b7adc4b55bc70bb89dc7321d0d2f309c2f3(
    value: typing.Any,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__888059c8b2976acbd73616767b36f9158988e41fc049613d32584b3b358e78ef(
    possible_token1: builtins.str,
    possible_token2: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44124ba50108ab8e08c87dd89f6eb94b1a0664a5a3b1da6f8700b15789bf11e3(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40a96ccdbe485dab06de95cb233d33fad660624b380a8a8fb2344c6aaa56d74a(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c89018313fbf500beba9c940ccfdded3a6dd1cb684bcf03e9daef7e54d3978fe(
    obj: typing.Any,
    *,
    resolver: ITokenResolver,
    scope: IConstruct,
    preparing: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e55de9d18756386134ebce512c21523d92c378766278fc50534a8cd1668af16(
    l: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5e35a2fe0dd0bc9b2fdc457c232db0df1e729aec4917cfa407e15a0421c7439(
    n: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4498b1ae96d2081b3636f64315f9a32e7d913a0ebb0c9043445603ef9c73ecfa(
    s: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4baaf0fdb93d747169ccfac8fe3c052c1e366aaa3cf94c4c3ed6cf21994123fb(
    x: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__299944495831f0351a5c3fbe9fda834ddf89ee24168fc7a0f7401221decb1d5a(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2afff4a4b2f29e3e273f323f6b9d7e749e21718257d27356f4e9425c85d64467(
    lit: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e46e28eb8bebe2734ab7401ad99908b2f4d641e7cffad9589a1c9df06b57557(
    token: IResolvable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c80dc9e0477ad2aef93147913606ac3e6d84dacc0d042dcdc512372c14420f07(
    concat: IFragmentConcatenator,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67ffc6b31d0552ac1f075e597446ec4e3590af7972656e2a81c0453e5d48f60f(
    mapper: ITokenMapper,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8160540b1b0781396fbb49de8909f485bc6847f12b06c284899426a5ba73d702(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24c461a233468bdd35c3de4534cc3efeef61b40de176800f40e33fe5d9b63935(
    *,
    message: builtins.str,
    source: Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8464e23dc0647f104591d2538171583569e436394676dc7eacc14605f4bc6c6f(
    error_message: typing.Optional[builtins.str] = None,
    results: typing.Optional[ValidationResults] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b5bac0e79db41ff39720d1056b6d3ad3381b18f0245a6992c93703c07bc82f(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d22e62cd44b29ae7387d4d18bcbc2e8767111e1b9f70ad6d9bbaaa972ec3b410(
    results: typing.Optional[typing.Sequence[ValidationResult]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee64811eef3876aca433a599fde8c5d35b893f421e7c1492cdbaf75d4a580c38(
    result: ValidationResult,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__097ed477d8f3d33cc0e8be9230f76e3de9bcc8e9f3f4aa640fb62bd5ea9e213c(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4403f3c33afef1e6ba1ccbadc87ac1ddd05aae6b7a400b3cbd85a043d7d85462(
    value: typing.List[ValidationResult],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3b734e5101b4cf1d56dd8c6c1699346d190f16ab5ad93672a01ee833b58c06b(
    *,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
    extra_hash: typing.Optional[builtins.str] = None,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[AssetHashType] = None,
    bundling: typing.Optional[typing.Union[BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    source_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2aff3187c70abf274ed13cd4a3f2e4998d0f0992886e51edb0da1d043b8c4479(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9727b4179c0e167b591e6d6381af6777aa5c0bc173a9be06c520752e6276a79b(
    concat: IFragmentConcatenator,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__216b9096fbe63ca7f074fc29e40563204d6f77fcf26ca8d257635a47aaf5654c(
    xs: typing.Sequence[builtins.str],
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94afe6ae9a614e95657ec50260cbe8a8f37f3334a6f8e36774cc6d50076adce9(
    fragments: TokenizedStringFragments,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c53a6ef11bc0db98771275f3ebe02ae5f19946dcc1e5c5d6d3b3d064bc41fc0c(
    t: IResolvable,
    context: IResolveContext,
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__563d2ddab158d930a8fd714cd01e274693d3b6e9ec8efbc88b42f8ddd13123fb(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a4df182b69515d615011c559ad7f01fab59e0e50f252afc930ab76fb75bf2f(
    pattern: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__652b9e186f73f1b34a52aa76a7927a5200bef77dd81e208da8b98b0a25816241(
    absolute_file_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__686e2b42bbe4af2a65edd2cbf32a76d1c722ba8453b459409936c8b9aa9fbf03(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45110e0d6534b98ed8e6e9281dc23a01599642f85573bf97ad8d584b97f59491(
    *condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__883aa4d4cc3e047618f9814f4e95fee7f309500873abeb4b274820e8771279be(
    values: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9524542b26c45613494832a6e6412d4cdfe45869ceeabd7ee930da6b0ef7ef6(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52065ec56e8eae2266f840354d908795d211fda0f7050a5d39c062982a080ba9(
    data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40e0d55844e1804e912770b8e7c076cfb38b59071e09baebb42b3e5e0e337fe0(
    data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26465fde8e7163abd6f7cb2de91952795d430f22b34a8d6cf28a0ef4761de891(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51b1476409289959699e03eae02d70bf17c5f7f56ee3f4e249d6cdc2a86871c3(
    ip_block: typing.Union[builtins.str, IResolvable],
    count: typing.Union[jsii.Number, IResolvable],
    cidr_bits: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a6629121257e9fad1d3507bff924e811c0a92c47d180332927c970200533d84(
    values: typing.Union[typing.Sequence[typing.Any], IResolvable],
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bfba7d096a2517174d0e5480f0c50ff6ecbbc64b6fd3fc687e3cf98b5e231e6(
    values1: typing.Union[typing.Sequence[typing.Any], IResolvable],
    values2: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3cc295f516f290459b1196f5b3f00e46e3c192dc4ac112e357e96a209e33fad(
    lhs: typing.Any,
    rhs: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd98760b6a01e88e5ed5377b56f290262fd96f6703c0328839b0e0668e6ddafa(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0729bf00ab98003cbd1d5099b304c9e45b01720bc1c066219d3f2a180dd54a94(
    format: typing.Union[builtins.str, IResolvable],
    time_zone: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99a58fd57d7de4274f57bce0fac8696676b644b6bd94046816eaa33980856884(
    region: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bf228358201491aaacfb32677b98c44e0d2791cbef92d2c13a4a1b612a88544(
    logical_name_of_resource: builtins.str,
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a2e3c1b3ac88b16338cbf206af8919482beb8d247ee3ff3215f49de03ddf0de(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16e5baaf8cdfb71cdcdc61ee86e19fbe34de66252cc13ec6e10d05b56b2cae67(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd45b41054d6fd402e50eb7829f1b272ebdac9695a6aa57470cb2b3361cd658f(
    condition: typing.Union[builtins.str, IRosConditionExpression],
    value_if_true: typing.Any,
    value_if_false: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3c5d15dbf3d5b349c263a8a5e5a6e6933998ab9d511072ae4f1592d61e1b6c8(
    str: typing.Union[builtins.str, IResolvable],
    level: typing.Union[jsii.Number, IResolvable],
    indent: typing.Optional[typing.Union[jsii.Number, IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__382a7203c1e61fa1ab2adbea732faa557e594a324763f590daf1ee4ab83523a2(
    item_to_find_index: typing.Any,
    item_list: typing.Union[typing.Sequence[typing.Any], IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0122df383b5bc5fa6367cdb94a99ac0174bb8f1f325bd5ed5b2f6ecc4dca2a6(
    delimiter: builtins.str,
    list_of_values: typing.Sequence[typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ef76dd29f6e730b8a873263bec53e01d984484dab8e4c18002a13641acee47(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb62c800fcae67b10a7b5c30ccb3c039f73b92a810339966810785336b14d0e(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f440020913a0ca63254bd6a5010ae365004ea516ae89f71d9a1f235706ddb959(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8c35bdce19ff8d2ea687c9a63e379a6babcc6ff8119fd475f25f1b5ea1c25ee(
    list_of_values: typing.Sequence[typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceda63847d74b36185490f53ff9b8aaada86c97e8019f200dcc7086445d3b88c(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__655a03d671e47da73d38406a7a5d7b6464f23cfa9b451d74ec572c2da3d51588(
    image_product_code: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f82111a21b13c92ac46a4c5a36ba405020497b8c3f80985a0f4c77788b7bd058(
    pattern: typing.Union[builtins.str, IResolvable],
    value: typing.Union[builtins.str, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c01b3caf582f9af877e56cc694bb360a2085322725b78786274d824cdaf2072(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a615ab5ca96cf38319d0e6b4a376abfa40a4feb616ea507c962ee6cb7b1690bd(
    map_list: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9b3bd114c9b3dc0c6ac49a5be7ec7f0bcbbb1ff5fa2912854055f81c5b00296(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8f0c940a166a4c70ea31088c6453e4302d5d801015d2550db27f2ec81e930b(
    condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adf2e03c690c3cb28b74e88982a4889d3b0d5b54d92b5a3556624ce9a9f7fd8a(
    *condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61889f70542841a7dcc6f9a86f78d58f369a603f32fea0e24af9a0038e420cf1(
    logical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0250eb79836dc506c39f785b743b8af41f55a581763ad1190d251682df8b0555(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29fbee6c85e18606ce841248ed899786d11cbeef5717939d92fbf8662a5a02e5(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7943bda42cbb6b91580503ce70079765bd1027495853a52b7c78d1715d76e8ef(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2102430162bd15106fa9023902fbaf95aa0321bdc3212c478770febe2a0dc945(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00749cf94b050e10d4ab91960af1d49a86a78183b31830079457c840eb9cb2f(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d91ade8c7dd39fea016dc553268e72b597d83596b15dfa5cf4baa2671204f76(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b95e908e0884742ab6a066235810535602fa6ce8b999681672a2f8ca6b61745e(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__057f740e25eeddf0a6b261655c4dbcb2e61f4a5829da2af349a1713e7149c8b5(
    pattern: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7c1ef5c6a793be825d5cababca7866c6a6d760d260a3f0b20cd8ad7a920fa90(
    absolute_file_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33484ad0804deb2c4a29a026398d3ee0d1d5c7a3e883826f18144107a7eb4f35(
    absolute_root_path: builtins.str,
    patterns: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d16ab454d1c98386899da6fd0f072225dd74aaf371510bba57ae5a4c399acbe7(
    pattern: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c144388ba3a581e6737add8cfa451f52692fc87fbb7b027058921b1895e302c6(
    absolute_file_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5be4b258f7a1712e5221d2acd82b190a82ebbccbd50aeeffa2937f3d430427a(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ecfb8f7a776d0de65e015ad8172e9f8a178dfc04f8dec1b2457d86c1bcce877(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d81f1bc767e0d25084ea165ce16fa1c230bffea60cbe788385d3a0c0464589a7(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4197923b6ab33eb87eae536a39bd7d210a48cd7dc85d241d4a8085cdf3f7dc33(
    session: _constructs_77d1e7e8.ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82b0f1fcba716c8f441e1cb0d8bf0bcd42a713fac611963624c1ca3a274b0504(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__056834e8ea5e467b3e578dab4687464feb942970071b2e92b431cb79e887b6e4(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffdadcf28093b61d83b2620b5b71e17b25cdd94ce22746e244e1271033fd8fee(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__305bde5466084e63b006fcca349d617302b750b5a40ac60fc3512969c331a081(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c57938c57f0e21ffd21d8acfc12cedae1a940974abf5c9d97f6e3a44fef3f31a(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__033bb68d0358ede779f4100fe0f171f4f4096ee9aaa265cd7450816e13f088d8(
    scope: Construct,
    id: builtins.str,
    *,
    account: typing.Optional[builtins.str] = None,
    environment_from_arn: typing.Optional[typing.Union[builtins.str, IResolvable]] = None,
    physical_name: typing.Optional[builtins.str] = None,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa8adb2d892faa138aee5c2af9a6cbbbfc9d54b43889d0799eebf9400b57059(
    condition: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a26f834a04528bb7b9d99cd6a3b1c1f5afa6975f3da82cac68b4b711b4c0f75(
    count: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72092dbfe054fc98599cfa5aeeb4d43af094fa113e4c033759d9d0e9e97c531c(
    resource: Resource,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2de7567d682f0d1123dbb1b9b79114ec2ae9f54c7129f94c03a3d2eda6e46f0(
    desc: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f59019a6cdb5178ab386365e04a087fe7d1567a3b3f2ad94de5f8bdf660ae7(
    policy: RemovalPolicy,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2160cb5dc7359592892c674d564da7c8414d648c824034201bd3dd82ec0bec(
    name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a9029d185d924daa02b18c58064fef6c16d7b34e4f28fccbe1b8eab51797cd4(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9d9dbf8b7f0d7f6cdf67a80e6264fd20b981f29db775ecb90841534c8fff724(
    value: typing.Optional[RosResource],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47cdb0909e8e294d54ce6c8ae50dfb95c5fdf1709eb8ea16fdce2ef2e8f73e7b(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d40a5c72ddbab2cda8b7e6ef044a141113184fda4c3aa8716c67666d897bd3e(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08dd30761a553a2adc5e01c01d68f30e8ddea800911818c648f0a49c635f69fb(
    new_logical_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7300de86255b954db919450213cdd6104ff126ec38b173084a8af111ebb6bf42(
    scope: Construct,
    id: builtins.str,
    info: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b371b50c0476a22f7da554b0ef5e1b89dc247a8bb992c6f86b2ed7c09e0892e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa96b151c96eada05a9d3b279fb66e4cb84bb539d53d0fa549a3a8b5409590e9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e410986d9d6502c50d2359c177f56480efe88b9aaac9a2dc2b6b21f61681483(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94e885e07ee948b0adff014e19a0ee4e877f020a16bf7c546ccca03bdd02e8d0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddd2ed831ba9eeda3b15433187523442a685f4956efb14117d5dafc98c124d14(
    scope: Construct,
    id: builtins.str,
    *,
    value: typing.Any,
    condition: typing.Optional[RosCondition] = None,
    description: typing.Optional[builtins.str] = None,
    export_name: typing.Optional[builtins.str] = None,
    label: typing.Optional[builtins.str] = None,
    no_echo: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7aaa28eb232cdee9e75f6952c8ab6cf5980c389158bbcfa89b4f4432767c575(
    condition: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1eedc66bdf3ec0f47726c50b7cb3a20ea4c777331c44e83e7720074022f7d61(
    scope: Construct,
    id: builtins.str,
    *,
    allowed_pattern: typing.Optional[builtins.str] = None,
    allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
    association_property: typing.Optional[builtins.str] = None,
    association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    confirm: typing.Optional[builtins.bool] = None,
    constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    default_value: typing.Any = None,
    description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    label: typing.Optional[builtins.str] = None,
    max_length: typing.Optional[jsii.Number] = None,
    max_value: typing.Optional[jsii.Number] = None,
    min_length: typing.Optional[jsii.Number] = None,
    min_value: typing.Optional[jsii.Number] = None,
    no_echo: typing.Optional[builtins.bool] = None,
    placeholder: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    required: typing.Optional[builtins.bool] = None,
    text_area: typing.Optional[builtins.bool] = None,
    type: typing.Optional[RosParameterType] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a28eb848a0f55c965d4c5b981426497b24a126948abc9ce0a408838596a87de2(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc68be0ccd998c03d226dee9f58b58db58d51777d1dcb148ca8580210f62d8da(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__941346c4ba544e38c6d484ee04db6f28c2e03e3998827ec04c07caeb8e3513b9(
    scope: Construct,
    id: builtins.str,
    *,
    type: builtins.str,
    properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26a7a5bd0c2c812f4b7c3483c22ba2665d748cd34851f26f18d362f3b7641568(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bab3990b90c81f3ea564fe13bb7a16fd3f3b943f93b68220c584761a015331f(
    con: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dcfa9031021a07adecdb44494c0f0c80c2d66bd014996148e6443d50d8f4755(
    count: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dc20ad26961aac937f4a09fe1babbdd7982bf6c0e340f79c2662c20030cd319(
    path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fcdc2057253d1e8056633ce513f71b142942e1b4c71bbd14bffbb951ce349db(
    target: RosResource,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5603f5e790e6800ca247898c0a76a748b08bdccea54b2f8d8ef44dcd446d54b3(
    desc: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8d8fdbfca26a1b9c08967852905c7f2c18defd647238b134e1b34d1f98622c7(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de4d904e391329b12281f41d993ef7bec66f72067ac6df107010c7da6ad60fc6(
    path: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e73a34b5fd578a1a0e6d239f8de7f429c7c7cb23dd01e234b26d2537a37db7e1(
    property_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d3152a58d03df66e61a691c9a3e2407cd03751db0aa384483e63e6239031b34(
    property_path: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__571aed41b9b5890cca2490033e2ffea5957ed69b0a36cc932074ac2aff4688ec(
    target: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f11f6c0e586fc49c3773a537af49ac2e497dcc49ecdecb8c4d92702a8e66a7e4(
    policy: typing.Optional[RemovalPolicy] = None,
    *,
    apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
    default_policy: typing.Optional[RemovalPolicy] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01a8a56058b17a312f5ffb8ca87bdfeb2749ff430a4213b4a7dda2c476ab0ef4(
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980668d774fee5ae667c0a3cf02ce68aedfdf3b8f92d10348ec1a94883c0c78b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e75c1ebcfe210720730289132506828c5a1e5c261f68ef912e260fdd4f28fd4(
    _properties: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db74c0e339c35f7d8ff06a64d27016cf418d3fb9b638759ff2c70946774bf3c7(
    scope: Construct,
    id: builtins.str,
    *,
    assertions: typing.Union[RosRuleAssertionProps, typing.Dict[builtins.str, typing.Any]],
    rule_condition: typing.Optional[IResolvable] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dc168842bc69954d0e07ab74e7ad20f5227249df44949f4a202402c806ebe86(
    scope: typing.Optional[Construct] = None,
    id: typing.Optional[builtins.str] = None,
    *,
    description: typing.Optional[builtins.str] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    env: typing.Optional[typing.Union[Environment, typing.Dict[builtins.str, typing.Any]]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    stack_name: typing.Optional[builtins.str] = None,
    synthesizer: typing.Optional[IStackSynthesizer] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    version: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc7e129e09b4feddab62e4966768ba39cbaed884489a9137f10d40ac2bf7db0(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b94641c207370c83802c8c71ec1c1b6f5bfe8e7d3d68b538d8e81241a823e1e6(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4506fefa5dd69433347eb17079b665a7e5aeed444aaa064f41f02e964b224b2(
    target: Stack,
    reason: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0af605d4b0354a6812eb679f03dc7800afa36dba79ee386d95519a3db2ca6977(
    ros_element: RosElement,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bfdee0d9f37059144839af82465d446909bf1e3490f99384d011f1a8324a431(
    element: RosElement,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af7bd001d5b018cf8e304d958695046f54f29932881a260dc73b7e680abb1f87(
    _source_stack: Stack,
    reference: Reference,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbf09e8a560a6d2a51b85d6d34d59468e862c5d2438cfb9d51a67d4e52fc7683(
    old_id: builtins.str,
    new_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2df79660b12efbfa718154119699655340f2e0f1473b164ba21d864a85e698e4(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49b22bb304b208618c098ed046d9340e6a2fa3c848109d30db951f543f952197(
    arn: typing.Union[builtins.str, IResolvable],
    arn_format: ArnFormat,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75aca08f1fac0a1a416aae3430197affca9795e59bba03de3c6c80b7e857c2fb(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__076a3f3e8ef5caf16f7c89a9161d7d167666b81169349270d1676da89018fb23(
    obj: typing.Any,
    space: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2162c9276f24921406913dbd652f79aa8fdd01fe3653a810cc12ce9a3b5b9f12(
    value: typing.Optional[RamRoles],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d3cc5431aa000ead0553b38893e095b0fff1ca6e8cfac885d80486e937a4dbb(
    scope: Construct,
    id: builtins.str,
    *,
    outdir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57cc149bf33dfb1dd59aecbfb358c0d1cccf4e870c0cbf33c3e18336b7e6de8f(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be7e7d60a27fba054f5fa1e6d28e319ee2e67b01f4cedf5452c2627e2aa17bc8(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d0fa652e39f975ef68ff4093ff1dfd8c4919e78344e1e557ea1960f095bcd0(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed2b10527f962daea31edd4985f399f8afb755ac12d756e3ed8a0454b42947b2(
    scope: Construct,
    id: builtins.str,
    *,
    source_path: builtins.str,
    extra_hash: typing.Optional[builtins.str] = None,
    asset_hash: typing.Optional[builtins.str] = None,
    asset_hash_type: typing.Optional[AssetHashType] = None,
    bundling: typing.Optional[typing.Union[BundlingOptions, typing.Dict[builtins.str, typing.Any]]] = None,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    follow: typing.Optional[SymlinkFollowMode] = None,
    ignore_mode: typing.Optional[IgnoreMode] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1af790ca04ce7c4138d91a05344a62071baf87cc37559b0ee0f6ec3ebfcefb96(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e646842a4e32a91459603425998d3a13b4b135ea05d39360f3d382a3486dc84(
    scope: Construct,
    id: builtins.str,
    *,
    parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_body: typing.Optional[builtins.str] = None,
    template_url: typing.Optional[builtins.str] = None,
    timeout: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25b017370399ffba3a033fae3ebc112f4fdd2e6f79c636d64384b8f4a381bb0d(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__447d9f5b6c2854b6d918d5ae1853ac034d78e15222dae3f55f6c81b4e9386c88(
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8acfe38a22d7972aef78bf4967459c27003e8a578a5baffcc308affdbc9c9bc(
    name: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4adeb2f3dbe000bfb1c7ec7bed924206f4df34a2bc64ad2e4e1e1504e7a7c13(
    scope: Construct,
    id: builtins.str,
    *,
    expression: typing.Optional[IRosConditionExpression] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2ef9d8bbd99a6ab400cec2a3268734727521372a8f3dd11a561cbbfceaa382a(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__320a90f621af7519a0584bb43b35d213f2c135a2982b42bad6edb3d7ff01f842(
    value: typing.Optional[IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339c8731b33058714cd4c46bb12532db7cb165d85986335505599f486cb0e2e1(
    scope: Construct,
    id: builtins.str,
    *,
    mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2700068fd9ad29f35ddcdc8992b2ffd67e016c0cc7343a6e921126ab1927e842(
    key1: builtins.str,
    key2: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf0fe656246b94ac6fc706854b81700474ad2a9a16e4cb7a23e1b55588f7ec37(
    key1: builtins.str,
    key2: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass
