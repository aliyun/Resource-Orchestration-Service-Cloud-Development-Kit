'''
## Aliyun ROS VS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as VS from '@alicloud/ros-cdk-vs';
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


class Group(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vs.Group",
):
    '''A ROS resource type:  ``ALIYUN::VS::Group``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["GroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VS::Group``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b80518c1d3c3f9efd7abdd3b8254edf79752e40381ee4b674e6378a8e6b73ba)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGbId")
    def attr_gb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GbId: GB ID space provided.

        (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbId"))

    @builtins.property
    @jsii.member(jsii_name="attrGbIp")
    def attr_gb_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GbIp: GB signaling server address space provided.

        (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbIp"))

    @builtins.property
    @jsii.member(jsii_name="attrGbPort")
    def attr_gb_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GbPort: GB Port space provided.

        (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbPort"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Id: Space ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))


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
        in_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        out_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        play_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        push_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lazy_pull: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VS::Group``.

        :param in_protocol: Property inProtocol: Access protocol used by the space. Value: gb28181, rtmp
        :param name: Property name: Space name.
        :param out_protocol: Property outProtocol: Play protocol used by the space, multivalued separated by commas. Value: flv, hls, rtmp
        :param play_domain: Property playDomain: Use of the domain name space broadcast stream.
        :param push_domain: Property pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        :param region: Property region: Space belongs to the region, as a service center.
        :param app: Property app: Application name space used, the default live.
        :param callback: Property callback: Updating the space callback device / flow state.
        :param description: Property description: Space description.
        :param enabled: Property enabled: Space is enabled.
        :param lazy_pull: Property lazyPull: Whether to enable on-demand pull flow, default false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e44ce4a4d4e941dd3e41c50000b779d2f21d83c2252eebebd3b992096453d7b4)
            check_type(argname="argument in_protocol", value=in_protocol, expected_type=type_hints["in_protocol"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument out_protocol", value=out_protocol, expected_type=type_hints["out_protocol"])
            check_type(argname="argument play_domain", value=play_domain, expected_type=type_hints["play_domain"])
            check_type(argname="argument push_domain", value=push_domain, expected_type=type_hints["push_domain"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument app", value=app, expected_type=type_hints["app"])
            check_type(argname="argument callback", value=callback, expected_type=type_hints["callback"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
            check_type(argname="argument lazy_pull", value=lazy_pull, expected_type=type_hints["lazy_pull"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def in_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property inProtocol: Access protocol used by the space.

        Value: gb28181, rtmp
        '''
        result = self._values.get("in_protocol")
        assert result is not None, "Required property 'in_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Space name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def out_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property outProtocol: Play protocol used by the space, multivalued separated by commas.

        Value: flv, hls, rtmp
        '''
        result = self._values.get("out_protocol")
        assert result is not None, "Required property 'out_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def play_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property playDomain: Use of the domain name space broadcast stream.'''
        result = self._values.get("play_domain")
        assert result is not None, "Required property 'play_domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def push_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pushDomain: Plug flow domain name space to use.

        (Only access to the space rtmp)
        '''
        result = self._values.get("push_domain")
        assert result is not None, "Required property 'push_domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property region: Space belongs to the region, as a service center.'''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property app: Application name space used, the default live.'''
        result = self._values.get("app")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property callback: Updating the space callback device / flow state.'''
        result = self._values.get("callback")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Space description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enabled: Space is enabled.'''
        result = self._values.get("enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lazyPull: Whether to enable on-demand pull flow, default false.'''
        result = self._values.get("lazy_pull")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vs.RosGroup",
):
    '''A ROS template type:  ``ALIYUN::VS::Group``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VS::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1393c64e66cc7a638447d9cb7d772fc41ae53bf9f364c339edfd63bf66c94bd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__41804ca245a588af6aa6393abe20f6a133b191d8b67d98bb6874fb85bd02b084)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGbId")
    def attr_gb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GbId: GB ID space provided. (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbId"))

    @builtins.property
    @jsii.member(jsii_name="attrGbIp")
    def attr_gb_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbIp"))

    @builtins.property
    @jsii.member(jsii_name="attrGbPort")
    def attr_gb_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GbPort: GB Port space provided. (Applies only to access the space marked States)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGbPort"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: Space ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6fa1b21dbacb51ffc17f4726faa710d08695b5de4727aa44b0b64b55a3e2ac3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="inProtocol")
    def in_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        inProtocol: Access protocol used by the space.
        Value: gb28181, rtmp
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "inProtocol"))

    @in_protocol.setter
    def in_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a7756c33f681541d7d2a06592d191aad200cfd2bc8cd49aa1703fb5ca5f9dbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Space name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5094f9d757bdca40c225c89749cdcdd8ec356882c7ebaf0df640e4a3c056d26b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="outProtocol")
    def out_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        outProtocol: Play protocol used by the space, multivalued separated by commas.
        Value: flv, hls, rtmp
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "outProtocol"))

    @out_protocol.setter
    def out_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ff315d428b0dda5aff0685ed661c0a375dcfc8955879d0b6a9fee512aeef24f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "outProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="playDomain")
    def play_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: playDomain: Use of the domain name space broadcast stream.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "playDomain"))

    @play_domain.setter
    def play_domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296bb64a85edbe77dd8f4418a9eb26508b3d73131f4816b2774dbfdd1b1a680f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "playDomain", value)

    @builtins.property
    @jsii.member(jsii_name="pushDomain")
    def push_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pushDomain"))

    @push_domain.setter
    def push_domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60c2c22fa2f9cef5be0438fb0b071f6e0c5b6377f30845677903f2de52f3b511)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pushDomain", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: Space belongs to the region, as a service center.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dd17f30572261fe4285ea21a507161c75b066bc9ac7b57d64be9047af33a37b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="app")
    def app(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: app: Application name space used, the default live.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "app"))

    @app.setter
    def app(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65e18fc41ce9047c0dec0c84056f08926d8e78f6cd2beef0567d987a59613e57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "app", value)

    @builtins.property
    @jsii.member(jsii_name="callback")
    def callback(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: callback: Updating the space callback device / flow state
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "callback"))

    @callback.setter
    def callback(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4ab1a75b2b9673fdd760ac6505e2045d587255fb59a84d02c5438c6595f49d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callback", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Space description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__905b572a53dbb8858aaa28aa410b5c0d9a2aa06b9b2e7de5d3cdfee01d1e363f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enabled")
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabled: Space is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enabled"))

    @enabled.setter
    def enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fa01d2af300ea49a7bf77a24c34d3c04b4484767f39e224b616180f7cb6bfe0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enabled", value)

    @builtins.property
    @jsii.member(jsii_name="lazyPull")
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lazyPull: Whether to enable on-demand pull flow, default false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lazyPull"))

    @lazy_pull.setter
    def lazy_pull(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d7f9403141384479c1ec5ed0a2b585eb7818d9effce704e61c03fef410529e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        in_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        out_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        play_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        push_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lazy_pull: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VS::Group``.

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
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f30db736193ed3e9e73e6e51dbb48151db8bd31b5fbce9087d21678bce629ce6)
            check_type(argname="argument in_protocol", value=in_protocol, expected_type=type_hints["in_protocol"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument out_protocol", value=out_protocol, expected_type=type_hints["out_protocol"])
            check_type(argname="argument play_domain", value=play_domain, expected_type=type_hints["play_domain"])
            check_type(argname="argument push_domain", value=push_domain, expected_type=type_hints["push_domain"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument app", value=app, expected_type=type_hints["app"])
            check_type(argname="argument callback", value=callback, expected_type=type_hints["callback"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
            check_type(argname="argument lazy_pull", value=lazy_pull, expected_type=type_hints["lazy_pull"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def in_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        inProtocol: Access protocol used by the space.
        Value: gb28181, rtmp
        '''
        result = self._values.get("in_protocol")
        assert result is not None, "Required property 'in_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Space name.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def out_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        outProtocol: Play protocol used by the space, multivalued separated by commas.
        Value: flv, hls, rtmp
        '''
        result = self._values.get("out_protocol")
        assert result is not None, "Required property 'out_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def play_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: playDomain: Use of the domain name space broadcast stream.
        '''
        result = self._values.get("play_domain")
        assert result is not None, "Required property 'play_domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def push_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        '''
        result = self._values.get("push_domain")
        assert result is not None, "Required property 'push_domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: Space belongs to the region, as a service center.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: app: Application name space used, the default live.
        '''
        result = self._values.get("app")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: callback: Updating the space callback device / flow state
        '''
        result = self._values.get("callback")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Space description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabled: Space is enabled.
        '''
        result = self._values.get("enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lazy_pull(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lazyPull: Whether to enable on-demand pull flow, default false
        '''
        result = self._values.get("lazy_pull")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__0b80518c1d3c3f9efd7abdd3b8254edf79752e40381ee4b674e6378a8e6b73ba(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e44ce4a4d4e941dd3e41c50000b779d2f21d83c2252eebebd3b992096453d7b4(
    *,
    in_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    out_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    play_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    push_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lazy_pull: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1393c64e66cc7a638447d9cb7d772fc41ae53bf9f364c339edfd63bf66c94bd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41804ca245a588af6aa6393abe20f6a133b191d8b67d98bb6874fb85bd02b084(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa1b21dbacb51ffc17f4726faa710d08695b5de4727aa44b0b64b55a3e2ac3b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a7756c33f681541d7d2a06592d191aad200cfd2bc8cd49aa1703fb5ca5f9dbf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5094f9d757bdca40c225c89749cdcdd8ec356882c7ebaf0df640e4a3c056d26b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ff315d428b0dda5aff0685ed661c0a375dcfc8955879d0b6a9fee512aeef24f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296bb64a85edbe77dd8f4418a9eb26508b3d73131f4816b2774dbfdd1b1a680f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60c2c22fa2f9cef5be0438fb0b071f6e0c5b6377f30845677903f2de52f3b511(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dd17f30572261fe4285ea21a507161c75b066bc9ac7b57d64be9047af33a37b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65e18fc41ce9047c0dec0c84056f08926d8e78f6cd2beef0567d987a59613e57(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4ab1a75b2b9673fdd760ac6505e2045d587255fb59a84d02c5438c6595f49d5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__905b572a53dbb8858aaa28aa410b5c0d9a2aa06b9b2e7de5d3cdfee01d1e363f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fa01d2af300ea49a7bf77a24c34d3c04b4484767f39e224b616180f7cb6bfe0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d7f9403141384479c1ec5ed0a2b585eb7818d9effce704e61c03fef410529e1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f30db736193ed3e9e73e6e51dbb48151db8bd31b5fbce9087d21678bce629ce6(
    *,
    in_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    out_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    play_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    push_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lazy_pull: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
