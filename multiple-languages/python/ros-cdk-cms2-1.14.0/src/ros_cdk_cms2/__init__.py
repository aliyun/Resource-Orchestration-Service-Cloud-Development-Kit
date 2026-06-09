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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.AddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_name": "addonName",
        "addon_version": "addonVersion",
        "policy_id": "policyId",
        "entity_rules": "entityRules",
        "env_type": "envType",
        "lang": "lang",
        "parent_addon_release_id": "parentAddonReleaseId",
        "release_name": "releaseName",
        "values": "values",
        "workspace": "workspace",
    },
)
class AddonReleaseProps:
    def __init__(
        self,
        *,
        addon_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        entity_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddonRelease.EntityRulesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        env_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parent_addon_release_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease

        :param addon_name: Property addonName: The name of the add-on.
        :param addon_version: Property addonVersion: The version of the add-on.
        :param policy_id: Property policyId: The ID of the integration policy.
        :param entity_rules: Property entityRules: Entity discovery rules model.
        :param env_type: Property envType: The environment type.
        :param lang: Property lang: The language of the add-on.
        :param parent_addon_release_id: Property parentAddonReleaseId: The ID of the parent add-on release.
        :param release_name: Property releaseName: The name of the add-on release.
        :param values: Property values: The values of the add-on release.
        :param workspace: Property workspace: The workspace of the add-on release.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__848170b165f0041e9fa86c15b78d77e6ed9df939be18233590308e2c66d75bb4)
            check_type(argname="argument addon_name", value=addon_name, expected_type=type_hints["addon_name"])
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument policy_id", value=policy_id, expected_type=type_hints["policy_id"])
            check_type(argname="argument entity_rules", value=entity_rules, expected_type=type_hints["entity_rules"])
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument parent_addon_release_id", value=parent_addon_release_id, expected_type=type_hints["parent_addon_release_id"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_name": addon_name,
            "addon_version": addon_version,
            "policy_id": policy_id,
        }
        if entity_rules is not None:
            self._values["entity_rules"] = entity_rules
        if env_type is not None:
            self._values["env_type"] = env_type
        if lang is not None:
            self._values["lang"] = lang
        if parent_addon_release_id is not None:
            self._values["parent_addon_release_id"] = parent_addon_release_id
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def addon_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addonName: The name of the add-on.'''
        result = self._values.get("addon_name")
        assert result is not None, "Required property 'addon_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addonVersion: The version of the add-on.'''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyId: The ID of the integration policy.'''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def entity_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.EntityRulesProperty"]]:
        '''Property entityRules: Entity discovery rules model.'''
        result = self._values.get("entity_rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.EntityRulesProperty"]], result)

    @builtins.property
    def env_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property envType: The environment type.'''
        result = self._values.get("env_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language of the add-on.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parent_addon_release_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parentAddonReleaseId: The ID of the parent add-on release.'''
        result = self._values.get("parent_addon_release_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releaseName: The name of the add-on release.'''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property values: The values of the add-on release.'''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspace: The workspace of the add-on release.'''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddonReleaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cms2.IAddonRelease")
class IAddonRelease(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AddonRelease``.'''

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on release.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        ...


class _IAddonReleaseProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AddonRelease``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cms2.IAddonRelease"

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on release.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        return typing.cast(AddonReleaseProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAddonRelease).__jsii_proxy_class__ = lambda : _IAddonReleaseProxy


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


@jsii.interface(jsii_type="@alicloud/ros-cdk-cms2.IServiceObservability")
class IServiceObservability(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ServiceObservability``.'''

    @builtins.property
    @jsii.member(jsii_name="attrWorkspace")
    def attr_workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspace: The workspace of the service observability.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceObservabilityProps":
        ...


class _IServiceObservabilityProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ServiceObservability``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cms2.IServiceObservability"

    @builtins.property
    @jsii.member(jsii_name="attrWorkspace")
    def attr_workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspace: The workspace of the service observability.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceObservabilityProps":
        return typing.cast("ServiceObservabilityProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServiceObservability).__jsii_proxy_class__ = lambda : _IServiceObservabilityProxy


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


class RosAddonRelease(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CMS2::AddonRelease``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddonRelease`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddonReleaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46dd43332348ad307daec0860650a84f2b7d524d745dd23ae7c7c1ae83b46c7a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__92b2bd54759aea8dd67b2a850b13d503113badeae8f04c98acf60e79a80810f8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReleaseName: The name of the add-on release.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addonName")
    def addon_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonName: The name of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addonName"))

    @addon_name.setter
    def addon_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80e8a4190caae882c8e9df7a1650ce1e7600638fc0e53c854f6ec59e3b81a056)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addonName", value)

    @builtins.property
    @jsii.member(jsii_name="addonVersion")
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addonVersion"))

    @addon_version.setter
    def addon_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58a340db1d3c6451a3afd2ef1d9eca0a74947daedf4db6e8206f7c5c54222c3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addonVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd0de80a5a503a06994c68459b6d41aff8631b78e2fdead93587a163ac510af3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyId")
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyId: The ID of the integration policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyId"))

    @policy_id.setter
    def policy_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__309f31a9f8ee9c9180d4a6e6f1186303163bb7ef9f79b82c64553abc26e38e9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyId", value)

    @builtins.property
    @jsii.member(jsii_name="entityRules")
    def entity_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.EntityRulesProperty"]]:
        '''
        :Property: entityRules: Entity discovery rules model.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.EntityRulesProperty"]], jsii.get(self, "entityRules"))

    @entity_rules.setter
    def entity_rules(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.EntityRulesProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0841a305d53e5795011546f54dfeab091c015d381eb67e2cc299d250b4aaeec4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entityRules", value)

    @builtins.property
    @jsii.member(jsii_name="envType")
    def env_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envType: The environment type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "envType"))

    @env_type.setter
    def env_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d11bf0ea27345e36b95f0f1c779cc17b2ea59addb38368fb074dc597117468e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envType", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language of the add-on.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d1eaaa737bb744d3ebc8f57309341b7c1b58553a50cdbf20b36455d9cab0169)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

    @builtins.property
    @jsii.member(jsii_name="parentAddonReleaseId")
    def parent_addon_release_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentAddonReleaseId: The ID of the parent add-on release.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parentAddonReleaseId"))

    @parent_addon_release_id.setter
    def parent_addon_release_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cd732d8c1ad6328c9283c6d5dddf984bf04faaffe395605a0354893c5886962)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentAddonReleaseId", value)

    @builtins.property
    @jsii.member(jsii_name="releaseName")
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on release.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releaseName"))

    @release_name.setter
    def release_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cda6612e3f567c3d6f25e308808e35dad62536dd33e7f6da6a794f57158b239)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releaseName", value)

    @builtins.property
    @jsii.member(jsii_name="values")
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The values of the add-on release.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "values"))

    @values.setter
    def values(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb7bd4ed16bcda4a60c7f6f74a922aa9886c9cce32ac5322ce02b4ad83d9c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "values", value)

    @builtins.property
    @jsii.member(jsii_name="workspace")
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the add-on release.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspace"))

    @workspace.setter
    def workspace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd00b920024353a35c619fea9f0f4f1cc38f332929d6663fbf3f418942d9303b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspace", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.AnnotationsProperty",
        jsii_struct_bases=[],
        name_mapping={"op": "op", "tag_key": "tagKey", "tag_values": "tagValues"},
    )
    class AnnotationsProperty:
        def __init__(
            self,
            *,
            op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param op: 
            :param tag_key: 
            :param tag_values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__484ff5f257b6fad45e10d988438afd37b3924e4bd418b88824a5ee239dadcb02)
                check_type(argname="argument op", value=op, expected_type=type_hints["op"])
                check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
                check_type(argname="argument tag_values", value=tag_values, expected_type=type_hints["tag_values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "op": op,
                "tag_key": tag_key,
                "tag_values": tag_values,
            }

        @builtins.property
        def op(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: op: Operation.
            '''
            result = self._values.get("op")
            assert result is not None, "Required property 'op' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tagKey: The key of the annotation.
            '''
            result = self._values.get("tag_key")
            assert result is not None, "Required property 'tag_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_values(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: tagValues: The value sets of the annotation.
            '''
            result = self._values.get("tag_values")
            assert result is not None, "Required property 'tag_values' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AnnotationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "annotations": "annotations",
            "entity_types": "entityTypes",
            "field_rules": "fieldRules",
            "instance_ids": "instanceIds",
            "ip_match_rule": "ipMatchRule",
            "labels": "labels",
            "region_ids": "regionIds",
            "resource_group_id": "resourceGroupId",
            "tags": "tags",
        },
    )
    class EntityRulesProperty:
        def __init__(
            self,
            *,
            annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddonRelease.AnnotationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            entity_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            field_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddonRelease.FieldRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            ip_match_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddonRelease.IpMatchRuleProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddonRelease.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tags: typing.Optional[typing.Sequence[typing.Union["RosAddonRelease.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param annotations: 
            :param entity_types: 
            :param field_rules: 
            :param instance_ids: 
            :param ip_match_rule: 
            :param labels: 
            :param region_ids: 
            :param resource_group_id: 
            :param tags: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__91b50fc3fa2da60f68b30f03349901a5c86ec4e7edbb5418a6b0bca1fe9cdf14)
                check_type(argname="argument annotations", value=annotations, expected_type=type_hints["annotations"])
                check_type(argname="argument entity_types", value=entity_types, expected_type=type_hints["entity_types"])
                check_type(argname="argument field_rules", value=field_rules, expected_type=type_hints["field_rules"])
                check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
                check_type(argname="argument ip_match_rule", value=ip_match_rule, expected_type=type_hints["ip_match_rule"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument region_ids", value=region_ids, expected_type=type_hints["region_ids"])
                check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
                check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if annotations is not None:
                self._values["annotations"] = annotations
            if entity_types is not None:
                self._values["entity_types"] = entity_types
            if field_rules is not None:
                self._values["field_rules"] = field_rules
            if instance_ids is not None:
                self._values["instance_ids"] = instance_ids
            if ip_match_rule is not None:
                self._values["ip_match_rule"] = ip_match_rule
            if labels is not None:
                self._values["labels"] = labels
            if region_ids is not None:
                self._values["region_ids"] = region_ids
            if resource_group_id is not None:
                self._values["resource_group_id"] = resource_group_id
            if tags is not None:
                self._values["tags"] = tags

        @builtins.property
        def annotations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.AnnotationsProperty"]]]]:
            '''
            :Property: annotations: Annotation matching sets.
            '''
            result = self._values.get("annotations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.AnnotationsProperty"]]]], result)

        @builtins.property
        def entity_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: entityTypes: Entity type sets.
            '''
            result = self._values.get("entity_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def field_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.FieldRulesProperty"]]]]:
            '''
            :Property: fieldRules: Attribute matching rules.
            '''
            result = self._values.get("field_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.FieldRulesProperty"]]]], result)

        @builtins.property
        def instance_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: instanceIds: Instance ID sets.
            '''
            result = self._values.get("instance_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def ip_match_rule(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.IpMatchRuleProperty"]]]]:
            '''
            :Property: ipMatchRule: IP matching rule sets.
            '''
            result = self._values.get("ip_match_rule")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.IpMatchRuleProperty"]]]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.LabelsProperty"]]]]:
            '''
            :Property: labels: Label matching sets.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddonRelease.LabelsProperty"]]]], result)

        @builtins.property
        def region_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: regionIds: Region ID sets.
            '''
            result = self._values.get("region_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def resource_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resourceGroupId: Resource group ID.
            '''
            result = self._values.get("resource_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tags(self) -> typing.Optional[typing.List["RosAddonRelease.TagsProperty"]]:
            '''
            :Property: tags: Discover services through tags.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosAddonRelease.TagsProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EntityRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.FieldRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_key": "fieldKey",
            "field_values": "fieldValues",
            "op": "op",
        },
    )
    class FieldRulesProperty:
        def __init__(
            self,
            *,
            field_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            field_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param field_key: 
            :param field_values: 
            :param op: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0abccc25c995ec39c7a849ae93ed6d694ee8f74b9bc41ea864e7a7045cc6a9c7)
                check_type(argname="argument field_key", value=field_key, expected_type=type_hints["field_key"])
                check_type(argname="argument field_values", value=field_values, expected_type=type_hints["field_values"])
                check_type(argname="argument op", value=op, expected_type=type_hints["op"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "field_key": field_key,
                "field_values": field_values,
                "op": op,
            }

        @builtins.property
        def field_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: fieldKey: The key of the attribute.
            '''
            result = self._values.get("field_key")
            assert result is not None, "Required property 'field_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def field_values(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: fieldValues: The value sets of the attribute.
            '''
            result = self._values.get("field_values")
            assert result is not None, "Required property 'field_values' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def op(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: op: Operation.
            '''
            result = self._values.get("op")
            assert result is not None, "Required property 'op' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.IpMatchRuleProperty",
        jsii_struct_bases=[],
        name_mapping={"ip_cidr": "ipCidr", "ip_field_key": "ipFieldKey"},
    )
    class IpMatchRuleProperty:
        def __init__(
            self,
            *,
            ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip_field_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ip_cidr: 
            :param ip_field_key: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d47fb7d76ca11cd64fb570f53a261d23aa688d2958154536205519f858c7f351)
                check_type(argname="argument ip_cidr", value=ip_cidr, expected_type=type_hints["ip_cidr"])
                check_type(argname="argument ip_field_key", value=ip_field_key, expected_type=type_hints["ip_field_key"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ip_cidr is not None:
                self._values["ip_cidr"] = ip_cidr
            if ip_field_key is not None:
                self._values["ip_field_key"] = ip_field_key

        @builtins.property
        def ip_cidr(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ipCidr: The CIDR of the IP.
            '''
            result = self._values.get("ip_cidr")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip_field_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ipFieldKey: The key of the IP field.
            '''
            result = self._values.get("ip_field_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpMatchRuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"op": "op", "tag_key": "tagKey", "tag_values": "tagValues"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param op: 
            :param tag_key: 
            :param tag_values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6195d84e725657241142b425d20e8f908e7f76dd5d631588e97c589e34def8cc)
                check_type(argname="argument op", value=op, expected_type=type_hints["op"])
                check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
                check_type(argname="argument tag_values", value=tag_values, expected_type=type_hints["tag_values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "op": op,
                "tag_key": tag_key,
                "tag_values": tag_values,
            }

        @builtins.property
        def op(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: op: Operation.
            '''
            result = self._values.get("op")
            assert result is not None, "Required property 'op' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tagKey: The key of the label.
            '''
            result = self._values.get("tag_key")
            assert result is not None, "Required property 'tag_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_values(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: tagValues: The value sets of the label.
            '''
            result = self._values.get("tag_values")
            assert result is not None, "Required property 'tag_values' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms2.RosAddonRelease.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"op": "op", "tag_key": "tagKey", "tag_values": "tagValues"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param op: 
            :param tag_key: 
            :param tag_values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8de9b6a58e61c4d9c9e5bba21a27a399f299a12abc1929c96ebf63130ed33e7e)
                check_type(argname="argument op", value=op, expected_type=type_hints["op"])
                check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
                check_type(argname="argument tag_values", value=tag_values, expected_type=type_hints["tag_values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "op": op,
                "tag_key": tag_key,
                "tag_values": tag_values,
            }

        @builtins.property
        def op(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: op: Operation.
            '''
            result = self._values.get("op")
            assert result is not None, "Required property 'op' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tagKey: The key of the tag.
            '''
            result = self._values.get("tag_key")
            assert result is not None, "Required property 'tag_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_values(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: tagValues: The value sets of the tag.
            '''
            result = self._values.get("tag_values")
            assert result is not None, "Required property 'tag_values' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.RosAddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_name": "addonName",
        "addon_version": "addonVersion",
        "policy_id": "policyId",
        "entity_rules": "entityRules",
        "env_type": "envType",
        "lang": "lang",
        "parent_addon_release_id": "parentAddonReleaseId",
        "release_name": "releaseName",
        "values": "values",
        "workspace": "workspace",
    },
)
class RosAddonReleaseProps:
    def __init__(
        self,
        *,
        addon_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        entity_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.EntityRulesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        env_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parent_addon_release_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease

        :param addon_name: 
        :param addon_version: 
        :param policy_id: 
        :param entity_rules: 
        :param env_type: 
        :param lang: 
        :param parent_addon_release_id: 
        :param release_name: 
        :param values: 
        :param workspace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0379ee4ac57b35b8fc113961859db007962432f822f4ed3af648bae157fcff8)
            check_type(argname="argument addon_name", value=addon_name, expected_type=type_hints["addon_name"])
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument policy_id", value=policy_id, expected_type=type_hints["policy_id"])
            check_type(argname="argument entity_rules", value=entity_rules, expected_type=type_hints["entity_rules"])
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument parent_addon_release_id", value=parent_addon_release_id, expected_type=type_hints["parent_addon_release_id"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_name": addon_name,
            "addon_version": addon_version,
            "policy_id": policy_id,
        }
        if entity_rules is not None:
            self._values["entity_rules"] = entity_rules
        if env_type is not None:
            self._values["env_type"] = env_type
        if lang is not None:
            self._values["lang"] = lang
        if parent_addon_release_id is not None:
            self._values["parent_addon_release_id"] = parent_addon_release_id
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values
        if workspace is not None:
            self._values["workspace"] = workspace

    @builtins.property
    def addon_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonName: The name of the add-on.
        '''
        result = self._values.get("addon_name")
        assert result is not None, "Required property 'addon_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyId: The ID of the integration policy.
        '''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def entity_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddonRelease.EntityRulesProperty]]:
        '''
        :Property: entityRules: Entity discovery rules model.
        '''
        result = self._values.get("entity_rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddonRelease.EntityRulesProperty]], result)

    @builtins.property
    def env_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envType: The environment type.
        '''
        result = self._values.get("env_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language of the add-on.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parent_addon_release_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentAddonReleaseId: The ID of the parent add-on release.
        '''
        result = self._values.get("parent_addon_release_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on release.
        '''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The values of the add-on release.
        '''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspace: The workspace of the add-on release.
        '''
        result = self._values.get("workspace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddonReleaseProps(%s)" % ", ".join(
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


class RosServiceObservability(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.RosServiceObservability",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CMS2::ServiceObservability``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServiceObservability`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceObservabilityProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aa152e1f89ed8e15aea3ff6c5b8bae537c1b6f5a895693157e901c69e698ed4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__df7141e36f531c40fa0c0a3ecd013ff0e65e4780ceeb9f98e4ee3cf6d0d325c4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspace")
    def attr_workspace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Workspace: The workspace of the service observability.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspace"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4dc31b26a30b2b970b8e320909c6a1b401462345978b51c483990262d1e0813e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the service observability.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e56a13289bfa8929a7d54bb799b3134aa27190cdb9e46ad51fa355d1794fe0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="workspace")
    def workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspace: The workspace of the service observability.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspace"))

    @workspace.setter
    def workspace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2757535d47fca402abaa443b836d551daec574871cb5d98ee3934743fda442ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspace", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.RosServiceObservabilityProps",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "workspace": "workspace"},
)
class RosServiceObservabilityProps:
    def __init__(
        self,
        *,
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosServiceObservability``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability

        :param type: 
        :param workspace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f44c830942e7e29f818f2dc62af7e87adf34927951c5d0be0187faf5f951df1e)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
            "workspace": workspace,
        }

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the service observability.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspace: The workspace of the service observability.
        '''
        result = self._values.get("workspace")
        assert result is not None, "Required property 'workspace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceObservabilityProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServiceObservability)
class ServiceObservability(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.ServiceObservability",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CMS2::ServiceObservability``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServiceObservability``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceObservabilityProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3871e3299225e156b6af2cc23174ca48f08e45f9dfc526b60066e6da3e5ada7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrWorkspace")
    def attr_workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspace: The workspace of the service observability.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceObservabilityProps":
        return typing.cast("ServiceObservabilityProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1d3bff83d5b84793e6545c3941463f728192f6135682cf5b6c390f7183b40ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bb7391e05de20f1ceb0e5328d8d406df9d1d34310e6d52b1ead03abee477910)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d50b06514811d8d8c0e4b824a57d4f13aecfba52b1cbfc8fd2f1daf56ac506d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms2.ServiceObservabilityProps",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "workspace": "workspace"},
)
class ServiceObservabilityProps:
    def __init__(
        self,
        *,
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ServiceObservability``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability

        :param type: Property type: The type of the service observability.
        :param workspace: Property workspace: The workspace of the service observability.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a95e273119f4d45ecf409c191d8cf91b8e8c1b0133ec6957a747ab96b75bcac)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument workspace", value=workspace, expected_type=type_hints["workspace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
            "workspace": workspace,
        }

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the service observability.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspace: The workspace of the service observability.'''
        result = self._values.get("workspace")
        assert result is not None, "Required property 'workspace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceObservabilityProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAddonRelease)
class AddonRelease(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms2.AddonRelease",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CMS2::AddonRelease``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddonRelease``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dacf77eb760465f661969fd9a2e044d5e30a489ab0699c89c24a66c61f68cb45)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on release.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        return typing.cast(AddonReleaseProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9797ac4fbd7626f5105da91201508e25c02bd1a6e2d50fdeb857df048f1fc1a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__966e7745d1ec1d28ebbe8ca4ad4f9ed6007f1f5e2d694e3d6f6ea0c30cc75333)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__307444b02bfdf85b58d7f0608b2deb55f293875e1838d3dd15ec8dbf383ae733)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AddonRelease",
    "AddonReleaseProps",
    "IAddonRelease",
    "IIntegrationPolicy",
    "IPrometheusInstance",
    "IServiceObservability",
    "IntegrationPolicy",
    "IntegrationPolicyProps",
    "PrometheusInstance",
    "PrometheusInstanceProps",
    "RosAddonRelease",
    "RosAddonReleaseProps",
    "RosIntegrationPolicy",
    "RosIntegrationPolicyProps",
    "RosPrometheusInstance",
    "RosPrometheusInstanceProps",
    "RosServiceObservability",
    "RosServiceObservabilityProps",
    "ServiceObservability",
    "ServiceObservabilityProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__848170b165f0041e9fa86c15b78d77e6ed9df939be18233590308e2c66d75bb4(
    *,
    addon_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    entity_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.EntityRulesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    env_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parent_addon_release_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    workspace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

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

def _typecheckingstub__46dd43332348ad307daec0860650a84f2b7d524d745dd23ae7c7c1ae83b46c7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92b2bd54759aea8dd67b2a850b13d503113badeae8f04c98acf60e79a80810f8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80e8a4190caae882c8e9df7a1650ce1e7600638fc0e53c854f6ec59e3b81a056(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58a340db1d3c6451a3afd2ef1d9eca0a74947daedf4db6e8206f7c5c54222c3c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd0de80a5a503a06994c68459b6d41aff8631b78e2fdead93587a163ac510af3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__309f31a9f8ee9c9180d4a6e6f1186303163bb7ef9f79b82c64553abc26e38e9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0841a305d53e5795011546f54dfeab091c015d381eb67e2cc299d250b4aaeec4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddonRelease.EntityRulesProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d11bf0ea27345e36b95f0f1c779cc17b2ea59addb38368fb074dc597117468e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d1eaaa737bb744d3ebc8f57309341b7c1b58553a50cdbf20b36455d9cab0169(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cd732d8c1ad6328c9283c6d5dddf984bf04faaffe395605a0354893c5886962(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cda6612e3f567c3d6f25e308808e35dad62536dd33e7f6da6a794f57158b239(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb7bd4ed16bcda4a60c7f6f74a922aa9886c9cce32ac5322ce02b4ad83d9c7d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd00b920024353a35c619fea9f0f4f1cc38f332929d6663fbf3f418942d9303b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__484ff5f257b6fad45e10d988438afd37b3924e4bd418b88824a5ee239dadcb02(
    *,
    op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91b50fc3fa2da60f68b30f03349901a5c86ec4e7edbb5418a6b0bca1fe9cdf14(
    *,
    annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.AnnotationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    entity_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    field_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.FieldRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ip_match_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.IpMatchRuleProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAddonRelease.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0abccc25c995ec39c7a849ae93ed6d694ee8f74b9bc41ea864e7a7045cc6a9c7(
    *,
    field_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    field_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d47fb7d76ca11cd64fb570f53a261d23aa688d2958154536205519f858c7f351(
    *,
    ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_field_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6195d84e725657241142b425d20e8f908e7f76dd5d631588e97c589e34def8cc(
    *,
    op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8de9b6a58e61c4d9c9e5bba21a27a399f299a12abc1929c96ebf63130ed33e7e(
    *,
    op: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_values: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0379ee4ac57b35b8fc113961859db007962432f822f4ed3af648bae157fcff8(
    *,
    addon_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    entity_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddonRelease.EntityRulesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    env_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parent_addon_release_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
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

def _typecheckingstub__8aa152e1f89ed8e15aea3ff6c5b8bae537c1b6f5a895693157e901c69e698ed4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceObservabilityProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df7141e36f531c40fa0c0a3ecd013ff0e65e4780ceeb9f98e4ee3cf6d0d325c4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dc31b26a30b2b970b8e320909c6a1b401462345978b51c483990262d1e0813e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e56a13289bfa8929a7d54bb799b3134aa27190cdb9e46ad51fa355d1794fe0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2757535d47fca402abaa443b836d551daec574871cb5d98ee3934743fda442ad(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f44c830942e7e29f818f2dc62af7e87adf34927951c5d0be0187faf5f951df1e(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3871e3299225e156b6af2cc23174ca48f08e45f9dfc526b60066e6da3e5ada7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceObservabilityProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d3bff83d5b84793e6545c3941463f728192f6135682cf5b6c390f7183b40ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bb7391e05de20f1ceb0e5328d8d406df9d1d34310e6d52b1ead03abee477910(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d50b06514811d8d8c0e4b824a57d4f13aecfba52b1cbfc8fd2f1daf56ac506d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a95e273119f4d45ecf409c191d8cf91b8e8c1b0133ec6957a747ab96b75bcac(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dacf77eb760465f661969fd9a2e044d5e30a489ab0699c89c24a66c61f68cb45(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9797ac4fbd7626f5105da91201508e25c02bd1a6e2d50fdeb857df048f1fc1a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__966e7745d1ec1d28ebbe8ca4ad4f9ed6007f1f5e2d694e3d6f6ea0c30cc75333(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__307444b02bfdf85b58d7f0608b2deb55f293875e1838d3dd15ec8dbf383ae733(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
