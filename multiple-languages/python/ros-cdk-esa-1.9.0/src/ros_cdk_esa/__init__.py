'''
## Aliyun ROS ESA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ESA from '@alicloud/ros-cdk-esa';
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
    jsii_type="@alicloud/ros-cdk-esa.CompressionRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "brotli": "brotli",
        "gzip": "gzip",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
        "zstd": "zstd",
    },
)
class CompressionRuleProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        brotli: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gzip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zstd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CompressionRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule

        :param site_id: Property siteId: The site ID, which can be obtained by calling the ListSites API.
        :param brotli: Property brotli: Brotli compression. Value range: on: Enable. off: Disable.
        :param gzip: Property gzip: Gzip compression. Value range: on: Enable. off: Disable.
        :param payment_type: Property paymentType: Payment Type.
        :param rule: Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios: - Match all incoming requests: value set to true - Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        :param rule_enable: Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range: on: Enable. off: Disable.
        :param rule_name: Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        :param sequence: Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        :param site_version: Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        :param zstd: Property zstd: Zstd compression. Value range: on: Enable. off: Disable.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7469a8d498f38fe8ecb82807d4065ffa56ec5fd19c523c68e1cd42392e4c4ba)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument brotli", value=brotli, expected_type=type_hints["brotli"])
            check_type(argname="argument gzip", value=gzip, expected_type=type_hints["gzip"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
            check_type(argname="argument zstd", value=zstd, expected_type=type_hints["zstd"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if brotli is not None:
            self._values["brotli"] = brotli
        if gzip is not None:
            self._values["gzip"] = gzip
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version
        if zstd is not None:
            self._values["zstd"] = zstd

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property siteId: The site ID, which can be obtained by calling the ListSites API.'''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def brotli(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property brotli: Brotli compression.

        Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("brotli")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gzip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gzip: Gzip compression.

        Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("gzip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Payment Type.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set. There are two usage scenarios:

        - Match all incoming requests: value set to true
        - Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set. Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property siteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zstd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zstd: Zstd compression.

        Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("zstd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CompressionRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.CustomScenePolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "create_time": "createTime",
        "custom_scene_policy_name": "customScenePolicyName",
        "end_time": "endTime",
        "objects": "objects",
        "template": "template",
    },
)
class CustomScenePolicyProps:
    def __init__(
        self,
        *,
        create_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        custom_scene_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        objects: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``CustomScenePolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy

        :param create_time: Property createTime: The time when the policy takes effect. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        :param custom_scene_policy_name: Property customScenePolicyName: The policy name.
        :param end_time: Property endTime: The time when the policy expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        :param objects: Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
        :param template: Property template: The name of the policy template. Valid value: promotion: major events.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8c6c5c452855ef2e3b66094db79f3bf9579cfbdf7443bb118e842f95e1bcc58)
            check_type(argname="argument create_time", value=create_time, expected_type=type_hints["create_time"])
            check_type(argname="argument custom_scene_policy_name", value=custom_scene_policy_name, expected_type=type_hints["custom_scene_policy_name"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument objects", value=objects, expected_type=type_hints["objects"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "create_time": create_time,
            "custom_scene_policy_name": custom_scene_policy_name,
            "end_time": end_time,
            "objects": objects,
            "template": template,
        }

    @builtins.property
    def create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property createTime: The time when the policy takes effect.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        result = self._values.get("create_time")
        assert result is not None, "Required property 'create_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property customScenePolicyName: The policy name.'''
        result = self._values.get("custom_scene_policy_name")
        assert result is not None, "Required property 'custom_scene_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endTime: The time when the policy expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        result = self._values.get("end_time")
        assert result is not None, "Required property 'end_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def objects(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property objects: The IDs of the websites that you want to associate with the policy.

        Separate multiple IDs with commas (,).
        '''
        result = self._values.get("objects")
        assert result is not None, "Required property 'objects' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property template: The name of the policy template.

        Valid value:
        promotion: major events.
        '''
        result = self._values.get("template")
        assert result is not None, "Required property 'template' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomScenePolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.EdgeContainerAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "edge_container_app_name": "edgeContainerAppName",
        "service_port": "servicePort",
        "target_port": "targetPort",
        "health_check_fail_times": "healthCheckFailTimes",
        "health_check_host": "healthCheckHost",
        "health_check_http_code": "healthCheckHttpCode",
        "health_check_interval": "healthCheckInterval",
        "health_check_method": "healthCheckMethod",
        "health_check_port": "healthCheckPort",
        "health_check_succ_times": "healthCheckSuccTimes",
        "health_check_timeout": "healthCheckTimeout",
        "health_check_type": "healthCheckType",
        "health_check_uri": "healthCheckUri",
        "remarks": "remarks",
    },
)
class EdgeContainerAppProps:
    def __init__(
        self,
        *,
        edge_container_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        target_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_succ_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remarks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EdgeContainerApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp

        :param edge_container_app_name: Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
        :param service_port: Property servicePort: The server port. Valid values: 1 to 65535.
        :param target_port: Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
        :param health_check_fail_times: Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
        :param health_check_host: Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
        :param health_check_http_code: Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values: http_2xx (default)http_3xx
        :param health_check_interval: Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
        :param health_check_method: Property healthCheckMethod: The HTTP request method for health checks. Valid values: HEAD (default): requests the headers of the resource. GET: requests the specified resource and returns both the headers and entity body.
        :param health_check_port: Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
        :param health_check_succ_times: Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
        :param health_check_timeout: Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
        :param health_check_type: Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values: l4: Layer 4 health check. l7: Layer 7 health check.
        :param health_check_uri: Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "/".
        :param remarks: Property remarks: The remarks. This parameter is empty by default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a41d5c123c40c0e85ed9d894b67938789439a6b9493097b4c1a0c4ae52e832b)
            check_type(argname="argument edge_container_app_name", value=edge_container_app_name, expected_type=type_hints["edge_container_app_name"])
            check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
            check_type(argname="argument target_port", value=target_port, expected_type=type_hints["target_port"])
            check_type(argname="argument health_check_fail_times", value=health_check_fail_times, expected_type=type_hints["health_check_fail_times"])
            check_type(argname="argument health_check_host", value=health_check_host, expected_type=type_hints["health_check_host"])
            check_type(argname="argument health_check_http_code", value=health_check_http_code, expected_type=type_hints["health_check_http_code"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
            check_type(argname="argument health_check_port", value=health_check_port, expected_type=type_hints["health_check_port"])
            check_type(argname="argument health_check_succ_times", value=health_check_succ_times, expected_type=type_hints["health_check_succ_times"])
            check_type(argname="argument health_check_timeout", value=health_check_timeout, expected_type=type_hints["health_check_timeout"])
            check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
            check_type(argname="argument health_check_uri", value=health_check_uri, expected_type=type_hints["health_check_uri"])
            check_type(argname="argument remarks", value=remarks, expected_type=type_hints["remarks"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "edge_container_app_name": edge_container_app_name,
            "service_port": service_port,
            "target_port": target_port,
        }
        if health_check_fail_times is not None:
            self._values["health_check_fail_times"] = health_check_fail_times
        if health_check_host is not None:
            self._values["health_check_host"] = health_check_host
        if health_check_http_code is not None:
            self._values["health_check_http_code"] = health_check_http_code
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_method is not None:
            self._values["health_check_method"] = health_check_method
        if health_check_port is not None:
            self._values["health_check_port"] = health_check_port
        if health_check_succ_times is not None:
            self._values["health_check_succ_times"] = health_check_succ_times
        if health_check_timeout is not None:
            self._values["health_check_timeout"] = health_check_timeout
        if health_check_type is not None:
            self._values["health_check_type"] = health_check_type
        if health_check_uri is not None:
            self._values["health_check_uri"] = health_check_uri
        if remarks is not None:
            self._values["remarks"] = remarks

    @builtins.property
    def edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property edgeContainerAppName: The name of the application.

        The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
        '''
        result = self._values.get("edge_container_app_name")
        assert result is not None, "Required property 'edge_container_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property servicePort: The server port.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("service_port")
        assert result is not None, "Required property 'service_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetPort: The backend port, which is also the service port of the application.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("target_port")
        assert result is not None, "Required property 'target_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.

        Valid values: 1 to 10. Default value: 5.
        '''
        result = self._values.get("health_check_fail_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckHost: The domain name that is used for health checks.

        This parameter is empty by default.
        '''
        result = self._values.get("health_check_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_http_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckHttpCode: The HTTP status code returned for a successful health check.

        Valid values:
        http_2xx (default)http_3xx
        '''
        result = self._values.get("health_check_http_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds. Valid values: 1 to 50. Default value: 5.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckMethod: The HTTP request method for health checks.

        Valid values:
        HEAD (default): requests the headers of the resource.
        GET: requests the specified resource and returns both the headers and entity body.
        '''
        result = self._values.get("health_check_method")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckPort: The port used for health checks.

        Valid values: 1 to 65535. Default value: 80.
        '''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_succ_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.

        Valid values: 1 to 10. Default value: 2.
        '''
        result = self._values.get("health_check_succ_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckTimeout: The timeout period of a health check response.

        If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckType: The health check type.

        By default, this parameter is left empty. Valid values:
        l4: Layer 4 health check.
        l7: Layer 7 health check.
        '''
        result = self._values.get("health_check_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckUri: The URI used for health checks.

        The URI must be 1 to 80 characters in length. Default value: "/".
        '''
        result = self._values.get("health_check_uri")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remarks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remarks: The remarks.

        This parameter is empty by default.
        '''
        result = self._values.get("remarks")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EdgeContainerAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "alt_svc": "altSvc",
        "alt_svc_clear": "altSvcClear",
        "alt_svc_ma": "altSvcMa",
        "alt_svc_persist": "altSvcPersist",
        "hsts": "hsts",
        "hsts_include_subdomains": "hstsIncludeSubdomains",
        "hsts_max_age": "hstsMaxAge",
        "hsts_preload": "hstsPreload",
        "https_force": "httpsForce",
        "https_force_code": "httpsForceCode",
        "https_no_sni_deny": "httpsNoSniDeny",
        "https_sni_verify": "httpsSniVerify",
        "https_sni_whitelist": "httpsSniWhitelist",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
    },
)
class HttpsApplicationConfigurationProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        alt_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_clear: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_ma: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_include_subdomains: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_max_age: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_preload: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_force: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_force_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_no_sni_deny: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_sni_verify: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_sni_whitelist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HttpsApplicationConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration

        :param site_id: Property siteId: The site ID, which can be obtained by calling the ListSites API.
        :param alt_svc: Property altSvc: Function switch, default off. Value range: on: Enabled. off: Disabled.
        :param alt_svc_clear: Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range: on: Enabled. off: Disabled.
        :param alt_svc_ma: Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
        :param alt_svc_persist: Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range: on: Enabled. off: Disabled.
        :param hsts: Property hsts: Whether to enable HSTS. It is disabled by default. Value range: on: Enabled. off: Disabled.
        :param hsts_include_subdomains: Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range: on: Enabled. off: Disabled.
        :param hsts_max_age: Property hstsMaxAge: The expiration time of HSTS, in seconds.
        :param hsts_preload: Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range: on: Enabled. off: Disabled.
        :param https_force: Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range: on: Enabled. off: Disabled.
        :param https_force_code: Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.
        :param https_no_sni_deny: Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range: on: Enabled. off: Disabled.
        :param https_sni_verify: Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range: on: Enabled. off: Disabled.
        :param https_sni_whitelist: Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
        :param payment_type: Property paymentType: Payment Type.
        :param rule: Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios: Match all incoming requests: value set to true Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        :param rule_enable: Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range: on: Enabled. off: Disabled.
        :param rule_name: Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        :param sequence: Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        :param site_version: Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faf03cbaeb9cec86b2c2b136848560d332147c7a26fee41626648a95907dde7f)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument alt_svc", value=alt_svc, expected_type=type_hints["alt_svc"])
            check_type(argname="argument alt_svc_clear", value=alt_svc_clear, expected_type=type_hints["alt_svc_clear"])
            check_type(argname="argument alt_svc_ma", value=alt_svc_ma, expected_type=type_hints["alt_svc_ma"])
            check_type(argname="argument alt_svc_persist", value=alt_svc_persist, expected_type=type_hints["alt_svc_persist"])
            check_type(argname="argument hsts", value=hsts, expected_type=type_hints["hsts"])
            check_type(argname="argument hsts_include_subdomains", value=hsts_include_subdomains, expected_type=type_hints["hsts_include_subdomains"])
            check_type(argname="argument hsts_max_age", value=hsts_max_age, expected_type=type_hints["hsts_max_age"])
            check_type(argname="argument hsts_preload", value=hsts_preload, expected_type=type_hints["hsts_preload"])
            check_type(argname="argument https_force", value=https_force, expected_type=type_hints["https_force"])
            check_type(argname="argument https_force_code", value=https_force_code, expected_type=type_hints["https_force_code"])
            check_type(argname="argument https_no_sni_deny", value=https_no_sni_deny, expected_type=type_hints["https_no_sni_deny"])
            check_type(argname="argument https_sni_verify", value=https_sni_verify, expected_type=type_hints["https_sni_verify"])
            check_type(argname="argument https_sni_whitelist", value=https_sni_whitelist, expected_type=type_hints["https_sni_whitelist"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if alt_svc is not None:
            self._values["alt_svc"] = alt_svc
        if alt_svc_clear is not None:
            self._values["alt_svc_clear"] = alt_svc_clear
        if alt_svc_ma is not None:
            self._values["alt_svc_ma"] = alt_svc_ma
        if alt_svc_persist is not None:
            self._values["alt_svc_persist"] = alt_svc_persist
        if hsts is not None:
            self._values["hsts"] = hsts
        if hsts_include_subdomains is not None:
            self._values["hsts_include_subdomains"] = hsts_include_subdomains
        if hsts_max_age is not None:
            self._values["hsts_max_age"] = hsts_max_age
        if hsts_preload is not None:
            self._values["hsts_preload"] = hsts_preload
        if https_force is not None:
            self._values["https_force"] = https_force
        if https_force_code is not None:
            self._values["https_force_code"] = https_force_code
        if https_no_sni_deny is not None:
            self._values["https_no_sni_deny"] = https_no_sni_deny
        if https_sni_verify is not None:
            self._values["https_sni_verify"] = https_sni_verify
        if https_sni_whitelist is not None:
            self._values["https_sni_whitelist"] = https_sni_whitelist
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property siteId: The site ID, which can be obtained by calling the ListSites API.'''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alt_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property altSvc: Function switch, default off.

        Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_clear(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property altSvcClear: Alt-Svc whether The header contains the clear parameter.

        This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc_clear")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_ma(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property altSvcMa: The effective time of the Alt-Svc, in seconds.

        The default value is 86400 seconds.
        '''
        result = self._values.get("alt_svc_ma")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_persist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.

        This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc_persist")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hsts: Whether to enable HSTS.

        It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_include_subdomains(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.

        Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts_include_subdomains")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_max_age(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hstsMaxAge: The expiration time of HSTS, in seconds.'''
        result = self._values.get("hsts_max_age")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_preload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hstsPreload: Whether to enable HSTS preloading.

        It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts_preload")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsForce: Whether to enable forced HTTPS.

        It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_force")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_force_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.'''
        result = self._values.get("https_force_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_no_sni_deny(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.

        This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_no_sni_deny")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_sni_verify(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsSniVerify: Whether to enable SNI verification.

        It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_sni_verify")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_sni_whitelist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.'''
        result = self._values.get("https_sni_whitelist")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Payment Type.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property siteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HttpsApplicationConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.ICompressionRule")
class ICompressionRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CompressionRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBrotli")
    def attr_brotli(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Brotli: Brotli compression.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGzip")
    def attr_gzip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gzip: Gzip compression.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZstd")
    def attr_zstd(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zstd: Zstd compression.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CompressionRuleProps:
        ...


class _ICompressionRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CompressionRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.ICompressionRule"

    @builtins.property
    @jsii.member(jsii_name="attrBrotli")
    def attr_brotli(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Brotli: Brotli compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBrotli"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrGzip")
    def attr_gzip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gzip: Gzip compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGzip"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrZstd")
    def attr_zstd(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zstd: Zstd compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZstd"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CompressionRuleProps:
        return typing.cast(CompressionRuleProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICompressionRule).__jsii_proxy_class__ = lambda : _ICompressionRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.ICustomScenePolicy")
class ICustomScenePolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CustomScenePolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the policy takes effect.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCustomScenePolicyName")
    def attr_custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomScenePolicyName: The name of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the policy expires.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrObjects")
    def attr_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Objects: The IDs of websites associated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The Id of the Policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplate")
    def attr_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Template: The name of the policy template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomScenePolicyProps:
        ...


class _ICustomScenePolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CustomScenePolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.ICustomScenePolicy"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the policy takes effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomScenePolicyName")
    def attr_custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomScenePolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomScenePolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the policy expires.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrObjects")
    def attr_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Objects: The IDs of websites associated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The Id of the Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplate")
    def attr_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Template: The name of the policy template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomScenePolicyProps:
        return typing.cast(CustomScenePolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICustomScenePolicy).__jsii_proxy_class__ = lambda : _ICustomScenePolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.IEdgeContainerApp")
class IEdgeContainerApp(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EdgeContainerApp``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppStatus")
    def attr_app_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppStatus: The status of the application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the application was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name that is associated with the application.

        If no domain name is associated with the application, the value is an empty string.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEdgeContainerAppName")
    def attr_edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EdgeContainerAppName: The name of the application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckFailTimes")
    def attr_health_check_fail_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHost")
    def attr_health_check_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHost: The domain name that is used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The HTTP request method for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckPort")
    def attr_health_check_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckPort: The port used for health checks.

        Valid values: 1 to 65535. Default value: 80.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSuccTimes")
    def attr_health_check_succ_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrQuicCid")
    def attr_quic_cid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute QuicCid: Indicates whether QUIC is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRemarks")
    def attr_remarks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remarks: The remarks.

        This parameter is empty by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServicePort")
    def attr_service_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePort: The server port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetPort")
    def attr_target_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetPort: The backend port, which is also the service port of the application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the application was last modified.

        The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVersionCount")
    def attr_version_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCount: The number of versions of the application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EdgeContainerAppProps:
        ...


class _IEdgeContainerAppProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EdgeContainerApp``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.IEdgeContainerApp"

    @builtins.property
    @jsii.member(jsii_name="attrAppStatus")
    def attr_app_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppStatus: The status of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the application was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name that is associated with the application.

        If no domain name is associated with the application, the value is an empty string.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrEdgeContainerAppName")
    def attr_edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EdgeContainerAppName: The name of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEdgeContainerAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckFailTimes")
    def attr_health_check_fail_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckFailTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHost")
    def attr_health_check_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHost: The domain name that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHost"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The HTTP request method for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckPort")
    def attr_health_check_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckPort: The port used for health checks.

        Valid values: 1 to 65535. Default value: 80.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSuccTimes")
    def attr_health_check_succ_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckSuccTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrQuicCid")
    def attr_quic_cid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute QuicCid: Indicates whether QUIC is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrQuicCid"))

    @builtins.property
    @jsii.member(jsii_name="attrRemarks")
    def attr_remarks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remarks: The remarks.

        This parameter is empty by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemarks"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePort")
    def attr_service_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePort: The server port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServicePort"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetPort")
    def attr_target_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetPort: The backend port, which is also the service port of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the application was last modified.

        The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCount")
    def attr_version_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCount: The number of versions of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionCount"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EdgeContainerAppProps:
        return typing.cast(EdgeContainerAppProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEdgeContainerApp).__jsii_proxy_class__ = lambda : _IEdgeContainerAppProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.IHttpsApplicationConfiguration")
class IHttpsApplicationConfiguration(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``HttpsApplicationConfiguration``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAltSvc")
    def attr_alt_svc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvc: Function switch, default off.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcClear")
    def attr_alt_svc_clear(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.

        This parameter is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcMa")
    def attr_alt_svc_ma(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.

        The default value is 86400 seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcPersist")
    def attr_alt_svc_persist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.

        This parameter is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHsts")
    def attr_hsts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hsts: Whether to enable HSTS.

        It is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHstsIncludeSubdomains")
    def attr_hsts_include_subdomains(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHstsMaxAge")
    def attr_hsts_max_age(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsMaxAge: The expiration time of HSTS, in seconds.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHstsPreload")
    def attr_hsts_preload(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsPreload: Whether to enable HSTS preloading.

        It is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForce")
    def attr_https_force(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForce: Whether to enable forced HTTPS.

        It is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForceCode")
    def attr_https_force_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpsNoSniDeny")
    def attr_https_no_sni_deny(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.

        This parameter is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniVerify")
    def attr_https_sni_verify(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniVerify: Whether to enable SNI verification.

        It is disabled by default.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniWhitelist")
    def attr_https_sni_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpsApplicationConfigurationProps:
        ...


class _IHttpsApplicationConfigurationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HttpsApplicationConfiguration``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.IHttpsApplicationConfiguration"

    @builtins.property
    @jsii.member(jsii_name="attrAltSvc")
    def attr_alt_svc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvc: Function switch, default off.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvc"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcClear")
    def attr_alt_svc_clear(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcClear"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcMa")
    def attr_alt_svc_ma(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.

        The default value is 86400 seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcMa"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcPersist")
    def attr_alt_svc_persist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcPersist"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrHsts")
    def attr_hsts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hsts: Whether to enable HSTS.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHsts"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsIncludeSubdomains")
    def attr_hsts_include_subdomains(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsIncludeSubdomains"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsMaxAge")
    def attr_hsts_max_age(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsMaxAge: The expiration time of HSTS, in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsMaxAge"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsPreload")
    def attr_hsts_preload(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsPreload: Whether to enable HSTS preloading.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsPreload"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForce")
    def attr_https_force(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForce: Whether to enable forced HTTPS.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsForce"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForceCode")
    def attr_https_force_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsForceCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsNoSniDeny")
    def attr_https_no_sni_deny(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsNoSniDeny"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniVerify")
    def attr_https_sni_verify(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniVerify: Whether to enable SNI verification.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsSniVerify"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniWhitelist")
    def attr_https_sni_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsSniWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpsApplicationConfigurationProps:
        return typing.cast(HttpsApplicationConfigurationProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHttpsApplicationConfiguration).__jsii_proxy_class__ = lambda : _IHttpsApplicationConfigurationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.IImageTransform")
class IImageTransform(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ImageTransform``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Indicates whether the image transformations feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageTransformProps":
        ...


class _IImageTransformProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ImageTransform``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.IImageTransform"

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Indicates whether the image transformations feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageTransformProps":
        return typing.cast("ImageTransformProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IImageTransform).__jsii_proxy_class__ = lambda : _IImageTransformProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-esa.IKvNamespace")
class IKvNamespace(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``KvNamespace``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacity")
    def attr_kv_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacity: The available capacity of the namespace.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityString")
    def attr_kv_capacity_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityString: The available capacity of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsed")
    def attr_kv_capacity_used(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsed: The used capacity of the namespace.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsedString")
    def attr_kv_capacity_used_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsedString: The used capacity of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKvNamespace")
    def attr_kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvNamespace: The name of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KvNamespaceProps":
        ...


class _IKvNamespaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``KvNamespace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-esa.IKvNamespace"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacity")
    def attr_kv_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacity: The available capacity of the namespace.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityString")
    def attr_kv_capacity_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityString: The available capacity of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsed")
    def attr_kv_capacity_used(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsed: The used capacity of the namespace.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsedString")
    def attr_kv_capacity_used_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsedString: The used capacity of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityUsedString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvNamespace")
    def attr_kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvNamespace: The name of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KvNamespaceProps":
        return typing.cast("KvNamespaceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IKvNamespace).__jsii_proxy_class__ = lambda : _IKvNamespaceProxy


@jsii.implements(IImageTransform)
class ImageTransform(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.ImageTransform",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::ImageTransform``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImageTransform``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageTransformProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d981bc685a4fe7f8dfa9c107b025755b3a442e1a9ca512239dbc61fb21e9f27)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Indicates whether the image transformations feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageTransformProps":
        return typing.cast("ImageTransformProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35bea2619f35d6ca09c8f966f4e2de38428565e82506df57a670a20f937208e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70ff3cb5b306e55f7e67736d47a4ed76b9bbeff66793f6b136c146b33299d849)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6415ff4cd76b7073bd50ff96c637ae34505752ada3f9ed56be61cc2159dcb26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.ImageTransformProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "enable": "enable",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
    },
)
class ImageTransformProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ImageTransform``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform

        :param site_id: Property siteId: The site ID, which can be obtained by calling the ListSites API.
        :param enable: Property enable: Indicates whether the image transformations feature is enabled. Valid values: on: Enabled. off: Disabled.
        :param payment_type: Property paymentType: Payment Type.
        :param rule: Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios: Match all incoming requests: value set to true Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        :param rule_enable: Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range: on: Enabled. off: Disabled.
        :param rule_name: Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        :param sequence: Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        :param site_version: Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c95f307ac2cc902233434978f7010872232b8372546c82c67d9beb95ce43209)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if enable is not None:
            self._values["enable"] = enable
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property siteId: The site ID, which can be obtained by calling the ListSites API.'''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Indicates whether the image transformations feature is enabled.

        Valid values:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Payment Type.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property siteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageTransformProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IKvNamespace)
class KvNamespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.KvNamespace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::KvNamespace``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKvNamespace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["KvNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e77b36b3c0b08623fa891707ddff60c1ec6bb632f8ff295e67f410fb8a110381)
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
        '''Attribute Description: The description of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacity")
    def attr_kv_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacity: The available capacity of the namespace.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityString")
    def attr_kv_capacity_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityString: The available capacity of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsed")
    def attr_kv_capacity_used(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsed: The used capacity of the namespace.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsedString")
    def attr_kv_capacity_used_string(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvCapacityUsedString: The used capacity of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvCapacityUsedString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvNamespace")
    def attr_kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KvNamespace: The name of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKvNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KvNamespaceProps":
        return typing.cast("KvNamespaceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4764e1161b4dfbda8537786ac13bb3ac50f6bf86851fa83fb19392965e273f6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1a1bc3008e9371757144a6ea419fbb1eb970b7faaf39486de9a297786027497)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb88772f8e20862cdbc1b0e02286521acf2168b9554a5785b6a8d605fb13dd87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.KvNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"kv_namespace": "kvNamespace", "description": "description"},
)
class KvNamespaceProps:
    def __init__(
        self,
        *,
        kv_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``KvNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace

        :param kv_namespace: Property kvNamespace: The name of the namespace.
        :param description: Property description: The description of the namespace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa42647cb354cb034e2d0c17b8c1b6fcd83bdd9c72afaa5468db69342f2cf03c)
            check_type(argname="argument kv_namespace", value=kv_namespace, expected_type=type_hints["kv_namespace"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "kv_namespace": kv_namespace,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property kvNamespace: The name of the namespace.'''
        result = self._values.get("kv_namespace")
        assert result is not None, "Required property 'kv_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the namespace.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KvNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCompressionRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosCompressionRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::CompressionRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CompressionRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCompressionRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab2d8050e9cbee079787d9103719a11350a59d6437f89e1184f169dae1366a0b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__377f3fb7810d196ac1cc0cbe4d5e292ca97991aaf1a7aae441a1730939190c5f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBrotli")
    def attr_brotli(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Brotli: Brotli compression.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBrotli"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigId: Config Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigType: The type of the configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrGzip")
    def attr_gzip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Gzip: Gzip compression.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGzip"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrZstd")
    def attr_zstd(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zstd: Zstd compression.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZstd"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dcc52f7a0d38bf94b94768e773629cf92e17add8d00c3f47ef204772ae8e7ef8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="siteId")
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "siteId"))

    @site_id.setter
    def site_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8710f6be55d118e4e7d3fdaf755492d6b3ef5c603fb646cd9631160b454f2fbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteId", value)

    @builtins.property
    @jsii.member(jsii_name="brotli")
    def brotli(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        brotli: Brotli compression. Value range:
        on: Enable.
        off: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "brotli"))

    @brotli.setter
    def brotli(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcdf6e8784a05fdabed7604a6ff0c30cdfd6e68e7c596536a15ba7c11852dc2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "brotli", value)

    @builtins.property
    @jsii.member(jsii_name="gzip")
    def gzip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gzip: Gzip compression. Value range:
        on: Enable.
        off: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gzip"))

    @gzip.setter
    def gzip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8f1091fc00ac0a6abb545bc3808d9ed350883034e3f35700884da74caa921b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gzip", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef6dce2fbccf982a40f32282b5cf749909ab6c026857d4e3477e21189aee0681)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="rule")
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:

        - Match all incoming requests: value set to true
        - Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rule"))

    @rule.setter
    def rule(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9dfdcae08dbecc56671f5b464e86b31629344d3e033672f112a0ad2a9f4463f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rule", value)

    @builtins.property
    @jsii.member(jsii_name="ruleEnable")
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enable.
        off: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleEnable"))

    @rule_enable.setter
    def rule_enable(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50bba9747d7cca605c1763e349eec7fe45afba62ecbd5b2417319f5dd70ab763)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleEnable", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8053608321ddc8a1880db867fc1df7e78ea0be640e521e2f89a5cc21f8d6d087)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="sequence")
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sequence"))

    @sequence.setter
    def sequence(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27093c04ba319129986b466e5d6f3b8eab3b477eb0644fd03e829070cadb7260)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sequence", value)

    @builtins.property
    @jsii.member(jsii_name="siteVersion")
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "siteVersion"))

    @site_version.setter
    def site_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ecf7394e83d1cbef5037fdda4a2e4197db5a9bfc2cc6a5ee0f934305a94f03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteVersion", value)

    @builtins.property
    @jsii.member(jsii_name="zstd")
    def zstd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zstd: Zstd compression. Value range:
        on: Enable.
        off: Disable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zstd"))

    @zstd.setter
    def zstd(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7039e92f5648929842554a604d4664c6fc076a027a75ff9b92d05c48a334cfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zstd", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosCompressionRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "brotli": "brotli",
        "gzip": "gzip",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
        "zstd": "zstd",
    },
)
class RosCompressionRuleProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        brotli: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gzip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zstd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCompressionRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule

        :param site_id: 
        :param brotli: 
        :param gzip: 
        :param payment_type: 
        :param rule: 
        :param rule_enable: 
        :param rule_name: 
        :param sequence: 
        :param site_version: 
        :param zstd: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__574fd1882433c0c62d4983759fa454656bbe592f038940e426a3e2120face1cd)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument brotli", value=brotli, expected_type=type_hints["brotli"])
            check_type(argname="argument gzip", value=gzip, expected_type=type_hints["gzip"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
            check_type(argname="argument zstd", value=zstd, expected_type=type_hints["zstd"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if brotli is not None:
            self._values["brotli"] = brotli
        if gzip is not None:
            self._values["gzip"] = gzip
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version
        if zstd is not None:
            self._values["zstd"] = zstd

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def brotli(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        brotli: Brotli compression. Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("brotli")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gzip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gzip: Gzip compression. Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("gzip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:

        - Match all incoming requests: value set to true
        - Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zstd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zstd: Zstd compression. Value range:
        on: Enable.
        off: Disable.
        '''
        result = self._values.get("zstd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCompressionRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomScenePolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosCustomScenePolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::CustomScenePolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomScenePolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomScenePolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5ea99a10d7932b3862dcff1ad30dcd1c7e1320a0342aae69190b19238099b89)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c805e96ca2d59fe4386aa07a0d7a3f045806745ef6f0827326106388b79c19a5)
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
        :Attribute: CreateTime: The time when the policy takes effect.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomScenePolicyName")
    def attr_custom_scene_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomScenePolicyName: The name of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomScenePolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndTime: The time when the policy expires.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrObjects")
    def attr_objects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Objects: The IDs of websites associated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The Id of the Policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplate")
    def attr_template(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Template: The name of the policy template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplate"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="createTime")
    def create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        createTime: The time when the policy takes effect.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "createTime"))

    @create_time.setter
    def create_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02e69ec1e39d3a34c2ea425359b6caf71a39e9735bf5b0dd219c3181103493dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "createTime", value)

    @builtins.property
    @jsii.member(jsii_name="customScenePolicyName")
    def custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: customScenePolicyName: The policy name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "customScenePolicyName"))

    @custom_scene_policy_name.setter
    def custom_scene_policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8285f447dae7c84980297fd6af17bb93bb22b2f4a065ba909c15a6c3273450ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customScenePolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__398ef6bae3bb63291373c4ac52bcc4ecb8baa64e4a41185f696cd3fd7f812d97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        endTime: The time when the policy expires.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac1b9c5059fab483cc8361972556f3dd1f6088ae3bb2496b471fd5afe0a86cc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

    @builtins.property
    @jsii.member(jsii_name="objects")
    def objects(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "objects"))

    @objects.setter
    def objects(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a05e3f6a3dbaf6ecc417ecb92e3e7d98fb6f652455b6875c5340e579009b59e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objects", value)

    @builtins.property
    @jsii.member(jsii_name="template")
    def template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        template: The name of the policy template. Valid value:
        promotion: major events.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "template"))

    @template.setter
    def template(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e58dfe5f0ea5638913ea153b92b42cce8efced79f512a8142d2dad8a2ecb9a3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "template", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosCustomScenePolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "create_time": "createTime",
        "custom_scene_policy_name": "customScenePolicyName",
        "end_time": "endTime",
        "objects": "objects",
        "template": "template",
    },
)
class RosCustomScenePolicyProps:
    def __init__(
        self,
        *,
        create_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        custom_scene_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        objects: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosCustomScenePolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy

        :param create_time: 
        :param custom_scene_policy_name: 
        :param end_time: 
        :param objects: 
        :param template: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e2ea2e37bceef508cf5bc204f1c4fedca49af7c1a6377941d5023086b0d5adb)
            check_type(argname="argument create_time", value=create_time, expected_type=type_hints["create_time"])
            check_type(argname="argument custom_scene_policy_name", value=custom_scene_policy_name, expected_type=type_hints["custom_scene_policy_name"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument objects", value=objects, expected_type=type_hints["objects"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "create_time": create_time,
            "custom_scene_policy_name": custom_scene_policy_name,
            "end_time": end_time,
            "objects": objects,
            "template": template,
        }

    @builtins.property
    def create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        createTime: The time when the policy takes effect.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        result = self._values.get("create_time")
        assert result is not None, "Required property 'create_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: customScenePolicyName: The policy name.
        '''
        result = self._values.get("custom_scene_policy_name")
        assert result is not None, "Required property 'custom_scene_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        endTime: The time when the policy expires.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        result = self._values.get("end_time")
        assert result is not None, "Required property 'end_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def objects(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
        '''
        result = self._values.get("objects")
        assert result is not None, "Required property 'objects' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        template: The name of the policy template. Valid value:
        promotion: major events.
        '''
        result = self._values.get("template")
        assert result is not None, "Required property 'template' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomScenePolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEdgeContainerApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosEdgeContainerApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::EdgeContainerApp``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EdgeContainerApp`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEdgeContainerAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__583e0e85fdbc5f06b3ed0967cc64ccc989ae45f5e48a62e4ae32570e5869beff)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4055b733feb9a082f5c6b090c84196511c74c3c021d4209a0b699247e1ab3207)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppStatus")
    def attr_app_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppStatus: The status of the application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the application was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrEdgeContainerAppName")
    def attr_edge_container_app_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EdgeContainerAppName: The name of the application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEdgeContainerAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayType: The type of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckFailTimes")
    def attr_health_check_fail_times(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckFailTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHost")
    def attr_health_check_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckHost: The domain name that is used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckHost"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckHttpCode: The HTTP status code returned for a successful health check.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckMethod: The HTTP request method for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckPort")
    def attr_health_check_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSuccTimes")
    def attr_health_check_succ_times(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckSuccTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckTimeout: The timeout period of a health check response.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckType: The health check type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckUri: The URI used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrQuicCid")
    def attr_quic_cid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QuicCid: Indicates whether QUIC is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQuicCid"))

    @builtins.property
    @jsii.member(jsii_name="attrRemarks")
    def attr_remarks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Remarks: The remarks. This parameter is empty by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemarks"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePort")
    def attr_service_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServicePort: The server port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServicePort"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetPort")
    def attr_target_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetPort: The backend port, which is also the service port of the application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCount")
    def attr_version_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionCount: The number of versions of the application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionCount"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="edgeContainerAppName")
    def edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "edgeContainerAppName"))

    @edge_container_app_name.setter
    def edge_container_app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b45e8954367bbbc31e2f1e48f656c11e4c2f4212bd06930d4796074f99ecbd9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edgeContainerAppName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38e77fd803ca1033145405871a1ebce464d59d767e30502c3adce21c1fc89f12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="servicePort")
    def service_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: servicePort: The server port. Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "servicePort"))

    @service_port.setter
    def service_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__664593c224ee1b3aec1f5fbf34bd363e9aa2d078a222052cde539e9929f5d6e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servicePort", value)

    @builtins.property
    @jsii.member(jsii_name="targetPort")
    def target_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetPort"))

    @target_port.setter
    def target_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3153441ed93d66c27d8f4e41aac27e4422b89fe5581319cd3e1e684c7774f5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetPort", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckFailTimes")
    def health_check_fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckFailTimes"))

    @health_check_fail_times.setter
    def health_check_fail_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85fd2d4193347b355cf36e197cea04538edc1ae06e1a35b76a24ce8bde239f1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckFailTimes", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckHost")
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckHost"))

    @health_check_host.setter
    def health_check_host(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__490d7b0704ea9959efd3d21026980736e9686ecba716803eb2ac4910ceaf34ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckHost", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckHttpCode")
    def health_check_http_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
        http_2xx (default)http_3xx
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckHttpCode"))

    @health_check_http_code.setter
    def health_check_http_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2d48887c9d4438a3e9af02439eff8b6000c70718f0b7a908116d158bd6ae6ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckHttpCode", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckInterval")
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckInterval"))

    @health_check_interval.setter
    def health_check_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720034bf0cdaec9e5554b177a2096baefdc1fbe5b4661a7dc6f78961c2902bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckInterval", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckMethod")
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckMethod: The HTTP request method for health checks. Valid values:
        HEAD (default): requests the headers of the resource.
        GET: requests the specified resource and returns both the headers and entity body.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckMethod"))

    @health_check_method.setter
    def health_check_method(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268f1b7e638bc4cf1ba90a3e7169d9ce1be47581cd4b516c36a36fe0d10f87c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckMethod", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckPort")
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckPort"))

    @health_check_port.setter
    def health_check_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b90522fbdf472557b0e8f2188c2d239d99de3c93bbb2c8729e84f3ae9a04ea16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckPort", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckSuccTimes")
    def health_check_succ_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckSuccTimes"))

    @health_check_succ_times.setter
    def health_check_succ_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f79208e5108ffb9c1a5c1ce9f4ac9a97f925f4ece5fb7e2871c982fc5c6f3901)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckSuccTimes", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTimeout")
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckTimeout"))

    @health_check_timeout.setter
    def health_check_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d7ab950b1da74af05cc7c689a94dc06be4dfb096f0148793137b4fbe4fee4e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckType")
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
        l4: Layer 4 health check.
        l7: Layer 7 health check.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckType"))

    @health_check_type.setter
    def health_check_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4d828d49fc3585b5487a67760577d65c3e38cdb3af9d5c172353f10344095dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckType", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckUri")
    def health_check_uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "/".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckUri"))

    @health_check_uri.setter
    def health_check_uri(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__068f24ed75e59b055d5c209ded8a3592387c20f6f0df500452a3b1dd4e753267)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckUri", value)

    @builtins.property
    @jsii.member(jsii_name="remarks")
    def remarks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remarks: The remarks. This parameter is empty by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remarks"))

    @remarks.setter
    def remarks(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25ce8b7d2196196a3a0edb491c9b246e3fc956f99aac1e736ffa0f1880502477)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remarks", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosEdgeContainerAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "edge_container_app_name": "edgeContainerAppName",
        "service_port": "servicePort",
        "target_port": "targetPort",
        "health_check_fail_times": "healthCheckFailTimes",
        "health_check_host": "healthCheckHost",
        "health_check_http_code": "healthCheckHttpCode",
        "health_check_interval": "healthCheckInterval",
        "health_check_method": "healthCheckMethod",
        "health_check_port": "healthCheckPort",
        "health_check_succ_times": "healthCheckSuccTimes",
        "health_check_timeout": "healthCheckTimeout",
        "health_check_type": "healthCheckType",
        "health_check_uri": "healthCheckUri",
        "remarks": "remarks",
    },
)
class RosEdgeContainerAppProps:
    def __init__(
        self,
        *,
        edge_container_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        target_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_succ_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remarks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEdgeContainerApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp

        :param edge_container_app_name: 
        :param service_port: 
        :param target_port: 
        :param health_check_fail_times: 
        :param health_check_host: 
        :param health_check_http_code: 
        :param health_check_interval: 
        :param health_check_method: 
        :param health_check_port: 
        :param health_check_succ_times: 
        :param health_check_timeout: 
        :param health_check_type: 
        :param health_check_uri: 
        :param remarks: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88bad2680a78bf26028531b34e8c5dff667665d9b9c29403b6e4cfa8cdfed71b)
            check_type(argname="argument edge_container_app_name", value=edge_container_app_name, expected_type=type_hints["edge_container_app_name"])
            check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
            check_type(argname="argument target_port", value=target_port, expected_type=type_hints["target_port"])
            check_type(argname="argument health_check_fail_times", value=health_check_fail_times, expected_type=type_hints["health_check_fail_times"])
            check_type(argname="argument health_check_host", value=health_check_host, expected_type=type_hints["health_check_host"])
            check_type(argname="argument health_check_http_code", value=health_check_http_code, expected_type=type_hints["health_check_http_code"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
            check_type(argname="argument health_check_port", value=health_check_port, expected_type=type_hints["health_check_port"])
            check_type(argname="argument health_check_succ_times", value=health_check_succ_times, expected_type=type_hints["health_check_succ_times"])
            check_type(argname="argument health_check_timeout", value=health_check_timeout, expected_type=type_hints["health_check_timeout"])
            check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
            check_type(argname="argument health_check_uri", value=health_check_uri, expected_type=type_hints["health_check_uri"])
            check_type(argname="argument remarks", value=remarks, expected_type=type_hints["remarks"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "edge_container_app_name": edge_container_app_name,
            "service_port": service_port,
            "target_port": target_port,
        }
        if health_check_fail_times is not None:
            self._values["health_check_fail_times"] = health_check_fail_times
        if health_check_host is not None:
            self._values["health_check_host"] = health_check_host
        if health_check_http_code is not None:
            self._values["health_check_http_code"] = health_check_http_code
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_method is not None:
            self._values["health_check_method"] = health_check_method
        if health_check_port is not None:
            self._values["health_check_port"] = health_check_port
        if health_check_succ_times is not None:
            self._values["health_check_succ_times"] = health_check_succ_times
        if health_check_timeout is not None:
            self._values["health_check_timeout"] = health_check_timeout
        if health_check_type is not None:
            self._values["health_check_type"] = health_check_type
        if health_check_uri is not None:
            self._values["health_check_uri"] = health_check_uri
        if remarks is not None:
            self._values["remarks"] = remarks

    @builtins.property
    def edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
        '''
        result = self._values.get("edge_container_app_name")
        assert result is not None, "Required property 'edge_container_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: servicePort: The server port. Valid values: 1 to 65535.
        '''
        result = self._values.get("service_port")
        assert result is not None, "Required property 'service_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
        '''
        result = self._values.get("target_port")
        assert result is not None, "Required property 'target_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
        '''
        result = self._values.get("health_check_fail_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
        '''
        result = self._values.get("health_check_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_http_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
        http_2xx (default)http_3xx
        '''
        result = self._values.get("health_check_http_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckMethod: The HTTP request method for health checks. Valid values:
        HEAD (default): requests the headers of the resource.
        GET: requests the specified resource and returns both the headers and entity body.
        '''
        result = self._values.get("health_check_method")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
        '''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_succ_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
        '''
        result = self._values.get("health_check_succ_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
        l4: Layer 4 health check.
        l7: Layer 7 health check.
        '''
        result = self._values.get("health_check_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "/".
        '''
        result = self._values.get("health_check_uri")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remarks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remarks: The remarks. This parameter is empty by default.
        '''
        result = self._values.get("remarks")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEdgeContainerAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHttpsApplicationConfiguration(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::HttpsApplicationConfiguration``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HttpsApplicationConfiguration`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHttpsApplicationConfigurationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b717039c48b3642746de1864d3a431d631b80c217ade37f84f53d09fcca1e796)
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
            type_hints = typing.get_type_hints(_typecheckingstub__242d3c9fc9b50bc3805784ba1078041f9a0cd778f65d0683a7a0f6d9680fb1b6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvc")
    def attr_alt_svc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AltSvc: Function switch, default off.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAltSvc"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcClear")
    def attr_alt_svc_clear(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAltSvcClear"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcMa")
    def attr_alt_svc_ma(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAltSvcMa"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcPersist")
    def attr_alt_svc_persist(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAltSvcPersist"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigId: Config Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigType: The type of the configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrHsts")
    def attr_hsts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Hsts: Whether to enable HSTS. It is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHsts"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsIncludeSubdomains")
    def attr_hsts_include_subdomains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHstsIncludeSubdomains"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsMaxAge")
    def attr_hsts_max_age(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HstsMaxAge: The expiration time of HSTS, in seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHstsMaxAge"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsPreload")
    def attr_hsts_preload(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHstsPreload"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForce")
    def attr_https_force(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsForce"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForceCode")
    def attr_https_force_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsForceCode: Forced HTTPS jump status code, value range:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsForceCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsNoSniDeny")
    def attr_https_no_sni_deny(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsNoSniDeny"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniVerify")
    def attr_https_sni_verify(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsSniVerify"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniWhitelist")
    def attr_https_sni_whitelist(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsSniWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSiteVersion"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9498d2618ee07e991863f7a9cc4c56db69177c60fc0472a70e6b0aca24686f67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="siteId")
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "siteId"))

    @site_id.setter
    def site_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7a76d270a2ed68aa63d623284ab4532fccaef638be83e16ee1465fa272fabd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteId", value)

    @builtins.property
    @jsii.member(jsii_name="altSvc")
    def alt_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvc: Function switch, default off. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "altSvc"))

    @alt_svc.setter
    def alt_svc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a8ffdb98e5093a1bac0c6514976272fa3f6942876ee247168f585dd635d6486)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "altSvc", value)

    @builtins.property
    @jsii.member(jsii_name="altSvcClear")
    def alt_svc_clear(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "altSvcClear"))

    @alt_svc_clear.setter
    def alt_svc_clear(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__989b4029a9e931782bb416c84f6ea272bea62a5ff02081d316a2b8c8132401b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "altSvcClear", value)

    @builtins.property
    @jsii.member(jsii_name="altSvcMa")
    def alt_svc_ma(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "altSvcMa"))

    @alt_svc_ma.setter
    def alt_svc_ma(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0fe73451f85fb0cb35c231bbd627bbd13bed5fa9e9fa10ef721fadb78f85a58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "altSvcMa", value)

    @builtins.property
    @jsii.member(jsii_name="altSvcPersist")
    def alt_svc_persist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "altSvcPersist"))

    @alt_svc_persist.setter
    def alt_svc_persist(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5286f795b75daa0a1dd18718a8487ecbe32c517dc5ce76d93e6008c71271d9d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "altSvcPersist", value)

    @builtins.property
    @jsii.member(jsii_name="hsts")
    def hsts(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hsts: Whether to enable HSTS. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hsts"))

    @hsts.setter
    def hsts(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f54c40c57c5d2bac62c2e5e110c1d1a663b60697b23217cfb6ac78bf05293e3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hsts", value)

    @builtins.property
    @jsii.member(jsii_name="hstsIncludeSubdomains")
    def hsts_include_subdomains(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hstsIncludeSubdomains"))

    @hsts_include_subdomains.setter
    def hsts_include_subdomains(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5c79104695022b26a9e55f1c07de7996c9ffcf5d5b00554123797b34b7de443)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hstsIncludeSubdomains", value)

    @builtins.property
    @jsii.member(jsii_name="hstsMaxAge")
    def hsts_max_age(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hstsMaxAge: The expiration time of HSTS, in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hstsMaxAge"))

    @hsts_max_age.setter
    def hsts_max_age(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbf899255166a0df78288d8542c491d56c1d1f51f73dcca6790fc04368d110b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hstsMaxAge", value)

    @builtins.property
    @jsii.member(jsii_name="hstsPreload")
    def hsts_preload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hstsPreload"))

    @hsts_preload.setter
    def hsts_preload(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6859aef2968e1c7d2e2d2485e1650e0909e1a3ddaa76dcf19554bbcff9d16d63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hstsPreload", value)

    @builtins.property
    @jsii.member(jsii_name="httpsForce")
    def https_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsForce"))

    @https_force.setter
    def https_force(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36b1bd83dbd5664d8d8f80ef47e076d199abc3254e99d41be807317cae6dfccb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsForce", value)

    @builtins.property
    @jsii.member(jsii_name="httpsForceCode")
    def https_force_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsForceCode: Forced HTTPS jump status code, value range:
        301
        302
        307
        308
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsForceCode"))

    @https_force_code.setter
    def https_force_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef830f6ec14741d5c603f7e9aadf267236917b0471ab6fe87c51a7b5d82b1eda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsForceCode", value)

    @builtins.property
    @jsii.member(jsii_name="httpsNoSniDeny")
    def https_no_sni_deny(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsNoSniDeny"))

    @https_no_sni_deny.setter
    def https_no_sni_deny(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b51e93892d0ac756624def3fb95c0799adf2856af2d3c7231983974cdc492ffb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsNoSniDeny", value)

    @builtins.property
    @jsii.member(jsii_name="httpsSniVerify")
    def https_sni_verify(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsSniVerify"))

    @https_sni_verify.setter
    def https_sni_verify(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2816a6b31bae62e25d18c781f74dcce8d18e5ac8394e45623b9c3f5b4ab2a31c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsSniVerify", value)

    @builtins.property
    @jsii.member(jsii_name="httpsSniWhitelist")
    def https_sni_whitelist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsSniWhitelist"))

    @https_sni_whitelist.setter
    def https_sni_whitelist(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d011955b4662501f55da09c3f1cd8399211e54eaefb63078f505a786f0acc6ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsSniWhitelist", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df0a12194dc03ce7dcd3d6176837934752da5dae0b16eb69410ca9864d1959f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="rule")
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rule"))

    @rule.setter
    def rule(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25c8acbc3db9e1aa5707885e89883b43de0b7acac3a5ed5f6208584f750c683f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rule", value)

    @builtins.property
    @jsii.member(jsii_name="ruleEnable")
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleEnable"))

    @rule_enable.setter
    def rule_enable(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98604bc1deab095bbe9011a719b355cd9e8c83692b5b139fe7ea203078671bec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleEnable", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f15cf47185f500da8048487df2e4957adaf7146fa0563f9401dc263c577c5f13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="sequence")
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sequence"))

    @sequence.setter
    def sequence(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cd50064707a38907f496f645b7e5735506a26193bc7627bdfea302c88e88fba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sequence", value)

    @builtins.property
    @jsii.member(jsii_name="siteVersion")
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "siteVersion"))

    @site_version.setter
    def site_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b58d174f28c7ad15aa5ded6e9d1831ca8c819b87fa95a5c20b505a583b6ed5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosHttpsApplicationConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "alt_svc": "altSvc",
        "alt_svc_clear": "altSvcClear",
        "alt_svc_ma": "altSvcMa",
        "alt_svc_persist": "altSvcPersist",
        "hsts": "hsts",
        "hsts_include_subdomains": "hstsIncludeSubdomains",
        "hsts_max_age": "hstsMaxAge",
        "hsts_preload": "hstsPreload",
        "https_force": "httpsForce",
        "https_force_code": "httpsForceCode",
        "https_no_sni_deny": "httpsNoSniDeny",
        "https_sni_verify": "httpsSniVerify",
        "https_sni_whitelist": "httpsSniWhitelist",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
    },
)
class RosHttpsApplicationConfigurationProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        alt_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_clear: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_ma: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alt_svc_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_include_subdomains: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_max_age: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hsts_preload: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_force: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_force_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_no_sni_deny: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_sni_verify: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_sni_whitelist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHttpsApplicationConfiguration``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration

        :param site_id: 
        :param alt_svc: 
        :param alt_svc_clear: 
        :param alt_svc_ma: 
        :param alt_svc_persist: 
        :param hsts: 
        :param hsts_include_subdomains: 
        :param hsts_max_age: 
        :param hsts_preload: 
        :param https_force: 
        :param https_force_code: 
        :param https_no_sni_deny: 
        :param https_sni_verify: 
        :param https_sni_whitelist: 
        :param payment_type: 
        :param rule: 
        :param rule_enable: 
        :param rule_name: 
        :param sequence: 
        :param site_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98d04457b7260f5e3b8f3c1930b6297246be797c207a16cab14f9024dec51d8b)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument alt_svc", value=alt_svc, expected_type=type_hints["alt_svc"])
            check_type(argname="argument alt_svc_clear", value=alt_svc_clear, expected_type=type_hints["alt_svc_clear"])
            check_type(argname="argument alt_svc_ma", value=alt_svc_ma, expected_type=type_hints["alt_svc_ma"])
            check_type(argname="argument alt_svc_persist", value=alt_svc_persist, expected_type=type_hints["alt_svc_persist"])
            check_type(argname="argument hsts", value=hsts, expected_type=type_hints["hsts"])
            check_type(argname="argument hsts_include_subdomains", value=hsts_include_subdomains, expected_type=type_hints["hsts_include_subdomains"])
            check_type(argname="argument hsts_max_age", value=hsts_max_age, expected_type=type_hints["hsts_max_age"])
            check_type(argname="argument hsts_preload", value=hsts_preload, expected_type=type_hints["hsts_preload"])
            check_type(argname="argument https_force", value=https_force, expected_type=type_hints["https_force"])
            check_type(argname="argument https_force_code", value=https_force_code, expected_type=type_hints["https_force_code"])
            check_type(argname="argument https_no_sni_deny", value=https_no_sni_deny, expected_type=type_hints["https_no_sni_deny"])
            check_type(argname="argument https_sni_verify", value=https_sni_verify, expected_type=type_hints["https_sni_verify"])
            check_type(argname="argument https_sni_whitelist", value=https_sni_whitelist, expected_type=type_hints["https_sni_whitelist"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if alt_svc is not None:
            self._values["alt_svc"] = alt_svc
        if alt_svc_clear is not None:
            self._values["alt_svc_clear"] = alt_svc_clear
        if alt_svc_ma is not None:
            self._values["alt_svc_ma"] = alt_svc_ma
        if alt_svc_persist is not None:
            self._values["alt_svc_persist"] = alt_svc_persist
        if hsts is not None:
            self._values["hsts"] = hsts
        if hsts_include_subdomains is not None:
            self._values["hsts_include_subdomains"] = hsts_include_subdomains
        if hsts_max_age is not None:
            self._values["hsts_max_age"] = hsts_max_age
        if hsts_preload is not None:
            self._values["hsts_preload"] = hsts_preload
        if https_force is not None:
            self._values["https_force"] = https_force
        if https_force_code is not None:
            self._values["https_force_code"] = https_force_code
        if https_no_sni_deny is not None:
            self._values["https_no_sni_deny"] = https_no_sni_deny
        if https_sni_verify is not None:
            self._values["https_sni_verify"] = https_sni_verify
        if https_sni_whitelist is not None:
            self._values["https_sni_whitelist"] = https_sni_whitelist
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alt_svc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvc: Function switch, default off. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_clear(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc_clear")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_ma(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
        '''
        result = self._values.get("alt_svc_ma")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alt_svc_persist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("alt_svc_persist")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hsts: Whether to enable HSTS. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_include_subdomains(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts_include_subdomains")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_max_age(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hstsMaxAge: The expiration time of HSTS, in seconds.
        '''
        result = self._values.get("hsts_max_age")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hsts_preload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("hsts_preload")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_force")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_force_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsForceCode: Forced HTTPS jump status code, value range:
        301
        302
        307
        308
        '''
        result = self._values.get("https_force_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_no_sni_deny(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_no_sni_deny")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_sni_verify(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("https_sni_verify")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_sni_whitelist(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
        '''
        result = self._values.get("https_sni_whitelist")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHttpsApplicationConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageTransform(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosImageTransform",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::ImageTransform``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImageTransform`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageTransformProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9f72dc1dcb0394fb904555c14db2e760745797c8b0debc397c4b6d0a1bf36a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__59d2b8a2bc666a32c3caf8b31bda8d8a8f6b7a03d0db6241db1dda298cbce76a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigId: Config Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigType: The type of the configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enable: Indicates whether the image transformations feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSiteVersion"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7b3040c0a42e530207f2ed01c06995a846e3fdf783ca1295f2c4b6b0bd84e92e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="siteId")
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "siteId"))

    @site_id.setter
    def site_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b606a98afe638dc0f7d2ab5d91425e25e61f0d1016b7a1f95254bd41b0f94c29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteId", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enable: Indicates whether the image transformations feature is enabled. Valid values:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e51427297e81115a838cbc48e73efa9023f7dbe2236c68554871c628e2684b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f47e9f76e622c21490d5bb57955402ad542f18197f89121aebf03fc52ceb2a76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="rule")
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rule"))

    @rule.setter
    def rule(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__466c47726fc0565332726d6d548fb8e1c3f3b85815a4d0af73685c3ab81e3acb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rule", value)

    @builtins.property
    @jsii.member(jsii_name="ruleEnable")
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleEnable"))

    @rule_enable.setter
    def rule_enable(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__289759cd1f69875d41e363b5e63fd3642b1ef3d7fc3ec9f0276a14ef5ee1bc78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleEnable", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86bdee223f264f4761f5de2d51aa279f13de85a1b5884e853c0c81ab1f99c171)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="sequence")
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sequence"))

    @sequence.setter
    def sequence(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e6e45315fe27b9acdbe972239f5c18b0cedd5b493de64713d1f7d3b024fb5e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sequence", value)

    @builtins.property
    @jsii.member(jsii_name="siteVersion")
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "siteVersion"))

    @site_version.setter
    def site_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8ba1c1aabf09b447560acf9b31021822cbf28b83930c3da54bbf96fb249a806)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosImageTransformProps",
    jsii_struct_bases=[],
    name_mapping={
        "site_id": "siteId",
        "enable": "enable",
        "payment_type": "paymentType",
        "rule": "rule",
        "rule_enable": "ruleEnable",
        "rule_name": "ruleName",
        "sequence": "sequence",
        "site_version": "siteVersion",
    },
)
class RosImageTransformProps:
    def __init__(
        self,
        *,
        site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImageTransform``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform

        :param site_id: 
        :param enable: 
        :param payment_type: 
        :param rule: 
        :param rule_enable: 
        :param rule_name: 
        :param sequence: 
        :param site_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47971b5f7cedeefcddefc864f51edc09ad0ed71a7184de5d2860d8c5414ac695)
            check_type(argname="argument site_id", value=site_id, expected_type=type_hints["site_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            check_type(argname="argument rule_enable", value=rule_enable, expected_type=type_hints["rule_enable"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument sequence", value=sequence, expected_type=type_hints["sequence"])
            check_type(argname="argument site_version", value=site_version, expected_type=type_hints["site_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "site_id": site_id,
        }
        if enable is not None:
            self._values["enable"] = enable
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if rule is not None:
            self._values["rule"] = rule
        if rule_enable is not None:
            self._values["rule_enable"] = rule_enable
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if sequence is not None:
            self._values["sequence"] = sequence
        if site_version is not None:
            self._values["site_version"] = site_version

    @builtins.property
    def site_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteId: The site ID, which can be obtained by calling the ListSites API.
        '''
        result = self._values.get("site_id")
        assert result is not None, "Required property 'site_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enable: Indicates whether the image transformations feature is enabled. Valid values:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
        '''
        result = self._values.get("rule")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
        '''
        result = self._values.get("rule_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sequence(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
        '''
        result = self._values.get("sequence")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        result = self._values.get("site_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageTransformProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKvNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.RosKvNamespace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ESA::KvNamespace``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KvNamespace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKvNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c9c71b795a1745cb099102cda0de6dae23d35b17b1020bb2701b54439ba5de6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ab25c82a0b2dea0c5d3022d3543b4629eca01187ba772335bee8c0fdc9e43238)
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
        :Attribute: Description: The description of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacity")
    def attr_kv_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KvCapacity: The available capacity of the namespace. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKvCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityString")
    def attr_kv_capacity_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KvCapacityString: The available capacity of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKvCapacityString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsed")
    def attr_kv_capacity_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKvCapacityUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrKvCapacityUsedString")
    def attr_kv_capacity_used_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KvCapacityUsedString: The used capacity of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKvCapacityUsedString"))

    @builtins.property
    @jsii.member(jsii_name="attrKvNamespace")
    def attr_kv_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KvNamespace: The name of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKvNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: The ID of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6fcbac16e6adb2524706568657cbdec61f9d65dfc8558df6b9d0e4a8a2c8bb79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="kvNamespace")
    def kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: kvNamespace: The name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "kvNamespace"))

    @kv_namespace.setter
    def kv_namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e6ad1d20b49ffb65fb116ddb42ce246b56d0008e67affff622742277e387068)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kvNamespace", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f35d7efbbee3d570dcdcfc5a580f7e867c2e11ec43331f821bb37d00ca32aafa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-esa.RosKvNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"kv_namespace": "kvNamespace", "description": "description"},
)
class RosKvNamespaceProps:
    def __init__(
        self,
        *,
        kv_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKvNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace

        :param kv_namespace: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6755144a083a755154999ae0fbc3c2443b2bdbbd47fac8af9a918f4361783bdd)
            check_type(argname="argument kv_namespace", value=kv_namespace, expected_type=type_hints["kv_namespace"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "kv_namespace": kv_namespace,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def kv_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: kvNamespace: The name of the namespace.
        '''
        result = self._values.get("kv_namespace")
        assert result is not None, "Required property 'kv_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the namespace.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKvNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICompressionRule)
class CompressionRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.CompressionRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::CompressionRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCompressionRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CompressionRuleProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eff886828771d6d60f5c3c291530e46516d0e595b35ba1240cf2093ba073f5b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBrotli")
    def attr_brotli(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Brotli: Brotli compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBrotli"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrGzip")
    def attr_gzip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gzip: Gzip compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGzip"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrZstd")
    def attr_zstd(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zstd: Zstd compression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZstd"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CompressionRuleProps:
        return typing.cast(CompressionRuleProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a06785a05ce5191babd4eb2d5b41d1231d2054d71c65604b1abd4fe665ae80e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e7d012c1f8c63e1f872a9778bca83827ccd262aca32caed8f731f45d73e2a19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4ef18460aa2e15836682590ddd27ca34cea3b03ab2f43cb273d95036c1ec5e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICustomScenePolicy)
class CustomScenePolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.CustomScenePolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::CustomScenePolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomScenePolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CustomScenePolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ed810224f209fe4b795e50a927f95f4515d8e21fdae3ea5b1b8035f670d0167)
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
        '''Attribute CreateTime: The time when the policy takes effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomScenePolicyName")
    def attr_custom_scene_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CustomScenePolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCustomScenePolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the policy expires.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrObjects")
    def attr_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Objects: The IDs of websites associated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The Id of the Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplate")
    def attr_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Template: The name of the policy template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomScenePolicyProps:
        return typing.cast(CustomScenePolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffe4a0bfa502137b0c47e2dc588032d564868de596a0efcd18d0bbd34bd87bd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3764b2ab332623155eff230da41479578c7758d0e76684c465a3edd806f6cd21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04fe0982d499fb5a40afeb8529b8e1fd848634cf5927719a07611b9e6ebbb5a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEdgeContainerApp)
class EdgeContainerApp(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.EdgeContainerApp",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::EdgeContainerApp``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEdgeContainerApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EdgeContainerAppProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8122658aec562deaec68c378e8da63a1be8e3ca73eea7786bf358d0d7d6c4f1a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppStatus")
    def attr_app_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppStatus: The status of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the application was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name that is associated with the application.

        If no domain name is associated with the application, the value is an empty string.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrEdgeContainerAppName")
    def attr_edge_container_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EdgeContainerAppName: The name of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEdgeContainerAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayType")
    def attr_gateway_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayType: The type of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckFailTimes")
    def attr_health_check_fail_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckFailTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHost")
    def attr_health_check_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHost: The domain name that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHost"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The HTTP request method for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckPort")
    def attr_health_check_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckPort: The port used for health checks.

        Valid values: 1 to 65535. Default value: 80.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSuccTimes")
    def attr_health_check_succ_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckSuccTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrQuicCid")
    def attr_quic_cid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute QuicCid: Indicates whether QUIC is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrQuicCid"))

    @builtins.property
    @jsii.member(jsii_name="attrRemarks")
    def attr_remarks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Remarks: The remarks.

        This parameter is empty by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRemarks"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePort")
    def attr_service_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePort: The server port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServicePort"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetPort")
    def attr_target_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetPort: The backend port, which is also the service port of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the application was last modified.

        The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCount")
    def attr_version_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionCount: The number of versions of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionCount"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EdgeContainerAppProps:
        return typing.cast(EdgeContainerAppProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ce3d9b86a34caaef70e3c1c938f6c5d0e31e17822c698c13e8fafb74bb3a9fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f30edac8339f95030bfddea40866ead62e867a1e53d9659066ae81e59988435)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9678906c83108dd46d60f08edc6a962a21552155804093a02bd59ae344af8ca3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHttpsApplicationConfiguration)
class HttpsApplicationConfiguration(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-esa.HttpsApplicationConfiguration",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ESA::HttpsApplicationConfiguration``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHttpsApplicationConfiguration``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HttpsApplicationConfigurationProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30b41b9eb20b604cece16ad3c7d6ce489dff452a71610cee729893b5763d2633)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAltSvc")
    def attr_alt_svc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvc: Function switch, default off.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvc"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcClear")
    def attr_alt_svc_clear(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcClear"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcMa")
    def attr_alt_svc_ma(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.

        The default value is 86400 seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcMa"))

    @builtins.property
    @jsii.member(jsii_name="attrAltSvcPersist")
    def attr_alt_svc_persist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAltSvcPersist"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigId")
    def attr_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigId: Config Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigType")
    def attr_config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigType: The type of the configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigType"))

    @builtins.property
    @jsii.member(jsii_name="attrHsts")
    def attr_hsts(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hsts: Whether to enable HSTS.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHsts"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsIncludeSubdomains")
    def attr_hsts_include_subdomains(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsIncludeSubdomains"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsMaxAge")
    def attr_hsts_max_age(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsMaxAge: The expiration time of HSTS, in seconds.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsMaxAge"))

    @builtins.property
    @jsii.member(jsii_name="attrHstsPreload")
    def attr_hsts_preload(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HstsPreload: Whether to enable HSTS preloading.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHstsPreload"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForce")
    def attr_https_force(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForce: Whether to enable forced HTTPS.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsForce"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsForceCode")
    def attr_https_force_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsForceCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsNoSniDeny")
    def attr_https_no_sni_deny(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.

        This parameter is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsNoSniDeny"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniVerify")
    def attr_https_sni_verify(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniVerify: Whether to enable SNI verification.

        It is disabled by default.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsSniVerify"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsSniWhitelist")
    def attr_https_sni_whitelist(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpsSniWhitelist"))

    @builtins.property
    @jsii.member(jsii_name="attrRule")
    def attr_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rule: Rule content, using conditional expressions to match user requests.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRule"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleEnable")
    def attr_rule_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleEnable: Rule switch.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: Rule name.

        When adding global configuration, this parameter does not need to be set.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSequence")
    def attr_sequence(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sequence: Order of rule execution.

        The smaller the value, the higher the priority for execution.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSequence"))

    @builtins.property
    @jsii.member(jsii_name="attrSiteVersion")
    def attr_site_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SiteVersion: The version number of the site configuration.

        For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSiteVersion"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HttpsApplicationConfigurationProps:
        return typing.cast(HttpsApplicationConfigurationProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a1d235b2799973608d1e358abab42587e56b7b4fe3ba5780373c890c0ef7c28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7b330c8ed9adf8f74a80b50ae7b9ab87a5ad7903d2d6553368941cdc3cda1d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66feebfc869a7c7f28c7572ebd22068ff8a21eb134839589507e0dbba8edef79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "CompressionRule",
    "CompressionRuleProps",
    "CustomScenePolicy",
    "CustomScenePolicyProps",
    "EdgeContainerApp",
    "EdgeContainerAppProps",
    "HttpsApplicationConfiguration",
    "HttpsApplicationConfigurationProps",
    "ICompressionRule",
    "ICustomScenePolicy",
    "IEdgeContainerApp",
    "IHttpsApplicationConfiguration",
    "IImageTransform",
    "IKvNamespace",
    "ImageTransform",
    "ImageTransformProps",
    "KvNamespace",
    "KvNamespaceProps",
    "RosCompressionRule",
    "RosCompressionRuleProps",
    "RosCustomScenePolicy",
    "RosCustomScenePolicyProps",
    "RosEdgeContainerApp",
    "RosEdgeContainerAppProps",
    "RosHttpsApplicationConfiguration",
    "RosHttpsApplicationConfigurationProps",
    "RosImageTransform",
    "RosImageTransformProps",
    "RosKvNamespace",
    "RosKvNamespaceProps",
]

publication.publish()

def _typecheckingstub__e7469a8d498f38fe8ecb82807d4065ffa56ec5fd19c523c68e1cd42392e4c4ba(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    brotli: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gzip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zstd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8c6c5c452855ef2e3b66094db79f3bf9579cfbdf7443bb118e842f95e1bcc58(
    *,
    create_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    custom_scene_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    objects: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a41d5c123c40c0e85ed9d894b67938789439a6b9493097b4c1a0c4ae52e832b(
    *,
    edge_container_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    target_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_succ_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remarks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faf03cbaeb9cec86b2c2b136848560d332147c7a26fee41626648a95907dde7f(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    alt_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_clear: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_ma: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_include_subdomains: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_max_age: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_preload: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_force: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_force_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_no_sni_deny: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_sni_verify: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_sni_whitelist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d981bc685a4fe7f8dfa9c107b025755b3a442e1a9ca512239dbc61fb21e9f27(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageTransformProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35bea2619f35d6ca09c8f966f4e2de38428565e82506df57a670a20f937208e7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70ff3cb5b306e55f7e67736d47a4ed76b9bbeff66793f6b136c146b33299d849(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6415ff4cd76b7073bd50ff96c637ae34505752ada3f9ed56be61cc2159dcb26(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c95f307ac2cc902233434978f7010872232b8372546c82c67d9beb95ce43209(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e77b36b3c0b08623fa891707ddff60c1ec6bb632f8ff295e67f410fb8a110381(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[KvNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4764e1161b4dfbda8537786ac13bb3ac50f6bf86851fa83fb19392965e273f6e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1a1bc3008e9371757144a6ea419fbb1eb970b7faaf39486de9a297786027497(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb88772f8e20862cdbc1b0e02286521acf2168b9554a5785b6a8d605fb13dd87(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa42647cb354cb034e2d0c17b8c1b6fcd83bdd9c72afaa5468db69342f2cf03c(
    *,
    kv_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab2d8050e9cbee079787d9103719a11350a59d6437f89e1184f169dae1366a0b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCompressionRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__377f3fb7810d196ac1cc0cbe4d5e292ca97991aaf1a7aae441a1730939190c5f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcc52f7a0d38bf94b94768e773629cf92e17add8d00c3f47ef204772ae8e7ef8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8710f6be55d118e4e7d3fdaf755492d6b3ef5c603fb646cd9631160b454f2fbc(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcdf6e8784a05fdabed7604a6ff0c30cdfd6e68e7c596536a15ba7c11852dc2d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8f1091fc00ac0a6abb545bc3808d9ed350883034e3f35700884da74caa921b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef6dce2fbccf982a40f32282b5cf749909ab6c026857d4e3477e21189aee0681(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9dfdcae08dbecc56671f5b464e86b31629344d3e033672f112a0ad2a9f4463f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50bba9747d7cca605c1763e349eec7fe45afba62ecbd5b2417319f5dd70ab763(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8053608321ddc8a1880db867fc1df7e78ea0be640e521e2f89a5cc21f8d6d087(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27093c04ba319129986b466e5d6f3b8eab3b477eb0644fd03e829070cadb7260(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ecf7394e83d1cbef5037fdda4a2e4197db5a9bfc2cc6a5ee0f934305a94f03(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7039e92f5648929842554a604d4664c6fc076a027a75ff9b92d05c48a334cfc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__574fd1882433c0c62d4983759fa454656bbe592f038940e426a3e2120face1cd(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    brotli: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gzip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zstd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5ea99a10d7932b3862dcff1ad30dcd1c7e1320a0342aae69190b19238099b89(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomScenePolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c805e96ca2d59fe4386aa07a0d7a3f045806745ef6f0827326106388b79c19a5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02e69ec1e39d3a34c2ea425359b6caf71a39e9735bf5b0dd219c3181103493dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8285f447dae7c84980297fd6af17bb93bb22b2f4a065ba909c15a6c3273450ad(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398ef6bae3bb63291373c4ac52bcc4ecb8baa64e4a41185f696cd3fd7f812d97(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac1b9c5059fab483cc8361972556f3dd1f6088ae3bb2496b471fd5afe0a86cc6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a05e3f6a3dbaf6ecc417ecb92e3e7d98fb6f652455b6875c5340e579009b59e9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e58dfe5f0ea5638913ea153b92b42cce8efced79f512a8142d2dad8a2ecb9a3f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e2ea2e37bceef508cf5bc204f1c4fedca49af7c1a6377941d5023086b0d5adb(
    *,
    create_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    custom_scene_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    objects: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__583e0e85fdbc5f06b3ed0967cc64ccc989ae45f5e48a62e4ae32570e5869beff(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEdgeContainerAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4055b733feb9a082f5c6b090c84196511c74c3c021d4209a0b699247e1ab3207(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b45e8954367bbbc31e2f1e48f656c11e4c2f4212bd06930d4796074f99ecbd9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38e77fd803ca1033145405871a1ebce464d59d767e30502c3adce21c1fc89f12(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__664593c224ee1b3aec1f5fbf34bd363e9aa2d078a222052cde539e9929f5d6e4(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3153441ed93d66c27d8f4e41aac27e4422b89fe5581319cd3e1e684c7774f5c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85fd2d4193347b355cf36e197cea04538edc1ae06e1a35b76a24ce8bde239f1b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__490d7b0704ea9959efd3d21026980736e9686ecba716803eb2ac4910ceaf34ba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2d48887c9d4438a3e9af02439eff8b6000c70718f0b7a908116d158bd6ae6ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720034bf0cdaec9e5554b177a2096baefdc1fbe5b4661a7dc6f78961c2902bca(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268f1b7e638bc4cf1ba90a3e7169d9ce1be47581cd4b516c36a36fe0d10f87c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b90522fbdf472557b0e8f2188c2d239d99de3c93bbb2c8729e84f3ae9a04ea16(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f79208e5108ffb9c1a5c1ce9f4ac9a97f925f4ece5fb7e2871c982fc5c6f3901(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d7ab950b1da74af05cc7c689a94dc06be4dfb096f0148793137b4fbe4fee4e1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4d828d49fc3585b5487a67760577d65c3e38cdb3af9d5c172353f10344095dd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__068f24ed75e59b055d5c209ded8a3592387c20f6f0df500452a3b1dd4e753267(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25ce8b7d2196196a3a0edb491c9b246e3fc956f99aac1e736ffa0f1880502477(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88bad2680a78bf26028531b34e8c5dff667665d9b9c29403b6e4cfa8cdfed71b(
    *,
    edge_container_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    target_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_succ_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remarks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b717039c48b3642746de1864d3a431d631b80c217ade37f84f53d09fcca1e796(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHttpsApplicationConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__242d3c9fc9b50bc3805784ba1078041f9a0cd778f65d0683a7a0f6d9680fb1b6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9498d2618ee07e991863f7a9cc4c56db69177c60fc0472a70e6b0aca24686f67(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7a76d270a2ed68aa63d623284ab4532fccaef638be83e16ee1465fa272fabd1(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a8ffdb98e5093a1bac0c6514976272fa3f6942876ee247168f585dd635d6486(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__989b4029a9e931782bb416c84f6ea272bea62a5ff02081d316a2b8c8132401b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0fe73451f85fb0cb35c231bbd627bbd13bed5fa9e9fa10ef721fadb78f85a58(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5286f795b75daa0a1dd18718a8487ecbe32c517dc5ce76d93e6008c71271d9d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f54c40c57c5d2bac62c2e5e110c1d1a663b60697b23217cfb6ac78bf05293e3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5c79104695022b26a9e55f1c07de7996c9ffcf5d5b00554123797b34b7de443(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbf899255166a0df78288d8542c491d56c1d1f51f73dcca6790fc04368d110b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6859aef2968e1c7d2e2d2485e1650e0909e1a3ddaa76dcf19554bbcff9d16d63(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36b1bd83dbd5664d8d8f80ef47e076d199abc3254e99d41be807317cae6dfccb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef830f6ec14741d5c603f7e9aadf267236917b0471ab6fe87c51a7b5d82b1eda(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51e93892d0ac756624def3fb95c0799adf2856af2d3c7231983974cdc492ffb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2816a6b31bae62e25d18c781f74dcce8d18e5ac8394e45623b9c3f5b4ab2a31c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d011955b4662501f55da09c3f1cd8399211e54eaefb63078f505a786f0acc6ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df0a12194dc03ce7dcd3d6176837934752da5dae0b16eb69410ca9864d1959f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c8acbc3db9e1aa5707885e89883b43de0b7acac3a5ed5f6208584f750c683f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98604bc1deab095bbe9011a719b355cd9e8c83692b5b139fe7ea203078671bec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f15cf47185f500da8048487df2e4957adaf7146fa0563f9401dc263c577c5f13(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cd50064707a38907f496f645b7e5735506a26193bc7627bdfea302c88e88fba(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b58d174f28c7ad15aa5ded6e9d1831ca8c819b87fa95a5c20b505a583b6ed5b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98d04457b7260f5e3b8f3c1930b6297246be797c207a16cab14f9024dec51d8b(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    alt_svc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_clear: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_ma: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alt_svc_persist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_include_subdomains: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_max_age: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hsts_preload: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_force: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_force_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_no_sni_deny: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_sni_verify: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_sni_whitelist: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9f72dc1dcb0394fb904555c14db2e760745797c8b0debc397c4b6d0a1bf36a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageTransformProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59d2b8a2bc666a32c3caf8b31bda8d8a8f6b7a03d0db6241db1dda298cbce76a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b3040c0a42e530207f2ed01c06995a846e3fdf783ca1295f2c4b6b0bd84e92e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b606a98afe638dc0f7d2ab5d91425e25e61f0d1016b7a1f95254bd41b0f94c29(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e51427297e81115a838cbc48e73efa9023f7dbe2236c68554871c628e2684b7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f47e9f76e622c21490d5bb57955402ad542f18197f89121aebf03fc52ceb2a76(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__466c47726fc0565332726d6d548fb8e1c3f3b85815a4d0af73685c3ab81e3acb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__289759cd1f69875d41e363b5e63fd3642b1ef3d7fc3ec9f0276a14ef5ee1bc78(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86bdee223f264f4761f5de2d51aa279f13de85a1b5884e853c0c81ab1f99c171(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e6e45315fe27b9acdbe972239f5c18b0cedd5b493de64713d1f7d3b024fb5e1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8ba1c1aabf09b447560acf9b31021822cbf28b83930c3da54bbf96fb249a806(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47971b5f7cedeefcddefc864f51edc09ad0ed71a7184de5d2860d8c5414ac695(
    *,
    site_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_enable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sequence: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c9c71b795a1745cb099102cda0de6dae23d35b17b1020bb2701b54439ba5de6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKvNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab25c82a0b2dea0c5d3022d3543b4629eca01187ba772335bee8c0fdc9e43238(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fcbac16e6adb2524706568657cbdec61f9d65dfc8558df6b9d0e4a8a2c8bb79(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e6ad1d20b49ffb65fb116ddb42ce246b56d0008e67affff622742277e387068(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f35d7efbbee3d570dcdcfc5a580f7e867c2e11ec43331f821bb37d00ca32aafa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6755144a083a755154999ae0fbc3c2443b2bdbbd47fac8af9a918f4361783bdd(
    *,
    kv_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eff886828771d6d60f5c3c291530e46516d0e595b35ba1240cf2093ba073f5b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CompressionRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a06785a05ce5191babd4eb2d5b41d1231d2054d71c65604b1abd4fe665ae80e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e7d012c1f8c63e1f872a9778bca83827ccd262aca32caed8f731f45d73e2a19(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4ef18460aa2e15836682590ddd27ca34cea3b03ab2f43cb273d95036c1ec5e9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ed810224f209fe4b795e50a927f95f4515d8e21fdae3ea5b1b8035f670d0167(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomScenePolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffe4a0bfa502137b0c47e2dc588032d564868de596a0efcd18d0bbd34bd87bd9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3764b2ab332623155eff230da41479578c7758d0e76684c465a3edd806f6cd21(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04fe0982d499fb5a40afeb8529b8e1fd848634cf5927719a07611b9e6ebbb5a9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8122658aec562deaec68c378e8da63a1be8e3ca73eea7786bf358d0d7d6c4f1a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EdgeContainerAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ce3d9b86a34caaef70e3c1c938f6c5d0e31e17822c698c13e8fafb74bb3a9fc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f30edac8339f95030bfddea40866ead62e867a1e53d9659066ae81e59988435(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9678906c83108dd46d60f08edc6a962a21552155804093a02bd59ae344af8ca3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30b41b9eb20b604cece16ad3c7d6ce489dff452a71610cee729893b5763d2633(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HttpsApplicationConfigurationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a1d235b2799973608d1e358abab42587e56b7b4fe3ba5780373c890c0ef7c28(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7b330c8ed9adf8f74a80b50ae7b9ab87a5ad7903d2d6553368941cdc3cda1d5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66feebfc869a7c7f28c7572ebd22068ff8a21eb134839589507e0dbba8edef79(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
