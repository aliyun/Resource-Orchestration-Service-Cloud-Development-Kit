"""
## Aliyun ROS VS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_vs as VS
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


class Group(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vs.Group",
):
    """A ROS resource type:  ``ALIYUN::VS::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::VS::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Group, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGbId")
    def attr_gb_id(self) -> typing.Any:
        """
        :Attribute: GbId: GB ID space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGbIp")
    def attr_gb_ip(self) -> typing.Any:
        """
        :Attribute: GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGbPort")
    def attr_gb_port(self) -> typing.Any:
        """
        :Attribute: GbPort: GB Port space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: Space ID.
        """
        return jsii.get(self, "attrId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vs.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "in_protocol": "inProtocol",
        "name": "name",
        "out_protocol": "outProtocol",
        "play_domain": "playDomain",
        "push_domain": "pushDomain",
        "region": "region",
        "app": "app",
        "callback": "callback",
        "description": "description",
        "enabled": "enabled",
        "lazy_pull": "lazyPull",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        in_protocol: builtins.str,
        name: builtins.str,
        out_protocol: builtins.str,
        play_domain: builtins.str,
        push_domain: builtins.str,
        region: builtins.str,
        app: typing.Optional[builtins.str] = None,
        callback: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lazy_pull: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VS::Group``.

        :param in_protocol: 
        :param name: 
        :param out_protocol: 
        :param play_domain: 
        :param push_domain: 
        :param region: 
        :param app: 
        :param callback: 
        :param description: 
        :param enabled: 
        :param lazy_pull: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "in_protocol": in_protocol,
            "name": name,
            "out_protocol": out_protocol,
            "play_domain": play_domain,
            "push_domain": push_domain,
            "region": region,
        }
        if app is not None:
            self._values["app"] = app
        if callback is not None:
            self._values["callback"] = callback
        if description is not None:
            self._values["description"] = description
        if enabled is not None:
            self._values["enabled"] = enabled
        if lazy_pull is not None:
            self._values["lazy_pull"] = lazy_pull

    @builtins.property
    def in_protocol(self) -> builtins.str:
        """
        :Property:

        inProtocol: Access protocol used by the space.
        Value: gb28181, rtmp
        """
        result = self._values.get("in_protocol")
        assert result is not None, "Required property 'in_protocol' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Space name.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def out_protocol(self) -> builtins.str:
        """
        :Property:

        outProtocol: Play protocol used by the space, multivalued separated by commas.
        Value: flv, hls, rtmp
        """
        result = self._values.get("out_protocol")
        assert result is not None, "Required property 'out_protocol' is missing"
        return result

    @builtins.property
    def play_domain(self) -> builtins.str:
        """
        :Property: playDomain: Use of the domain name space broadcast stream.
        """
        result = self._values.get("play_domain")
        assert result is not None, "Required property 'play_domain' is missing"
        return result

    @builtins.property
    def push_domain(self) -> builtins.str:
        """
        :Property: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        """
        result = self._values.get("push_domain")
        assert result is not None, "Required property 'push_domain' is missing"
        return result

    @builtins.property
    def region(self) -> builtins.str:
        """
        :Property: region: Space belongs to the region, as a service center.
        """
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return result

    @builtins.property
    def app(self) -> typing.Optional[builtins.str]:
        """
        :Property: app: Application name space used, the default live.
        """
        result = self._values.get("app")
        return result

    @builtins.property
    def callback(self) -> typing.Optional[builtins.str]:
        """
        :Property: callback: Updating the space callback device / flow state
        """
        result = self._values.get("callback")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Space description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enabled: Space is enabled.
        """
        result = self._values.get("enabled")
        return result

    @builtins.property
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: lazyPull: Whether to enable on-demand pull flow, default false
        """
        result = self._values.get("lazy_pull")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vs.RosGroup",
):
    """A ROS template type:  ``ALIYUN::VS::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::VS::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGbId")
    def attr_gb_id(self) -> typing.Any:
        """
        :Attribute: GbId: GB ID space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGbIp")
    def attr_gb_ip(self) -> typing.Any:
        """
        :Attribute: GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGbPort")
    def attr_gb_port(self) -> typing.Any:
        """
        :Attribute: GbPort: GB Port space provided. (Applies only to access the space marked States)
        """
        return jsii.get(self, "attrGbPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: Space ID.
        """
        return jsii.get(self, "attrId")

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
    @jsii.member(jsii_name="inProtocol")
    def in_protocol(self) -> builtins.str:
        """
        :Property:

        inProtocol: Access protocol used by the space.
        Value: gb28181, rtmp
        """
        return jsii.get(self, "inProtocol")

    @in_protocol.setter # type: ignore
    def in_protocol(self, value: builtins.str) -> None:
        jsii.set(self, "inProtocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: Space name.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="outProtocol")
    def out_protocol(self) -> builtins.str:
        """
        :Property:

        outProtocol: Play protocol used by the space, multivalued separated by commas.
        Value: flv, hls, rtmp
        """
        return jsii.get(self, "outProtocol")

    @out_protocol.setter # type: ignore
    def out_protocol(self, value: builtins.str) -> None:
        jsii.set(self, "outProtocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="playDomain")
    def play_domain(self) -> builtins.str:
        """
        :Property: playDomain: Use of the domain name space broadcast stream.
        """
        return jsii.get(self, "playDomain")

    @play_domain.setter # type: ignore
    def play_domain(self, value: builtins.str) -> None:
        jsii.set(self, "playDomain", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pushDomain")
    def push_domain(self) -> builtins.str:
        """
        :Property: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        """
        return jsii.get(self, "pushDomain")

    @push_domain.setter # type: ignore
    def push_domain(self, value: builtins.str) -> None:
        jsii.set(self, "pushDomain", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="region")
    def region(self) -> builtins.str:
        """
        :Property: region: Space belongs to the region, as a service center.
        """
        return jsii.get(self, "region")

    @region.setter # type: ignore
    def region(self, value: builtins.str) -> None:
        jsii.set(self, "region", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="app")
    def app(self) -> typing.Optional[builtins.str]:
        """
        :Property: app: Application name space used, the default live.
        """
        return jsii.get(self, "app")

    @app.setter # type: ignore
    def app(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "app", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="callback")
    def callback(self) -> typing.Optional[builtins.str]:
        """
        :Property: callback: Updating the space callback device / flow state
        """
        return jsii.get(self, "callback")

    @callback.setter # type: ignore
    def callback(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "callback", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Space description.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enabled")
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enabled: Space is enabled.
        """
        return jsii.get(self, "enabled")

    @enabled.setter # type: ignore
    def enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enabled", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="lazyPull")
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: lazyPull: Whether to enable on-demand pull flow, default false
        """
        return jsii.get(self, "lazyPull")

    @lazy_pull.setter # type: ignore
    def lazy_pull(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "lazyPull", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vs.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "in_protocol": "inProtocol",
        "name": "name",
        "out_protocol": "outProtocol",
        "play_domain": "playDomain",
        "push_domain": "pushDomain",
        "region": "region",
        "app": "app",
        "callback": "callback",
        "description": "description",
        "enabled": "enabled",
        "lazy_pull": "lazyPull",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        in_protocol: builtins.str,
        name: builtins.str,
        out_protocol: builtins.str,
        play_domain: builtins.str,
        push_domain: builtins.str,
        region: builtins.str,
        app: typing.Optional[builtins.str] = None,
        callback: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lazy_pull: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::VS::Group``.

        :param in_protocol: 
        :param name: 
        :param out_protocol: 
        :param play_domain: 
        :param push_domain: 
        :param region: 
        :param app: 
        :param callback: 
        :param description: 
        :param enabled: 
        :param lazy_pull: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "in_protocol": in_protocol,
            "name": name,
            "out_protocol": out_protocol,
            "play_domain": play_domain,
            "push_domain": push_domain,
            "region": region,
        }
        if app is not None:
            self._values["app"] = app
        if callback is not None:
            self._values["callback"] = callback
        if description is not None:
            self._values["description"] = description
        if enabled is not None:
            self._values["enabled"] = enabled
        if lazy_pull is not None:
            self._values["lazy_pull"] = lazy_pull

    @builtins.property
    def in_protocol(self) -> builtins.str:
        """
        :Property:

        inProtocol: Access protocol used by the space.
        Value: gb28181, rtmp
        """
        result = self._values.get("in_protocol")
        assert result is not None, "Required property 'in_protocol' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Space name.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def out_protocol(self) -> builtins.str:
        """
        :Property:

        outProtocol: Play protocol used by the space, multivalued separated by commas.
        Value: flv, hls, rtmp
        """
        result = self._values.get("out_protocol")
        assert result is not None, "Required property 'out_protocol' is missing"
        return result

    @builtins.property
    def play_domain(self) -> builtins.str:
        """
        :Property: playDomain: Use of the domain name space broadcast stream.
        """
        result = self._values.get("play_domain")
        assert result is not None, "Required property 'play_domain' is missing"
        return result

    @builtins.property
    def push_domain(self) -> builtins.str:
        """
        :Property: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        """
        result = self._values.get("push_domain")
        assert result is not None, "Required property 'push_domain' is missing"
        return result

    @builtins.property
    def region(self) -> builtins.str:
        """
        :Property: region: Space belongs to the region, as a service center.
        """
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return result

    @builtins.property
    def app(self) -> typing.Optional[builtins.str]:
        """
        :Property: app: Application name space used, the default live.
        """
        result = self._values.get("app")
        return result

    @builtins.property
    def callback(self) -> typing.Optional[builtins.str]:
        """
        :Property: callback: Updating the space callback device / flow state
        """
        result = self._values.get("callback")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Space description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enabled: Space is enabled.
        """
        result = self._values.get("enabled")
        return result

    @builtins.property
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: lazyPull: Whether to enable on-demand pull flow, default false
        """
        result = self._values.get("lazy_pull")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Group",
    "GroupProps",
    "RosGroup",
    "RosGroupProps",
]

publication.publish()
