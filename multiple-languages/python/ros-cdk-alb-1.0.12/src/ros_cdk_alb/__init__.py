'''
## Aliyun ROS ALB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ALB from '@alicloud/ros-cdk-alb';
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


class Acl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Acl",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Acl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AclProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Acl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a7509e3fd2f66e32638211c2c6b0a5c710ed561e8f03e613ff9f1e6fd37055c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))


class AclAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.AclAssociation",
):
    '''A ROS resource type:  ``ALIYUN::ALB::AclAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AclAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::AclAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c5244b7986bbac10d49f3054a80bbefaa4b46f253946d9be62e8f6087602745)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.AclAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_ids": "aclIds",
        "acl_type": "aclType",
        "listener_id": "listenerId",
    },
)
class AclAssociationProps:
    def __init__(
        self,
        *,
        acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::AclAssociation``.

        :param acl_ids: Property aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        :param acl_type: Property aclType: The type of ACL.
        :param listener_id: Property listenerId: The ID of the listener.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f5bbe1590b369842e897dcf53c1707df149dfbaa5fe992f0145f94430e55305)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property aclIds: The IDs of the ACLs.

        You can specify up to three IDs at a time.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclType: The type of ACL.'''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the listener.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.AclProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_entries": "aclEntries",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
    },
)
class AclProps:
    def __init__(
        self,
        *,
        acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosAcl.AclEntriesProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Acl``.

        :param acl_entries: Property aclEntries: undefined.
        :param acl_name: Property aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9745a5fc8394d8813ef6061bcc99f7d668371c8d816b9ae3813e528ba4749b8e)
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property aclEntries: undefined.'''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclName: The name of the ACL.

        The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "AclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BackendServerAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.BackendServerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::ALB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BackendServerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::BackendServerAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29659e40623a51d7adb3ce3ed42d7c10000d8f83944e9633a08b67ce08036d2f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.BackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"server_group_id": "serverGroupId", "servers": "servers"},
)
class BackendServerAttachmentProps:
    def __init__(
        self,
        *,
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBackendServerAttachment.ServersProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::BackendServerAttachment``.

        :param server_group_id: Property serverGroupId: The ID of the server group.
        :param servers: Property servers: The backend servers that you want to add to the server group. You can specify up to 40 servers in each call.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eed2315850a15a8f39bc12507a5f6fdb51b088ee6f72f2496a0648dd53c2f35)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverGroupId: The ID of the server group.'''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''Property servers: The backend servers that you want to add to the server group.

        You can specify up to
        40 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class HealthCheckTemplate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.HealthCheckTemplate",
):
    '''A ROS resource type:  ``ALIYUN::ALB::HealthCheckTemplate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["HealthCheckTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::HealthCheckTemplate``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b112d762720dce2623c3281f7567db1626bd610de190b3aef06ebd54c0921b31)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTemplateId")
    def attr_health_check_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthCheckTemplateId: The ID of the health check template.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTemplateId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.HealthCheckTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_template_name": "healthCheckTemplateName",
        "health_check_codes": "healthCheckCodes",
        "health_check_connect_port": "healthCheckConnectPort",
        "health_check_host": "healthCheckHost",
        "health_check_interval": "healthCheckInterval",
        "health_check_method": "healthCheckMethod",
        "health_check_path": "healthCheckPath",
        "health_check_protocol": "healthCheckProtocol",
        "health_check_timeout": "healthCheckTimeout",
        "healthy_threshold": "healthyThreshold",
        "unhealthy_threshold": "unhealthyThreshold",
    },
)
class HealthCheckTemplateProps:
    def __init__(
        self,
        *,
        health_check_template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::HealthCheckTemplate``.

        :param health_check_template_name: Property healthCheckTemplateName: The name of the health check template. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        :param health_check_codes: Property healthCheckCodes: The HTTP status code for a successful health check. If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,). If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate them with commas (,). Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :param health_check_connect_port: Property healthCheckConnectPort: The port that is used for health checks. Valid values: 0 to 65535. Default value: 0. This value indicates that the port on a backend server is used for health checks.
        :param health_check_host: Property healthCheckHost: The domain name that is used for health checks. Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination CIDR block meets the following requirements: The domain name can contain lowercase letters, digits, hyphens (-), and periods (.). The domain name contains at least one period (.) but does not start or end with a period (.). The rightmost domain label can contain only letters, and cannot contain digits or hyphens (-). Other domain labels cannot start or end with a hyphen (-). This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :param health_check_interval: Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 2.
        :param health_check_method: Property healthCheckMethod: The HTTP method that is used for health checks. Valid values: HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform HTTP health checks. POST: By default, gRPC health checks use the POST method. GET: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected. Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :param health_check_path: Property healthCheckPath: The URL path that is used for health checks. It must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). It can also contain the following extended characters: _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (/). Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :param health_check_protocol: Property healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access from a browser and check whether the backend server is healthy. This is the default protocol. TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check whether the port of the backend server is available to receive requests. GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server to check whether the backend server is healthy.
        :param health_check_timeout: Property healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not respond within the specified timeout period, the backend server fails the health check. Valid values: 1 to 300. Default value: 5. Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        :param healthy_threshold: Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10. Default value: 3.
        :param unhealthy_threshold: Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10. Default value: 3.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fdbd5b8d68cd6a969374aca4dfc79907123208d5f87560e6f20a9a033b22914)
            check_type(argname="argument health_check_template_name", value=health_check_template_name, expected_type=type_hints["health_check_template_name"])
            check_type(argname="argument health_check_codes", value=health_check_codes, expected_type=type_hints["health_check_codes"])
            check_type(argname="argument health_check_connect_port", value=health_check_connect_port, expected_type=type_hints["health_check_connect_port"])
            check_type(argname="argument health_check_host", value=health_check_host, expected_type=type_hints["health_check_host"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
            check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
            check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
            check_type(argname="argument health_check_timeout", value=health_check_timeout, expected_type=type_hints["health_check_timeout"])
            check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
            check_type(argname="argument unhealthy_threshold", value=unhealthy_threshold, expected_type=type_hints["unhealthy_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "health_check_template_name": health_check_template_name,
        }
        if health_check_codes is not None:
            self._values["health_check_codes"] = health_check_codes
        if health_check_connect_port is not None:
            self._values["health_check_connect_port"] = health_check_connect_port
        if health_check_host is not None:
            self._values["health_check_host"] = health_check_host
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_method is not None:
            self._values["health_check_method"] = health_check_method
        if health_check_path is not None:
            self._values["health_check_path"] = health_check_path
        if health_check_protocol is not None:
            self._values["health_check_protocol"] = health_check_protocol
        if health_check_timeout is not None:
            self._values["health_check_timeout"] = health_check_timeout
        if healthy_threshold is not None:
            self._values["healthy_threshold"] = healthy_threshold
        if unhealthy_threshold is not None:
            self._values["unhealthy_threshold"] = unhealthy_threshold

    @builtins.property
    def health_check_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property healthCheckTemplateName: The name of the health check template.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("health_check_template_name")
        assert result is not None, "Required property 'health_check_template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property healthCheckCodes: The HTTP status code for a successful health check.

        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_codes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckConnectPort: The port that is used for health checks.

        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        result = self._values.get("health_check_connect_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckHost: The domain name that is used for health checks.

        Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
        CIDR block meets the following requirements:
        The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
        The domain name contains at least one period (.) but does not start or end with a
        period (.).
        The rightmost domain label can contain only letters, and cannot contain digits or
        hyphens (-).
        Other domain labels cannot start or end with a hyphen (-).
        This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckMethod: The HTTP method that is used for health checks.

        Valid values:
        HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
        HTTP health checks.
        POST: By default, gRPC health checks use the POST method.
        GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
        health check result is not affected.
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_method")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckPath: The URL path that is used for health checks.

        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
        signs (#), and ampersands (&). It can also contain the following extended characters:
        _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (/).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckProtocol: The protocol that is used for health checks.

        Valid values:
        HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
        from a browser and check whether the backend server is healthy. This is the default
        protocol.
        TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
        whether the port of the backend server is available to receive requests.
        GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
        to check whether the backend server is healthy.
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckTimeout: The timeout period of a health check.

        Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.

        In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.

        In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("unhealthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HealthCheckTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Listener",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Listener``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Listener``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b024852b9b0273253558aaa2b9b536b52185236e21351d4bc4bbba65be78236)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_actions": "defaultActions",
        "listener_port": "listenerPort",
        "listener_protocol": "listenerProtocol",
        "load_balancer_id": "loadBalancerId",
        "ca_certificates": "caCertificates",
        "ca_enabled": "caEnabled",
        "certificates": "certificates",
        "gzip_enabled": "gzipEnabled",
        "http2_enabled": "http2Enabled",
        "idle_timeout": "idleTimeout",
        "listener_description": "listenerDescription",
        "quic_config": "quicConfig",
        "request_timeout": "requestTimeout",
        "security_policy_id": "securityPolicyId",
        "x_forwarded_for_config": "xForwardedForConfig",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        default_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.DefaultActionsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ca_certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.CaCertificatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.CertificatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        gzip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quic_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.QuicConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.XForwardedForConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Listener``.

        :param default_actions: Property defaultActions: The actions of the rule.
        :param listener_port: Property listenerPort: The frontend port that is used by the ALB instance. Valid values: 1 to 65535.
        :param listener_protocol: Property listenerProtocol: The listener protocol. Valid values: HTTP, HTTPS, and QUIC.
        :param load_balancer_id: Property loadBalancerId: The ID of the ALB instance.
        :param ca_certificates: Property caCertificates: List of configured CA certificates for listener.
        :param ca_enabled: Property caEnabled: Specifies whether to enable mutual authentication. Default false.
        :param certificates: Property certificates: The list of SSL certificates for listener.
        :param gzip_enabled: Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type. Valid values: true and false. Default value: true.
        :param http2_enabled: Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on. Valid values: true and false. Default value: true. Note Only HTTPS listeners support this parameter.
        :param idle_timeout: Property idleTimeout: The timeout period of idle connections. Valid values: 1 to 180. Unit: seconds. Default value: 15. If no request is received within the specified timeout period, ALB closes the connection. ALB recreates the connection when a new connection request is received.
        :param listener_description: Property listenerDescription: The description of the listener. The description must be 2 to 256 characters in length.
        :param quic_config: Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
        :param request_timeout: Property requestTimeout: The timeout period of the request. Valid values: 1 to 180. Unit: seconds. Default value: 60. If no response is received from the backend server during the request timeout period, ALB sends an HTTP 504 error code to the client.
        :param security_policy_id: Property securityPolicyId: The ID of the security policy. System security policies and custom security policies are supported. Default value: tls_cipher_policy_1_0. This value indicates a system security policy. Note Only HTTPS listeners support this parameter.
        :param x_forwarded_for_config: Property xForwardedForConfig: The configuration of the XForward field.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6d945c625cb69156e18d79f0e8b7bb6e14c0e73bbebde213faab8ac43c33790)
            check_type(argname="argument default_actions", value=default_actions, expected_type=type_hints["default_actions"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument ca_certificates", value=ca_certificates, expected_type=type_hints["ca_certificates"])
            check_type(argname="argument ca_enabled", value=ca_enabled, expected_type=type_hints["ca_enabled"])
            check_type(argname="argument certificates", value=certificates, expected_type=type_hints["certificates"])
            check_type(argname="argument gzip_enabled", value=gzip_enabled, expected_type=type_hints["gzip_enabled"])
            check_type(argname="argument http2_enabled", value=http2_enabled, expected_type=type_hints["http2_enabled"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument listener_description", value=listener_description, expected_type=type_hints["listener_description"])
            check_type(argname="argument quic_config", value=quic_config, expected_type=type_hints["quic_config"])
            check_type(argname="argument request_timeout", value=request_timeout, expected_type=type_hints["request_timeout"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument x_forwarded_for_config", value=x_forwarded_for_config, expected_type=type_hints["x_forwarded_for_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_actions": default_actions,
            "listener_port": listener_port,
            "listener_protocol": listener_protocol,
            "load_balancer_id": load_balancer_id,
        }
        if ca_certificates is not None:
            self._values["ca_certificates"] = ca_certificates
        if ca_enabled is not None:
            self._values["ca_enabled"] = ca_enabled
        if certificates is not None:
            self._values["certificates"] = certificates
        if gzip_enabled is not None:
            self._values["gzip_enabled"] = gzip_enabled
        if http2_enabled is not None:
            self._values["http2_enabled"] = http2_enabled
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if listener_description is not None:
            self._values["listener_description"] = listener_description
        if quic_config is not None:
            self._values["quic_config"] = quic_config
        if request_timeout is not None:
            self._values["request_timeout"] = request_timeout
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if x_forwarded_for_config is not None:
            self._values["x_forwarded_for_config"] = x_forwarded_for_config

    @builtins.property
    def default_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.DefaultActionsProperty"]]]:
        '''Property defaultActions: The actions of the rule.'''
        result = self._values.get("default_actions")
        assert result is not None, "Required property 'default_actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.DefaultActionsProperty"]]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The frontend port that is used by the ALB instance.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerProtocol: The listener protocol.

        Valid values: HTTP, HTTPS, and QUIC.
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the ALB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CaCertificatesProperty"]]]]:
        '''Property caCertificates: List of configured CA certificates for listener.'''
        result = self._values.get("ca_certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CaCertificatesProperty"]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property caEnabled: Specifies whether to enable mutual authentication.

        Default false.
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''Property certificates: The list of SSL certificates for listener.'''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]], result)

    @builtins.property
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.

        Valid values: true and false.
        Default value: true.
        '''
        result = self._values.get("gzip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property http2Enabled: Specifies whether to enable HTTP/2.

        Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("http2_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property idleTimeout: The timeout period of idle connections.

        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property listenerDescription: The description of the listener.

        The description must be 2 to 256 characters in length.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.QuicConfigProperty"]]:
        '''Property quicConfig: Select a QUIC listener and associate it with the ALB instance.'''
        result = self._values.get("quic_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.QuicConfigProperty"]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property requestTimeout: The timeout period of the request.

        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityPolicyId: The ID of the security policy.

        System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''Property xForwardedForConfig: The configuration of the XForward field.'''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancer(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.LoadBalancer",
):
    '''A ROS resource type:  ``ALIYUN::ALB::LoadBalancer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::LoadBalancer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d069fe32167c7b72465a068fc5531fa3463568a953f552f4eee86fd16f92fc07)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressType: The type of IP address that the ALB instance uses to provide services.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DNSName: The domain name of the ALB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerEdition")
    def attr_load_balancer_edition(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerEdition: The edition of the ALB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerEdition"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerId: The ID of the ALB instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneMappings"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.LoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_edition": "loadBalancerEdition",
        "load_balancer_name": "loadBalancerName",
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "access_log_config": "accessLogConfig",
        "address_allocated_mode": "addressAllocatedMode",
        "address_ip_version": "addressIpVersion",
        "bandwidth_package_id": "bandwidthPackageId",
        "deletion_protection_enabled": "deletionProtectionEnabled",
        "modification_protection_config": "modificationProtectionConfig",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class LoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_billing_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.LoadBalancerBillingConfigProperty", typing.Dict[builtins.str, typing.Any]]],
        load_balancer_edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.ZoneMappingsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        access_log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.AccessLogConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        address_allocated_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.ModificationProtectionConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancer.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::LoadBalancer``.

        :param address_type: Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values: Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet. Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        :param load_balancer_billing_config: Property loadBalancerBillingConfig: The configuration of the billing method.
        :param load_balancer_edition: Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values: Basic: Basic Edition Standard: Standard Edition
        :param load_balancer_name: Property loadBalancerName: The name of the ALB instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        :param zone_mappings: Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        :param access_log_config: Property accessLogConfig:.
        :param address_allocated_mode: Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values: Fixed: The ALB instance uses a static IP address. Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        :param address_ip_version: Property addressIpVersion: The protocol version. Valid values: IPv4: IPv4 DualStack: dual stack
        :param bandwidth_package_id: Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
        :param deletion_protection_enabled: Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        :param modification_protection_config: Property modificationProtectionConfig: The configuration of modification protection.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbb371846bcbcf3bb1f1cbce0eb944fb336c84f622c3a86ff07e1f6deb459790)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_edition", value=load_balancer_edition, expected_type=type_hints["load_balancer_edition"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument access_log_config", value=access_log_config, expected_type=type_hints["access_log_config"])
            check_type(argname="argument address_allocated_mode", value=address_allocated_mode, expected_type=type_hints["address_allocated_mode"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument deletion_protection_enabled", value=deletion_protection_enabled, expected_type=type_hints["deletion_protection_enabled"])
            check_type(argname="argument modification_protection_config", value=modification_protection_config, expected_type=type_hints["modification_protection_config"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_type": address_type,
            "load_balancer_billing_config": load_balancer_billing_config,
            "load_balancer_edition": load_balancer_edition,
            "load_balancer_name": load_balancer_name,
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if access_log_config is not None:
            self._values["access_log_config"] = access_log_config
        if address_allocated_mode is not None:
            self._values["address_allocated_mode"] = address_allocated_mode
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if deletion_protection_enabled is not None:
            self._values["deletion_protection_enabled"] = deletion_protection_enabled
        if modification_protection_config is not None:
            self._values["modification_protection_config"] = modification_protection_config
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addressType: The type of IP address that the ALB instance uses to provide services.

        Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]:
        '''Property loadBalancerBillingConfig: The configuration of the billing method.'''
        result = self._values.get("load_balancer_billing_config")
        assert result is not None, "Required property 'load_balancer_billing_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"], result)

    @builtins.property
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerEdition: The edition of the ALB instance.

        Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        result = self._values.get("load_balancer_edition")
        assert result is not None, "Required property 'load_balancer_edition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerName: The name of the ALB instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        assert result is not None, "Required property 'load_balancer_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''Property zoneMappings: The zones and the vSwitches in the zones.

        You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], result)

    @builtins.property
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]]:
        '''Property accessLogConfig:.'''
        result = self._values.get("access_log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]], result)

    @builtins.property
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressAllocatedMode: The mode in which IP addresses are assigned.

        Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        result = self._values.get("address_allocated_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: The protocol version.

        Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthPackageId: Attach common bandwidth package to load balancer.

        It only takes effect when AddressType=Internet.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtectionEnabled: Specifies whether to enable deletion protection.

        Default value: false.
        '''
        result = self._values.get("deletion_protection_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''Property modificationProtectionConfig: The configuration of modification protection.'''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosAcl",
):
    '''A ROS template type:  ``ALIYUN::ALB::Acl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Acl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b610215460f306b32c78da89efeca771aa45070eafb1fee0a17b947a0a01fff)
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
            type_hints = typing.get_type_hints(_typecheckingstub__40fffd9be0415b41ef82b3ee62e231535b60c7f5cb33c0a7fb2b159ba6d4723d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: The ID of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2bebd13f3d9bdfa55f5f5efc06c5dd49cdc7fdd78a570b33808fd53b1847da2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclEntries")
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntries: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "aclEntries"))

    @acl_entries.setter
    def acl_entries(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d901eb538b6c596f73a312c97e9ad00ff48805764dd538f654769866f51ecf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclEntries", value)

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__493273977652f03087f918c78fcf7fd67a624ed923fa9bee3039b899e7ddbfea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__639c2e6924eec8544534fa057dca0f65a26f11fc4a642f701e5270f357842aa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosAcl.AclEntriesProperty",
        jsii_struct_bases=[],
        name_mapping={"entry": "entry", "description": "description"},
    )
    class AclEntriesProperty:
        def __init__(
            self,
            *,
            entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param entry: 
            :param description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__39f397362d6182c1dd553d3d8a20848890407fd0a4c130ffbbe5a548e80cce2c)
                check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "entry": entry,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def entry(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: entry: The CIDR block for the ACL entry.
            '''
            result = self._values.get("entry")
            assert result is not None, "Required property 'entry' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: -]){2,256}$/.
            :Property: description: The description of ACL entries. The description must be 2 to 256 characters in length, and can contain only the characters specified by the following expression:/^([^\\x00-\\xff]|[\\w.,;/
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AclEntriesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosAclAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosAclAssociation",
):
    '''A ROS template type:  ``ALIYUN::ALB::AclAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::AclAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d8f135f18e33871acc2e714bd2ad10730100d9c06fd3ea7e80068417be64657)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a9b5f92f89768565c6d364c465caec6c3b0aac9cde47361bf241feaa4a97e00a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclIds")
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "aclIds"))

    @acl_ids.setter
    def acl_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268616ed508cf63674e72495ed55e8605180077aedff1a6733d4c5e82b594b43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclIds", value)

    @builtins.property
    @jsii.member(jsii_name="aclType")
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclType: The type of ACL.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclType"))

    @acl_type.setter
    def acl_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e1667ad1d882c1abca7bbe2acf086dc24234a69c0d9644b726a5544aae37edc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac2bff6d4905a8a5ab8a60b1331db1f785d8ac8121a87bce0cb370daa9760c6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0ee700e218288a2d246e4777c1262610dbabe3209164c9856b5a7359979f0e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosAclAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_ids": "aclIds",
        "acl_type": "aclType",
        "listener_id": "listenerId",
    },
)
class RosAclAssociationProps:
    def __init__(
        self,
        *,
        acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::AclAssociation``.

        :param acl_ids: 
        :param acl_type: 
        :param listener_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f60e893ed86cd73b824bb12eb1d40161b66ba9a7b80501b2b54c3c85a984ef82)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclType: The type of ACL.
        '''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_entries": "aclEntries",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosAclProps:
    def __init__(
        self,
        *,
        acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Acl``.

        :param acl_entries: 
        :param acl_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1887c45889291b639bbdd8a7cb81dce592558ffc0746ad61f6708116851a7eb5)
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntries: undefined
        '''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        result = self._values.get("acl_name")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosBackendServerAttachment",
):
    '''A ROS template type:  ``ALIYUN::ALB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackendServerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::BackendServerAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e807e2f0e0b99305a28042a0665c8f594655d16d59e04be904c2d0f09ebbed31)
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
            type_hints = typing.get_type_hints(_typecheckingstub__76425041c9802e880c29ecd832f19d5537fc3088da1256c665f0c910e79c9a90)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerGroupId: The ID of the server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ced668e38092a859d1a5fe416b3d45e2cd62e9ee498e1a98bf29981572e6f9d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupId")
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverGroupId"))

    @server_group_id.setter
    def server_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38b06add0cb0532a9c0d31a63015c0552d1601beb17702cc270beb96c1f69c3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="servers")
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        40 servers in each call.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], jsii.get(self, "servers"))

    @servers.setter
    def servers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cea452fe4b5d69b95f449086ba0f7d04e8d6cd9f15103c5aca08a30e6ee3c154)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servers", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_id": "serverId",
            "server_type": "serverType",
            "description": "description",
            "port": "port",
            "server_ip": "serverIp",
            "weight": "weight",
        },
    )
    class ServersProperty:
        def __init__(
            self,
            *,
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param server_type: 
            :param description: 
            :param port: 
            :param server_ip: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__953812c39b10daed1e875b479a9d948cc7696792bebd6c62be6181befcb22fac)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_id": server_id,
                "server_type": server_type,
            }
            if description is not None:
                self._values["description"] = description
            if port is not None:
                self._values["port"] = port
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            serverId: If the server group consists of servers, you can set this parameter to the ID of a
            resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
            (ENI), or an elastic container instance.
            If the server group consists of IP addresses, you can set this parameter to an IP
            address.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            serverType: The type of the backend server. Valid values:
            Ecs: an ECS instance
            Eni: an ENI
            Eci: an elastic container instance
            Ip: an IP address
            '''
            result = self._values.get("server_type")
            assert result is not None, "Required property 'server_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: -]){2,256}$/.
            :Property:

            description: The description of the backend server. The description must be 2 to 256 characters
            in length, and can contain only the characters specified by the following expression:
            /^([^\\x00-\\xff]|[\\w.,;/
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port that is used by the backend server. Valid values: 1 to 65535.
            Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP address of the ENI in inclusive ENI mode.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosBackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"server_group_id": "serverGroupId", "servers": "servers"},
)
class RosBackendServerAttachmentProps:
    def __init__(
        self,
        *,
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::BackendServerAttachment``.

        :param server_group_id: 
        :param servers: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0be7653e59f110248e2471ded61d1484493a84e6c278e6c30c9fe0ef493ad58b)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        40 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHealthCheckTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosHealthCheckTemplate",
):
    '''A ROS template type:  ``ALIYUN::ALB::HealthCheckTemplate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHealthCheckTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::HealthCheckTemplate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4657500f248e31e1f721f4930a477271079373ff5a28a27620165ee13096387d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cc75f3524903eccd25a919ac04dc30934cb442456c81e622a00af9e26ab9f97f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTemplateId")
    def attr_health_check_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckTemplateId: The ID of the health check template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTemplateId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fbd0d595500b459784afe76ac0eb0b2bdf76e802a8e9ddffb84d1978b065e263)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTemplateName")
    def health_check_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        healthCheckTemplateName: The name of the health check template.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "healthCheckTemplateName"))

    @health_check_template_name.setter
    def health_check_template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd995d9d04f38d9569c1eb918791494b488c63b1c77d5adc95082539a7517a8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTemplateName", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckCodes")
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        healthCheckCodes: The HTTP status code for a successful health check.
        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "healthCheckCodes"))

    @health_check_codes.setter
    def health_check_codes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b79d222379edbbdde371218c1ba0bcdcd40d117c0f85f28812166db042169f2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckCodes", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConnectPort")
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckConnectPort: The port that is used for health checks.
        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckConnectPort"))

    @health_check_connect_port.setter
    def health_check_connect_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e9f76c3d9ce44f8ced792fb57a562d8b60fff3973598d293aa1c98193c1e775)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConnectPort", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckHost")
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckHost: The domain name that is used for health checks.
        Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
        CIDR block meets the following requirements:
        The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
        The domain name contains at least one period (.) but does not start or end with a
        period (.).
        The rightmost domain label can contain only letters, and cannot contain digits or
        hyphens (-).
        Other domain labels cannot start or end with a hyphen (-).
        This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckHost"))

    @health_check_host.setter
    def health_check_host(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__523aa1ea2413891a6a15d4903ce65f88591044316ed4ff25efbebb7c7215eb4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckHost", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckInterval")
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckInterval"))

    @health_check_interval.setter
    def health_check_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aeee79e3269e4054707eb308fa3330c08e56b10d854ca51622fe429569a4e5f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckInterval", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckMethod")
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckMethod: The HTTP method that is used for health checks. Valid values:
        HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
        HTTP health checks.
        POST: By default, gRPC health checks use the POST method.
        GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
        health check result is not affected.
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckMethod"))

    @health_check_method.setter
    def health_check_method(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c36c9c73d32cb3b54d9511f8551e78afb9ac6a020a5ef383882f65a81696eb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckMethod", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckPath")
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        ::

        $ ^ : ' , +. The URL path must start with a forward slash (/).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :Property:

        healthCheckPath: The URL path that is used for health checks.
        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
        signs (#), and ampersands (&). It can also contain the following extended characters:
        _ ; ~ ! ( ) * [ ]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckPath"))

    @health_check_path.setter
    def health_check_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f16e0b43796c341e02d319ad1557141ea01a6881a26f108d35a2a3dbe7e85c6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckPath", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckProtocol")
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used for health checks. Valid values:
        HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
        from a browser and check whether the backend server is healthy. This is the default
        protocol.
        TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
        whether the port of the backend server is available to receive requests.
        GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
        to check whether the backend server is healthy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckProtocol"))

    @health_check_protocol.setter
    def health_check_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b54b903d5ac3ef89ba8b170c39f761076d3aec4a74e8984a2e2031a6b50f1ba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTimeout")
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckTimeout"))

    @health_check_timeout.setter
    def health_check_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__564acd5b1cea327cf712246ee13bec493bd716be79a739f687fa42ec57597663)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="healthyThreshold")
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
        checks before it is declared healthy. In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthyThreshold"))

    @healthy_threshold.setter
    def healthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d84656e7745a997bc2fe6996860950132cd59e177e588aa47dc194d1e531ef9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthyThreshold", value)

    @builtins.property
    @jsii.member(jsii_name="unhealthyThreshold")
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
        before it is declared unhealthy. In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "unhealthyThreshold"))

    @unhealthy_threshold.setter
    def unhealthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__187645284a5b9f8cabbb415a9531f6379f39c6831c8fab6c53d4153709043c73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "unhealthyThreshold", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosHealthCheckTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_template_name": "healthCheckTemplateName",
        "health_check_codes": "healthCheckCodes",
        "health_check_connect_port": "healthCheckConnectPort",
        "health_check_host": "healthCheckHost",
        "health_check_interval": "healthCheckInterval",
        "health_check_method": "healthCheckMethod",
        "health_check_path": "healthCheckPath",
        "health_check_protocol": "healthCheckProtocol",
        "health_check_timeout": "healthCheckTimeout",
        "healthy_threshold": "healthyThreshold",
        "unhealthy_threshold": "unhealthyThreshold",
    },
)
class RosHealthCheckTemplateProps:
    def __init__(
        self,
        *,
        health_check_template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::HealthCheckTemplate``.

        :param health_check_template_name: 
        :param health_check_codes: 
        :param health_check_connect_port: 
        :param health_check_host: 
        :param health_check_interval: 
        :param health_check_method: 
        :param health_check_path: 
        :param health_check_protocol: 
        :param health_check_timeout: 
        :param healthy_threshold: 
        :param unhealthy_threshold: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c9ed03a0d50f66a25736ebce39e663ff72bab2b472d9f4df2c99037bec3a1f7)
            check_type(argname="argument health_check_template_name", value=health_check_template_name, expected_type=type_hints["health_check_template_name"])
            check_type(argname="argument health_check_codes", value=health_check_codes, expected_type=type_hints["health_check_codes"])
            check_type(argname="argument health_check_connect_port", value=health_check_connect_port, expected_type=type_hints["health_check_connect_port"])
            check_type(argname="argument health_check_host", value=health_check_host, expected_type=type_hints["health_check_host"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
            check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
            check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
            check_type(argname="argument health_check_timeout", value=health_check_timeout, expected_type=type_hints["health_check_timeout"])
            check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
            check_type(argname="argument unhealthy_threshold", value=unhealthy_threshold, expected_type=type_hints["unhealthy_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "health_check_template_name": health_check_template_name,
        }
        if health_check_codes is not None:
            self._values["health_check_codes"] = health_check_codes
        if health_check_connect_port is not None:
            self._values["health_check_connect_port"] = health_check_connect_port
        if health_check_host is not None:
            self._values["health_check_host"] = health_check_host
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_method is not None:
            self._values["health_check_method"] = health_check_method
        if health_check_path is not None:
            self._values["health_check_path"] = health_check_path
        if health_check_protocol is not None:
            self._values["health_check_protocol"] = health_check_protocol
        if health_check_timeout is not None:
            self._values["health_check_timeout"] = health_check_timeout
        if healthy_threshold is not None:
            self._values["healthy_threshold"] = healthy_threshold
        if unhealthy_threshold is not None:
            self._values["unhealthy_threshold"] = unhealthy_threshold

    @builtins.property
    def health_check_template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        healthCheckTemplateName: The name of the health check template.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("health_check_template_name")
        assert result is not None, "Required property 'health_check_template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        healthCheckCodes: The HTTP status code for a successful health check.
        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_codes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckConnectPort: The port that is used for health checks.
        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        result = self._values.get("health_check_connect_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckHost: The domain name that is used for health checks.
        Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
        CIDR block meets the following requirements:
        The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
        The domain name contains at least one period (.) but does not start or end with a
        period (.).
        The rightmost domain label can contain only letters, and cannot contain digits or
        hyphens (-).
        Other domain labels cannot start or end with a hyphen (-).
        This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckMethod: The HTTP method that is used for health checks. Valid values:
        HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
        HTTP health checks.
        POST: By default, gRPC health checks use the POST method.
        GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
        health check result is not affected.
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_method")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        ::

        $ ^ : ' , +. The URL path must start with a forward slash (/).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        :Property:

        healthCheckPath: The URL path that is used for health checks.
        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
        signs (#), and ampersands (&). It can also contain the following extended characters:
        _ ; ~ ! ( ) * [ ]
        '''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used for health checks. Valid values:
        HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
        from a browser and check whether the backend server is healthy. This is the default
        protocol.
        TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
        whether the port of the backend server is available to receive requests.
        GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
        to check whether the backend server is healthy.
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
        checks before it is declared healthy. In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
        before it is declared unhealthy. In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("unhealthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHealthCheckTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosListener",
):
    '''A ROS template type:  ``ALIYUN::ALB::Listener``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46def208850b6bca6d4167da68d8afb4f8dc48cf931dd3a4d82d29686d82ed51)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b2339da08527e1a47e1f27697a99b91fa9382aef670c69831361a4710aacea30)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defaultActions")
    def default_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.DefaultActionsProperty"]]]:
        '''
        :Property: defaultActions: The actions of the rule.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.DefaultActionsProperty"]]], jsii.get(self, "defaultActions"))

    @default_actions.setter
    def default_actions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.DefaultActionsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76aafbb14c5d8581c93973881f4ad6cc7e82447890f48569d0fd73e83840ab8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultActions", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2568ad9f38fc56ef696525b579aa83c53d2c272c857605219441644dffb9eab8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port that is used by the ALB instance.
        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cabed9cb22f382f5482e8e531868f5577db0997f2f5c1498dc44f2a6e04e3ec5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerProtocol: The listener protocol.
        Valid values: HTTP, HTTPS, and QUIC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf21a350c747303b7cbb19c9388de8a58cc470dd947319e7d1fa238f3520f15c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the ALB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__103e5b79008e5de9b3bdd1322d284c2cf4474d258aa82bd327e820c2fe61faeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="caCertificates")
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CaCertificatesProperty"]]]]:
        '''
        :Property: caCertificates: List of configured CA certificates for listener.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CaCertificatesProperty"]]]], jsii.get(self, "caCertificates"))

    @ca_certificates.setter
    def ca_certificates(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CaCertificatesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d80663ede3db43afe5bd41c7e54e7aaa4c86d5171bdb7a2833636c29b809fbaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caCertificates", value)

    @builtins.property
    @jsii.member(jsii_name="caEnabled")
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caEnabled: Specifies whether to enable mutual authentication. Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "caEnabled"))

    @ca_enabled.setter
    def ca_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3af35c12f08f313d85720d8c5b7d0f7e5756f65ef37b8b2dafbb721e4d0e6a8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="certificates")
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''
        :Property: certificates: The list of SSL certificates for listener.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]], jsii.get(self, "certificates"))

    @certificates.setter
    def certificates(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__683f4dc06c73ed0e40c9f2955ff4e4d840305bd28e2c447279639161775c09cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificates", value)

    @builtins.property
    @jsii.member(jsii_name="gzipEnabled")
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        Valid values: true and false.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gzipEnabled"))

    @gzip_enabled.setter
    def gzip_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24cb39d8229e585be3c9a55c2fdc736634e3db4a921c447971b28181fe9bbcaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gzipEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="http2Enabled")
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "http2Enabled"))

    @http2_enabled.setter
    def http2_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e51ca7cd19e72fe4f084e3d862fd1526e449926121a14051bb40ef697b5f281d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "http2Enabled", value)

    @builtins.property
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        idleTimeout: The timeout period of idle connections.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cff736dd3aaf743c24c7efbc97e1faaf539283059cd544c747c9c7e4c445552c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "idleTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="listenerDescription")
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        listenerDescription: The description of the listener.
        The description must be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "listenerDescription"))

    @listener_description.setter
    def listener_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0136ebc3ca6c21e824f3dac3a0705a992ab31fab937f4d34c64581ad2455137f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerDescription", value)

    @builtins.property
    @jsii.member(jsii_name="quicConfig")
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.QuicConfigProperty"]]:
        '''
        :Property: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.QuicConfigProperty"]], jsii.get(self, "quicConfig"))

    @quic_config.setter
    def quic_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.QuicConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5267632feb8c2935dda642508e15e47f257fd490497c9bcb00e3a25de31d10a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quicConfig", value)

    @builtins.property
    @jsii.member(jsii_name="requestTimeout")
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        requestTimeout: The timeout period of the request.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "requestTimeout"))

    @request_timeout.setter
    def request_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33eda58a065dad5d38424a3915fb70276b355ea8b3140a25b725e66d0ada0690)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "requestTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyId")
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityPolicyId"))

    @security_policy_id.setter
    def security_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c641f3a4f5242fe19723ad514c4203333e05f720edecfccc93029187dd242be6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="xForwardedForConfig")
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]], jsii.get(self, "xForwardedForConfig"))

    @x_forwarded_for_config.setter
    def x_forwarded_for_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03d44aae0d7870b77b17cfa7b8ee740f294be48470e54514a9ff3439861b9137)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "xForwardedForConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty",
        jsii_struct_bases=[],
        name_mapping={"certificate_id": "certificateId"},
    )
    class CaCertificatesProperty:
        def __init__(
            self,
            *,
            certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param certificate_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e620629185ce5d8af3df7e6ca0c29bf6295c62373efd93cc6e755f92e949fabc)
                check_type(argname="argument certificate_id", value=certificate_id, expected_type=type_hints["certificate_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if certificate_id is not None:
                self._values["certificate_id"] = certificate_id

        @builtins.property
        def certificate_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: certificateId: The CA certificate ID.
            '''
            result = self._values.get("certificate_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CaCertificatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.CertificatesProperty",
        jsii_struct_bases=[],
        name_mapping={"certificate_id": "certificateId"},
    )
    class CertificatesProperty:
        def __init__(
            self,
            *,
            certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param certificate_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dfc09d3674928521e0163c2db695579c62c25d3063c2ef4d8f4591580b0b0f99)
                check_type(argname="argument certificate_id", value=certificate_id, expected_type=type_hints["certificate_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if certificate_id is not None:
                self._values["certificate_id"] = certificate_id

        @builtins.property
        def certificate_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: certificateId: The certificate ID.
            '''
            result = self._values.get("certificate_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CertificatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty",
        jsii_struct_bases=[],
        name_mapping={"forward_group_config": "forwardGroupConfig", "type": "type"},
    )
    class DefaultActionsProperty:
        def __init__(
            self,
            *,
            forward_group_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.ForwardGroupConfigProperty", typing.Dict[builtins.str, typing.Any]]],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param forward_group_config: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__52a0d22ae1a219aeeab584c2e7d963bc397d6bba3806ff57c96f4438ee8ee051)
                check_type(argname="argument forward_group_config", value=forward_group_config, expected_type=type_hints["forward_group_config"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "forward_group_config": forward_group_config,
                "type": type,
            }

        @builtins.property
        def forward_group_config(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ForwardGroupConfigProperty"]:
            '''
            :Property: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            '''
            result = self._values.get("forward_group_config")
            assert result is not None, "Required property 'forward_group_config' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ForwardGroupConfigProperty"], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The action type. The value is set to ForwardGroup.
            It indicates that requests are forwarded to multiple vServer groups.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DefaultActionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"server_group_tuples": "serverGroupTuples"},
    )
    class ForwardGroupConfigProperty:
        def __init__(
            self,
            *,
            server_group_tuples: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.ServerGroupTuplesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param server_group_tuples: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1f7198ebfa91c003c1e3ac04e2362f6149886bcf71189172f91337c85194ffdd)
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_group_tuples": server_group_tuples,
            }

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ServerGroupTuplesProperty"]]]:
            '''
            :Property: serverGroupTuples: The destination server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_tuples")
            assert result is not None, "Required property 'server_group_tuples' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ServerGroupTuplesProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ForwardGroupConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "quic_listener_id": "quicListenerId",
            "quic_upgrade_enabled": "quicUpgradeEnabled",
        },
    )
    class QuicConfigProperty:
        def __init__(
            self,
            *,
            quic_listener_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            quic_upgrade_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param quic_listener_id: 
            :param quic_upgrade_enabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b4e408d7221967ac1ee27f5a306130a559cb63b0c9149cad06479e26627a6971)
                check_type(argname="argument quic_listener_id", value=quic_listener_id, expected_type=type_hints["quic_listener_id"])
                check_type(argname="argument quic_upgrade_enabled", value=quic_upgrade_enabled, expected_type=type_hints["quic_upgrade_enabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if quic_listener_id is not None:
                self._values["quic_listener_id"] = quic_listener_id
            if quic_upgrade_enabled is not None:
                self._values["quic_upgrade_enabled"] = quic_upgrade_enabled

        @builtins.property
        def quic_listener_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            Note The original listener and the QUIC listener must belong to the same ALB instance.
            In addition, make sure that the QUIC listener has not been associated before.
            '''
            result = self._values.get("quic_listener_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def quic_upgrade_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("quic_upgrade_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QuicConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty",
        jsii_struct_bases=[],
        name_mapping={"server_group_id": "serverGroupId"},
    )
    class ServerGroupTuplesProperty:
        def __init__(
            self,
            *,
            server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param server_group_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6245a6d884200083ec6b3d2610fd39ea3708eec9f0b79ab716bc35987187328f)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_group_id": server_group_id,
            }

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverGroupId: The ID of the destination server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_id")
            assert result is not None, "Required property 'server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerGroupTuplesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "x_forwarded_for_client_cert_client_verify_alias": "xForwardedForClientCertClientVerifyAlias",
            "x_forwarded_for_client_cert_client_verify_enabled": "xForwardedForClientCertClientVerifyEnabled",
            "x_forwarded_for_client_cert_fingerprint_alias": "xForwardedForClientCertFingerprintAlias",
            "x_forwarded_for_client_cert_fingerprint_enabled": "xForwardedForClientCertFingerprintEnabled",
            "x_forwarded_for_client_cert_issuer_dn_alias": "xForwardedForClientCertIssuerDnAlias",
            "x_forwarded_for_client_cert_issuer_dn_enabled": "xForwardedForClientCertIssuerDnEnabled",
            "x_forwarded_for_client_cert_subject_dn_alias": "xForwardedForClientCertSubjectDnAlias",
            "x_forwarded_for_client_cert_subject_dn_enabled": "xForwardedForClientCertSubjectDnEnabled",
            "x_forwarded_for_client_source_ips_enabled": "xForwardedForClientSourceIpsEnabled",
            "x_forwarded_for_client_source_ips_trusted": "xForwardedForClientSourceIpsTrusted",
            "x_forwarded_for_client_src_port_enabled": "xForwardedForClientSrcPortEnabled",
            "x_forwarded_for_enabled": "xForwardedForEnabled",
            "x_forwarded_for_proto_enabled": "xForwardedForProtoEnabled",
            "x_forwarded_for_slb_id_enabled": "xForwardedForSlbIdEnabled",
            "x_forwarded_for_slb_port_enabled": "xForwardedForSlbPortEnabled",
        },
    )
    class XForwardedForConfigProperty:
        def __init__(
            self,
            *,
            x_forwarded_for_client_cert_client_verify_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_client_verify_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_fingerprint_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_fingerprint_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_issuer_dn_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_issuer_dn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_subject_dn_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_cert_subject_dn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_source_ips_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_source_ips_trusted: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_src_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_slb_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_slb_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param x_forwarded_for_client_cert_client_verify_alias: 
            :param x_forwarded_for_client_cert_client_verify_enabled: 
            :param x_forwarded_for_client_cert_fingerprint_alias: 
            :param x_forwarded_for_client_cert_fingerprint_enabled: 
            :param x_forwarded_for_client_cert_issuer_dn_alias: 
            :param x_forwarded_for_client_cert_issuer_dn_enabled: 
            :param x_forwarded_for_client_cert_subject_dn_alias: 
            :param x_forwarded_for_client_cert_subject_dn_enabled: 
            :param x_forwarded_for_client_source_ips_enabled: 
            :param x_forwarded_for_client_source_ips_trusted: 
            :param x_forwarded_for_client_src_port_enabled: 
            :param x_forwarded_for_enabled: 
            :param x_forwarded_for_proto_enabled: 
            :param x_forwarded_for_slb_id_enabled: 
            :param x_forwarded_for_slb_port_enabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9dbdfb7b1e359f5693859d09ae379b541ecd442bcf53ca6f2270518db45d3f0e)
                check_type(argname="argument x_forwarded_for_client_cert_client_verify_alias", value=x_forwarded_for_client_cert_client_verify_alias, expected_type=type_hints["x_forwarded_for_client_cert_client_verify_alias"])
                check_type(argname="argument x_forwarded_for_client_cert_client_verify_enabled", value=x_forwarded_for_client_cert_client_verify_enabled, expected_type=type_hints["x_forwarded_for_client_cert_client_verify_enabled"])
                check_type(argname="argument x_forwarded_for_client_cert_fingerprint_alias", value=x_forwarded_for_client_cert_fingerprint_alias, expected_type=type_hints["x_forwarded_for_client_cert_fingerprint_alias"])
                check_type(argname="argument x_forwarded_for_client_cert_fingerprint_enabled", value=x_forwarded_for_client_cert_fingerprint_enabled, expected_type=type_hints["x_forwarded_for_client_cert_fingerprint_enabled"])
                check_type(argname="argument x_forwarded_for_client_cert_issuer_dn_alias", value=x_forwarded_for_client_cert_issuer_dn_alias, expected_type=type_hints["x_forwarded_for_client_cert_issuer_dn_alias"])
                check_type(argname="argument x_forwarded_for_client_cert_issuer_dn_enabled", value=x_forwarded_for_client_cert_issuer_dn_enabled, expected_type=type_hints["x_forwarded_for_client_cert_issuer_dn_enabled"])
                check_type(argname="argument x_forwarded_for_client_cert_subject_dn_alias", value=x_forwarded_for_client_cert_subject_dn_alias, expected_type=type_hints["x_forwarded_for_client_cert_subject_dn_alias"])
                check_type(argname="argument x_forwarded_for_client_cert_subject_dn_enabled", value=x_forwarded_for_client_cert_subject_dn_enabled, expected_type=type_hints["x_forwarded_for_client_cert_subject_dn_enabled"])
                check_type(argname="argument x_forwarded_for_client_source_ips_enabled", value=x_forwarded_for_client_source_ips_enabled, expected_type=type_hints["x_forwarded_for_client_source_ips_enabled"])
                check_type(argname="argument x_forwarded_for_client_source_ips_trusted", value=x_forwarded_for_client_source_ips_trusted, expected_type=type_hints["x_forwarded_for_client_source_ips_trusted"])
                check_type(argname="argument x_forwarded_for_client_src_port_enabled", value=x_forwarded_for_client_src_port_enabled, expected_type=type_hints["x_forwarded_for_client_src_port_enabled"])
                check_type(argname="argument x_forwarded_for_enabled", value=x_forwarded_for_enabled, expected_type=type_hints["x_forwarded_for_enabled"])
                check_type(argname="argument x_forwarded_for_proto_enabled", value=x_forwarded_for_proto_enabled, expected_type=type_hints["x_forwarded_for_proto_enabled"])
                check_type(argname="argument x_forwarded_for_slb_id_enabled", value=x_forwarded_for_slb_id_enabled, expected_type=type_hints["x_forwarded_for_slb_id_enabled"])
                check_type(argname="argument x_forwarded_for_slb_port_enabled", value=x_forwarded_for_slb_port_enabled, expected_type=type_hints["x_forwarded_for_slb_port_enabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if x_forwarded_for_client_cert_client_verify_alias is not None:
                self._values["x_forwarded_for_client_cert_client_verify_alias"] = x_forwarded_for_client_cert_client_verify_alias
            if x_forwarded_for_client_cert_client_verify_enabled is not None:
                self._values["x_forwarded_for_client_cert_client_verify_enabled"] = x_forwarded_for_client_cert_client_verify_enabled
            if x_forwarded_for_client_cert_fingerprint_alias is not None:
                self._values["x_forwarded_for_client_cert_fingerprint_alias"] = x_forwarded_for_client_cert_fingerprint_alias
            if x_forwarded_for_client_cert_fingerprint_enabled is not None:
                self._values["x_forwarded_for_client_cert_fingerprint_enabled"] = x_forwarded_for_client_cert_fingerprint_enabled
            if x_forwarded_for_client_cert_issuer_dn_alias is not None:
                self._values["x_forwarded_for_client_cert_issuer_dn_alias"] = x_forwarded_for_client_cert_issuer_dn_alias
            if x_forwarded_for_client_cert_issuer_dn_enabled is not None:
                self._values["x_forwarded_for_client_cert_issuer_dn_enabled"] = x_forwarded_for_client_cert_issuer_dn_enabled
            if x_forwarded_for_client_cert_subject_dn_alias is not None:
                self._values["x_forwarded_for_client_cert_subject_dn_alias"] = x_forwarded_for_client_cert_subject_dn_alias
            if x_forwarded_for_client_cert_subject_dn_enabled is not None:
                self._values["x_forwarded_for_client_cert_subject_dn_enabled"] = x_forwarded_for_client_cert_subject_dn_enabled
            if x_forwarded_for_client_source_ips_enabled is not None:
                self._values["x_forwarded_for_client_source_ips_enabled"] = x_forwarded_for_client_source_ips_enabled
            if x_forwarded_for_client_source_ips_trusted is not None:
                self._values["x_forwarded_for_client_source_ips_trusted"] = x_forwarded_for_client_source_ips_trusted
            if x_forwarded_for_client_src_port_enabled is not None:
                self._values["x_forwarded_for_client_src_port_enabled"] = x_forwarded_for_client_src_port_enabled
            if x_forwarded_for_enabled is not None:
                self._values["x_forwarded_for_enabled"] = x_forwarded_for_enabled
            if x_forwarded_for_proto_enabled is not None:
                self._values["x_forwarded_for_proto_enabled"] = x_forwarded_for_proto_enabled
            if x_forwarded_for_slb_id_enabled is not None:
                self._values["x_forwarded_for_slb_id_enabled"] = x_forwarded_for_slb_id_enabled
            if x_forwarded_for_slb_port_enabled is not None:
                self._values["x_forwarded_for_slb_port_enabled"] = x_forwarded_for_slb_port_enabled

        @builtins.property
        def x_forwarded_for_client_cert_client_verify_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_client_verify_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_client_verify_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_client_verify_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_fingerprint_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_fingerprint_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_fingerprint_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_fingerprint_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_issuer_dn_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_issuer_dn_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_issuer_dn_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_issuer_dn_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_subject_dn_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_subject_dn_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_subject_dn_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_subject_dn_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_source_ips_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForClientSourceIpsEnabled:
            '''
            result = self._values.get("x_forwarded_for_client_source_ips_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_source_ips_trusted(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForClientSourceIpsTrusted:
            '''
            result = self._values.get("x_forwarded_for_client_source_ips_trusted")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_src_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            Valid values: true and false.
            Default value: false.
            Note HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_src_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            Valid values: true and false.
            Default value: true.
            Note HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_proto_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_proto_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slb_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_slb_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slb_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_slb_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "XForwardedForConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_actions": "defaultActions",
        "listener_port": "listenerPort",
        "listener_protocol": "listenerProtocol",
        "load_balancer_id": "loadBalancerId",
        "ca_certificates": "caCertificates",
        "ca_enabled": "caEnabled",
        "certificates": "certificates",
        "gzip_enabled": "gzipEnabled",
        "http2_enabled": "http2Enabled",
        "idle_timeout": "idleTimeout",
        "listener_description": "listenerDescription",
        "quic_config": "quicConfig",
        "request_timeout": "requestTimeout",
        "security_policy_id": "securityPolicyId",
        "x_forwarded_for_config": "xForwardedForConfig",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        default_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ca_certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        gzip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quic_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Listener``.

        :param default_actions: 
        :param listener_port: 
        :param listener_protocol: 
        :param load_balancer_id: 
        :param ca_certificates: 
        :param ca_enabled: 
        :param certificates: 
        :param gzip_enabled: 
        :param http2_enabled: 
        :param idle_timeout: 
        :param listener_description: 
        :param quic_config: 
        :param request_timeout: 
        :param security_policy_id: 
        :param x_forwarded_for_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a137c5102fdbb7d4682d6abc1913fef4b931053d874979583dbb83fd2e054b4)
            check_type(argname="argument default_actions", value=default_actions, expected_type=type_hints["default_actions"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument ca_certificates", value=ca_certificates, expected_type=type_hints["ca_certificates"])
            check_type(argname="argument ca_enabled", value=ca_enabled, expected_type=type_hints["ca_enabled"])
            check_type(argname="argument certificates", value=certificates, expected_type=type_hints["certificates"])
            check_type(argname="argument gzip_enabled", value=gzip_enabled, expected_type=type_hints["gzip_enabled"])
            check_type(argname="argument http2_enabled", value=http2_enabled, expected_type=type_hints["http2_enabled"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument listener_description", value=listener_description, expected_type=type_hints["listener_description"])
            check_type(argname="argument quic_config", value=quic_config, expected_type=type_hints["quic_config"])
            check_type(argname="argument request_timeout", value=request_timeout, expected_type=type_hints["request_timeout"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument x_forwarded_for_config", value=x_forwarded_for_config, expected_type=type_hints["x_forwarded_for_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_actions": default_actions,
            "listener_port": listener_port,
            "listener_protocol": listener_protocol,
            "load_balancer_id": load_balancer_id,
        }
        if ca_certificates is not None:
            self._values["ca_certificates"] = ca_certificates
        if ca_enabled is not None:
            self._values["ca_enabled"] = ca_enabled
        if certificates is not None:
            self._values["certificates"] = certificates
        if gzip_enabled is not None:
            self._values["gzip_enabled"] = gzip_enabled
        if http2_enabled is not None:
            self._values["http2_enabled"] = http2_enabled
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if listener_description is not None:
            self._values["listener_description"] = listener_description
        if quic_config is not None:
            self._values["quic_config"] = quic_config
        if request_timeout is not None:
            self._values["request_timeout"] = request_timeout
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if x_forwarded_for_config is not None:
            self._values["x_forwarded_for_config"] = x_forwarded_for_config

    @builtins.property
    def default_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.DefaultActionsProperty]]]:
        '''
        :Property: defaultActions: The actions of the rule.
        '''
        result = self._values.get("default_actions")
        assert result is not None, "Required property 'default_actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.DefaultActionsProperty]]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port that is used by the ALB instance.
        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerProtocol: The listener protocol.
        Valid values: HTTP, HTTPS, and QUIC.
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the ALB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CaCertificatesProperty]]]]:
        '''
        :Property: caCertificates: List of configured CA certificates for listener.
        '''
        result = self._values.get("ca_certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CaCertificatesProperty]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caEnabled: Specifies whether to enable mutual authentication. Default false.
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]]:
        '''
        :Property: certificates: The list of SSL certificates for listener.
        '''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]], result)

    @builtins.property
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        Valid values: true and false.
        Default value: true.
        '''
        result = self._values.get("gzip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("http2_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        idleTimeout: The timeout period of idle connections.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        listenerDescription: The description of the listener.
        The description must be 2 to 256 characters in length.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.QuicConfigProperty]]:
        '''
        :Property: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        '''
        result = self._values.get("quic_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.QuicConfigProperty]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        requestTimeout: The timeout period of the request.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer",
):
    '''A ROS template type:  ``ALIYUN::ALB::LoadBalancer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::LoadBalancer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b7d40b376b88fab04a45da03876527b4baceabb8cdb65b1e9d7a2401c90813f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f9e85ba1d7eee5d23775823cb57d836defa03edd9d19f8abc45eac0efb098269)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressType: The type of IP address that the ALB instance uses to provide services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DNSName: The domain name of the ALB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerEdition")
    def attr_load_balancer_edition(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerEdition: The edition of the ALB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerEdition"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the ALB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6621ced7c57418036f606e218bb73a41a5e6bae6aee879bf7126103c876fd64c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__762f49b3928f3493fa9ac180605c6b09c0f502a6e821461aa51fb7ab706b6521)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerBillingConfig")
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"], jsii.get(self, "loadBalancerBillingConfig"))

    @load_balancer_billing_config.setter
    def load_balancer_billing_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01a88319d980e8fefa5be7cda9b8c18fefdbf52b410cd4bcab382f8078a993b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerBillingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerEdition")
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerEdition"))

    @load_balancer_edition.setter
    def load_balancer_edition(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__875b6841b0b27cfcc30b2652fa751e1e368dd653e36be41c6003d52102801e52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerEdition", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        loadBalancerName: The name of the ALB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7519cea464b41dcb4680fe8d2bf47aa2846c3f64672bf6b9d0c4de1bece2b7ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__462eeb73be918a386c649a4ad281b7de5b6666bf9fc368867f59d2b11369136c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68ccf21c1206c1941292fb3447943d9902c0be2e0fca13e9a98f1a8cb5b0a422)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMappings", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogConfig")
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]]:
        '''
        :Property: accessLogConfig:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]], jsii.get(self, "accessLogConfig"))

    @access_log_config.setter
    def access_log_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1490c3f02b276bd5b4e4448cc43f204022430bcdbbd3ea437f6a12635e1278e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogConfig", value)

    @builtins.property
    @jsii.member(jsii_name="addressAllocatedMode")
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressAllocatedMode"))

    @address_allocated_mode.setter
    def address_allocated_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ff323bb88e5a079e3f98438dda0e4693c71cda28c7d30d02a25855152cbb65b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressAllocatedMode", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The protocol version. Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c33a6273f32990b422fb140aefc56ab1cf3d127c90c7a111437e74b629a4c6b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0899f10b26133e33ce1d21e9c4dd769105be6e19bfce25ec2d56962af79bc1fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtectionEnabled")
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtectionEnabled"))

    @deletion_protection_enabled.setter
    def deletion_protection_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6da014dbca1782cdbff2e4582f1369184b888e224830c32899e0d6a273de1e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtectionEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="modificationProtectionConfig")
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''
        :Property: modificationProtectionConfig: The configuration of modification protection.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], jsii.get(self, "modificationProtectionConfig"))

    @modification_protection_config.setter
    def modification_protection_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a498b23225ab444feb1ddfd4d27bf42d6451e246cdcdae338dc34fdab9f132a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modificationProtectionConfig", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__213fa713f5fbd0e985273cf0f19edfc67b259e59fb5bf42d8a38d5679bc7c46a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64579ba146ce0c263b1540d3c62072b314fe0fa4bff60959bc3c87fe5ddcb5df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer.AccessLogConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "log_project": "logProject",
            "log_store": "logStore",
            "enable": "enable",
        },
    )
    class AccessLogConfigProperty:
        def __init__(
            self,
            *,
            log_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            log_store: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param log_project: 
            :param log_store: 
            :param enable: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__70c3292d04d837243604e8010fa62e4bbbae65855e0eaef44eaec6191eb76941)
                check_type(argname="argument log_project", value=log_project, expected_type=type_hints["log_project"])
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "log_project": log_project,
                "log_store": log_store,
            }
            if enable is not None:
                self._values["enable"] = enable

        @builtins.property
        def log_project(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logProject:
            '''
            result = self._values.get("log_project")
            assert result is not None, "Required property 'log_project' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def log_store(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logStore:
            '''
            result = self._values.get("log_store")
            assert result is not None, "Required property 'log_store' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Whether enable access log config. If LogProject and LogStore are configured, default True.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AccessLogConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer.LoadBalancerBillingConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"pay_type": "payType"},
    )
    class LoadBalancerBillingConfigProperty:
        def __init__(
            self,
            *,
            pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param pay_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a130544bd609c91924df5c6c87723300c26f0712b8031351e009dd0c3aaf16c5)
                check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "pay_type": pay_type,
            }

        @builtins.property
        def pay_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
            '''
            result = self._values.get("pay_type")
            assert result is not None, "Required property 'pay_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoadBalancerBillingConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer.ModificationProtectionConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"status": "status", "reason": "reason"},
    )
    class ModificationProtectionConfigProperty:
        def __init__(
            self,
            *,
            status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param status: 
            :param reason: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2f3d334bc66bea7b206e07a289060389ff026414dae247fd226a3a976854ea69)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
                check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "status": status,
            }
            if reason is not None:
                self._values["reason"] = reason

        @builtins.property
        def status(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
            NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
            ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
            '''
            result = self._values.get("status")
            assert result is not None, "Required property 'status' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def reason(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            reason: The reason for modification protection. The reason must be 2 to 128 characters in
            length, and can contain letters, digits, periods (.), underscores (_), and hyphens
            (-). The reason must start with a letter.
            This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
            '''
            result = self._values.get("reason")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ModificationProtectionConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__b98d175086c4151b81fd88971138a86eef429cce5c0b2f18f9393cb2ce3655d3)
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
        jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer.ZoneMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class ZoneMappingsProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1b2ff68fd2266690f03da6345fea31d3e658c6888e3b081ddd2a62d7bdd732f5)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The ID of the zone to which the ALB instance belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_edition": "loadBalancerEdition",
        "load_balancer_name": "loadBalancerName",
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "access_log_config": "accessLogConfig",
        "address_allocated_mode": "addressAllocatedMode",
        "address_ip_version": "addressIpVersion",
        "bandwidth_package_id": "bandwidthPackageId",
        "deletion_protection_enabled": "deletionProtectionEnabled",
        "modification_protection_config": "modificationProtectionConfig",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosLoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_billing_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        load_balancer_edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        access_log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        address_allocated_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::LoadBalancer``.

        :param address_type: 
        :param load_balancer_billing_config: 
        :param load_balancer_edition: 
        :param load_balancer_name: 
        :param vpc_id: 
        :param zone_mappings: 
        :param access_log_config: 
        :param address_allocated_mode: 
        :param address_ip_version: 
        :param bandwidth_package_id: 
        :param deletion_protection_enabled: 
        :param modification_protection_config: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5c3ac4ee5d77b16cd929fedbc28c966fa0222749838ed81c8c5017c16fac832)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_edition", value=load_balancer_edition, expected_type=type_hints["load_balancer_edition"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument access_log_config", value=access_log_config, expected_type=type_hints["access_log_config"])
            check_type(argname="argument address_allocated_mode", value=address_allocated_mode, expected_type=type_hints["address_allocated_mode"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument deletion_protection_enabled", value=deletion_protection_enabled, expected_type=type_hints["deletion_protection_enabled"])
            check_type(argname="argument modification_protection_config", value=modification_protection_config, expected_type=type_hints["modification_protection_config"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_type": address_type,
            "load_balancer_billing_config": load_balancer_billing_config,
            "load_balancer_edition": load_balancer_edition,
            "load_balancer_name": load_balancer_name,
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if access_log_config is not None:
            self._values["access_log_config"] = access_log_config
        if address_allocated_mode is not None:
            self._values["address_allocated_mode"] = address_allocated_mode
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if deletion_protection_enabled is not None:
            self._values["deletion_protection_enabled"] = deletion_protection_enabled
        if modification_protection_config is not None:
            self._values["modification_protection_config"] = modification_protection_config
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        result = self._values.get("load_balancer_billing_config")
        assert result is not None, "Required property 'load_balancer_billing_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty], result)

    @builtins.property
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        result = self._values.get("load_balancer_edition")
        assert result is not None, "Required property 'load_balancer_edition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        loadBalancerName: The name of the ALB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        assert result is not None, "Required property 'load_balancer_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]], result)

    @builtins.property
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.AccessLogConfigProperty]]:
        '''
        :Property: accessLogConfig:
        '''
        result = self._values.get("access_log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.AccessLogConfigProperty]], result)

    @builtins.property
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        result = self._values.get("address_allocated_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The protocol version. Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        '''
        result = self._values.get("deletion_protection_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]]:
        '''
        :Property: modificationProtectionConfig: The configuration of modification protection.
        '''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]], result)

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
    def tags(self) -> typing.Optional[typing.List[RosLoadBalancer.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosLoadBalancer.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosRule",
):
    '''A ROS template type:  ``ALIYUN::ALB::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52cb567a456396e1f2cd2fa641809bb5428e7a7e654e3ddd276b100173d62d11)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3e00369e26fb420d728bf0349001c31065bf5458f8aa1c38741e9930e5332f5f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: The ID of the forwarding rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b816bc5584a7a6c003ccaad03526f6e56e68582a28c73c5da51fc98a60a82458)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29245c073849bf29b685367bbe7b0b816e776f04382a7110c812a68a44b347b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a155a413afde29ecc9b6ee5d0f854f6d5f981ad922408654eafa5198bb84203)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="ruleActions")
    def rule_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionsProperty"]]]:
        '''
        :Property: ruleActions: The actions of the forwarding rule.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionsProperty"]]], jsii.get(self, "ruleActions"))

    @rule_actions.setter
    def rule_actions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b00a504e757395e007c7c55bf17239577feec0820a090500ecfcfcd2b6ab435)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleActions", value)

    @builtins.property
    @jsii.member(jsii_name="ruleConditions")
    def rule_conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleConditionsProperty"]]]:
        '''
        :Property: ruleConditions: The conditions of the forwarding rule.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleConditionsProperty"]]], jsii.get(self, "ruleConditions"))

    @rule_conditions.setter
    def rule_conditions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleConditionsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be305036cd29497c49d59a55f33c022c561caab8992655423d0b5a418a6d1f3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleConditions", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleName: The name of the forwarding rule.
        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e0432130e634df4a5230dda4e677147dc70b47a14cb66c2774e97c5b6e162c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: direction: Rule direction. Valid values: Request or Response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a038119b2c08ce2ac1aa10e5b58b3432ababc0e2f30cc533ec80c281d9bd232e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "direction", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class CookieConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ValuesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__848b1f996cd8c50b85b12f61f51f3471c4eb3ec9fb49eb505d25e2352d011cd1)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ValuesProperty"]]]]:
            '''
            :Property: values: Cookie values
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ValuesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CookieConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "content": "content",
            "content_type": "contentType",
            "http_code": "httpCode",
        },
    )
    class FixedResponseConfigProperty:
        def __init__(
            self,
            *,
            content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            content_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param content: 
            :param content_type: 
            :param http_code: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d8a1ad4e53790e191a385960c37a9bf0b9411c321f84a6308360f17a40567c29)
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
                check_type(argname="argument content_type", value=content_type, expected_type=type_hints["content_type"])
                check_type(argname="argument http_code", value=http_code, expected_type=type_hints["http_code"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if content is not None:
                self._values["content"] = content
            if content_type is not None:
                self._values["content_type"] = content_type
            if http_code is not None:
                self._values["http_code"] = http_code

        @builtins.property
        def content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
            contain only ASCII characters.
            '''
            result = self._values.get("content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def content_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            contentType: The format of the content.
            Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
            '''
            result = self._values.get("content_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FixedResponseConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_group_sticky_session": "serverGroupStickySession",
            "server_group_tuples": "serverGroupTuples",
        },
    )
    class ForwardGroupConfigProperty:
        def __init__(
            self,
            *,
            server_group_sticky_session: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ServerGroupStickySessionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            server_group_tuples: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ServerGroupTuplesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param server_group_sticky_session: 
            :param server_group_tuples: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bb3c64be2562797ef8ec17edf0577f72f7eef3e5c9b54d60d0511f3d47e4df30)
                check_type(argname="argument server_group_sticky_session", value=server_group_sticky_session, expected_type=type_hints["server_group_sticky_session"])
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if server_group_sticky_session is not None:
                self._values["server_group_sticky_session"] = server_group_sticky_session
            if server_group_tuples is not None:
                self._values["server_group_tuples"] = server_group_tuples

        @builtins.property
        def server_group_sticky_session(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ServerGroupStickySessionProperty"]]:
            '''
            :Property: serverGroupStickySession: The list of session persistence of server group.
            '''
            result = self._values.get("server_group_sticky_session")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ServerGroupStickySessionProperty"]], result)

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ServerGroupTuplesProperty"]]]]:
            '''
            :Property: serverGroupTuples: The list of server groups to which requests are forwarded.
            '''
            result = self._values.get("server_group_tuples")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ServerGroupTuplesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ForwardGroupConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "values": "values"},
    )
    class HeaderConfigProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param key: 
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9fad7eb78f74262786e5309ca4610ed9c032a61233eb9156bbbf3cae6e6703cc)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            key: The key of the header.
            The key must be 1 to 40 characters in length
            It can contain letters, digits, hyphens (-), and underscores (_).
            Cookie or Host is not supported.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            values: The values of the header. The header values within a forwarding rule must be unique.
            The value must be 1 to 128 characters in length.
            It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
            The value cannot start or end with a space character.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeaderConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.HostConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class HostConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9d2026578f80525e1563f48b73f04e769ec28f9da502de5aedbb1211a9a6cd3c)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
            The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            The host name must contain at least one period (.). It cannot start or end with a period (.).
            The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
            The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value", "value_type": "valueType"},
    )
    class InsertHeaderConfigProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            :param value_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7fe2e145d0891a7208b6424c700d13f9061607ef4b51109c5addcf1b9c519b28)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument value_type", value=value_type, expected_type=type_hints["value_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value
            if value_type is not None:
                self._values["value_type"] = value_type

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            key: The key of the response header.
            The key must be 1 to 40 characters in length.
            It can contain letters, digits, underscores (_), and hyphens (-).
            The header names specified by InsertHeaderConfig must be unique.
            Note You cannot set the name of the header to one of the following values (case-insensitive):
            slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            value: The content of the header to be inserted.
            If ValueType is set to SystemDefined, you can set the value to:
            ClientSrcPort: the port of the client.
            ClientSrcIp: the IP address of the client.
            Protocol: the request protocol (HTTP or HTTPS)
            SLBId: the ID of the ALB instance.
            SLBPort: the listening port of the ALB instance.
            If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?).
            It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
            If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters
            in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            valueType: The type of the content. Valid values:
            UserDefined: user-defined.
            ReferenceHeader: references one of the request headers.
            SystemDefined: system-defined.
            '''
            result = self._values.get("value_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InsertHeaderConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class MethodConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__faad53c00786e1d13ea52885fd6e9289e3ab6203c3faa22bb2327111dd3bce4c)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: values: The request method.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MethodConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"server_group_tuples": "serverGroupTuples"},
    )
    class MirrorGroupConfigProperty:
        def __init__(
            self,
            *,
            server_group_tuples: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.MirrorGroupConfigServerGroupTuplesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param server_group_tuples: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__09ad2fe217194cda5619798e49e66ea214d776bca184a9b966e434c47393e154)
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_group_tuples": server_group_tuples,
            }

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MirrorGroupConfigServerGroupTuplesProperty"]]]:
            '''
            :Property: serverGroupTuples:
            '''
            result = self._values.get("server_group_tuples")
            assert result is not None, "Required property 'server_group_tuples' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MirrorGroupConfigServerGroupTuplesProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MirrorGroupConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.MirrorGroupConfigServerGroupTuplesProperty",
        jsii_struct_bases=[],
        name_mapping={"server_group_id": "serverGroupId"},
    )
    class MirrorGroupConfigServerGroupTuplesProperty:
        def __init__(
            self,
            *,
            server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param server_group_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__48cbee8532bed6fd83358ad59af25ae04ff57eac65ae61b83c8e86fcd6e9f184)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_group_id": server_group_id,
            }

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverGroupId: The ID of server group.
            '''
            result = self._values.get("server_group_id")
            assert result is not None, "Required property 'server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MirrorGroupConfigServerGroupTuplesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.PathConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class PathConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ab0f7f03ef6949ec8f4eb8091b365f1d0ad246458a14ae9f48bb1fadc7f6f2c3)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: values: The path of the URL.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PathConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class QueryStringConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.QueryStringConfigValuesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d40ee6a8fd562c1ef796748f1297e0e8c38d6029324bd1e278269b5c80eb58aa)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.QueryStringConfigValuesProperty"]]]]:
            '''
            :Property: values: The list of query strings.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.QueryStringConfigValuesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryStringConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class QueryStringConfigValuesProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__43d9af0e218d29fd4bab9d8c17ebd3c22a61780d5fb0b1cbce55eed419e0b5d0)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            key: They key of the query string.
            The key must be 1 to 100 characters in length
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            The key cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            value: The value of the cookie.
            The key must be 1 to 128 characters in length.
            It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \\ | < > &.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryStringConfigValuesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "host": "host",
            "http_code": "httpCode",
            "path": "path",
            "port": "port",
            "protocol": "protocol",
            "query": "query",
        },
    )
    class RedirectConfigProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            query: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param http_code: 
            :param path: 
            :param port: 
            :param protocol: 
            :param query: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5d4b4223d9816b79e4f4c93a6da59996b16a4ea4495079daf7f588608dcc814e)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_code", value=http_code, expected_type=type_hints["http_code"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if http_code is not None:
                self._values["http_code"] = http_code
            if path is not None:
                self._values["path"] = path
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol
            if query is not None:
                self._values["query"] = query

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            host: The host name to which requests are redirected. Valid values:
            ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            value.
            To customize the host name, make sure that the following requirements are met:
            The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            The host name must contain at least one period (.). It cannot start or end with a
            period (.).
            The rightmost field can contain only letters and wildcard characters. It cannot contain
            digits or hyphens (-).
            The domain labels cannot start or end with hyphens (-). You can include an asterisk
            (*) and question mark (?) anywhere in a domain label.
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            ::

            :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            The value is case-sensitive.
            :Property:

            path: The path of the URL to which requests are redirected. Valid values:
            Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            or more of the preceding variables in each request. You can also combine them with
            the following characters.
            To customize the path, make sure that the following requirements are met:
            The path must be 1 to 128 characters in length.
            It must start with a forward slash (/). The path can contain letters, digits, and
            the following special characters: $ - _ .+ / & ~
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port to which requests are redirected.
            ${port} (default): If you set the value to ${port}, you cannot add other characters to the
            value.
            You can also enter a port number. Valid values: 1 to 63335.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            protocol: The redirect protocol.
            ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
            the value.
            You can also set the value to HTTP or HTTPS.
            Note HTTPS listeners do not support HTTPS to HTTP redirection.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def query(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            query: The query string of the URL to which requests are redirected.
            Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            or more of the preceding variables in each request. You can also combine them with
            the following characters.
            To customize the query string, make sure that the following requirements are met:
            The value must be 1 to 128 characters in length.
            It can contain printable characters. It cannot contain space characters or the following
            special characters: # [ ] { } \\ | < > &. It cannot contain uppercase letters.
            '''
            result = self._values.get("query")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RedirectConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.RemoveHeaderConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key"},
    )
    class RemoveHeaderConfigProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f8b4c7a93dd8d7321767466e764fcd0b90ae52a750c61adff39b5f33f9733bf9)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            key: The key of the response header.
            The key must be 1 to 40 characters in length.
            It can contain letters, digits, underscores (_), and hyphens (-).
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RemoveHeaderConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"host": "host", "path": "path", "query": "query"},
    )
    class RewriteConfigProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            query: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param path: 
            :param query: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0e19574b8a86cc2582da551418e7d808b57de11cef123fd374fc0882d45c7199)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if path is not None:
                self._values["path"] = path
            if query is not None:
                self._values["query"] = query

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            host: Destination host address of internal jump. Valid values:
            ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            value.
            To customize the host name, make sure that the following requirements are met:
            The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            The host name must contain at least one period (.). It cannot start or end with a
            period (.).
            The rightmost field can contain only letters and wildcard characters. It cannot contain
            digits or hyphens (-).
            The domain labels cannot start or end with hyphens (-). You can include an asterisk
            (*) and question mark (?) anywhere in a domain label.
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            ::

            :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            The value is case-sensitive.
            :Property:

            path: The path to jump. Valid values:
            Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            or more of the preceding variables in each request. You can also combine them with
            the following characters.
            To customize the path, make sure that the following requirements are met:
            The path must be 1 to 128 characters in length.
            It must start with a forward slash (/). The path can contain letters, digits, and
            the following special characters: $ - _ .+ / & ~
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def query(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            query: Query string for internal jump.
            Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            or more of the preceding variables in each request. You can also combine them with
            the following characters.
            To customize the query string, make sure that the following requirements are met:
            The value must be 1 to 128 characters in length.
            It can contain printable characters. It cannot contain space characters or the following
            special characters: # [ ] { } \\ | < > &. It cannot contain uppercase letters.
            '''
            result = self._values.get("query")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RewriteConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "order": "order",
            "type": "type",
            "fixed_response_config": "fixedResponseConfig",
            "forward_group_config": "forwardGroupConfig",
            "insert_header_config": "insertHeaderConfig",
            "redirect_config": "redirectConfig",
            "remove_header_config": "removeHeaderConfig",
            "rewrite_config": "rewriteConfig",
            "traffic_limit_config": "trafficLimitConfig",
            "traffic_mirror_config": "trafficMirrorConfig",
        },
    )
    class RuleActionsProperty:
        def __init__(
            self,
            *,
            order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            fixed_response_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.FixedResponseConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            forward_group_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ForwardGroupConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            insert_header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.InsertHeaderConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            redirect_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.RedirectConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            remove_header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.RemoveHeaderConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            rewrite_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.RewriteConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            traffic_limit_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.TrafficLimitConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            traffic_mirror_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.TrafficMirrorConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param order: 
            :param type: 
            :param fixed_response_config: 
            :param forward_group_config: 
            :param insert_header_config: 
            :param redirect_config: 
            :param remove_header_config: 
            :param rewrite_config: 
            :param traffic_limit_config: 
            :param traffic_mirror_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ceabec945354910ea3bf02ff5638552230b6ef5115091d8035fa2aa08254b52f)
                check_type(argname="argument order", value=order, expected_type=type_hints["order"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument fixed_response_config", value=fixed_response_config, expected_type=type_hints["fixed_response_config"])
                check_type(argname="argument forward_group_config", value=forward_group_config, expected_type=type_hints["forward_group_config"])
                check_type(argname="argument insert_header_config", value=insert_header_config, expected_type=type_hints["insert_header_config"])
                check_type(argname="argument redirect_config", value=redirect_config, expected_type=type_hints["redirect_config"])
                check_type(argname="argument remove_header_config", value=remove_header_config, expected_type=type_hints["remove_header_config"])
                check_type(argname="argument rewrite_config", value=rewrite_config, expected_type=type_hints["rewrite_config"])
                check_type(argname="argument traffic_limit_config", value=traffic_limit_config, expected_type=type_hints["traffic_limit_config"])
                check_type(argname="argument traffic_mirror_config", value=traffic_mirror_config, expected_type=type_hints["traffic_mirror_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "order": order,
                "type": type,
            }
            if fixed_response_config is not None:
                self._values["fixed_response_config"] = fixed_response_config
            if forward_group_config is not None:
                self._values["forward_group_config"] = forward_group_config
            if insert_header_config is not None:
                self._values["insert_header_config"] = insert_header_config
            if redirect_config is not None:
                self._values["redirect_config"] = redirect_config
            if remove_header_config is not None:
                self._values["remove_header_config"] = remove_header_config
            if rewrite_config is not None:
                self._values["rewrite_config"] = rewrite_config
            if traffic_limit_config is not None:
                self._values["traffic_limit_config"] = traffic_limit_config
            if traffic_mirror_config is not None:
                self._values["traffic_mirror_config"] = traffic_mirror_config

        @builtins.property
        def order(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
            rule are applied in descending order of priority. This parameter is required. The
            priority of each action within a forwarding rule is unique.
            '''
            result = self._values.get("order")
            assert result is not None, "Required property 'order' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The action. Valid values:
            ForwardGroup: forwards a request to multiple vServer groups.
            Redirect: redirects a request.
            FixedResponse: returns a fixed response.
            Rewrite: rewrites a request.
            InsertHeader: adds a header to a request.
            The type of the action. You can specify the last action and the actions
            that you want to perform before the last action:
            FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action.
            You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
            ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions.
            To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def fixed_response_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.FixedResponseConfigProperty"]]:
            '''
            :Property: fixedResponseConfig: The configuration of the fixed response.
            '''
            result = self._values.get("fixed_response_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.FixedResponseConfigProperty"]], result)

        @builtins.property
        def forward_group_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ForwardGroupConfigProperty"]]:
            '''
            :Property: forwardGroupConfig: The configuration of the server group.
            '''
            result = self._values.get("forward_group_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ForwardGroupConfigProperty"]], result)

        @builtins.property
        def insert_header_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.InsertHeaderConfigProperty"]]:
            '''
            :Property: insertHeaderConfig: The configuration of the header to be inserted.
            '''
            result = self._values.get("insert_header_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.InsertHeaderConfigProperty"]], result)

        @builtins.property
        def redirect_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RedirectConfigProperty"]]:
            '''
            :Property: redirectConfig: The configuration of the external redirect action.
            '''
            result = self._values.get("redirect_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RedirectConfigProperty"]], result)

        @builtins.property
        def remove_header_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RemoveHeaderConfigProperty"]]:
            '''
            :Property: removeHeaderConfig: The configuration of the header to be removed.
            '''
            result = self._values.get("remove_header_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RemoveHeaderConfigProperty"]], result)

        @builtins.property
        def rewrite_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RewriteConfigProperty"]]:
            '''
            :Property: rewriteConfig: The configuration of the internal redirect action.
            '''
            result = self._values.get("rewrite_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RewriteConfigProperty"]], result)

        @builtins.property
        def traffic_limit_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TrafficLimitConfigProperty"]]:
            '''
            :Property: trafficLimitConfig: The configuration of the traffic limit.
            '''
            result = self._values.get("traffic_limit_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TrafficLimitConfigProperty"]], result)

        @builtins.property
        def traffic_mirror_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TrafficMirrorConfigProperty"]]:
            '''
            :Property: trafficMirrorConfig: The configuration of the traffic mirror.
            '''
            result = self._values.get("traffic_mirror_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TrafficMirrorConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleActionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "cookie_config": "cookieConfig",
            "header_config": "headerConfig",
            "host_config": "hostConfig",
            "method_config": "methodConfig",
            "path_config": "pathConfig",
            "query_string_config": "queryStringConfig",
            "source_ip_config": "sourceIpConfig",
        },
    )
    class RuleConditionsProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cookie_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.CookieConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.HeaderConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            host_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.HostConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            method_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.MethodConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            path_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.PathConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            query_string_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.QueryStringConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            source_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.SourceIpConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param type: 
            :param cookie_config: 
            :param header_config: 
            :param host_config: 
            :param method_config: 
            :param path_config: 
            :param query_string_config: 
            :param source_ip_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__61ea90522df75b215b9c8b5ffb00eb960238de2c09eeac8d975b7ac61937e110)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument cookie_config", value=cookie_config, expected_type=type_hints["cookie_config"])
                check_type(argname="argument header_config", value=header_config, expected_type=type_hints["header_config"])
                check_type(argname="argument host_config", value=host_config, expected_type=type_hints["host_config"])
                check_type(argname="argument method_config", value=method_config, expected_type=type_hints["method_config"])
                check_type(argname="argument path_config", value=path_config, expected_type=type_hints["path_config"])
                check_type(argname="argument query_string_config", value=query_string_config, expected_type=type_hints["query_string_config"])
                check_type(argname="argument source_ip_config", value=source_ip_config, expected_type=type_hints["source_ip_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }
            if cookie_config is not None:
                self._values["cookie_config"] = cookie_config
            if header_config is not None:
                self._values["header_config"] = header_config
            if host_config is not None:
                self._values["host_config"] = host_config
            if method_config is not None:
                self._values["method_config"] = method_config
            if path_config is not None:
                self._values["path_config"] = path_config
            if query_string_config is not None:
                self._values["query_string_config"] = query_string_config
            if source_ip_config is not None:
                self._values["source_ip_config"] = source_ip_config

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The type of the forwarding rule. Valid values:
            Host: Requests are forwarded based on hosts.
            Path: Requests are forwarded based on paths.
            Header: Requests are forwarded based on HTTP headers.
            QueryString: Requests are forwarded based on query strings.
            Method: Request are forwarded based on request methods.
            Cookie: Request are forwarded based on cookies.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cookie_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.CookieConfigProperty"]]:
            '''
            :Property: cookieConfig: The configuration of the cookie.
            '''
            result = self._values.get("cookie_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.CookieConfigProperty"]], result)

        @builtins.property
        def header_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.HeaderConfigProperty"]]:
            '''
            :Property: headerConfig: The configuration of the header.
            '''
            result = self._values.get("header_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.HeaderConfigProperty"]], result)

        @builtins.property
        def host_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.HostConfigProperty"]]:
            '''
            :Property: hostConfig: The configuration of the host.
            '''
            result = self._values.get("host_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.HostConfigProperty"]], result)

        @builtins.property
        def method_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MethodConfigProperty"]]:
            '''
            :Property: methodConfig: The configuration of the request method.
            '''
            result = self._values.get("method_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MethodConfigProperty"]], result)

        @builtins.property
        def path_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.PathConfigProperty"]]:
            '''
            :Property: pathConfig: The configuration of the URL.
            '''
            result = self._values.get("path_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.PathConfigProperty"]], result)

        @builtins.property
        def query_string_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.QueryStringConfigProperty"]]:
            '''
            :Property: queryStringConfig: The configuration of the query string.
            '''
            result = self._values.get("query_string_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.QueryStringConfigProperty"]], result)

        @builtins.property
        def source_ip_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.SourceIpConfigProperty"]]:
            '''
            :Property: sourceIpConfig: Service traffic matching based on source IP. Required and valid when Type is SourceIP.
            '''
            result = self._values.get("source_ip_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.SourceIpConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleConditionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.ServerGroupStickySessionProperty",
        jsii_struct_bases=[],
        name_mapping={"enabled": "enabled", "timeout": "timeout"},
    )
    class ServerGroupStickySessionProperty:
        def __init__(
            self,
            *,
            enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enabled: 
            :param timeout: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b7e4b149bf75745cd8e98ca78f16b72a2d2e4c95aafa6390eb4ae88eee54cfc6)
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enabled is not None:
                self._values["enabled"] = enabled
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enabled: Specifies whether to enable session persistence. Valid values:
            true: enables session persistence.
            false (default): disables session persistence.
            '''
            result = self._values.get("enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeout: The timeout period. Unit: seconds. Default value: 1000.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerGroupStickySessionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty",
        jsii_struct_bases=[],
        name_mapping={"server_group_id": "serverGroupId", "weight": "weight"},
    )
    class ServerGroupTuplesProperty:
        def __init__(
            self,
            *,
            server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_group_id: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1ebfc7575dfc7bfd3321fb533e27057c500de2aa50cfce64f979a99ec01db066)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if server_group_id is not None:
                self._values["server_group_id"] = server_group_id
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverGroupId: The server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of the server group. A larger value specifies a higher weight. A server group with a higher weight receives more requests. Default value: 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerGroupTuplesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.SourceIpConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"values": "values"},
    )
    class SourceIpConfigProperty:
        def __init__(
            self,
            *,
            values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__83a97b82016e7e63e96e3be2cd80da2d3ff493e867106e712bf194582dacc3f7)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            values: The IP addresses or CIDR blocks.
            You can specify at most five values for SourceIp.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceIpConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.TrafficLimitConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"qps": "qps", "per_ip_qps": "perIpQps"},
    )
    class TrafficLimitConfigProperty:
        def __init__(
            self,
            *,
            qps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            per_ip_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param qps: 
            :param per_ip_qps: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0c92cc2cc392088c39f931096097b8fb21829c4104296b71da4eb272de752ed5)
                check_type(argname="argument qps", value=qps, expected_type=type_hints["qps"])
                check_type(argname="argument per_ip_qps", value=per_ip_qps, expected_type=type_hints["per_ip_qps"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "qps": qps,
            }
            if per_ip_qps is not None:
                self._values["per_ip_qps"] = per_ip_qps

        @builtins.property
        def qps(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: qps: Queries per second (QPS).
            '''
            result = self._values.get("qps")
            assert result is not None, "Required property 'qps' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def per_ip_qps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            perIpQps: QPS per IP address.
            Note If both QPS and PerIpQps are set, make sure that the PerIpQps is smaller than the QPS.
            '''
            result = self._values.get("per_ip_qps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TrafficLimitConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.TrafficMirrorConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mirror_group_config": "mirrorGroupConfig",
            "target_type": "targetType",
        },
    )
    class TrafficMirrorConfigProperty:
        def __init__(
            self,
            *,
            mirror_group_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.MirrorGroupConfigProperty", typing.Dict[builtins.str, typing.Any]]],
            target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param mirror_group_config: 
            :param target_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3f3857fa7090b60ff587ebee23e7f335dc896741778012e4f8a39bd536cf6c52)
                check_type(argname="argument mirror_group_config", value=mirror_group_config, expected_type=type_hints["mirror_group_config"])
                check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "mirror_group_config": mirror_group_config,
                "target_type": target_type,
            }

        @builtins.property
        def mirror_group_config(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MirrorGroupConfigProperty"]:
            '''
            :Property: mirrorGroupConfig: Traffic mirroring to server groups.
            '''
            result = self._values.get("mirror_group_config")
            assert result is not None, "Required property 'mirror_group_config' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.MirrorGroupConfigProperty"], result)

        @builtins.property
        def target_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            targetType: The type of destination to which network traffic is mirrored. Valid values:
            ForwardGroupMirror: a server group
            SlsMirror: Log Service
            '''
            result = self._values.get("target_type")
            assert result is not None, "Required property 'target_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TrafficMirrorConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosRule.ValuesProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class ValuesProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1480792c54a153a8a305e79a6bc6ee0a70d6179c3d1d24613cf676745a8183cb)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            key: The key of the cookie.
            The key must be 1 to 100 characters in length
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            It cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            value: The value of the cookie.
            The key must be 1 to 100 characters in length.
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            It cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ValuesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_id": "listenerId",
        "priority": "priority",
        "rule_actions": "ruleActions",
        "rule_conditions": "ruleConditions",
        "rule_name": "ruleName",
        "direction": "direction",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rule_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        rule_conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Rule``.

        :param listener_id: 
        :param priority: 
        :param rule_actions: 
        :param rule_conditions: 
        :param rule_name: 
        :param direction: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17995b7fbc1254c2e86190f8fd4aaf9d25fcc70a03bab1f1dd0b4785da88f673)
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rule_actions", value=rule_actions, expected_type=type_hints["rule_actions"])
            check_type(argname="argument rule_conditions", value=rule_conditions, expected_type=type_hints["rule_conditions"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_id": listener_id,
            "priority": priority,
            "rule_actions": rule_actions,
            "rule_conditions": rule_conditions,
            "rule_name": rule_name,
        }
        if direction is not None:
            self._values["direction"] = direction

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        instance.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionsProperty]]]:
        '''
        :Property: ruleActions: The actions of the forwarding rule.
        '''
        result = self._values.get("rule_actions")
        assert result is not None, "Required property 'rule_actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionsProperty]]], result)

    @builtins.property
    def rule_conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleConditionsProperty]]]:
        '''
        :Property: ruleConditions: The conditions of the forwarding rule.
        '''
        result = self._values.get("rule_conditions")
        assert result is not None, "Required property 'rule_conditions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleConditionsProperty]]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleName: The name of the forwarding rule.
        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: direction: Rule direction. Valid values: Request or Response.
        '''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosSecurityPolicy",
):
    '''A ROS template type:  ``ALIYUN::ALB::SecurityPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::SecurityPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87b7788148144a26d7b9864929cc78341075e80d67041b67b1f5304103d60424)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7c0fc401796f200327a9775a5dd0e6e8a288d5b628c7d03c5397b539fed6984b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityPolicyId: The ID of the security policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ciphers")
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        ciphers: The supported cipher suites, which are determined by the TLS protocol version.
        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "ciphers"))

    @ciphers.setter
    def ciphers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0de2d547f0aada46d6f987a06b98f3ce8dd7345ce34b196b1f4e87d72eca386)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ciphers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e15dcd63dc53951067c48f6a5af33ed2ff932242a02a747997b005b6ce956a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyName")
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityPolicyName"))

    @security_policy_name.setter
    def security_policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5979c5ceb495570f8e3f98d6a1cda4abbc1906a074a15eb638a68803794f0747)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="tlsVersions")
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "tlsVersions"))

    @tls_versions.setter
    def tls_versions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ace1eb9f7fe6d611dd57c59d49d129d63f90a009a21ee0c6bc0f1ef180c6742e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsVersions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__1a6c9f89806f0faf51a9289d1134f3fa18297480ccfd60922068d665a1b44d0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RosSecurityPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "ciphers": "ciphers",
        "security_policy_name": "securityPolicyName",
        "tls_versions": "tlsVersions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosSecurityPolicyProps:
    def __init__(
        self,
        *,
        ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        security_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::SecurityPolicy``.

        :param ciphers: 
        :param security_policy_name: 
        :param tls_versions: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34680a541c73ddde3ec3223592e0e842f2dc4c56276b5368ace94bc76a3b5d3a)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ciphers": ciphers,
            "security_policy_name": security_policy_name,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        ciphers: The supported cipher suites, which are determined by the TLS protocol version.
        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("security_policy_name")
        assert result is not None, "Required property 'security_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        return "RosSecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosServerGroup",
):
    '''A ROS template type:  ``ALIYUN::ALB::ServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::ServerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0878fe1304963064474987cbe6db35061283ff6ec94f8987969ee2ebd39d3b0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__33954631941902074fac44c107b58af6e364e0b9c0e47a402bf7412a37342f36)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerGroupId: The ID of the server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3507ee43e633dcba1901841f2d6e8a96a435cef22aede656f25626b59d6ad4f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]:
        '''
        :Property: healthCheckConfig: The configuration of health checks.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"], jsii.get(self, "healthCheckConfig"))

    @health_check_config.setter
    def health_check_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9b0fb6a3c78036d263d86a5f5d522452431e7888c9b0a120955396fe7c63a5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupName")
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverGroupName"))

    @server_group_name.setter
    def server_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__498fb4d2d28bd75757d714b71b432dfcebb532444232acef17da41f2883c59de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eeeca9cff8de648726ef8bca1a058c134f43dadaf0622866d3517cf1c204cdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protocol: The server protocol. Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc092d3984f1147df8d23c2224d4dec83ff9004341888d07b3c7f88b31267aa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__a11f36631e62c92b625892ed7099c62d6019a59bf005b9190cf34b6297208f9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        Wrr: Backend servers that have higher weights receive more requests than those that have
        lower weights. This is the default value.
        Wlc: Requests are distributed based on the weight and load of each backend server. The
        load refers to the number of connections to a backend server. If multiple backend
        servers have the same weight, requests are routed to the backend server with the least
        connections.
        Sch: specifies consistent hashing that is based on source IP addresses.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__314433d47fc73649f689c2f043c479a0ff091e4575d234e4055af375e930941c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupType")
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        serverGroupType: The type of the server group. Valid values:
        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        instances, elastic network interfaces (ENIs), and elastic container instances to this
        type of server group. This is the default value.
        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        of server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serverGroupType"))

    @server_group_type.setter
    def server_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2f87126d0d52a94855ec91683d95b87f225986780ede8d3516bd56361284600)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92dd12c7886daa183d6931efb8c3cf114b2abea61f605af23f9eb749ee79ff3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="stickySessionConfig")
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.StickySessionConfigProperty"]]:
        '''
        :Property:

        stickySessionConfig: The configuration of session persistence.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.StickySessionConfigProperty"]], jsii.get(self, "stickySessionConfig"))

    @sticky_session_config.setter
    def sticky_session_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.StickySessionConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3127be5233e9b1019a2fcebdb49eae88be5927848eb5186d0b326a863bc4ffc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stickySessionConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosServerGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosServerGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosServerGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__852aa7dc0f0c42bf64f51ffa626c30052ea520a5cb8e92d72fc46ecfc63624dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "health_check_enabled": "healthCheckEnabled",
            "health_check_codes": "healthCheckCodes",
            "health_check_connect_port": "healthCheckConnectPort",
            "health_check_host": "healthCheckHost",
            "health_check_http_version": "healthCheckHttpVersion",
            "health_check_interval": "healthCheckInterval",
            "health_check_method": "healthCheckMethod",
            "health_check_path": "healthCheckPath",
            "health_check_protocol": "healthCheckProtocol",
            "health_check_timeout": "healthCheckTimeout",
            "healthy_threshold": "healthyThreshold",
            "unhealthy_threshold": "unhealthyThreshold",
        },
    )
    class HealthCheckConfigProperty:
        def __init__(
            self,
            *,
            health_check_enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_http_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param health_check_enabled: 
            :param health_check_codes: 
            :param health_check_connect_port: 
            :param health_check_host: 
            :param health_check_http_version: 
            :param health_check_interval: 
            :param health_check_method: 
            :param health_check_path: 
            :param health_check_protocol: 
            :param health_check_timeout: 
            :param healthy_threshold: 
            :param unhealthy_threshold: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ebd816eaac0e479f3e6e966b330dc50510ee7bd76ed5c4654795f837f4d16bf1)
                check_type(argname="argument health_check_enabled", value=health_check_enabled, expected_type=type_hints["health_check_enabled"])
                check_type(argname="argument health_check_codes", value=health_check_codes, expected_type=type_hints["health_check_codes"])
                check_type(argname="argument health_check_connect_port", value=health_check_connect_port, expected_type=type_hints["health_check_connect_port"])
                check_type(argname="argument health_check_host", value=health_check_host, expected_type=type_hints["health_check_host"])
                check_type(argname="argument health_check_http_version", value=health_check_http_version, expected_type=type_hints["health_check_http_version"])
                check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
                check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
                check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
                check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
                check_type(argname="argument health_check_timeout", value=health_check_timeout, expected_type=type_hints["health_check_timeout"])
                check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
                check_type(argname="argument unhealthy_threshold", value=unhealthy_threshold, expected_type=type_hints["unhealthy_threshold"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "health_check_enabled": health_check_enabled,
            }
            if health_check_codes is not None:
                self._values["health_check_codes"] = health_check_codes
            if health_check_connect_port is not None:
                self._values["health_check_connect_port"] = health_check_connect_port
            if health_check_host is not None:
                self._values["health_check_host"] = health_check_host
            if health_check_http_version is not None:
                self._values["health_check_http_version"] = health_check_http_version
            if health_check_interval is not None:
                self._values["health_check_interval"] = health_check_interval
            if health_check_method is not None:
                self._values["health_check_method"] = health_check_method
            if health_check_path is not None:
                self._values["health_check_path"] = health_check_path
            if health_check_protocol is not None:
                self._values["health_check_protocol"] = health_check_protocol
            if health_check_timeout is not None:
                self._values["health_check_timeout"] = health_check_timeout
            if healthy_threshold is not None:
                self._values["healthy_threshold"] = healthy_threshold
            if unhealthy_threshold is not None:
                self._values["unhealthy_threshold"] = unhealthy_threshold

        @builtins.property
        def health_check_enabled(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
            true: enables the feature.
            false: disables the feature.
            '''
            result = self._values.get("health_check_enabled")
            assert result is not None, "Required property 'health_check_enabled' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def health_check_codes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
            codes can be specified as a list.
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
            '''
            result = self._values.get("health_check_codes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def health_check_connect_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckConnectPort: The backend port that is used for health checks.
            Valid values: 0 to 65535.
            Default value: 0. This value indicates that the port on a backend server is used for health checks.
            '''
            result = self._values.get("health_check_connect_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
            requirements:
            The domain name must be 1 to 80 characters in length.
            The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
            The domain name must contain at least one period (.),and cannot start or end with
            a period (.).
            The rightmost field can contain only letters, and cannot contain digits or hyphens
            (-).
            Other fields cannot start or end with a hyphen (-).
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            '''
            result = self._values.get("health_check_host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_http_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            '''
            result = self._values.get("health_check_http_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
            Valid values: 1 to 50.
            Default value: 2.
            '''
            result = self._values.get("health_check_interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
            '''
            result = self._values.get("health_check_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            ::

            $ ^ : ' , +.
            The URL must start with a forward slash (/).
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            :Property:

            healthCheckPath: The URL that is used for health checks.
            The URL must be 1 to 80 characters in length, and can contain letters, digits, and
            the following special characters:

            - / .% ?# & =.
            It can also contain the following extended characters:
            _ ; ~ ! ( )* [ ]
            '''
            result = self._values.get("health_check_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
            '''
            result = self._values.get("health_check_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
            the specified timeout period, the backend server fails the health check. Unit: seconds.
            Valid values: 1 to 300.
            Default value: 5.
            Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
            '''
            result = self._values.get("health_check_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
            before it is declared healthy. In this case, the health status is changed from fail to success.
            Valid values: 2 to 10.
            Default value: 3.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
            before it is declared unhealthy. In this case, the health status is changed from success to fail.
            Valid values: 2 to 10.
            Default value: 3.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cookie": "cookie",
            "cookie_timeout": "cookieTimeout",
            "sticky_session_enabled": "stickySessionEnabled",
            "sticky_session_type": "stickySessionType",
        },
    )
    class StickySessionConfigProperty:
        def __init__(
            self,
            *,
            cookie: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cookie_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sticky_session_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sticky_session_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cookie: 
            :param cookie_timeout: 
            :param sticky_session_enabled: 
            :param sticky_session_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7506b4dbe7985a1bd8078d31e586394c4d29d9546c86c237b6053ca8458c2b87)
                check_type(argname="argument cookie", value=cookie, expected_type=type_hints["cookie"])
                check_type(argname="argument cookie_timeout", value=cookie_timeout, expected_type=type_hints["cookie_timeout"])
                check_type(argname="argument sticky_session_enabled", value=sticky_session_enabled, expected_type=type_hints["sticky_session_enabled"])
                check_type(argname="argument sticky_session_type", value=sticky_session_type, expected_type=type_hints["sticky_session_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cookie is not None:
                self._values["cookie"] = cookie
            if cookie_timeout is not None:
                self._values["cookie_timeout"] = cookie_timeout
            if sticky_session_enabled is not None:
                self._values["sticky_session_enabled"] = sticky_session_enabled
            if sticky_session_type is not None:
                self._values["sticky_session_type"] = sticky_session_type

        @builtins.property
        def cookie(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cookie: The cookie to be configured on the backend server.
            The cookie must be 1 to 200 characters in length, and can contain ASCII characters
            and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
            with a dollar sign ($).
            Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
            '''
            result = self._values.get("cookie")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cookie_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cookieTimeout: The timeout period of the cookie. Unit: seconds.
            Valid values: 1 to 86400.
            Default value: 1000.
            Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
            '''
            result = self._values.get("cookie_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sticky_session_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
            Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            '''
            result = self._values.get("sticky_session_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sticky_session_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            stickySessionType: The method that is used to handle a cookie. Valid values:
            Insert : inserts a cookie. This is the default value.
            Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
            or HTTPS response that is sent to a client. The next request from the client will
            contain this cookie, and the listener will distribute this request to the recorded
            backend server.
            Server: rewrites a cookie.
            When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
            the original cookie. The next request from the client will contain the user-defined
            cookie, and the listener will distribute this request to the recorded backend server.
            Note This parameter is required if the StickySessionEnabled parameter is set to true.
            '''
            result = self._values.get("sticky_session_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StickySessionConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__b88e1557c7f78132b0219df6e34eeb6254f450483beb078b19ed75b7cd872b25)
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
    jsii_type="@alicloud/ros-cdk-alb.RosServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_config": "healthCheckConfig",
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "service_name": "serviceName",
        "sticky_session_config": "stickySessionConfig",
        "tags": "tags",
    },
)
class RosServerGroupProps:
    def __init__(
        self,
        *,
        health_check_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sticky_session_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::ServerGroup``.

        :param health_check_config: 
        :param server_group_name: 
        :param vpc_id: 
        :param protocol: 
        :param resource_group_id: 
        :param scheduler: 
        :param server_group_type: 
        :param service_name: 
        :param sticky_session_config: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ebd7c557779e45af0e918c9f44a2b8f65e81c7133981d9f9d48de3bbe680fb5)
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument sticky_session_config", value=sticky_session_config, expected_type=type_hints["sticky_session_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "health_check_config": health_check_config,
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if protocol is not None:
            self._values["protocol"] = protocol
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_group_type is not None:
            self._values["server_group_type"] = server_group_type
        if service_name is not None:
            self._values["service_name"] = service_name
        if sticky_session_config is not None:
            self._values["sticky_session_config"] = sticky_session_config
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''
        :Property: healthCheckConfig: The configuration of health checks.
        '''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protocol: The server protocol. Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        result = self._values.get("protocol")
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
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        Wrr: Backend servers that have higher weights receive more requests than those that have
        lower weights. This is the default value.
        Wlc: Requests are distributed based on the weight and load of each backend server. The
        load refers to the number of connections to a backend server. If multiple backend
        servers have the same weight, requests are routed to the backend server with the least
        connections.
        Sch: specifies consistent hashing that is based on source IP addresses.
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        serverGroupType: The type of the server group. Valid values:
        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        instances, elastic network interfaces (ENIs), and elastic container instances to this
        type of server group. This is the default value.
        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        of server group.
        '''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.StickySessionConfigProperty]]:
        '''
        :Property:

        stickySessionConfig: The configuration of session persistence.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("sticky_session_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.StickySessionConfigProperty]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServerGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Rule",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Rule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f13047473871e46cb4c568d87682f630c5e518fc51125071ef31e0d61469ed7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleId: The ID of the forwarding rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_id": "listenerId",
        "priority": "priority",
        "rule_actions": "ruleActions",
        "rule_conditions": "ruleConditions",
        "rule_name": "ruleName",
        "direction": "direction",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rule_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        rule_conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Rule``.

        :param listener_id: Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.
        :param priority: Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority. Note The priority of each forwarding rule within a listener must be unique.
        :param rule_actions: Property ruleActions: The actions of the forwarding rule.
        :param rule_conditions: Property ruleConditions: The conditions of the forwarding rule.
        :param rule_name: Property ruleName: The name of the forwarding rule. The name must be 2 to 128 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param direction: Property direction: Rule direction. Valid values: Request or Response.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec58d318ea47c47b0c063831ddf8142e765f26e46edb6e50659fd5e4e4690746)
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rule_actions", value=rule_actions, expected_type=type_hints["rule_actions"])
            check_type(argname="argument rule_conditions", value=rule_conditions, expected_type=type_hints["rule_conditions"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_id": listener_id,
            "priority": priority,
            "rule_actions": rule_actions,
            "rule_conditions": rule_conditions,
            "rule_name": rule_name,
        }
        if direction is not None:
            self._values["direction"] = direction

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property priority: The priority of the forwarding rule.

        Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionsProperty]]]:
        '''Property ruleActions: The actions of the forwarding rule.'''
        result = self._values.get("rule_actions")
        assert result is not None, "Required property 'rule_actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionsProperty]]], result)

    @builtins.property
    def rule_conditions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleConditionsProperty]]]:
        '''Property ruleConditions: The conditions of the forwarding rule.'''
        result = self._values.get("rule_conditions")
        assert result is not None, "Required property 'rule_conditions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleConditionsProperty]]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the forwarding rule.

        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property direction: Rule direction.

        Valid values: Request or Response.
        '''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecurityPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.SecurityPolicy",
):
    '''A ROS resource type:  ``ALIYUN::ALB::SecurityPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecurityPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::SecurityPolicy``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__282bd47771135ed568f1e8b64081750130be2a0e573ebdab31b848d67345e17d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityPolicyId: The ID of the security policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityPolicyId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.SecurityPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "ciphers": "ciphers",
        "security_policy_name": "securityPolicyName",
        "tls_versions": "tlsVersions",
        "resource_group_id": "resourceGroupId",
    },
)
class SecurityPolicyProps:
    def __init__(
        self,
        *,
        ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        security_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::SecurityPolicy``.

        :param ciphers: Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. The specified cipher suites must be supported by at least one TLS protocol version that you specify. Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        :param security_policy_name: Property securityPolicyName: The name of the security policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        :param tls_versions: Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e676a98f5ef0509855e2692fb0e3282e000365dfb67a49c74696b84234a1396)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ciphers": ciphers,
            "security_policy_name": security_policy_name,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.

        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityPolicyName: The name of the security policy.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("security_policy_name")
        assert result is not None, "Required property 'security_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.

        Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        return "SecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.ServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::ALB::ServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::ServerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16235e45196d8e1e5957d4c8be6357ecd9e3479686933ea744c205f6fca0952c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.ServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_config": "healthCheckConfig",
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "service_name": "serviceName",
        "sticky_session_config": "stickySessionConfig",
        "tags": "tags",
    },
)
class ServerGroupProps:
    def __init__(
        self,
        *,
        health_check_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sticky_session_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::ServerGroup``.

        :param health_check_config: Property healthCheckConfig: The configuration of health checks.
        :param server_group_name: Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed in the specified VPC to the server group. Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        :param protocol: Property protocol: The server protocol. Valid values: HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This is the default value. HTTPS: allows you to associate HTTPS listeners with backend servers.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param scheduler: Property scheduler: The scheduling algorithm. Valid values: Wrr: Backend servers that have higher weights receive more requests than those that have lower weights. This is the default value. Wlc: Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections to a backend server. If multiple backend servers have the same weight, requests are routed to the backend server with the least connections. Sch: specifies consistent hashing that is based on source IP addresses.
        :param server_group_type: Property serverGroupType: The type of the server group. Valid values: Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances to this type of server group. This is the default value. Ip: a server group that consists of IP addresses. You can add IP addresses to this type of server group.
        :param service_name: Property serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        :param sticky_session_config: Property stickySessionConfig: The configuration of session persistence. Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3de7a857de8de877137973f26a28e4c66819c4855c01bba28fa69018ca1e7b18)
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument sticky_session_config", value=sticky_session_config, expected_type=type_hints["sticky_session_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "health_check_config": health_check_config,
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if protocol is not None:
            self._values["protocol"] = protocol
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_group_type is not None:
            self._values["server_group_type"] = server_group_type
        if service_name is not None:
            self._values["service_name"] = service_name
        if sticky_session_config is not None:
            self._values["sticky_session_config"] = sticky_session_config
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''Property healthCheckConfig: The configuration of health checks.'''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverGroupName: The name of the server group.

        The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protocol: The server protocol.

        Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduler: The scheduling algorithm.

        Valid values:
        Wrr: Backend servers that have higher weights receive more requests than those that have
        lower weights. This is the default value.
        Wlc: Requests are distributed based on the weight and load of each backend server. The
        load refers to the number of connections to a backend server. If multiple backend
        servers have the same weight, requests are routed to the backend server with the least
        connections.
        Sch: specifies consistent hashing that is based on source IP addresses.
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serverGroupType: The type of the server group.

        Valid values:
        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        instances, elastic network interfaces (ENIs), and elastic container instances to this
        type of server group. This is the default value.
        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        of server group.
        '''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceName: This parameter is available only if the ALB Ingress controller is used.

        In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.StickySessionConfigProperty]]:
        '''Property stickySessionConfig: The configuration of session persistence.

        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("sticky_session_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.StickySessionConfigProperty]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServerGroup.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Acl",
    "AclAssociation",
    "AclAssociationProps",
    "AclProps",
    "BackendServerAttachment",
    "BackendServerAttachmentProps",
    "HealthCheckTemplate",
    "HealthCheckTemplateProps",
    "Listener",
    "ListenerProps",
    "LoadBalancer",
    "LoadBalancerProps",
    "RosAcl",
    "RosAclAssociation",
    "RosAclAssociationProps",
    "RosAclProps",
    "RosBackendServerAttachment",
    "RosBackendServerAttachmentProps",
    "RosHealthCheckTemplate",
    "RosHealthCheckTemplateProps",
    "RosListener",
    "RosListenerProps",
    "RosLoadBalancer",
    "RosLoadBalancerProps",
    "RosRule",
    "RosRuleProps",
    "RosSecurityPolicy",
    "RosSecurityPolicyProps",
    "RosServerGroup",
    "RosServerGroupProps",
    "Rule",
    "RuleProps",
    "SecurityPolicy",
    "SecurityPolicyProps",
    "ServerGroup",
    "ServerGroupProps",
]

publication.publish()

def _typecheckingstub__0a7509e3fd2f66e32638211c2c6b0a5c710ed561e8f03e613ff9f1e6fd37055c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AclProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c5244b7986bbac10d49f3054a80bbefaa4b46f253946d9be62e8f6087602745(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f5bbe1590b369842e897dcf53c1707df149dfbaa5fe992f0145f94430e55305(
    *,
    acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9745a5fc8394d8813ef6061bcc99f7d668371c8d816b9ae3813e528ba4749b8e(
    *,
    acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29659e40623a51d7adb3ce3ed42d7c10000d8f83944e9633a08b67ce08036d2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eed2315850a15a8f39bc12507a5f6fdb51b088ee6f72f2496a0648dd53c2f35(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b112d762720dce2623c3281f7567db1626bd610de190b3aef06ebd54c0921b31(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HealthCheckTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fdbd5b8d68cd6a969374aca4dfc79907123208d5f87560e6f20a9a033b22914(
    *,
    health_check_template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b024852b9b0273253558aaa2b9b536b52185236e21351d4bc4bbba65be78236(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6d945c625cb69156e18d79f0e8b7bb6e14c0e73bbebde213faab8ac43c33790(
    *,
    default_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ca_certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    gzip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quic_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d069fe32167c7b72465a068fc5531fa3463568a953f552f4eee86fd16f92fc07(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbb371846bcbcf3bb1f1cbce0eb944fb336c84f622c3a86ff07e1f6deb459790(
    *,
    address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_billing_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    load_balancer_edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    access_log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    address_allocated_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b610215460f306b32c78da89efeca771aa45070eafb1fee0a17b947a0a01fff(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40fffd9be0415b41ef82b3ee62e231535b60c7f5cb33c0a7fb2b159ba6d4723d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bebd13f3d9bdfa55f5f5efc06c5dd49cdc7fdd78a570b33808fd53b1847da2a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d901eb538b6c596f73a312c97e9ad00ff48805764dd538f654769866f51ecf9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__493273977652f03087f918c78fcf7fd67a624ed923fa9bee3039b899e7ddbfea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__639c2e6924eec8544534fa057dca0f65a26f11fc4a642f701e5270f357842aa6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39f397362d6182c1dd553d3d8a20848890407fd0a4c130ffbbe5a548e80cce2c(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d8f135f18e33871acc2e714bd2ad10730100d9c06fd3ea7e80068417be64657(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9b5f92f89768565c6d364c465caec6c3b0aac9cde47361bf241feaa4a97e00a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268616ed508cf63674e72495ed55e8605180077aedff1a6733d4c5e82b594b43(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e1667ad1d882c1abca7bbe2acf086dc24234a69c0d9644b726a5544aae37edc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac2bff6d4905a8a5ab8a60b1331db1f785d8ac8121a87bce0cb370daa9760c6a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0ee700e218288a2d246e4777c1262610dbabe3209164c9856b5a7359979f0e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f60e893ed86cd73b824bb12eb1d40161b66ba9a7b80501b2b54c3c85a984ef82(
    *,
    acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1887c45889291b639bbdd8a7cb81dce592558ffc0746ad61f6708116851a7eb5(
    *,
    acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e807e2f0e0b99305a28042a0665c8f594655d16d59e04be904c2d0f09ebbed31(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76425041c9802e880c29ecd832f19d5537fc3088da1256c665f0c910e79c9a90(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ced668e38092a859d1a5fe416b3d45e2cd62e9ee498e1a98bf29981572e6f9d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38b06add0cb0532a9c0d31a63015c0552d1601beb17702cc270beb96c1f69c3e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cea452fe4b5d69b95f449086ba0f7d04e8d6cd9f15103c5aca08a30e6ee3c154(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__953812c39b10daed1e875b479a9d948cc7696792bebd6c62be6181befcb22fac(
    *,
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0be7653e59f110248e2471ded61d1484493a84e6c278e6c30c9fe0ef493ad58b(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4657500f248e31e1f721f4930a477271079373ff5a28a27620165ee13096387d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHealthCheckTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc75f3524903eccd25a919ac04dc30934cb442456c81e622a00af9e26ab9f97f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbd0d595500b459784afe76ac0eb0b2bdf76e802a8e9ddffb84d1978b065e263(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd995d9d04f38d9569c1eb918791494b488c63b1c77d5adc95082539a7517a8a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b79d222379edbbdde371218c1ba0bcdcd40d117c0f85f28812166db042169f2d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e9f76c3d9ce44f8ced792fb57a562d8b60fff3973598d293aa1c98193c1e775(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__523aa1ea2413891a6a15d4903ce65f88591044316ed4ff25efbebb7c7215eb4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aeee79e3269e4054707eb308fa3330c08e56b10d854ca51622fe429569a4e5f7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c36c9c73d32cb3b54d9511f8551e78afb9ac6a020a5ef383882f65a81696eb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f16e0b43796c341e02d319ad1557141ea01a6881a26f108d35a2a3dbe7e85c6c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54b903d5ac3ef89ba8b170c39f761076d3aec4a74e8984a2e2031a6b50f1ba1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__564acd5b1cea327cf712246ee13bec493bd716be79a739f687fa42ec57597663(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d84656e7745a997bc2fe6996860950132cd59e177e588aa47dc194d1e531ef9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187645284a5b9f8cabbb415a9531f6379f39c6831c8fab6c53d4153709043c73(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c9ed03a0d50f66a25736ebce39e663ff72bab2b472d9f4df2c99037bec3a1f7(
    *,
    health_check_template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46def208850b6bca6d4167da68d8afb4f8dc48cf931dd3a4d82d29686d82ed51(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2339da08527e1a47e1f27697a99b91fa9382aef670c69831361a4710aacea30(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76aafbb14c5d8581c93973881f4ad6cc7e82447890f48569d0fd73e83840ab8d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.DefaultActionsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2568ad9f38fc56ef696525b579aa83c53d2c272c857605219441644dffb9eab8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cabed9cb22f382f5482e8e531868f5577db0997f2f5c1498dc44f2a6e04e3ec5(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf21a350c747303b7cbb19c9388de8a58cc470dd947319e7d1fa238f3520f15c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__103e5b79008e5de9b3bdd1322d284c2cf4474d258aa82bd327e820c2fe61faeb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d80663ede3db43afe5bd41c7e54e7aaa4c86d5171bdb7a2833636c29b809fbaf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CaCertificatesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3af35c12f08f313d85720d8c5b7d0f7e5756f65ef37b8b2dafbb721e4d0e6a8a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__683f4dc06c73ed0e40c9f2955ff4e4d840305bd28e2c447279639161775c09cf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24cb39d8229e585be3c9a55c2fdc736634e3db4a921c447971b28181fe9bbcaf(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e51ca7cd19e72fe4f084e3d862fd1526e449926121a14051bb40ef697b5f281d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cff736dd3aaf743c24c7efbc97e1faaf539283059cd544c747c9c7e4c445552c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0136ebc3ca6c21e824f3dac3a0705a992ab31fab937f4d34c64581ad2455137f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5267632feb8c2935dda642508e15e47f257fd490497c9bcb00e3a25de31d10a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.QuicConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33eda58a065dad5d38424a3915fb70276b355ea8b3140a25b725e66d0ada0690(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c641f3a4f5242fe19723ad514c4203333e05f720edecfccc93029187dd242be6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03d44aae0d7870b77b17cfa7b8ee740f294be48470e54514a9ff3439861b9137(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e620629185ce5d8af3df7e6ca0c29bf6295c62373efd93cc6e755f92e949fabc(
    *,
    certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfc09d3674928521e0163c2db695579c62c25d3063c2ef4d8f4591580b0b0f99(
    *,
    certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52a0d22ae1a219aeeab584c2e7d963bc397d6bba3806ff57c96f4438ee8ee051(
    *,
    forward_group_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.ForwardGroupConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f7198ebfa91c003c1e3ac04e2362f6149886bcf71189172f91337c85194ffdd(
    *,
    server_group_tuples: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.ServerGroupTuplesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4e408d7221967ac1ee27f5a306130a559cb63b0c9149cad06479e26627a6971(
    *,
    quic_listener_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quic_upgrade_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6245a6d884200083ec6b3d2610fd39ea3708eec9f0b79ab716bc35987187328f(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dbdfb7b1e359f5693859d09ae379b541ecd442bcf53ca6f2270518db45d3f0e(
    *,
    x_forwarded_for_client_cert_client_verify_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_client_verify_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_fingerprint_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_fingerprint_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_issuer_dn_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_issuer_dn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_subject_dn_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_cert_subject_dn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_source_ips_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_source_ips_trusted: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_src_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_slb_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_slb_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a137c5102fdbb7d4682d6abc1913fef4b931053d874979583dbb83fd2e054b4(
    *,
    default_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ca_certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    gzip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quic_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b7d40b376b88fab04a45da03876527b4baceabb8cdb65b1e9d7a2401c90813f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9e85ba1d7eee5d23775823cb57d836defa03edd9d19f8abc45eac0efb098269(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6621ced7c57418036f606e218bb73a41a5e6bae6aee879bf7126103c876fd64c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__762f49b3928f3493fa9ac180605c6b09c0f502a6e821461aa51fb7ab706b6521(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01a88319d980e8fefa5be7cda9b8c18fefdbf52b410cd4bcab382f8078a993b3(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__875b6841b0b27cfcc30b2652fa751e1e368dd653e36be41c6003d52102801e52(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7519cea464b41dcb4680fe8d2bf47aa2846c3f64672bf6b9d0c4de1bece2b7ba(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__462eeb73be918a386c649a4ad281b7de5b6666bf9fc368867f59d2b11369136c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68ccf21c1206c1941292fb3447943d9902c0be2e0fca13e9a98f1a8cb5b0a422(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1490c3f02b276bd5b4e4448cc43f204022430bcdbbd3ea437f6a12635e1278e1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.AccessLogConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ff323bb88e5a079e3f98438dda0e4693c71cda28c7d30d02a25855152cbb65b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c33a6273f32990b422fb140aefc56ab1cf3d127c90c7a111437e74b629a4c6b8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0899f10b26133e33ce1d21e9c4dd769105be6e19bfce25ec2d56962af79bc1fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6da014dbca1782cdbff2e4582f1369184b888e224830c32899e0d6a273de1e7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a498b23225ab444feb1ddfd4d27bf42d6451e246cdcdae338dc34fdab9f132a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__213fa713f5fbd0e985273cf0f19edfc67b259e59fb5bf42d8a38d5679bc7c46a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64579ba146ce0c263b1540d3c62072b314fe0fa4bff60959bc3c87fe5ddcb5df(
    value: typing.Optional[typing.List[RosLoadBalancer.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70c3292d04d837243604e8010fa62e4bbbae65855e0eaef44eaec6191eb76941(
    *,
    log_project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_store: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a130544bd609c91924df5c6c87723300c26f0712b8031351e009dd0c3aaf16c5(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f3d334bc66bea7b206e07a289060389ff026414dae247fd226a3a976854ea69(
    *,
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b98d175086c4151b81fd88971138a86eef429cce5c0b2f18f9393cb2ce3655d3(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b2ff68fd2266690f03da6345fea31d3e658c6888e3b081ddd2a62d7bdd732f5(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5c3ac4ee5d77b16cd929fedbc28c966fa0222749838ed81c8c5017c16fac832(
    *,
    address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_billing_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    load_balancer_edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    access_log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    address_allocated_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52cb567a456396e1f2cd2fa641809bb5428e7a7e654e3ddd276b100173d62d11(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e00369e26fb420d728bf0349001c31065bf5458f8aa1c38741e9930e5332f5f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b816bc5584a7a6c003ccaad03526f6e56e68582a28c73c5da51fc98a60a82458(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29245c073849bf29b685367bbe7b0b816e776f04382a7110c812a68a44b347b8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a155a413afde29ecc9b6ee5d0f854f6d5f981ad922408654eafa5198bb84203(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b00a504e757395e007c7c55bf17239577feec0820a090500ecfcfcd2b6ab435(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be305036cd29497c49d59a55f33c022c561caab8992655423d0b5a418a6d1f3d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleConditionsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e0432130e634df4a5230dda4e677147dc70b47a14cb66c2774e97c5b6e162c2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a038119b2c08ce2ac1aa10e5b58b3432ababc0e2f30cc533ec80c281d9bd232e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__848b1f996cd8c50b85b12f61f51f3471c4eb3ec9fb49eb505d25e2352d011cd1(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ValuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a1ad4e53790e191a385960c37a9bf0b9411c321f84a6308360f17a40567c29(
    *,
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    content_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb3c64be2562797ef8ec17edf0577f72f7eef3e5c9b54d60d0511f3d47e4df30(
    *,
    server_group_sticky_session: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ServerGroupStickySessionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    server_group_tuples: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ServerGroupTuplesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fad7eb78f74262786e5309ca4610ed9c032a61233eb9156bbbf3cae6e6703cc(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d2026578f80525e1563f48b73f04e769ec28f9da502de5aedbb1211a9a6cd3c(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fe2e145d0891a7208b6424c700d13f9061607ef4b51109c5addcf1b9c519b28(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faad53c00786e1d13ea52885fd6e9289e3ab6203c3faa22bb2327111dd3bce4c(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09ad2fe217194cda5619798e49e66ea214d776bca184a9b966e434c47393e154(
    *,
    server_group_tuples: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.MirrorGroupConfigServerGroupTuplesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48cbee8532bed6fd83358ad59af25ae04ff57eac65ae61b83c8e86fcd6e9f184(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab0f7f03ef6949ec8f4eb8091b365f1d0ad246458a14ae9f48bb1fadc7f6f2c3(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d40ee6a8fd562c1ef796748f1297e0e8c38d6029324bd1e278269b5c80eb58aa(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.QueryStringConfigValuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43d9af0e218d29fd4bab9d8c17ebd3c22a61780d5fb0b1cbce55eed419e0b5d0(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d4b4223d9816b79e4f4c93a6da59996b16a4ea4495079daf7f588608dcc814e(
    *,
    host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    query: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8b4c7a93dd8d7321767466e764fcd0b90ae52a750c61adff39b5f33f9733bf9(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e19574b8a86cc2582da551418e7d808b57de11cef123fd374fc0882d45c7199(
    *,
    host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    query: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceabec945354910ea3bf02ff5638552230b6ef5115091d8035fa2aa08254b52f(
    *,
    order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fixed_response_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.FixedResponseConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    forward_group_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ForwardGroupConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    insert_header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.InsertHeaderConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    redirect_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RedirectConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    remove_header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RemoveHeaderConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    rewrite_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RewriteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    traffic_limit_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TrafficLimitConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    traffic_mirror_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TrafficMirrorConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ea90522df75b215b9c8b5ffb00eb960238de2c09eeac8d975b7ac61937e110(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cookie_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.CookieConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    header_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.HeaderConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    host_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.HostConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    method_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.MethodConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    path_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.PathConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    query_string_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.QueryStringConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    source_ip_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.SourceIpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7e4b149bf75745cd8e98ca78f16b72a2d2e4c95aafa6390eb4ae88eee54cfc6(
    *,
    enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ebfc7575dfc7bfd3321fb533e27057c500de2aa50cfce64f979a99ec01db066(
    *,
    server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a97b82016e7e63e96e3be2cd80da2d3ff493e867106e712bf194582dacc3f7(
    *,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c92cc2cc392088c39f931096097b8fb21829c4104296b71da4eb272de752ed5(
    *,
    qps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    per_ip_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f3857fa7090b60ff587ebee23e7f335dc896741778012e4f8a39bd536cf6c52(
    *,
    mirror_group_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.MirrorGroupConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1480792c54a153a8a305e79a6bc6ee0a70d6179c3d1d24613cf676745a8183cb(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17995b7fbc1254c2e86190f8fd4aaf9d25fcc70a03bab1f1dd0b4785da88f673(
    *,
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rule_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b7788148144a26d7b9864929cc78341075e80d67041b67b1f5304103d60424(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecurityPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c0fc401796f200327a9775a5dd0e6e8a288d5b628c7d03c5397b539fed6984b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0de2d547f0aada46d6f987a06b98f3ce8dd7345ce34b196b1f4e87d72eca386(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e15dcd63dc53951067c48f6a5af33ed2ff932242a02a747997b005b6ce956a4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5979c5ceb495570f8e3f98d6a1cda4abbc1906a074a15eb638a68803794f0747(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ace1eb9f7fe6d611dd57c59d49d129d63f90a009a21ee0c6bc0f1ef180c6742e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a6c9f89806f0faf51a9289d1134f3fa18297480ccfd60922068d665a1b44d0b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34680a541c73ddde3ec3223592e0e842f2dc4c56276b5368ace94bc76a3b5d3a(
    *,
    ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    security_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0878fe1304963064474987cbe6db35061283ff6ec94f8987969ee2ebd39d3b0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33954631941902074fac44c107b58af6e364e0b9c0e47a402bf7412a37342f36(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3507ee43e633dcba1901841f2d6e8a96a435cef22aede656f25626b59d6ad4f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9b0fb6a3c78036d263d86a5f5d522452431e7888c9b0a120955396fe7c63a5f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__498fb4d2d28bd75757d714b71b432dfcebb532444232acef17da41f2883c59de(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eeeca9cff8de648726ef8bca1a058c134f43dadaf0622866d3517cf1c204cdb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc092d3984f1147df8d23c2224d4dec83ff9004341888d07b3c7f88b31267aa1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a11f36631e62c92b625892ed7099c62d6019a59bf005b9190cf34b6297208f9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__314433d47fc73649f689c2f043c479a0ff091e4575d234e4055af375e930941c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2f87126d0d52a94855ec91683d95b87f225986780ede8d3516bd56361284600(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92dd12c7886daa183d6931efb8c3cf114b2abea61f605af23f9eb749ee79ff3a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3127be5233e9b1019a2fcebdb49eae88be5927848eb5186d0b326a863bc4ffc5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.StickySessionConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__852aa7dc0f0c42bf64f51ffa626c30052ea520a5cb8e92d72fc46ecfc63624dd(
    value: typing.Optional[typing.List[RosServerGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebd816eaac0e479f3e6e966b330dc50510ee7bd76ed5c4654795f837f4d16bf1(
    *,
    health_check_enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_codes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_http_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7506b4dbe7985a1bd8078d31e586394c4d29d9546c86c237b6053ca8458c2b87(
    *,
    cookie: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cookie_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b88e1557c7f78132b0219df6e34eeb6254f450483beb078b19ed75b7cd872b25(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ebd7c557779e45af0e918c9f44a2b8f65e81c7133981d9f9d48de3bbe680fb5(
    *,
    health_check_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f13047473871e46cb4c568d87682f630c5e518fc51125071ef31e0d61469ed7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec58d318ea47c47b0c063831ddf8142e765f26e46edb6e50659fd5e4e4690746(
    *,
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rule_actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_conditions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__282bd47771135ed568f1e8b64081750130be2a0e573ebdab31b848d67345e17d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecurityPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e676a98f5ef0509855e2692fb0e3282e000365dfb67a49c74696b84234a1396(
    *,
    ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    security_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16235e45196d8e1e5957d4c8be6357ecd9e3479686933ea744c205f6fca0952c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3de7a857de8de877137973f26a28e4c66819c4855c01bba28fa69018ca1e7b18(
    *,
    health_check_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
