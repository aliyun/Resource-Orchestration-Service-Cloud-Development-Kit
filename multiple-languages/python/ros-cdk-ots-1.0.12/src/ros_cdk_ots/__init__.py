'''
## Aliyun ROS OTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OTS from '@alicloud/ros-cdk-ots';
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


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.Instance",
):
    '''A ROS resource type:  ``ALIYUN::OTS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ba3d1216390b141d4f3daeb8301ea5134ca8af9f9019bdceda451d99bfe8ec7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateEndpoint: Private endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicEndpoint: Public endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcEndpoint: Vpc endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcEndpoint"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: Property instanceName: The name of the instance.
        :param cluster_type: Property clusterType: Cluster type, the default is SSD.
        :param description: Property description: Instance description.
        :param network: Property network: Instance network type, default is NORMAL.
        :param tags: Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a78c2426eed093f45184b73eb7ef16c656e8f408a390a2d8f7b7dbe504f44d3a)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the instance.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterType: Cluster type, the default is SSD.'''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Instance description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property network: Instance network type, default is NORMAL.'''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::OTS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e069dbcb2422faa6652f0bd5d3f932ee351f0a16076e21ec5359421e142b19cf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e73ce629b7c2bda130c56f5eee9bc4503d5f5c0781778f7ea47c28710aeee23c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Instance name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateEndpoint: Private endpoint
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicEndpoint: Public endpoint
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcEndpoint: Vpc endpoint
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcEndpoint"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__97ffff63ac8d5f8a36958093f948f40edfce2193766dd82c2d758726d9d19032)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd18ed5e57cad26ad23103e30398bacbe15934f2f6c134d21732ce21904b4d21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterType: Cluster type, the default is SSD.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__313b28f96af253980b6be8b496f0cc9035ac5011a30ca8f21fbe657e9964dbb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Instance description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea002c55ee14934e698fa72e75abdb6aa6a85baa669b95548b88f1cfea70292f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="network")
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: network: Instance network type, default is NORMAL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "network"))

    @network.setter
    def network(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd5cca86302a35b22d9ae70362889ebd959379df66a23c6742f0a329d1aa63de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "network", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d194fc372165a39022509ef18cf783722c5da67a6875fb9b0adb27b66d5a5c1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__126f05826f3fcc1e5f449c1bfca1cec31419777ce0e1c9d14ea5b7168689a2e3)
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
    jsii_type="@alicloud/ros-cdk-ots.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: 
        :param cluster_type: 
        :param description: 
        :param network: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f0bd712b0d57e1aa9e76ba3def033ed588dc1211235c72af31a6ad1de183e5d)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterType: Cluster type, the default is SSD.
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Instance description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: network: Instance network type, default is NORMAL.
        '''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSearchIndex(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex",
):
    '''A ROS template type:  ``ALIYUN::OTS::SearchIndex``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSearchIndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::SearchIndex``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e989230a9c7cadb0fe2751469944123998f3f563c3b832f333e94e1e61a339e0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6f174325dd706e9ab3f18ee9b8095b3ed7f76d4e5727c22c925e486885655724)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexName: Index name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__24d202e8242e0c851434547fd7ee694239d011ea16b92c9ca92052f349867461)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fieldSchemas")
    def field_schemas(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]]:
        '''
        :Property: fieldSchemas: list of field_schema.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]], jsii.get(self, "fieldSchemas"))

    @field_schemas.setter
    def field_schemas(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ccab90dc0071e7e988023cd7e5f5dfcb63e55207629266fe2f3a05aecd88296)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fieldSchemas", value)

    @builtins.property
    @jsii.member(jsii_name="indexName")
    def index_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: indexName: The index name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "indexName"))

    @index_name.setter
    def index_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6ac910a90655352237ec30c4e1b9e349d9e09e5b6198b287518ae3ea695bdab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "indexName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab0ef82686f2283d751a785828b4c4f9ccc2e8dd33247f840120272b24be94dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="tableName")
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "tableName"))

    @table_name.setter
    def table_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d6fd8f47fddd452b386274f1ed5760d400f38ec8c0f2ce40291d5776725d9e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tableName", value)

    @builtins.property
    @jsii.member(jsii_name="indexSetting")
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSettingProperty"]]:
        '''
        :Property: indexSetting: Index settings
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSettingProperty"]], jsii.get(self, "indexSetting"))

    @index_setting.setter
    def index_setting(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSettingProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be72777c5ec3dcb811c67179ebf2915d3e2dd2135b88d6cf75bdcc8ef7f0409d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "indexSetting", value)

    @builtins.property
    @jsii.member(jsii_name="indexSort")
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSortProperty"]]:
        '''
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSortProperty"]], jsii.get(self, "indexSort"))

    @index_sort.setter
    def index_sort(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.IndexSortProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d708a4dbc290e6e29d6a4bce66c9442519aecee4f1947e24d645c250df8df51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "indexSort", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "field_type": "fieldType",
            "analyzer": "analyzer",
            "enable_sort_and_agg": "enableSortAndAgg",
            "index": "index",
            "is_array": "isArray",
            "store": "store",
            "sub_field_schemas": "subFieldSchemas",
        },
    )
    class FieldSchemasProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            field_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            analyzer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            index: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_array: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sub_field_schemas: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.SubFieldSchemasProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param field_type: 
            :param analyzer: 
            :param enable_sort_and_agg: 
            :param index: 
            :param is_array: 
            :param store: 
            :param sub_field_schemas: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__62df04ee3f2cb3389ded462ba9e4bfc204ae31134366550d47d6be2a52768b91)
                check_type(argname="argument field_name", value=field_name, expected_type=type_hints["field_name"])
                check_type(argname="argument field_type", value=field_type, expected_type=type_hints["field_type"])
                check_type(argname="argument analyzer", value=analyzer, expected_type=type_hints["analyzer"])
                check_type(argname="argument enable_sort_and_agg", value=enable_sort_and_agg, expected_type=type_hints["enable_sort_and_agg"])
                check_type(argname="argument index", value=index, expected_type=type_hints["index"])
                check_type(argname="argument is_array", value=is_array, expected_type=type_hints["is_array"])
                check_type(argname="argument store", value=store, expected_type=type_hints["store"])
                check_type(argname="argument sub_field_schemas", value=sub_field_schemas, expected_type=type_hints["sub_field_schemas"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "field_name": field_name,
                "field_type": field_type,
            }
            if analyzer is not None:
                self._values["analyzer"] = analyzer
            if enable_sort_and_agg is not None:
                self._values["enable_sort_and_agg"] = enable_sort_and_agg
            if index is not None:
                self._values["index"] = index
            if is_array is not None:
                self._values["is_array"] = is_array
            if store is not None:
                self._values["store"] = store
            if sub_field_schemas is not None:
                self._values["sub_field_schemas"] = sub_field_schemas

        @builtins.property
        def field_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            fieldName: This parameter specifies the name of the field (column) to index.
            The field can be a primary key column or an attribute column.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def field_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            fieldType: This parameter specifies the type of the field. Type: FieldType.
            For more information, see the description of field types for a search index.
            '''
            result = self._values.get("field_type")
            assert result is not None, "Required property 'field_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def analyzer(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            analyzer: This parameter specifies the tokenizer.
            You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            '''
            result = self._values.get("analyzer")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_sort_and_agg(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            '''
            result = self._values.get("enable_sort_and_agg")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def index(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            index: This parameter specifies whether to index the column.
            The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            '''
            result = self._values.get("index")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_array(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isArray: This parameter specifies whether the column is an array.
            A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            '''
            result = self._values.get("is_array")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            store: This parameter specifies whether to store the values of the field in the search index.
            A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            This configuration optimizes query performance.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sub_field_schemas(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.SubFieldSchemasProperty"]]]]:
            '''
            :Property:

            subFieldSchemas: This parameter specifies the list of field schemas for subfields.
            If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
            '''
            result = self._values.get("sub_field_schemas")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.SubFieldSchemasProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldSchemasProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class FieldSortProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            sort_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param sort_mode: 
            :param sort_order: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__acd25d6ae0d18ef262d14cc296bfc7cbd8f9c72e1e49d50e921a5e7953ca51c3)
                check_type(argname="argument field_name", value=field_name, expected_type=type_hints["field_name"])
                check_type(argname="argument sort_mode", value=sort_mode, expected_type=type_hints["sort_mode"])
                check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "field_name": field_name,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: fieldName: Sorted field name.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sort_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortMode: Sorting method when there are multiple values in the field.
            '''
            result = self._values.get("sort_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "points": "points",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class GeoDistanceSortProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            points: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
            sort_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param points: 
            :param sort_mode: 
            :param sort_order: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8c79ac8f505efcf98dc80ec763a90541e30f5d5d6b7b0b6cb82548678ae36aee)
                check_type(argname="argument field_name", value=field_name, expected_type=type_hints["field_name"])
                check_type(argname="argument points", value=points, expected_type=type_hints["points"])
                check_type(argname="argument sort_mode", value=sort_mode, expected_type=type_hints["sort_mode"])
                check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "field_name": field_name,
                "points": points,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: fieldName: Sorted field name.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def points(
            self,
        ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: points: The parameter of GeoDistanceSort
            '''
            result = self._values.get("points")
            assert result is not None, "Required property 'points' is missing"
            return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sort_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortMode: Sorting method when there are multiple values in the field.
            '''
            result = self._values.get("sort_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GeoDistanceSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty",
        jsii_struct_bases=[],
        name_mapping={"routing_fields": "routingFields"},
    )
    class IndexSettingProperty:
        def __init__(
            self,
            *,
            routing_fields: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param routing_fields: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__178be855370c988e5da7b0d3d03373255ab0d8c910f8ef1b48afb79c84d49b46)
                check_type(argname="argument routing_fields", value=routing_fields, expected_type=type_hints["routing_fields"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if routing_fields is not None:
                self._values["routing_fields"] = routing_fields

        @builtins.property
        def routing_fields(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            routingFields: You can use this advanced feature to customize routing fields.
            You can specify some primary key columns as routing fields.
            Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
            The data with the same routing field values is distributed to the same data partition.
            '''
            result = self._values.get("routing_fields")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSettingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sorters": "sorters"},
    )
    class IndexSortProperty:
        def __init__(
            self,
            *,
            sorters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.SortersProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param sorters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4dfc1133588f39797394fa77b0bf099640f2232107c55c3d66a62797e7880522)
                check_type(argname="argument sorters", value=sorters, expected_type=type_hints["sorters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "sorters": sorters,
            }

        @builtins.property
        def sorters(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.SortersProperty"]]]:
            '''
            :Property:

            sorters: This parameter specifies the sorting methods.  Valid values:

            - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
            - FieldSort: The index is sorted by a specified column in ascending or descending order.
            '''
            result = self._values.get("sorters")
            assert result is not None, "Required property 'sorters' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.SortersProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class PrimaryKeySortProperty:
        def __init__(
            self,
            *,
            sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sort_order: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3d370cff0c4ba5c6f6e0748bcc2af0581e36ab5dd67d9d86d8dc1946fff03bf2)
                check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeySortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class ScoreSortProperty:
        def __init__(
            self,
            *,
            sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sort_order: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__607fc5ef4ae5c13da583f9e607fdfa8da968f264694359e86ece989d2aededd5)
                check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScoreSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_sort": "fieldSort",
            "geo_distance_sort": "geoDistanceSort",
            "primary_key_sort": "primaryKeySort",
            "score_sort": "scoreSort",
        },
    )
    class SortersProperty:
        def __init__(
            self,
            *,
            field_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.FieldSortProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            geo_distance_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.GeoDistanceSortProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            primary_key_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.PrimaryKeySortProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            score_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosSearchIndex.ScoreSortProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param field_sort: 
            :param geo_distance_sort: 
            :param primary_key_sort: 
            :param score_sort: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__433523e2d9e3b86d97c342621a48d873389b45bc49a12465d650f10b6c4de156)
                check_type(argname="argument field_sort", value=field_sort, expected_type=type_hints["field_sort"])
                check_type(argname="argument geo_distance_sort", value=geo_distance_sort, expected_type=type_hints["geo_distance_sort"])
                check_type(argname="argument primary_key_sort", value=primary_key_sort, expected_type=type_hints["primary_key_sort"])
                check_type(argname="argument score_sort", value=score_sort, expected_type=type_hints["score_sort"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if field_sort is not None:
                self._values["field_sort"] = field_sort
            if geo_distance_sort is not None:
                self._values["geo_distance_sort"] = geo_distance_sort
            if primary_key_sort is not None:
                self._values["primary_key_sort"] = primary_key_sort
            if score_sort is not None:
                self._values["score_sort"] = score_sort

        @builtins.property
        def field_sort(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.FieldSortProperty"]]:
            '''
            :Property:

            fieldSort: Sort by field value.
            Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
            '''
            result = self._values.get("field_sort")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.FieldSortProperty"]], result)

        @builtins.property
        def geo_distance_sort(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]]:
            '''
            :Property: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            '''
            result = self._values.get("geo_distance_sort")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]], result)

        @builtins.property
        def primary_key_sort(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]]:
            '''
            :Property: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            '''
            result = self._values.get("primary_key_sort")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]], result)

        @builtins.property
        def score_sort(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.ScoreSortProperty"]]:
            '''
            :Property:

            scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
            ScoreSort is applicable to scenarios such as full-text indexing.
            Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
            '''
            result = self._values.get("score_sort")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSearchIndex.ScoreSortProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SortersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "field_type": "fieldType",
            "analyzer": "analyzer",
            "enable_sort_and_agg": "enableSortAndAgg",
            "index": "index",
            "is_array": "isArray",
            "store": "store",
        },
    )
    class SubFieldSchemasProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            field_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            analyzer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            index: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_array: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param field_type: 
            :param analyzer: 
            :param enable_sort_and_agg: 
            :param index: 
            :param is_array: 
            :param store: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__52c19a0694d07fb1b45ec3deeb8c01dd9d999933fe64398d51e35975b96c8fc9)
                check_type(argname="argument field_name", value=field_name, expected_type=type_hints["field_name"])
                check_type(argname="argument field_type", value=field_type, expected_type=type_hints["field_type"])
                check_type(argname="argument analyzer", value=analyzer, expected_type=type_hints["analyzer"])
                check_type(argname="argument enable_sort_and_agg", value=enable_sort_and_agg, expected_type=type_hints["enable_sort_and_agg"])
                check_type(argname="argument index", value=index, expected_type=type_hints["index"])
                check_type(argname="argument is_array", value=is_array, expected_type=type_hints["is_array"])
                check_type(argname="argument store", value=store, expected_type=type_hints["store"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "field_name": field_name,
                "field_type": field_type,
            }
            if analyzer is not None:
                self._values["analyzer"] = analyzer
            if enable_sort_and_agg is not None:
                self._values["enable_sort_and_agg"] = enable_sort_and_agg
            if index is not None:
                self._values["index"] = index
            if is_array is not None:
                self._values["is_array"] = is_array
            if store is not None:
                self._values["store"] = store

        @builtins.property
        def field_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            fieldName: This parameter specifies the name of the field (column) to index.
            The field can be a primary key column or an attribute column.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def field_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            fieldType: This parameter specifies the type of the field. Type: FieldType.
            For more information, see the description of field types for a search index.
            '''
            result = self._values.get("field_type")
            assert result is not None, "Required property 'field_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def analyzer(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            analyzer: This parameter specifies the tokenizer.
            You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            '''
            result = self._values.get("analyzer")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_sort_and_agg(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            '''
            result = self._values.get("enable_sort_and_agg")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def index(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            index: This parameter specifies whether to index the column.
            The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            '''
            result = self._values.get("index")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_array(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isArray: This parameter specifies whether the column is an array.
            A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            '''
            result = self._values.get("is_array")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            store: This parameter specifies whether to store the values of the field in the search index.
            A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            This configuration optimizes query performance.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubFieldSchemasProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class RosSearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.FieldSchemasProperty, typing.Dict[builtins.str, typing.Any]]]]],
        index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        index_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        index_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: 
        :param index_name: 
        :param instance_name: 
        :param table_name: 
        :param index_setting: 
        :param index_sort: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a06013b76f7dff98046b893fdf4f1f96abe9dd64c4b40d8d5dcaa877cd4d688d)
            check_type(argname="argument field_schemas", value=field_schemas, expected_type=type_hints["field_schemas"])
            check_type(argname="argument index_name", value=index_name, expected_type=type_hints["index_name"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            check_type(argname="argument index_setting", value=index_setting, expected_type=type_hints["index_setting"])
            check_type(argname="argument index_sort", value=index_sort, expected_type=type_hints["index_sort"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.FieldSchemasProperty]]]:
        '''
        :Property: fieldSchemas: list of field_schema.
        '''
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.FieldSchemasProperty]]], result)

    @builtins.property
    def index_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: indexName: The index name.
        '''
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        '''
        :Property: indexSetting: Index settings
        '''
        result = self._values.get("index_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSettingProperty]], result)

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSortProperty]]:
        '''
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        result = self._values.get("index_sort")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSortProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosTable",
):
    '''A ROS template type:  ``ALIYUN::OTS::Table``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Table``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__942d70936ba25e16e879f9bab78615e3f27aa44a33330d3545b1b469df41f7aa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bbc68cc9ebf1446c032f6b59c25532412a429866597c938bed451f6f2420204a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TableName: Table name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTableName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__808951174fc7e1554f25824be98da7835bd81fb01baf779eb2a79411253c5b1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9445acde0eeb66012f4a6bd941241879f92ad6350fccc3ed9b35ddbbc2616fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="primaryKey")
    def primary_key(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PrimaryKeyProperty"]]]:
        '''
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PrimaryKeyProperty"]]], jsii.get(self, "primaryKey"))

    @primary_key.setter
    def primary_key(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PrimaryKeyProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__228c72c4dd236b2d7d9b35aeb8117a094169058f3db7103201255a7aa82527b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryKey", value)

    @builtins.property
    @jsii.member(jsii_name="tableName")
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "tableName"))

    @table_name.setter
    def table_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de49f52264e1b13d2d7d37338ba9894e8eece710d3a74b9afac608c62fa1b8ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tableName", value)

    @builtins.property
    @jsii.member(jsii_name="columns")
    def columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]]]:
        '''
        :Property: columns: Attribute column for table store.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]]], jsii.get(self, "columns"))

    @columns.setter
    def columns(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a43e7e850c950467f7ae754277bc5e1536eaca443c6d33178253ff0c82e2cf31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "columns", value)

    @builtins.property
    @jsii.member(jsii_name="deviationCellVersionInSec")
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deviationCellVersionInSec"))

    @deviation_cell_version_in_sec.setter
    def deviation_cell_version_in_sec(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__805d288a16482c8d63466d0f128f72bddd2f864200bae463f3defa9155714086)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deviationCellVersionInSec", value)

    @builtins.property
    @jsii.member(jsii_name="maxVersions")
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxVersions"))

    @max_versions.setter
    def max_versions(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36624b0de2023968709a70503821168de7e44318807bebba80d7bbf73d6af4cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxVersions", value)

    @builtins.property
    @jsii.member(jsii_name="reservedThroughput")
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ReservedThroughputProperty"]]:
        '''
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ReservedThroughputProperty"]], jsii.get(self, "reservedThroughput"))

    @reserved_throughput.setter
    def reserved_throughput(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ReservedThroughputProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7902a638f3f8a877e4679ed485a5d1b2d637f46d26fd0cc34163ed2c283c0fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reservedThroughput", value)

    @builtins.property
    @jsii.member(jsii_name="secondaryIndices")
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SecondaryIndicesProperty"]]]]:
        '''
        :Property: secondaryIndices: The secondary indices of the table.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SecondaryIndicesProperty"]]]], jsii.get(self, "secondaryIndices"))

    @secondary_indices.setter
    def secondary_indices(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SecondaryIndicesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c10f8ce9bd70813389273722192e29fe5360de8479c230fc5570424be0dd294)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondaryIndices", value)

    @builtins.property
    @jsii.member(jsii_name="timeToLive")
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeToLive"))

    @time_to_live.setter
    def time_to_live(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58bbf0a0acee3ce42c117e86af6252e8e7d594c3a4371a36c0b49fb9fa77b808)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeToLive", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class ColumnsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__de3c0ce2ad6aed6af0788da728958d721fa2ea0c46d68f2d91d899e296fda0e9)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The column name of the column.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of the column.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class PrimaryKeyProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ab68d3154f6bec2c424bb278ef3efa23048384ac51afd2e9fe36b33241f23e62)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Name for primary key.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty",
        jsii_struct_bases=[],
        name_mapping={"read": "read", "write": "write"},
    )
    class ReservedThroughputProperty:
        def __init__(
            self,
            *,
            read: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            write: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param read: 
            :param write: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ef0245cd6b3017da753c40900f427762af74086ac05f15758a7bb433169e8b0e)
                check_type(argname="argument read", value=read, expected_type=type_hints["read"])
                check_type(argname="argument write", value=write, expected_type=type_hints["write"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "read": read,
                "write": write,
            }

        @builtins.property
        def read(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            '''
            result = self._values.get("read")
            assert result is not None, "Required property 'read' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def write(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            '''
            result = self._values.get("write")
            assert result is not None, "Required property 'write' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReservedThroughputProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "columns": "columns",
            "index_name": "indexName",
            "primary_keys": "primaryKeys",
            "index_type": "indexType",
        },
    )
    class SecondaryIndicesProperty:
        def __init__(
            self,
            *,
            columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            primary_keys: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            index_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param columns: 
            :param index_name: 
            :param primary_keys: 
            :param index_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__23100eb550c13dab7ac8d76549cebb49fe49dd337dee6e6ec93b24f274fdfff8)
                check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
                check_type(argname="argument index_name", value=index_name, expected_type=type_hints["index_name"])
                check_type(argname="argument primary_keys", value=primary_keys, expected_type=type_hints["primary_keys"])
                check_type(argname="argument index_type", value=index_type, expected_type=type_hints["index_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "columns": columns,
                "index_name": index_name,
                "primary_keys": primary_keys,
            }
            if index_type is not None:
                self._values["index_type"] = index_type

        @builtins.property
        def columns(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: columns: The columns of the index.
            '''
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def index_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: indexName: The index name.
            '''
            result = self._values.get("index_name")
            assert result is not None, "Required property 'index_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def primary_keys(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: primaryKeys: The primary keys of the index.
            '''
            result = self._values.get("primary_keys")
            assert result is not None, "Required property 'primary_keys' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def index_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: indexType: The index type
            '''
            result = self._values.get("index_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecondaryIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class RosTableProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_key: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PrimaryKeyProperty, typing.Dict[builtins.str, typing.Any]]]]],
        table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_versions: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserved_throughput: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ReservedThroughputProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        secondary_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SecondaryIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        time_to_live: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: 
        :param primary_key: 
        :param table_name: 
        :param columns: 
        :param deviation_cell_version_in_sec: 
        :param max_versions: 
        :param reserved_throughput: 
        :param secondary_indices: 
        :param time_to_live: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c72d09428c5a42b338690812a4cbfc3a70dc96578a706bd8677409d24f187c4d)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument primary_key", value=primary_key, expected_type=type_hints["primary_key"])
            check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
            check_type(argname="argument deviation_cell_version_in_sec", value=deviation_cell_version_in_sec, expected_type=type_hints["deviation_cell_version_in_sec"])
            check_type(argname="argument max_versions", value=max_versions, expected_type=type_hints["max_versions"])
            check_type(argname="argument reserved_throughput", value=reserved_throughput, expected_type=type_hints["reserved_throughput"])
            check_type(argname="argument secondary_indices", value=secondary_indices, expected_type=type_hints["secondary_indices"])
            check_type(argname="argument time_to_live", value=time_to_live, expected_type=type_hints["time_to_live"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.PrimaryKeyProperty]]]:
        '''
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        '''
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.PrimaryKeyProperty]]], result)

    @builtins.property
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ColumnsProperty]]]]:
        '''
        :Property: columns: Attribute column for table store.
        '''
        result = self._values.get("columns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ColumnsProperty]]]], result)

    @builtins.property
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        result = self._values.get("deviation_cell_version_in_sec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        '''
        result = self._values.get("max_versions")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ReservedThroughputProperty]]:
        '''
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        '''
        result = self._values.get("reserved_throughput")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ReservedThroughputProperty]], result)

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        '''
        :Property: secondaryIndices: The secondary indices of the table.
        '''
        result = self._values.get("secondary_indices")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SecondaryIndicesProperty]]]], result)

    @builtins.property
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        result = self._values.get("time_to_live")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcBinder(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder",
):
    '''A ROS template type:  ``ALIYUN::OTS::VpcBinder``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcBinderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::VpcBinder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9b6c5cb4abe285313d8e76294034490004124d37818881467f59a701555b7c4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ca778f66bbb18bbdbdfae0c2f97ece998c592f702095405ddcafdd0f8c13ef3f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domains: The domain names used to access the OTS instance in the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoints: Private network addresses used to access the OTS instance in the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoints"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__64f6d2889596350a1ee3bb3574e1abeedc5d76e87d99dad38aa20f04a10be9ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7d9f2d05db9f2acf593eb65d9cf1d1f1e234dcec069fab7f2306380f2f0bb45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcs")
    def vpcs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcBinder.VpcsProperty"]]]:
        '''
        :Property: vpcs: Vpc binding configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcBinder.VpcsProperty"]]], jsii.get(self, "vpcs"))

    @vpcs.setter
    def vpcs(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcBinder.VpcsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da10b0ea83a082a5bbc0beb96385dd20037d6815a6f260210d9ebe2e216e049e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_vpc_name": "instanceVpcName",
            "network": "network",
            "virtual_switch_id": "virtualSwitchId",
            "vpc_id": "vpcId",
        },
    )
    class VpcsProperty:
        def __init__(
            self,
            *,
            instance_vpc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            network: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            virtual_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param instance_vpc_name: 
            :param network: 
            :param virtual_switch_id: 
            :param vpc_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0800255a7215392f57ce3477a30e54851cdea1a977e221810666e65e26d4cd68)
                check_type(argname="argument instance_vpc_name", value=instance_vpc_name, expected_type=type_hints["instance_vpc_name"])
                check_type(argname="argument network", value=network, expected_type=type_hints["network"])
                check_type(argname="argument virtual_switch_id", value=virtual_switch_id, expected_type=type_hints["virtual_switch_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_vpc_name": instance_vpc_name,
                "network": network,
                "virtual_switch_id": virtual_switch_id,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def instance_vpc_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceVpcName: Custom name, need to be unique under the OTS instance.
            '''
            result = self._values.get("instance_vpc_name")
            assert result is not None, "Required property 'instance_vpc_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def network(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            network: Instance network type. The values are as follows:
            1, the NORMAL instance does not limit the source of the request. (Defaults)
            2. A VPC instance only allows requests from all VPCs it is bound to.
            3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
            '''
            result = self._values.get("network")
            assert result is not None, "Required property 'network' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def virtual_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: virtualSwitchId: vSwitch Id.
            '''
            result = self._values.get("virtual_switch_id")
            assert result is not None, "Required property 'virtual_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: Vpc Id.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class RosVpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpcs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcBinder.VpcsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: 
        :param vpcs: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac8d643185e3d557850f2c6e18e9bd112720ea7465d7b8381bf74747766d26d4)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpcs", value=vpcs, expected_type=type_hints["vpcs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcBinder.VpcsProperty]]]:
        '''
        :Property: vpcs: Vpc binding configuration.
        '''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcBinder.VpcsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SearchIndex(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.SearchIndex",
):
    '''A ROS resource type:  ``ALIYUN::OTS::SearchIndex``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SearchIndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::SearchIndex``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b23b7de2f0835846f2fdb20878e9350a502988c0176a4eff971d8e27031f54d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IndexName: Index name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.SearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class SearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.FieldSchemasProperty, typing.Dict[builtins.str, typing.Any]]]]],
        index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        index_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        index_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: Property fieldSchemas: list of field_schema.
        :param index_name: Property indexName: The index name.
        :param instance_name: Property instanceName: The name of the OTS instance in which table will locate.
        :param table_name: Property tableName: The table name of the OTS instance.
        :param index_setting: Property indexSetting: Index settings.
        :param index_sort: Property indexSort: This parameter specifies how data is sorted. By default, the data is sorted in the same way as the primary key of the table. If the search index contains NESTED fields, data is not sorted by default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__659d94f94af57f5c008e75b5f8a04e2930361fb64934e8c09bcef0e0b19457f7)
            check_type(argname="argument field_schemas", value=field_schemas, expected_type=type_hints["field_schemas"])
            check_type(argname="argument index_name", value=index_name, expected_type=type_hints["index_name"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            check_type(argname="argument index_setting", value=index_setting, expected_type=type_hints["index_setting"])
            check_type(argname="argument index_sort", value=index_sort, expected_type=type_hints["index_sort"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.FieldSchemasProperty]]]:
        '''Property fieldSchemas: list of field_schema.'''
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.FieldSchemasProperty]]], result)

    @builtins.property
    def index_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property indexName: The index name.'''
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the OTS instance in which table will locate.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property tableName: The table name of the OTS instance.'''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        '''Property indexSetting: Index settings.'''
        result = self._values.get("index_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSettingProperty]], result)

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSortProperty]]:
        '''Property indexSort: This parameter specifies how data is sorted.

        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        result = self._values.get("index_sort")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSortProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.Table",
):
    '''A ROS resource type:  ``ALIYUN::OTS::Table``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Table``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e54ec22bee58fcbede4c84ba07654baf9c580034f65cc7c499f14af388248eb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TableName: Table name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTableName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.TableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class TableProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_key: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PrimaryKeyProperty, typing.Dict[builtins.str, typing.Any]]]]],
        table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_versions: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserved_throughput: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ReservedThroughputProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        secondary_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SecondaryIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        time_to_live: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: Property instanceName: The name of the OTS instance in which table will locate.
        :param primary_key: Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        :param table_name: Property tableName: The table name of the OTS instance.
        :param columns: Property columns: Attribute column for table store.
        :param deviation_cell_version_in_sec: Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        :param max_versions: Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        :param reserved_throughput: Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        :param secondary_indices: Property secondaryIndices: The secondary indices of the table.
        :param time_to_live: Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61a0c78ed3bddea55333349cd993d3216f0765c6c64e7d2bb86e86867c59a3c4)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument primary_key", value=primary_key, expected_type=type_hints["primary_key"])
            check_type(argname="argument table_name", value=table_name, expected_type=type_hints["table_name"])
            check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
            check_type(argname="argument deviation_cell_version_in_sec", value=deviation_cell_version_in_sec, expected_type=type_hints["deviation_cell_version_in_sec"])
            check_type(argname="argument max_versions", value=max_versions, expected_type=type_hints["max_versions"])
            check_type(argname="argument reserved_throughput", value=reserved_throughput, expected_type=type_hints["reserved_throughput"])
            check_type(argname="argument secondary_indices", value=secondary_indices, expected_type=type_hints["secondary_indices"])
            check_type(argname="argument time_to_live", value=time_to_live, expected_type=type_hints["time_to_live"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the OTS instance in which table will locate.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.PrimaryKeyProperty]]]:
        '''Property primaryKey: It describes the attribute value of primary key.

        The number of primary_key should not be less than one and not be more than four.
        '''
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.PrimaryKeyProperty]]], result)

    @builtins.property
    def table_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property tableName: The table name of the OTS instance.'''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ColumnsProperty]]]]:
        '''Property columns: Attribute column for table store.'''
        result = self._values.get("columns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ColumnsProperty]]]], result)

    @builtins.property
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deviationCellVersionInSec: Maximum version deviation.

        The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        result = self._values.get("deviation_cell_version_in_sec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxVersions: The maximum number of versions stored in this table.

        The valid value is 1-2147483647. Default to 1.
        '''
        result = self._values.get("max_versions")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ReservedThroughputProperty]]:
        '''Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.'''
        result = self._values.get("reserved_throughput")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ReservedThroughputProperty]], result)

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        '''Property secondaryIndices: The secondary indices of the table.'''
        result = self._values.get("secondary_indices")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SecondaryIndicesProperty]]]], result)

    @builtins.property
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeToLive: The retention time of data stored in this table (unit: second).

        The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        result = self._values.get("time_to_live")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcBinder(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.VpcBinder",
):
    '''A ROS resource type:  ``ALIYUN::OTS::VpcBinder``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcBinderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::VpcBinder``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b82e6ab4b3287515b34dc778f6d11641a78a5f93c8bfa57a29d8fd059cb4ab4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domains: The domain names used to access the OTS instance in the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoints"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.VpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class VpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpcs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcBinder.VpcsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: Property instanceName: Instance name.
        :param vpcs: Property vpcs: Vpc binding configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c31e43066702d96cf100a1ecf212aa6cde89ea9bee429b57f756138912a1cd40)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpcs", value=vpcs, expected_type=type_hints["vpcs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: Instance name.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcBinder.VpcsProperty]]]:
        '''Property vpcs: Vpc binding configuration.'''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcBinder.VpcsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosSearchIndex",
    "RosSearchIndexProps",
    "RosTable",
    "RosTableProps",
    "RosVpcBinder",
    "RosVpcBinderProps",
    "SearchIndex",
    "SearchIndexProps",
    "Table",
    "TableProps",
    "VpcBinder",
    "VpcBinderProps",
]

publication.publish()

def _typecheckingstub__5ba3d1216390b141d4f3daeb8301ea5134ca8af9f9019bdceda451d99bfe8ec7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a78c2426eed093f45184b73eb7ef16c656e8f408a390a2d8f7b7dbe504f44d3a(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e069dbcb2422faa6652f0bd5d3f932ee351f0a16076e21ec5359421e142b19cf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e73ce629b7c2bda130c56f5eee9bc4503d5f5c0781778f7ea47c28710aeee23c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97ffff63ac8d5f8a36958093f948f40edfce2193766dd82c2d758726d9d19032(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd18ed5e57cad26ad23103e30398bacbe15934f2f6c134d21732ce21904b4d21(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313b28f96af253980b6be8b496f0cc9035ac5011a30ca8f21fbe657e9964dbb8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea002c55ee14934e698fa72e75abdb6aa6a85baa669b95548b88f1cfea70292f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd5cca86302a35b22d9ae70362889ebd959379df66a23c6742f0a329d1aa63de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d194fc372165a39022509ef18cf783722c5da67a6875fb9b0adb27b66d5a5c1e(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__126f05826f3fcc1e5f449c1bfca1cec31419777ce0e1c9d14ea5b7168689a2e3(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f0bd712b0d57e1aa9e76ba3def033ed588dc1211235c72af31a6ad1de183e5d(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e989230a9c7cadb0fe2751469944123998f3f563c3b832f333e94e1e61a339e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSearchIndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f174325dd706e9ab3f18ee9b8095b3ed7f76d4e5727c22c925e486885655724(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24d202e8242e0c851434547fd7ee694239d011ea16b92c9ca92052f349867461(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ccab90dc0071e7e988023cd7e5f5dfcb63e55207629266fe2f3a05aecd88296(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.FieldSchemasProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6ac910a90655352237ec30c4e1b9e349d9e09e5b6198b287518ae3ea695bdab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab0ef82686f2283d751a785828b4c4f9ccc2e8dd33247f840120272b24be94dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d6fd8f47fddd452b386274f1ed5760d400f38ec8c0f2ce40291d5776725d9e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be72777c5ec3dcb811c67179ebf2915d3e2dd2135b88d6cf75bdcc8ef7f0409d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSettingProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d708a4dbc290e6e29d6a4bce66c9442519aecee4f1947e24d645c250df8df51(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSearchIndex.IndexSortProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62df04ee3f2cb3389ded462ba9e4bfc204ae31134366550d47d6be2a52768b91(
    *,
    field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    field_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    analyzer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    index: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_array: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    store: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_field_schemas: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.SubFieldSchemasProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acd25d6ae0d18ef262d14cc296bfc7cbd8f9c72e1e49d50e921a5e7953ca51c3(
    *,
    field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sort_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c79ac8f505efcf98dc80ec763a90541e30f5d5d6b7b0b6cb82548678ae36aee(
    *,
    field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    points: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    sort_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__178be855370c988e5da7b0d3d03373255ab0d8c910f8ef1b48afb79c84d49b46(
    *,
    routing_fields: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dfc1133588f39797394fa77b0bf099640f2232107c55c3d66a62797e7880522(
    *,
    sorters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.SortersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d370cff0c4ba5c6f6e0748bcc2af0581e36ab5dd67d9d86d8dc1946fff03bf2(
    *,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607fc5ef4ae5c13da583f9e607fdfa8da968f264694359e86ece989d2aededd5(
    *,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__433523e2d9e3b86d97c342621a48d873389b45bc49a12465d650f10b6c4de156(
    *,
    field_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.FieldSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    geo_distance_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.GeoDistanceSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    primary_key_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.PrimaryKeySortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    score_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.ScoreSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52c19a0694d07fb1b45ec3deeb8c01dd9d999933fe64398d51e35975b96c8fc9(
    *,
    field_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    field_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    analyzer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    index: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_array: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    store: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a06013b76f7dff98046b893fdf4f1f96abe9dd64c4b40d8d5dcaa877cd4d688d(
    *,
    field_schemas: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.FieldSchemasProperty, typing.Dict[builtins.str, typing.Any]]]]],
    index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    index_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    index_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__942d70936ba25e16e879f9bab78615e3f27aa44a33330d3545b1b469df41f7aa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbc68cc9ebf1446c032f6b59c25532412a429866597c938bed451f6f2420204a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__808951174fc7e1554f25824be98da7835bd81fb01baf779eb2a79411253c5b1f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9445acde0eeb66012f4a6bd941241879f92ad6350fccc3ed9b35ddbbc2616fa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__228c72c4dd236b2d7d9b35aeb8117a094169058f3db7103201255a7aa82527b9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.PrimaryKeyProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de49f52264e1b13d2d7d37338ba9894e8eece710d3a74b9afac608c62fa1b8ec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a43e7e850c950467f7ae754277bc5e1536eaca443c6d33178253ff0c82e2cf31(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ColumnsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__805d288a16482c8d63466d0f128f72bddd2f864200bae463f3defa9155714086(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36624b0de2023968709a70503821168de7e44318807bebba80d7bbf73d6af4cc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7902a638f3f8a877e4679ed485a5d1b2d637f46d26fd0cc34163ed2c283c0fd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.ReservedThroughputProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c10f8ce9bd70813389273722192e29fe5360de8479c230fc5570424be0dd294(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SecondaryIndicesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58bbf0a0acee3ce42c117e86af6252e8e7d594c3a4371a36c0b49fb9fa77b808(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de3c0ce2ad6aed6af0788da728958d721fa2ea0c46d68f2d91d899e296fda0e9(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab68d3154f6bec2c424bb278ef3efa23048384ac51afd2e9fe36b33241f23e62(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef0245cd6b3017da753c40900f427762af74086ac05f15758a7bb433169e8b0e(
    *,
    read: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    write: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23100eb550c13dab7ac8d76549cebb49fe49dd337dee6e6ec93b24f274fdfff8(
    *,
    columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_keys: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    index_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c72d09428c5a42b338690812a4cbfc3a70dc96578a706bd8677409d24f187c4d(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_key: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PrimaryKeyProperty, typing.Dict[builtins.str, typing.Any]]]]],
    table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_versions: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserved_throughput: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ReservedThroughputProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    secondary_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SecondaryIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    time_to_live: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9b6c5cb4abe285313d8e76294034490004124d37818881467f59a701555b7c4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcBinderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca778f66bbb18bbdbdfae0c2f97ece998c592f702095405ddcafdd0f8c13ef3f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64f6d2889596350a1ee3bb3574e1abeedc5d76e87d99dad38aa20f04a10be9ce(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7d9f2d05db9f2acf593eb65d9cf1d1f1e234dcec069fab7f2306380f2f0bb45(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da10b0ea83a082a5bbc0beb96385dd20037d6815a6f260210d9ebe2e216e049e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcBinder.VpcsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0800255a7215392f57ce3477a30e54851cdea1a977e221810666e65e26d4cd68(
    *,
    instance_vpc_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac8d643185e3d557850f2c6e18e9bd112720ea7465d7b8381bf74747766d26d4(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpcs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcBinder.VpcsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b23b7de2f0835846f2fdb20878e9350a502988c0176a4eff971d8e27031f54d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SearchIndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__659d94f94af57f5c008e75b5f8a04e2930361fb64934e8c09bcef0e0b19457f7(
    *,
    field_schemas: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.FieldSchemasProperty, typing.Dict[builtins.str, typing.Any]]]]],
    index_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    index_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSettingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    index_sort: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSearchIndex.IndexSortProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e54ec22bee58fcbede4c84ba07654baf9c580034f65cc7c499f14af388248eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61a0c78ed3bddea55333349cd993d3216f0765c6c64e7d2bb86e86867c59a3c4(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_key: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PrimaryKeyProperty, typing.Dict[builtins.str, typing.Any]]]]],
    table_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_versions: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserved_throughput: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ReservedThroughputProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    secondary_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SecondaryIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    time_to_live: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b82e6ab4b3287515b34dc778f6d11641a78a5f93c8bfa57a29d8fd059cb4ab4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VpcBinderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c31e43066702d96cf100a1ecf212aa6cde89ea9bee429b57f756138912a1cd40(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpcs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcBinder.VpcsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass
