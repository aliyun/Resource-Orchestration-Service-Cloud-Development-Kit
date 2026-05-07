'''
## Aliyun ROS CMS2 Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CMS2 from '@alicloud/ros-cdk-cms2';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-cms2.IIntegrationPolicy")
class IIntegrationPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``IntegrationPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the integration policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IntegrationPolicyProps":
        ...


class _IIntegrationPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``IntegrationPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cms2.IIntegrationPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the integration policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IntegrationPolicyProps":
        return typing.cast("IntegrationPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IIntegrationPolicy).__jsii_proxy_class__ = lambda : _IIntegrationPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cms2.IPrometheusInstance")
class IPrometheusInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PrometheusInstance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiInterUrl")
    def attr_http_api_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiIntraUrl")
    def attr_http_api_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayInterUrl")
    def attr_push_gateway_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayIntraUrl")
    def attr_push_gateway_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadInterUrl")
    def attr_remote_read_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadIntraUrl")
    def attr_remote_read_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteInterUrl")
    def attr_remote_write_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteIntraUrl")
    def attr_remote_write_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusInstanceProps":
        ...


class _IPrometheusInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PrometheusInstance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cms2.IPrometheusInstance"

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiInterUrl")
    def attr_http_api_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiIntraUrl")
    def attr_http_api_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayInterUrl")
    def attr_push_gateway_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPushGatewayInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayIntraUrl")
    def attr_push_gateway_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPushGatewayIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadInterUrl")
    def attr_remote_read_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteReadInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadIntraUrl")
    def attr_remote_read_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteReadIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteInterUrl")
    def attr_remote_write_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteWriteInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteIntraUrl")
    def attr_remote_write_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteWriteIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusInstanceProps":
        return typing.cast("PrometheusInstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPrometheusInstance).__jsii_proxy_class__ = lambda : _IPrometheusInstanceProxy


@jsii.implements(IIntegrationPolicy)
class IntegrationPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.IntegrationPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CMS2::IntegrationPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIntegrationPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IntegrationPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c2f6db31c6d84c8bb2e748b2087cc7b382213ca475ed633e117c0f9820b7974)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the integration policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IntegrationPolicyProps":
        return typing.cast("IntegrationPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7960a458bc90d635f6f6e9ccbd6388daa5c80afe1102ddce642365d440769c15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20d94f0fa2e15ff55d67c11aaa7c104eb2f005848d2040eb5bd735b8d62cc871)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40f179a1d03db6442225c96dae6117fa4c899e67617c2e47a8e9c2d6f0a207e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.IntegrationPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_type": "policyType",
        "entity_group": "entityGroup",
        "policy_name": "policyName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "workspace": "workspace",
    },
)
class IntegrationPolicyProps:
    def __init__(
        self,
        *,
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        entity_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIntegrationPolicy.EntityGroupProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosIntegrationPolicy.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``IntegrationPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy

        :param policy_type: Property policyType: The type of the integration policy.
        :param entity_group: Property entityGroup: The entity group information.
        :param policy_name: Property policyName: The name of the integration policy.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
        :param workspace: Property workspace: The workspace of the integration policy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d24f6e6184a464e0256741bdf974cf70cabacda58d62fa85a5e7a392737c39d)
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument entity_group", value=entity_group, expected_type=type_hints["entity_group"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_type": policy_type,
        }
        if entity_group is not None:
            self._values["entity_group"] = entity_group
        if policy_name is not None:
            self._values["policy_name"] = policy_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: The type of the integration policy.'''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def entity_group(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIntegrationPolicy.EntityGroupProperty"]]:
        '''Property entityGroup: The entity group information.'''
        result = self._values.get("entity_group")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIntegrationPolicy.EntityGroupProperty"]], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property policyName: The name of the integration policy.'''
        result = self._values.get("policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosIntegrationPolicy.TagsProperty"]]:
        '''Property tags: Tags to attach to integration policy.

        Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosIntegrationPolicy.TagsProperty"]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspace: The workspace of the integration policy.'''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IntegrationPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPrometheusInstance)
class PrometheusInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.PrometheusInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CMS2::PrometheusInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheusInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrometheusInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f700164b51cf47c07ae45f4cb281764f795f708df5f5d92289025b9aee1e0d9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiInterUrl")
    def attr_http_api_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiIntraUrl")
    def attr_http_api_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayInterUrl")
    def attr_push_gateway_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPushGatewayInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayIntraUrl")
    def attr_push_gateway_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPushGatewayIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadInterUrl")
    def attr_remote_read_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteReadInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadIntraUrl")
    def attr_remote_read_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteReadIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteInterUrl")
    def attr_remote_write_inter_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteWriteInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteIntraUrl")
    def attr_remote_write_intra_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemoteWriteIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusInstanceProps":
        return typing.cast("PrometheusInstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59166d84efa6eae1d56a8a63bbe8fa6d4763ee5e57a7d403a9986dea8b0ebf09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2a1492874b2e8050a1c939a8d3d12c8dd9f83f123992a3892ff96a7a0ad6ee5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__803954e2dff9b078e2db5f65914b37bd0e7b82db0ea04f5d3c028e8924de7845)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.PrometheusInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "prometheus_instance_name": "prometheusInstanceName",
        "archive_duration": "archiveDuration",
        "auth_free_read_policy": "authFreeReadPolicy",
        "auth_free_write_policy": "authFreeWritePolicy",
        "basic_metric_query_limit": "basicMetricQueryLimit",
        "enable_auth_free_read": "enableAuthFreeRead",
        "enable_auth_free_write": "enableAuthFreeWrite",
        "enable_auth_token": "enableAuthToken",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "storage_duration": "storageDuration",
        "workspace": "workspace",
    },
)
class PrometheusInstanceProps:
    def __init__(
        self,
        *,
        prometheus_instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        archive_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_free_read_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_free_write_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        basic_metric_query_limit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_free_read: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_free_write: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_token: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PrometheusInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance

        :param prometheus_instance_name: Property prometheusInstanceName: The name of the Prometheus instance.
        :param archive_duration: Property archiveDuration: The archive duration of the Prometheus instance.
        :param auth_free_read_policy: Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
        :param auth_free_write_policy: Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
        :param basic_metric_query_limit: Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
        :param enable_auth_free_read: Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
        :param enable_auth_free_write: Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
        :param enable_auth_token: Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
        :param payment_type: Property paymentType: The payment type of the Prometheus instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param status: Property status: The status of the Prometheus instance.
        :param storage_duration: Property storageDuration: The storage duration of the Prometheus instance.
        :param workspace: Property workspace: The workspace of the Prometheus instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6104353a2ee2ec269737e4050fad001bed7622729bcc8045cbe83e9c76863cf)
            check_type(argname="argument prometheus_instance_name", value=prometheus_instance_name, expected_type=type_hints["prometheus_instance_name"])
            check_type(argname="argument archive_duration", value=archive_duration, expected_type=type_hints["archive_duration"])
            check_type(argname="argument auth_free_read_policy", value=auth_free_read_policy, expected_type=type_hints["auth_free_read_policy"])
            check_type(argname="argument auth_free_write_policy", value=auth_free_write_policy, expected_type=type_hints["auth_free_write_policy"])
            check_type(argname="argument basic_metric_query_limit", value=basic_metric_query_limit, expected_type=type_hints["basic_metric_query_limit"])
            check_type(argname="argument enable_auth_free_read", value=enable_auth_free_read, expected_type=type_hints["enable_auth_free_read"])
            check_type(argname="argument enable_auth_free_write", value=enable_auth_free_write, expected_type=type_hints["enable_auth_free_write"])
            check_type(argname="argument enable_auth_token", value=enable_auth_token, expected_type=type_hints["enable_auth_token"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument storage_duration", value=storage_duration, expected_type=type_hints["storage_duration"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "prometheus_instance_name": prometheus_instance_name,
        }
        if archive_duration is not None:
            self._values["archive_duration"] = archive_duration
        if auth_free_read_policy is not None:
            self._values["auth_free_read_policy"] = auth_free_read_policy
        if auth_free_write_policy is not None:
            self._values["auth_free_write_policy"] = auth_free_write_policy
        if basic_metric_query_limit is not None:
            self._values["basic_metric_query_limit"] = basic_metric_query_limit
        if enable_auth_free_read is not None:
            self._values["enable_auth_free_read"] = enable_auth_free_read
        if enable_auth_free_write is not None:
            self._values["enable_auth_free_write"] = enable_auth_free_write
        if enable_auth_token is not None:
            self._values["enable_auth_token"] = enable_auth_token
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if storage_duration is not None:
            self._values["storage_duration"] = storage_duration
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def prometheus_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prometheusInstanceName: The name of the Prometheus instance.'''
        result = self._values.get("prometheus_instance_name")
        assert result is not None, "Required property 'prometheus_instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def archive_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property archiveDuration: The archive duration of the Prometheus instance.'''
        result = self._values.get("archive_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_free_read_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.'''
        result = self._values.get("auth_free_read_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_free_write_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.'''
        result = self._values.get("auth_free_write_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def basic_metric_query_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.'''
        result = self._values.get("basic_metric_query_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_free_read(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.'''
        result = self._values.get("enable_auth_free_read")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_free_write(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.'''
        result = self._values.get("enable_auth_free_write")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.'''
        result = self._values.get("enable_auth_token")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: The payment type of the Prometheus instance.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the Prometheus instance.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageDuration: The storage duration of the Prometheus instance.'''
        result = self._values.get("storage_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspace: The workspace of the Prometheus instance.'''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheusInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIntegrationPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.RosIntegrationPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CMS2::IntegrationPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``IntegrationPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIntegrationPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13571b8912ec07f1e35d5a50137477077913ca6da3c866760ebdfae50eadafb9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c90c9e71dc8a0370a5bd4d329f8ddc5788ca0eec206ad8001401994d2c1458db)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The ID of the integration policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__627d59efe2d79e2886fe9f85fa1a7d76a5f3135987de03b7e0e8899d0b18521d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the integration policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55daec8981b99ee3e5f334b66bb3951b599576947bea2414c60739b6a65bdf77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="entityGroup")
    def entity_group(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIntegrationPolicy.EntityGroupProperty"]]:
        '''
        :Property: entityGroup: The entity group information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIntegrationPolicy.EntityGroupProperty"]], jsii.get(self, "entityGroup"))

    @entity_group.setter
    def entity_group(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIntegrationPolicy.EntityGroupProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9c252b13bfba52f600a6850bb95d5abcd588f0fd3fb3775c173a0ea617fbc65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyName: The name of the integration policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68f0724ab204983a566a855c2a891c3dea805e3e86c33e72418a0d60507bc5c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__4df022129a8436e0ce679ed512c6588a8a139b503a6d4656fe4a22c9cb8b950a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosIntegrationPolicy.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosIntegrationPolicy.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosIntegrationPolicy.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d863aeaaaf43f7f33056a5ac67988bb25d274f91f56a7e404046092dacd9dc2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="workspace")
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the integration policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspace"))

    @workspace.setter
    def workspace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f256ef466766782ce598a4d06ab574bd939bd0144b495e3e7bd72e17244b602)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspace", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosIntegrationPolicy.EntityGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cluster_entity_type": "clusterEntityType",
            "cluster_id": "clusterId",
            "cluster_namespace": "clusterNamespace",
            "disable_policy_share": "disablePolicyShare",
            "entity_group_id": "entityGroupId",
            "entity_user_id": "entityUserId",
            "vpc_id": "vpcId",
        },
    )
    class EntityGroupProperty:
        def __init__(
            self,
            *,
            cluster_entity_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cluster_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disable_policy_share: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            entity_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            entity_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cluster_entity_type: 
            :param cluster_id: 
            :param cluster_namespace: 
            :param disable_policy_share: 
            :param entity_group_id: 
            :param entity_user_id: 
            :param vpc_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d65dc7e0ae5f39b78814694b9811ea3a25f0b758e58d595006bfbe5b3fda201b)
                check_type(argname="argument cluster_entity_type", value=cluster_entity_type, expected_type=type_hints["cluster_entity_type"])
                check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
                check_type(argname="argument cluster_namespace", value=cluster_namespace, expected_type=type_hints["cluster_namespace"])
                check_type(argname="argument disable_policy_share", value=disable_policy_share, expected_type=type_hints["disable_policy_share"])
                check_type(argname="argument entity_group_id", value=entity_group_id, expected_type=type_hints["entity_group_id"])
                check_type(argname="argument entity_user_id", value=entity_user_id, expected_type=type_hints["entity_user_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cluster_entity_type is not None:
                self._values["cluster_entity_type"] = cluster_entity_type
            if cluster_id is not None:
                self._values["cluster_id"] = cluster_id
            if cluster_namespace is not None:
                self._values["cluster_namespace"] = cluster_namespace
            if disable_policy_share is not None:
                self._values["disable_policy_share"] = disable_policy_share
            if entity_group_id is not None:
                self._values["entity_group_id"] = entity_group_id
            if entity_user_id is not None:
                self._values["entity_user_id"] = entity_user_id
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id

        @builtins.property
        def cluster_entity_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterEntityType: The cluster entity type.
            '''
            result = self._values.get("cluster_entity_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterId: The cluster ID.
            '''
            result = self._values.get("cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cluster_namespace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterNamespace: The cluster namespace.
            '''
            result = self._values.get("cluster_namespace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disable_policy_share(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disablePolicyShare: Whether to disable policy sharing.
            '''
            result = self._values.get("disable_policy_share")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def entity_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: entityGroupId: The entity group ID.
            '''
            result = self._values.get("entity_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def entity_user_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: entityUserId: The entity user ID.
            '''
            result = self._values.get("entity_user_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: The VPC ID.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EntityGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosIntegrationPolicy.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cfc877cdbce301a1883cc1f9db7ec6647b0d471200437943e5594b7ceb1d5875)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.RosIntegrationPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_type": "policyType",
        "entity_group": "entityGroup",
        "policy_name": "policyName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "workspace": "workspace",
    },
)
class RosIntegrationPolicyProps:
    def __init__(
        self,
        *,
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        entity_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIntegrationPolicy.EntityGroupProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosIntegrationPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosIntegrationPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy

        :param policy_type: 
        :param entity_group: 
        :param policy_name: 
        :param resource_group_id: 
        :param tags: 
        :param workspace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deec0e250dcf608fbd103d4505d287f1f4c847e4da43f32fc87372098826e4ca)
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument entity_group", value=entity_group, expected_type=type_hints["entity_group"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_type": policy_type,
        }
        if entity_group is not None:
            self._values["entity_group"] = entity_group
        if policy_name is not None:
            self._values["policy_name"] = policy_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the integration policy.
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def entity_group(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIntegrationPolicy.EntityGroupProperty]]:
        '''
        :Property: entityGroup: The entity group information.
        '''
        result = self._values.get("entity_group")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIntegrationPolicy.EntityGroupProperty]], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyName: The name of the integration policy.
        '''
        result = self._values.get("policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosIntegrationPolicy.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosIntegrationPolicy.TagsProperty]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the integration policy.
        '''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIntegrationPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheusInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.RosPrometheusInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CMS2::PrometheusInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrometheusInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheusInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e46153ce0607a448da24ca52f1e9fd5502a78465e7a2ad03c0a7330c0fe71606)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a9f95f69cb54cb29dae44803002094016f75fd64ac3760d2783de67d6efe4ec3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiInterUrl")
    def attr_http_api_inter_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiIntraUrl")
    def attr_http_api_intra_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrometheusInstanceId: The ID of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayInterUrl")
    def attr_push_gateway_inter_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPushGatewayInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrPushGatewayIntraUrl")
    def attr_push_gateway_intra_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPushGatewayIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadInterUrl")
    def attr_remote_read_inter_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteReadInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteReadIntraUrl")
    def attr_remote_read_intra_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteReadIntraUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteInterUrl")
    def attr_remote_write_inter_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteWriteInterUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrRemoteWriteIntraUrl")
    def attr_remote_write_intra_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemoteWriteIntraUrl"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__70eb5cf6c1156dd7e849e295cc8be07d28682ad310a0c1983dc10a1fda520669)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusInstanceName")
    def prometheus_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusInstanceName: The name of the Prometheus instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prometheusInstanceName"))

    @prometheus_instance_name.setter
    def prometheus_instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22119ae1c3403b8fcc9fcd2b79f7c4342961030b5a9f5810131f093fa2882741)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusInstanceName", value)

    @builtins.property
    @jsii.member(jsii_name="archiveDuration")
    def archive_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: archiveDuration: The archive duration of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "archiveDuration"))

    @archive_duration.setter
    def archive_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f885f06d299ce34048cf2004e022f4d1c8879696cffeebc24db9339b5cd50c13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archiveDuration", value)

    @builtins.property
    @jsii.member(jsii_name="authFreeReadPolicy")
    def auth_free_read_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authFreeReadPolicy"))

    @auth_free_read_policy.setter
    def auth_free_read_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0391ab06164e1a21bd879b9aaf391ef415450779e9ae9bbc7a18535ef3fea7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authFreeReadPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="authFreeWritePolicy")
    def auth_free_write_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authFreeWritePolicy"))

    @auth_free_write_policy.setter
    def auth_free_write_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbad148c9b44fb6ed80d5940524660624acbdb944cf9667855a689cb977cfb2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authFreeWritePolicy", value)

    @builtins.property
    @jsii.member(jsii_name="basicMetricQueryLimit")
    def basic_metric_query_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "basicMetricQueryLimit"))

    @basic_metric_query_limit.setter
    def basic_metric_query_limit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5457e2d373da08fc2118afe8e461e632f60cbcffb743ae8df4599e19055022fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "basicMetricQueryLimit", value)

    @builtins.property
    @jsii.member(jsii_name="enableAuthFreeRead")
    def enable_auth_free_read(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAuthFreeRead"))

    @enable_auth_free_read.setter
    def enable_auth_free_read(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__902b3d874486a587b72486ca51ddc179ed59dd575354352f0f7edf9e3f14bf78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAuthFreeRead", value)

    @builtins.property
    @jsii.member(jsii_name="enableAuthFreeWrite")
    def enable_auth_free_write(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAuthFreeWrite"))

    @enable_auth_free_write.setter
    def enable_auth_free_write(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbdd1a447cc416f802458c6c2e30b487fec676ffcc1c93072c0902492e3f2fec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAuthFreeWrite", value)

    @builtins.property
    @jsii.member(jsii_name="enableAuthToken")
    def enable_auth_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthToken: Whether to enable authentication token for the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAuthToken"))

    @enable_auth_token.setter
    def enable_auth_token(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2c3d3e1b98578a60c5fae85c8aa92ffcd786a66a846126d00798c794a6b027b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAuthToken", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The payment type of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd506766ff6c20f1352d0527cc0678bb7b50b8707bc752cdaeb55bf6a95acf65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f7bc610ff0d5d6493d7cce56cfd1559749ae4d6eb6254d0bcbdf8887fba13b96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bb70177a466cd66838ef9792b1f7cb25c44cff41e7a2ba0945871547bfa17ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="storageDuration")
    def storage_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageDuration: The storage duration of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageDuration"))

    @storage_duration.setter
    def storage_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec65197a28dd4664704132efbaa691d7098eaca42084a396064200b156e33b35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageDuration", value)

    @builtins.property
    @jsii.member(jsii_name="workspace")
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the Prometheus instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspace"))

    @workspace.setter
    def workspace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c6c013e899800dc5419f5c2c9f6cf2a4e78ac634e3ff1c80aa9a89eb1c24535)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspace", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.RosPrometheusInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "prometheus_instance_name": "prometheusInstanceName",
        "archive_duration": "archiveDuration",
        "auth_free_read_policy": "authFreeReadPolicy",
        "auth_free_write_policy": "authFreeWritePolicy",
        "basic_metric_query_limit": "basicMetricQueryLimit",
        "enable_auth_free_read": "enableAuthFreeRead",
        "enable_auth_free_write": "enableAuthFreeWrite",
        "enable_auth_token": "enableAuthToken",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "storage_duration": "storageDuration",
        "workspace": "workspace",
    },
)
class RosPrometheusInstanceProps:
    def __init__(
        self,
        *,
        prometheus_instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        archive_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_free_read_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_free_write_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        basic_metric_query_limit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_free_read: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_free_write: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auth_token: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheusInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance

        :param prometheus_instance_name: 
        :param archive_duration: 
        :param auth_free_read_policy: 
        :param auth_free_write_policy: 
        :param basic_metric_query_limit: 
        :param enable_auth_free_read: 
        :param enable_auth_free_write: 
        :param enable_auth_token: 
        :param payment_type: 
        :param resource_group_id: 
        :param status: 
        :param storage_duration: 
        :param workspace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__355adcba7a792e8254c41daeb8fae88f014bab0614c8050d1d93de41c78edbc9)
            check_type(argname="argument prometheus_instance_name", value=prometheus_instance_name, expected_type=type_hints["prometheus_instance_name"])
            check_type(argname="argument archive_duration", value=archive_duration, expected_type=type_hints["archive_duration"])
            check_type(argname="argument auth_free_read_policy", value=auth_free_read_policy, expected_type=type_hints["auth_free_read_policy"])
            check_type(argname="argument auth_free_write_policy", value=auth_free_write_policy, expected_type=type_hints["auth_free_write_policy"])
            check_type(argname="argument basic_metric_query_limit", value=basic_metric_query_limit, expected_type=type_hints["basic_metric_query_limit"])
            check_type(argname="argument enable_auth_free_read", value=enable_auth_free_read, expected_type=type_hints["enable_auth_free_read"])
            check_type(argname="argument enable_auth_free_write", value=enable_auth_free_write, expected_type=type_hints["enable_auth_free_write"])
            check_type(argname="argument enable_auth_token", value=enable_auth_token, expected_type=type_hints["enable_auth_token"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument storage_duration", value=storage_duration, expected_type=type_hints["storage_duration"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "prometheus_instance_name": prometheus_instance_name,
        }
        if archive_duration is not None:
            self._values["archive_duration"] = archive_duration
        if auth_free_read_policy is not None:
            self._values["auth_free_read_policy"] = auth_free_read_policy
        if auth_free_write_policy is not None:
            self._values["auth_free_write_policy"] = auth_free_write_policy
        if basic_metric_query_limit is not None:
            self._values["basic_metric_query_limit"] = basic_metric_query_limit
        if enable_auth_free_read is not None:
            self._values["enable_auth_free_read"] = enable_auth_free_read
        if enable_auth_free_write is not None:
            self._values["enable_auth_free_write"] = enable_auth_free_write
        if enable_auth_token is not None:
            self._values["enable_auth_token"] = enable_auth_token
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if storage_duration is not None:
            self._values["storage_duration"] = storage_duration
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def prometheus_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusInstanceName: The name of the Prometheus instance.
        '''
        result = self._values.get("prometheus_instance_name")
        assert result is not None, "Required property 'prometheus_instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def archive_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: archiveDuration: The archive duration of the Prometheus instance.
        '''
        result = self._values.get("archive_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_free_read_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
        '''
        result = self._values.get("auth_free_read_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_free_write_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
        '''
        result = self._values.get("auth_free_write_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def basic_metric_query_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
        '''
        result = self._values.get("basic_metric_query_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_free_read(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
        '''
        result = self._values.get("enable_auth_free_read")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_free_write(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
        '''
        result = self._values.get("enable_auth_free_write")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auth_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAuthToken: Whether to enable authentication token for the Prometheus instance.
        '''
        result = self._values.get("enable_auth_token")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The payment type of the Prometheus instance.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the Prometheus instance.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageDuration: The storage duration of the Prometheus instance.
        '''
        result = self._values.get("storage_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the Prometheus instance.
        '''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheusInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IIntegrationPolicy",
    "IPrometheusInstance",
    "IntegrationPolicy",
    "IntegrationPolicyProps",
    "PrometheusInstance",
    "PrometheusInstanceProps",
    "RosIntegrationPolicy",
    "RosIntegrationPolicyProps",
    "RosPrometheusInstance",
    "RosPrometheusInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__7c2f6db31c6d84c8bb2e748b2087cc7b382213ca475ed633e117c0f9820b7974(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IntegrationPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7960a458bc90d635f6f6e9ccbd6388daa5c80afe1102ddce642365d440769c15(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20d94f0fa2e15ff55d67c11aaa7c104eb2f005848d2040eb5bd735b8d62cc871(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40f179a1d03db6442225c96dae6117fa4c899e67617c2e47a8e9c2d6f0a207e7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d24f6e6184a464e0256741bdf974cf70cabacda58d62fa85a5e7a392737c39d(
    *,
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    entity_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIntegrationPolicy.EntityGroupProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosIntegrationPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f700164b51cf47c07ae45f4cb281764f795f708df5f5d92289025b9aee1e0d9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrometheusInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59166d84efa6eae1d56a8a63bbe8fa6d4763ee5e57a7d403a9986dea8b0ebf09(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2a1492874b2e8050a1c939a8d3d12c8dd9f83f123992a3892ff96a7a0ad6ee5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__803954e2dff9b078e2db5f65914b37bd0e7b82db0ea04f5d3c028e8924de7845(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6104353a2ee2ec269737e4050fad001bed7622729bcc8045cbe83e9c76863cf(
    *,
    prometheus_instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    archive_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_free_read_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_free_write_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    basic_metric_query_limit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_free_read: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_free_write: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_token: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13571b8912ec07f1e35d5a50137477077913ca6da3c866760ebdfae50eadafb9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIntegrationPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c90c9e71dc8a0370a5bd4d329f8ddc5788ca0eec206ad8001401994d2c1458db(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__627d59efe2d79e2886fe9f85fa1a7d76a5f3135987de03b7e0e8899d0b18521d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55daec8981b99ee3e5f334b66bb3951b599576947bea2414c60739b6a65bdf77(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9c252b13bfba52f600a6850bb95d5abcd588f0fd3fb3775c173a0ea617fbc65(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIntegrationPolicy.EntityGroupProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68f0724ab204983a566a855c2a891c3dea805e3e86c33e72418a0d60507bc5c8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4df022129a8436e0ce679ed512c6588a8a139b503a6d4656fe4a22c9cb8b950a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d863aeaaaf43f7f33056a5ac67988bb25d274f91f56a7e404046092dacd9dc2d(
    value: typing.Optional[typing.List[RosIntegrationPolicy.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f256ef466766782ce598a4d06ab574bd939bd0144b495e3e7bd72e17244b602(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d65dc7e0ae5f39b78814694b9811ea3a25f0b758e58d595006bfbe5b3fda201b(
    *,
    cluster_entity_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_policy_share: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entity_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfc877cdbce301a1883cc1f9db7ec6647b0d471200437943e5594b7ceb1d5875(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deec0e250dcf608fbd103d4505d287f1f4c847e4da43f32fc87372098826e4ca(
    *,
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    entity_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIntegrationPolicy.EntityGroupProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosIntegrationPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e46153ce0607a448da24ca52f1e9fd5502a78465e7a2ad03c0a7330c0fe71606(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheusInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9f95f69cb54cb29dae44803002094016f75fd64ac3760d2783de67d6efe4ec3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70eb5cf6c1156dd7e849e295cc8be07d28682ad310a0c1983dc10a1fda520669(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22119ae1c3403b8fcc9fcd2b79f7c4342961030b5a9f5810131f093fa2882741(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f885f06d299ce34048cf2004e022f4d1c8879696cffeebc24db9339b5cd50c13(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0391ab06164e1a21bd879b9aaf391ef415450779e9ae9bbc7a18535ef3fea7b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbad148c9b44fb6ed80d5940524660624acbdb944cf9667855a689cb977cfb2f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5457e2d373da08fc2118afe8e461e632f60cbcffb743ae8df4599e19055022fb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__902b3d874486a587b72486ca51ddc179ed59dd575354352f0f7edf9e3f14bf78(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbdd1a447cc416f802458c6c2e30b487fec676ffcc1c93072c0902492e3f2fec(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2c3d3e1b98578a60c5fae85c8aa92ffcd786a66a846126d00798c794a6b027b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd506766ff6c20f1352d0527cc0678bb7b50b8707bc752cdaeb55bf6a95acf65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bc610ff0d5d6493d7cce56cfd1559749ae4d6eb6254d0bcbdf8887fba13b96(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bb70177a466cd66838ef9792b1f7cb25c44cff41e7a2ba0945871547bfa17ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec65197a28dd4664704132efbaa691d7098eaca42084a396064200b156e33b35(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c6c013e899800dc5419f5c2c9f6cf2a4e78ac634e3ff1c80aa9a89eb1c24535(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__355adcba7a792e8254c41daeb8fae88f014bab0614c8050d1d93de41c78edbc9(
    *,
    prometheus_instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    archive_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_free_read_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_free_write_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    basic_metric_query_limit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_free_read: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_free_write: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auth_token: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
