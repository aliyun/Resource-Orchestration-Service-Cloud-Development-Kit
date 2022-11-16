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

import ros_cdk_core


class Acl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Acl",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Acl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AclProps", typing.Dict[str, typing.Any]]] = None,
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Optional[typing.Union[AclProps, typing.Dict[str, typing.Any]]] = None,
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))


class AclAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.AclAssociation",
):
    '''A ROS resource type:  ``ALIYUN::ALB::AclAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["AclAssociationProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[AclAssociationProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))


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
        acl_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        acl_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::AclAssociation``.

        :param acl_ids: Property aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        :param acl_type: Property aclType: The type of ACL.
        :param listener_id: Property listenerId: The ID of the listener.
        '''
        if __debug__:
            def stub(
                *,
                acl_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                acl_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property aclIds: The IDs of the ACLs.

        You can specify up to three IDs at a time.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def acl_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aclType: The type of ACL.'''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property listenerId: The ID of the listener.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[typing.Union["RosAcl.AclEntriesProperty", typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Acl``.

        :param acl_entries: Property aclEntries: undefined.
        :param acl_name: Property aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            def stub(
                *,
                acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable]]]] = None,
                acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {}
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", ros_cdk_core.IResolvable]]]]:
        '''Property aclEntries: undefined.'''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aclName: The name of the ACL.

        The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BackendServerAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.BackendServerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::ALB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["BackendServerAttachmentProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[BackendServerAttachmentProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-alb.BackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"server_group_id": "serverGroupId", "servers": "servers"},
)
class BackendServerAttachmentProps:
    def __init__(
        self,
        *,
        server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosBackendServerAttachment.ServersProperty", typing.Dict[str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::BackendServerAttachment``.

        :param server_group_id: Property serverGroupId: The ID of the server group.
        :param servers: Property servers: The backend servers that you want to add to the server group. You can specify up to 40 servers in each call.
        '''
        if __debug__:
            def stub(
                *,
                server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[str, typing.Any]]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serverGroupId: The ID of the server group.'''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''Property servers: The backend servers that you want to add to the server group.

        You can specify up to
        40 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class HealthCheckTemplate(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.HealthCheckTemplate",
):
    '''A ROS resource type:  ``ALIYUN::ALB::HealthCheckTemplate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["HealthCheckTemplateProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[HealthCheckTemplateProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTemplateId")
    def attr_health_check_template_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthCheckTemplateId: The ID of the health check template.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckTemplateId"))


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
        health_check_template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                health_check_template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property healthCheckTemplateName: The name of the health check template.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("health_check_template_name")
        assert result is not None, "Required property 'health_check_template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property healthCheckCodes: The HTTP status code for a successful health check.

        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_codes")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckConnectPort: The port that is used for health checks.

        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        result = self._values.get("health_check_connect_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckInterval: The interval between two consecutive health checks.

        Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckPath: The URL path that is used for health checks.

        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
        signs (#), and ampersands (&). It can also contain the following extended characters:
        _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (/).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckTimeout: The timeout period of a health check.

        Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.

        In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.

        In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("unhealthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HealthCheckTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Listener",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ListenerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))


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
        default_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.DefaultActionsProperty", typing.Dict[str, typing.Any]]]]],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ca_certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.CaCertificatesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.CertificatesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        gzip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        http2_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        quic_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.QuicConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.XForwardedForConfigProperty", typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                default_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[str, typing.Any]]]]],
                listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ca_certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                gzip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                http2_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                quic_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                x_forwarded_for_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.DefaultActionsProperty"]]]:
        '''Property defaultActions: The actions of the rule.'''
        result = self._values.get("default_actions")
        assert result is not None, "Required property 'default_actions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.DefaultActionsProperty"]]], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property listenerPort: The frontend port that is used by the ALB instance.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property listenerProtocol: The listener protocol.

        Valid values: HTTP, HTTPS, and QUIC.
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The ID of the ALB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CaCertificatesProperty"]]]]:
        '''Property caCertificates: List of configured CA certificates for listener.'''
        result = self._values.get("ca_certificates")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CaCertificatesProperty"]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property caEnabled: Specifies whether to enable mutual authentication.

        Default false.
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''Property certificates: The list of SSL certificates for listener.'''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CertificatesProperty"]]]], result)

    @builtins.property
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.

        Valid values: true and false.
        Default value: true.
        '''
        result = self._values.get("gzip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property http2Enabled: Specifies whether to enable HTTP/2.

        Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("http2_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property idleTimeout: The timeout period of idle connections.

        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property listenerDescription: The description of the listener.

        The description must be 2 to 256 characters in length.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.QuicConfigProperty"]]:
        '''Property quicConfig: Select a QUIC listener and associate it with the ALB instance.'''
        result = self._values.get("quic_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.QuicConfigProperty"]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property requestTimeout: The timeout period of the request.

        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityPolicyId: The ID of the security policy.

        System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''Property xForwardedForConfig: The configuration of the XForward field.'''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.XForwardedForConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.LoadBalancer",
):
    '''A ROS resource type:  ``ALIYUN::ALB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[LoadBalancerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute AddressType: The type of IP address that the ALB instance uses to provide services.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DNSName: The domain name of the ALB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerEdition")
    def attr_load_balancer_edition(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerEdition: The edition of the ALB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerEdition"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The ID of the ALB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneMappings"))


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
        address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_billing_config: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.LoadBalancerBillingConfigProperty", typing.Dict[str, typing.Any]]],
        load_balancer_edition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.ZoneMappingsProperty", typing.Dict[str, typing.Any]]]]],
        access_log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.AccessLogConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        address_allocated_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.ModificationProtectionConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancer.TagsProperty", typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_billing_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]],
                load_balancer_edition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
                access_log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                address_allocated_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                modification_protection_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property addressType: The type of IP address that the ALB instance uses to provide services.

        Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]:
        '''Property loadBalancerBillingConfig: The configuration of the billing method.'''
        result = self._values.get("load_balancer_billing_config")
        assert result is not None, "Required property 'load_balancer_billing_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"], result)

    @builtins.property
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerEdition: The edition of the ALB instance.

        Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        result = self._values.get("load_balancer_edition")
        assert result is not None, "Required property 'load_balancer_edition' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerName: The name of the ALB instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        assert result is not None, "Required property 'load_balancer_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''Property zoneMappings: The zones and the vSwitches in the zones.

        You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], result)

    @builtins.property
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]]:
        '''Property accessLogConfig:.'''
        result = self._values.get("access_log_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]], result)

    @builtins.property
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressAllocatedMode: The mode in which IP addresses are assigned.

        Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        result = self._values.get("address_allocated_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressIpVersion: The protocol version.

        Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property bandwidthPackageId: Attach common bandwidth package to load balancer.

        It only takes effect when AddressType=Internet.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtectionEnabled: Specifies whether to enable deletion protection.

        Default value: false.
        '''
        result = self._values.get("deletion_protection_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''Property modificationProtectionConfig: The configuration of modification protection.'''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosAcl",
):
    '''A ROS template type:  ``ALIYUN::ALB::Acl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAclProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Acl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAclProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclId: The ID of the ACL.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclEntries")
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", ros_cdk_core.IResolvable]]]]:
        '''
        :Property: aclEntries: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", ros_cdk_core.IResolvable]]]], jsii.get(self, "aclEntries"))

    @acl_entries.setter
    def acl_entries(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosAcl.AclEntriesProperty", ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclEntries", value)

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            entry: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param entry: 
            :param description: 
            '''
            if __debug__:
                def stub(
                    *,
                    entry: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            self._values: typing.Dict[str, typing.Any] = {
                "entry": entry,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def entry(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: entry: The CIDR block for the ACL entry.
            '''
            result = self._values.get("entry")
            assert result is not None, "Required property 'entry' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :: -]){2,256}$/.
            :Property: description: The description of ACL entries. The description must be 2 to 256 characters in length, and can contain only the characters specified by the following expression:/^([^\\x00-\\xff]|[\\w.,;/
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AclEntriesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosAclAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosAclAssociation",
):
    '''A ROS template type:  ``ALIYUN::ALB::AclAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAclAssociationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::AclAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAclAssociationProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclIds")
    def acl_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "aclIds"))

    @acl_ids.setter
    def acl_ids(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclIds", value)

    @builtins.property
    @jsii.member(jsii_name="aclType")
    def acl_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclType: The type of ACL.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aclType"))

    @acl_type.setter
    def acl_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        acl_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        acl_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::AclAssociation``.

        :param acl_ids: 
        :param acl_type: 
        :param listener_id: 
        '''
        if __debug__:
            def stub(
                *,
                acl_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                acl_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def acl_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclType: The type of ACL.
        '''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::Acl``.

        :param acl_entries: 
        :param acl_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            def stub(
                *,
                acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[typing.Union[RosAcl.AclEntriesProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable]]]] = None,
                acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {}
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: aclEntries: undefined
        '''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosAcl.AclEntriesProperty, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
        letters, digits, hyphens (-) and underscores (_). It must start with a letter.
        '''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosBackendServerAttachment",
):
    '''A ROS template type:  ``ALIYUN::ALB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosBackendServerAttachmentProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::BackendServerAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosBackendServerAttachmentProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServerGroupId: The ID of the server group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupId")
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serverGroupId"))

    @server_group_id.setter
    def server_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="servers")
    def servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        40 servers in each call.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], jsii.get(self, "servers"))

    @servers.setter
    def servers(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.ServersProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.ServersProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            server_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    server_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[str, typing.Any] = {
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
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :: -]){2,256}$/.
            :Property:

            description: The description of the backend server. The description must be 2 to 256 characters
            in length, and can contain only the characters specified by the following expression:
            /^([^\\x00-\\xff]|[\\w.,;/
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            port: The port that is used by the backend server. Valid values: 1 to 65535.
            Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: The IP address of the ENI in inclusive ENI mode.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::BackendServerAttachment``.

        :param server_group_id: 
        :param servers: 
        '''
        if __debug__:
            def stub(
                *,
                server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[str, typing.Any]]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.ServersProperty]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        40 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.ServersProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHealthCheckTemplate(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosHealthCheckTemplate",
):
    '''A ROS template type:  ``ALIYUN::ALB::HealthCheckTemplate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosHealthCheckTemplateProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::HealthCheckTemplate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosHealthCheckTemplateProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTemplateId")
    def attr_health_check_template_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthCheckTemplateId: The ID of the health check template.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckTemplateId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTemplateName")
    def health_check_template_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        healthCheckTemplateName: The name of the health check template.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "healthCheckTemplateName"))

    @health_check_template_name.setter
    def health_check_template_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTemplateName", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckCodes")
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        healthCheckCodes: The HTTP status code for a successful health check.
        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "healthCheckCodes"))

    @health_check_codes.setter
    def health_check_codes(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckCodes", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConnectPort")
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckConnectPort: The port that is used for health checks.
        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckConnectPort"))

    @health_check_connect_port.setter
    def health_check_connect_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConnectPort", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckHost")
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckHost"))

    @health_check_host.setter
    def health_check_host(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckHost", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckInterval")
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckInterval"))

    @health_check_interval.setter
    def health_check_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckInterval", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckMethod")
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckMethod"))

    @health_check_method.setter
    def health_check_method(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckMethod", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckPath")
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckPath"))

    @health_check_path.setter
    def health_check_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckPath", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckProtocol")
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckProtocol"))

    @health_check_protocol.setter
    def health_check_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTimeout")
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckTimeout"))

    @health_check_timeout.setter
    def health_check_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="healthyThreshold")
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
        checks before it is declared healthy. In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthyThreshold"))

    @healthy_threshold.setter
    def healthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthyThreshold", value)

    @builtins.property
    @jsii.member(jsii_name="unhealthyThreshold")
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
        before it is declared unhealthy. In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "unhealthyThreshold"))

    @unhealthy_threshold.setter
    def unhealthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        health_check_template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                health_check_template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        healthCheckTemplateName: The name of the health check template.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("health_check_template_name")
        assert result is not None, "Required property 'health_check_template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_codes(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        healthCheckCodes: The HTTP status code for a successful health check.
        If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        them with commas (,).
        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        '''
        result = self._values.get("health_check_codes")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def health_check_connect_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckConnectPort: The port that is used for health checks.
        Valid values: 0 to 65535.
        Default value: 0. This value indicates that the port on a backend server is used for health checks.
        '''
        result = self._values.get("health_check_connect_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
        Valid values: 1 to 50.
        Default value: 2.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_method(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
        respond within the specified timeout period, the backend server fails the health check.
        Valid values: 1 to 300.
        Default value: 5.
        Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
        '''
        result = self._values.get("health_check_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
        checks before it is declared healthy. In this case, the health status is changed from
        fail to success.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def unhealthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
        before it is declared unhealthy. In this case, the health status is changed from success to fail.
        Valid values: 2 to 10.
        Default value: 3.
        '''
        result = self._values.get("unhealthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHealthCheckTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosListener",
):
    '''A ROS template type:  ``ALIYUN::ALB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosListenerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defaultActions")
    def default_actions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.DefaultActionsProperty"]]]:
        '''
        :Property: defaultActions: The actions of the rule.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.DefaultActionsProperty"]]], jsii.get(self, "defaultActions"))

    @default_actions.setter
    def default_actions(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.DefaultActionsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.DefaultActionsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultActions", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port that is used by the ALB instance.
        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerProtocol: The listener protocol.
        Valid values: HTTP, HTTPS, and QUIC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the ALB instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="caCertificates")
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CaCertificatesProperty"]]]]:
        '''
        :Property: caCertificates: List of configured CA certificates for listener.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CaCertificatesProperty"]]]], jsii.get(self, "caCertificates"))

    @ca_certificates.setter
    def ca_certificates(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CaCertificatesProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CaCertificatesProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caCertificates", value)

    @builtins.property
    @jsii.member(jsii_name="caEnabled")
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: caEnabled: Specifies whether to enable mutual authentication. Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "caEnabled"))

    @ca_enabled.setter
    def ca_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="certificates")
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''
        :Property: certificates: The list of SSL certificates for listener.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CertificatesProperty"]]]], jsii.get(self, "certificates"))

    @certificates.setter
    def certificates(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.CertificatesProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CertificatesProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificates", value)

    @builtins.property
    @jsii.member(jsii_name="gzipEnabled")
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        Valid values: true and false.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "gzipEnabled"))

    @gzip_enabled.setter
    def gzip_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gzipEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="http2Enabled")
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "http2Enabled"))

    @http2_enabled.setter
    def http2_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "http2Enabled", value)

    @builtins.property
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        idleTimeout: The timeout period of idle connections.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "idleTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="listenerDescription")
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        listenerDescription: The description of the listener.
        The description must be 2 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "listenerDescription"))

    @listener_description.setter
    def listener_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerDescription", value)

    @builtins.property
    @jsii.member(jsii_name="quicConfig")
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.QuicConfigProperty"]]:
        '''
        :Property: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.QuicConfigProperty"]], jsii.get(self, "quicConfig"))

    @quic_config.setter
    def quic_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.QuicConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.QuicConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quicConfig", value)

    @builtins.property
    @jsii.member(jsii_name="requestTimeout")
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        requestTimeout: The timeout period of the request.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "requestTimeout"))

    @request_timeout.setter
    def request_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "requestTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyId")
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityPolicyId"))

    @security_policy_id.setter
    def security_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="xForwardedForConfig")
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.XForwardedForConfigProperty"]], jsii.get(self, "xForwardedForConfig"))

    @x_forwarded_for_config.setter
    def x_forwarded_for_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.XForwardedForConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.XForwardedForConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param certificate_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument certificate_id", value=certificate_id, expected_type=type_hints["certificate_id"])
            self._values: typing.Dict[str, typing.Any] = {}
            if certificate_id is not None:
                self._values["certificate_id"] = certificate_id

        @builtins.property
        def certificate_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: certificateId: The CA certificate ID.
            '''
            result = self._values.get("certificate_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param certificate_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument certificate_id", value=certificate_id, expected_type=type_hints["certificate_id"])
            self._values: typing.Dict[str, typing.Any] = {}
            if certificate_id is not None:
                self._values["certificate_id"] = certificate_id

        @builtins.property
        def certificate_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: certificateId: The certificate ID.
            '''
            result = self._values.get("certificate_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            forward_group_config: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.ForwardGroupConfigProperty", typing.Dict[str, typing.Any]]],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param forward_group_config: 
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    forward_group_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.ForwardGroupConfigProperty, typing.Dict[str, typing.Any]]],
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument forward_group_config", value=forward_group_config, expected_type=type_hints["forward_group_config"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {
                "forward_group_config": forward_group_config,
                "type": type,
            }

        @builtins.property
        def forward_group_config(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosListener.ForwardGroupConfigProperty"]:
            '''
            :Property: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            '''
            result = self._values.get("forward_group_config")
            assert result is not None, "Required property 'forward_group_config' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosListener.ForwardGroupConfigProperty"], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            type: The action type. The value is set to ForwardGroup.
            It indicates that requests are forwarded to multiple vServer groups.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            server_group_tuples: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosListener.ServerGroupTuplesProperty", typing.Dict[str, typing.Any]]]]],
        ) -> None:
            '''
            :param server_group_tuples: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_tuples: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.ServerGroupTuplesProperty, typing.Dict[str, typing.Any]]]]],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[str, typing.Any] = {
                "server_group_tuples": server_group_tuples,
            }

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.ServerGroupTuplesProperty"]]]:
            '''
            :Property: serverGroupTuples: The destination server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_tuples")
            assert result is not None, "Required property 'server_group_tuples' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.ServerGroupTuplesProperty"]]], result)

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
            quic_listener_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            quic_upgrade_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param quic_listener_id: 
            :param quic_upgrade_enabled: 
            '''
            if __debug__:
                def stub(
                    *,
                    quic_listener_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    quic_upgrade_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument quic_listener_id", value=quic_listener_id, expected_type=type_hints["quic_listener_id"])
                check_type(argname="argument quic_upgrade_enabled", value=quic_upgrade_enabled, expected_type=type_hints["quic_upgrade_enabled"])
            self._values: typing.Dict[str, typing.Any] = {}
            if quic_listener_id is not None:
                self._values["quic_listener_id"] = quic_listener_id
            if quic_upgrade_enabled is not None:
                self._values["quic_upgrade_enabled"] = quic_upgrade_enabled

        @builtins.property
        def quic_listener_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            Note The original listener and the QUIC listener must belong to the same ALB instance.
            In addition, make sure that the QUIC listener has not been associated before.
            '''
            result = self._values.get("quic_listener_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def quic_upgrade_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("quic_upgrade_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
            server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param server_group_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "server_group_id": server_group_id,
            }

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverGroupId: The ID of the destination server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_id")
            assert result is not None, "Required property 'server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            x_forwarded_for_client_cert_client_verify_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_client_verify_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_fingerprint_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_fingerprint_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_issuer_dn_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_issuer_dn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_subject_dn_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_cert_subject_dn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_source_ips_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_source_ips_trusted: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_src_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_slb_id_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_slb_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    x_forwarded_for_client_cert_client_verify_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_client_verify_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_fingerprint_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_fingerprint_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_issuer_dn_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_issuer_dn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_subject_dn_alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_cert_subject_dn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_source_ips_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_source_ips_trusted: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_client_src_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_slb_id_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    x_forwarded_for_slb_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_client_verify_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_client_verify_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_client_verify_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_fingerprint_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_fingerprint_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_fingerprint_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_fingerprint_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_issuer_dn_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_issuer_dn_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_issuer_dn_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_issuer_dn_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_subject_dn_alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            is set to true.
            The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            underscores (_), and digits.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_subject_dn_alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_cert_subject_dn_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            Valid values: true and false.
            Default value: false.
            Note Only HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_cert_subject_dn_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_source_ips_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForClientSourceIpsEnabled:
            '''
            result = self._values.get("x_forwarded_for_client_source_ips_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_source_ips_trusted(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForClientSourceIpsTrusted:
            '''
            result = self._values.get("x_forwarded_for_client_source_ips_trusted")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_src_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            Valid values: true and false.
            Default value: false.
            Note HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_client_src_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            Valid values: true and false.
            Default value: true.
            Note HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_proto_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_proto_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slb_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_slb_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slb_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            Valid values: true and false.
            Default value: false.
            Note HTTP, HTTPS, and QUIC listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_slb_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
        default_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[str, typing.Any]]]]],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ca_certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
        gzip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        http2_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        quic_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                default_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.DefaultActionsProperty, typing.Dict[str, typing.Any]]]]],
                listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ca_certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CaCertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                certificates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                gzip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                http2_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                quic_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.QuicConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                x_forwarded_for_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.DefaultActionsProperty]]]:
        '''
        :Property: defaultActions: The actions of the rule.
        '''
        result = self._values.get("default_actions")
        assert result is not None, "Required property 'default_actions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.DefaultActionsProperty]]], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port that is used by the ALB instance.
        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerProtocol: The listener protocol.
        Valid values: HTTP, HTTPS, and QUIC.
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the ALB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ca_certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CaCertificatesProperty]]]]:
        '''
        :Property: caCertificates: List of configured CA certificates for listener.
        '''
        result = self._values.get("ca_certificates")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CaCertificatesProperty]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: caEnabled: Specifies whether to enable mutual authentication. Default false.
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CertificatesProperty]]]]:
        '''
        :Property: certificates: The list of SSL certificates for listener.
        '''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.CertificatesProperty]]]], result)

    @builtins.property
    def gzip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        Valid values: true and false.
        Default value: true.
        '''
        result = self._values.get("gzip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http2_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
        Valid values: true and false.
        Default value: true.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("http2_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        idleTimeout: The timeout period of idle connections.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 15.
        If no request is received within the specified timeout period, ALB closes the connection.
        ALB recreates the connection when a new connection request is received.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        listenerDescription: The description of the listener.
        The description must be 2 to 256 characters in length.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def quic_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.QuicConfigProperty]]:
        '''
        :Property: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        '''
        result = self._values.get("quic_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.QuicConfigProperty]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        requestTimeout: The timeout period of the request.
        Valid values: 1 to 180. Unit: seconds.
        Default value: 60.
        If no response is received from the backend server during the request timeout period,
        ALB sends an HTTP 504 error code to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. System security policies and custom security policies
        are supported.
        Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.XForwardedForConfigProperty]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.XForwardedForConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosLoadBalancer",
):
    '''A ROS template type:  ``ALIYUN::ALB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::LoadBalancer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosLoadBalancerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AddressType: The type of IP address that the ALB instance uses to provide services.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DNSName: The domain name of the ALB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerEdition")
    def attr_load_balancer_edition(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerEdition: The edition of the ALB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerEdition"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the ALB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerBillingConfig")
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"], jsii.get(self, "loadBalancerBillingConfig"))

    @load_balancer_billing_config.setter
    def load_balancer_billing_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerBillingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerEdition")
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerEdition"))

    @load_balancer_edition.setter
    def load_balancer_edition(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerEdition", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        loadBalancerName: The name of the ALB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMappings", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogConfig")
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]]:
        '''
        :Property: accessLogConfig:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]], jsii.get(self, "accessLogConfig"))

    @access_log_config.setter
    def access_log_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.AccessLogConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.AccessLogConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogConfig", value)

    @builtins.property
    @jsii.member(jsii_name="addressAllocatedMode")
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressAllocatedMode"))

    @address_allocated_mode.setter
    def address_allocated_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressAllocatedMode", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The protocol version. Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtectionEnabled")
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtectionEnabled"))

    @deletion_protection_enabled.setter
    def deletion_protection_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtectionEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="modificationProtectionConfig")
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''
        :Property: modificationProtectionConfig: The configuration of modification protection.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], jsii.get(self, "modificationProtectionConfig"))

    @modification_protection_config.setter
    def modification_protection_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modificationProtectionConfig", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(
                value: typing.Optional[typing.List[RosLoadBalancer.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            log_project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            log_store: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param log_project: 
            :param log_store: 
            :param enable: 
            '''
            if __debug__:
                def stub(
                    *,
                    log_project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    log_store: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument log_project", value=log_project, expected_type=type_hints["log_project"])
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            self._values: typing.Dict[str, typing.Any] = {
                "log_project": log_project,
                "log_store": log_store,
            }
            if enable is not None:
                self._values["enable"] = enable

        @builtins.property
        def log_project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: logProject:
            '''
            result = self._values.get("log_project")
            assert result is not None, "Required property 'log_project' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def log_store(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: logStore:
            '''
            result = self._values.get("log_store")
            assert result is not None, "Required property 'log_store' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enable: Whether enable access log config. If LogProject and LogStore are configured, default True.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
            pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param pay_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    pay_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            self._values: typing.Dict[str, typing.Any] = {
                "pay_type": pay_type,
            }

        @builtins.property
        def pay_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
            '''
            result = self._values.get("pay_type")
            assert result is not None, "Required property 'pay_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            status: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            reason: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param status: 
            :param reason: 
            '''
            if __debug__:
                def stub(
                    *,
                    status: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    reason: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
                check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
            self._values: typing.Dict[str, typing.Any] = {
                "status": status,
            }
            if reason is not None:
                self._values["reason"] = reason

        @builtins.property
        def status(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
            NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
            ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
            '''
            result = self._values.get("status")
            assert result is not None, "Required property 'status' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def reason(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            reason: The reason for modification protection. The reason must be 2 to 128 characters in
            length, and can contain letters, digits, periods (.), underscores (_), and hyphens
            (-). The reason must start with a letter.
            This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
            '''
            result = self._values.get("reason")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: The ID of the zone to which the ALB instance belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_billing_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]],
        load_balancer_edition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
        access_log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        address_allocated_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_billing_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]],
                load_balancer_edition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
                access_log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.AccessLogConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                address_allocated_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                deletion_protection_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                modification_protection_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
        Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
        Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        result = self._values.get("load_balancer_billing_config")
        assert result is not None, "Required property 'load_balancer_billing_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty], result)

    @builtins.property
    def load_balancer_edition(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
        Basic: Basic Edition
        Standard: Standard Edition
        '''
        result = self._values.get("load_balancer_edition")
        assert result is not None, "Required property 'load_balancer_edition' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        loadBalancerName: The name of the ALB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        assert result is not None, "Required property 'load_balancer_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]], result)

    @builtins.property
    def access_log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.AccessLogConfigProperty]]:
        '''
        :Property: accessLogConfig:
        '''
        result = self._values.get("access_log_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.AccessLogConfigProperty]], result)

    @builtins.property
    def address_allocated_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
        Fixed: The ALB instance uses a static IP address.
        Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
        '''
        result = self._values.get("address_allocated_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The protocol version. Valid values:
        IPv4: IPv4
        DualStack: dual stack
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
        '''
        result = self._values.get("deletion_protection_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]]:
        '''
        :Property: modificationProtectionConfig: The configuration of modification protection.
        '''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosRule",
):
    '''A ROS template type:  ``ALIYUN::ALB::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosRuleProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RuleId: The ID of the forwarding rules.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="ruleActions")
    def rule_actions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionsProperty"]]]:
        '''
        :Property: ruleActions: The actions of the forwarding rule.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionsProperty"]]], jsii.get(self, "ruleActions"))

    @rule_actions.setter
    def rule_actions(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleActions", value)

    @builtins.property
    @jsii.member(jsii_name="ruleConditions")
    def rule_conditions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleConditionsProperty"]]]:
        '''
        :Property: ruleConditions: The conditions of the forwarding rule.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleConditionsProperty"]]], jsii.get(self, "ruleConditions"))

    @rule_conditions.setter
    def rule_conditions(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleConditionsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleConditionsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleConditions", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        ruleName: The name of the forwarding rule.
        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: direction: Rule direction. Valid values: Request or Response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.ValuesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.ValuesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ValuesProperty"]]]]:
            '''
            :Property: values: Cookie values
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ValuesProperty"]]]], result)

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
            content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            content_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param content: 
            :param content_type: 
            :param http_code: 
            '''
            if __debug__:
                def stub(
                    *,
                    content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    content_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
                check_type(argname="argument content_type", value=content_type, expected_type=type_hints["content_type"])
                check_type(argname="argument http_code", value=http_code, expected_type=type_hints["http_code"])
            self._values: typing.Dict[str, typing.Any] = {}
            if content is not None:
                self._values["content"] = content
            if content_type is not None:
                self._values["content_type"] = content_type
            if http_code is not None:
                self._values["http_code"] = http_code

        @builtins.property
        def content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
            contain only ASCII characters.
            '''
            result = self._values.get("content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def content_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            contentType: The format of the content.
            Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
            '''
            result = self._values.get("content_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            server_group_sticky_session: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.ServerGroupStickySessionProperty", typing.Dict[str, typing.Any]]]] = None,
            server_group_tuples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.ServerGroupTuplesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param server_group_sticky_session: 
            :param server_group_tuples: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_sticky_session: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.ServerGroupStickySessionProperty, typing.Dict[str, typing.Any]]]] = None,
                    server_group_tuples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.ServerGroupTuplesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_sticky_session", value=server_group_sticky_session, expected_type=type_hints["server_group_sticky_session"])
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[str, typing.Any] = {}
            if server_group_sticky_session is not None:
                self._values["server_group_sticky_session"] = server_group_sticky_session
            if server_group_tuples is not None:
                self._values["server_group_tuples"] = server_group_tuples

        @builtins.property
        def server_group_sticky_session(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.ServerGroupStickySessionProperty"]]:
            '''
            :Property: serverGroupStickySession: The list of session persistence of server group.
            '''
            result = self._values.get("server_group_sticky_session")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.ServerGroupStickySessionProperty"]], result)

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ServerGroupTuplesProperty"]]]]:
            '''
            :Property: serverGroupTuples: The list of server groups to which requests are forwarded.
            '''
            result = self._values.get("server_group_tuples")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.ServerGroupTuplesProperty"]]]], result)

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
            key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param key: 
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            key: The key of the header.
            The key must be 1 to 40 characters in length
            It can contain letters, digits, hyphens (-), and underscores (_).
            Cookie or Host is not supported.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            values: The values of the header. The header values within a forwarding rule must be unique.
            The value must be 1 to 128 characters in length.
            It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
            The value cannot start or end with a space character.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
            The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            The host name must contain at least one period (.). It cannot start or end with a period (.).
            The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
            The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            :param value_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument value_type", value=value_type, expected_type=type_hints["value_type"])
            self._values: typing.Dict[str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value
            if value_type is not None:
                self._values["value_type"] = value_type

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def value_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            valueType: The type of the content. Valid values:
            UserDefined: user-defined.
            ReferenceHeader: references one of the request headers.
            SystemDefined: system-defined.
            '''
            result = self._values.get("value_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: values: The request method.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            server_group_tuples: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.MirrorGroupConfigServerGroupTuplesProperty", typing.Dict[str, typing.Any]]]]],
        ) -> None:
            '''
            :param server_group_tuples: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_tuples: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.MirrorGroupConfigServerGroupTuplesProperty, typing.Dict[str, typing.Any]]]]],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_tuples", value=server_group_tuples, expected_type=type_hints["server_group_tuples"])
            self._values: typing.Dict[str, typing.Any] = {
                "server_group_tuples": server_group_tuples,
            }

        @builtins.property
        def server_group_tuples(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.MirrorGroupConfigServerGroupTuplesProperty"]]]:
            '''
            :Property: serverGroupTuples:
            '''
            result = self._values.get("server_group_tuples")
            assert result is not None, "Required property 'server_group_tuples' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.MirrorGroupConfigServerGroupTuplesProperty"]]], result)

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
            server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param server_group_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "server_group_id": server_group_id,
            }

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverGroupId: The ID of server group.
            '''
            result = self._values.get("server_group_id")
            assert result is not None, "Required property 'server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: values: The path of the URL.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.QueryStringConfigValuesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.QueryStringConfigValuesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.QueryStringConfigValuesProperty"]]]]:
            '''
            :Property: values: The list of query strings.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.QueryStringConfigValuesProperty"]]]], result)

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
            key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            key: They key of the query string.
            The key must be 1 to 100 characters in length
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            The key cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            value: The value of the cookie.
            The key must be 1 to 128 characters in length.
            It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \\ | < > &.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            query: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_code: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    query: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_code", value=http_code, expected_type=type_hints["http_code"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            port: The port to which requests are redirected.
            ${port} (default): If you set the value to ${port}, you cannot add other characters to the
            value.
            You can also enter a port number. Valid values: 1 to 63335.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            protocol: The redirect protocol.
            ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
            the value.
            You can also set the value to HTTP or HTTPS.
            Note HTTPS listeners do not support HTTPS to HTTP redirection.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def query(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            self._values: typing.Dict[str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            key: The key of the response header.
            The key must be 1 to 40 characters in length.
            It can contain letters, digits, underscores (_), and hyphens (-).
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            query: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param path: 
            :param query: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    query: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if path is not None:
                self._values["path"] = path
            if query is not None:
                self._values["query"] = query

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def query(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            order: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            fixed_response_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.FixedResponseConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            forward_group_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.ForwardGroupConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            insert_header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.InsertHeaderConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            redirect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.RedirectConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            remove_header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.RemoveHeaderConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            rewrite_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.RewriteConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            traffic_limit_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.TrafficLimitConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            traffic_mirror_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.TrafficMirrorConfigProperty", typing.Dict[str, typing.Any]]]] = None,
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
                def stub(
                    *,
                    order: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    fixed_response_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.FixedResponseConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    forward_group_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.ForwardGroupConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    insert_header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.InsertHeaderConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    redirect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RedirectConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    remove_header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RemoveHeaderConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    rewrite_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RewriteConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    traffic_limit_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.TrafficLimitConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    traffic_mirror_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.TrafficMirrorConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {
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
        def order(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
            rule are applied in descending order of priority. This parameter is required. The
            priority of each action within a forwarding rule is unique.
            '''
            result = self._values.get("order")
            assert result is not None, "Required property 'order' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def fixed_response_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.FixedResponseConfigProperty"]]:
            '''
            :Property: fixedResponseConfig: The configuration of the fixed response.
            '''
            result = self._values.get("fixed_response_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.FixedResponseConfigProperty"]], result)

        @builtins.property
        def forward_group_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.ForwardGroupConfigProperty"]]:
            '''
            :Property: forwardGroupConfig: The configuration of the server group.
            '''
            result = self._values.get("forward_group_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.ForwardGroupConfigProperty"]], result)

        @builtins.property
        def insert_header_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.InsertHeaderConfigProperty"]]:
            '''
            :Property: insertHeaderConfig: The configuration of the header to be inserted.
            '''
            result = self._values.get("insert_header_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.InsertHeaderConfigProperty"]], result)

        @builtins.property
        def redirect_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RedirectConfigProperty"]]:
            '''
            :Property: redirectConfig: The configuration of the external redirect action.
            '''
            result = self._values.get("redirect_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RedirectConfigProperty"]], result)

        @builtins.property
        def remove_header_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RemoveHeaderConfigProperty"]]:
            '''
            :Property: removeHeaderConfig: The configuration of the header to be removed.
            '''
            result = self._values.get("remove_header_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RemoveHeaderConfigProperty"]], result)

        @builtins.property
        def rewrite_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RewriteConfigProperty"]]:
            '''
            :Property: rewriteConfig: The configuration of the internal redirect action.
            '''
            result = self._values.get("rewrite_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.RewriteConfigProperty"]], result)

        @builtins.property
        def traffic_limit_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.TrafficLimitConfigProperty"]]:
            '''
            :Property: trafficLimitConfig: The configuration of the traffic limit.
            '''
            result = self._values.get("traffic_limit_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.TrafficLimitConfigProperty"]], result)

        @builtins.property
        def traffic_mirror_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.TrafficMirrorConfigProperty"]]:
            '''
            :Property: trafficMirrorConfig: The configuration of the traffic mirror.
            '''
            result = self._values.get("traffic_mirror_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.TrafficMirrorConfigProperty"]], result)

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
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            cookie_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.CookieConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.HeaderConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            host_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.HostConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            method_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.MethodConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            path_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.PathConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            query_string_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.QueryStringConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            source_ip_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.SourceIpConfigProperty", typing.Dict[str, typing.Any]]]] = None,
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
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    cookie_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.CookieConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    header_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.HeaderConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    host_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.HostConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    method_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.MethodConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    path_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.PathConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    query_string_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.QueryStringConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    source_ip_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.SourceIpConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument cookie_config", value=cookie_config, expected_type=type_hints["cookie_config"])
                check_type(argname="argument header_config", value=header_config, expected_type=type_hints["header_config"])
                check_type(argname="argument host_config", value=host_config, expected_type=type_hints["host_config"])
                check_type(argname="argument method_config", value=method_config, expected_type=type_hints["method_config"])
                check_type(argname="argument path_config", value=path_config, expected_type=type_hints["path_config"])
                check_type(argname="argument query_string_config", value=query_string_config, expected_type=type_hints["query_string_config"])
                check_type(argname="argument source_ip_config", value=source_ip_config, expected_type=type_hints["source_ip_config"])
            self._values: typing.Dict[str, typing.Any] = {
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
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cookie_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.CookieConfigProperty"]]:
            '''
            :Property: cookieConfig: The configuration of the cookie.
            '''
            result = self._values.get("cookie_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.CookieConfigProperty"]], result)

        @builtins.property
        def header_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.HeaderConfigProperty"]]:
            '''
            :Property: headerConfig: The configuration of the header.
            '''
            result = self._values.get("header_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.HeaderConfigProperty"]], result)

        @builtins.property
        def host_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.HostConfigProperty"]]:
            '''
            :Property: hostConfig: The configuration of the host.
            '''
            result = self._values.get("host_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.HostConfigProperty"]], result)

        @builtins.property
        def method_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.MethodConfigProperty"]]:
            '''
            :Property: methodConfig: The configuration of the request method.
            '''
            result = self._values.get("method_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.MethodConfigProperty"]], result)

        @builtins.property
        def path_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.PathConfigProperty"]]:
            '''
            :Property: pathConfig: The configuration of the URL.
            '''
            result = self._values.get("path_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.PathConfigProperty"]], result)

        @builtins.property
        def query_string_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.QueryStringConfigProperty"]]:
            '''
            :Property: queryStringConfig: The configuration of the query string.
            '''
            result = self._values.get("query_string_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.QueryStringConfigProperty"]], result)

        @builtins.property
        def source_ip_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.SourceIpConfigProperty"]]:
            '''
            :Property: sourceIpConfig: Service traffic matching based on source IP. Required and valid when Type is SourceIP.
            '''
            result = self._values.get("source_ip_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRule.SourceIpConfigProperty"]], result)

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
            enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param enabled: 
            :param timeout: 
            '''
            if __debug__:
                def stub(
                    *,
                    enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[str, typing.Any] = {}
            if enabled is not None:
                self._values["enabled"] = enabled
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            enabled: Specifies whether to enable session persistence. Valid values:
            true: enables session persistence.
            false (default): disables session persistence.
            '''
            result = self._values.get("enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: timeout: The timeout period. Unit: seconds. Default value: 1000.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param server_group_id: 
            :param weight: 
            '''
            if __debug__:
                def stub(
                    *,
                    server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[str, typing.Any] = {}
            if server_group_id is not None:
                self._values["server_group_id"] = server_group_id
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def server_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverGroupId: The server group to which requests are forwarded.
            '''
            result = self._values.get("server_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: weight: The weight of the server group. A larger value specifies a higher weight. A server group with a higher weight receives more requests. Default value: 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param values: 
            '''
            if __debug__:
                def stub(
                    *,
                    values: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            self._values: typing.Dict[str, typing.Any] = {}
            if values is not None:
                self._values["values"] = values

        @builtins.property
        def values(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            values: The IP addresses or CIDR blocks.
            You can specify at most five values for SourceIp.
            '''
            result = self._values.get("values")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            qps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            per_ip_qps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param qps: 
            :param per_ip_qps: 
            '''
            if __debug__:
                def stub(
                    *,
                    qps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    per_ip_qps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument qps", value=qps, expected_type=type_hints["qps"])
                check_type(argname="argument per_ip_qps", value=per_ip_qps, expected_type=type_hints["per_ip_qps"])
            self._values: typing.Dict[str, typing.Any] = {
                "qps": qps,
            }
            if per_ip_qps is not None:
                self._values["per_ip_qps"] = per_ip_qps

        @builtins.property
        def qps(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: qps: Queries per second (QPS).
            '''
            result = self._values.get("qps")
            assert result is not None, "Required property 'qps' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def per_ip_qps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            perIpQps: QPS per IP address.
            Note If both QPS and PerIpQps are set, make sure that the PerIpQps is smaller than the QPS.
            '''
            result = self._values.get("per_ip_qps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            mirror_group_config: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosRule.MirrorGroupConfigProperty", typing.Dict[str, typing.Any]]],
            target_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param mirror_group_config: 
            :param target_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    mirror_group_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.MirrorGroupConfigProperty, typing.Dict[str, typing.Any]]],
                    target_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument mirror_group_config", value=mirror_group_config, expected_type=type_hints["mirror_group_config"])
                check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            self._values: typing.Dict[str, typing.Any] = {
                "mirror_group_config": mirror_group_config,
                "target_type": target_type,
            }

        @builtins.property
        def mirror_group_config(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosRule.MirrorGroupConfigProperty"]:
            '''
            :Property: mirrorGroupConfig: Traffic mirroring to server groups.
            '''
            result = self._values.get("mirror_group_config")
            assert result is not None, "Required property 'mirror_group_config' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosRule.MirrorGroupConfigProperty"], result)

        @builtins.property
        def target_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            targetType: The type of destination to which network traffic is mirrored. Valid values:
            ForwardGroupMirror: a server group
            SlsMirror: Log Service
            '''
            result = self._values.get("target_type")
            assert result is not None, "Required property 'target_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            key: The key of the cookie.
            The key must be 1 to 100 characters in length
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            It cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            value: The value of the cookie.
            The key must be 1 to 100 characters in length.
            It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            It cannot contain space characters or the following special characters: ; # [ ] { } \\ | < > &.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        rule_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[str, typing.Any]]]]],
        rule_conditions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                rule_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[str, typing.Any]]]]],
                rule_conditions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[str, typing.Any]]]]],
                rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                direction: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rule_actions", value=rule_actions, expected_type=type_hints["rule_actions"])
            check_type(argname="argument rule_conditions", value=rule_conditions, expected_type=type_hints["rule_conditions"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
        self._values: typing.Dict[str, typing.Any] = {
            "listener_id": listener_id,
            "priority": priority,
            "rule_actions": rule_actions,
            "rule_conditions": rule_conditions,
            "rule_name": rule_name,
        }
        if direction is not None:
            self._values["direction"] = direction

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        instance.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_actions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionsProperty]]]:
        '''
        :Property: ruleActions: The actions of the forwarding rule.
        '''
        result = self._values.get("rule_actions")
        assert result is not None, "Required property 'rule_actions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionsProperty]]], result)

    @builtins.property
    def rule_conditions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleConditionsProperty]]]:
        '''
        :Property: ruleConditions: The conditions of the forwarding rule.
        '''
        result = self._values.get("rule_conditions")
        assert result is not None, "Required property 'rule_conditions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleConditionsProperty]]], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        ruleName: The name of the forwarding rule.
        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: direction: Rule direction. Valid values: Request or Response.
        '''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityPolicy(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosSecurityPolicy",
):
    '''A ROS template type:  ``ALIYUN::ALB::SecurityPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityPolicyProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::SecurityPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosSecurityPolicyProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecurityPolicyId: The ID of the security policy.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ciphers")
    def ciphers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property:

        ciphers: The supported cipher suites, which are determined by the TLS protocol version.
        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "ciphers"))

    @ciphers.setter
    def ciphers(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ciphers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyName")
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "securityPolicyName"))

    @security_policy_name.setter
    def security_policy_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="tlsVersions")
    def tls_versions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "tlsVersions"))

    @tls_versions.setter
    def tls_versions(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsVersions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        ciphers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        security_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        tls_versions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::SecurityPolicy``.

        :param ciphers: 
        :param security_policy_name: 
        :param tls_versions: 
        :param resource_group_id: 
        '''
        if __debug__:
            def stub(
                *,
                ciphers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                security_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                tls_versions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "ciphers": ciphers,
            "security_policy_name": security_policy_name,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property:

        ciphers: The supported cipher suites, which are determined by the TLS protocol version.
        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("security_policy_name")
        assert result is not None, "Required property 'security_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServerGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.RosServerGroup",
):
    '''A ROS template type:  ``ALIYUN::ALB::ServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosServerGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ALB::ServerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosServerGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServerGroupId: The ID of the server group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]:
        '''
        :Property: healthCheckConfig: The configuration of health checks.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"], jsii.get(self, "healthCheckConfig"))

    @health_check_config.setter
    def health_check_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupName")
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serverGroupName"))

    @server_group_name.setter
    def server_group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protocol: The server protocol. Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupType")
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        serverGroupType: The type of the server group. Valid values:
        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        instances, elastic network interfaces (ENIs), and elastic container instances to this
        type of server group. This is the default value.
        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        of server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serverGroupType"))

    @server_group_type.setter
    def server_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="stickySessionConfig")
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.StickySessionConfigProperty"]]:
        '''
        :Property:

        stickySessionConfig: The configuration of session persistence.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.StickySessionConfigProperty"]], jsii.get(self, "stickySessionConfig"))

    @sticky_session_config.setter
    def sticky_session_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.StickySessionConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.StickySessionConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(
                value: typing.Optional[typing.List[RosServerGroup.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            health_check_enabled: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_http_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    health_check_enabled: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                    health_check_codes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    health_check_host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_http_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property:

            healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
            true: enables the feature.
            false: disables the feature.
            '''
            result = self._values.get("health_check_enabled")
            assert result is not None, "Required property 'health_check_enabled' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def health_check_codes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
            codes can be specified as a list.
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
            '''
            result = self._values.get("health_check_codes")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def health_check_connect_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            healthCheckConnectPort: The backend port that is used for health checks.
            Valid values: 0 to 65535.
            Default value: 0. This value indicates that the port on a backend server is used for health checks.
            '''
            result = self._values.get("health_check_connect_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_http_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
            Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            '''
            result = self._values.get("health_check_http_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
            Valid values: 1 to 50.
            Default value: 2.
            '''
            result = self._values.get("health_check_interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
            '''
            result = self._values.get("health_check_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
            '''
            result = self._values.get("health_check_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
            the specified timeout period, the backend server fails the health check. Unit: seconds.
            Valid values: 1 to 300.
            Default value: 5.
            Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
            '''
            result = self._values.get("health_check_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
            before it is declared healthy. In this case, the health status is changed from fail to success.
            Valid values: 2 to 10.
            Default value: 3.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
            before it is declared unhealthy. In this case, the health status is changed from success to fail.
            Valid values: 2 to 10.
            Default value: 3.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            cookie: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            cookie_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            sticky_session_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sticky_session_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param cookie: 
            :param cookie_timeout: 
            :param sticky_session_enabled: 
            :param sticky_session_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    cookie: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    cookie_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    sticky_session_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sticky_session_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument cookie", value=cookie, expected_type=type_hints["cookie"])
                check_type(argname="argument cookie_timeout", value=cookie_timeout, expected_type=type_hints["cookie_timeout"])
                check_type(argname="argument sticky_session_enabled", value=sticky_session_enabled, expected_type=type_hints["sticky_session_enabled"])
                check_type(argname="argument sticky_session_type", value=sticky_session_type, expected_type=type_hints["sticky_session_type"])
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            cookie: The cookie to be configured on the backend server.
            The cookie must be 1 to 200 characters in length, and can contain ASCII characters
            and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
            with a dollar sign ($).
            Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
            '''
            result = self._values.get("cookie")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cookie_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            cookieTimeout: The timeout period of the cookie. Unit: seconds.
            Valid values: 1 to 86400.
            Default value: 1000.
            Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
            '''
            result = self._values.get("cookie_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sticky_session_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
            Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            '''
            result = self._values.get("sticky_session_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sticky_session_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sticky_session_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
                server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                sticky_session_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''
        :Property: healthCheckConfig: The configuration of health checks.
        '''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protocol: The server protocol. Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.StickySessionConfigProperty]]:
        '''
        :Property:

        stickySessionConfig: The configuration of session persistence.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("sticky_session_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.StickySessionConfigProperty]], result)

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
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.Rule",
):
    '''A ROS resource type:  ``ALIYUN::ALB::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RuleProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RuleId: The ID of the forwarding rules.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleId"))


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
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        rule_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[str, typing.Any]]]]],
        rule_conditions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                rule_actions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleActionsProperty, typing.Dict[str, typing.Any]]]]],
                rule_conditions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosRule.RuleConditionsProperty, typing.Dict[str, typing.Any]]]]],
                rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                direction: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument rule_actions", value=rule_actions, expected_type=type_hints["rule_actions"])
            check_type(argname="argument rule_conditions", value=rule_conditions, expected_type=type_hints["rule_conditions"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
        self._values: typing.Dict[str, typing.Any] = {
            "listener_id": listener_id,
            "priority": priority,
            "rule_actions": rule_actions,
            "rule_conditions": rule_conditions,
            "rule_name": rule_name,
        }
        if direction is not None:
            self._values["direction"] = direction

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property priority: The priority of the forwarding rule.

        Valid values: 1 to 10000. A lower value specifies a higher priority.
        Note The priority of each forwarding rule within a listener must be unique.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_actions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionsProperty]]]:
        '''Property ruleActions: The actions of the forwarding rule.'''
        result = self._values.get("rule_actions")
        assert result is not None, "Required property 'rule_actions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionsProperty]]], result)

    @builtins.property
    def rule_conditions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleConditionsProperty]]]:
        '''Property ruleConditions: The conditions of the forwarding rule.'''
        result = self._values.get("rule_conditions")
        assert result is not None, "Required property 'rule_conditions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleConditionsProperty]]], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ruleName: The name of the forwarding rule.

        The name must be 2 to 128 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        must start with a letter.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property direction: Rule direction.

        Valid values: Request or Response.
        '''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecurityPolicy(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.SecurityPolicy",
):
    '''A ROS resource type:  ``ALIYUN::ALB::SecurityPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["SecurityPolicyProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[SecurityPolicyProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecurityPolicyId: The ID of the security policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecurityPolicyId"))


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
        ciphers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        security_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        tls_versions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ALB::SecurityPolicy``.

        :param ciphers: Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. The specified cipher suites must be supported by at least one TLS protocol version that you specify. Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        :param security_policy_name: Property securityPolicyName: The name of the security policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        :param tls_versions: Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            def stub(
                *,
                ciphers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                security_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                tls_versions: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "ciphers": ciphers,
            "security_policy_name": security_policy_name,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.

        The specified cipher suites must be supported by at least one TLS protocol version that you specify.
        Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property securityPolicyName: The name of the security policy.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("security_policy_name")
        assert result is not None, "Required property 'security_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.

        Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServerGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-alb.ServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::ALB::ServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ServerGroupProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ServerGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))


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
        health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sticky_session_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
                server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                sticky_session_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.StickySessionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''Property healthCheckConfig: The configuration of health checks.'''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serverGroupName: The name of the server group.

        The name must be 2 to 128 characters in length, and
        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        must start with a letter.
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        You can add only servers that are deployed
        in the specified VPC to the server group.
        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property protocol: The server protocol.

        Valid values:
        HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        is the default value.
        HTTPS: allows you to associate HTTPS listeners with backend servers.
        '''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serverGroupType: The type of the server group.

        Valid values:
        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        instances, elastic network interfaces (ENIs), and elastic container instances to this
        type of server group. This is the default value.
        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        of server group.
        '''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceName: This parameter is available only if the ALB Ingress controller is used.

        In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sticky_session_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.StickySessionConfigProperty]]:
        '''Property stickySessionConfig: The configuration of session persistence.

        Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        '''
        result = self._values.get("sticky_session_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.StickySessionConfigProperty]], result)

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
