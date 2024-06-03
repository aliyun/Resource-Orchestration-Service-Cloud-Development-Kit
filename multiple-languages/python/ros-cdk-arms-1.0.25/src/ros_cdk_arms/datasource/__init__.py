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


class Prometheis(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.Prometheis",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ARMS::Prometheis``, which is used to query Prometheus instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheis``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PrometheisProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efc4d0a450f3130e4ba7e0b9168707ebfe712bfbd7655ea157dac03fcd63b1f5)
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
    @jsii.member(jsii_name="attrPrometheis")
    def attr_prometheis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Prometheis: The list of Prometheis.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheis"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65017508ce98144f510b1d802eebfac24c5f75af92b952ee9261c2ae41fe6be2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd067e3e0f83b9ad943ffb4c983a5a3caa363aca691390de36ea262b3e99385)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrometheisProps":
        return typing.cast("PrometheisProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrometheisProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8259091d75a73417825037681333fd8742d861667c10e7a7794c49edf70fd3e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac42719a76ed168057713188c30be8cdcdf97b0cd8d9949d11a9f40985f45e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.PrometheisProps",
    jsii_struct_bases=[],
    name_mapping={"resource_group_id": "resourceGroupId"},
)
class PrometheisProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Prometheis``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis

        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d037090d370d8535ad5554af1ed54c753b49d319f6278aad5c673eeec79f9d71)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrometheusAuthToken(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.PrometheusAuthToken",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ARMS::PrometheusAuthToken``, which is used to query an authentication token for read and write over the Internet.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheusAuthToken``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PrometheusAuthTokenProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__221587cb5b389ccc3fb12dffce98fa6a68743bad431caac32a56c4899f59d7ba)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrToken")
    def attr_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Token: The token for Grafana read URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrToken"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39fd7b3d3c29503affb0e285c0479d8de78bae1ba4385afecacb3aa710522425)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__279630f188ff68d11ccd347b948318398e9095196440b5dfd82b1532746afa0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrometheusAuthTokenProps":
        return typing.cast("PrometheusAuthTokenProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrometheusAuthTokenProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aceb58b7aa3abfc6eb1992e83edcd25de0f8e5ee88c4683e07247d9f7303bea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c16563795ee364532b4449829e8202dcc17773e4033a47eed4abaeece0e02c10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.PrometheusAuthTokenProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class PrometheusAuthTokenProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PrometheusAuthToken``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken

        :param cluster_id: Property clusterId: Cluster ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__815af4fc63ca255a55ff59e60d36934cb55b64eeb03bf519d816074230ff74f5)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheusAuthTokenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrometheusUrl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.PrometheusUrl",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ARMS::PrometheusUrl``, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheusUrl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PrometheusUrlProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f65bc99fcaeb19958e27b04b170c50fbaf3004635be5fa41b09c757f438fe156)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterType: Cluster type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaUrl")
    def attr_grafana_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetGrafanaUrl")
    def attr_internet_grafana_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetGrafanaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetOpenTelemetryUrl")
    def attr_internet_open_telemetry_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetOpenTelemetryUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPushGatewayUrl")
    def attr_internet_push_gateway_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetPushGatewayUrl: Internet push gateway URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetPushGatewayUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetRemoteReadUrl")
    def attr_internet_remote_read_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetRemoteReadUrl: Internet remote read URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetRemoteReadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetRemoteWriteUrl")
    def attr_internet_remote_write_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetRemoteWriteUrl: Internet remote write URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetRemoteWriteUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenTelemetryUrl")
    def attr_open_telemetry_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenTelemetryUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayUrl")
    def attr_push_gateway_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PushGatewayUrl: Internal push gateway URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPushGatewayUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadUrl")
    def attr_remote_read_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RemoteReadUrl: Internal remote read URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteReadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteUrl")
    def attr_remote_write_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RemoteWriteUrl: Internal remote write URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteWriteUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrToken")
    def attr_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Token: The token for Grafana read URL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrToken"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76852f8cbc84f749432963a3edd9d5ac0d1508941eea5a04f6ec2ecb32f11481)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e89caa1b5889f9a4ee4a21c97f0a53ea7c09b175769a6742764cf960ce212c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrometheusUrlProps":
        return typing.cast("PrometheusUrlProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrometheusUrlProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af80f4de8af0ccf384220836d95a7f57200dd04ba58ec8095c867ed2bd3ca2f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__358f7849c7724fc290db578998a41557635768f69b49c390bf97aac8336a4384)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.PrometheusUrlProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class PrometheusUrlProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PrometheusUrl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl

        :param cluster_id: Property clusterId: Cluster ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6921d49b450dd2a63111e6e34cacb2147072e694b8451487fd2d5119b2c1dddd)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheusUrlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheis(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheis",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ARMS::Prometheis``, which is used to query Prometheus instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Prometheis`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheisProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd451ea9b7173b67d3e4af4a1606ad55c5f5f2718213767edfc434b1d181fc3e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__43222b39729a2397411490223551bc48501ec603aebffc8f5d45ffe2ce449044)
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
    @jsii.member(jsii_name="attrPrometheis")
    def attr_prometheis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Prometheis: The list of Prometheis.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheis"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__06458f8ea441877123046a5cebd3ed7864418f637ec187d539975f312a8defd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92afe54bd0d8873d143446f1bf19be3adc989f6e7b6c94995efe046f373ee045)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheisProps",
    jsii_struct_bases=[],
    name_mapping={"resource_group_id": "resourceGroupId"},
)
class RosPrometheisProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheis``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis

        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efd884d197d1e01a7eedc07d81ffe73e0d3907da215a8332a994637a4f742816)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheusAuthToken(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheusAuthToken",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ARMS::PrometheusAuthToken``, which is used to query an authentication token for read and write over the Internet.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrometheusAuthToken`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheusAuthTokenProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9189af78bb05920ce862b7bc5f1f388a67787a511771ab5d1b8729859c71a93)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c9bd68648656b5f1862ffd2fea88c6c7f331d657c7800d02e91abceb88331bfc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrToken")
    def attr_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Token: The token for Grafana read URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrToken"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5a76c32072ecd4185cf6a782a98bc3042d60809231d4ca62f97768ce5a8ec40d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1f5b492fb88285f542dbd1a193c0931f14762a7b7675c296172e81d94d21da1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheusAuthTokenProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class RosPrometheusAuthTokenProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheusAuthToken``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken

        :param cluster_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0556fa2c368982fca38ca465caf76863ec7f7312f746c789613541fcc4515f74)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheusAuthTokenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheusUrl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheusUrl",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ARMS::PrometheusUrl``, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrometheusUrl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheusUrlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6c4d1e748350b77b3d9da83d7f4a69c30f1d9eb067f60c28f0b76b0d0d0383d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__666178081693d13bdce44c63c685a02780822977a7039d362e088105230b59d5)
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
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: Cluster type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaUrl")
    def attr_grafana_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GrafanaUrl: Internal HTTP API URL (Grafana read URL).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetGrafanaUrl")
    def attr_internet_grafana_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetGrafanaUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetOpenTelemetryUrl")
    def attr_internet_open_telemetry_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetOpenTelemetryUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPushGatewayUrl")
    def attr_internet_push_gateway_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetPushGatewayUrl: Internet push gateway URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetPushGatewayUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetRemoteReadUrl")
    def attr_internet_remote_read_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetRemoteReadUrl: Internet remote read URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetRemoteReadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetRemoteWriteUrl")
    def attr_internet_remote_write_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetRemoteWriteUrl: Internet remote write URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetRemoteWriteUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenTelemetryUrl")
    def attr_open_telemetry_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OpenTelemetryUrl: Internal OpenTelemetry URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenTelemetryUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayUrl")
    def attr_push_gateway_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PushGatewayUrl: Internal push gateway URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPushGatewayUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadUrl")
    def attr_remote_read_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteReadUrl: Internal remote read URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteReadUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteUrl")
    def attr_remote_write_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteWriteUrl: Internal remote write URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteWriteUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrToken")
    def attr_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Token: The token for Grafana read URL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrToken"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fad3928d69f832bef925c34b5e980d0fb816dfc19cfed8389805750dd6e790ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4edef182392a3a0a0553b4ffc18109062e280b2f500f79587c67eb032de8c3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.datasource.RosPrometheusUrlProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId"},
)
class RosPrometheusUrlProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheusUrl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl

        :param cluster_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f23f916a974daef028675265cc93216b63d78032c07183f16b66ee7b1095c845)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheusUrlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Prometheis",
    "PrometheisProps",
    "PrometheusAuthToken",
    "PrometheusAuthTokenProps",
    "PrometheusUrl",
    "PrometheusUrlProps",
    "RosPrometheis",
    "RosPrometheisProps",
    "RosPrometheusAuthToken",
    "RosPrometheusAuthTokenProps",
    "RosPrometheusUrl",
    "RosPrometheusUrlProps",
]

publication.publish()

def _typecheckingstub__efc4d0a450f3130e4ba7e0b9168707ebfe712bfbd7655ea157dac03fcd63b1f5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PrometheisProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65017508ce98144f510b1d802eebfac24c5f75af92b952ee9261c2ae41fe6be2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd067e3e0f83b9ad943ffb4c983a5a3caa363aca691390de36ea262b3e99385(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8259091d75a73417825037681333fd8742d861667c10e7a7794c49edf70fd3e3(
    value: PrometheisProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac42719a76ed168057713188c30be8cdcdf97b0cd8d9949d11a9f40985f45e72(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d037090d370d8535ad5554af1ed54c753b49d319f6278aad5c673eeec79f9d71(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__221587cb5b389ccc3fb12dffce98fa6a68743bad431caac32a56c4899f59d7ba(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PrometheusAuthTokenProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39fd7b3d3c29503affb0e285c0479d8de78bae1ba4385afecacb3aa710522425(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__279630f188ff68d11ccd347b948318398e9095196440b5dfd82b1532746afa0f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aceb58b7aa3abfc6eb1992e83edcd25de0f8e5ee88c4683e07247d9f7303bea(
    value: PrometheusAuthTokenProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c16563795ee364532b4449829e8202dcc17773e4033a47eed4abaeece0e02c10(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__815af4fc63ca255a55ff59e60d36934cb55b64eeb03bf519d816074230ff74f5(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f65bc99fcaeb19958e27b04b170c50fbaf3004635be5fa41b09c757f438fe156(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PrometheusUrlProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76852f8cbc84f749432963a3edd9d5ac0d1508941eea5a04f6ec2ecb32f11481(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e89caa1b5889f9a4ee4a21c97f0a53ea7c09b175769a6742764cf960ce212c5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af80f4de8af0ccf384220836d95a7f57200dd04ba58ec8095c867ed2bd3ca2f1(
    value: PrometheusUrlProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__358f7849c7724fc290db578998a41557635768f69b49c390bf97aac8336a4384(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6921d49b450dd2a63111e6e34cacb2147072e694b8451487fd2d5119b2c1dddd(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd451ea9b7173b67d3e4af4a1606ad55c5f5f2718213767edfc434b1d181fc3e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheisProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43222b39729a2397411490223551bc48501ec603aebffc8f5d45ffe2ce449044(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06458f8ea441877123046a5cebd3ed7864418f637ec187d539975f312a8defd1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92afe54bd0d8873d143446f1bf19be3adc989f6e7b6c94995efe046f373ee045(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efd884d197d1e01a7eedc07d81ffe73e0d3907da215a8332a994637a4f742816(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9189af78bb05920ce862b7bc5f1f388a67787a511771ab5d1b8729859c71a93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheusAuthTokenProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9bd68648656b5f1862ffd2fea88c6c7f331d657c7800d02e91abceb88331bfc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a76c32072ecd4185cf6a782a98bc3042d60809231d4ca62f97768ce5a8ec40d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1f5b492fb88285f542dbd1a193c0931f14762a7b7675c296172e81d94d21da1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0556fa2c368982fca38ca465caf76863ec7f7312f746c789613541fcc4515f74(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6c4d1e748350b77b3d9da83d7f4a69c30f1d9eb067f60c28f0b76b0d0d0383d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheusUrlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__666178081693d13bdce44c63c685a02780822977a7039d362e088105230b59d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fad3928d69f832bef925c34b5e980d0fb816dfc19cfed8389805750dd6e790ed(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4edef182392a3a0a0553b4ffc18109062e280b2f500f79587c67eb032de8c3c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f23f916a974daef028675265cc93216b63d78032c07183f16b66ee7b1095c845(
    *,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
