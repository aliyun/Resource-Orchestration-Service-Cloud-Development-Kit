'''
# `@alicloud/ros-cdk-cxapi`

> TODO: description

## Usage

```
const rosCxapi = require('@alicloud/ros-cdk-cxapi');

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

import ros_cdk_assembly_schema as _ros_cdk_assembly_schema_63fe2cdf


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.AliyunRosStackProperties",
    jsii_struct_bases=[],
    name_mapping={
        "template_file": "templateFile",
        "parameters": "parameters",
        "stack_name": "stackName",
    },
)
class AliyunRosStackProperties:
    def __init__(
        self,
        *,
        template_file: builtins.str,
        parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        stack_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Artifact properties for ROS stacks.

        :param template_file: A file relative to the assembly root which contains the ROS template for this stack.
        :param parameters: Values for ROS stack parameters that should be passed when the stack is deployed.
        :param stack_name: The name to use for the ROS stack. Default: - name derived from artifact ID
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c02ed7b56cc2e43438298ee3508e579a38f323bf81e58eb4f9fe4cb4bce823fe)
            check_type(argname="argument template_file", value=template_file, expected_type=type_hints["template_file"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument stack_name", value=stack_name, expected_type=type_hints["stack_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_file": template_file,
        }
        if parameters is not None:
            self._values["parameters"] = parameters
        if stack_name is not None:
            self._values["stack_name"] = stack_name

    @builtins.property
    def template_file(self) -> builtins.str:
        '''A file relative to the assembly root which contains the ROS template for this stack.'''
        result = self._values.get("template_file")
        assert result is not None, "Required property 'template_file' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def parameters(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Values for ROS stack parameters that should be passed when the stack is deployed.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def stack_name(self) -> typing.Optional[builtins.str]:
        '''The name to use for the ROS stack.

        :default: - name derived from artifact ID
        '''
        result = self._values.get("stack_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliyunRosStackProperties(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.AssemblyBuildOptions",
    jsii_struct_bases=[],
    name_mapping={"runtime_info": "runtimeInfo"},
)
class AssemblyBuildOptions:
    def __init__(
        self,
        *,
        runtime_info: typing.Optional[typing.Union["RuntimeInfo", typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included
        '''
        if isinstance(runtime_info, dict):
            runtime_info = RuntimeInfo(**runtime_info)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c428fbe5fd205eae0bef5974551be51b07e9a88490dedd6a67cf54448f1ce884)
            check_type(argname="argument runtime_info", value=runtime_info, expected_type=type_hints["runtime_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if runtime_info is not None:
            self._values["runtime_info"] = runtime_info

    @builtins.property
    def runtime_info(self) -> typing.Optional["RuntimeInfo"]:
        '''Include the specified runtime information (module versions) in manifest.

        :default: - if this option is not specified, runtime info will not be included
        '''
        result = self._values.get("runtime_info")
        return typing.cast(typing.Optional["RuntimeInfo"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssemblyBuildOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CloudArtifact(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.CloudArtifact",
):
    '''Represents an artifact within a cloud assembly.'''

    def __init__(
        self,
        assembly: "CloudAssembly",
        id: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''
        :param assembly: -
        :param id: -
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fd0b278a419cc7c82a8290aa9ee9ccbbf437c5b5d7134968e9e678dd089a5d0)
            check_type(argname="argument assembly", value=assembly, expected_type=type_hints["assembly"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        manifest = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        jsii.create(self.__class__, self, [assembly, id, manifest])

    @jsii.member(jsii_name="fromManifest")
    @builtins.classmethod
    def from_manifest(
        cls,
        assembly: "CloudAssembly",
        id: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> typing.Optional["CloudArtifact"]:
        '''Returns a subclass of ``CloudArtifact`` based on the artifact type defined in the artifact manifest.

        :param assembly: The cloud assembly from which to load the artifact.
        :param id: The artifact ID.
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.

        :return: the ``CloudArtifact`` that matches the artifact type or ``undefined`` if it's an artifact type that is unrecognized by this module.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be38acca09c6a3d4ac6cc76c6234c9a24041d73b92c27272b0a1b6e699dc1f27)
            check_type(argname="argument assembly", value=assembly, expected_type=type_hints["assembly"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        artifact = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        return typing.cast(typing.Optional["CloudArtifact"], jsii.sinvoke(cls, "fromManifest", [assembly, id, artifact]))

    @jsii.member(jsii_name="findMetadataByType")
    def find_metadata_by_type(
        self,
        type: builtins.str,
    ) -> typing.List["MetadataEntryResult"]:
        '''
        :param type: -

        :return: all the metadata entries of a specific type in this artifact.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8f2a3233d0b940b4d1131326fc03874d2dd78b2190cb926f12932641dedc71b)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        return typing.cast(typing.List["MetadataEntryResult"], jsii.invoke(self, "findMetadataByType", [type]))

    @builtins.property
    @jsii.member(jsii_name="assembly")
    def assembly(self) -> "CloudAssembly":
        return typing.cast("CloudAssembly", jsii.get(self, "assembly"))

    @builtins.property
    @jsii.member(jsii_name="id")
    def id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @builtins.property
    @jsii.member(jsii_name="manifest")
    def manifest(self) -> _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest:
        '''The artifact's manifest.'''
        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest, jsii.get(self, "manifest"))

    @builtins.property
    @jsii.member(jsii_name="messages")
    def messages(self) -> typing.List["SynthesisMessage"]:
        '''The set of messages extracted from the artifact's metadata.'''
        return typing.cast(typing.List["SynthesisMessage"], jsii.get(self, "messages"))

    @builtins.property
    @jsii.member(jsii_name="dependencies")
    def dependencies(self) -> typing.Optional[typing.List["CloudArtifact"]]:
        '''Returns all the artifacts that this artifact depends on.'''
        return typing.cast(typing.Optional[typing.List["CloudArtifact"]], jsii.get(self, "dependencies"))


class CloudAssembly(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.CloudAssembly",
):
    '''Represents a deployable cloud application.'''

    def __init__(self, directory: builtins.str) -> None:
        '''Reads a cloud assembly from the specified directory.

        :param directory: The root directory of the assembly.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fc32998cdaf053872836758c7fc414b91dd33adb0f551492b661dfb7cb9582a)
            check_type(argname="argument directory", value=directory, expected_type=type_hints["directory"])
        jsii.create(self.__class__, self, [directory])

    @jsii.member(jsii_name="getNestedAssembly")
    def get_nested_assembly(self, artifact_id: builtins.str) -> "CloudAssembly":
        '''Returns a nested assembly.

        :param artifact_id: The artifact ID of the nested assembly.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f72946b7befa08df80a014df5beeb1c4c4ead603501b0a383ea2a5f89865495)
            check_type(argname="argument artifact_id", value=artifact_id, expected_type=type_hints["artifact_id"])
        return typing.cast("CloudAssembly", jsii.invoke(self, "getNestedAssembly", [artifact_id]))

    @jsii.member(jsii_name="getNestedAssemblyArtifact")
    def get_nested_assembly_artifact(
        self,
        artifact_id: builtins.str,
    ) -> "NestedCloudAssemblyArtifact":
        '''Returns a nested assembly artifact.

        :param artifact_id: The artifact ID of the nested assembly.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f381a040192c6bc37553e4c5191411332ecd5f16170049db20de03fab74b507)
            check_type(argname="argument artifact_id", value=artifact_id, expected_type=type_hints["artifact_id"])
        return typing.cast("NestedCloudAssemblyArtifact", jsii.invoke(self, "getNestedAssemblyArtifact", [artifact_id]))

    @jsii.member(jsii_name="getStack")
    def get_stack(self, stack_name: builtins.str) -> "RosStackArtifact":
        '''Returns a ROS stack artifact by name from this assembly.

        Deprecated renamed to 'getStackByName' (or 'getStackArtifact(id)')

        :param stack_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ded5294193414eaa1d0f86c39f8c7ee2076958d3caf70331c05459880c74eeed)
            check_type(argname="argument stack_name", value=stack_name, expected_type=type_hints["stack_name"])
        return typing.cast("RosStackArtifact", jsii.invoke(self, "getStack", [stack_name]))

    @jsii.member(jsii_name="getStackArtifact")
    def get_stack_artifact(self, artifact_id: builtins.str) -> "RosStackArtifact":
        '''Returns a ROS stack artifact from this assembly.

        Param artifactId the artifact id of the stack (can be obtained through 'stack.artifactId').
        Throws if there is no stack artifact with that id
        Returns a 'RosStackArtifact' object.

        :param artifact_id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a5601e746b677b59fb0147c2712861e77db605cb365170c99f3dfe176b33327)
            check_type(argname="argument artifact_id", value=artifact_id, expected_type=type_hints["artifact_id"])
        return typing.cast("RosStackArtifact", jsii.invoke(self, "getStackArtifact", [artifact_id]))

    @jsii.member(jsii_name="getStackByName")
    def get_stack_by_name(self, stack_name: builtins.str) -> "RosStackArtifact":
        '''Returns a ROS stack artifact from this assembly.

        Will only search the current assembly.

        Param stackName the name of the ROS stack.
        Throws if there is no stack artifact by that name
        Throws if there is more than one stack with the same stack name. You can
        use 'getStackArtifact - stack.artifactId' instead.
        Returns a 'RosStackArtifact' object.

        :param stack_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eeb03f99fef00e1295a5f99ece1e08e0da66f513918a08f156c5e503c51915cd)
            check_type(argname="argument stack_name", value=stack_name, expected_type=type_hints["stack_name"])
        return typing.cast("RosStackArtifact", jsii.invoke(self, "getStackByName", [stack_name]))

    @jsii.member(jsii_name="tree")
    def tree(self) -> typing.Optional["TreeCloudArtifact"]:
        '''Returns the tree metadata artifact from this assembly.

        Throws if there is no metadata artifact by that name
        Returns a 'TreeCloudArtifact' object if there is one defined in the manifest, 'undefined' otherwise.
        '''
        return typing.cast(typing.Optional["TreeCloudArtifact"], jsii.invoke(self, "tree", []))

    @jsii.member(jsii_name="tryGetArtifact")
    def try_get_artifact(self, id: builtins.str) -> typing.Optional[CloudArtifact]:
        '''Attempts to find an artifact with a specific identity.

        Returns A 'CloudArtifact' object or 'undefined' if the artifact does not exist in this assembly.
        Param id The artifact ID

        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d7f16b827e7384c7db89d5c67b9026edf7de88a522a9504d732d134d19d7977)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        return typing.cast(typing.Optional[CloudArtifact], jsii.invoke(self, "tryGetArtifact", [id]))

    @builtins.property
    @jsii.member(jsii_name="artifacts")
    def artifacts(self) -> typing.List[CloudArtifact]:
        '''All artifacts included in this assembly.'''
        return typing.cast(typing.List[CloudArtifact], jsii.get(self, "artifacts"))

    @builtins.property
    @jsii.member(jsii_name="directory")
    def directory(self) -> builtins.str:
        '''The root directory of the cloud assembly.'''
        return typing.cast(builtins.str, jsii.get(self, "directory"))

    @builtins.property
    @jsii.member(jsii_name="manifest")
    def manifest(self) -> _ros_cdk_assembly_schema_63fe2cdf.AssemblyManifest:
        '''The raw assembly manifest.'''
        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.AssemblyManifest, jsii.get(self, "manifest"))

    @builtins.property
    @jsii.member(jsii_name="runtime")
    def runtime(self) -> _ros_cdk_assembly_schema_63fe2cdf.RuntimeInfo:
        '''Runtime information such as module versions used to synthesize this assembly.'''
        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.RuntimeInfo, jsii.get(self, "runtime"))

    @builtins.property
    @jsii.member(jsii_name="stacks")
    def stacks(self) -> typing.List["RosStackArtifact"]:
        '''
        :return: all the ROS stack artifacts that are included in this assembly.
        '''
        return typing.cast(typing.List["RosStackArtifact"], jsii.get(self, "stacks"))

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> builtins.str:
        '''The schema version of the assembly manifest.'''
        return typing.cast(builtins.str, jsii.get(self, "version"))


class CloudAssemblyBuilder(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder",
):
    '''Can be used to build a cloud assembly.'''

    def __init__(self, outdir: typing.Optional[builtins.str] = None) -> None:
        '''Initializes a cloud assembly builder.

        :param outdir: The output directory, uses temporary directory if undefined.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75737a474095421951968fdd1fc84e47e73502fca3a5d0e733a24a707b927fef)
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
        jsii.create(self.__class__, self, [outdir])

    @jsii.member(jsii_name="addArtifact")
    def add_artifact(
        self,
        id: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Adds an artifact into the cloud assembly.

        :param id: The ID of the artifact.
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37c58bea2c2cfc78a9e7a865d93058b291dc4d0394532dc0fe2f7dd1ca4de3a3)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        manifest = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        return typing.cast(None, jsii.invoke(self, "addArtifact", [id, manifest]))

    @jsii.member(jsii_name="addMissing")
    def add_missing(
        self,
        *,
        key: builtins.str,
        props: typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AmiContextQuery, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AvailabilityZonesContextQuery, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.HostedZoneContextQuery, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.SSMParameterContextQuery, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.VpcContextQuery, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.EndpointServiceAvailabilityZonesContextQuery, typing.Dict[builtins.str, typing.Any]]],
        provider: _ros_cdk_assembly_schema_63fe2cdf.ContextProvider,
    ) -> None:
        '''Reports that some context is missing in order for this cloud assembly to be fully synthesized.

        :param key: The missing context key.
        :param props: A set of provider-specific options.
        :param provider: The provider from which we expect this context key to be obtained.
        '''
        missing = _ros_cdk_assembly_schema_63fe2cdf.MissingContext(
            key=key, props=props, provider=provider
        )

        return typing.cast(None, jsii.invoke(self, "addMissing", [missing]))

    @jsii.member(jsii_name="buildAssembly")
    def build_assembly(
        self,
        *,
        runtime_info: typing.Optional[typing.Union["RuntimeInfo", typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> CloudAssembly:
        '''Finalizes the cloud assembly into the output directory returns a 'CloudAssembly' object that can be used to inspect the assembly.

        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included
        '''
        options = AssemblyBuildOptions(runtime_info=runtime_info)

        return typing.cast(CloudAssembly, jsii.invoke(self, "buildAssembly", [options]))

    @jsii.member(jsii_name="createNestedAssembly")
    def create_nested_assembly(
        self,
        artifact_id: builtins.str,
        display_name: builtins.str,
    ) -> "CloudAssemblyBuilder":
        '''Creates a nested cloud assembly.

        :param artifact_id: -
        :param display_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19e5e6e20d5f256f412a8fe0e0d60a4dafe9cb8b5bc81e152ff0f4d9029db1c0)
            check_type(argname="argument artifact_id", value=artifact_id, expected_type=type_hints["artifact_id"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        return typing.cast("CloudAssemblyBuilder", jsii.invoke(self, "createNestedAssembly", [artifact_id, display_name]))

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The root directory of the resulting cloud assembly.'''
        return typing.cast(builtins.str, jsii.get(self, "outdir"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.MetadataEntry",
    jsii_struct_bases=[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry],
    name_mapping={"type": "type", "data": "data", "trace": "trace"},
)
class MetadataEntry(_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry):
    def __init__(
        self,
        *,
        type: builtins.str,
        data: typing.Optional[typing.Union[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.Tag, typing.Dict[builtins.str, typing.Any]]]]] = None,
        trace: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> None:
        '''(deprecated) Backwards compatibility for when 'MetadataEntry' was defined here.

        This is necessary because its used as an input in the stable

        :param type: The type of the metadata entry.
        :param data: The data. Default: - no data.
        :param trace: A stack trace for when the entry was created. Default: - no trace.

        :deprecated: moved to package 'ros-assembly-schema'

        :see: core.ConstructNode.metadata
        :stability: deprecated
        :alicloud: /ros-cdk-core library.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7da05f7944577a8db92b5dbb13556d9742f74b4771deeb411f0f697323831715)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument trace", value=trace, expected_type=type_hints["trace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
        }
        if data is not None:
            self._values["data"] = data
        if trace is not None:
            self._values["trace"] = trace

    @builtins.property
    def type(self) -> builtins.str:
        '''The type of the metadata entry.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.List[_ros_cdk_assembly_schema_63fe2cdf.Tag]]]:
        '''The data.

        :default: - no data.
        '''
        result = self._values.get("data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.List[_ros_cdk_assembly_schema_63fe2cdf.Tag]]], result)

    @builtins.property
    def trace(self) -> typing.Optional[typing.List[builtins.str]]:
        '''A stack trace for when the entry was created.

        :default: - no trace.
        '''
        result = self._values.get("trace")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetadataEntry(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.MetadataEntryResult",
    jsii_struct_bases=[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry],
    name_mapping={"type": "type", "data": "data", "trace": "trace", "path": "path"},
)
class MetadataEntryResult(_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry):
    def __init__(
        self,
        *,
        type: builtins.str,
        data: typing.Optional[typing.Union[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.Tag, typing.Dict[builtins.str, typing.Any]]]]] = None,
        trace: typing.Optional[typing.Sequence[builtins.str]] = None,
        path: builtins.str,
    ) -> None:
        '''
        :param type: The type of the metadata entry.
        :param data: The data. Default: - no data.
        :param trace: A stack trace for when the entry was created. Default: - no trace.
        :param path: The path in which this entry was defined.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74f95e884ce76eab45ca5e38eea872e53d87ffb47aa5b58460065832a9164559)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument trace", value=trace, expected_type=type_hints["trace"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
            "path": path,
        }
        if data is not None:
            self._values["data"] = data
        if trace is not None:
            self._values["trace"] = trace

    @builtins.property
    def type(self) -> builtins.str:
        '''The type of the metadata entry.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.List[_ros_cdk_assembly_schema_63fe2cdf.Tag]]]:
        '''The data.

        :default: - no data.
        '''
        result = self._values.get("data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.List[_ros_cdk_assembly_schema_63fe2cdf.Tag]]], result)

    @builtins.property
    def trace(self) -> typing.Optional[typing.List[builtins.str]]:
        '''A stack trace for when the entry was created.

        :default: - no trace.
        '''
        result = self._values.get("trace")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def path(self) -> builtins.str:
        '''The path in which this entry was defined.'''
        result = self._values.get("path")
        assert result is not None, "Required property 'path' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetadataEntryResult(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.MissingContext",
    jsii_struct_bases=[],
    name_mapping={"key": "key", "props": "props", "provider": "provider"},
)
class MissingContext:
    def __init__(
        self,
        *,
        key: builtins.str,
        props: typing.Mapping[builtins.str, typing.Any],
        provider: builtins.str,
    ) -> None:
        '''(deprecated) Backwards compatibility for when 'MissingContext' was defined here.

        This is necessary because its used as an input in the stable

        :param key: (deprecated) The missing context key.
        :param props: (deprecated) A set of provider-specific options. (This is the old untyped definition, which is necessary for backwards compatibility. See cxschema for a type definition.)
        :param provider: (deprecated) The provider from which we expect this context key to be obtained. (This is the old untyped definition, which is necessary for backwards compatibility. See cxschema for a type definition.)

        :deprecated: moved to package 'ros-assembly-schema'

        :see: core.Stack.reportMissingContext
        :stability: deprecated
        :alicloud: /ros-cdk-core library.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__119f56e5e0f5a649eab50e526b8d2d6b09d418768278604c5cbad5a9e608d765)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument provider", value=provider, expected_type=type_hints["provider"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key": key,
            "props": props,
            "provider": provider,
        }

    @builtins.property
    def key(self) -> builtins.str:
        '''(deprecated) The missing context key.

        :stability: deprecated
        '''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def props(self) -> typing.Mapping[builtins.str, typing.Any]:
        '''(deprecated) A set of provider-specific options.

        (This is the old untyped definition, which is necessary for backwards compatibility.
        See cxschema for a type definition.)

        :stability: deprecated
        '''
        result = self._values.get("props")
        assert result is not None, "Required property 'props' is missing"
        return typing.cast(typing.Mapping[builtins.str, typing.Any], result)

    @builtins.property
    def provider(self) -> builtins.str:
        '''(deprecated) The provider from which we expect this context key to be obtained.

        (This is the old untyped definition, which is necessary for backwards compatibility.
        See cxschema for a type definition.)

        :stability: deprecated
        '''
        result = self._values.get("provider")
        assert result is not None, "Required property 'provider' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MissingContext(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NestedCloudAssemblyArtifact(
    CloudArtifact,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact",
):
    '''Asset manifest is a description of a set of assets which need to be built and published.'''

    def __init__(
        self,
        assembly: CloudAssembly,
        name: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''
        :param assembly: -
        :param name: -
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980fec3b47bb5d0e76aec285ce93492b22654f56c0ae965b06c0d23e34307565)
            check_type(argname="argument assembly", value=assembly, expected_type=type_hints["assembly"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        artifact = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        jsii.create(self.__class__, self, [assembly, name, artifact])

    @builtins.property
    @jsii.member(jsii_name="directoryName")
    def directory_name(self) -> builtins.str:
        '''The relative directory name of the asset manifest.'''
        return typing.cast(builtins.str, jsii.get(self, "directoryName"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        '''Display name.'''
        return typing.cast(builtins.str, jsii.get(self, "displayName"))

    @builtins.property
    @jsii.member(jsii_name="fullPath")
    def full_path(self) -> builtins.str:
        '''Full path to the nested assembly directory.'''
        return typing.cast(builtins.str, jsii.get(self, "fullPath"))

    @builtins.property
    @jsii.member(jsii_name="nestedAssembly")
    def nested_assembly(self) -> CloudAssembly:
        '''The nested Assembly.'''
        return typing.cast(CloudAssembly, jsii.get(self, "nestedAssembly"))


class RosStackArtifact(
    CloudArtifact,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.RosStackArtifact",
):
    def __init__(
        self,
        assembly: CloudAssembly,
        artifact_id: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''
        :param assembly: -
        :param artifact_id: -
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b1e2e9874ff423089b54d266f1b6b305028045d5dce84f26a3286f13d694ef6)
            check_type(argname="argument assembly", value=assembly, expected_type=type_hints["assembly"])
            check_type(argname="argument artifact_id", value=artifact_id, expected_type=type_hints["artifact_id"])
        artifact = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        jsii.create(self.__class__, self, [assembly, artifact_id, artifact])

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        '''A string that represents this stack.

        Should only be used in user interfaces.
        If the stackName and artifactId are the same, it will just return that. Otherwise,
        it will return something like " ()"
        '''
        return typing.cast(builtins.str, jsii.get(self, "displayName"))

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        '''(deprecated) The physical name of this stack.

        :deprecated: renamed to ``stackName``

        :stability: deprecated
        '''
        return typing.cast(builtins.str, jsii.get(self, "name"))

    @builtins.property
    @jsii.member(jsii_name="originalName")
    def original_name(self) -> builtins.str:
        '''The original name as defined in the CDK app.'''
        return typing.cast(builtins.str, jsii.get(self, "originalName"))

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(self) -> typing.Mapping[builtins.str, builtins.str]:
        '''ROS parameters to pass to the stack.'''
        return typing.cast(typing.Mapping[builtins.str, builtins.str], jsii.get(self, "parameters"))

    @builtins.property
    @jsii.member(jsii_name="stackName")
    def stack_name(self) -> builtins.str:
        '''The physical name of this stack.'''
        return typing.cast(builtins.str, jsii.get(self, "stackName"))

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Any:
        return typing.cast(typing.Any, jsii.get(self, "tags"))

    @builtins.property
    @jsii.member(jsii_name="template")
    def template(self) -> typing.Any:
        '''The ROS template for this stack.'''
        return typing.cast(typing.Any, jsii.get(self, "template"))

    @builtins.property
    @jsii.member(jsii_name="templateFile")
    def template_file(self) -> builtins.str:
        '''The file name of the template.'''
        return typing.cast(builtins.str, jsii.get(self, "templateFile"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.RuntimeInfo",
    jsii_struct_bases=[_ros_cdk_assembly_schema_63fe2cdf.RuntimeInfo],
    name_mapping={"libraries": "libraries"},
)
class RuntimeInfo(_ros_cdk_assembly_schema_63fe2cdf.RuntimeInfo):
    def __init__(
        self,
        *,
        libraries: typing.Mapping[builtins.str, builtins.str],
    ) -> None:
        '''(deprecated) Backwards compatibility for when 'RuntimeInfo' was defined here.

        This is necessary because its used as an input in the stable

        :param libraries: The list of libraries loaded in the application, associated with their versions.

        :deprecated: moved to package 'ros-assembly-schema'

        :see: core.ConstructNode.synth
        :stability: deprecated
        :alicloud: /ros-cdk-core library.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7c7ce3d847d7562d19e05aef24620874c5b871196174139f16553b6f3278590)
            check_type(argname="argument libraries", value=libraries, expected_type=type_hints["libraries"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "libraries": libraries,
        }

    @builtins.property
    def libraries(self) -> typing.Mapping[builtins.str, builtins.str]:
        '''The list of libraries loaded in the application, associated with their versions.'''
        result = self._values.get("libraries")
        assert result is not None, "Required property 'libraries' is missing"
        return typing.cast(typing.Mapping[builtins.str, builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuntimeInfo(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cxapi.SynthesisMessage",
    jsii_struct_bases=[],
    name_mapping={"entry": "entry", "id": "id", "level": "level"},
)
class SynthesisMessage:
    def __init__(
        self,
        *,
        entry: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]],
        id: builtins.str,
        level: "SynthesisMessageLevel",
    ) -> None:
        '''
        :param entry: -
        :param id: -
        :param level: -
        '''
        if isinstance(entry, dict):
            entry = _ros_cdk_assembly_schema_63fe2cdf.MetadataEntry(**entry)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9585640b1217a9eeda7edf01f3a252bddc38603523313be361abe48f810ab155)
            check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument level", value=level, expected_type=type_hints["level"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "entry": entry,
            "id": id,
            "level": level,
        }

    @builtins.property
    def entry(self) -> _ros_cdk_assembly_schema_63fe2cdf.MetadataEntry:
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return typing.cast(_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, result)

    @builtins.property
    def id(self) -> builtins.str:
        result = self._values.get("id")
        assert result is not None, "Required property 'id' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def level(self) -> "SynthesisMessageLevel":
        result = self._values.get("level")
        assert result is not None, "Required property 'level' is missing"
        return typing.cast("SynthesisMessageLevel", result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynthesisMessage(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-cxapi.SynthesisMessageLevel")
class SynthesisMessageLevel(enum.Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


class TreeCloudArtifact(
    CloudArtifact,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cxapi.TreeCloudArtifact",
):
    def __init__(
        self,
        assembly: CloudAssembly,
        name: builtins.str,
        *,
        type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
        properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''
        :param assembly: -
        :param name: -
        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8817b7cbf6cd51228f8ae6b5c4b8e9d2f166df1f66a32bea6dc2b6f738720e1f)
            check_type(argname="argument assembly", value=assembly, expected_type=type_hints["assembly"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        artifact = _ros_cdk_assembly_schema_63fe2cdf.ArtifactManifest(
            type=type,
            dependencies=dependencies,
            metadata=metadata,
            properties=properties,
        )

        jsii.create(self.__class__, self, [assembly, name, artifact])

    @builtins.property
    @jsii.member(jsii_name="file")
    def file(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "file"))


__all__ = [
    "AliyunRosStackProperties",
    "AssemblyBuildOptions",
    "CloudArtifact",
    "CloudAssembly",
    "CloudAssemblyBuilder",
    "MetadataEntry",
    "MetadataEntryResult",
    "MissingContext",
    "NestedCloudAssemblyArtifact",
    "RosStackArtifact",
    "RuntimeInfo",
    "SynthesisMessage",
    "SynthesisMessageLevel",
    "TreeCloudArtifact",
]

publication.publish()

def _typecheckingstub__c02ed7b56cc2e43438298ee3508e579a38f323bf81e58eb4f9fe4cb4bce823fe(
    *,
    template_file: builtins.str,
    parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    stack_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c428fbe5fd205eae0bef5974551be51b07e9a88490dedd6a67cf54448f1ce884(
    *,
    runtime_info: typing.Optional[typing.Union[RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fd0b278a419cc7c82a8290aa9ee9ccbbf437c5b5d7134968e9e678dd089a5d0(
    assembly: CloudAssembly,
    id: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be38acca09c6a3d4ac6cc76c6234c9a24041d73b92c27272b0a1b6e699dc1f27(
    assembly: CloudAssembly,
    id: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8f2a3233d0b940b4d1131326fc03874d2dd78b2190cb926f12932641dedc71b(
    type: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fc32998cdaf053872836758c7fc414b91dd33adb0f551492b661dfb7cb9582a(
    directory: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f72946b7befa08df80a014df5beeb1c4c4ead603501b0a383ea2a5f89865495(
    artifact_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f381a040192c6bc37553e4c5191411332ecd5f16170049db20de03fab74b507(
    artifact_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ded5294193414eaa1d0f86c39f8c7ee2076958d3caf70331c05459880c74eeed(
    stack_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a5601e746b677b59fb0147c2712861e77db605cb365170c99f3dfe176b33327(
    artifact_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eeb03f99fef00e1295a5f99ece1e08e0da66f513918a08f156c5e503c51915cd(
    stack_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d7f16b827e7384c7db89d5c67b9026edf7de88a522a9504d732d134d19d7977(
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75737a474095421951968fdd1fc84e47e73502fca3a5d0e733a24a707b927fef(
    outdir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37c58bea2c2cfc78a9e7a865d93058b291dc4d0394532dc0fe2f7dd1ca4de3a3(
    id: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19e5e6e20d5f256f412a8fe0e0d60a4dafe9cb8b5bc81e152ff0f4d9029db1c0(
    artifact_id: builtins.str,
    display_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7da05f7944577a8db92b5dbb13556d9742f74b4771deeb411f0f697323831715(
    *,
    type: builtins.str,
    data: typing.Optional[typing.Union[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.Tag, typing.Dict[builtins.str, typing.Any]]]]] = None,
    trace: typing.Optional[typing.Sequence[builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74f95e884ce76eab45ca5e38eea872e53d87ffb47aa5b58460065832a9164559(
    *,
    type: builtins.str,
    data: typing.Optional[typing.Union[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.Tag, typing.Dict[builtins.str, typing.Any]]]]] = None,
    trace: typing.Optional[typing.Sequence[builtins.str]] = None,
    path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__119f56e5e0f5a649eab50e526b8d2d6b09d418768278604c5cbad5a9e608d765(
    *,
    key: builtins.str,
    props: typing.Mapping[builtins.str, typing.Any],
    provider: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980fec3b47bb5d0e76aec285ce93492b22654f56c0ae965b06c0d23e34307565(
    assembly: CloudAssembly,
    name: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b1e2e9874ff423089b54d266f1b6b305028045d5dce84f26a3286f13d694ef6(
    assembly: CloudAssembly,
    artifact_id: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7c7ce3d847d7562d19e05aef24620874c5b871196174139f16553b6f3278590(
    *,
    libraries: typing.Mapping[builtins.str, builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9585640b1217a9eeda7edf01f3a252bddc38603523313be361abe48f810ab155(
    *,
    entry: typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]],
    id: builtins.str,
    level: SynthesisMessageLevel,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8817b7cbf6cd51228f8ae6b5c4b8e9d2f166df1f66a32bea6dc2b6f738720e1f(
    assembly: CloudAssembly,
    name: builtins.str,
    *,
    type: _ros_cdk_assembly_schema_63fe2cdf.ArtifactType,
    dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.MetadataEntry, typing.Dict[builtins.str, typing.Any]]]]] = None,
    properties: typing.Optional[typing.Union[typing.Union[_ros_cdk_assembly_schema_63fe2cdf.AliyunRosStackProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.TreeArtifactProperties, typing.Dict[builtins.str, typing.Any]], typing.Union[_ros_cdk_assembly_schema_63fe2cdf.NestedCloudAssemblyProperties, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
