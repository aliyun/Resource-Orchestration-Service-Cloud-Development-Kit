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


class ClusterApplicationResources(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterApplicationResources",
):
    '''A ROS resource type:  ``DATASOURCE::CS::ClusterApplicationResources``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterApplicationResourcesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterApplicationResources``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_response(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Response: Query result of kubernetes resource(s).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResponse"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterApplicationResourcesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "kind": "kind",
        "first_match": "firstMatch",
        "json_path": "jsonPath",
        "name": "name",
        "namespace": "namespace",
    },
)
class ClusterApplicationResourcesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterApplicationResources``.

        :param cluster_id: Property clusterId: The ID of the kubernetes cluster.
        :param kind: Property kind: The kind of kubernetes resources to query.
        :param first_match: Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
        :param json_path: Property jsonPath: Json path expression to filter the output.
        :param name: Property name: The name of the kubernetes resource to query.
        :param namespace: Property namespace: The namespace of kubernetes containing the resource. Default value is default
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc0fd0fb58ead564a98149a5b60b36741dc423967339e98c4ede2f7f5825fb61)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument kind", value=kind, expected_type=type_hints["kind"])
            check_type(argname="argument first_match", value=first_match, expected_type=type_hints["first_match"])
            check_type(argname="argument json_path", value=json_path, expected_type=type_hints["json_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "kind": kind,
        }
        if first_match is not None:
            self._values["first_match"] = first_match
        if json_path is not None:
            self._values["json_path"] = json_path
        if name is not None:
            self._values["name"] = name
        if namespace is not None:
            self._values["namespace"] = namespace

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterApplicationResourcesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterNodePools(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterNodePools",
):
    '''A ROS resource type:  ``DATASOURCE::CS::ClusterNodePools``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterNodePoolsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterNodePools``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_node_pool_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodePoolIds: The list of node_pool IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePools")
    def attr_node_pools(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodePools: The list of node_pools.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePools"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class ClusterNodePoolsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterNodePools``.

        :param cluster_id: Property clusterId: Cluster ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5acff2ff695c10bbf3b4115adc03efbddf23c8c83bed6d2002f511d7d5879f5c)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterNodePoolsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterUserKubeconfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfig",
):
    '''A ROS resource type:  ``DATASOURCE::CS::ClusterUserKubeconfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterUserKubeconfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterUserKubeconfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the ACK cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Config: The content of the kubeconfig file.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiration")
    def attr_expiration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Expiration: The expiration time of the kubeconfig file.

        The value is the UTC time displayed in RFC3339 format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiration"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "private_ip_address": "privateIpAddress",
        "temporary_duration_minutes": "temporaryDurationMinutes",
    },
)
class ClusterUserKubeconfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterUserKubeconfig``.

        :param cluster_id: Property clusterId: The ID of the ACK cluster.
        :param private_ip_address: Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values: true: obtains the credential that is used to connect to the cluster over the internal network. false: obtains the credential that is used to connect to the cluster over the Internet. Default value: false.
        :param temporary_duration_minutes: Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320. Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__245a6f48f726cb8fd6ab4a508a1b778515142998b886c3fbb386e4f5e8eb7275)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument temporary_duration_minutes", value=temporary_duration_minutes, expected_type=type_hints["temporary_duration_minutes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
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


class KubernetesClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesClusters",
):
    '''A ROS resource type:  ``DATASOURCE::CS::KubernetesClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KubernetesClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::KubernetesClusters``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Clusters: The list of clusters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusters"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_spec": "clusterSpec",
        "cluster_type": "clusterType",
        "name": "name",
        "profile": "profile",
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
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::KubernetesClusters``.

        :param cluster_spec: Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values: ack.pro.small: professional managed Kubernetes cluster ack.standard: standard managed Kubernetes cluster By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        :param cluster_type: Property clusterType: The type of the cluster. Valid values: Kubernetes: dedicated Kubernetes cluster ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster Ask: ASK cluster ExternalKubernetes: registered external cluster When you query an ASK cluster, the value specified when the cluster was created is returned.
        :param name: Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        :param profile: Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values: Default: managed Kubernetes cluster Serverless: ASK cluster Edge: edge Kubernetes cluster By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f944cf8791691309755c0d6ffcffe02ef2e337f2dcac8886e4f761ab555e8fd)
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if name is not None:
            self._values["name"] = name
        if profile is not None:
            self._values["profile"] = profile

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
    '''A ROS template type:  ``DATASOURCE::CS::ClusterApplicationResources``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterApplicationResourcesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterApplicationResources``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterApplicationResourcesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "kind": "kind",
        "first_match": "firstMatch",
        "json_path": "jsonPath",
        "name": "name",
        "namespace": "namespace",
    },
)
class RosClusterApplicationResourcesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterApplicationResources``.

        :param cluster_id: 
        :param kind: 
        :param first_match: 
        :param json_path: 
        :param name: 
        :param namespace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afac1707af5d387ab35b81997080a04f80034e4329336e1349bc573c0cec3721)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument kind", value=kind, expected_type=type_hints["kind"])
            check_type(argname="argument first_match", value=first_match, expected_type=type_hints["first_match"])
            check_type(argname="argument json_path", value=json_path, expected_type=type_hints["json_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "kind": kind,
        }
        if first_match is not None:
            self._values["first_match"] = first_match
        if json_path is not None:
            self._values["json_path"] = json_path
        if name is not None:
            self._values["name"] = name
        if namespace is not None:
            self._values["namespace"] = namespace

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
    '''A ROS template type:  ``DATASOURCE::CS::ClusterNodePools``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterNodePoolsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterNodePools``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosClusterNodePoolsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class RosClusterNodePoolsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterNodePools``.

        :param cluster_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__932135b1bc0c9d508fdce11cb56e734b82ace28410fef956b87882e08ccee535)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }

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
    '''A ROS template type:  ``DATASOURCE::CS::ClusterUserKubeconfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterUserKubeconfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::ClusterUserKubeconfig``.

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
        "temporary_duration_minutes": "temporaryDurationMinutes",
    },
)
class RosClusterUserKubeconfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::ClusterUserKubeconfig``.

        :param cluster_id: 
        :param private_ip_address: 
        :param temporary_duration_minutes: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06bea1361aeb73bec26f29eef2cf56636c8a40b19527c9b777175fe28742873e)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument temporary_duration_minutes", value=temporary_duration_minutes, expected_type=type_hints["temporary_duration_minutes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
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


class RosKubernetesClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesClusters",
):
    '''A ROS template type:  ``DATASOURCE::CS::KubernetesClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKubernetesClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CS::KubernetesClusters``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.datasource.RosKubernetesClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_spec": "clusterSpec",
        "cluster_type": "clusterType",
        "name": "name",
        "profile": "profile",
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
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CS::KubernetesClusters``.

        :param cluster_spec: 
        :param cluster_type: 
        :param name: 
        :param profile: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__357c7542f353d4f19acbda582839ff5bf3a728a41ad9079bb5dd39e3070a3c2a)
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if name is not None:
            self._values["name"] = name
        if profile is not None:
            self._values["profile"] = profile

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKubernetesClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ClusterApplicationResources",
    "ClusterApplicationResourcesProps",
    "ClusterNodePools",
    "ClusterNodePoolsProps",
    "ClusterUserKubeconfig",
    "ClusterUserKubeconfigProps",
    "KubernetesClusters",
    "KubernetesClustersProps",
    "RosClusterApplicationResources",
    "RosClusterApplicationResourcesProps",
    "RosClusterNodePools",
    "RosClusterNodePoolsProps",
    "RosClusterUserKubeconfig",
    "RosClusterUserKubeconfigProps",
    "RosKubernetesClusters",
    "RosKubernetesClustersProps",
]

publication.publish()

def _typecheckingstub__293113022aca25e91d5765b13b06a36083e1f82d114b7115757e4e2546ae318c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterApplicationResourcesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc0fd0fb58ead564a98149a5b60b36741dc423967339e98c4ede2f7f5825fb61(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__5acff2ff695c10bbf3b4115adc03efbddf23c8c83bed6d2002f511d7d5879f5c(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__245a6f48f726cb8fd6ab4a508a1b778515142998b886c3fbb386e4f5e8eb7275(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__4f944cf8791691309755c0d6ffcffe02ef2e337f2dcac8886e4f761ab555e8fd(
    *,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__afac1707af5d387ab35b81997080a04f80034e4329336e1349bc573c0cec3721(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kind: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    first_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    json_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__932135b1bc0c9d508fdce11cb56e734b82ace28410fef956b87882e08ccee535(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__2352167fb62b05528154fb25c28e81e83e7312f21e44fc2eef41919b54e0270b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06bea1361aeb73bec26f29eef2cf56636c8a40b19527c9b777175fe28742873e(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_ip_address: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    temporary_duration_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__357c7542f353d4f19acbda582839ff5bf3a728a41ad9079bb5dd39e3070a3c2a(
    *,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
