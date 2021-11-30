'''
# `@alicloud/ros-cdk-assembly-schema`

> TODO: description

## Usage

```
const rosAssemblySchema = require('@alicloud/ros-cdk-assembly-schema');

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

from ._jsii import *


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties",
    jsii_struct_bases=[],
    name_mapping={
        "template_file": "templateFile",
        "parameters": "parameters",
        "stack_name": "stackName",
        "tags": "tags",
    },
)
class AliyunRosStackProperties:
    def __init__(
        self,
        *,
        template_file: builtins.str,
        parameters: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        stack_name: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    ) -> None:
        '''Artifact properties for ROS stacks.

        :param template_file: A file relative to the assembly root which contains the ROS template for this stack.
        :param parameters: Values for ROS stack parameters that should be passed when the stack is deployed. Default: - No parameters
        :param stack_name: The name to use for the ROS stack. Default: - name derived from artifact ID
        :param tags: Values for ROS stack tags that should be passed when the stack is deployed. Default: - No tags
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "template_file": template_file,
        }
        if parameters is not None:
            self._values["parameters"] = parameters
        if stack_name is not None:
            self._values["stack_name"] = stack_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def template_file(self) -> builtins.str:
        '''A file relative to the assembly root which contains the ROS template for this stack.'''
        result = self._values.get("template_file")
        assert result is not None, "Required property 'template_file' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def parameters(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Values for ROS stack parameters that should be passed when the stack is deployed.

        :default: - No parameters
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def stack_name(self) -> typing.Optional[builtins.str]:
        '''The name to use for the ROS stack.

        :default: - name derived from artifact ID
        '''
        result = self._values.get("stack_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Values for ROS stack tags that should be passed when the stack is deployed.

        :default: - No tags
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliyunRosStackProperties(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.AmiContextQuery",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "filters": "filters",
        "region": "region",
        "owners": "owners",
    },
)
class AmiContextQuery:
    def __init__(
        self,
        *,
        account: builtins.str,
        filters: typing.Mapping[builtins.str, typing.Sequence[builtins.str]],
        region: builtins.str,
        owners: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> None:
        '''Query to AMI context provider.

        :param account: Account to query.
        :param filters: Filters to DescribeImages call.
        :param region: Region to query.
        :param owners: Owners to DescribeImages call. Default: - All owners
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "filters": filters,
            "region": region,
        }
        if owners is not None:
            self._values["owners"] = owners

    @builtins.property
    def account(self) -> builtins.str:
        '''Account to query.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def filters(self) -> typing.Mapping[builtins.str, typing.List[builtins.str]]:
        '''Filters to DescribeImages call.'''
        result = self._values.get("filters")
        assert result is not None, "Required property 'filters' is missing"
        return typing.cast(typing.Mapping[builtins.str, typing.List[builtins.str]], result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Region to query.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def owners(self) -> typing.Optional[typing.List[builtins.str]]:
        '''Owners to DescribeImages call.

        :default: - All owners
        '''
        result = self._values.get("owners")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AmiContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.ArtifactManifest",
    jsii_struct_bases=[],
    name_mapping={
        "type": "type",
        "dependencies": "dependencies",
        "metadata": "metadata",
        "properties": "properties",
    },
)
class ArtifactManifest:
    def __init__(
        self,
        *,
        type: "ArtifactType",
        dependencies: typing.Optional[typing.Sequence[builtins.str]] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Sequence["MetadataEntry"]]] = None,
        properties: typing.Optional[typing.Union[AliyunRosStackProperties, "TreeArtifactProperties", "NestedCloudAssemblyProperties"]] = None,
    ) -> None:
        '''A manifest for a single artifact within the cloud assembly.

        :param type: The type of artifact.
        :param dependencies: IDs of artifacts that must be deployed before this artifact. Default: - no dependencies.
        :param metadata: Associated metadata. Default: - no metadata.
        :param properties: The set of properties for this artifact (depends on type). Default: - no properties.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "type": type,
        }
        if dependencies is not None:
            self._values["dependencies"] = dependencies
        if metadata is not None:
            self._values["metadata"] = metadata
        if properties is not None:
            self._values["properties"] = properties

    @builtins.property
    def type(self) -> "ArtifactType":
        '''The type of artifact.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast("ArtifactType", result)

    @builtins.property
    def dependencies(self) -> typing.Optional[typing.List[builtins.str]]:
        '''IDs of artifacts that must be deployed before this artifact.

        :default: - no dependencies.
        '''
        result = self._values.get("dependencies")
        return typing.cast(typing.Optional[typing.List[builtins.str]], result)

    @builtins.property
    def metadata(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, typing.List["MetadataEntry"]]]:
        '''Associated metadata.

        :default: - no metadata.
        '''
        result = self._values.get("metadata")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.List["MetadataEntry"]]], result)

    @builtins.property
    def properties(
        self,
    ) -> typing.Optional[typing.Union[AliyunRosStackProperties, "TreeArtifactProperties", "NestedCloudAssemblyProperties"]]:
        '''The set of properties for this artifact (depends on type).

        :default: - no properties.
        '''
        result = self._values.get("properties")
        return typing.cast(typing.Optional[typing.Union[AliyunRosStackProperties, "TreeArtifactProperties", "NestedCloudAssemblyProperties"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ArtifactManifest(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-assembly-schema.ArtifactMetadataEntryType")
class ArtifactMetadataEntryType(enum.Enum):
    '''Type of artifact metadata entry.'''

    INFO = "INFO"
    '''Metadata key used to print INFO-level messages by the toolkit when an app is syntheized.'''
    WARN = "WARN"
    '''Metadata key used to print WARNING-level messages by the toolkit when an app is syntheized.'''
    ERROR = "ERROR"
    '''Metadata key used to print ERROR-level messages by the toolkit when an app is syntheized.'''
    LOGICAL_ID = "LOGICAL_ID"
    '''Represents the ROS logical ID of a resource at a certain path.'''
    STACK_TAGS = "STACK_TAGS"
    '''Represents tags of a stack.'''


@jsii.enum(jsii_type="@alicloud/ros-cdk-assembly-schema.ArtifactType")
class ArtifactType(enum.Enum):
    '''Type of cloud artifact.'''

    NONE = "NONE"
    '''Stub required because of JSII.'''
    ALIYUN_ROS_STACK = "ALIYUN_ROS_STACK"
    '''The artifact is an ROS stack.'''
    CDK_TREE = "CDK_TREE"
    '''The artifact contains the CDK application's construct tree.'''
    ASSET_MANIFEST = "ASSET_MANIFEST"
    '''Manifest for all assets in the Cloud Assembly.'''
    NESTED_CLOUD_ASSEMBLY = "NESTED_CLOUD_ASSEMBLY"
    '''Nested Cloud Assembly.'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.AssemblyManifest",
    jsii_struct_bases=[],
    name_mapping={
        "version": "version",
        "artifacts": "artifacts",
        "missing": "missing",
        "runtime": "runtime",
    },
)
class AssemblyManifest:
    def __init__(
        self,
        *,
        version: builtins.str,
        artifacts: typing.Optional[typing.Mapping[builtins.str, ArtifactManifest]] = None,
        missing: typing.Optional[typing.Sequence["MissingContext"]] = None,
        runtime: typing.Optional["RuntimeInfo"] = None,
    ) -> None:
        '''A manifest which describes the cloud assembly.

        :param version: Protocol version.
        :param artifacts: The set of artifacts in this assembly. Default: - no artifacts.
        :param missing: Missing context information. If this field has values, it means that the cloud assembly is not complete and should not be deployed. Default: - no missing context.
        :param runtime: Runtime information. Default: - no info.
        '''
        if isinstance(runtime, dict):
            runtime = RuntimeInfo(**runtime)
        self._values: typing.Dict[str, typing.Any] = {
            "version": version,
        }
        if artifacts is not None:
            self._values["artifacts"] = artifacts
        if missing is not None:
            self._values["missing"] = missing
        if runtime is not None:
            self._values["runtime"] = runtime

    @builtins.property
    def version(self) -> builtins.str:
        '''Protocol version.'''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def artifacts(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, ArtifactManifest]]:
        '''The set of artifacts in this assembly.

        :default: - no artifacts.
        '''
        result = self._values.get("artifacts")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, ArtifactManifest]], result)

    @builtins.property
    def missing(self) -> typing.Optional[typing.List["MissingContext"]]:
        '''Missing context information.

        If this field has values, it means that the
        cloud assembly is not complete and should not be deployed.

        :default: - no missing context.
        '''
        result = self._values.get("missing")
        return typing.cast(typing.Optional[typing.List["MissingContext"]], result)

    @builtins.property
    def runtime(self) -> typing.Optional["RuntimeInfo"]:
        '''Runtime information.

        :default: - no info.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional["RuntimeInfo"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AssemblyManifest(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery",
    jsii_struct_bases=[],
    name_mapping={"account": "account", "region": "region"},
)
class AvailabilityZonesContextQuery:
    def __init__(self, *, account: builtins.str, region: builtins.str) -> None:
        '''Query to availability zone context provider.

        :param account: Query account.
        :param region: Query region.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "region": region,
        }

    @builtins.property
    def account(self) -> builtins.str:
        '''Query account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Query region.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AvailabilityZonesContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-assembly-schema.ContextProvider")
class ContextProvider(enum.Enum):
    '''Identifier for the context provider.'''

    AMI_PROVIDER = "AMI_PROVIDER"
    '''AMI provider.'''
    AVAILABILITY_ZONE_PROVIDER = "AVAILABILITY_ZONE_PROVIDER"
    '''AZ provider.'''
    HOSTED_ZONE_PROVIDER = "HOSTED_ZONE_PROVIDER"
    '''Route53 Hosted Zone provider.'''
    SSM_PARAMETER_PROVIDER = "SSM_PARAMETER_PROVIDER"
    '''SSM Parameter Provider.'''
    VPC_PROVIDER = "VPC_PROVIDER"
    '''VPC Provider.'''
    ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER = "ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER"
    '''VPC Endpoint Service AZ Provider.'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "region": "region",
        "service_name": "serviceName",
    },
)
class EndpointServiceAvailabilityZonesContextQuery:
    def __init__(
        self,
        *,
        account: builtins.str,
        region: builtins.str,
        service_name: builtins.str,
    ) -> None:
        '''Query to endpoint service context provider.

        :param account: Query account.
        :param region: Query region.
        :param service_name: Query service name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "region": region,
            "service_name": service_name,
        }

    @builtins.property
    def account(self) -> builtins.str:
        '''Query account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Query region.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def service_name(self) -> builtins.str:
        '''Query service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EndpointServiceAvailabilityZonesContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "domain_name": "domainName",
        "region": "region",
        "private_zone": "privateZone",
        "vpc_id": "vpcId",
    },
)
class HostedZoneContextQuery:
    def __init__(
        self,
        *,
        account: builtins.str,
        domain_name: builtins.str,
        region: builtins.str,
        private_zone: typing.Optional[builtins.bool] = None,
        vpc_id: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Query to hosted zone context provider.

        :param account: Query account.
        :param domain_name: The domain name e.g. example.com to lookup.
        :param region: Query region.
        :param private_zone: True if the zone you want to find is a private hosted zone. Default: false
        :param vpc_id: The VPC ID to that the private zone must be associated with. If you provide VPC ID and privateZone is false, this will return no results and raise an error. Default: - Required if privateZone=true
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "domain_name": domain_name,
            "region": region,
        }
        if private_zone is not None:
            self._values["private_zone"] = private_zone
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def account(self) -> builtins.str:
        '''Query account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def domain_name(self) -> builtins.str:
        '''The domain name e.g. example.com to lookup.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Query region.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def private_zone(self) -> typing.Optional[builtins.bool]:
        '''True if the zone you want to find is a private hosted zone.

        :default: false
        '''
        result = self._values.get("private_zone")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        '''The VPC ID to that the private zone must be associated with.

        If you provide VPC ID and privateZone is false, this will return no results
        and raise an error.

        :default: - Required if privateZone=true
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostedZoneContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Manifest(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-assembly-schema.Manifest",
):
    '''Protocol utility class.'''

    @jsii.member(jsii_name="load") # type: ignore[misc]
    @builtins.classmethod
    def load(cls, file_path: builtins.str) -> AssemblyManifest:
        '''(deprecated) Deprecated.

        :param file_path: -

        :deprecated: use ``loadAssemblyManifest()``

        :stability: deprecated
        '''
        return typing.cast(AssemblyManifest, jsii.sinvoke(cls, "load", [file_path]))

    @jsii.member(jsii_name="loadAssemblyManifest") # type: ignore[misc]
    @builtins.classmethod
    def load_assembly_manifest(cls, file_path: builtins.str) -> AssemblyManifest:
        '''Load and validates the cloud assembly manifest from file.

        :param file_path: - path to the manifest file.
        '''
        return typing.cast(AssemblyManifest, jsii.sinvoke(cls, "loadAssemblyManifest", [file_path]))

    @jsii.member(jsii_name="save") # type: ignore[misc]
    @builtins.classmethod
    def save(cls, manifest: AssemblyManifest, file_path: builtins.str) -> None:
        '''(deprecated) Deprecated.

        :param manifest: -
        :param file_path: -

        :deprecated: use ``saveAssemblyManifest()``

        :stability: deprecated
        '''
        return typing.cast(None, jsii.sinvoke(cls, "save", [manifest, file_path]))

    @jsii.member(jsii_name="saveAssemblyManifest") # type: ignore[misc]
    @builtins.classmethod
    def save_assembly_manifest(
        cls,
        manifest: AssemblyManifest,
        file_path: builtins.str,
    ) -> None:
        '''Validates and saves the cloud assembly manifest to file.

        :param manifest: - manifest.
        :param file_path: - output file path.
        '''
        return typing.cast(None, jsii.sinvoke(cls, "saveAssemblyManifest", [manifest, file_path]))

    @jsii.member(jsii_name="version") # type: ignore[misc]
    @builtins.classmethod
    def version(cls) -> builtins.str:
        '''Fetch the current schema version number.'''
        return typing.cast(builtins.str, jsii.sinvoke(cls, "version", []))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.MetadataEntry",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "data": "data", "trace": "trace"},
)
class MetadataEntry:
    def __init__(
        self,
        *,
        type: builtins.str,
        data: typing.Optional[typing.Union[builtins.str, typing.Sequence["Tag"]]] = None,
        trace: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> None:
        '''A metadata entry in a cloud assembly artifact.

        :param type: The type of the metadata entry.
        :param data: The data. Default: - no data.
        :param trace: A stack trace for when the entry was created. Default: - no trace.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def data(self) -> typing.Optional[typing.Union[builtins.str, typing.List["Tag"]]]:
        '''The data.

        :default: - no data.
        '''
        result = self._values.get("data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.List["Tag"]]], result)

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
    jsii_type="@alicloud/ros-cdk-assembly-schema.MissingContext",
    jsii_struct_bases=[],
    name_mapping={"key": "key", "props": "props", "provider": "provider"},
)
class MissingContext:
    def __init__(
        self,
        *,
        key: builtins.str,
        props: typing.Union[AmiContextQuery, AvailabilityZonesContextQuery, HostedZoneContextQuery, "SSMParameterContextQuery", "VpcContextQuery", EndpointServiceAvailabilityZonesContextQuery],
        provider: ContextProvider,
    ) -> None:
        '''Represents a missing piece of context.

        :param key: The missing context key.
        :param props: A set of provider-specific options.
        :param provider: The provider from which we expect this context key to be obtained.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "key": key,
            "props": props,
            "provider": provider,
        }

    @builtins.property
    def key(self) -> builtins.str:
        '''The missing context key.'''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def props(
        self,
    ) -> typing.Union[AmiContextQuery, AvailabilityZonesContextQuery, HostedZoneContextQuery, "SSMParameterContextQuery", "VpcContextQuery", EndpointServiceAvailabilityZonesContextQuery]:
        '''A set of provider-specific options.'''
        result = self._values.get("props")
        assert result is not None, "Required property 'props' is missing"
        return typing.cast(typing.Union[AmiContextQuery, AvailabilityZonesContextQuery, HostedZoneContextQuery, "SSMParameterContextQuery", "VpcContextQuery", EndpointServiceAvailabilityZonesContextQuery], result)

    @builtins.property
    def provider(self) -> ContextProvider:
        '''The provider from which we expect this context key to be obtained.'''
        result = self._values.get("provider")
        assert result is not None, "Required property 'provider' is missing"
        return typing.cast(ContextProvider, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MissingContext(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.NestedCloudAssemblyProperties",
    jsii_struct_bases=[],
    name_mapping={"directory_name": "directoryName", "display_name": "displayName"},
)
class NestedCloudAssemblyProperties:
    def __init__(
        self,
        *,
        directory_name: builtins.str,
        display_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Artifact properties for nested cloud assemblies.

        :param directory_name: Relative path to the nested cloud assembly.
        :param display_name: Display name for the cloud assembly. Default: - The artifact ID
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "directory_name": directory_name,
        }
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def directory_name(self) -> builtins.str:
        '''Relative path to the nested cloud assembly.'''
        result = self._values.get("directory_name")
        assert result is not None, "Required property 'directory_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def display_name(self) -> typing.Optional[builtins.str]:
        '''Display name for the cloud assembly.

        :default: - The artifact ID
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NestedCloudAssemblyProperties(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.RuntimeInfo",
    jsii_struct_bases=[],
    name_mapping={"libraries": "libraries"},
)
class RuntimeInfo:
    def __init__(
        self,
        *,
        libraries: typing.Mapping[builtins.str, builtins.str],
    ) -> None:
        '''Information about the application's runtime components.

        :param libraries: The list of libraries loaded in the application, associated with their versions.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    jsii_type="@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "parameter_name": "parameterName",
        "region": "region",
    },
)
class SSMParameterContextQuery:
    def __init__(
        self,
        *,
        account: builtins.str,
        parameter_name: builtins.str,
        region: builtins.str,
    ) -> None:
        '''Query to SSM Parameter Context Provider.

        :param account: Query account.
        :param parameter_name: Parameter name to query.
        :param region: Query region.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "parameter_name": parameter_name,
            "region": region,
        }

    @builtins.property
    def account(self) -> builtins.str:
        '''Query account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def parameter_name(self) -> builtins.str:
        '''Parameter name to query.'''
        result = self._values.get("parameter_name")
        assert result is not None, "Required property 'parameter_name' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Query region.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SSMParameterContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.Tag",
    jsii_struct_bases=[],
    name_mapping={"key": "key", "value": "value"},
)
class Tag:
    def __init__(self, *, key: builtins.str, value: builtins.str) -> None:
        '''Metadata Entry spec for stack tag.

        :param key: Tag key.
        :param value: Tag value.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "key": key,
            "value": value,
        }

    @builtins.property
    def key(self) -> builtins.str:
        '''Tag key.'''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def value(self) -> builtins.str:
        '''Tag value.'''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Tag(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.TreeArtifactProperties",
    jsii_struct_bases=[],
    name_mapping={"file": "file"},
)
class TreeArtifactProperties:
    def __init__(self, *, file: builtins.str) -> None:
        '''Artifact properties for the Construct Tree Artifact.

        :param file: Filename of the tree artifact.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "file": file,
        }

    @builtins.property
    def file(self) -> builtins.str:
        '''Filename of the tree artifact.'''
        result = self._values.get("file")
        assert result is not None, "Required property 'file' is missing"
        return typing.cast(builtins.str, result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TreeArtifactProperties(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-assembly-schema.VpcContextQuery",
    jsii_struct_bases=[],
    name_mapping={
        "account": "account",
        "filter": "filter",
        "region": "region",
        "return_asymmetric_subnets": "returnAsymmetricSubnets",
        "subnet_group_name_tag": "subnetGroupNameTag",
    },
)
class VpcContextQuery:
    def __init__(
        self,
        *,
        account: builtins.str,
        filter: typing.Mapping[builtins.str, builtins.str],
        region: builtins.str,
        return_asymmetric_subnets: typing.Optional[builtins.bool] = None,
        subnet_group_name_tag: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Query input for looking up a VPC.

        :param account: Query account.
        :param filter: Filters to apply to the VPC. Filter parameters are the same as passed to DescribeVpcs.
        :param region: Query region.
        :param return_asymmetric_subnets: Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups. Default: false
        :param subnet_group_name_tag: Optional tag for subnet group name. If not provided, we'll look at the ros-cdk:subnet-name tag. If the subnet does not have the specified tag, we'll use its type as the name. Default: 'ros-cdk:subnet-name'
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account": account,
            "filter": filter,
            "region": region,
        }
        if return_asymmetric_subnets is not None:
            self._values["return_asymmetric_subnets"] = return_asymmetric_subnets
        if subnet_group_name_tag is not None:
            self._values["subnet_group_name_tag"] = subnet_group_name_tag

    @builtins.property
    def account(self) -> builtins.str:
        '''Query account.'''
        result = self._values.get("account")
        assert result is not None, "Required property 'account' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def filter(self) -> typing.Mapping[builtins.str, builtins.str]:
        '''Filters to apply to the VPC.

        Filter parameters are the same as passed to DescribeVpcs.
        '''
        result = self._values.get("filter")
        assert result is not None, "Required property 'filter' is missing"
        return typing.cast(typing.Mapping[builtins.str, builtins.str], result)

    @builtins.property
    def region(self) -> builtins.str:
        '''Query region.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def return_asymmetric_subnets(self) -> typing.Optional[builtins.bool]:
        '''Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.

        :default: false
        '''
        result = self._values.get("return_asymmetric_subnets")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def subnet_group_name_tag(self) -> typing.Optional[builtins.str]:
        '''Optional tag for subnet group name.

        If not provided, we'll look at the ros-cdk:subnet-name tag.
        If the subnet does not have the specified tag,
        we'll use its type as the name.

        :default: 'ros-cdk:subnet-name'
        '''
        result = self._values.get("subnet_group_name_tag")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcContextQuery(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AliyunRosStackProperties",
    "AmiContextQuery",
    "ArtifactManifest",
    "ArtifactMetadataEntryType",
    "ArtifactType",
    "AssemblyManifest",
    "AvailabilityZonesContextQuery",
    "ContextProvider",
    "EndpointServiceAvailabilityZonesContextQuery",
    "HostedZoneContextQuery",
    "Manifest",
    "MetadataEntry",
    "MissingContext",
    "NestedCloudAssemblyProperties",
    "RuntimeInfo",
    "SSMParameterContextQuery",
    "Tag",
    "TreeArtifactProperties",
    "VpcContextQuery",
]

publication.publish()
