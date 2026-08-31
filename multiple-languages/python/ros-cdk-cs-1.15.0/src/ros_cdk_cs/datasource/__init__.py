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
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "kind": "kind",
        "api_version": "apiVersion",
        "first_match": "firstMatch",
        "json_path": "jsonPath",
        "name": "name",
        "namespace": "namespace",
        "refresh_options": "refreshOptions",
    },
)
class ClusterApplicationResourcesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ClusterApplicationResources``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources

        :param cluster_id: Property clusterId: The ID of the kubernetes cluster.
        :param kind: Property kind: The kind of kubernetes resources to query.
        :param api_version: Property apiVersion: The api version of kubernetes resource to query.
        :param first_match: Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
        :param json_path: Property jsonPath: Json path expression to filter the output.
        :param name: Property name: The name of the kubernetes resource to query.
        :param namespace: Property namespace: The namespace of kubernetes containing the resource. Default value is default
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc0fd0fb58ead564a98149a5b60b36741dc423967339e98c4ede2f7f5825fb61)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument kind", value=kind, expected_type=type_hints["kind"])
            check_type(argname="argument api_version", value=api_version, expected_type=type_hints["api_version"])
            check_type(argname="argument first_match", value=first_match, expected_type=type_hints["first_match"])
            check_type(argname="argument json_path", value=json_path, expected_type=type_hints["json_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "kind": kind,
        }
        if api_version is not None:
            self._values["api_version"] = api_version
        if first_match is not None:
            self._values["first_match"] = first_match
        if json_path is not None:
            self._values["json_path"] = json_path
        if name is not None:
            self._values["name"] = name
        if namespace is not None:
            self._values["namespace"] = namespace
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the kubernetes cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def kind(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property kind: The kind of kubernetes resources to query.'''
        result = self._values.get("kind")
        assert result is not None, "Required property 'kind' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiVersion: The api version of kubernetes resource to query.'''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def first_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.

        Default False
        '''
        result = self._values.get("first_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def json_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jsonPath: Json path expression to filter the output.'''
        result = self._values.get("json_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the kubernetes resource to query.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespace: The namespace of kubernetes containing the resource.

        Default value is default
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "ClusterApplicationResourcesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "refresh_options": "refreshOptions"},
)
class ClusterNodePoolsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ClusterNodePools``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools

        :param cluster_id: Property clusterId: Cluster ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5acff2ff695c10bbf3b4115adc03efbddf23c8c83bed6d2002f511d7d5879f5c)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
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
        return "ClusterNodePoolsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "private_ip_address": "privateIpAddress",
        "refresh_options": "refreshOptions",
        "temporary_duration_minutes": "temporaryDurationMinutes",
    },
)
class ClusterUserKubeconfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ClusterUserKubeconfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig

        :param cluster_id: Property clusterId: The ID of the ACK cluster.
        :param private_ip_address: Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values: true: obtains the credential that is used to connect to the cluster over the internal network. false: obtains the credential that is used to connect to the cluster over the Internet. Default value: false.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param temporary_duration_minutes: Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320. Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__245a6f48f726cb8fd6ab4a508a1b778515142998b886c3fbb386e4f5e8eb7275)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument temporary_duration_minutes", value=temporary_duration_minutes, expected_type=type_hints["temporary_duration_minutes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if temporary_duration_minutes is not None:
            self._values["temporary_duration_minutes"] = temporary_duration_minutes

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the ACK cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.

        Valid values:
        true: obtains the credential that is used to connect to the cluster over the internal network.
        false: obtains the credential that is used to connect to the cluster over the Internet.
        Default value: false.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

    @builtins.property
    def temporary_duration_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.

        Unit: minutes. Valid values: 15 to 4320.
        Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        '''
        result = self._values.get("temporary_duration_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterUserKubeconfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-cs.datasource.IClusterApplicationResources"
)
class IClusterApplicationResources(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ClusterApplicationResources``.'''

    @builtins.property
    @jsii.member(jsii_name="attrResponse")
    def attr_response(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Response: Query result of kubernetes resource(s).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterApplicationResourcesProps:
        ...


class _IClusterApplicationResourcesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ClusterApplicationResources``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cs.datasource.IClusterApplicationResources"

    @builtins.property
    @jsii.member(jsii_name="attrResponse")
    def attr_response(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Response: Query result of kubernetes resource(s).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResponse"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterApplicationResourcesProps:
        return typing.cast(ClusterApplicationResourcesProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClusterApplicationResources).__jsii_proxy_class__ = lambda : _IClusterApplicationResourcesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cs.datasource.IClusterNodePools")
class IClusterNodePools(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ClusterNodePools``.'''

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolIds")
    def attr_node_pool_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePoolIds: The list of node_pool IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodePools")
    def attr_node_pools(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePools: The list of node_pools.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterNodePoolsProps:
        ...


class _IClusterNodePoolsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ClusterNodePools``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cs.datasource.IClusterNodePools"

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolIds")
    def attr_node_pool_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePoolIds: The list of node_pool IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodePoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePools")
    def attr_node_pools(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePools: The list of node_pools.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodePools"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterNodePoolsProps:
        return typing.cast(ClusterNodePoolsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClusterNodePools).__jsii_proxy_class__ = lambda : _IClusterNodePoolsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cs.datasource.IClusterUserKubeconfig")
class IClusterUserKubeconfig(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ClusterUserKubeconfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the ACK cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: The content of the kubeconfig file.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpiration")
    def attr_expiration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expiration: The expiration time of the kubeconfig file.

        The value is the UTC time displayed in RFC3339 format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterUserKubeconfigProps:
        ...


class _IClusterUserKubeconfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ClusterUserKubeconfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cs.datasource.IClusterUserKubeconfig"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the ACK cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: The content of the kubeconfig file.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiration")
    def attr_expiration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expiration: The expiration time of the kubeconfig file.

        The value is the UTC time displayed in RFC3339 format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpiration"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterUserKubeconfigProps:
        return typing.cast(ClusterUserKubeconfigProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClusterUserKubeconfig).__jsii_proxy_class__ = lambda : _IClusterUserKubeconfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cs.datasource.IKubernetesCluster")
class IKubernetesCluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``KubernetesCluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpec")
    def attr_cluster_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpec: The type of the managed Kubernetes cluster.

        This parameter is returned for a managed Kubernetes cluster. Valid values:

        - ack.pro.small: professional managed Kubernetes cluster.
        - ack.standard: standard managed Kubernetes cluster.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.

        Valid values:

        - Kubernetes: dedicated Kubernetes cluster
        - ManagedKubernetes: managed Kubernetes cluster
        - Ask: ASK cluster
        - ExternalKubernetes: registered external Kubernetes cluster
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreated")
    def attr_created(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Created: The time when the cluster was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current Kubernetes version of the cluster.

        For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeletionProtection: Indicates whether deletion protection is enabled.

        If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:

        - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
        - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDockerVersion")
    def attr_docker_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DockerVersion: The Docker version that is used by the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExternalLoadbalancerId")
    def attr_external_loadbalancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInitVersion")
    def attr_init_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitVersion: The Kubernetes version that is initially used by the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintenanceWindow")
    def attr_maintenance_window(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintenanceWindow: The maintenance window of the cluster.

        This feature is available in only professional managed Kubernetes clusters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterUrl")
    def attr_master_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterUrl: The address of the cluster.

        It includes an internal endpoint and a public endpoint.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMetaData")
    def attr_meta_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetaData: The metadata of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the cluster.

        The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkMode: The network mode of the cluster.

        Valid values:

        - classic: the classic network
        - vpc: virtual private cloud (VPC)
        - overlay: overlay network
        - calico: network powered by Calico
          Default value: vpc.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNextVersion")
    def attr_next_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: A collection of cluster ROS parameters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrivateZone")
    def attr_private_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.

        - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProfile")
    def attr_profile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Profile: Indicates the scenario in which the cluster is used.

        Valid values:

        - Default: indicates that the cluster is used in non-edge computing scenarios.
        - Edge: indicates that the ACK cluster is used in edge computing scenarios.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The ID of the region where the cluster is deployed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceCidr")
    def attr_service_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceCidr: The cluster service cidr.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSize")
    def attr_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Size: The number of nodes in the cluster.

        Master nodes and worker nodes are included.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: The state of the cluster.

        Valid values:

        - initial: The cluster is being created.
        - failed: The cluster failed to be created.
        - running: The cluster is running.
        - updating: The cluster is being upgraded.
        - updating_failed: The cluster failed to be upgraded.
        - scaling: The cluster is being scaled.
        - waiting: The registered cluster is waiting for connecting.
        - disconnected: The registeredcluster is disconnected.
        - stopped: The cluster is stopped.
        - deleting: The cluster is being deleted.
        - deleted: The cluster is deleted.
        - delete_failed: The cluster failed to be deleted.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSubnetCidr")
    def attr_subnet_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubnetCidr: The pod CIDR block.

        It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:

        - 10.0.0.0/8
        - 172.16-31.0.0/12-16
        - 192.168.0.0/16
          The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The labels of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdated")
    def attr_updated(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Updated: The time when the cluster was updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC where the cluster is deployed.

        This parameter is required when you create an ACK cluster.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The IDs of the vSwitches.

        You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchIds: The list of cluster control plane VSwitch ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: The name of the worker RAM role.

        The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone where the cluster is deployed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClusterProps":
        ...


class _IKubernetesClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``KubernetesCluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cs.datasource.IKubernetesCluster"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpec")
    def attr_cluster_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpec: The type of the managed Kubernetes cluster.

        This parameter is returned for a managed Kubernetes cluster. Valid values:

        - ack.pro.small: professional managed Kubernetes cluster.
        - ack.standard: standard managed Kubernetes cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.

        Valid values:

        - Kubernetes: dedicated Kubernetes cluster
        - ManagedKubernetes: managed Kubernetes cluster
        - Ask: ASK cluster
        - ExternalKubernetes: registered external Kubernetes cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreated")
    def attr_created(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Created: The time when the cluster was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreated"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current Kubernetes version of the cluster.

        For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeletionProtection: Indicates whether deletion protection is enabled.

        If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:

        - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
        - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDockerVersion")
    def attr_docker_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DockerVersion: The Docker version that is used by the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDockerVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExternalLoadbalancerId")
    def attr_external_loadbalancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalLoadbalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrInitVersion")
    def attr_init_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitVersion: The Kubernetes version that is initially used by the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInitVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintenanceWindow")
    def attr_maintenance_window(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintenanceWindow: The maintenance window of the cluster.

        This feature is available in only professional managed Kubernetes clusters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintenanceWindow"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterUrl")
    def attr_master_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterUrl: The address of the cluster.

        It includes an internal endpoint and a public endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMetaData")
    def attr_meta_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetaData: The metadata of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetaData"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the cluster.

        The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkMode: The network mode of the cluster.

        Valid values:

        - classic: the classic network
        - vpc: virtual private cloud (VPC)
        - overlay: overlay network
        - calico: network powered by Calico
          Default value: vpc.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkMode"))

    @builtins.property
    @jsii.member(jsii_name="attrNextVersion")
    def attr_next_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNextVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: A collection of cluster ROS parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateZone")
    def attr_private_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.

        - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateZone"))

    @builtins.property
    @jsii.member(jsii_name="attrProfile")
    def attr_profile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Profile: Indicates the scenario in which the cluster is used.

        Valid values:

        - Default: indicates that the cluster is used in non-edge computing scenarios.
        - Edge: indicates that the ACK cluster is used in edge computing scenarios.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProfile"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The ID of the region where the cluster is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceCidr")
    def attr_service_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceCidr: The cluster service cidr.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrSize")
    def attr_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Size: The number of nodes in the cluster.

        Master nodes and worker nodes are included.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSize"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: The state of the cluster.

        Valid values:

        - initial: The cluster is being created.
        - failed: The cluster failed to be created.
        - running: The cluster is running.
        - updating: The cluster is being upgraded.
        - updating_failed: The cluster failed to be upgraded.
        - scaling: The cluster is being scaled.
        - waiting: The registered cluster is waiting for connecting.
        - disconnected: The registeredcluster is disconnected.
        - stopped: The cluster is stopped.
        - deleting: The cluster is being deleted.
        - deleted: The cluster is deleted.
        - delete_failed: The cluster failed to be deleted.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrSubnetCidr")
    def attr_subnet_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubnetCidr: The pod CIDR block.

        It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:

        - 10.0.0.0/8
        - 172.16-31.0.0/12-16
        - 192.168.0.0/16
          The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSubnetCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The labels of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdated")
    def attr_updated(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Updated: The time when the cluster was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdated"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC where the cluster is deployed.

        This parameter is required when you create an ACK cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The IDs of the vSwitches.

        You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchIds: The list of cluster control plane VSwitch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: The name of the worker RAM role.

        The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone where the cluster is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClusterProps":
        return typing.cast("KubernetesClusterProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IKubernetesCluster).__jsii_proxy_class__ = lambda : _IKubernetesClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cs.datasource.IKubernetesClusters")
class IKubernetesClusters(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``KubernetesClusters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClustersProps":
        ...


class _IKubernetesClustersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``KubernetesClusters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cs.datasource.IKubernetesClusters"

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClustersProps":
        return typing.cast("KubernetesClustersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IKubernetesClusters).__jsii_proxy_class__ = lambda : _IKubernetesClustersProxy


@jsii.implements(IKubernetesCluster)
class KubernetesCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesCluster",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CS::KubernetesCluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKubernetesCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KubernetesClusterProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87b2965c8dc77d7875d4dbd95143f4f0afb55bbebf8a225623b5cbce39043d78)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpec")
    def attr_cluster_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpec: The type of the managed Kubernetes cluster.

        This parameter is returned for a managed Kubernetes cluster. Valid values:

        - ack.pro.small: professional managed Kubernetes cluster.
        - ack.standard: standard managed Kubernetes cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.

        Valid values:

        - Kubernetes: dedicated Kubernetes cluster
        - ManagedKubernetes: managed Kubernetes cluster
        - Ask: ASK cluster
        - ExternalKubernetes: registered external Kubernetes cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreated")
    def attr_created(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Created: The time when the cluster was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreated"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current Kubernetes version of the cluster.

        For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeletionProtection: Indicates whether deletion protection is enabled.

        If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:

        - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
        - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDockerVersion")
    def attr_docker_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DockerVersion: The Docker version that is used by the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDockerVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExternalLoadbalancerId")
    def attr_external_loadbalancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalLoadbalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrInitVersion")
    def attr_init_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InitVersion: The Kubernetes version that is initially used by the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInitVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintenanceWindow")
    def attr_maintenance_window(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintenanceWindow: The maintenance window of the cluster.

        This feature is available in only professional managed Kubernetes clusters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintenanceWindow"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterUrl")
    def attr_master_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterUrl: The address of the cluster.

        It includes an internal endpoint and a public endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMetaData")
    def attr_meta_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MetaData: The metadata of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetaData"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the cluster.

        The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkMode: The network mode of the cluster.

        Valid values:

        - classic: the classic network
        - vpc: virtual private cloud (VPC)
        - overlay: overlay network
        - calico: network powered by Calico
          Default value: vpc.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkMode"))

    @builtins.property
    @jsii.member(jsii_name="attrNextVersion")
    def attr_next_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNextVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: A collection of cluster ROS parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateZone")
    def attr_private_zone(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.

        - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateZone"))

    @builtins.property
    @jsii.member(jsii_name="attrProfile")
    def attr_profile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Profile: Indicates the scenario in which the cluster is used.

        Valid values:

        - Default: indicates that the cluster is used in non-edge computing scenarios.
        - Edge: indicates that the ACK cluster is used in edge computing scenarios.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProfile"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionId: The ID of the region where the cluster is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceCidr")
    def attr_service_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceCidr: The cluster service cidr.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrSize")
    def attr_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Size: The number of nodes in the cluster.

        Master nodes and worker nodes are included.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSize"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: The state of the cluster.

        Valid values:

        - initial: The cluster is being created.
        - failed: The cluster failed to be created.
        - running: The cluster is running.
        - updating: The cluster is being upgraded.
        - updating_failed: The cluster failed to be upgraded.
        - scaling: The cluster is being scaled.
        - waiting: The registered cluster is waiting for connecting.
        - disconnected: The registeredcluster is disconnected.
        - stopped: The cluster is stopped.
        - deleting: The cluster is being deleted.
        - deleted: The cluster is deleted.
        - delete_failed: The cluster failed to be deleted.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrSubnetCidr")
    def attr_subnet_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubnetCidr: The pod CIDR block.

        It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:

        - 10.0.0.0/8
        - 172.16-31.0.0/12-16
        - 192.168.0.0/16
          The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSubnetCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The labels of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdated")
    def attr_updated(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Updated: The time when the cluster was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdated"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC where the cluster is deployed.

        This parameter is required when you create an ACK cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The IDs of the vSwitches.

        You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchIds: The list of cluster control plane VSwitch ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: The name of the worker RAM role.

        The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone where the cluster is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClusterProps":
        return typing.cast("KubernetesClusterProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e219cbba422c781efb2c0e03072fabe574c404410e3f91f580333b521452611)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89b0f9243c4270afd3367c5a5d5fe1298afeef5068e5b120d1c05dcc3d22e10a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34c1db444e087a9786a71f0237b1089971ee13cd36c490e89f942f539811451d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "refresh_options": "refreshOptions"},
)
class KubernetesClusterProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``KubernetesCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster

        :param cluster_id: Property clusterId: Cluster instance ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd0c8c8f6c7dad9d40dd9b6771cdbf9f38ededc4df9f8523a35a7da1d18b3c64)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: Cluster instance ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "KubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IKubernetesClusters)
class KubernetesClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesClusters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CS::KubernetesClusters``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKubernetesClusters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KubernetesClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e2ecdafcef2411e2b722e22406cbd2fd53e07d613859a9da0be4e55baa7cacd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KubernetesClustersProps":
        return typing.cast("KubernetesClustersProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f548797fc6d87720b5c3b98571fb22d45888952a678f30b8e76ef7186dbf97f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dfa4a6f9b97873986e38c2ee3cc44fdaa6a24118d19578ad431ce08bb956969)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d46e7181bbd8c4007ab649368109ccdac3f21006f0e64845c595e696c4e90f6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_spec": "clusterSpec",
        "cluster_type": "clusterType",
        "name": "name",
        "profile": "profile",
        "refresh_options": "refreshOptions",
    },
)
class KubernetesClustersProps:
    def __init__(
        self,
        *,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``KubernetesClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters

        :param cluster_spec: Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values: ack.pro.small: professional managed Kubernetes cluster ack.standard: standard managed Kubernetes cluster By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        :param cluster_type: Property clusterType: The type of the cluster. Valid values: Kubernetes: dedicated Kubernetes cluster ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster Ask: ASK cluster ExternalKubernetes: registered external cluster When you query an ASK cluster, the value specified when the cluster was created is returned.
        :param name: Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        :param profile: Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values: Default: managed Kubernetes cluster Serverless: ASK cluster Edge: edge Kubernetes cluster By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f944cf8791691309755c0d6ffcffe02ef2e337f2dcac8886e4f761ab555e8fd)
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if name is not None:
            self._values["name"] = name
        if profile is not None:
            self._values["profile"] = profile
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterSpec: The specification of the cluster.

        If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
        ack.pro.small: professional managed Kubernetes cluster
        ack.standard: standard managed Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterType: The type of the cluster.

        Valid values:
        Kubernetes: dedicated Kubernetes cluster
        ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
        Ask: ASK cluster
        ExternalKubernetes: registered external cluster
        When you query an ASK cluster, the value specified when the cluster was created is returned.
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property profile: The identifier of the cluster.

        If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
        Default: managed Kubernetes cluster
        Serverless: ASK cluster
        Edge: edge Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "KubernetesClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterApplicationResources(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterApplicationResources",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CS::ClusterApplicationResources``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ClusterApplicationResources`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterApplicationResourcesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__caa1f144d3a1b381378c7ced2ddc9bb997cf1c1b94151d40e53d522e38513dbd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2ebae1ddc6b1595741fa2c5cec130cf5ac5488287f9e8de606e4aced60935e84)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResponse")
    def attr_response(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Response: Query result of kubernetes resource(s).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResponse"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__227a407d96698c49f0e1227acf43405b36fed606020879a4a71b8f088eab645b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8833fd062642d423b64b4ebe4e50027445ca15076e276f8cc5ea3d751887e586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="kind")
    def kind(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: kind: The kind of kubernetes resources to query.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "kind"))

    @kind.setter
    def kind(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4536bbbf4fca100108a4151bdb854293ece12374a9a604c6eb4f5b60250a5e8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kind", value)

    @builtins.property
    @jsii.member(jsii_name="apiVersion")
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiVersion: The api version of kubernetes resource to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiVersion"))

    @api_version.setter
    def api_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__931fba30f97ad4e8307e5e10cd30272d178654663fd7436d24b77bebffeb3339)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiVersion", value)

    @builtins.property
    @jsii.member(jsii_name="firstMatch")
    def first_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firstMatch"))

    @first_match.setter
    def first_match(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e2bd63508859d9da831cf2c545b4bf72d80d1e73114757228f30242aeda618a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firstMatch", value)

    @builtins.property
    @jsii.member(jsii_name="jsonPath")
    def json_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jsonPath: Json path expression to filter the output.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jsonPath"))

    @json_path.setter
    def json_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1982ca37e39880d1d0d91b063c02f3540efd3d0100787ffed1964b4bcdca36a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jsonPath", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the kubernetes resource to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0bd1a905f927a918e328aa7f34c3efad64d1ec79897e2642dcb45cae429e234)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: The namespace of kubernetes containing the resource. Default value is default
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b4e831fcfcc3c266bacee8e61900055b647a9e483743dc36e962297e3bbe9d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__d4a9d4c38801ac8eab1188b8b516e9c2db510c05fb8043332c84924aa927f02b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterApplicationResourcesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "kind": "kind",
        "api_version": "apiVersion",
        "first_match": "firstMatch",
        "json_path": "jsonPath",
        "name": "name",
        "namespace": "namespace",
        "refresh_options": "refreshOptions",
    },
)
class RosClusterApplicationResourcesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosClusterApplicationResources``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources

        :param cluster_id: 
        :param kind: 
        :param api_version: 
        :param first_match: 
        :param json_path: 
        :param name: 
        :param namespace: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afac1707af5d387ab35b81997080a04f80034e4329336e1349bc573c0cec3721)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument kind", value=kind, expected_type=type_hints["kind"])
            check_type(argname="argument api_version", value=api_version, expected_type=type_hints["api_version"])
            check_type(argname="argument first_match", value=first_match, expected_type=type_hints["first_match"])
            check_type(argname="argument json_path", value=json_path, expected_type=type_hints["json_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "kind": kind,
        }
        if api_version is not None:
            self._values["api_version"] = api_version
        if first_match is not None:
            self._values["first_match"] = first_match
        if json_path is not None:
            self._values["json_path"] = json_path
        if name is not None:
            self._values["name"] = name
        if namespace is not None:
            self._values["namespace"] = namespace
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def kind(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: kind: The kind of kubernetes resources to query.
        '''
        result = self._values.get("kind")
        assert result is not None, "Required property 'kind' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiVersion: The api version of kubernetes resource to query.
        '''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def first_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
        '''
        result = self._values.get("first_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def json_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jsonPath: Json path expression to filter the output.
        '''
        result = self._values.get("json_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the kubernetes resource to query.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: The namespace of kubernetes containing the resource. Default value is default
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "RosClusterApplicationResourcesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterNodePools(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterNodePools",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CS::ClusterNodePools``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ClusterNodePools`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterNodePoolsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3c8ce05127483c67c90b8e0ebc37c9daa89505b368a7794868ca73849761732)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6bf704fa6a411230c14f65c6f06586f1e1284157aaa3f92b5c2d917d3e70d0b4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolIds")
    def attr_node_pool_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodePoolIds: The list of node_pool IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePools")
    def attr_node_pools(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodePools: The list of node_pools.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePools"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c72d4db1a186bb7cf0b3b2786bae4947086e531c68d8281c0c605a4f8ebbe5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bebf0e1c00a633464a05c151501f23cd0b825105c00ee389dd20d36769c3af8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e49fbcebabc8040c184f4d22063f606eb545e44436374f7aeda833f7dc15e3bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterNodePoolsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "refresh_options": "refreshOptions"},
)
class RosClusterNodePoolsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosClusterNodePools``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools

        :param cluster_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__932135b1bc0c9d508fdce11cb56e734b82ace28410fef956b87882e08ccee535)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
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
        return "RosClusterNodePoolsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterUserKubeconfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterUserKubeconfig",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CS::ClusterUserKubeconfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ClusterUserKubeconfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterUserKubeconfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a629f353d0dfd35070c6d5ca3a345cc8f76b68542d6ed1f548f43fc2c5aa0e7c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1a1eb62ffa25cdefa1b47dab5254dd58de0d06fa0dd715a9d0ea2f73c04b3db0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the ACK cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Config: The content of the kubeconfig file.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiration")
    def attr_expiration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Expiration: The expiration time of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiration"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the ACK cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35b5f8a24fec237786979b5b11be122daae4f7637eae8b510f82ac6071e9dac2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e7a6dbb8ec79d174ff4763ee7536b984bc7a3f2a914ecbba1c0e6677c0d77b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
        true: obtains the credential that is used to connect to the cluster over the internal network.
        false: obtains the credential that is used to connect to the cluster over the Internet.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c53077713fe79cb0c8bf8a3452c701238b48510193778de52f9fe321975fc033)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__976d79f2e3432931a94b56adc7856b8037b1018cef5894434c355568681da667)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="temporaryDurationMinutes")
    def temporary_duration_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
        Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "temporaryDurationMinutes"))

    @temporary_duration_minutes.setter
    def temporary_duration_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2352167fb62b05528154fb25c28e81e83e7312f21e44fc2eef41919b54e0270b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "temporaryDurationMinutes", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterUserKubeconfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "private_ip_address": "privateIpAddress",
        "refresh_options": "refreshOptions",
        "temporary_duration_minutes": "temporaryDurationMinutes",
    },
)
class RosClusterUserKubeconfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosClusterUserKubeconfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig

        :param cluster_id: 
        :param private_ip_address: 
        :param refresh_options: 
        :param temporary_duration_minutes: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06bea1361aeb73bec26f29eef2cf56636c8a40b19527c9b777175fe28742873e)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument temporary_duration_minutes", value=temporary_duration_minutes, expected_type=type_hints["temporary_duration_minutes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if temporary_duration_minutes is not None:
            self._values["temporary_duration_minutes"] = temporary_duration_minutes

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the ACK cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
        true: obtains the credential that is used to connect to the cluster over the internal network.
        false: obtains the credential that is used to connect to the cluster over the Internet.
        Default value: false.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

    @builtins.property
    def temporary_duration_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
        Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        '''
        result = self._values.get("temporary_duration_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterUserKubeconfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKubernetesCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CS::KubernetesCluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KubernetesCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__556d33850e8a6c943840d2223b211539900ecc539200c3fc36d979999787d1e5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__79278cf45955e2f3a60c241a424c6a1d4cc8790c5d24da3aadad8f06f76830a3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpec")
    def attr_cluster_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ClusterSpec: The type of the managed Kubernetes cluster. This parameter is returned for a managed Kubernetes cluster. Valid values:

        - ack.pro.small: professional managed Kubernetes cluster.
        - ack.standard: standard managed Kubernetes cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ClusterType: The type of the cluster. Valid values:

        - Kubernetes: dedicated Kubernetes cluster
        - ManagedKubernetes: managed Kubernetes cluster
        - Ask: ASK cluster
        - ExternalKubernetes: registered external Kubernetes cluster
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreated")
    def attr_created(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Created: The time when the cluster was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreated"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CurrentVersion: The current Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DeletionProtection: Indicates whether deletion protection is enabled. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:

        - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
        - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDockerVersion")
    def attr_docker_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DockerVersion: The Docker version that is used by the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDockerVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExternalLoadbalancerId")
    def attr_external_loadbalancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExternalLoadbalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrInitVersion")
    def attr_init_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InitVersion: The Kubernetes version that is initially used by the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInitVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintenanceWindow")
    def attr_maintenance_window(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintenanceWindow: The maintenance window of the cluster. This feature is available in only professional managed Kubernetes clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintenanceWindow"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterUrl")
    def attr_master_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterUrl: The address of the cluster. It includes an internal endpoint and a public endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrMetaData")
    def attr_meta_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MetaData: The metadata of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMetaData"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of the cluster. The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        NetworkMode: The network mode of the cluster. Valid values:

        - classic: the classic network
        - vpc: virtual private cloud (VPC)
        - overlay: overlay network
        - calico: network powered by Calico
        Default value: vpc.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkMode"))

    @builtins.property
    @jsii.member(jsii_name="attrNextVersion")
    def attr_next_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NextVersion: The Kubernetes version to which the cluster can be upgraded.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNextVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Parameters: A collection of cluster ROS parameters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateZone")
    def attr_private_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.

        - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateZone"))

    @builtins.property
    @jsii.member(jsii_name="attrProfile")
    def attr_profile(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Profile: Indicates the scenario in which the cluster is used. Valid values:

        - Default: indicates that the cluster is used in non-edge computing scenarios.
        - Edge: indicates that the ACK cluster is used in edge computing scenarios.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProfile"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionId: The ID of the region where the cluster is deployed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the cluster belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceCidr")
    def attr_service_cidr(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceCidr: The cluster service cidr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrSize")
    def attr_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Size: The number of nodes in the cluster. Master nodes and worker nodes are included.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSize"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        State: The state of the cluster. Valid values:

        - initial: The cluster is being created.
        - failed: The cluster failed to be created.
        - running: The cluster is running.
        - updating: The cluster is being upgraded.
        - updating_failed: The cluster failed to be upgraded.
        - scaling: The cluster is being scaled.
        - waiting: The registered cluster is waiting for connecting.
        - disconnected: The registeredcluster is disconnected.
        - stopped: The cluster is stopped.
        - deleting: The cluster is being deleted.
        - deleted: The cluster is deleted.
        - delete_failed: The cluster failed to be deleted.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrSubnetCidr")
    def attr_subnet_cidr(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        SubnetCidr: The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:

        - 10.0.0.0/8
        - 172.16-31.0.0/12-16
        - 192.168.0.0/16
        The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubnetCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The labels of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdated")
    def attr_updated(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Updated: The time when the cluster was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdated"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC where the cluster is deployed. This parameter is required when you create an ACK cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The IDs of the vSwitches. You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchIds: The list of cluster control plane VSwitch ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        WorkerRamRoleName: The name of the worker RAM role.
        The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone where the cluster is deployed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3701be895470a10115d6e526526667197012465f6f3cf281bf2e2cd7de4c7c40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b62501b1754d62a082a4b5f72f76f6c0a68a9112672fb97a78932ca18c52f57b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__74c1e4661f843c74e7a80f6880d2b67b00256dd50b68ce0537ba2249f656033e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "refresh_options": "refreshOptions"},
)
class RosKubernetesClusterProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKubernetesCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster

        :param cluster_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9ea177c0d1fa31e899d419f0410c0c000833e0f630b89263aba7518031a6f60)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster instance ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "RosKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKubernetesClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesClusters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CS::KubernetesClusters``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KubernetesClusters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKubernetesClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6235bd509edf2891ab327ebac6b4ec2f5f08d727ef88b19d29e6f723db24538)
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
            type_hints = typing.get_type_hints(_typecheckingstub__07650d4d045c9a2995e6d33c86b86a85656228f87ffc7e1fb4a17576173ce6b3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterIds: The list of cluster IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Clusters: The list of clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2e2bf767afcf09f2271690731783500d46f0e26cdf5732a2f3d45e29c832481e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
        ack.pro.small: professional managed Kubernetes cluster
        ack.standard: standard managed Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__182cf357c8b0c1021e0f4fc36d0390dd66e957b7f88591c5cb39af2bade40e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpec", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterType: The type of the cluster. Valid values:
        Kubernetes: dedicated Kubernetes cluster
        ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
        Ask: ASK cluster
        ExternalKubernetes: registered external cluster
        When you query an ASK cluster, the value specified when the cluster was created is returned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8efb7da7957913de0750f4b261fca3962a6a9acdd5007b3b923ac24e4582318)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7c526623a357f69c40fa58a1b37abe4cb831e81d05f122d15c9e9f5be9bb92e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="profile")
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
        Default: managed Kubernetes cluster
        Serverless: ASK cluster
        Edge: edge Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "profile"))

    @profile.setter
    def profile(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f645c1069b082f5c2ec061a9c5c76f8d6a4d08736c8b4b5a24d89738ac961cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "profile", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f59caad941694ce9fe372b229a8bc97807d068a0eb8f40841ee5e4913d58a7e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_spec": "clusterSpec",
        "cluster_type": "clusterType",
        "name": "name",
        "profile": "profile",
        "refresh_options": "refreshOptions",
    },
)
class RosKubernetesClustersProps:
    def __init__(
        self,
        *,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKubernetesClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters

        :param cluster_spec: 
        :param cluster_type: 
        :param name: 
        :param profile: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__357c7542f353d4f19acbda582839ff5bf3a728a41ad9079bb5dd39e3070a3c2a)
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if name is not None:
            self._values["name"] = name
        if profile is not None:
            self._values["profile"] = profile
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
        ack.pro.small: professional managed Kubernetes cluster
        ack.standard: standard managed Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterType: The type of the cluster. Valid values:
        Kubernetes: dedicated Kubernetes cluster
        ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
        Ask: ASK cluster
        ExternalKubernetes: registered external cluster
        When you query an ASK cluster, the value specified when the cluster was created is returned.
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
        Default: managed Kubernetes cluster
        Serverless: ASK cluster
        Edge: edge Kubernetes cluster
        By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "RosKubernetesClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IClusterApplicationResources)
class ClusterApplicationResources(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterApplicationResources",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CS::ClusterApplicationResources``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClusterApplicationResources``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterApplicationResourcesProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__293113022aca25e91d5765b13b06a36083e1f82d114b7115757e4e2546ae318c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResponse")
    def attr_response(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Response: Query result of kubernetes resource(s).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResponse"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterApplicationResourcesProps:
        return typing.cast(ClusterApplicationResourcesProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8868e2a218cf6edbe852e4f619178d6e823c03d78a7b8343c4762bb173eb3ead)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ba3f27d13b1617e0394a7223922a584aecc2ed3f5b48153219d2e355fb5d3e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fcb2172724a0f63fb7544e56e03fc8fccdacf1238b4ab7db59cec57af407e49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IClusterNodePools)
class ClusterNodePools(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterNodePools",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CS::ClusterNodePools``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClusterNodePools``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterNodePoolsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__329818a4866ed37a9b1668c057843433c9b7f976f321a3d342f05978eb5b9cd4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolIds")
    def attr_node_pool_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePoolIds: The list of node_pool IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodePoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePools")
    def attr_node_pools(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NodePools: The list of node_pools.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodePools"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterNodePoolsProps:
        return typing.cast(ClusterNodePoolsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ae765ef644c214cf681cccac7effd6cb177618d8acb68623804812b4c6a2119)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb406adc174a87b66c93bbca371b87de24a8d25bebcc50af66ea527072a9abb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d12a4dcaec2691c393110b380e0e1d7fbfde6677011ba50c735f1f4b732459f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IClusterUserKubeconfig)
class ClusterUserKubeconfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfig",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CS::ClusterUserKubeconfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClusterUserKubeconfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterUserKubeconfigProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61ce7798d06a4b415379236edc72bd24e91ec506db477a1f85d90d70939b96a3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the ACK cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: The content of the kubeconfig file.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiration")
    def attr_expiration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expiration: The expiration time of the kubeconfig file.

        The value is the UTC time displayed in RFC3339 format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpiration"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterUserKubeconfigProps:
        return typing.cast(ClusterUserKubeconfigProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015659f7fe3b7855cba5e1edc076cc1fa4afd1e090791a98bd5374e28b27086b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acce183031d746cf0732b86f208bf9dfeb529f37b354425ebddb066931de7f7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d42d2d4c53ef96db03e9a9048793713e7d32dfe816d0b1bfed71e9943cc03534)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ClusterApplicationResources",
    "ClusterApplicationResourcesProps",
    "ClusterNodePools",
    "ClusterNodePoolsProps",
    "ClusterUserKubeconfig",
    "ClusterUserKubeconfigProps",
    "IClusterApplicationResources",
    "IClusterNodePools",
    "IClusterUserKubeconfig",
    "IKubernetesCluster",
    "IKubernetesClusters",
    "KubernetesCluster",
    "KubernetesClusterProps",
    "KubernetesClusters",
    "KubernetesClustersProps",
    "RosClusterApplicationResources",
    "RosClusterApplicationResourcesProps",
    "RosClusterNodePools",
    "RosClusterNodePoolsProps",
    "RosClusterUserKubeconfig",
    "RosClusterUserKubeconfigProps",
    "RosKubernetesCluster",
    "RosKubernetesClusterProps",
    "RosKubernetesClusters",
    "RosKubernetesClustersProps",
]

publication.publish()

def _typecheckingstub__dc0fd0fb58ead564a98149a5b60b36741dc423967339e98c4ede2f7f5825fb61(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5acff2ff695c10bbf3b4115adc03efbddf23c8c83bed6d2002f511d7d5879f5c(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__245a6f48f726cb8fd6ab4a508a1b778515142998b886c3fbb386e4f5e8eb7275(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b2965c8dc77d7875d4dbd95143f4f0afb55bbebf8a225623b5cbce39043d78(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KubernetesClusterProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e219cbba422c781efb2c0e03072fabe574c404410e3f91f580333b521452611(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89b0f9243c4270afd3367c5a5d5fe1298afeef5068e5b120d1c05dcc3d22e10a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34c1db444e087a9786a71f0237b1089971ee13cd36c490e89f942f539811451d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd0c8c8f6c7dad9d40dd9b6771cdbf9f38ededc4df9f8523a35a7da1d18b3c64(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e2ecdafcef2411e2b722e22406cbd2fd53e07d613859a9da0be4e55baa7cacd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KubernetesClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f548797fc6d87720b5c3b98571fb22d45888952a678f30b8e76ef7186dbf97f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dfa4a6f9b97873986e38c2ee3cc44fdaa6a24118d19578ad431ce08bb956969(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d46e7181bbd8c4007ab649368109ccdac3f21006f0e64845c595e696c4e90f6e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f944cf8791691309755c0d6ffcffe02ef2e337f2dcac8886e4f761ab555e8fd(
    *,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__caa1f144d3a1b381378c7ced2ddc9bb997cf1c1b94151d40e53d522e38513dbd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterApplicationResourcesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ebae1ddc6b1595741fa2c5cec130cf5ac5488287f9e8de606e4aced60935e84(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__227a407d96698c49f0e1227acf43405b36fed606020879a4a71b8f088eab645b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8833fd062642d423b64b4ebe4e50027445ca15076e276f8cc5ea3d751887e586(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4536bbbf4fca100108a4151bdb854293ece12374a9a604c6eb4f5b60250a5e8d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__931fba30f97ad4e8307e5e10cd30272d178654663fd7436d24b77bebffeb3339(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e2bd63508859d9da831cf2c545b4bf72d80d1e73114757228f30242aeda618a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1982ca37e39880d1d0d91b063c02f3540efd3d0100787ffed1964b4bcdca36a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0bd1a905f927a918e328aa7f34c3efad64d1ec79897e2642dcb45cae429e234(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b4e831fcfcc3c266bacee8e61900055b647a9e483743dc36e962297e3bbe9d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4a9d4c38801ac8eab1188b8b516e9c2db510c05fb8043332c84924aa927f02b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afac1707af5d387ab35b81997080a04f80034e4329336e1349bc573c0cec3721(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3c8ce05127483c67c90b8e0ebc37c9daa89505b368a7794868ca73849761732(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterNodePoolsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bf704fa6a411230c14f65c6f06586f1e1284157aaa3f92b5c2d917d3e70d0b4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c72d4db1a186bb7cf0b3b2786bae4947086e531c68d8281c0c605a4f8ebbe5b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bebf0e1c00a633464a05c151501f23cd0b825105c00ee389dd20d36769c3af8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e49fbcebabc8040c184f4d22063f606eb545e44436374f7aeda833f7dc15e3bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__932135b1bc0c9d508fdce11cb56e734b82ace28410fef956b87882e08ccee535(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a629f353d0dfd35070c6d5ca3a345cc8f76b68542d6ed1f548f43fc2c5aa0e7c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterUserKubeconfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a1eb62ffa25cdefa1b47dab5254dd58de0d06fa0dd715a9d0ea2f73c04b3db0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35b5f8a24fec237786979b5b11be122daae4f7637eae8b510f82ac6071e9dac2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e7a6dbb8ec79d174ff4763ee7536b984bc7a3f2a914ecbba1c0e6677c0d77b4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c53077713fe79cb0c8bf8a3452c701238b48510193778de52f9fe321975fc033(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__976d79f2e3432931a94b56adc7856b8037b1018cef5894434c355568681da667(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2352167fb62b05528154fb25c28e81e83e7312f21e44fc2eef41919b54e0270b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06bea1361aeb73bec26f29eef2cf56636c8a40b19527c9b777175fe28742873e(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__556d33850e8a6c943840d2223b211539900ecc539200c3fc36d979999787d1e5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79278cf45955e2f3a60c241a424c6a1d4cc8790c5d24da3aadad8f06f76830a3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3701be895470a10115d6e526526667197012465f6f3cf281bf2e2cd7de4c7c40(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b62501b1754d62a082a4b5f72f76f6c0a68a9112672fb97a78932ca18c52f57b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74c1e4661f843c74e7a80f6880d2b67b00256dd50b68ce0537ba2249f656033e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9ea177c0d1fa31e899d419f0410c0c000833e0f630b89263aba7518031a6f60(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6235bd509edf2891ab327ebac6b4ec2f5f08d727ef88b19d29e6f723db24538(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKubernetesClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07650d4d045c9a2995e6d33c86b86a85656228f87ffc7e1fb4a17576173ce6b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e2bf767afcf09f2271690731783500d46f0e26cdf5732a2f3d45e29c832481e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__182cf357c8b0c1021e0f4fc36d0390dd66e957b7f88591c5cb39af2bade40e72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8efb7da7957913de0750f4b261fca3962a6a9acdd5007b3b923ac24e4582318(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7c526623a357f69c40fa58a1b37abe4cb831e81d05f122d15c9e9f5be9bb92e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f645c1069b082f5c2ec061a9c5c76f8d6a4d08736c8b4b5a24d89738ac961cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f59caad941694ce9fe372b229a8bc97807d068a0eb8f40841ee5e4913d58a7e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__357c7542f353d4f19acbda582839ff5bf3a728a41ad9079bb5dd39e3070a3c2a(
    *,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__293113022aca25e91d5765b13b06a36083e1f82d114b7115757e4e2546ae318c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterApplicationResourcesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8868e2a218cf6edbe852e4f619178d6e823c03d78a7b8343c4762bb173eb3ead(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ba3f27d13b1617e0394a7223922a584aecc2ed3f5b48153219d2e355fb5d3e1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fcb2172724a0f63fb7544e56e03fc8fccdacf1238b4ab7db59cec57af407e49(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__329818a4866ed37a9b1668c057843433c9b7f976f321a3d342f05978eb5b9cd4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterNodePoolsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ae765ef644c214cf681cccac7effd6cb177618d8acb68623804812b4c6a2119(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb406adc174a87b66c93bbca371b87de24a8d25bebcc50af66ea527072a9abb5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d12a4dcaec2691c393110b380e0e1d7fbfde6677011ba50c735f1f4b732459f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ce7798d06a4b415379236edc72bd24e91ec506db477a1f85d90d70939b96a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterUserKubeconfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015659f7fe3b7855cba5e1edc076cc1fa4afd1e090791a98bd5374e28b27086b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acce183031d746cf0732b86f208bf9dfeb529f37b354425ebddb066931de7f7f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d42d2d4c53ef96db03e9a9048793713e7d32dfe816d0b1bfed71e9943cc03534(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
