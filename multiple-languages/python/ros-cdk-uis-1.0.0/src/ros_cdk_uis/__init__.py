"""
## Aliyun ROS UIS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_uis as UIS
```
"""
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from ._jsii import *

import ros_cdk_core


class RosUis(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.RosUis",
):
    """A ROS template type:  ``ALIYUN::UIS::Uis``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUisProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::UIS::Uis``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUis, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDb")
    def attr_client_info_db(self) -> typing.Any:
        """
        :Attribute: ClientInfoDB: The client info DB.
        """
        return jsii.get(self, "attrClientInfoDb")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDbAccount")
    def attr_client_info_db_account(self) -> typing.Any:
        """
        :Attribute: ClientInfoDBAccount: The client info DB account.
        """
        return jsii.get(self, "attrClientInfoDbAccount")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDbPassword")
    def attr_client_info_db_password(self) -> typing.Any:
        """
        :Attribute: ClientInfoDBPassword: The client info DB password.
        """
        return jsii.get(self, "attrClientInfoDbPassword")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslClientCertUrl")
    def attr_ssl_client_cert_url(self) -> typing.Any:
        """
        :Attribute: SslClientCertUrl: The ssl client cert url.
        """
        return jsii.get(self, "attrSslClientCertUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisId")
    def attr_uis_id(self) -> typing.Any:
        """
        :Attribute: UisId: The ID of the instance.
        """
        return jsii.get(self, "attrUisId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the instance.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


class RosUisConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.RosUisConnection",
):
    """A ROS template type:  ``ALIYUN::UIS::UisConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUisConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::UIS::UisConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUisConnection, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisConnectionId")
    def attr_uis_connection_id(self) -> typing.Any:
        """
        :Attribute: UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
        """
        return jsii.get(self, "attrUisConnectionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="uisNodeId")
    def uis_node_id(self) -> builtins.str:
        """
        :Property: uisNodeId: Node instance ID.
        """
        return jsii.get(self, "uisNodeId")

    @uis_node_id.setter # type: ignore
    def uis_node_id(self, value: builtins.str) -> None:
        jsii.set(self, "uisNodeId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="uisProtocol")
    def uis_protocol(self) -> builtins.str:
        """
        :Property: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
        """
        return jsii.get(self, "uisProtocol")

    @uis_protocol.setter # type: ignore
    def uis_protocol(self, value: builtins.str) -> None:
        jsii.set(self, "uisProtocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: A description of the tunnel connection.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="greConfig")
    def gre_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosUisConnection.GreConfigProperty", ros_cdk_core.IResolvable]]]]:
        """
        :Property: greConfig: The config for GRE. Item can be overwritten, but removed.
        """
        return jsii.get(self, "greConfig")

    @gre_config.setter # type: ignore
    def gre_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosUisConnection.GreConfigProperty", ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "greConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the tunnel connection.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sslConfig")
    def ssl_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUisConnection.SslConfigProperty"]]:
        """
        :Property: sslConfig: The config for SSLVPN.
        """
        return jsii.get(self, "sslConfig")

    @ssl_config.setter # type: ignore
    def ssl_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUisConnection.SslConfigProperty"]],
    ) -> None:
        jsii.set(self, "sslConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "customer_ip": "customerIp",
            "customer_subnet": "customerSubnet",
            "customer_tunnel_ip": "customerTunnelIp",
            "local_ip": "localIp",
            "local_tunnel_ip": "localTunnelIp",
        },
    )
    class GreConfigProperty:
        def __init__(
            self,
            *,
            customer_ip: builtins.str,
            customer_subnet: builtins.str,
            customer_tunnel_ip: builtins.str,
            local_ip: builtins.str,
            local_tunnel_ip: builtins.str,
        ) -> None:
            """
            :param customer_ip: 
            :param customer_subnet: 
            :param customer_tunnel_ip: 
            :param local_ip: 
            :param local_tunnel_ip: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "customer_ip": customer_ip,
                "customer_subnet": customer_subnet,
                "customer_tunnel_ip": customer_tunnel_ip,
                "local_ip": local_ip,
                "local_tunnel_ip": local_tunnel_ip,
            }

        @builtins.property
        def customer_ip(self) -> builtins.str:
            """
            :Property: customerIp: The customer's public IP.
            """
            result = self._values.get("customer_ip")
            assert result is not None, "Required property 'customer_ip' is missing"
            return result

        @builtins.property
        def customer_subnet(self) -> builtins.str:
            """
            :Property: customerSubnet: The CIDR of customer's GRE private network.
            """
            result = self._values.get("customer_subnet")
            assert result is not None, "Required property 'customer_subnet' is missing"
            return result

        @builtins.property
        def customer_tunnel_ip(self) -> builtins.str:
            """
            :Property: customerTunnelIp: The GRE Tunnel IP for Customer.
            """
            result = self._values.get("customer_tunnel_ip")
            assert result is not None, "Required property 'customer_tunnel_ip' is missing"
            return result

        @builtins.property
        def local_ip(self) -> builtins.str:
            """
            :Property: localIp: UisNode IP.
            """
            result = self._values.get("local_ip")
            assert result is not None, "Required property 'local_ip' is missing"
            return result

        @builtins.property
        def local_tunnel_ip(self) -> builtins.str:
            """
            :Property: localTunnelIp: The GRE Tunnel IP for UisNode.
            """
            result = self._values.get("local_tunnel_ip")
            assert result is not None, "Required property 'local_tunnel_ip' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GreConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"cipher": "cipher", "port": "port", "protocol": "protocol"},
    )
    class SslConfigProperty:
        def __init__(
            self,
            *,
            cipher: builtins.str,
            port: jsii.Number,
            protocol: builtins.str,
        ) -> None:
            """
            :param cipher: 
            :param port: 
            :param protocol: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "cipher": cipher,
                "port": port,
                "protocol": protocol,
            }

        @builtins.property
        def cipher(self) -> builtins.str:
            """
            :Property: cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
            """
            result = self._values.get("cipher")
            assert result is not None, "Required property 'cipher' is missing"
            return result

        @builtins.property
        def port(self) -> jsii.Number:
            """
            :Property: port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
            """
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return result

        @builtins.property
        def protocol(self) -> builtins.str:
            """
            :Property: protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
            """
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SslConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.RosUisConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "uis_node_id": "uisNodeId",
        "uis_protocol": "uisProtocol",
        "description": "description",
        "gre_config": "greConfig",
        "name": "name",
        "ssl_config": "sslConfig",
    },
)
class RosUisConnectionProps:
    def __init__(
        self,
        *,
        uis_node_id: builtins.str,
        uis_protocol: builtins.str,
        description: typing.Optional[builtins.str] = None,
        gre_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosUisConnection.GreConfigProperty, ros_cdk_core.IResolvable]]]] = None,
        name: typing.Optional[builtins.str] = None,
        ssl_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUisConnection.SslConfigProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::UisConnection``.

        :param uis_node_id: 
        :param uis_protocol: 
        :param description: 
        :param gre_config: 
        :param name: 
        :param ssl_config: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "uis_node_id": uis_node_id,
            "uis_protocol": uis_protocol,
        }
        if description is not None:
            self._values["description"] = description
        if gre_config is not None:
            self._values["gre_config"] = gre_config
        if name is not None:
            self._values["name"] = name
        if ssl_config is not None:
            self._values["ssl_config"] = ssl_config

    @builtins.property
    def uis_node_id(self) -> builtins.str:
        """
        :Property: uisNodeId: Node instance ID.
        """
        result = self._values.get("uis_node_id")
        assert result is not None, "Required property 'uis_node_id' is missing"
        return result

    @builtins.property
    def uis_protocol(self) -> builtins.str:
        """
        :Property: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
        """
        result = self._values.get("uis_protocol")
        assert result is not None, "Required property 'uis_protocol' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: A description of the tunnel connection.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def gre_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosUisConnection.GreConfigProperty, ros_cdk_core.IResolvable]]]]:
        """
        :Property: greConfig: The config for GRE. Item can be overwritten, but removed.
        """
        result = self._values.get("gre_config")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the tunnel connection.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def ssl_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUisConnection.SslConfigProperty]]:
        """
        :Property: sslConfig: The config for SSLVPN.
        """
        result = self._values.get("ssl_config")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUisConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUisNode(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.RosUisNode",
):
    """A ROS template type:  ``ALIYUN::UIS::UisNode``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUisNodeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::UIS::UisNode``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUisNode, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeActiveIps")
    def attr_uis_node_active_ips(self) -> typing.Any:
        """
        :Attribute: UisNodeActiveIps: The node active IP list.
        """
        return jsii.get(self, "attrUisNodeActiveIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeId")
    def attr_uis_node_id(self) -> typing.Any:
        """
        :Attribute: UisNodeId: The node ID of the instance.
        """
        return jsii.get(self, "attrUisNodeId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeIps")
    def attr_uis_node_ips(self) -> typing.Any:
        """
        :Attribute: UisNodeIps: The node IP list.
        """
        return jsii.get(self, "attrUisNodeIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipAddrsNum")
    def ip_addrs_num(self) -> jsii.Number:
        """
        :Property: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        """
        return jsii.get(self, "ipAddrsNum")

    @ip_addrs_num.setter # type: ignore
    def ip_addrs_num(self, value: jsii.Number) -> None:
        jsii.set(self, "ipAddrsNum", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="uisId")
    def uis_id(self) -> builtins.str:
        """
        :Property: uisId: The instance ID to which the boarding point belongs.
        """
        return jsii.get(self, "uisId")

    @uis_id.setter # type: ignore
    def uis_id(self, value: builtins.str) -> None:
        jsii.set(self, "uisId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="uisNodeAreaId")
    def uis_node_area_id(self) -> builtins.str:
        """
        :Property: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
        """
        return jsii.get(self, "uisNodeAreaId")

    @uis_node_area_id.setter # type: ignore
    def uis_node_area_id(self, value: builtins.str) -> None:
        jsii.set(self, "uisNodeAreaId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="uisNodeBandwidth")
    def uis_node_bandwidth(self) -> jsii.Number:
        """
        :Property:

        uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
        If you do not specify a bandwidth, the default value is 20Mbps.
        """
        return jsii.get(self, "uisNodeBandwidth")

    @uis_node_bandwidth.setter # type: ignore
    def uis_node_bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "uisNodeBandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the instance of the boarding point.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the instance of the boarding point.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.RosUisNodeProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_addrs_num": "ipAddrsNum",
        "uis_id": "uisId",
        "uis_node_area_id": "uisNodeAreaId",
        "uis_node_bandwidth": "uisNodeBandwidth",
        "description": "description",
        "name": "name",
    },
)
class RosUisNodeProps:
    def __init__(
        self,
        *,
        ip_addrs_num: jsii.Number,
        uis_id: builtins.str,
        uis_node_area_id: builtins.str,
        uis_node_bandwidth: jsii.Number,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::UisNode``.

        :param ip_addrs_num: 
        :param uis_id: 
        :param uis_node_area_id: 
        :param uis_node_bandwidth: 
        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ip_addrs_num": ip_addrs_num,
            "uis_id": uis_id,
            "uis_node_area_id": uis_node_area_id,
            "uis_node_bandwidth": uis_node_bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_addrs_num(self) -> jsii.Number:
        """
        :Property: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        """
        result = self._values.get("ip_addrs_num")
        assert result is not None, "Required property 'ip_addrs_num' is missing"
        return result

    @builtins.property
    def uis_id(self) -> builtins.str:
        """
        :Property: uisId: The instance ID to which the boarding point belongs.
        """
        result = self._values.get("uis_id")
        assert result is not None, "Required property 'uis_id' is missing"
        return result

    @builtins.property
    def uis_node_area_id(self) -> builtins.str:
        """
        :Property: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
        """
        result = self._values.get("uis_node_area_id")
        assert result is not None, "Required property 'uis_node_area_id' is missing"
        return result

    @builtins.property
    def uis_node_bandwidth(self) -> jsii.Number:
        """
        :Property:

        uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
        If you do not specify a bandwidth, the default value is 20Mbps.
        """
        result = self._values.get("uis_node_bandwidth")
        assert result is not None, "Required property 'uis_node_bandwidth' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the instance of the boarding point.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the instance of the boarding point.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUisNodeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.RosUisProps",
    jsii_struct_bases=[],
    name_mapping={"description": "description", "name": "name"},
)
class RosUisProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::Uis``.

        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the instance.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Uis(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.Uis",
):
    """A ROS resource type:  ``ALIYUN::UIS::Uis``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["UisProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::UIS::Uis``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Uis, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDb")
    def attr_client_info_db(self) -> typing.Any:
        """
        :Attribute: ClientInfoDB: The client info DB.
        """
        return jsii.get(self, "attrClientInfoDb")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDbAccount")
    def attr_client_info_db_account(self) -> typing.Any:
        """
        :Attribute: ClientInfoDBAccount: The client info DB account.
        """
        return jsii.get(self, "attrClientInfoDbAccount")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientInfoDbPassword")
    def attr_client_info_db_password(self) -> typing.Any:
        """
        :Attribute: ClientInfoDBPassword: The client info DB password.
        """
        return jsii.get(self, "attrClientInfoDbPassword")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSslClientCertUrl")
    def attr_ssl_client_cert_url(self) -> typing.Any:
        """
        :Attribute: SslClientCertUrl: The ssl client cert url.
        """
        return jsii.get(self, "attrSslClientCertUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisId")
    def attr_uis_id(self) -> typing.Any:
        """
        :Attribute: UisId: The ID of the instance.
        """
        return jsii.get(self, "attrUisId")


class UisConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.UisConnection",
):
    """A ROS resource type:  ``ALIYUN::UIS::UisConnection``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UisConnectionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::UIS::UisConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(UisConnection, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisConnectionId")
    def attr_uis_connection_id(self) -> typing.Any:
        """
        :Attribute: UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
        """
        return jsii.get(self, "attrUisConnectionId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.UisConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "uis_node_id": "uisNodeId",
        "uis_protocol": "uisProtocol",
        "description": "description",
        "gre_config": "greConfig",
        "name": "name",
        "ssl_config": "sslConfig",
    },
)
class UisConnectionProps:
    def __init__(
        self,
        *,
        uis_node_id: builtins.str,
        uis_protocol: builtins.str,
        description: typing.Optional[builtins.str] = None,
        gre_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosUisConnection.GreConfigProperty, ros_cdk_core.IResolvable]]]] = None,
        name: typing.Optional[builtins.str] = None,
        ssl_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUisConnection.SslConfigProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::UisConnection``.

        :param uis_node_id: 
        :param uis_protocol: 
        :param description: 
        :param gre_config: 
        :param name: 
        :param ssl_config: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "uis_node_id": uis_node_id,
            "uis_protocol": uis_protocol,
        }
        if description is not None:
            self._values["description"] = description
        if gre_config is not None:
            self._values["gre_config"] = gre_config
        if name is not None:
            self._values["name"] = name
        if ssl_config is not None:
            self._values["ssl_config"] = ssl_config

    @builtins.property
    def uis_node_id(self) -> builtins.str:
        """
        :Property: uisNodeId: Node instance ID.
        """
        result = self._values.get("uis_node_id")
        assert result is not None, "Required property 'uis_node_id' is missing"
        return result

    @builtins.property
    def uis_protocol(self) -> builtins.str:
        """
        :Property: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
        """
        result = self._values.get("uis_protocol")
        assert result is not None, "Required property 'uis_protocol' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: A description of the tunnel connection.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def gre_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosUisConnection.GreConfigProperty, ros_cdk_core.IResolvable]]]]:
        """
        :Property: greConfig: The config for GRE. Item can be overwritten, but removed.
        """
        result = self._values.get("gre_config")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the tunnel connection.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def ssl_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUisConnection.SslConfigProperty]]:
        """
        :Property: sslConfig: The config for SSLVPN.
        """
        result = self._values.get("ssl_config")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UisConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UisNode(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-uis.UisNode",
):
    """A ROS resource type:  ``ALIYUN::UIS::UisNode``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UisNodeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::UIS::UisNode``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(UisNode, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeActiveIps")
    def attr_uis_node_active_ips(self) -> typing.Any:
        """
        :Attribute: UisNodeActiveIps: The node active IP list.
        """
        return jsii.get(self, "attrUisNodeActiveIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeId")
    def attr_uis_node_id(self) -> typing.Any:
        """
        :Attribute: UisNodeId: The node ID of the instance.
        """
        return jsii.get(self, "attrUisNodeId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUisNodeIps")
    def attr_uis_node_ips(self) -> typing.Any:
        """
        :Attribute: UisNodeIps: The node IP list.
        """
        return jsii.get(self, "attrUisNodeIps")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.UisNodeProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_addrs_num": "ipAddrsNum",
        "uis_id": "uisId",
        "uis_node_area_id": "uisNodeAreaId",
        "uis_node_bandwidth": "uisNodeBandwidth",
        "description": "description",
        "name": "name",
    },
)
class UisNodeProps:
    def __init__(
        self,
        *,
        ip_addrs_num: jsii.Number,
        uis_id: builtins.str,
        uis_node_area_id: builtins.str,
        uis_node_bandwidth: jsii.Number,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::UisNode``.

        :param ip_addrs_num: 
        :param uis_id: 
        :param uis_node_area_id: 
        :param uis_node_bandwidth: 
        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ip_addrs_num": ip_addrs_num,
            "uis_id": uis_id,
            "uis_node_area_id": uis_node_area_id,
            "uis_node_bandwidth": uis_node_bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_addrs_num(self) -> jsii.Number:
        """
        :Property: ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
        """
        result = self._values.get("ip_addrs_num")
        assert result is not None, "Required property 'ip_addrs_num' is missing"
        return result

    @builtins.property
    def uis_id(self) -> builtins.str:
        """
        :Property: uisId: The instance ID to which the boarding point belongs.
        """
        result = self._values.get("uis_id")
        assert result is not None, "Required property 'uis_id' is missing"
        return result

    @builtins.property
    def uis_node_area_id(self) -> builtins.str:
        """
        :Property: uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
        """
        result = self._values.get("uis_node_area_id")
        assert result is not None, "Required property 'uis_node_area_id' is missing"
        return result

    @builtins.property
    def uis_node_bandwidth(self) -> jsii.Number:
        """
        :Property:

        uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
        If you do not specify a bandwidth, the default value is 20Mbps.
        """
        result = self._values.get("uis_node_bandwidth")
        assert result is not None, "Required property 'uis_node_bandwidth' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the instance of the boarding point.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the instance of the boarding point.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UisNodeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-uis.UisProps",
    jsii_struct_bases=[],
    name_mapping={"description": "description", "name": "name"},
)
class UisProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::UIS::Uis``.

        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: Description of the instance.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosUis",
    "RosUisConnection",
    "RosUisConnectionProps",
    "RosUisNode",
    "RosUisNodeProps",
    "RosUisProps",
    "Uis",
    "UisConnection",
    "UisConnectionProps",
    "UisNode",
    "UisNodeProps",
    "UisProps",
]

publication.publish()
