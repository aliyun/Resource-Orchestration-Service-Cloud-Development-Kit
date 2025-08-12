'''
## Aliyun ROS APIG Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as APIG from '@alicloud/ros-cdk-apig';
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
    jsii_type="@alicloud/ros-cdk-apig.ApiAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend_scene": "backendScene",
        "environment_id": "environmentId",
        "http_api_id": "httpApiId",
        "service_configs": "serviceConfigs",
        "description": "description",
        "domain_ids": "domainIds",
        "route_id": "routeId",
    },
)
class ApiAttachmentProps:
    def __init__(
        self,
        *,
        backend_scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApiAttachment.ServiceConfigsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        route_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApiAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment

        :param backend_scene: Property backendScene: API release scenario.
        :param environment_id: Property environmentId: The ID of the environment to which the API is to deploy.
        :param http_api_id: Property httpApiId: The ID of the HTTP API.
        :param service_configs: Property serviceConfigs: Services associated with API publishing and their configurations.
        :param description: Property description: The description of publication.
        :param domain_ids: Property domainIds: The list of user domain names associated with API publishing.
        :param route_id: Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb9bd6f2781bd10b668efe887f0a2d66f6977aae7951f246e18a9777106092ca)
            check_type(argname="argument backend_scene", value=backend_scene, expected_type=type_hints["backend_scene"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument domain_ids", value=domain_ids, expected_type=type_hints["domain_ids"])
            check_type(argname="argument route_id", value=route_id, expected_type=type_hints["route_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend_scene": backend_scene,
            "environment_id": environment_id,
            "http_api_id": http_api_id,
            "service_configs": service_configs,
        }
        if description is not None:
            self._values["description"] = description
        if domain_ids is not None:
            self._values["domain_ids"] = domain_ids
        if route_id is not None:
            self._values["route_id"] = route_id

    @builtins.property
    def backend_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backendScene: API release scenario.'''
        result = self._values.get("backend_scene")
        assert result is not None, "Required property 'backend_scene' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The ID of the environment to which the API is to deploy.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property httpApiId: The ID of the HTTP API.'''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ServiceConfigsProperty"]]]:
        '''Property serviceConfigs: Services associated with API publishing and their configurations.'''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ServiceConfigsProperty"]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of publication.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property domainIds: The list of user domain names associated with API publishing.'''
        result = self._values.get("domain_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def route_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeId: The route ID.

        When publishing an HTTP API route, it must be passed in.
        '''
        result = self._values.get("route_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApiAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.DomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "protocol": "protocol",
        "cert_identifier": "certIdentifier",
        "force_https": "forceHttps",
        "http2_option": "http2Option",
        "resource_group_id": "resourceGroupId",
        "tls_cipher_suites_config": "tlsCipherSuitesConfig",
        "tls_max": "tlsMax",
        "tls_min": "tlsMin",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        force_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_cipher_suites_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomain.TlsCipherSuitesConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain

        :param domain_name: Property domainName: The name of the Domain.
        :param protocol: Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol. - HTTPS: Supports only the HTTPS protocol.
        :param cert_identifier: Property certIdentifier: The tls Certificate identification.
        :param force_https: Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
        :param http2_option: Property http2Option: Whether to enable http2 settings.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tls_cipher_suites_config: Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.
        :param tls_max: Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
        :param tls_min: Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e8fcb23a67f9a9ce4c6f0332e01832f9d4de7439189bdec1817a609bf17324)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_identifier", value=cert_identifier, expected_type=type_hints["cert_identifier"])
            check_type(argname="argument force_https", value=force_https, expected_type=type_hints["force_https"])
            check_type(argname="argument http2_option", value=http2_option, expected_type=type_hints["http2_option"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tls_cipher_suites_config", value=tls_cipher_suites_config, expected_type=type_hints["tls_cipher_suites_config"])
            check_type(argname="argument tls_max", value=tls_max, expected_type=type_hints["tls_max"])
            check_type(argname="argument tls_min", value=tls_min, expected_type=type_hints["tls_min"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if cert_identifier is not None:
            self._values["cert_identifier"] = cert_identifier
        if force_https is not None:
            self._values["force_https"] = force_https
        if http2_option is not None:
            self._values["http2_option"] = http2_option
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tls_cipher_suites_config is not None:
            self._values["tls_cipher_suites_config"] = tls_cipher_suites_config
        if tls_max is not None:
            self._values["tls_max"] = tls_max
        if tls_min is not None:
            self._values["tls_min"] = tls_min

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The name of the Domain.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.

        - HTTPS: Supports only the HTTPS protocol.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certIdentifier: The tls Certificate identification.'''
        result = self._values.get("cert_identifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def force_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.'''
        result = self._values.get("force_https")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property http2Option: Whether to enable http2 settings.'''
        result = self._values.get("http2_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_cipher_suites_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuitesConfigProperty"]]:
        '''Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.'''
        result = self._values.get("tls_cipher_suites_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuitesConfigProperty"]], result)

    @builtins.property
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tlsMax: The maximum version of the TLS protocol.

        The maximum version of the TLS protocol is 1.3.
        '''
        result = self._values.get("tls_max")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tlsMin: The minimum version of the TLS protocol.

        The minimum version of the TLS protocol is 1.0.
        '''
        result = self._values.get("tls_min")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.EnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_name": "environmentName",
        "gateway_id": "gatewayId",
        "description": "description",
    },
)
class EnvironmentProps:
    def __init__(
        self,
        *,
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Environment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment

        :param environment_name: Property environmentName: The name of the environment.
        :param gateway_id: Property gatewayId: Gateway id.
        :param description: Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24c7c21dbc16c6bd4115025322b77b5d19937f641cf8296f9a1208025e488966)
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_name": environment_name,
            "gateway_id": gateway_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentName: The name of the environment.'''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayId: Gateway id.'''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_name": "gatewayName",
        "network_access_config": "networkAccessConfig",
        "payment_type": "paymentType",
        "spec": "spec",
        "zone_config": "zoneConfig",
        "gateway_type": "gatewayType",
        "log_config": "logConfig",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc": "vpc",
        "v_switch": "vSwitch",
    },
)
class GatewayProps:
    def __init__(
        self,
        *,
        gateway_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_access_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.NetworkAccessConfigProperty", typing.Dict[builtins.str, typing.Any]]],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.ZoneConfigProperty", typing.Dict[builtins.str, typing.Any]]],
        gateway_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.LogConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosGateway.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.VpcProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.VSwitchProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Gateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway

        :param gateway_name: Property gatewayName: The name of the Gateway.
        :param network_access_config: Property networkAccessConfig: Network Access Configuration.
        :param payment_type: Property paymentType: The payment type of the gateway. Valid values: - PayAsYouGo - Subscription
        :param spec: Property spec: Gateway instance specifications.
        :param zone_config: Property zoneConfig: Availability Zone Configuration.
        :param gateway_type: Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway. Default value: API.
        :param log_config: Property logConfig: Log Configuration.
        :param period: Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        :param period_unit: Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of The tags of the Gateway..
        :param vpc: Property vpc: The VPC associated with the Gateway.
        :param v_switch: Property vSwitch: The virtual switch associated with the Gateway.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52ee80e019724b7c96f59c540ee8c629e016007f905c66f8656311100b050ae7)
            check_type(argname="argument gateway_name", value=gateway_name, expected_type=type_hints["gateway_name"])
            check_type(argname="argument network_access_config", value=network_access_config, expected_type=type_hints["network_access_config"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument zone_config", value=zone_config, expected_type=type_hints["zone_config"])
            check_type(argname="argument gateway_type", value=gateway_type, expected_type=type_hints["gateway_type"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc", value=vpc, expected_type=type_hints["vpc"])
            check_type(argname="argument v_switch", value=v_switch, expected_type=type_hints["v_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_name": gateway_name,
            "network_access_config": network_access_config,
            "payment_type": payment_type,
            "spec": spec,
            "zone_config": zone_config,
        }
        if gateway_type is not None:
            self._values["gateway_type"] = gateway_type
        if log_config is not None:
            self._values["log_config"] = log_config
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc is not None:
            self._values["vpc"] = vpc
        if v_switch is not None:
            self._values["v_switch"] = v_switch

    @builtins.property
    def gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayName: The name of the Gateway.'''
        result = self._values.get("gateway_name")
        assert result is not None, "Required property 'gateway_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_access_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.NetworkAccessConfigProperty"]:
        '''Property networkAccessConfig: Network Access Configuration.'''
        result = self._values.get("network_access_config")
        assert result is not None, "Required property 'network_access_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.NetworkAccessConfigProperty"], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: The payment type of the gateway.

        Valid values:

        - PayAsYouGo
        - Subscription
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property spec: Gateway instance specifications.'''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.ZoneConfigProperty"]:
        '''Property zoneConfig: Availability Zone Configuration.'''
        result = self._values.get("zone_config")
        assert result is not None, "Required property 'zone_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.ZoneConfigProperty"], result)

    @builtins.property
    def gateway_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.

        Default value: API.
        '''
        result = self._values.get("gateway_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.LogConfigProperty"]]:
        '''Property logConfig: Log Configuration.'''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.LogConfigProperty"]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The purchase time of the gateway.

        This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the purchase time of the gateway.

        This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosGateway.TagsProperty"]]:
        '''Property tags: Tags of The tags of the Gateway..'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosGateway.TagsProperty"]], result)

    @builtins.property
    def vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VpcProperty"]]:
        '''Property vpc: The VPC associated with the Gateway.'''
        result = self._values.get("vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VpcProperty"]], result)

    @builtins.property
    def v_switch(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VSwitchProperty"]]:
        '''Property vSwitch: The virtual switch associated with the Gateway.'''
        result = self._values.get("v_switch")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VSwitchProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.HttpApiProps",
    jsii_struct_bases=[],
    name_mapping={
        "http_api_name": "httpApiName",
        "protocols": "protocols",
        "base_path": "basePath",
        "description": "description",
        "type": "type",
    },
)
class HttpApiProps:
    def __init__(
        self,
        *,
        http_api_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocols: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        base_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HttpApi``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi

        :param http_api_name: Property httpApiName: The name of the API.
        :param protocols: Property protocols: List of API Access Protocols.
        :param base_path: Property basePath: The base path of the API should start with a /.
        :param description: Property description: Description of API.
        :param type: Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f579af269bae3454bd150e6c98a3621e2983ff60243d3145c565e67827461d6e)
            check_type(argname="argument http_api_name", value=http_api_name, expected_type=type_hints["http_api_name"])
            check_type(argname="argument protocols", value=protocols, expected_type=type_hints["protocols"])
            check_type(argname="argument base_path", value=base_path, expected_type=type_hints["base_path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "http_api_name": http_api_name,
            "protocols": protocols,
        }
        if base_path is not None:
            self._values["base_path"] = base_path
        if description is not None:
            self._values["description"] = description
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property httpApiName: The name of the API.'''
        result = self._values.get("http_api_name")
        assert result is not None, "Required property 'http_api_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocols(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property protocols: List of API Access Protocols.'''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def base_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property basePath: The base path of the API should start with a /.'''
        result = self._values.get("base_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of API.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.'''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HttpApiProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IApiAttachment")
class IApiAttachment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ApiAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment to which the API is to deploy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the HTTP API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The route ID.

        When publishing an HTTP API route, it must be passed in.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiAttachmentProps:
        ...


class _IApiAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApiAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IApiAttachment"

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment to which the API is to deploy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the HTTP API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The route ID.

        When publishing an HTTP API route, it must be passed in.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiAttachmentProps:
        return typing.cast(ApiAttachmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApiAttachment).__jsii_proxy_class__ = lambda : _IApiAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IDomain")
class IDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Domain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCertIdentifier")
    def attr_cert_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertIdentifier: The tls Certificate identification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the Domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the Domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrForceHttps")
    def attr_force_https(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Option")
    def attr_http2_option(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Http2Option: Whether to enable http2 settings.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProtocol")
    def attr_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocol: The types of protocols.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsCipherSuitesConfig")
    def attr_tls_cipher_suites_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsMax")
    def attr_tls_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMax: The maximum version of the TLS protocol.

        The maximum version of the TLS protocol is 1.3.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsMin")
    def attr_tls_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMin: The minimum version of the TLS protocol.

        The minimum version of the TLS protocol is 1.0.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        ...


class _IDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Domain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IDomain"

    @builtins.property
    @jsii.member(jsii_name="attrCertIdentifier")
    def attr_cert_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertIdentifier: The tls Certificate identification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the Domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the Domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrForceHttps")
    def attr_force_https(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForceHttps"))

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Option")
    def attr_http2_option(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Http2Option: Whether to enable http2 settings.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttp2Option"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocol")
    def attr_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocol: The types of protocols.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsCipherSuitesConfig")
    def attr_tls_cipher_suites_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsCipherSuitesConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMax")
    def attr_tls_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMax: The maximum version of the TLS protocol.

        The maximum version of the TLS protocol is 1.3.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsMax"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMin")
    def attr_tls_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMin: The minimum version of the TLS protocol.

        The minimum version of the TLS protocol is 1.0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsMin"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomain).__jsii_proxy_class__ = lambda : _IDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IEnvironment")
class IEnvironment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Environment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        ...


class _IEnvironmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Environment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IEnvironment"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        return typing.cast(EnvironmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvironment).__jsii_proxy_class__ = lambda : _IEnvironmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IGateway")
class IGateway(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Gateway``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp.

        Unit: milliseconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: The list of environments associated with the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: Package year and package month expiration timestamp.

        Unit: milliseconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of Gateway ingress addresses.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroup")
    def attr_security_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroup: The Security Group of the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway instance specifications.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update the timestamp.

        Unit: milliseconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Version: The gateway version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpc")
    def attr_vpc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vpc: The VPC associated with the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitch")
    def attr_v_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitch: The virtual switch associated with the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The List of zones associated with the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        ...


class _IGatewayProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Gateway``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IGateway"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: The list of environments associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: Package year and package month expiration timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of Gateway ingress addresses.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancers"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroup")
    def attr_security_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroup: The Security Group of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway instance specifications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update the timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Version: The gateway version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrVpc")
    def attr_vpc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vpc: The VPC associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpc"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitch")
    def attr_v_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitch: The virtual switch associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The List of zones associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZones"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGateway).__jsii_proxy_class__ = lambda : _IGatewayProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IHttpApi")
class IHttpApi(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HttpApi``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBasePath")
    def attr_base_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BasePath: The base path of the API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: Published Environmental Information of the API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiName")
    def attr_http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiName: The name of the API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProtocols")
    def attr_protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocols: List of API Access Protocols.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of HTTP API.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpApiProps:
        ...


class _IHttpApiProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HttpApi``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IHttpApi"

    @builtins.property
    @jsii.member(jsii_name="attrBasePath")
    def attr_base_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BasePath: The base path of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBasePath"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: Published Environmental Information of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiName")
    def attr_http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiName: The name of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiName"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocols")
    def attr_protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocols: List of API Access Protocols.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocols"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of HTTP API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpApiProps:
        return typing.cast(HttpApiProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHttpApi).__jsii_proxy_class__ = lambda : _IHttpApiProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IOperation")
class IOperation(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Operation``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp of the operation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the operation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMethod")
    def attr_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Method: The method of http protocol.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMock")
    def attr_mock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mock: Mock configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOperationId")
    def attr_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationId: The ID of the operation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOperationName")
    def attr_operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationName: The name of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPath")
    def attr_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Path: The interface path of the operation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OperationProps":
        ...


class _IOperationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Operation``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IOperation"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMethod")
    def attr_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Method: The method of http protocol.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrMock")
    def attr_mock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mock: Mock configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMock"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationId")
    def attr_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationId: The ID of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationName")
    def attr_operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationName"))

    @builtins.property
    @jsii.member(jsii_name="attrPath")
    def attr_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Path: The interface path of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPath"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OperationProps":
        return typing.cast("OperationProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOperation).__jsii_proxy_class__ = lambda : _IOperationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IPlugin")
class IPlugin(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Plugin``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassId")
    def attr_plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassId: The ID of the plugin class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginId: The ID of the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginProps":
        ...


class _IPluginProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Plugin``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IPlugin"

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassId")
    def attr_plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassId: The ID of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginId: The ID of the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginProps":
        return typing.cast("PluginProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPlugin).__jsii_proxy_class__ = lambda : _IPluginProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IPluginAttachment")
class IPluginAttachment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PluginAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceId")
    def attr_attach_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceId: The resource ID to be attached by the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceIds")
    def attr_attach_resource_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceNames")
    def attr_attach_resource_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceNames: The list of resource names to be attached by the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceParentIds")
    def attr_attach_resource_parent_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceType")
    def attr_attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceType: The type of the resource to be attached by the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Whether to enable this plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginAttachmentId")
    def attr_plugin_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginAttachmentId: The ID of plugin attachment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassInfo")
    def attr_plugin_class_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassInfo: The type of the plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginInfo")
    def attr_plugin_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginInfo: The information about the association of plugin with gateway instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginAttachmentProps":
        ...


class _IPluginAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PluginAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IPluginAttachment"

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceId")
    def attr_attach_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceId: The resource ID to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceIds")
    def attr_attach_resource_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceNames")
    def attr_attach_resource_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceNames: The list of resource names to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceParentIds")
    def attr_attach_resource_parent_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceParentIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceType")
    def attr_attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceType: The type of the resource to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Whether to enable this plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginAttachmentId")
    def attr_plugin_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginAttachmentId: The ID of plugin attachment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassInfo")
    def attr_plugin_class_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassInfo: The type of the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginInfo")
    def attr_plugin_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginInfo: The information about the association of plugin with gateway instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginInfo"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginAttachmentProps":
        return typing.cast("PluginAttachmentProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPluginAttachment).__jsii_proxy_class__ = lambda : _IPluginAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IPluginClass")
class IPluginClass(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PluginClass``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAlias")
    def attr_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alias: The alias of the plugin class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the plugin class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDocument")
    def attr_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Document: The document of plugin.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassName")
    def attr_plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassName: The name of the plugin class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the plugin class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWasmLanguage")
    def attr_wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WasmLanguage: Wasm language.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginClassProps":
        ...


class _IPluginClassProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PluginClass``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IPluginClass"

    @builtins.property
    @jsii.member(jsii_name="attrAlias")
    def attr_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alias: The alias of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDocument")
    def attr_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Document: The document of plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassName")
    def attr_plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassName: The name of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrWasmLanguage")
    def attr_wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WasmLanguage: Wasm language.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWasmLanguage"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginClassProps":
        return typing.cast("PluginClassProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPluginClass).__jsii_proxy_class__ = lambda : _IPluginClassProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IPolicy")
class IPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Policy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassId")
    def attr_policy_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassId: The ID of policy class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassName")
    def attr_policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassName: The name of policy class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyConfig")
    def attr_policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyConfig: Policy Configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        ...


class _IPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Policy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassId")
    def attr_policy_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassId: The ID of policy class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassName")
    def attr_policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassName: The name of policy class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyConfig")
    def attr_policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyConfig: Policy Configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPolicy).__jsii_proxy_class__ = lambda : _IPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IRoute")
class IRoute(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Route``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackend")
    def attr_backend(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Backend: Backend services.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of route resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainInfos")
    def attr_domain_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainInfos: Domain items.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentInfo")
    def attr_environment_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentInfo: Environment information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMatch")
    def attr_match(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Match: The match rule of route resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of route resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRouteName")
    def attr_route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteName: The name of the route.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RouteProps":
        ...


class _IRouteProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Route``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IRoute"

    @builtins.property
    @jsii.member(jsii_name="attrBackend")
    def attr_backend(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Backend: Backend services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackend"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainInfos")
    def attr_domain_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainInfos: Domain items.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentInfo")
    def attr_environment_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentInfo: Environment information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrMatch")
    def attr_match(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Match: The match rule of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMatch"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteName")
    def attr_route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteName: The name of the route.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RouteProps":
        return typing.cast("RouteProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRoute).__jsii_proxy_class__ = lambda : _IRouteProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-apig.IService")
class IService(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Service``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: Service Address List.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAiServiceConfig")
    def attr_ai_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AiServiceConfig: AI service configuration when SourceType equals AI.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Cloud Native API Gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The service group name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Qualifier: The function version or alias.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        ...


class _IServiceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Service``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-apig.IService"

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: Service Address List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAiServiceConfig")
    def attr_ai_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AiServiceConfig: AI service configuration when SourceType equals AI.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAiServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Cloud Native API Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The service group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Qualifier: The function version or alias.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrQualifier"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IService).__jsii_proxy_class__ = lambda : _IServiceProxy


@jsii.implements(IOperation)
class Operation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Operation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Operation``, which is used to create an operation for an HTTP API.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOperation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OperationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65ba64f892745208f89a9f4c267048a2da4e996358d7d94cde667430bc6a8f7f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMethod")
    def attr_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Method: The method of http protocol.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrMock")
    def attr_mock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Mock: Mock configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMock"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationId")
    def attr_operation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationId: The ID of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationName")
    def attr_operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationName"))

    @builtins.property
    @jsii.member(jsii_name="attrPath")
    def attr_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Path: The interface path of the operation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPath"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OperationProps":
        return typing.cast("OperationProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6407eed09e7f8ceac4cbd9924c92d473b11106a69b8289242473101bd3edaaeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f6929e6a44ba91cbb95ea1e23fedaacf4d07b98565538f038238cddc0cabaa7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4ffcb94d1dc08d7d1a17146e8b7e753287633439b728eb8775b140a76d3dfc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.OperationProps",
    jsii_struct_bases=[],
    name_mapping={
        "http_api_id": "httpApiId",
        "method": "method",
        "operation_name": "operationName",
        "path": "path",
        "description": "description",
        "mock": "mock",
    },
)
class OperationProps:
    def __init__(
        self,
        *,
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        operation_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mock: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOperation.MockProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Operation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation

        :param http_api_id: Property httpApiId: The HTTP API ID to which the interface belongs.
        :param method: Property method: The method of http protocol.
        :param operation_name: Property operationName: The name of the operation.
        :param path: Property path: The interface path of the operation.
        :param description: Property description: The description of the operation.
        :param mock: Property mock: Mock configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d3da9470a25e192507f4025bc558945fa820f2456ff7a455e181b9b455f58b3)
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument method", value=method, expected_type=type_hints["method"])
            check_type(argname="argument operation_name", value=operation_name, expected_type=type_hints["operation_name"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument mock", value=mock, expected_type=type_hints["mock"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "http_api_id": http_api_id,
            "method": method,
            "operation_name": operation_name,
            "path": path,
        }
        if description is not None:
            self._values["description"] = description
        if mock is not None:
            self._values["mock"] = mock

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property httpApiId: The HTTP API ID to which the interface belongs.'''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def method(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property method: The method of http protocol.'''
        result = self._values.get("method")
        assert result is not None, "Required property 'method' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property operationName: The name of the operation.'''
        result = self._values.get("operation_name")
        assert result is not None, "Required property 'operation_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def path(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property path: The interface path of the operation.'''
        result = self._values.get("path")
        assert result is not None, "Required property 'path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the operation.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mock(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOperation.MockProperty"]]:
        '''Property mock: Mock configuration.'''
        result = self._values.get("mock")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOperation.MockProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OperationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPlugin)
class Plugin(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Plugin",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Plugin``, which is used to create a plug-in.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPlugin``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PluginProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3111c1f952945e50cb291832e6d7ff35f6614fb83d636a6cbd5c5257b590d3d5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassId")
    def attr_plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassId: The ID of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginId: The ID of the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginProps":
        return typing.cast("PluginProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c459c69d8c4942f2c96ccde2dd34edb0d042025c170d6f1a4d316813966a3ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03608738571a558526e6d2453630f3fd918dde0871caf47ffcc09a93f53b45b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a43ef77b90142f6b046a07b48585ed1b63191602ec7c94f62075e10b78bac015)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IPluginAttachment)
class PluginAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.PluginAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::PluginAttachment``, which is used to bind a plug-in.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPluginAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PluginAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__167cce770c82e5d4d6d53326247c575772945b2b4351d242ae8794459ea7d044)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceId")
    def attr_attach_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceId: The resource ID to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceIds")
    def attr_attach_resource_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceNames")
    def attr_attach_resource_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceNames: The list of resource names to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceParentIds")
    def attr_attach_resource_parent_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceParentIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceType")
    def attr_attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachResourceType: The type of the resource to be attached by the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Whether to enable this plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginAttachmentId")
    def attr_plugin_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginAttachmentId: The ID of plugin attachment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassInfo")
    def attr_plugin_class_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassInfo: The type of the plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginInfo")
    def attr_plugin_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginInfo: The information about the association of plugin with gateway instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginInfo"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginAttachmentProps":
        return typing.cast("PluginAttachmentProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2aaee2141aa8c401601f34d6fbdb35b49f24b60023ea60737c33c91d0839784)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7aa43246e2c1d98f69498ac7280b594f0357b57d92c15c57685077d5e8285cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2af61f9a0d5c171ffb0fe0a04c68475893bb9a07ed9753f62edc3949c894266f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.PluginAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "plugin_info": "pluginInfo",
        "attach_resource_id": "attachResourceId",
        "attach_resource_ids": "attachResourceIds",
        "attach_resource_type": "attachResourceType",
        "enable": "enable",
        "environment_id": "environmentId",
    },
)
class PluginAttachmentProps:
    def __init__(
        self,
        *,
        plugin_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPluginAttachment.PluginInfoProperty", typing.Dict[builtins.str, typing.Any]]],
        attach_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        attach_resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        attach_resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PluginAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment

        :param plugin_info: Property pluginInfo: The information about the association of plugin with gateway instance.
        :param attach_resource_id: Property attachResourceId: The resource ID to be attached by the plugin.
        :param attach_resource_ids: Property attachResourceIds: The list of resource IDs to be attached by the plugin.
        :param attach_resource_type: Property attachResourceType: The type of the resource to be attached by the plugin.
        :param enable: Property enable: Whether to enable this plugin, default value is false.
        :param environment_id: Property environmentId: The ID of the environment.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5912601dcb20c111dddedc6490177ba1cc88e071ce8fed120762c36c01d57f03)
            check_type(argname="argument plugin_info", value=plugin_info, expected_type=type_hints["plugin_info"])
            check_type(argname="argument attach_resource_id", value=attach_resource_id, expected_type=type_hints["attach_resource_id"])
            check_type(argname="argument attach_resource_ids", value=attach_resource_ids, expected_type=type_hints["attach_resource_ids"])
            check_type(argname="argument attach_resource_type", value=attach_resource_type, expected_type=type_hints["attach_resource_type"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "plugin_info": plugin_info,
        }
        if attach_resource_id is not None:
            self._values["attach_resource_id"] = attach_resource_id
        if attach_resource_ids is not None:
            self._values["attach_resource_ids"] = attach_resource_ids
        if attach_resource_type is not None:
            self._values["attach_resource_type"] = attach_resource_type
        if enable is not None:
            self._values["enable"] = enable
        if environment_id is not None:
            self._values["environment_id"] = environment_id

    @builtins.property
    def plugin_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPluginAttachment.PluginInfoProperty"]:
        '''Property pluginInfo: The information about the association of plugin with gateway instance.'''
        result = self._values.get("plugin_info")
        assert result is not None, "Required property 'plugin_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPluginAttachment.PluginInfoProperty"], result)

    @builtins.property
    def attach_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property attachResourceId: The resource ID to be attached by the plugin.'''
        result = self._values.get("attach_resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def attach_resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property attachResourceIds: The list of resource IDs to be attached by the plugin.'''
        result = self._values.get("attach_resource_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def attach_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property attachResourceType: The type of the resource to be attached by the plugin.'''
        result = self._values.get("attach_resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Whether to enable this plugin, default value is false.'''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property environmentId: The ID of the environment.'''
        result = self._values.get("environment_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPluginClass)
class PluginClass(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.PluginClass",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::PluginClass``, which is used to create a plug-in class.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPluginClass``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PluginClassProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93f75da9159acdde107c996fa043c8bf01788d0d9fd90e9ffca46ab78727d2a0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAlias")
    def attr_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Alias: The alias of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDocument")
    def attr_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Document: The document of plugin.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassName")
    def attr_plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginClassName: The name of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the plugin class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrWasmLanguage")
    def attr_wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WasmLanguage: Wasm language.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWasmLanguage"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginClassProps":
        return typing.cast("PluginClassProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35a6cd3bc8839e41b6c5688f13c3318ce444db929b29633bb38f9fb732ed571c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__598ab4dd7a207b1b65a35586ac730a935e959d69c44e28836673dc504c415957)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e94ab6947730871409964b5237ffa4c54db970f06e51784807653135258d577c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.PluginClassProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "execute_priority": "executePriority",
        "execute_stage": "executeStage",
        "plugin_class_name": "pluginClassName",
        "version": "version",
        "version_description": "versionDescription",
        "wasm_language": "wasmLanguage",
        "wasm_url": "wasmUrl",
        "alias": "alias",
        "supported_min_gateway_version": "supportedMinGatewayVersion",
    },
)
class PluginClassProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        execute_priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        execute_stage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        wasm_language: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        wasm_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        supported_min_gateway_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PluginClass``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass

        :param description: Property description: The description of the plugin class.
        :param execute_priority: Property executePriority: The execute priority of the Plugin.
        :param execute_stage: Property executeStage: The Execution stage.
        :param plugin_class_name: Property pluginClassName: The name of the plugin class.
        :param version: Property version: The version of plugin class.
        :param version_description: Property versionDescription: The description of the version .
        :param wasm_language: Property wasmLanguage: the language of the wasm.
        :param wasm_url: Property wasmUrl: The url of the wasm.
        :param alias: Property alias: The alias of the plugin class.
        :param supported_min_gateway_version: Property supportedMinGatewayVersion: The supported minimum gateway version.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__723a1fed524db2b6884ac8d0b6693878d7db9adccbf86b6ff8143a07d4e8c3ae)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument execute_priority", value=execute_priority, expected_type=type_hints["execute_priority"])
            check_type(argname="argument execute_stage", value=execute_stage, expected_type=type_hints["execute_stage"])
            check_type(argname="argument plugin_class_name", value=plugin_class_name, expected_type=type_hints["plugin_class_name"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument version_description", value=version_description, expected_type=type_hints["version_description"])
            check_type(argname="argument wasm_language", value=wasm_language, expected_type=type_hints["wasm_language"])
            check_type(argname="argument wasm_url", value=wasm_url, expected_type=type_hints["wasm_url"])
            check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
            check_type(argname="argument supported_min_gateway_version", value=supported_min_gateway_version, expected_type=type_hints["supported_min_gateway_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "execute_priority": execute_priority,
            "execute_stage": execute_stage,
            "plugin_class_name": plugin_class_name,
            "version": version,
            "version_description": version_description,
            "wasm_language": wasm_language,
            "wasm_url": wasm_url,
        }
        if alias is not None:
            self._values["alias"] = alias
        if supported_min_gateway_version is not None:
            self._values["supported_min_gateway_version"] = supported_min_gateway_version

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: The description of the plugin class.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def execute_priority(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property executePriority: The execute priority of the Plugin.'''
        result = self._values.get("execute_priority")
        assert result is not None, "Required property 'execute_priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def execute_stage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property executeStage: The Execution stage.'''
        result = self._values.get("execute_stage")
        assert result is not None, "Required property 'execute_stage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pluginClassName: The name of the plugin class.'''
        result = self._values.get("plugin_class_name")
        assert result is not None, "Required property 'plugin_class_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: The version of plugin class.'''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property versionDescription: The description of the version .'''
        result = self._values.get("version_description")
        assert result is not None, "Required property 'version_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property wasmLanguage: the language of the wasm.'''
        result = self._values.get("wasm_language")
        assert result is not None, "Required property 'wasm_language' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def wasm_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property wasmUrl: The url of the wasm.'''
        result = self._values.get("wasm_url")
        assert result is not None, "Required property 'wasm_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alias: The alias of the plugin class.'''
        result = self._values.get("alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def supported_min_gateway_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property supportedMinGatewayVersion: The supported minimum gateway version.'''
        result = self._values.get("supported_min_gateway_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginClassProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.PluginProps",
    jsii_struct_bases=[],
    name_mapping={"gateway_id": "gatewayId", "plugin_class_id": "pluginClassId"},
)
class PluginProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_class_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Plugin``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin

        :param gateway_id: Property gatewayId: The ID of the Gateway.
        :param plugin_class_id: Property pluginClassId: The ID of the plugin class.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b7454cc0ff31fe4fc5bd1fc1d343cf1fd11a6896c3318801e33d07c914bc450)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument plugin_class_id", value=plugin_class_id, expected_type=type_hints["plugin_class_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
            "plugin_class_id": plugin_class_id,
        }

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayId: The ID of the Gateway.'''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pluginClassId: The ID of the plugin class.'''
        result = self._values.get("plugin_class_id")
        assert result is not None, "Required property 'plugin_class_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPolicy)
class Policy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Policy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Policy``, which is used to create a policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05beaf264b8064e66321f45fd41080006d94f47ec3e34f92a48614be65b4a12b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassId")
    def attr_policy_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassId: The ID of policy class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassName")
    def attr_policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyClassName: The name of policy class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyConfig")
    def attr_policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyConfig: Policy Configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b16912f7059f215cf450bcbd21d2623c87e2d0089c951f428349a78b08ffb642)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__875bd2f0eb7cc4ea9fd709a5673d799503792af5d73ae94eb699fdb312f6f10d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bc2a3fa4d1fca4b98643836e5fe45134aacf7f260484bcd8daf70961292a7a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.PolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "attach_resource_ids": "attachResourceIds",
        "attach_resource_type": "attachResourceType",
        "environment_id": "environmentId",
        "gateway_id": "gatewayId",
        "policy_class_name": "policyClassName",
        "policy_config": "policyConfig",
        "policy_name": "policyName",
    },
)
class PolicyProps:
    def __init__(
        self,
        *,
        attach_resource_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        attach_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_config: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Policy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy

        :param attach_resource_ids: Property attachResourceIds: The Mount point id list.
        :param attach_resource_type: Property attachResourceType: Policies support mount point types. HttpApi:HttpApi. Operation: the Operation of the HttpApi. GatewayRoute: Gateway route. GatewayService: Gateway service. GatewayServicePort: The Gateway service port. Domain: The Gateway Domain name. Gateway: Gateway.
        :param environment_id: Property environmentId: The id of the environment.
        :param gateway_id: Property gatewayId: The ID of the Gateway.
        :param policy_class_name: Property policyClassName: The name of the policy class.
        :param policy_config: Property policyConfig: Policy Configuration.
        :param policy_name: Property policyName: The name of the policy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5b0ca324e2295b00cbf61dead8f459a9fce3381616dfb353c48ff0cd18bcad6)
            check_type(argname="argument attach_resource_ids", value=attach_resource_ids, expected_type=type_hints["attach_resource_ids"])
            check_type(argname="argument attach_resource_type", value=attach_resource_type, expected_type=type_hints["attach_resource_type"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument policy_class_name", value=policy_class_name, expected_type=type_hints["policy_class_name"])
            check_type(argname="argument policy_config", value=policy_config, expected_type=type_hints["policy_config"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "attach_resource_ids": attach_resource_ids,
            "attach_resource_type": attach_resource_type,
            "environment_id": environment_id,
            "gateway_id": gateway_id,
            "policy_class_name": policy_class_name,
            "policy_config": policy_config,
        }
        if policy_name is not None:
            self._values["policy_name"] = policy_name

    @builtins.property
    def attach_resource_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property attachResourceIds: The Mount point id list.'''
        result = self._values.get("attach_resource_ids")
        assert result is not None, "Required property 'attach_resource_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property attachResourceType: Policies support mount point types.

        HttpApi:HttpApi.
        Operation: the Operation of the HttpApi.
        GatewayRoute: Gateway route.
        GatewayService: Gateway service.
        GatewayServicePort: The Gateway service port.
        Domain: The Gateway Domain name.
        Gateway: Gateway.
        '''
        result = self._values.get("attach_resource_type")
        assert result is not None, "Required property 'attach_resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The id of the environment.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayId: The ID of the Gateway.'''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyClassName: The name of the policy class.'''
        result = self._values.get("policy_class_name")
        assert result is not None, "Required property 'policy_class_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyConfig: Policy Configuration.'''
        result = self._values.get("policy_config")
        assert result is not None, "Required property 'policy_config' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property policyName: The name of the policy.'''
        result = self._values.get("policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApiAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosApiAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::ApiAttachment``, which is used to attach an API.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApiAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApiAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ffbc5c64486525995c7378a8f24c7b2c2049537b76ebeb14283647f12fa2a58)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cacf93512bfc9881636169c3927a65830907cf11b6d74f03b46686620ac01d47)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment to which the API is to deploy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiId: The ID of the HTTP API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backendScene")
    def backend_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backendScene: API release scenario.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backendScene"))

    @backend_scene.setter
    def backend_scene(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e3e4b30467bf3ccb84a7d195302b91e78458c3372e62f5a5e3e163a08041c46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendScene", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095f6fe4c51be20b4fe063dded6af7aff04595d28dd93fb193ba9af2fcb9c655)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment to which the API is to deploy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c71f186839072420d967bf75e29e0188d173121a674344252ac6b9403bdf7f6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="httpApiId")
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The ID of the HTTP API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "httpApiId"))

    @http_api_id.setter
    def http_api_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3ecc937b5e916bbf4b606dda7c712f21450587e5acd1825a1f94717d02c75bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpApiId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceConfigs")
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ServiceConfigsProperty"]]]:
        '''
        :Property: serviceConfigs: Services associated with API publishing and their configurations.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ServiceConfigsProperty"]]], jsii.get(self, "serviceConfigs"))

    @service_configs.setter
    def service_configs(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ServiceConfigsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27e98f199a1cdbfe82070127e7c6a442300145fc58a88cb07a5cf9cce39b83aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of publication.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__331b9a9b7054a549790108ae52bd573df92480ad050b252b94de137576978405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="domainIds")
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: domainIds: The list of user domain names associated with API publishing.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "domainIds"))

    @domain_ids.setter
    def domain_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30d3e0d9585fa1b973ca5337cbb3e9cc12709725d2e485a885b254d7014c4481)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainIds", value)

    @builtins.property
    @jsii.member(jsii_name="routeId")
    def route_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeId: The route ID. When publishing an HTTP API route, it must be passed in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeId"))

    @route_id.setter
    def route_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7a7bc1230f7ba1733660bc6e60f051d49dc89c53218a7f439cbf528dca1c8d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosApiAttachment.ConditionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "key": "key",
            "operator": "operator",
            "type": "type",
            "value": "value",
        },
    )
    class ConditionsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param operator: 
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ec082a7072a7185f7c1865e55e76ca791235ac78a3f0baa19dbe6a97aeec640d)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument operator", value=operator, expected_type=type_hints["operator"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if operator is not None:
                self._values["operator"] = operator
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: Param key.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def operator(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: operator: The operator. Exact/Prefix/Regex.
            '''
            result = self._values.get("operator")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The type of the match.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Param value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConditionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosApiAttachment.MatchProperty",
        jsii_struct_bases=[],
        name_mapping={"conditions": "conditions", "default_match": "defaultMatch"},
    )
    class MatchProperty:
        def __init__(
            self,
            *,
            conditions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApiAttachment.ConditionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            default_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param conditions: 
            :param default_match: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b589615d134a12094f749c2275c6facf87a97b39d831cc2ea1485af16db362e6)
                check_type(argname="argument conditions", value=conditions, expected_type=type_hints["conditions"])
                check_type(argname="argument default_match", value=default_match, expected_type=type_hints["default_match"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if conditions is not None:
                self._values["conditions"] = conditions
            if default_match is not None:
                self._values["default_match"] = default_match

        @builtins.property
        def conditions(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ConditionsProperty"]]]]:
            '''
            :Property: conditions: Match conditions.
            '''
            result = self._values.get("conditions")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.ConditionsProperty"]]]], result)

        @builtins.property
        def default_match(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: defaultMatch: Match default condition or not.
            '''
            result = self._values.get("default_match")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MatchProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosApiAttachment.ServiceConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "service_id": "serviceId",
            "weight": "weight",
            "match": "match",
            "port": "port",
            "protocol": "protocol",
            "version": "version",
        },
    )
    class ServiceConfigsProperty:
        def __init__(
            self,
            *,
            service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            match: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApiAttachment.MatchProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param service_id: 
            :param weight: 
            :param match: 
            :param port: 
            :param protocol: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__11aa7126592888f88f8db22617548fba4d8ca340b0ed2180add5f3625740782f)
                check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument match", value=match, expected_type=type_hints["match"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "service_id": service_id,
                "weight": weight,
            }
            if match is not None:
                self._values["match"] = match
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def service_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serviceId: The ID of the service associated with the release API.
            '''
            result = self._values.get("service_id")
            assert result is not None, "Required property 'service_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: Traffic weight for this service, range [1,100], valid only in proportional scenarios.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def match(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.MatchProperty"]]:
            '''
            :Property: match: Match condition configurations in api deployment.
            '''
            result = self._values.get("match")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiAttachment.MatchProperty"]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: Service Port. Dynamic ports are not passed in.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The protocol of the Domain.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the service.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosApiAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend_scene": "backendScene",
        "environment_id": "environmentId",
        "http_api_id": "httpApiId",
        "service_configs": "serviceConfigs",
        "description": "description",
        "domain_ids": "domainIds",
        "route_id": "routeId",
    },
)
class RosApiAttachmentProps:
    def __init__(
        self,
        *,
        backend_scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiAttachment.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        route_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApiAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment

        :param backend_scene: 
        :param environment_id: 
        :param http_api_id: 
        :param service_configs: 
        :param description: 
        :param domain_ids: 
        :param route_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b65968c4861492d356fb28ec68d9c7b04da7a370b640671e5bdfd2ca4bf0797)
            check_type(argname="argument backend_scene", value=backend_scene, expected_type=type_hints["backend_scene"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument domain_ids", value=domain_ids, expected_type=type_hints["domain_ids"])
            check_type(argname="argument route_id", value=route_id, expected_type=type_hints["route_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend_scene": backend_scene,
            "environment_id": environment_id,
            "http_api_id": http_api_id,
            "service_configs": service_configs,
        }
        if description is not None:
            self._values["description"] = description
        if domain_ids is not None:
            self._values["domain_ids"] = domain_ids
        if route_id is not None:
            self._values["route_id"] = route_id

    @builtins.property
    def backend_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backendScene: API release scenario.
        '''
        result = self._values.get("backend_scene")
        assert result is not None, "Required property 'backend_scene' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment to which the API is to deploy.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The ID of the HTTP API.
        '''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiAttachment.ServiceConfigsProperty]]]:
        '''
        :Property: serviceConfigs: Services associated with API publishing and their configurations.
        '''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiAttachment.ServiceConfigsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of publication.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: domainIds: The list of user domain names associated with API publishing.
        '''
        result = self._values.get("domain_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def route_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeId: The route ID. When publishing an HTTP API route, it must be passed in.
        '''
        result = self._values.get("route_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApiAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Domain``, which is used to create a domain name.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08b013f3ce1d637e5e8758bfd5ec9603ce7436a0aa19a63451be0ffb26c38d58)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a75ba3e295524f6f5d4ea2a5cea902737eaa38a1332daeaa2f69904012b7ac05)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCertIdentifier")
    def attr_cert_identifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertIdentifier: The tls Certificate identification.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainId: The ID of the Domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The name of the Domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrForceHttps")
    def attr_force_https(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForceHttps"))

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Option")
    def attr_http2_option(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Http2Option: Whether to enable http2 settings.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttp2Option"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocol")
    def attr_protocol(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Protocol: The types of protocols.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsCipherSuitesConfig")
    def attr_tls_cipher_suites_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsCipherSuitesConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMax")
    def attr_tls_max(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsMax"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMin")
    def attr_tls_min(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsMin"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The name of the Domain.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0ad01a0634fda8fd281185bd90c861a39c2bcbd4f75e4aefde3fbd5c2fcbaed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7e46baa0df592b503345b80618188ade999f8227aceb03018cc8fd891937f11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: The types of protocols supported by the domain are as follows:

        - HTTP: Supports only the HTTP protocol.
        - HTTPS: Supports only the HTTPS protocol.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a07af0105bb0e918340ad28c4bb9ae7e74a6466f9faa21e7d3e741793d66054)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="certIdentifier")
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certIdentifier: The tls Certificate identification.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certIdentifier"))

    @cert_identifier.setter
    def cert_identifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c17e596118d6fbf41581fab3a7273df7d36790952fb4a3ee3cb18755b58783b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certIdentifier", value)

    @builtins.property
    @jsii.member(jsii_name="forceHttps")
    def force_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "forceHttps"))

    @force_https.setter
    def force_https(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__816629bf7d96cc5d4fbb60bcea9c382d53caee0195de263ccc2dd6863f3353bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "forceHttps", value)

    @builtins.property
    @jsii.member(jsii_name="http2Option")
    def http2_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: http2Option: Whether to enable http2 settings.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "http2Option"))

    @http2_option.setter
    def http2_option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a243bb89fbdd14ad9a7045bed527e91f4a193e9f3adb78e6f8f887284617267)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "http2Option", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__cfff4f5765c0d7a1c80375a23ff485a5d40daccaa7439bd7201c9a18dc7cd238)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tlsCipherSuitesConfig")
    def tls_cipher_suites_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuitesConfigProperty"]]:
        '''
        :Property: tlsCipherSuitesConfig: The configuration of the TLS encryption suite
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuitesConfigProperty"]], jsii.get(self, "tlsCipherSuitesConfig"))

    @tls_cipher_suites_config.setter
    def tls_cipher_suites_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuitesConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d3148119ee66625c38e79059d03768ee79a4813ff27c78a13c141e054aa2b64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsCipherSuitesConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tlsMax")
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tlsMax"))

    @tls_max.setter
    def tls_max(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee402391fa56aae46a71ac76536527bcbf509361d13825fcdc9ccf25fd26cbbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsMax", value)

    @builtins.property
    @jsii.member(jsii_name="tlsMin")
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tlsMin"))

    @tls_min.setter
    def tls_min(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b96f8fb91621ec8e51e3903c53b2fee87671744d87a605f04e223a60248421b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsMin", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuiteProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name"},
    )
    class TlsCipherSuiteProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__02f80957c2225cdb65f33993e9e89b3a26d93f1e8b64550707cf0c0ba2edc4bf)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the cipher suite.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TlsCipherSuiteProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuitesConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_type": "configType",
            "tls_cipher_suite": "tlsCipherSuite",
        },
    )
    class TlsCipherSuitesConfigProperty:
        def __init__(
            self,
            *,
            config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tls_cipher_suite: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomain.TlsCipherSuiteProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param config_type: 
            :param tls_cipher_suite: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b9730ce080b130fbb4eb396adea0f1d3080f790a9b5d29a4c70296057eda34c9)
                check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
                check_type(argname="argument tls_cipher_suite", value=tls_cipher_suite, expected_type=type_hints["tls_cipher_suite"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if config_type is not None:
                self._values["config_type"] = config_type
            if tls_cipher_suite is not None:
                self._values["tls_cipher_suite"] = tls_cipher_suite

        @builtins.property
        def config_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configType: Config type, Default or Custom.
            '''
            result = self._values.get("config_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tls_cipher_suite(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuiteProperty"]]]]:
            '''
            :Property: tlsCipherSuite: Tls Cipher Suite.
            '''
            result = self._values.get("tls_cipher_suite")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.TlsCipherSuiteProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TlsCipherSuitesConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "protocol": "protocol",
        "cert_identifier": "certIdentifier",
        "force_https": "forceHttps",
        "http2_option": "http2Option",
        "resource_group_id": "resourceGroupId",
        "tls_cipher_suites_config": "tlsCipherSuitesConfig",
        "tls_max": "tlsMax",
        "tls_min": "tlsMin",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        force_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_cipher_suites_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.TlsCipherSuitesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain

        :param domain_name: 
        :param protocol: 
        :param cert_identifier: 
        :param force_https: 
        :param http2_option: 
        :param resource_group_id: 
        :param tls_cipher_suites_config: 
        :param tls_max: 
        :param tls_min: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__040071d0c81175e54dec6ce0e525f0dc0b5d9df00a9f4e8f2224924491ed2c98)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_identifier", value=cert_identifier, expected_type=type_hints["cert_identifier"])
            check_type(argname="argument force_https", value=force_https, expected_type=type_hints["force_https"])
            check_type(argname="argument http2_option", value=http2_option, expected_type=type_hints["http2_option"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tls_cipher_suites_config", value=tls_cipher_suites_config, expected_type=type_hints["tls_cipher_suites_config"])
            check_type(argname="argument tls_max", value=tls_max, expected_type=type_hints["tls_max"])
            check_type(argname="argument tls_min", value=tls_min, expected_type=type_hints["tls_min"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if cert_identifier is not None:
            self._values["cert_identifier"] = cert_identifier
        if force_https is not None:
            self._values["force_https"] = force_https
        if http2_option is not None:
            self._values["http2_option"] = http2_option
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tls_cipher_suites_config is not None:
            self._values["tls_cipher_suites_config"] = tls_cipher_suites_config
        if tls_max is not None:
            self._values["tls_max"] = tls_max
        if tls_min is not None:
            self._values["tls_min"] = tls_min

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The name of the Domain.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: The types of protocols supported by the domain are as follows:

        - HTTP: Supports only the HTTP protocol.
        - HTTPS: Supports only the HTTPS protocol.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certIdentifier: The tls Certificate identification.
        '''
        result = self._values.get("cert_identifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def force_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
        '''
        result = self._values.get("force_https")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: http2Option: Whether to enable http2 settings.
        '''
        result = self._values.get("http2_option")
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
    def tls_cipher_suites_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.TlsCipherSuitesConfigProperty]]:
        '''
        :Property: tlsCipherSuitesConfig: The configuration of the TLS encryption suite
        '''
        result = self._values.get("tls_cipher_suites_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.TlsCipherSuitesConfigProperty]], result)

    @builtins.property
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
        '''
        result = self._values.get("tls_max")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
        '''
        result = self._values.get("tls_min")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvironment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosEnvironment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Environment``, which is used to create an environment.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Environment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvironmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe7427480443c2e6b7b634ddd64c61936df75e6856359f81051af69e71f259f7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__36d679bdf38f935c1ffb332dfe7feead165df8bcb3984826e225dc26c6ffa890)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayId: The ID of the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__05813718cb2636a60af1410f420d14df29e26fa3046c801a4cce3a2f6d4f1fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentName")
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentName"))

    @environment_name.setter
    def environment_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d09defad39bf7b51033ba997fa0bdaf498a8f5f6836d32e78ef17ee58189076)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentName", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: Gateway id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e399912d5cc9fe3d80858adf3f0c26e77a7af2e262da336684f10ea3ae1db07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the environment, which can include information such as the purpose of the environment and its owner.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e69b26e1001ae29119ff1d93d931a8d3d13f9f42047fd8b9d56ad01fb8ee8ef9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosEnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_name": "environmentName",
        "gateway_id": "gatewayId",
        "description": "description",
    },
)
class RosEnvironmentProps:
    def __init__(
        self,
        *,
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvironment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment

        :param environment_name: 
        :param gateway_id: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8aea5610897b270fabef808bea7469f732f3ad1884d6f21fbe83d172d2d2c9f)
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_name": environment_name,
            "gateway_id": gateway_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: Gateway id.
        '''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the environment, which can include information such as the purpose of the environment and its owner.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosGateway",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Gateway``, which is used to create a Cloud-native API Gateway instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Gateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc5a05710b8fb2b5096c996bbbfd599cf80d513c0d09cc49c046492181be3882)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dc33a7bfe19a7de753c0e9c622f43ada1a73508582a0af7cd44d0d897f10f0ff)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation timestamp. Unit: milliseconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Environments: The list of environments associated with the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayId: The ID of the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayType: The type of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancers: The list of Gateway ingress addresses.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancers"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroup")
    def attr_security_group(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroup: The Security Group of the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Spec: Gateway instance specifications.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Update the timestamp. Unit: milliseconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Version: The gateway version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrVpc")
    def attr_vpc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Vpc: The VPC associated with the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpc"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitch")
    def attr_v_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitch: The virtual switch associated with the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The List of zones associated with the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a2d323c336b9fb13288325f010a83f0d3da2b8c7632b2a1e907a3af1fa69cc90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayName")
    def gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayName: The name of the Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayName"))

    @gateway_name.setter
    def gateway_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c22487eb264b229aebe0eb7e57cba763cd8e190f185678a0e18ae35c2fda09bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayName", value)

    @builtins.property
    @jsii.member(jsii_name="networkAccessConfig")
    def network_access_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.NetworkAccessConfigProperty"]:
        '''
        :Property: networkAccessConfig: Network Access Configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.NetworkAccessConfigProperty"], jsii.get(self, "networkAccessConfig"))

    @network_access_config.setter
    def network_access_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.NetworkAccessConfigProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__423d1b01a6ca80017ccf2a9e7d6d93adf82c4f9db474a9847b02104b276ee403)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkAccessConfig", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        paymentType: The payment type of the gateway. Valid values:

        - PayAsYouGo
        - Subscription
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b3dd2f1f6ad10750aa7617eec0400cc915dba35d63958c2d54792a8a68c88ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: spec: Gateway instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fafa9560982a0372d7f90d8bfd9da760a3b95fe87e8903ecf687c68d039f030)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @builtins.property
    @jsii.member(jsii_name="zoneConfig")
    def zone_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.ZoneConfigProperty"]:
        '''
        :Property: zoneConfig: Availability Zone Configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.ZoneConfigProperty"], jsii.get(self, "zoneConfig"))

    @zone_config.setter
    def zone_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.ZoneConfigProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2ee15e9047032c7a8bede54687d5446e8f9b62a33135fd22f807591984b7901)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneConfig", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayType")
    def gateway_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gatewayType: Describes the gateway type, which is categorized into the following two types:

        - API: indicates an API gateway
        - AI: Indicates an AI gateway.
        Default value: API.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gatewayType"))

    @gateway_type.setter
    def gateway_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efbbb87ff5b400d2658369f2d77dc070a867082ddd8cd5c885117adafcb48e67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayType", value)

    @builtins.property
    @jsii.member(jsii_name="logConfig")
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.LogConfigProperty"]]:
        '''
        :Property: logConfig: Log Configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.LogConfigProperty"]], jsii.get(self, "logConfig"))

    @log_config.setter
    def log_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.LogConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a16c92df09e8a2d7464ca823b3f05ea9b6ad8d3bb21c710f8f79d43f03f1a551)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logConfig", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__172cd7fc23afd9a4b3129027461fa1ef5904bb148b23a39232e45502bda2eb2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be3173a616dce2817636c1d4e4171ac8867ebacaaf070de1db9fba70a762391e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f3edb682bd8899416dcf2222d46ce8fcf516a4140dfd196fbee3b1e58d955514)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosGateway.TagsProperty"]]:
        '''
        :Property: tags: Tags of The tags of the Gateway..
        '''
        return typing.cast(typing.Optional[typing.List["RosGateway.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosGateway.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f651088a6ac05ba3d3b30dd621218a001275d1cb78336ae7995565ff7cb1c99f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpc")
    def vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VpcProperty"]]:
        '''
        :Property: vpc: The VPC associated with the Gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VpcProperty"]], jsii.get(self, "vpc"))

    @vpc.setter
    def vpc(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VpcProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3b6fa7921946aefef71b5c666e2b064b6cf6dfabc8eaa4488a7224c37ca8296)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpc", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitch")
    def v_switch(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VSwitchProperty"]]:
        '''
        :Property: vSwitch: The virtual switch associated with the Gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VSwitchProperty"]], jsii.get(self, "vSwitch"))

    @v_switch.setter
    def v_switch(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.VSwitchProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73398f092f6890eb5a7b7948e68a09404a4e598916c3cb8ef6a545690d95e2d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitch", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.LogConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"sls": "sls"},
    )
    class LogConfigProperty:
        def __init__(
            self,
            *,
            sls: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway.SlsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param sls: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4bf749b092ff53d691dcb8c6856ac0d117db4921224cf03a4417197d862fbc1c)
                check_type(argname="argument sls", value=sls, expected_type=type_hints["sls"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if sls is not None:
                self._values["sls"] = sls

        @builtins.property
        def sls(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.SlsProperty"]]:
            '''
            :Property: sls: Log Service Configuration.
            '''
            result = self._values.get("sls")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway.SlsProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.NetworkAccessConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type"},
    )
    class NetworkAccessConfigProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b4d905edc6436ca7bca928ea600d81e15383f35255c0f6bbbfc95a8eb64aa377)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: Network Access Type. Valid values:

            - Internet
            - Intranet
            - InternetAndIntranet
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NetworkAccessConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.SlsProperty",
        jsii_struct_bases=[],
        name_mapping={"enable": "enable"},
    )
    class SlsProperty:
        def __init__(
            self,
            *,
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__96d0ca13151afaba6072b4c43c5e2a66a82425e253913fd9c8981d684cbcaeff)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable is not None:
                self._values["enable"] = enable

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Enable Log Service.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__67bca6929ebe62215af7bdf902f33f0bca9d1438ba192b9afa3b2593ccab3897)
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
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.VSwitchProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "name": "name"},
    )
    class VSwitchProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param v_switch_id: 
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__83ec494b14c3372b2821df17269facdf474d47c145f13629976a12d4e5690e55)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_id": v_switch_id,
            }
            if name is not None:
                self._values["name"] = name

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the VSwitch.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the VSwitch.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VSwitchProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.VpcProperty",
        jsii_struct_bases=[],
        name_mapping={"vpc_id": "vpcId", "name": "name"},
    )
    class VpcProperty:
        def __init__(
            self,
            *,
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param vpc_id: 
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ce9a1e925a5939843ca463b93f66f1910b324de4c24257cb28e6754408175709)
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vpc_id": vpc_id,
            }
            if name is not None:
                self._values["name"] = name

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: The VPC network ID.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the VPC gateway.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosGateway.ZoneConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"select_option": "selectOption"},
    )
    class ZoneConfigProperty:
        def __init__(
            self,
            *,
            select_option: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param select_option: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5f644cce3b512c5cbd8af6105e74cece9ec931bda3860dbf44b111c45993b913)
                check_type(argname="argument select_option", value=select_option, expected_type=type_hints["select_option"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "select_option": select_option,
            }

        @builtins.property
        def select_option(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            selectOption: Availability Zone Options. Valid values:

            - Auto
            - Manual
            '''
            result = self._values.get("select_option")
            assert result is not None, "Required property 'select_option' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_name": "gatewayName",
        "network_access_config": "networkAccessConfig",
        "payment_type": "paymentType",
        "spec": "spec",
        "zone_config": "zoneConfig",
        "gateway_type": "gatewayType",
        "log_config": "logConfig",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc": "vpc",
        "v_switch": "vSwitch",
    },
)
class RosGatewayProps:
    def __init__(
        self,
        *,
        gateway_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_access_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.NetworkAccessConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.ZoneConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        gateway_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosGateway.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VSwitchProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway

        :param gateway_name: 
        :param network_access_config: 
        :param payment_type: 
        :param spec: 
        :param zone_config: 
        :param gateway_type: 
        :param log_config: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        :param tags: 
        :param vpc: 
        :param v_switch: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4fe9af7cdeb170ce3189cd965ead95ecf58e59ac1f373c1a0d934203fba4409)
            check_type(argname="argument gateway_name", value=gateway_name, expected_type=type_hints["gateway_name"])
            check_type(argname="argument network_access_config", value=network_access_config, expected_type=type_hints["network_access_config"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument zone_config", value=zone_config, expected_type=type_hints["zone_config"])
            check_type(argname="argument gateway_type", value=gateway_type, expected_type=type_hints["gateway_type"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc", value=vpc, expected_type=type_hints["vpc"])
            check_type(argname="argument v_switch", value=v_switch, expected_type=type_hints["v_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_name": gateway_name,
            "network_access_config": network_access_config,
            "payment_type": payment_type,
            "spec": spec,
            "zone_config": zone_config,
        }
        if gateway_type is not None:
            self._values["gateway_type"] = gateway_type
        if log_config is not None:
            self._values["log_config"] = log_config
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc is not None:
            self._values["vpc"] = vpc
        if v_switch is not None:
            self._values["v_switch"] = v_switch

    @builtins.property
    def gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayName: The name of the Gateway.
        '''
        result = self._values.get("gateway_name")
        assert result is not None, "Required property 'gateway_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_access_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.NetworkAccessConfigProperty]:
        '''
        :Property: networkAccessConfig: Network Access Configuration.
        '''
        result = self._values.get("network_access_config")
        assert result is not None, "Required property 'network_access_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.NetworkAccessConfigProperty], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        paymentType: The payment type of the gateway. Valid values:

        - PayAsYouGo
        - Subscription
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: spec: Gateway instance specifications.
        '''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.ZoneConfigProperty]:
        '''
        :Property: zoneConfig: Availability Zone Configuration.
        '''
        result = self._values.get("zone_config")
        assert result is not None, "Required property 'zone_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.ZoneConfigProperty], result)

    @builtins.property
    def gateway_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gatewayType: Describes the gateway type, which is categorized into the following two types:

        - API: indicates an API gateway
        - AI: Indicates an AI gateway.
        Default value: API.
        '''
        result = self._values.get("gateway_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.LogConfigProperty]]:
        '''
        :Property: logConfig: Log Configuration.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.LogConfigProperty]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
        '''
        result = self._values.get("period_unit")
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
    def tags(self) -> typing.Optional[typing.List[RosGateway.TagsProperty]]:
        '''
        :Property: tags: Tags of The tags of the Gateway..
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosGateway.TagsProperty]], result)

    @builtins.property
    def vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VpcProperty]]:
        '''
        :Property: vpc: The VPC associated with the Gateway.
        '''
        result = self._values.get("vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VpcProperty]], result)

    @builtins.property
    def v_switch(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VSwitchProperty]]:
        '''
        :Property: vSwitch: The virtual switch associated with the Gateway.
        '''
        result = self._values.get("v_switch")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VSwitchProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHttpApi(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosHttpApi",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::HttpApi``, which is used to create an HTTP API.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HttpApi`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHttpApiProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87d87aef625c7691c67f2413549c49c6c7f9cd18fb8b994df1b03fc964470753)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bbdc5ab4ea0dcfeaf9ba2fdf25295ba2a38bc1967d485f9898754a67c36c3117)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBasePath")
    def attr_base_path(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BasePath: The base path of the API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBasePath"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description of API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Environments: Published Environmental Information of the API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiId: The ID of the API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiName")
    def attr_http_api_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiName: The name of the API.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiName"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocols")
    def attr_protocols(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Protocols: List of API Access Protocols.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocols"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of HTTP API
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2fc9cfe480f248f3830ef15327268e258678b2b361c37e58d44503950e1b4ade)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="httpApiName")
    def http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiName: The name of the API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "httpApiName"))

    @http_api_name.setter
    def http_api_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce775090644dee4b5e02d38cf6b95d5a9519eeeafcc6ac6370dd54286ca37855)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpApiName", value)

    @builtins.property
    @jsii.member(jsii_name="protocols")
    def protocols(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: protocols: List of API Access Protocols.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "protocols"))

    @protocols.setter
    def protocols(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43e027a1c5d3d512caad90a7aa2aa167d3268b766c21afd44ea26e9981825e1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocols", value)

    @builtins.property
    @jsii.member(jsii_name="basePath")
    def base_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: basePath: The base path of the API should start with a /.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "basePath"))

    @base_path.setter
    def base_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5cab230b2a25c38b37545d9fee4f9de42ba651a80ed6f9eb311490187e83cda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "basePath", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of API.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51cc238b0b4a15cadcc08b7eaad20e4d95d8d2852b3ab273b1454bf8f4e5c507)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of HTTP API, Valid values:

        - Http
        - Rest
        - WebSocket
        - HttpIngress
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba51a07e4afec3c1346f22e07c0e7439a298efef49a119121c128391e5c5fccc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosHttpApiProps",
    jsii_struct_bases=[],
    name_mapping={
        "http_api_name": "httpApiName",
        "protocols": "protocols",
        "base_path": "basePath",
        "description": "description",
        "type": "type",
    },
)
class RosHttpApiProps:
    def __init__(
        self,
        *,
        http_api_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocols: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        base_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHttpApi``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi

        :param http_api_name: 
        :param protocols: 
        :param base_path: 
        :param description: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__635085336d824a84111a13763a2e62d2013961e686813db68a6d157ab4f9a2b1)
            check_type(argname="argument http_api_name", value=http_api_name, expected_type=type_hints["http_api_name"])
            check_type(argname="argument protocols", value=protocols, expected_type=type_hints["protocols"])
            check_type(argname="argument base_path", value=base_path, expected_type=type_hints["base_path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "http_api_name": http_api_name,
            "protocols": protocols,
        }
        if base_path is not None:
            self._values["base_path"] = base_path
        if description is not None:
            self._values["description"] = description
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiName: The name of the API.
        '''
        result = self._values.get("http_api_name")
        assert result is not None, "Required property 'http_api_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocols(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: protocols: List of API Access Protocols.
        '''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def base_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: basePath: The base path of the API should start with a /.
        '''
        result = self._values.get("base_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of API.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of HTTP API, Valid values:

        - Http
        - Rest
        - WebSocket
        - HttpIngress
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHttpApiProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOperation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosOperation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Operation``, which is used to create an operation for an HTTP API.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Operation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOperationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8b11089d735a102a20ec8db2a3cd17aea1c8d8d5536cd1536ac9b41b141c7f1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__af4dd9f2d2c2d1df0893643194a09065443f62d5c1995952a5e30669b4ae5367)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation timestamp of the operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMethod")
    def attr_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Method: The method of http protocol.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrMock")
    def attr_mock(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Mock: Mock configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMock"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationId")
    def attr_operation_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationId: The ID of the operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationId"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationName")
    def attr_operation_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationName"))

    @builtins.property
    @jsii.member(jsii_name="attrPath")
    def attr_path(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Path: The interface path of the operation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPath"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3e3b4c3c31fc9b815f3d4bb4a9c1b062b96b6ca37d618fc9d01a7382c014e480)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="httpApiId")
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The HTTP API ID to which the interface belongs
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "httpApiId"))

    @http_api_id.setter
    def http_api_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__168711987e9d2f846c0e159721b134f5477196c20dab0e38b7d5078a6972ba0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpApiId", value)

    @builtins.property
    @jsii.member(jsii_name="method")
    def method(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: method: The method of http protocol.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "method"))

    @method.setter
    def method(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b3748b78367ca99214dab2454a520279585834e5bef222c795f765524a3b554)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "method", value)

    @builtins.property
    @jsii.member(jsii_name="operationName")
    def operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationName: The name of the operation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "operationName"))

    @operation_name.setter
    def operation_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cf21e739162ee0f7fc0f3a271b761e883367737f16c667722830337b761c1a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operationName", value)

    @builtins.property
    @jsii.member(jsii_name="path")
    def path(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: path: The interface path of the operation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "path"))

    @path.setter
    def path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7439b4035cbf63a46811a894978c0aa210f3ad14ba9d9dc66e11da88d60e3f99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "path", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the operation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4be5d048a98e15624f909a3982bd933688709b6c8787908dd3ef5f345c215683)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="mock")
    def mock(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOperation.MockProperty"]]:
        '''
        :Property: mock: Mock configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOperation.MockProperty"]], jsii.get(self, "mock"))

    @mock.setter
    def mock(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOperation.MockProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d52028fba2ffec946e8e52004190d4e8a4d34c02f3e5cacf847c7382cba96a1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mock", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosOperation.MockProperty",
        jsii_struct_bases=[],
        name_mapping={
            "response_code": "responseCode",
            "enable": "enable",
            "response_content": "responseContent",
        },
    )
    class MockProperty:
        def __init__(
            self,
            *,
            response_code: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            response_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param response_code: 
            :param enable: 
            :param response_content: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8ba55d8854260962c3e330320606985f4cb75f19965fccb6849d7ff7378ae311)
                check_type(argname="argument response_code", value=response_code, expected_type=type_hints["response_code"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument response_content", value=response_content, expected_type=type_hints["response_content"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "response_code": response_code,
            }
            if enable is not None:
                self._values["enable"] = enable
            if response_content is not None:
                self._values["response_content"] = response_content

        @builtins.property
        def response_code(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: responseCode: Response Status Code.
            '''
            result = self._values.get("response_code")
            assert result is not None, "Required property 'response_code' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Whether to enable Mock in the interface path.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def response_content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: responseContent: Response content.
            '''
            result = self._values.get("response_content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MockProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosOperationProps",
    jsii_struct_bases=[],
    name_mapping={
        "http_api_id": "httpApiId",
        "method": "method",
        "operation_name": "operationName",
        "path": "path",
        "description": "description",
        "mock": "mock",
    },
)
class RosOperationProps:
    def __init__(
        self,
        *,
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        operation_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mock: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOperation.MockProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosOperation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation

        :param http_api_id: 
        :param method: 
        :param operation_name: 
        :param path: 
        :param description: 
        :param mock: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8952812e3c34095cb4abf8fcff6f12735073fcb65d910b415f56a65ad1290d)
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument method", value=method, expected_type=type_hints["method"])
            check_type(argname="argument operation_name", value=operation_name, expected_type=type_hints["operation_name"])
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument mock", value=mock, expected_type=type_hints["mock"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "http_api_id": http_api_id,
            "method": method,
            "operation_name": operation_name,
            "path": path,
        }
        if description is not None:
            self._values["description"] = description
        if mock is not None:
            self._values["mock"] = mock

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The HTTP API ID to which the interface belongs
        '''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def method(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: method: The method of http protocol.
        '''
        result = self._values.get("method")
        assert result is not None, "Required property 'method' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def operation_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: operationName: The name of the operation.
        '''
        result = self._values.get("operation_name")
        assert result is not None, "Required property 'operation_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def path(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: path: The interface path of the operation.
        '''
        result = self._values.get("path")
        assert result is not None, "Required property 'path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the operation.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mock(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOperation.MockProperty]]:
        '''
        :Property: mock: Mock configuration.
        '''
        result = self._values.get("mock")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOperation.MockProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOperationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPlugin(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosPlugin",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Plugin``, which is used to create a plug-in.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Plugin`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPluginProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f95148ffabfeb7a235f4de659a1d2af249655c7c4bac5ca25d910de022a52dee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7d08d043f79687a6dd03142a65b5b42ae59dd6c141c73c7e86d1330f3e77ae52)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayId: The ID of the Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayName: The name of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassId")
    def attr_plugin_class_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginClassId: The ID of the plugin class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginId: The ID of the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2a0fd3f781e85082c286ef819ce2f65dc4d20842c2373131a90382efa7d3a6c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__906bc7b5b8c33eea78bc7af6ec41a29be8cb3679a2514549307b01d57c0fd569)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="pluginClassId")
    def plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginClassId: The ID of the plugin class.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pluginClassId"))

    @plugin_class_id.setter
    def plugin_class_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ad8d70d8131eec829b18c5543cb83644e3060f33e72d1e76dcf8f795281759a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pluginClassId", value)


class RosPluginAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosPluginAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::PluginAttachment``, which is used to bind a plug-in.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PluginAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPluginAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b094bf3c9ca06ff46d2755197d5279df5dcc9d4742c369de17e986d6ddac771)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0725f68cc354cd292a87abfe265606008756af550854568cd88170b0b6dc75ab)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceId")
    def attr_attach_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachResourceId: The resource ID to be attached by the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceIds")
    def attr_attach_resource_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachResourceIds: The list of resource IDs to be attached by the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachResourceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceNames")
    def attr_attach_resource_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachResourceNames: The list of resource names to be attached by the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachResourceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceParentIds")
    def attr_attach_resource_parent_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachResourceParentIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachResourceType")
    def attr_attach_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachResourceType: The type of the resource to be attached by the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enable: Whether to enable this plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginAttachmentId")
    def attr_plugin_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginAttachmentId: The ID of plugin attachment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassInfo")
    def attr_plugin_class_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginClassInfo: The type of the plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginClassInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginInfo")
    def attr_plugin_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginInfo: The information about the association of plugin with gateway instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginInfo"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1243c2e6f84e3bd9d015eaaa734260b122d464109eb4ab17e3843a290b09959b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="pluginInfo")
    def plugin_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPluginAttachment.PluginInfoProperty"]:
        '''
        :Property: pluginInfo: The information about the association of plugin with gateway instance.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPluginAttachment.PluginInfoProperty"], jsii.get(self, "pluginInfo"))

    @plugin_info.setter
    def plugin_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPluginAttachment.PluginInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfbb440d6ea8d97d3ec7a34d6f8eadebd69fe185d78739a95129646dfb617914)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pluginInfo", value)

    @builtins.property
    @jsii.member(jsii_name="attachResourceId")
    def attach_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attachResourceId: The resource ID to be attached by the plugin.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "attachResourceId"))

    @attach_resource_id.setter
    def attach_resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8a22fba6ae36b3987094d6c1705859e315386f0ffba18229c727058e11cde26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachResourceId", value)

    @builtins.property
    @jsii.member(jsii_name="attachResourceIds")
    def attach_resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: attachResourceIds: The list of resource IDs to be attached by the plugin.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "attachResourceIds"))

    @attach_resource_ids.setter
    def attach_resource_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62cdb963f90d413dc928304b24d4a4bdac4e67b2d8cafb483c4263138be3acbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachResourceIds", value)

    @builtins.property
    @jsii.member(jsii_name="attachResourceType")
    def attach_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attachResourceType: The type of the resource to be attached by the plugin.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "attachResourceType"))

    @attach_resource_type.setter
    def attach_resource_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7854356b074553ca9b60cc96600987b4d7c29478688700899a464c34bae92f88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachResourceType", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Whether to enable this plugin, default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b0e9f730dbe32fb70c925aaa7830feea36fc92dd2d7e0856fe1b4adfa2611f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: environmentId: The ID of the environment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b729bfabb98f33be35443f889b37314144f6405ed0e8cfe9f26e01218122634)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosPluginAttachment.PluginInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "gateway_id": "gatewayId",
            "plugin_id": "pluginId",
            "plugin_config": "pluginConfig",
        },
    )
    class PluginInfoProperty:
        def __init__(
            self,
            *,
            gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            plugin_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            plugin_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param gateway_id: 
            :param plugin_id: 
            :param plugin_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b80e3bbc99391323a6c5c892b4f27e844ccefe4fd8143e6e20eb70d3e2bc5fa9)
                check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
                check_type(argname="argument plugin_id", value=plugin_id, expected_type=type_hints["plugin_id"])
                check_type(argname="argument plugin_config", value=plugin_config, expected_type=type_hints["plugin_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "gateway_id": gateway_id,
                "plugin_id": plugin_id,
            }
            if plugin_config is not None:
                self._values["plugin_config"] = plugin_config

        @builtins.property
        def gateway_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: gatewayId: The ID of the Gateway.
            '''
            result = self._values.get("gateway_id")
            assert result is not None, "Required property 'gateway_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def plugin_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: pluginId: The ID of plugin and gateway association.
            '''
            result = self._values.get("plugin_id")
            assert result is not None, "Required property 'plugin_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def plugin_config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pluginConfig: The information about the association of plugin with gateway instance. The value of this parameter must be transmitted using Base64 encoding.
            '''
            result = self._values.get("plugin_config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PluginInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosPluginAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "plugin_info": "pluginInfo",
        "attach_resource_id": "attachResourceId",
        "attach_resource_ids": "attachResourceIds",
        "attach_resource_type": "attachResourceType",
        "enable": "enable",
        "environment_id": "environmentId",
    },
)
class RosPluginAttachmentProps:
    def __init__(
        self,
        *,
        plugin_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPluginAttachment.PluginInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        attach_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        attach_resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        attach_resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPluginAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment

        :param plugin_info: 
        :param attach_resource_id: 
        :param attach_resource_ids: 
        :param attach_resource_type: 
        :param enable: 
        :param environment_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f6ed9fc77467cec461091f283aafa23c7cae167e62588e63cb2643bdd2a366b)
            check_type(argname="argument plugin_info", value=plugin_info, expected_type=type_hints["plugin_info"])
            check_type(argname="argument attach_resource_id", value=attach_resource_id, expected_type=type_hints["attach_resource_id"])
            check_type(argname="argument attach_resource_ids", value=attach_resource_ids, expected_type=type_hints["attach_resource_ids"])
            check_type(argname="argument attach_resource_type", value=attach_resource_type, expected_type=type_hints["attach_resource_type"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "plugin_info": plugin_info,
        }
        if attach_resource_id is not None:
            self._values["attach_resource_id"] = attach_resource_id
        if attach_resource_ids is not None:
            self._values["attach_resource_ids"] = attach_resource_ids
        if attach_resource_type is not None:
            self._values["attach_resource_type"] = attach_resource_type
        if enable is not None:
            self._values["enable"] = enable
        if environment_id is not None:
            self._values["environment_id"] = environment_id

    @builtins.property
    def plugin_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPluginAttachment.PluginInfoProperty]:
        '''
        :Property: pluginInfo: The information about the association of plugin with gateway instance.
        '''
        result = self._values.get("plugin_info")
        assert result is not None, "Required property 'plugin_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPluginAttachment.PluginInfoProperty], result)

    @builtins.property
    def attach_resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attachResourceId: The resource ID to be attached by the plugin.
        '''
        result = self._values.get("attach_resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def attach_resource_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: attachResourceIds: The list of resource IDs to be attached by the plugin.
        '''
        result = self._values.get("attach_resource_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def attach_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attachResourceType: The type of the resource to be attached by the plugin.
        '''
        result = self._values.get("attach_resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Whether to enable this plugin, default value is false.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: environmentId: The ID of the environment.
        '''
        result = self._values.get("environment_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPluginClass(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosPluginClass",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::PluginClass``, which is used to create a plug-in class.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PluginClass`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPluginClassProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4583a1246f40c44891e9de992aaf54cc54cd3e988ec5c83645330f6e6081317f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cbbe2950c132a3e0dc64949a01abe51acb3ae6c1a372ceb9da9beba8cba6e346)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAlias")
    def attr_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Alias: The alias of the plugin class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the plugin class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDocument")
    def attr_document(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Document: The document of plugin.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginClassName")
    def attr_plugin_class_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginClassName: The name of the plugin class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of the plugin class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrWasmLanguage")
    def attr_wasm_language(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WasmLanguage: Wasm language.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWasmLanguage"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the plugin class.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c74235db0e26eea06f4d6d3efab7f6f1e4e894fd78a9ebf8436b49f7d081fc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8499bbe4225404335d9f86a2472672ac00be6c60b10c5edd26ea78b6137af34c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="executePriority")
    def execute_priority(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executePriority: The execute priority of the Plugin.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "executePriority"))

    @execute_priority.setter
    def execute_priority(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__641951739f11d9555d1e79aa318c0a51ef7160eb9e2bee090a16a01dde7b92da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "executePriority", value)

    @builtins.property
    @jsii.member(jsii_name="executeStage")
    def execute_stage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executeStage: The Execution stage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "executeStage"))

    @execute_stage.setter
    def execute_stage(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfff5a34e924f269c1c0a1cebc1f4cf509d6160a71d774845dfc8bb4a6154bbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "executeStage", value)

    @builtins.property
    @jsii.member(jsii_name="pluginClassName")
    def plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginClassName: The name of the plugin class.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pluginClassName"))

    @plugin_class_name.setter
    def plugin_class_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c43df0a2bf41ed04c13c1c3dcb47f93cbdd0077247e52e0a8daac3770a2b11cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pluginClassName", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: version: The version of plugin class.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf7c4c995889e308740832f9c50622101412b1af215811757a80e4e61938f75f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="versionDescription")
    def version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: versionDescription: The description of the version .
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "versionDescription"))

    @version_description.setter
    def version_description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f05b5885680e84a5c8a89b9ce89e380a47d431d0cbb3574a5f57c53e7c43853)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionDescription", value)

    @builtins.property
    @jsii.member(jsii_name="wasmLanguage")
    def wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wasmLanguage: the language of the wasm.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "wasmLanguage"))

    @wasm_language.setter
    def wasm_language(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ba9a1f1fa5593b0e66b47ac26b7d384bf1ca1cb647dfb4521651b5cf2055806)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wasmLanguage", value)

    @builtins.property
    @jsii.member(jsii_name="wasmUrl")
    def wasm_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wasmUrl: The url of the wasm.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "wasmUrl"))

    @wasm_url.setter
    def wasm_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d26a88f1d10ecae1baa37be78eb935c5d77cf1b6636774b9f914709acd63230)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wasmUrl", value)

    @builtins.property
    @jsii.member(jsii_name="alias")
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alias: The alias of the plugin class.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alias"))

    @alias.setter
    def alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__570f0874f45e3e74792115382c1052481e9f4f316d9a2d9bb8fd2d40405a03e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alias", value)

    @builtins.property
    @jsii.member(jsii_name="supportedMinGatewayVersion")
    def supported_min_gateway_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportedMinGatewayVersion: The supported minimum gateway version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "supportedMinGatewayVersion"))

    @supported_min_gateway_version.setter
    def supported_min_gateway_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a756f2eb41237c3a539c895b9a868711434ec928cbb33dea30977dc9a1bfadbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "supportedMinGatewayVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosPluginClassProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "execute_priority": "executePriority",
        "execute_stage": "executeStage",
        "plugin_class_name": "pluginClassName",
        "version": "version",
        "version_description": "versionDescription",
        "wasm_language": "wasmLanguage",
        "wasm_url": "wasmUrl",
        "alias": "alias",
        "supported_min_gateway_version": "supportedMinGatewayVersion",
    },
)
class RosPluginClassProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        execute_priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        execute_stage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        wasm_language: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        wasm_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        supported_min_gateway_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPluginClass``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass

        :param description: 
        :param execute_priority: 
        :param execute_stage: 
        :param plugin_class_name: 
        :param version: 
        :param version_description: 
        :param wasm_language: 
        :param wasm_url: 
        :param alias: 
        :param supported_min_gateway_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4c4a3ece66ca49c07d11584f4d830e9dd628dcbd595925aa7123e934f614475)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument execute_priority", value=execute_priority, expected_type=type_hints["execute_priority"])
            check_type(argname="argument execute_stage", value=execute_stage, expected_type=type_hints["execute_stage"])
            check_type(argname="argument plugin_class_name", value=plugin_class_name, expected_type=type_hints["plugin_class_name"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument version_description", value=version_description, expected_type=type_hints["version_description"])
            check_type(argname="argument wasm_language", value=wasm_language, expected_type=type_hints["wasm_language"])
            check_type(argname="argument wasm_url", value=wasm_url, expected_type=type_hints["wasm_url"])
            check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
            check_type(argname="argument supported_min_gateway_version", value=supported_min_gateway_version, expected_type=type_hints["supported_min_gateway_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "execute_priority": execute_priority,
            "execute_stage": execute_stage,
            "plugin_class_name": plugin_class_name,
            "version": version,
            "version_description": version_description,
            "wasm_language": wasm_language,
            "wasm_url": wasm_url,
        }
        if alias is not None:
            self._values["alias"] = alias
        if supported_min_gateway_version is not None:
            self._values["supported_min_gateway_version"] = supported_min_gateway_version

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the plugin class.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def execute_priority(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executePriority: The execute priority of the Plugin.
        '''
        result = self._values.get("execute_priority")
        assert result is not None, "Required property 'execute_priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def execute_stage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executeStage: The Execution stage.
        '''
        result = self._values.get("execute_stage")
        assert result is not None, "Required property 'execute_stage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plugin_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginClassName: The name of the plugin class.
        '''
        result = self._values.get("plugin_class_name")
        assert result is not None, "Required property 'plugin_class_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: version: The version of plugin class.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: versionDescription: The description of the version .
        '''
        result = self._values.get("version_description")
        assert result is not None, "Required property 'version_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def wasm_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wasmLanguage: the language of the wasm.
        '''
        result = self._values.get("wasm_language")
        assert result is not None, "Required property 'wasm_language' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def wasm_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wasmUrl: The url of the wasm.
        '''
        result = self._values.get("wasm_url")
        assert result is not None, "Required property 'wasm_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alias: The alias of the plugin class.
        '''
        result = self._values.get("alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def supported_min_gateway_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportedMinGatewayVersion: The supported minimum gateway version.
        '''
        result = self._values.get("supported_min_gateway_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginClassProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosPluginProps",
    jsii_struct_bases=[],
    name_mapping={"gateway_id": "gatewayId", "plugin_class_id": "pluginClassId"},
)
class RosPluginProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_class_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPlugin``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin

        :param gateway_id: 
        :param plugin_class_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__422afe18bdfb736a77732c3ad7d526f12ec5c15f3b61b53aa2ee60dee28b6056)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument plugin_class_id", value=plugin_class_id, expected_type=type_hints["plugin_class_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
            "plugin_class_id": plugin_class_id,
        }

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Gateway.
        '''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plugin_class_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginClassId: The ID of the plugin class.
        '''
        result = self._values.get("plugin_class_id")
        assert result is not None, "Required property 'plugin_class_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Policy``, which is used to create a policy.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Policy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a8ce9c54e18197708535b20a705a4cf0718dd37fc6ee650e01785f06e23b17b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6c406beb411057b81b7b8a94be28f0e8dd3469ca70603828bdf572f274af0d8c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassId")
    def attr_policy_class_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyClassId: The ID of policy class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyClassId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyClassName")
    def attr_policy_class_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyClassName: The name of policy class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyClassName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyConfig")
    def attr_policy_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyConfig: Policy Configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The ID of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyName: The name of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="attachResourceIds")
    def attach_resource_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: attachResourceIds: The Mount point id list.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "attachResourceIds"))

    @attach_resource_ids.setter
    def attach_resource_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b59576ecad419a8aeb940d5bd6e45d96f3b79b385fe957027e8f93d165f91b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachResourceIds", value)

    @builtins.property
    @jsii.member(jsii_name="attachResourceType")
    def attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        attachResourceType: Policies support mount point types.
        HttpApi:HttpApi.
        Operation: the Operation of the HttpApi.
        GatewayRoute: Gateway route.
        GatewayService: Gateway service.
        GatewayServicePort: The Gateway service port.
        Domain: The Gateway Domain name.
        Gateway: Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attachResourceType"))

    @attach_resource_type.setter
    def attach_resource_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dea939f06234541a10a64a092e2fc54705e56234e390e3001188ce1d930be62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attachResourceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d44de687ace0ffbe115238c79c5f2b9d9bbe729181c4a3923a61dcf6b3a97dbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__252db070a59c21bb3884e497239e8e8d621bd17e5fd58dda64793fd98fde8e30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42dfc7a405d68d7ded78eef0359dc24a67412ad6d78c5ef71df2c816a206dd47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="policyClassName")
    def policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyClassName: The name of the policy class.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyClassName"))

    @policy_class_name.setter
    def policy_class_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5026d21dfd6b30616124cc3f7e5aa27c6f8d7d83ab6c3dc7b24df8b39a2a4f8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyClassName", value)

    @builtins.property
    @jsii.member(jsii_name="policyConfig")
    def policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyConfig: Policy Configuration.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyConfig"))

    @policy_config.setter
    def policy_config(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e8d2ebefa976bf34c0b1967bae804a673ab9c15b7086ea5fffff89811334af6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyConfig", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyName: The name of the policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa1bb4258621fcd5cf322cdea6ffba9e611e7e7840511708970d34f9b60f6c3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "attach_resource_ids": "attachResourceIds",
        "attach_resource_type": "attachResourceType",
        "environment_id": "environmentId",
        "gateway_id": "gatewayId",
        "policy_class_name": "policyClassName",
        "policy_config": "policyConfig",
        "policy_name": "policyName",
    },
)
class RosPolicyProps:
    def __init__(
        self,
        *,
        attach_resource_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        attach_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_config: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy

        :param attach_resource_ids: 
        :param attach_resource_type: 
        :param environment_id: 
        :param gateway_id: 
        :param policy_class_name: 
        :param policy_config: 
        :param policy_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74615ae4b84715f138848ef8e0258ba547ab27eb652cff53661fb83e5263b948)
            check_type(argname="argument attach_resource_ids", value=attach_resource_ids, expected_type=type_hints["attach_resource_ids"])
            check_type(argname="argument attach_resource_type", value=attach_resource_type, expected_type=type_hints["attach_resource_type"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument policy_class_name", value=policy_class_name, expected_type=type_hints["policy_class_name"])
            check_type(argname="argument policy_config", value=policy_config, expected_type=type_hints["policy_config"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "attach_resource_ids": attach_resource_ids,
            "attach_resource_type": attach_resource_type,
            "environment_id": environment_id,
            "gateway_id": gateway_id,
            "policy_class_name": policy_class_name,
            "policy_config": policy_config,
        }
        if policy_name is not None:
            self._values["policy_name"] = policy_name

    @builtins.property
    def attach_resource_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: attachResourceIds: The Mount point id list.
        '''
        result = self._values.get("attach_resource_ids")
        assert result is not None, "Required property 'attach_resource_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def attach_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        attachResourceType: Policies support mount point types.
        HttpApi:HttpApi.
        Operation: the Operation of the HttpApi.
        GatewayRoute: Gateway route.
        GatewayService: Gateway service.
        GatewayServicePort: The Gateway service port.
        Domain: The Gateway Domain name.
        Gateway: Gateway.
        '''
        result = self._values.get("attach_resource_type")
        assert result is not None, "Required property 'attach_resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Gateway.
        '''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_class_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyClassName: The name of the policy class.
        '''
        result = self._values.get("policy_class_name")
        assert result is not None, "Required property 'policy_class_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyConfig: Policy Configuration.
        '''
        result = self._values.get("policy_config")
        assert result is not None, "Required property 'policy_config' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyName: The name of the policy.
        '''
        result = self._values.get("policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRoute(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosRoute",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Route``, which is used to create a route for an HTTP API.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Route`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRouteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee669099b46d9829186fa9c46c97d3de3f6a1674d3a9464969b922fb688ad306)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e01d9fb969138a50576aaae9ad36e7642ee772b1d56346ee08c388d625c6d7b3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackend")
    def attr_backend(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Backend: Backend services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackend"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of route resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainInfos")
    def attr_domain_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainInfos: Domain items.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentInfo")
    def attr_environment_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentInfo: Environment information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrMatch")
    def attr_match(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Match: The match rule of route resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMatch"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteId: The ID of route resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteName")
    def attr_route_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteName: The name of the route.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backend")
    def backend(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.BackendProperty"]:
        '''
        :Property: backend: Backend service configuration for routing.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.BackendProperty"], jsii.get(self, "backend"))

    @backend.setter
    def backend(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.BackendProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d929954e9eaa6215a5c4299658d95410c8d78ecae6155f6e1aa480469b1f31f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backend", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d3744294b2e3f4ff5da1126bf930ac4de857bf982fc62da643f98e13fe18427)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentInfo")
    def environment_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.EnvironmentInfoProperty"]:
        '''
        :Property: environmentInfo: The information if the environment.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.EnvironmentInfoProperty"], jsii.get(self, "environmentInfo"))

    @environment_info.setter
    def environment_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.EnvironmentInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bbaa6b594a1cf59956c6135ddc73bc0169efb70d8476ceb388f717f5be60f92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentInfo", value)

    @builtins.property
    @jsii.member(jsii_name="httpApiId")
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The ID of the API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "httpApiId"))

    @http_api_id.setter
    def http_api_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf6f3f2813dfe08613082cb2dbb7d836d37bd2518f5cf3f215243e103c35fa69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpApiId", value)

    @builtins.property
    @jsii.member(jsii_name="match")
    def match(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.MatchProperty"]:
        '''
        :Property: match: The match rule of route resource.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.MatchProperty"], jsii.get(self, "match"))

    @match.setter
    def match(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.MatchProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a0e27479ad55376f98d0785299c65e8510518e45166a88bb7dccf18eb56f615)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "match", value)

    @builtins.property
    @jsii.member(jsii_name="routeName")
    def route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeName: The name of the route.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "routeName"))

    @route_name.setter
    def route_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b541f895026732e483ef4b19b511b29cca0ac78f6c2e30ac079e245659e64a3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b07c3556b77d1163fc818bd4b25c27be14e43ad828768db0fd2390b4fca29795)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="domainIds")
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: domainIds: The list of domain name IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "domainIds"))

    @domain_ids.setter
    def domain_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__488d4ff11fba38f7c9c9b1a30b71b915a0cf08ac499f7342cebda1ab37d2cdd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainIds", value)

    @builtins.property
    @jsii.member(jsii_name="domainInfos")
    def domain_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.DomainInfosProperty"]]]]:
        '''
        :Property: domainInfos: Domain items.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.DomainInfosProperty"]]]], jsii.get(self, "domainInfos"))

    @domain_infos.setter
    def domain_infos(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.DomainInfosProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a613fcd2d9c620351698665f282658e8c8af2b030dc52c641a9f85e05607213)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainInfos", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.BackendProperty",
        jsii_struct_bases=[],
        name_mapping={"scene": "scene", "services": "services"},
    )
    class BackendProperty:
        def __init__(
            self,
            *,
            scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            services: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.ServicesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param scene: 
            :param services: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__df5f60a9eb00c546587acff95368856423657cb36ec785c841c9dabcadc6b4ad)
                check_type(argname="argument scene", value=scene, expected_type=type_hints["scene"])
                check_type(argname="argument services", value=services, expected_type=type_hints["services"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "scene": scene,
                "services": services,
            }

        @builtins.property
        def scene(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: scene: Backend service scene.
            '''
            result = self._values.get("scene")
            assert result is not None, "Required property 'scene' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def services(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.ServicesProperty"]]]:
            '''
            :Property: services: Backend service scenario.
            '''
            result = self._values.get("services")
            assert result is not None, "Required property 'services' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.ServicesProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackendProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.DomainInfosProperty",
        jsii_struct_bases=[],
        name_mapping={"domain_id": "domainId", "name": "name", "protocol": "protocol"},
    )
    class DomainInfosProperty:
        def __init__(
            self,
            *,
            domain_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param domain_id: 
            :param name: 
            :param protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b073a718641d732c8ab299410e38c99c40f65296d739703d047e5b5b4514b373)
                check_type(argname="argument domain_id", value=domain_id, expected_type=type_hints["domain_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if domain_id is not None:
                self._values["domain_id"] = domain_id
            if name is not None:
                self._values["name"] = name
            if protocol is not None:
                self._values["protocol"] = protocol

        @builtins.property
        def domain_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: domainId: The ID of the Domain.
            '''
            result = self._values.get("domain_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the Domain.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The protocol of the Domain.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DomainInfosProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.EnvironmentInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "environment_id": "environmentId",
            "alias": "alias",
            "gateway_info": "gatewayInfo",
            "name": "name",
            "sub_domains": "subDomains",
        },
    )
    class EnvironmentInfoProperty:
        def __init__(
            self,
            *,
            environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            gateway_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.GatewayInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sub_domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.SubDomainsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param environment_id: 
            :param alias: 
            :param gateway_info: 
            :param name: 
            :param sub_domains: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7f214a699df8492a52a860439a7fecfe42b67727e3f0f5713e93afc5df2e98f0)
                check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
                check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
                check_type(argname="argument gateway_info", value=gateway_info, expected_type=type_hints["gateway_info"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument sub_domains", value=sub_domains, expected_type=type_hints["sub_domains"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "environment_id": environment_id,
            }
            if alias is not None:
                self._values["alias"] = alias
            if gateway_info is not None:
                self._values["gateway_info"] = gateway_info
            if name is not None:
                self._values["name"] = name
            if sub_domains is not None:
                self._values["sub_domains"] = sub_domains

        @builtins.property
        def environment_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: environmentId: The ID if the environment.
            '''
            result = self._values.get("environment_id")
            assert result is not None, "Required property 'environment_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: alias: The alias of the environment.
            '''
            result = self._values.get("alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def gateway_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.GatewayInfoProperty"]]:
            '''
            :Property: gatewayInfo: The information of the gateway.
            '''
            result = self._values.get("gateway_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.GatewayInfoProperty"]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the environment.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sub_domains(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.SubDomainsProperty"]]]]:
            '''
            :Property: subDomains: Sub domains.
            '''
            result = self._values.get("sub_domains")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.SubDomainsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EnvironmentInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.GatewayInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"gateway_id": "gatewayId", "name": "name"},
    )
    class GatewayInfoProperty:
        def __init__(
            self,
            *,
            gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param gateway_id: 
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7a02c0beb2f9151de2cef06dc05bb6ff92799b7e88925f718ff1ff7e938c23b8)
                check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if gateway_id is not None:
                self._values["gateway_id"] = gateway_id
            if name is not None:
                self._values["name"] = name

        @builtins.property
        def gateway_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: gatewayId: The ID of the Gateway.
            '''
            result = self._values.get("gateway_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the Gateway.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GatewayInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.HeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "value": "value"},
    )
    class HeadersProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9c9d5a2436c86c0c26f5c0562ec1fc11e850c049b29883643a00591ea04dffb7)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the header.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The type of the header match rule.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.MatchProperty",
        jsii_struct_bases=[],
        name_mapping={
            "path": "path",
            "headers": "headers",
            "ignore_uri_case": "ignoreUriCase",
            "methods": "methods",
            "query_params": "queryParams",
        },
    )
    class MatchProperty:
        def __init__(
            self,
            *,
            path: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.PathProperty", typing.Dict[builtins.str, typing.Any]]],
            headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.HeadersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            ignore_uri_case: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            methods: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            query_params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRoute.QueryParamsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param path: 
            :param headers: 
            :param ignore_uri_case: 
            :param methods: 
            :param query_params: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__732927f71d11ab14c4267a1d0f95a36aae4ecaf79e6eb0ff52499aff470a8685)
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument headers", value=headers, expected_type=type_hints["headers"])
                check_type(argname="argument ignore_uri_case", value=ignore_uri_case, expected_type=type_hints["ignore_uri_case"])
                check_type(argname="argument methods", value=methods, expected_type=type_hints["methods"])
                check_type(argname="argument query_params", value=query_params, expected_type=type_hints["query_params"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "path": path,
            }
            if headers is not None:
                self._values["headers"] = headers
            if ignore_uri_case is not None:
                self._values["ignore_uri_case"] = ignore_uri_case
            if methods is not None:
                self._values["methods"] = methods
            if query_params is not None:
                self._values["query_params"] = query_params

        @builtins.property
        def path(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.PathProperty"]:
            '''
            :Property: path: path rule.
            '''
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.PathProperty"], result)

        @builtins.property
        def headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.HeadersProperty"]]]]:
            '''
            :Property: headers: Http request header matching rule list
            '''
            result = self._values.get("headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.HeadersProperty"]]]], result)

        @builtins.property
        def ignore_uri_case(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ignoreUriCase: Is the path case-insensitive.
            '''
            result = self._values.get("ignore_uri_case")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def methods(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: methods: Request method list.
            '''
            result = self._values.get("methods")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def query_params(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.QueryParamsProperty"]]]]:
            '''
            :Property: queryParams: List of query request parameter matching rules
            '''
            result = self._values.get("query_params")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRoute.QueryParamsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MatchProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.PathProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "value": "value"},
    )
    class PathProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c50cb976107fe938e479bf37e4d8843b7bdacacf4747d86f13035dcb880142bf)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
                "value": value,
            }

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: route match rule.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: path value.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PathProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.QueryParamsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "value": "value"},
    )
    class QueryParamsProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8418159cc4fe234244fca69c037e7406046059b7e422d980390c2f8b9088dc9b)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of query param.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: query param match rule.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of query param.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryParamsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.ServicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "port": "port",
            "protocol": "protocol",
            "service_id": "serviceId",
            "version": "version",
            "weight": "weight",
        },
    )
    class ServicesProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param port: 
            :param protocol: 
            :param service_id: 
            :param version: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a86fb621d0994fb4583a6d3fa469ed1afbe1ee78c13592e19ae8ffccb30ca180)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol
            if service_id is not None:
                self._values["service_id"] = service_id
            if version is not None:
                self._values["version"] = version
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the service.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port of the service.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: service protocol.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceId: The ID of the service.
            '''
            result = self._values.get("service_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the service.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of the traffic.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosRoute.SubDomainsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "domain_id": "domainId",
            "name": "name",
            "network_type": "networkType",
            "protocol": "protocol",
        },
    )
    class SubDomainsProperty:
        def __init__(
            self,
            *,
            domain_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param domain_id: 
            :param name: 
            :param network_type: 
            :param protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__abc6ecb07a65452a2fe845c2cb8f3e0bc041239ad7b05dd779b45b9dc388a761)
                check_type(argname="argument domain_id", value=domain_id, expected_type=type_hints["domain_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if domain_id is not None:
                self._values["domain_id"] = domain_id
            if name is not None:
                self._values["name"] = name
            if network_type is not None:
                self._values["network_type"] = network_type
            if protocol is not None:
                self._values["protocol"] = protocol

        @builtins.property
        def domain_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: domainId: The ID of the sub domain.
            '''
            result = self._values.get("domain_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the sub domain.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def network_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: networkType: The access type of the domain network.
            '''
            result = self._values.get("network_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The protocol of the sub domain.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubDomainsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosRouteProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend": "backend",
        "environment_info": "environmentInfo",
        "http_api_id": "httpApiId",
        "match": "match",
        "route_name": "routeName",
        "description": "description",
        "domain_ids": "domainIds",
        "domain_infos": "domainInfos",
    },
)
class RosRouteProps:
    def __init__(
        self,
        *,
        backend: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.BackendProperty, typing.Dict[builtins.str, typing.Any]]],
        environment_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.EnvironmentInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        match: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.MatchProperty, typing.Dict[builtins.str, typing.Any]]],
        route_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        domain_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.DomainInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosRoute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route

        :param backend: 
        :param environment_info: 
        :param http_api_id: 
        :param match: 
        :param route_name: 
        :param description: 
        :param domain_ids: 
        :param domain_infos: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b05ed596379a67b51aeea4e7b3213fd775339f815ff07b57b68b02c58d17abad)
            check_type(argname="argument backend", value=backend, expected_type=type_hints["backend"])
            check_type(argname="argument environment_info", value=environment_info, expected_type=type_hints["environment_info"])
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument match", value=match, expected_type=type_hints["match"])
            check_type(argname="argument route_name", value=route_name, expected_type=type_hints["route_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument domain_ids", value=domain_ids, expected_type=type_hints["domain_ids"])
            check_type(argname="argument domain_infos", value=domain_infos, expected_type=type_hints["domain_infos"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend": backend,
            "environment_info": environment_info,
            "http_api_id": http_api_id,
            "match": match,
            "route_name": route_name,
        }
        if description is not None:
            self._values["description"] = description
        if domain_ids is not None:
            self._values["domain_ids"] = domain_ids
        if domain_infos is not None:
            self._values["domain_infos"] = domain_infos

    @builtins.property
    def backend(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.BackendProperty]:
        '''
        :Property: backend: Backend service configuration for routing.
        '''
        result = self._values.get("backend")
        assert result is not None, "Required property 'backend' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.BackendProperty], result)

    @builtins.property
    def environment_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.EnvironmentInfoProperty]:
        '''
        :Property: environmentInfo: The information if the environment.
        '''
        result = self._values.get("environment_info")
        assert result is not None, "Required property 'environment_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.EnvironmentInfoProperty], result)

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: httpApiId: The ID of the API.
        '''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def match(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.MatchProperty]:
        '''
        :Property: match: The match rule of route resource.
        '''
        result = self._values.get("match")
        assert result is not None, "Required property 'match' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.MatchProperty], result)

    @builtins.property
    def route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeName: The name of the route.
        '''
        result = self._values.get("route_name")
        assert result is not None, "Required property 'route_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of route.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: domainIds: The list of domain name IDs.
        '''
        result = self._values.get("domain_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def domain_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.DomainInfosProperty]]]]:
        '''
        :Property: domainInfos: Domain items.
        '''
        result = self._values.get("domain_infos")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.DomainInfosProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.RosService",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::APIG::Service``, which is used to create a service.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Service`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d614ea8865a74960b5ad3948388339a3149a3eb30defa33398368265c4a36605)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4c614c8d699260738a39987091bc20eb32cd199b1e4463e4046b200343fa7cc2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Addresses: Service Address List.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAiServiceConfig")
    def attr_ai_service_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AiServiceConfig: AI service configuration when SourceType equals AI.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAiServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayId: The ID of the Cloud Native API Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: The service group name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace of the service:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Qualifier: The function version or alias.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQualifier"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceId: The ID of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3668686f928aca516fa6c6e2ed05a8c15dc14c81a78a8405775fc8ac6ec4ad41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Cloud Native API Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9360255e83a8ac1082458fde44cbc506b3167554a73db7ce2778d700fbe494e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="addresses")
    def addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: addresses: Service Address List.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "addresses"))

    @addresses.setter
    def addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69cd8e3d1c43b46f9f01771f73071010597894975a00dfcdd328bd94d03ec009)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addresses", value)

    @builtins.property
    @jsii.member(jsii_name="aiServiceConfig")
    def ai_service_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.AiServiceConfigProperty"]]:
        '''
        :Property: aiServiceConfig: AI service configuration when SourceType equals AI.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.AiServiceConfigProperty"]], jsii.get(self, "aiServiceConfig"))

    @ai_service_config.setter
    def ai_service_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.AiServiceConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd409f82516349031e30df36de145677a2f816554670ca41f3e6167e72c62a72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aiServiceConfig", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupName: The service group name.
        Required when SourceType is MSE_NACOS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c4f209995e21d140a88dd51d85330de82f726bbf0cfbeb057743cfb50c27f26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        namespace: The namespace of the service:

        - SourceType is K8S, indicating the namespace of the K8S service.
        When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
        When the SourceType is K8S and MSE_NACOS, it needs to be specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b129a0ae2f6a84f9cf8c5f6d50fb7ea7e0e85103be79a5d615e3a44970de972)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: The function version or alias.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f526af8e07d1480c2ae59c403ea27ca0355cbfd6548cd20a9c6a2edebf9e1fd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__8848de3fd33c88f9cbe65c898ab516416e15d7fd84cf62e6ee8d69f1b2e1c31e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a0674ce3ab06f3859551f11993e62fc10b642ff99a0070ba22150445b82417a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d276c97fe019e24745cb49a754171bd4d9fb31ebf99f8ae28a17ae30feb22082)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apig.RosService.AiServiceConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "address": "address",
            "api_keys": "apiKeys",
            "enable_health_check": "enableHealthCheck",
            "protocols": "protocols",
            "provider": "provider",
        },
    )
    class AiServiceConfigProperty:
        def __init__(
            self,
            *,
            address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            api_keys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            enable_health_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocols: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            provider: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param address: 
            :param api_keys: 
            :param enable_health_check: 
            :param protocols: 
            :param provider: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2c3d3034e1e6e46584c740f799ea5407ea14792fa6a72a17a8464d0b8b636fb1)
                check_type(argname="argument address", value=address, expected_type=type_hints["address"])
                check_type(argname="argument api_keys", value=api_keys, expected_type=type_hints["api_keys"])
                check_type(argname="argument enable_health_check", value=enable_health_check, expected_type=type_hints["enable_health_check"])
                check_type(argname="argument protocols", value=protocols, expected_type=type_hints["protocols"])
                check_type(argname="argument provider", value=provider, expected_type=type_hints["provider"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if address is not None:
                self._values["address"] = address
            if api_keys is not None:
                self._values["api_keys"] = api_keys
            if enable_health_check is not None:
                self._values["enable_health_check"] = enable_health_check
            if protocols is not None:
                self._values["protocols"] = protocols
            if provider is not None:
                self._values["provider"] = provider

        @builtins.property
        def address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: address: AI provider address.
            '''
            result = self._values.get("address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def api_keys(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: apiKeys: Api key list.
            '''
            result = self._values.get("api_keys")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def enable_health_check(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableHealthCheck: whether enable health check.
            '''
            result = self._values.get("enable_health_check")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocols(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: protocols: Model protocol list.
            '''
            result = self._values.get("protocols")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def provider(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: provider: AI model provider.
            '''
            result = self._values.get("provider")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AiServiceConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RosServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_id": "gatewayId",
        "addresses": "addresses",
        "ai_service_config": "aiServiceConfig",
        "group_name": "groupName",
        "namespace": "namespace",
        "qualifier": "qualifier",
        "resource_group_id": "resourceGroupId",
        "service_name": "serviceName",
        "source_type": "sourceType",
    },
)
class RosServiceProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ai_service_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.AiServiceConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service

        :param gateway_id: 
        :param addresses: 
        :param ai_service_config: 
        :param group_name: 
        :param namespace: 
        :param qualifier: 
        :param resource_group_id: 
        :param service_name: 
        :param source_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__106f971d315c21a3d16b83153aba2a9fdd00e90b590a755ed4fcf7eb52f24153)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument addresses", value=addresses, expected_type=type_hints["addresses"])
            check_type(argname="argument ai_service_config", value=ai_service_config, expected_type=type_hints["ai_service_config"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
        }
        if addresses is not None:
            self._values["addresses"] = addresses
        if ai_service_config is not None:
            self._values["ai_service_config"] = ai_service_config
        if group_name is not None:
            self._values["group_name"] = group_name
        if namespace is not None:
            self._values["namespace"] = namespace
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayId: The ID of the Cloud Native API Gateway.
        '''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: addresses: Service Address List.
        '''
        result = self._values.get("addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ai_service_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.AiServiceConfigProperty]]:
        '''
        :Property: aiServiceConfig: AI service configuration when SourceType equals AI.
        '''
        result = self._values.get("ai_service_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.AiServiceConfigProperty]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupName: The service group name.
        Required when SourceType is MSE_NACOS.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        namespace: The namespace of the service:

        - SourceType is K8S, indicating the namespace of the K8S service.
        When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
        When the SourceType is K8S and MSE_NACOS, it needs to be specified.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: The function version or alias.
        '''
        result = self._values.get("qualifier")
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
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRoute)
class Route(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Route",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Route``, which is used to create a route for an HTTP API.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRoute``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RouteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bfb29d5255e6544ebafe6c5d70d06e007a0ccc1557d80d48505a8ed0be0ebde)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackend")
    def attr_backend(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Backend: Backend services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackend"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainInfos")
    def attr_domain_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainInfos: Domain items.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentInfo")
    def attr_environment_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentInfo: Environment information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrMatch")
    def attr_match(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Match: The match rule of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMatch"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of route resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteName")
    def attr_route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteName: The name of the route.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RouteProps":
        return typing.cast("RouteProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a66c564386f0c1cbdf7c7b973a216e3ef723b3980fc012dead07ad593306b43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55fd62d0ab65891e52e3b0d3352e386a2bddb27679bd44de97960a276b98080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdbba777f20f40d4980145605de56270e2e7956b827475555b4f348e1c18ab43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.RouteProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend": "backend",
        "environment_info": "environmentInfo",
        "http_api_id": "httpApiId",
        "match": "match",
        "route_name": "routeName",
        "description": "description",
        "domain_ids": "domainIds",
        "domain_infos": "domainInfos",
    },
)
class RouteProps:
    def __init__(
        self,
        *,
        backend: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.BackendProperty, typing.Dict[builtins.str, typing.Any]]],
        environment_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.EnvironmentInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        match: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.MatchProperty, typing.Dict[builtins.str, typing.Any]]],
        route_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        domain_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.DomainInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``Route``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route

        :param backend: Property backend: Backend service configuration for routing.
        :param environment_info: Property environmentInfo: The information if the environment.
        :param http_api_id: Property httpApiId: The ID of the API.
        :param match: Property match: The match rule of route resource.
        :param route_name: Property routeName: The name of the route.
        :param description: Property description: The description of route.
        :param domain_ids: Property domainIds: The list of domain name IDs.
        :param domain_infos: Property domainInfos: Domain items.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f02e4c1b9dd5724def99779391f7d39ee0eb2d6bcd881b4ca3114ae8c2b4cc6)
            check_type(argname="argument backend", value=backend, expected_type=type_hints["backend"])
            check_type(argname="argument environment_info", value=environment_info, expected_type=type_hints["environment_info"])
            check_type(argname="argument http_api_id", value=http_api_id, expected_type=type_hints["http_api_id"])
            check_type(argname="argument match", value=match, expected_type=type_hints["match"])
            check_type(argname="argument route_name", value=route_name, expected_type=type_hints["route_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument domain_ids", value=domain_ids, expected_type=type_hints["domain_ids"])
            check_type(argname="argument domain_infos", value=domain_infos, expected_type=type_hints["domain_infos"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend": backend,
            "environment_info": environment_info,
            "http_api_id": http_api_id,
            "match": match,
            "route_name": route_name,
        }
        if description is not None:
            self._values["description"] = description
        if domain_ids is not None:
            self._values["domain_ids"] = domain_ids
        if domain_infos is not None:
            self._values["domain_infos"] = domain_infos

    @builtins.property
    def backend(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.BackendProperty]:
        '''Property backend: Backend service configuration for routing.'''
        result = self._values.get("backend")
        assert result is not None, "Required property 'backend' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.BackendProperty], result)

    @builtins.property
    def environment_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.EnvironmentInfoProperty]:
        '''Property environmentInfo: The information if the environment.'''
        result = self._values.get("environment_info")
        assert result is not None, "Required property 'environment_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.EnvironmentInfoProperty], result)

    @builtins.property
    def http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property httpApiId: The ID of the API.'''
        result = self._values.get("http_api_id")
        assert result is not None, "Required property 'http_api_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def match(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.MatchProperty]:
        '''Property match: The match rule of route resource.'''
        result = self._values.get("match")
        assert result is not None, "Required property 'match' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.MatchProperty], result)

    @builtins.property
    def route_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property routeName: The name of the route.'''
        result = self._values.get("route_name")
        assert result is not None, "Required property 'route_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of route.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property domainIds: The list of domain name IDs.'''
        result = self._values.get("domain_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def domain_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.DomainInfosProperty]]]]:
        '''Property domainInfos: Domain items.'''
        result = self._values.get("domain_infos")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.DomainInfosProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IService)
class Service(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Service",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Service``, which is used to create a service.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosService``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0696947414a622f87900dfb6001c18e2ef8bc6b326ec6ee3dbe0a9ccf3af4d48)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Addresses: Service Address List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAiServiceConfig")
    def attr_ai_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AiServiceConfig: AI service configuration when SourceType equals AI.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAiServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Cloud Native API Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The service group name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Qualifier: The function version or alias.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrQualifier"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cc886a6daa17c450887fbf395e92abba84294c550f697a88205cd6021f1dace)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4b612e88dfc8381fa07985dc8d4c558332de64cf6de5ae71730a2b1b3ad58b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b554f5e78b0cc2990719aff6affea75d9a71ec4fc7f26eb340d5d2862cb2b06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apig.ServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_id": "gatewayId",
        "addresses": "addresses",
        "ai_service_config": "aiServiceConfig",
        "group_name": "groupName",
        "namespace": "namespace",
        "qualifier": "qualifier",
        "resource_group_id": "resourceGroupId",
        "service_name": "serviceName",
        "source_type": "sourceType",
    },
)
class ServiceProps:
    def __init__(
        self,
        *,
        gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ai_service_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.AiServiceConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Service``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service

        :param gateway_id: Property gatewayId: The ID of the Cloud Native API Gateway.
        :param addresses: Property addresses: Service Address List.
        :param ai_service_config: Property aiServiceConfig: AI service configuration when SourceType equals AI.
        :param group_name: Property groupName: The service group name. Required when SourceType is MSE_NACOS.
        :param namespace: Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service. When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos. When the SourceType is K8S and MSE_NACOS, it needs to be specified.
        :param qualifier: Property qualifier: The function version or alias.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param service_name: Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
        :param source_type: Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__074af3dfcdb79659c886325ac092d35d6e2b94b115e584ac081b3054cbe94368)
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument addresses", value=addresses, expected_type=type_hints["addresses"])
            check_type(argname="argument ai_service_config", value=ai_service_config, expected_type=type_hints["ai_service_config"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_id": gateway_id,
        }
        if addresses is not None:
            self._values["addresses"] = addresses
        if ai_service_config is not None:
            self._values["ai_service_config"] = ai_service_config
        if group_name is not None:
            self._values["group_name"] = group_name
        if namespace is not None:
            self._values["namespace"] = namespace
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayId: The ID of the Cloud Native API Gateway.'''
        result = self._values.get("gateway_id")
        assert result is not None, "Required property 'gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property addresses: Service Address List.'''
        result = self._values.get("addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ai_service_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.AiServiceConfigProperty]]:
        '''Property aiServiceConfig: AI service configuration when SourceType equals AI.'''
        result = self._values.get("ai_service_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.AiServiceConfigProperty]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: The service group name.

        Required when SourceType is MSE_NACOS.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.

        When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
        When the SourceType is K8S and MSE_NACOS, it needs to be specified.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qualifier: The function version or alias.'''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.'''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.'''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApiAttachment)
class ApiAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.ApiAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::ApiAttachment``, which is used to attach an API.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApiAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ApiAttachmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8e8af0172e44bb350cff18aaee469f45b94b3121cbaf6b6c36fabdcb7feff43)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment to which the API is to deploy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the HTTP API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The route ID.

        When publishing an HTTP API route, it must be passed in.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiAttachmentProps:
        return typing.cast(ApiAttachmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f12d101a5c99d2dc5906214f248d4c1476100717cef03f81e2af2ffeaf881d71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43dcadc3c3507f991ab3b43a4f9f928ed558c3c5c035a4eb010caa91cdf0a36f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42520afd2366497a2b02f6f7642db85d25f0f69df158a9fe744c9db694968dfb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomain)
class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Domain``, which is used to create a domain name.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91e15808083b3b30113fb465c9e1fde85cb9f5e189ad928df2f8f1a23a8d6c83)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCertIdentifier")
    def attr_cert_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertIdentifier: The tls Certificate identification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the Domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the Domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrForceHttps")
    def attr_force_https(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrForceHttps"))

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Option")
    def attr_http2_option(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Http2Option: Whether to enable http2 settings.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttp2Option"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocol")
    def attr_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocol: The types of protocols.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsCipherSuitesConfig")
    def attr_tls_cipher_suites_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsCipherSuitesConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMax")
    def attr_tls_max(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMax: The maximum version of the TLS protocol.

        The maximum version of the TLS protocol is 1.3.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsMax"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsMin")
    def attr_tls_min(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsMin: The minimum version of the TLS protocol.

        The minimum version of the TLS protocol is 1.0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsMin"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac9a639091d4393f583e2430487c9b05bacec8ef8a434694d08dfc9d9b3ccf51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__856a460d8d907c2055d3960ca8e6057b6c40a8185b9416b072fbf01707b28d6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4862fd3139a97a04183301cc6a3926111aa6978937bb1a6ba4a622d0fd44a0cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvironment)
class Environment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Environment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Environment``, which is used to create an environment.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvironment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvironmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85f478b53b2c3330a9ea5039f861b13ac4d32f9caabd10f9ba66edcfde6aa660)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        return typing.cast(EnvironmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab49020570192757da017c37ae23c843687dce469176276c1f3947b6113ae2ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b6b56ba85dc3166a92cb5e67d52fe3e19dfabaea37f423b18aa9dcbbb75c508)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce499db47b7578ec7008fa804b7e2eba06d72be03bc2f4911119b24756b41de7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGateway)
class Gateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.Gateway",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::Gateway``, which is used to create a Cloud-native API Gateway instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee5ab66d76fe615cb42d1db59a59dcc59d4cc1bc0f72dc7a018634a6c9d10723)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: The list of environments associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: Package year and package month expiration timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayId")
    def attr_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayId: The ID of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayName")
    def attr_gateway_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of Gateway ingress addresses.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancers"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroup")
    def attr_security_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroup: The Security Group of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway instance specifications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update the timestamp.

        Unit: milliseconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Version: The gateway version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrVpc")
    def attr_vpc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vpc: The VPC associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpc"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitch")
    def attr_v_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitch: The virtual switch associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The List of zones associated with the Gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZones"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ac1428c0e0d4f9882b2bedc59eacc7fa744590382761e1a7ae415dd6c56a0d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cfacc8e7e21bcf0c9b843aec1acf33dc12f9e7fdb532a732869558f3692ec1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f052c37fcdc031362732340d7e77c2f8ac34d36f03a9e45af9a08da2b61f27c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHttpApi)
class HttpApi(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apig.HttpApi",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::APIG::HttpApi``, which is used to create an HTTP API.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHttpApi``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HttpApiProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e4e72952e9a5e7272127594aec7429d991589d993349cc62a0a697ab9af841e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBasePath")
    def attr_base_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BasePath: The base path of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBasePath"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironments")
    def attr_environments(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Environments: Published Environmental Information of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironments"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiId")
    def attr_http_api_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiId: The ID of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiId"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiName")
    def attr_http_api_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiName: The name of the API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiName"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocols")
    def attr_protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Protocols: List of API Access Protocols.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocols"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of HTTP API.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpApiProps:
        return typing.cast(HttpApiProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a15c1084f3726ea595dcea91c96335871cd875b121c7b9f9404a9db0311550f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75114941e745fac957a4bc797d13315d12ad4690aa3607967a966b03256f7629)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81a57bcbfdb949f7a23e09a10faeaed873e6de066919a3473e470bc594e0f880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ApiAttachment",
    "ApiAttachmentProps",
    "Domain",
    "DomainProps",
    "Environment",
    "EnvironmentProps",
    "Gateway",
    "GatewayProps",
    "HttpApi",
    "HttpApiProps",
    "IApiAttachment",
    "IDomain",
    "IEnvironment",
    "IGateway",
    "IHttpApi",
    "IOperation",
    "IPlugin",
    "IPluginAttachment",
    "IPluginClass",
    "IPolicy",
    "IRoute",
    "IService",
    "Operation",
    "OperationProps",
    "Plugin",
    "PluginAttachment",
    "PluginAttachmentProps",
    "PluginClass",
    "PluginClassProps",
    "PluginProps",
    "Policy",
    "PolicyProps",
    "RosApiAttachment",
    "RosApiAttachmentProps",
    "RosDomain",
    "RosDomainProps",
    "RosEnvironment",
    "RosEnvironmentProps",
    "RosGateway",
    "RosGatewayProps",
    "RosHttpApi",
    "RosHttpApiProps",
    "RosOperation",
    "RosOperationProps",
    "RosPlugin",
    "RosPluginAttachment",
    "RosPluginAttachmentProps",
    "RosPluginClass",
    "RosPluginClassProps",
    "RosPluginProps",
    "RosPolicy",
    "RosPolicyProps",
    "RosRoute",
    "RosRouteProps",
    "RosService",
    "RosServiceProps",
    "Route",
    "RouteProps",
    "Service",
    "ServiceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__fb9bd6f2781bd10b668efe887f0a2d66f6977aae7951f246e18a9777106092ca(
    *,
    backend_scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiAttachment.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    route_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e8fcb23a67f9a9ce4c6f0332e01832f9d4de7439189bdec1817a609bf17324(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    force_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suites_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.TlsCipherSuitesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24c7c21dbc16c6bd4115025322b77b5d19937f641cf8296f9a1208025e488966(
    *,
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52ee80e019724b7c96f59c540ee8c629e016007f905c66f8656311100b050ae7(
    *,
    gateway_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_access_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.NetworkAccessConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.ZoneConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    gateway_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosGateway.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VSwitchProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f579af269bae3454bd150e6c98a3621e2983ff60243d3145c565e67827461d6e(
    *,
    http_api_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocols: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    base_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65ba64f892745208f89a9f4c267048a2da4e996358d7d94cde667430bc6a8f7f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OperationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6407eed09e7f8ceac4cbd9924c92d473b11106a69b8289242473101bd3edaaeb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f6929e6a44ba91cbb95ea1e23fedaacf4d07b98565538f038238cddc0cabaa7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4ffcb94d1dc08d7d1a17146e8b7e753287633439b728eb8775b140a76d3dfc0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d3da9470a25e192507f4025bc558945fa820f2456ff7a455e181b9b455f58b3(
    *,
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    operation_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mock: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOperation.MockProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3111c1f952945e50cb291832e6d7ff35f6614fb83d636a6cbd5c5257b590d3d5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PluginProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c459c69d8c4942f2c96ccde2dd34edb0d042025c170d6f1a4d316813966a3ff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03608738571a558526e6d2453630f3fd918dde0871caf47ffcc09a93f53b45b3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a43ef77b90142f6b046a07b48585ed1b63191602ec7c94f62075e10b78bac015(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__167cce770c82e5d4d6d53326247c575772945b2b4351d242ae8794459ea7d044(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PluginAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2aaee2141aa8c401601f34d6fbdb35b49f24b60023ea60737c33c91d0839784(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7aa43246e2c1d98f69498ac7280b594f0357b57d92c15c57685077d5e8285cb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2af61f9a0d5c171ffb0fe0a04c68475893bb9a07ed9753f62edc3949c894266f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5912601dcb20c111dddedc6490177ba1cc88e071ce8fed120762c36c01d57f03(
    *,
    plugin_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPluginAttachment.PluginInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    attach_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    attach_resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    attach_resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93f75da9159acdde107c996fa043c8bf01788d0d9fd90e9ffca46ab78727d2a0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PluginClassProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35a6cd3bc8839e41b6c5688f13c3318ce444db929b29633bb38f9fb732ed571c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__598ab4dd7a207b1b65a35586ac730a935e959d69c44e28836673dc504c415957(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e94ab6947730871409964b5237ffa4c54db970f06e51784807653135258d577c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__723a1fed524db2b6884ac8d0b6693878d7db9adccbf86b6ff8143a07d4e8c3ae(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    execute_priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    execute_stage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    wasm_language: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    wasm_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    supported_min_gateway_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b7454cc0ff31fe4fc5bd1fc1d343cf1fd11a6896c3318801e33d07c914bc450(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_class_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05beaf264b8064e66321f45fd41080006d94f47ec3e34f92a48614be65b4a12b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b16912f7059f215cf450bcbd21d2623c87e2d0089c951f428349a78b08ffb642(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__875bd2f0eb7cc4ea9fd709a5673d799503792af5d73ae94eb699fdb312f6f10d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc2a3fa4d1fca4b98643836e5fe45134aacf7f260484bcd8daf70961292a7a3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5b0ca324e2295b00cbf61dead8f459a9fce3381616dfb353c48ff0cd18bcad6(
    *,
    attach_resource_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    attach_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_config: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ffbc5c64486525995c7378a8f24c7b2c2049537b76ebeb14283647f12fa2a58(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApiAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cacf93512bfc9881636169c3927a65830907cf11b6d74f03b46686620ac01d47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e3e4b30467bf3ccb84a7d195302b91e78458c3372e62f5a5e3e163a08041c46(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__095f6fe4c51be20b4fe063dded6af7aff04595d28dd93fb193ba9af2fcb9c655(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c71f186839072420d967bf75e29e0188d173121a674344252ac6b9403bdf7f6c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3ecc937b5e916bbf4b606dda7c712f21450587e5acd1825a1f94717d02c75bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27e98f199a1cdbfe82070127e7c6a442300145fc58a88cb07a5cf9cce39b83aa(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiAttachment.ServiceConfigsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__331b9a9b7054a549790108ae52bd573df92480ad050b252b94de137576978405(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30d3e0d9585fa1b973ca5337cbb3e9cc12709725d2e485a885b254d7014c4481(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7a7bc1230f7ba1733660bc6e60f051d49dc89c53218a7f439cbf528dca1c8d2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec082a7072a7185f7c1865e55e76ca791235ac78a3f0baa19dbe6a97aeec640d(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b589615d134a12094f749c2275c6facf87a97b39d831cc2ea1485af16db362e6(
    *,
    conditions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiAttachment.ConditionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    default_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11aa7126592888f88f8db22617548fba4d8ca340b0ed2180add5f3625740782f(
    *,
    service_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    match: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiAttachment.MatchProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b65968c4861492d356fb28ec68d9c7b04da7a370b640671e5bdfd2ca4bf0797(
    *,
    backend_scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiAttachment.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    route_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08b013f3ce1d637e5e8758bfd5ec9603ce7436a0aa19a63451be0ffb26c38d58(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a75ba3e295524f6f5d4ea2a5cea902737eaa38a1332daeaa2f69904012b7ac05(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0ad01a0634fda8fd281185bd90c861a39c2bcbd4f75e4aefde3fbd5c2fcbaed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7e46baa0df592b503345b80618188ade999f8227aceb03018cc8fd891937f11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a07af0105bb0e918340ad28c4bb9ae7e74a6466f9faa21e7d3e741793d66054(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c17e596118d6fbf41581fab3a7273df7d36790952fb4a3ee3cb18755b58783b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__816629bf7d96cc5d4fbb60bcea9c382d53caee0195de263ccc2dd6863f3353bd(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a243bb89fbdd14ad9a7045bed527e91f4a193e9f3adb78e6f8f887284617267(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfff4f5765c0d7a1c80375a23ff485a5d40daccaa7439bd7201c9a18dc7cd238(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d3148119ee66625c38e79059d03768ee79a4813ff27c78a13c141e054aa2b64(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.TlsCipherSuitesConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee402391fa56aae46a71ac76536527bcbf509361d13825fcdc9ccf25fd26cbbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b96f8fb91621ec8e51e3903c53b2fee87671744d87a605f04e223a60248421b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02f80957c2225cdb65f33993e9e89b3a26d93f1e8b64550707cf0c0ba2edc4bf(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9730ce080b130fbb4eb396adea0f1d3080f790a9b5d29a4c70296057eda34c9(
    *,
    config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suite: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.TlsCipherSuiteProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__040071d0c81175e54dec6ce0e525f0dc0b5d9df00a9f4e8f2224924491ed2c98(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    force_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suites_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.TlsCipherSuitesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe7427480443c2e6b7b634ddd64c61936df75e6856359f81051af69e71f259f7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36d679bdf38f935c1ffb332dfe7feead165df8bcb3984826e225dc26c6ffa890(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05813718cb2636a60af1410f420d14df29e26fa3046c801a4cce3a2f6d4f1fbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d09defad39bf7b51033ba997fa0bdaf498a8f5f6836d32e78ef17ee58189076(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e399912d5cc9fe3d80858adf3f0c26e77a7af2e262da336684f10ea3ae1db07(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e69b26e1001ae29119ff1d93d931a8d3d13f9f42047fd8b9d56ad01fb8ee8ef9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8aea5610897b270fabef808bea7469f732f3ad1884d6f21fbe83d172d2d2c9f(
    *,
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc5a05710b8fb2b5096c996bbbfd599cf80d513c0d09cc49c046492181be3882(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc33a7bfe19a7de753c0e9c622f43ada1a73508582a0af7cd44d0d897f10f0ff(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2d323c336b9fb13288325f010a83f0d3da2b8c7632b2a1e907a3af1fa69cc90(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c22487eb264b229aebe0eb7e57cba763cd8e190f185678a0e18ae35c2fda09bd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__423d1b01a6ca80017ccf2a9e7d6d93adf82c4f9db474a9847b02104b276ee403(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.NetworkAccessConfigProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b3dd2f1f6ad10750aa7617eec0400cc915dba35d63958c2d54792a8a68c88ac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fafa9560982a0372d7f90d8bfd9da760a3b95fe87e8903ecf687c68d039f030(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2ee15e9047032c7a8bede54687d5446e8f9b62a33135fd22f807591984b7901(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.ZoneConfigProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efbbb87ff5b400d2658369f2d77dc070a867082ddd8cd5c885117adafcb48e67(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a16c92df09e8a2d7464ca823b3f05ea9b6ad8d3bb21c710f8f79d43f03f1a551(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.LogConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__172cd7fc23afd9a4b3129027461fa1ef5904bb148b23a39232e45502bda2eb2d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be3173a616dce2817636c1d4e4171ac8867ebacaaf070de1db9fba70a762391e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3edb682bd8899416dcf2222d46ce8fcf516a4140dfd196fbee3b1e58d955514(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f651088a6ac05ba3d3b30dd621218a001275d1cb78336ae7995565ff7cb1c99f(
    value: typing.Optional[typing.List[RosGateway.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3b6fa7921946aefef71b5c666e2b064b6cf6dfabc8eaa4488a7224c37ca8296(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VpcProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73398f092f6890eb5a7b7948e68a09404a4e598916c3cb8ef6a545690d95e2d3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway.VSwitchProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf749b092ff53d691dcb8c6856ac0d117db4921224cf03a4417197d862fbc1c(
    *,
    sls: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.SlsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4d905edc6436ca7bca928ea600d81e15383f35255c0f6bbbfc95a8eb64aa377(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96d0ca13151afaba6072b4c43c5e2a66a82425e253913fd9c8981d684cbcaeff(
    *,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67bca6929ebe62215af7bdf902f33f0bca9d1438ba192b9afa3b2593ccab3897(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83ec494b14c3372b2821df17269facdf474d47c145f13629976a12d4e5690e55(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce9a1e925a5939843ca463b93f66f1910b324de4c24257cb28e6754408175709(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f644cce3b512c5cbd8af6105e74cece9ec931bda3860dbf44b111c45993b913(
    *,
    select_option: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4fe9af7cdeb170ce3189cd965ead95ecf58e59ac1f373c1a0d934203fba4409(
    *,
    gateway_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_access_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.NetworkAccessConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.ZoneConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    gateway_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosGateway.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway.VSwitchProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87d87aef625c7691c67f2413549c49c6c7f9cd18fb8b994df1b03fc964470753(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHttpApiProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbdc5ab4ea0dcfeaf9ba2fdf25295ba2a38bc1967d485f9898754a67c36c3117(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fc9cfe480f248f3830ef15327268e258678b2b361c37e58d44503950e1b4ade(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce775090644dee4b5e02d38cf6b95d5a9519eeeafcc6ac6370dd54286ca37855(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43e027a1c5d3d512caad90a7aa2aa167d3268b766c21afd44ea26e9981825e1b(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5cab230b2a25c38b37545d9fee4f9de42ba651a80ed6f9eb311490187e83cda(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51cc238b0b4a15cadcc08b7eaad20e4d95d8d2852b3ab273b1454bf8f4e5c507(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba51a07e4afec3c1346f22e07c0e7439a298efef49a119121c128391e5c5fccc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__635085336d824a84111a13763a2e62d2013961e686813db68a6d157ab4f9a2b1(
    *,
    http_api_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocols: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    base_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8b11089d735a102a20ec8db2a3cd17aea1c8d8d5536cd1536ac9b41b141c7f1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOperationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af4dd9f2d2c2d1df0893643194a09065443f62d5c1995952a5e30669b4ae5367(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e3b4c3c31fc9b815f3d4bb4a9c1b062b96b6ca37d618fc9d01a7382c014e480(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__168711987e9d2f846c0e159721b134f5477196c20dab0e38b7d5078a6972ba0f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b3748b78367ca99214dab2454a520279585834e5bef222c795f765524a3b554(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cf21e739162ee0f7fc0f3a271b761e883367737f16c667722830337b761c1a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7439b4035cbf63a46811a894978c0aa210f3ad14ba9d9dc66e11da88d60e3f99(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4be5d048a98e15624f909a3982bd933688709b6c8787908dd3ef5f345c215683(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d52028fba2ffec946e8e52004190d4e8a4d34c02f3e5cacf847c7382cba96a1c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOperation.MockProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ba55d8854260962c3e330320606985f4cb75f19965fccb6849d7ff7378ae311(
    *,
    response_code: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    response_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f8952812e3c34095cb4abf8fcff6f12735073fcb65d910b415f56a65ad1290d(
    *,
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    operation_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mock: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOperation.MockProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f95148ffabfeb7a235f4de659a1d2af249655c7c4bac5ca25d910de022a52dee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPluginProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d08d043f79687a6dd03142a65b5b42ae59dd6c141c73c7e86d1330f3e77ae52(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a0fd3f781e85082c286ef819ce2f65dc4d20842c2373131a90382efa7d3a6c7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__906bc7b5b8c33eea78bc7af6ec41a29be8cb3679a2514549307b01d57c0fd569(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ad8d70d8131eec829b18c5543cb83644e3060f33e72d1e76dcf8f795281759a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b094bf3c9ca06ff46d2755197d5279df5dcc9d4742c369de17e986d6ddac771(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPluginAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0725f68cc354cd292a87abfe265606008756af550854568cd88170b0b6dc75ab(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1243c2e6f84e3bd9d015eaaa734260b122d464109eb4ab17e3843a290b09959b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfbb440d6ea8d97d3ec7a34d6f8eadebd69fe185d78739a95129646dfb617914(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPluginAttachment.PluginInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a22fba6ae36b3987094d6c1705859e315386f0ffba18229c727058e11cde26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62cdb963f90d413dc928304b24d4a4bdac4e67b2d8cafb483c4263138be3acbc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7854356b074553ca9b60cc96600987b4d7c29478688700899a464c34bae92f88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b0e9f730dbe32fb70c925aaa7830feea36fc92dd2d7e0856fe1b4adfa2611f0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b729bfabb98f33be35443f889b37314144f6405ed0e8cfe9f26e01218122634(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b80e3bbc99391323a6c5c892b4f27e844ccefe4fd8143e6e20eb70d3e2bc5fa9(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f6ed9fc77467cec461091f283aafa23c7cae167e62588e63cb2643bdd2a366b(
    *,
    plugin_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPluginAttachment.PluginInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    attach_resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    attach_resource_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    attach_resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4583a1246f40c44891e9de992aaf54cc54cd3e988ec5c83645330f6e6081317f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPluginClassProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbbe2950c132a3e0dc64949a01abe51acb3ae6c1a372ceb9da9beba8cba6e346(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c74235db0e26eea06f4d6d3efab7f6f1e4e894fd78a9ebf8436b49f7d081fc6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8499bbe4225404335d9f86a2472672ac00be6c60b10c5edd26ea78b6137af34c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__641951739f11d9555d1e79aa318c0a51ef7160eb9e2bee090a16a01dde7b92da(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfff5a34e924f269c1c0a1cebc1f4cf509d6160a71d774845dfc8bb4a6154bbd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c43df0a2bf41ed04c13c1c3dcb47f93cbdd0077247e52e0a8daac3770a2b11cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf7c4c995889e308740832f9c50622101412b1af215811757a80e4e61938f75f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f05b5885680e84a5c8a89b9ce89e380a47d431d0cbb3574a5f57c53e7c43853(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ba9a1f1fa5593b0e66b47ac26b7d384bf1ca1cb647dfb4521651b5cf2055806(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d26a88f1d10ecae1baa37be78eb935c5d77cf1b6636774b9f914709acd63230(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__570f0874f45e3e74792115382c1052481e9f4f316d9a2d9bb8fd2d40405a03e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a756f2eb41237c3a539c895b9a868711434ec928cbb33dea30977dc9a1bfadbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4c4a3ece66ca49c07d11584f4d830e9dd628dcbd595925aa7123e934f614475(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    execute_priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    execute_stage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    wasm_language: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    wasm_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    supported_min_gateway_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__422afe18bdfb736a77732c3ad7d526f12ec5c15f3b61b53aa2ee60dee28b6056(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_class_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a8ce9c54e18197708535b20a705a4cf0718dd37fc6ee650e01785f06e23b17b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c406beb411057b81b7b8a94be28f0e8dd3469ca70603828bdf572f274af0d8c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b59576ecad419a8aeb940d5bd6e45d96f3b79b385fe957027e8f93d165f91b7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dea939f06234541a10a64a092e2fc54705e56234e390e3001188ce1d930be62(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d44de687ace0ffbe115238c79c5f2b9d9bbe729181c4a3923a61dcf6b3a97dbe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__252db070a59c21bb3884e497239e8e8d621bd17e5fd58dda64793fd98fde8e30(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42dfc7a405d68d7ded78eef0359dc24a67412ad6d78c5ef71df2c816a206dd47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5026d21dfd6b30616124cc3f7e5aa27c6f8d7d83ab6c3dc7b24df8b39a2a4f8c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e8d2ebefa976bf34c0b1967bae804a673ab9c15b7086ea5fffff89811334af6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa1bb4258621fcd5cf322cdea6ffba9e611e7e7840511708970d34f9b60f6c3e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74615ae4b84715f138848ef8e0258ba547ab27eb652cff53661fb83e5263b948(
    *,
    attach_resource_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    attach_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_class_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_config: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee669099b46d9829186fa9c46c97d3de3f6a1674d3a9464969b922fb688ad306(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRouteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e01d9fb969138a50576aaae9ad36e7642ee772b1d56346ee08c388d625c6d7b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d929954e9eaa6215a5c4299658d95410c8d78ecae6155f6e1aa480469b1f31f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.BackendProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d3744294b2e3f4ff5da1126bf930ac4de857bf982fc62da643f98e13fe18427(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bbaa6b594a1cf59956c6135ddc73bc0169efb70d8476ceb388f717f5be60f92(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.EnvironmentInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf6f3f2813dfe08613082cb2dbb7d836d37bd2518f5cf3f215243e103c35fa69(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a0e27479ad55376f98d0785299c65e8510518e45166a88bb7dccf18eb56f615(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.MatchProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b541f895026732e483ef4b19b511b29cca0ac78f6c2e30ac079e245659e64a3b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b07c3556b77d1163fc818bd4b25c27be14e43ad828768db0fd2390b4fca29795(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__488d4ff11fba38f7c9c9b1a30b71b915a0cf08ac499f7342cebda1ab37d2cdd2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a613fcd2d9c620351698665f282658e8c8af2b030dc52c641a9f85e05607213(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRoute.DomainInfosProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df5f60a9eb00c546587acff95368856423657cb36ec785c841c9dabcadc6b4ad(
    *,
    scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    services: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.ServicesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b073a718641d732c8ab299410e38c99c40f65296d739703d047e5b5b4514b373(
    *,
    domain_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f214a699df8492a52a860439a7fecfe42b67727e3f0f5713e93afc5df2e98f0(
    *,
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.GatewayInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.SubDomainsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a02c0beb2f9151de2cef06dc05bb6ff92799b7e88925f718ff1ff7e938c23b8(
    *,
    gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c9d5a2436c86c0c26f5c0562ec1fc11e850c049b29883643a00591ea04dffb7(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__732927f71d11ab14c4267a1d0f95a36aae4ecaf79e6eb0ff52499aff470a8685(
    *,
    path: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.PathProperty, typing.Dict[builtins.str, typing.Any]]],
    headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.HeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ignore_uri_case: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    methods: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    query_params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.QueryParamsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c50cb976107fe938e479bf37e4d8843b7bdacacf4747d86f13035dcb880142bf(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8418159cc4fe234244fca69c037e7406046059b7e422d980390c2f8b9088dc9b(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a86fb621d0994fb4583a6d3fa469ed1afbe1ee78c13592e19ae8ffccb30ca180(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abc6ecb07a65452a2fe845c2cb8f3e0bc041239ad7b05dd779b45b9dc388a761(
    *,
    domain_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b05ed596379a67b51aeea4e7b3213fd775339f815ff07b57b68b02c58d17abad(
    *,
    backend: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.BackendProperty, typing.Dict[builtins.str, typing.Any]]],
    environment_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.EnvironmentInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    match: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.MatchProperty, typing.Dict[builtins.str, typing.Any]]],
    route_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    domain_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.DomainInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d614ea8865a74960b5ad3948388339a3149a3eb30defa33398368265c4a36605(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c614c8d699260738a39987091bc20eb32cd199b1e4463e4046b200343fa7cc2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3668686f928aca516fa6c6e2ed05a8c15dc14c81a78a8405775fc8ac6ec4ad41(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9360255e83a8ac1082458fde44cbc506b3167554a73db7ce2778d700fbe494e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69cd8e3d1c43b46f9f01771f73071010597894975a00dfcdd328bd94d03ec009(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd409f82516349031e30df36de145677a2f816554670ca41f3e6167e72c62a72(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.AiServiceConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c4f209995e21d140a88dd51d85330de82f726bbf0cfbeb057743cfb50c27f26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b129a0ae2f6a84f9cf8c5f6d50fb7ea7e0e85103be79a5d615e3a44970de972(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f526af8e07d1480c2ae59c403ea27ca0355cbfd6548cd20a9c6a2edebf9e1fd1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8848de3fd33c88f9cbe65c898ab516416e15d7fd84cf62e6ee8d69f1b2e1c31e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a0674ce3ab06f3859551f11993e62fc10b642ff99a0070ba22150445b82417a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d276c97fe019e24745cb49a754171bd4d9fb31ebf99f8ae28a17ae30feb22082(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c3d3034e1e6e46584c740f799ea5407ea14792fa6a72a17a8464d0b8b636fb1(
    *,
    address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_keys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    enable_health_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocols: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    provider: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__106f971d315c21a3d16b83153aba2a9fdd00e90b590a755ed4fcf7eb52f24153(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ai_service_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.AiServiceConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bfb29d5255e6544ebafe6c5d70d06e007a0ccc1557d80d48505a8ed0be0ebde(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RouteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a66c564386f0c1cbdf7c7b973a216e3ef723b3980fc012dead07ad593306b43(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e55fd62d0ab65891e52e3b0d3352e386a2bddb27679bd44de97960a276b98080(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdbba777f20f40d4980145605de56270e2e7956b827475555b4f348e1c18ab43(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f02e4c1b9dd5724def99779391f7d39ee0eb2d6bcd881b4ca3114ae8c2b4cc6(
    *,
    backend: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.BackendProperty, typing.Dict[builtins.str, typing.Any]]],
    environment_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.EnvironmentInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    http_api_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    match: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.MatchProperty, typing.Dict[builtins.str, typing.Any]]],
    route_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    domain_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRoute.DomainInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0696947414a622f87900dfb6001c18e2ef8bc6b326ec6ee3dbe0a9ccf3af4d48(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cc886a6daa17c450887fbf395e92abba84294c550f697a88205cd6021f1dace(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4b612e88dfc8381fa07985dc8d4c558332de64cf6de5ae71730a2b1b3ad58b7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b554f5e78b0cc2990719aff6affea75d9a71ec4fc7f26eb340d5d2862cb2b06(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__074af3dfcdb79659c886325ac092d35d6e2b94b115e584ac081b3054cbe94368(
    *,
    gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ai_service_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.AiServiceConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8e8af0172e44bb350cff18aaee469f45b94b3121cbaf6b6c36fabdcb7feff43(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ApiAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f12d101a5c99d2dc5906214f248d4c1476100717cef03f81e2af2ffeaf881d71(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43dcadc3c3507f991ab3b43a4f9f928ed558c3c5c035a4eb010caa91cdf0a36f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42520afd2366497a2b02f6f7642db85d25f0f69df158a9fe744c9db694968dfb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91e15808083b3b30113fb465c9e1fde85cb9f5e189ad928df2f8f1a23a8d6c83(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac9a639091d4393f583e2430487c9b05bacec8ef8a434694d08dfc9d9b3ccf51(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__856a460d8d907c2055d3960ca8e6057b6c40a8185b9416b072fbf01707b28d6f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4862fd3139a97a04183301cc6a3926111aa6978937bb1a6ba4a622d0fd44a0cf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85f478b53b2c3330a9ea5039f861b13ac4d32f9caabd10f9ba66edcfde6aa660(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab49020570192757da017c37ae23c843687dce469176276c1f3947b6113ae2ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b6b56ba85dc3166a92cb5e67d52fe3e19dfabaea37f423b18aa9dcbbb75c508(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce499db47b7578ec7008fa804b7e2eba06d72be03bc2f4911119b24756b41de7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee5ab66d76fe615cb42d1db59a59dcc59d4cc1bc0f72dc7a018634a6c9d10723(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ac1428c0e0d4f9882b2bedc59eacc7fa744590382761e1a7ae415dd6c56a0d8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cfacc8e7e21bcf0c9b843aec1acf33dc12f9e7fdb532a732869558f3692ec1a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f052c37fcdc031362732340d7e77c2f8ac34d36f03a9e45af9a08da2b61f27c9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4e72952e9a5e7272127594aec7429d991589d993349cc62a0a697ab9af841e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HttpApiProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a15c1084f3726ea595dcea91c96335871cd875b121c7b9f9404a9db0311550f6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75114941e745fac957a4bc797d13315d12ad4690aa3607967a966b03256f7629(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81a57bcbfdb949f7a23e09a10faeaed873e6de066919a3473e470bc594e0f880(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
